import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Account } from "../account/account.entity";

@Entity('user_agent')
export class UserAgent extends BaseEntity {
    @Column()
    name: string;

    @OneToMany(() => Account, (account) => account.useragent)
    account: Account[];
}