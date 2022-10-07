import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AllDto } from "../storages/storages.dto";
import { Channel } from "./channal.entity";
import { ChannelService } from "./channel.service";

@Controller('channel')
export class ChannelController {
    constructor(private service: ChannelService){}

    @Get()
    async all(@Query() query: AllDto) {
      return await this.service.all(query);
    }
  
    @Get(':id')
    async byId(@Param('id') id: number) {
        return await this.service.byId(id);
    }

    @Post()
    async create(@Body() data: Channel) {
        return await this.service.create(data);
    }

    @Put(':id')
    async update(@Body() data: Channel, @Param('id') id: number) {
        return await this.service.update(data, id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}