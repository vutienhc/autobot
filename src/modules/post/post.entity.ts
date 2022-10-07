import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../account/account.entity";
import { Channel } from "../channel/channal.entity";
import { Source } from "../source/source.entity";

@Entity('posts')
export class Posts extends BaseEntity {
    @Column()
    source_id: number;

    @Column()
    account_id: number;

    @Column()
    channel_id: number;

    @Column()
    post_date: Date;

    @Column()
    status: boolean;

    @Column()
    name: string;

    @Column()
    descreption: string;

    @ManyToOne(() => Source, (source) => source.post)
    source: Source;

    @ManyToOne(() => Account, (account) => account.post)
    account: Account;

    @ManyToOne(() => Channel, (channel) => channel.post)
    channel: Channel;
}