import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AllDto } from "../storages/storages.dto";
import { Account } from "./account.entity";
import { AccountService } from "./account.service";

@Controller('account')
export class AccountController {
    constructor(private service: AccountService) {}

    
    @Get()
    async all(@Query() query: AllDto) {
      return await this.service.all(query);
    }
  
    @Get(':id')
    async byId(@Param('id') id: number) {
        return await this.service.byId(id);
    }

    @Post()
    async create(@Body() data: Account) {
        return await this.service.create(data);
    }

    @Put(':id')
    async update(@Body() data: Account, @Param('id') id: number) {
        return await this.service.update(data, id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}