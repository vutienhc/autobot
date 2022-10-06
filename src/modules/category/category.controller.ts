import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AllDto } from "../storages/storages.dto";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(private service: CategoryService){}

    @Get()
    async all(@Query() query: AllDto) {
      return await this.service.all(query);
    }

    @Get(':id')
    async byId(@Param('id') id: number) {
        return await this.service.byId(id);
    }
  
    @Post()
    async create(@Body() data: Category) {
        return await this.service.create(data);
    }

    @Put(':id')
    async update(@Body() data: Category, @Param('id') id: number) {
        return await this.service.update(data, id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}