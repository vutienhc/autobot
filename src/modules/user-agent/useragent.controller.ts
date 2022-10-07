import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AllDto } from "../storages/storages.dto";
import { UserAgent } from "./useragent.entity";
import { UserAgentService } from "./useragent.service";

@Controller('user-agent')
export class UserAgentController {
    constructor(private service: UserAgentService) {}

    @Get()
    async all(@Query() query: AllDto) {
      return await this.service.all(query);
    }
  
    @Get(':id')
    async byId(@Param('id') id: number) {
        return await this.service.byId(id);
    }

    @Post()
    async create(@Body() data: UserAgent) {
        return await this.service.create(data);
    }

    @Put(':id')
    async update(@Body() data: UserAgent, @Param('id') id: number) {
        return await this.service.update(data, id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}