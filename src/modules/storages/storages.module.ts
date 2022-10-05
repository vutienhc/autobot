import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Storage])],
  controllers: [],
  providers: [],
})
export class StorageModule {}
