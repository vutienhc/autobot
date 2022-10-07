import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { StorageModule } from './modules/storages/storages.module';
import { CategoryModule } from './modules/category/category.module';
import { PostModule } from './modules/post/post.module';
import { AccountModule } from './modules/account/account.module';
import { ChannelModule } from './modules/channel/channel.module';
import { ProxyModule } from './modules/proxy/proxy.module';
import { UserAgentModule } from './modules/user-agent/useragent.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('HOST'),
        port: 3306,
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    StorageModule,
    CategoryModule,
    PostModule,
    AccountModule,
    ChannelModule,
    ProxyModule,
    UserAgentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
