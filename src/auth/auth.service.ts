import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  //generate token

  generateToken(payload: any) {
    return this.jwtService.sign(payload);
  }
}
