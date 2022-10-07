import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusCode } from 'src/common/enums';
import { MessageResult } from 'src/common/message-result';
import { Message } from 'src/common/message.const';
import { createPaginationObject } from 'src/common/pagination';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { FindUser } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userRepository.findOne({where: {email}});
    if (user && (pass === user.password)) {
      return {
        id: user.id,
        email: user.email,
      };
    }
    return null;
  }
  async register(data: RegisterDto) {
    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });
    if (user) {
      throw new BadRequestException({
        status: StatusCode.ERROR,
        message: Message.EMAIL_EXISTS,
      });
    }
    const createUser = await this.userRepository.save(data);
    if (createUser) {
      return new MessageResult(StatusCode.SUCCESS, Message.SUCCESS);
    }
  }

  async login(data: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });
    console.log(user);
    if (!user) {
      throw new BadRequestException({
        status: StatusCode.ERROR,
        message: Message.ACCOUNT_NOT_EXISTS,
      });
    }
    if (user.password !== data.password) {
      throw new BadRequestException({
        status: StatusCode.ERROR,
        message: Message.PASSWORD_NOT_MATCH,
      });
    }
    const payload = {
      id: user.id,
      email: user.email,
    };

    const { accessToken, refreshToken } = await this.initAccessToken(payload);
    return {
      status: StatusCode.SUCCESS,
      message: Message.SUCCESS,
      accessToken,
      refreshToken,
    };
  }

  initAccessToken(payload, options?) {
    return {
      accessToken: this.jwtService.sign(payload, {
        ...options,
        secret: 'key',
        expiresIn: `10d`,
      }),
      refreshToken: this.jwtService.sign(payload, {
        ...options,
        secret: 'key',
        expiresIn: `30d`,
      }),
    };
  }

  async all(query: FindUser) {
    const limit = parseInt(query.limit) || 25;
    const page = parseInt(query.page) || 1;
    const q = this.userRepository.createQueryBuilder('user');

    if (query.email) {
      q.where('user.email like :name', {
        email: `%${query.email}%`,
      });
    }

    const [result, total] = await q
      .take(limit)
      .skip(limit * (page - 1))
      .orderBy('user.id', 'DESC')
      .getManyAndCount();

    return createPaginationObject(result, total, page, limit);
  }

  async update(data: RegisterDto, id: number) {
    const user = this.userRepository.findOne({ where: { id } });
    if (user) {
      await this.userRepository.update(id, data);
      return {
        status: StatusCode.SUCCESS,
        message: Message.SUCCESS,
      };
    } else {
      throw new BadRequestException({
        status: StatusCode.ERROR,
        message: Message.ACCOUNT_NOT_EXISTS,
      });
    }
  }

  async delete(id: number) {
    const user = this.userRepository.findOne({ where: { id } });
    if (user) {
      await this.userRepository.delete(id);
      return {
        status: StatusCode.SUCCESS,
        message: Message.SUCCESS,
      };
    } else {
      throw new BadRequestException({
        status: StatusCode.ERROR,
        message: Message.ACCOUNT_NOT_EXISTS,
      });
    }
  }

  async byId(id: number) {
    const user = this.userRepository.findOne({ where: { id } });
    return user;
  }
}
