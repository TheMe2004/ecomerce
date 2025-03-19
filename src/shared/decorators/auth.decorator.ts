import { applyDecorators, UseGuards } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { AuthGuard } from '../guard/Auth.guard';
import { Roles } from './role.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';


export function Auth(...roles: UserRole[]) {
  return applyDecorators(
    UseGuards(AuthGuard),
    Roles(...roles),
    ApiBearerAuth(),
  );
}

export { Roles };
