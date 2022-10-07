import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Channel } from "./channal.entity";
import { ChannelController } from "./channel.controller";
import { ChannelService } from "./channel.service";

@Module({
    imports: [TypeOrmModule.forFeature([Channel])],
    controllers: [ChannelController],
    providers: [ChannelService],
})
export class ChannelModule {}