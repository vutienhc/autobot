import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Storages } from './storage.entity';
import { AllDto } from './storages.dto';
import { StoragesService } from './storages.service';

@Controller('storages')
export class StoragesController {
  constructor(private service: StoragesService) {}

  @Get()
  async all(@Query() query: AllDto) {
    return await this.service.all(query);
  }

  @Post()
  async create(@Body() data: Storages) {
    return await this.service.create(data);
  }

  @Put(':id')
  async update(@Body() data: Storages, @Param('id') id: number) {
    return await this.service.update(data, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
