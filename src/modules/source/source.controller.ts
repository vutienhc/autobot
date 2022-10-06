import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { Source } from "./source.entity";
import { SourceService } from "./source.service";

@Controller('source')
export class SourceController {
    constructor(private service: SourceService) { }

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