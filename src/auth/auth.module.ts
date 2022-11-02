import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { PassportLocalStrategy } from './passport.local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
    }),
  ],
  providers: [PassportLocalStrategy, AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
