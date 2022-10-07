import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategrys/jwt.strategrys';
import { LocalStrategy } from './strategrys/local.strategry';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    PassportModule,
  JwtModule.register({
    secret: 'key',
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [UserController],
  providers: [UserService, JwtService, LocalStrategy, JwtStrategy],
})
export class UserModule { }
