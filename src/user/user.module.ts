import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { PassportLocalStrategy } from 'src/auth/passport.local.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PassportLocalStrategy, AuthService, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
