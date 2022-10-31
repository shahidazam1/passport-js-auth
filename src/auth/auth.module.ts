import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { PassportLocalStrategy } from './passport.local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  providers: [PassportLocalStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
