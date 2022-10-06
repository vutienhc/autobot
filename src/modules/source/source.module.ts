import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SourceController } from "./source.controller";
import { Source } from "./source.entity";
import { SourceService } from "./source.service";

@Module({
    imports: [TypeOrmModule.forFeature([Source])],
    controllers: [SourceController],
    providers: [SourceService],
})
export class SourceModule {}
