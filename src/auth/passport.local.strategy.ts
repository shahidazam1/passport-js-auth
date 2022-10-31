import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(username);

    if (!user) throw new UnauthorizedException();
    if (user.password === pass) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
