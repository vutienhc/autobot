import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Account } from "../account/account.entity";

@Entity()
export class Proxy extends BaseEntity {
    @Column()
    ip: string;

    @Column()
    port: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    country: string;

    @Column()
    status: boolean;

    @OneToMany(() => Account, (account) => account.proxy)
    account: Account[];
}