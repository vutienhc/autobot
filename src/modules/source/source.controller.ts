import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AllDto } from "../storages/storages.dto";
import { Source } from "./source.entity";
import { SourceService } from "./source.service";

@Controller('source')
export class SourceController {
    constructor(private service: SourceService) { }

    @Get()
    async all(@Query() query: AllDto) {
      return await this.service.all(query);
    }
  
    @Get(':id')
    async byId(@Param('id') id: number) {
        return await this.service.byId(id);
    }

    @Post()
    async create(@Body() data: Source) {
        return await this.service.create(data);
    }

    @Put(':id')
    async update(@Body() data: Source, @Param('id') id: number) {
        return await this.service.update(data, id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}