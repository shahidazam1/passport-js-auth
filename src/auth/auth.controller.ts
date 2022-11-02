import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): any {
    const value = this.authService.generateToken({
      userId: req.user.id,
      email: req.user.email,
    });

    const data = {
      accessToken: value,
      userId: req.user.id,
    };
    return data;
  }
}
