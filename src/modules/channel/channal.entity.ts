import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Account } from "../account/account.entity";
import { Posts } from "../post/post.entity";

@Entity()
export class Channel extends BaseEntity {
    @Column()
    account_id: number;

    @Column()
    type: number;

    @Column()
    s_id: string;

    @OneToMany(() => Posts, (post) => post.channel)
    post: Posts[];

    @OneToMany(() => Account, (account) => account.channel)
    account: Account[];
}