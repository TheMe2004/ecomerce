import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
  ) {}

  userById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  list() {
    return this.prisma.user.findMany();
  }
}