import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user.service';
import { StatusCode } from 'src/common/enums';
import { Message } from 'src/common/message.const';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const user = await this.userService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException({
        status: StatusCode.ERROR,
        message: Message.ACCOUNT_NOT_EXISTS,
      });
    }
    return user;
  }
}
