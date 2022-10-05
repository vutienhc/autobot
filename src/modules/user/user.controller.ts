import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { FindUser } from './dtos/user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() data: RegisterDto) {
    return await this.userService.register(data);
  }

  @Post('login')
  async login(@Body() data: LoginDto) {
    return await this.userService.login(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async all(@Query() query: FindUser) {
    return await this.userService.all(query);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Body() data: RegisterDto, @Param('id') id: number) {
    return await this.userService.update(data, id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
