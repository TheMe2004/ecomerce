import { Injectable, NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { UserLoginDto } from './dto/login-user.dto';
import { UserRegisterDto } from './dto/register-user.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(params: UserLoginDto) {
    let user = await this.prisma.user.findUnique({
      where: { email: params.email },
    });
    if (!user) throw new NotFoundException('Email or password is wrong');

    let checkpassword = await bcrypt.compare(params.password, user.password);
    if (!checkpassword) throw new UnauthorizedException('Username or password is wrong');

    let token = this.jwt.sign({ userId: user.id });
    return { user, token };
  }

  async register(params: UserRegisterDto) {
    let checkemail = await this.prisma.user.findUnique({ where: { email: params.email } });
    if (checkemail) throw new ConflictException('This email is already registered');

    params.password = await bcrypt.hash(params.password, 10);

    let user = await this.prisma.user.create({
      data: params,
    });

    return user;
  }
}