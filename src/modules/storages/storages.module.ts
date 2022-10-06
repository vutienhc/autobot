import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoragesController } from './storages.controller';
import { StoragesService } from './storages.service';
import { Storages } from './storage.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Storages])],
  controllers: [StoragesController],
  providers: [StoragesService],
})
export class StorageModule {}
