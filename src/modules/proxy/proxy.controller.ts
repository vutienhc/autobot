import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AllDto } from "../storages/storages.dto";
import { Proxy } from "./proxy.entity";
import { ProxyService } from "./proxy.service";

@Controller('proxy')
export class ProxyController {
    constructor(private service: ProxyService){}
    
    @Get()
    async all(@Query() query: AllDto) {
      return await this.service.all(query);
    }
  
    @Get(':id')
    async byId(@Param('id') id: number) {
        return await this.service.byId(id);
    }

    @Post()
    async create(@Body() data: Proxy) {
        return await this.service.create(data);
    }

    @Put(':id')
    async update(@Body() data: Proxy, @Param('id') id: number) {
        return await this.service.update(data, id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}