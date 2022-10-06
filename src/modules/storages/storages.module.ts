import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoragesController } from './storages.controller';
import { StoragesService } from './storages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Storage])],
  controllers: [StoragesController],
  providers: [StoragesService],
})
export class StorageModule {}
