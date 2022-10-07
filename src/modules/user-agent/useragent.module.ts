import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAgentController } from "./useragent.controller";
import { UserAgent } from "./useragent.entity";
import { UserAgentService } from "./useragent.service";


@Module({
    imports: [TypeOrmModule.forFeature([UserAgent])],
    controllers: [UserAgentController],
    providers: [UserAgentService],
})
export class UserAgentModule {}