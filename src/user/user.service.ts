import { AuthService } from './../auth/auth.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private authService: AuthService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const userCreated = await this.prismaService.user.create({
      data: {
        password: hashedPassword,
        name: createUserDto.name,
        email: createUserDto.email,
      },
    });

    const value = this.authService.generateToken({
      userId: userCreated.id,
      email: userCreated.email,
    });

    const data = {
      accessToken: value,
      userId: userCreated.id,
    };
    return data;
  }

  findAll() {
    return this.prismaService.user.findMany({
      include: {
        address: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.prismaService.user.delete({ where: { id } });
  }
}
