import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProxyController } from "./proxy.controller";
import { Proxy } from "./proxy.entity";
import { ProxyService } from "./proxy.service";

@Module({
    imports: [TypeOrmModule.forFeature([Proxy])],
    controllers: [ProxyController],
    providers: [ProxyService],
})
export class ProxyModule {}
