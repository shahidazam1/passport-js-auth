import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserDto: any) {
    return this.prismaService.user.create({ data: createUserDto });
  }
}
