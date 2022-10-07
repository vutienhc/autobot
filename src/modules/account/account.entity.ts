import { channel } from "diagnostics_channel";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Channel } from "../channel/channal.entity";
import { Posts } from "../post/post.entity";
import { UserAgent } from "../user-agent/useragent.entity";
import { Proxy } from "../proxy/proxy.entity";
@Entity()
export class Account extends BaseEntity {
 @Column()
 type: number;

 @Column()
 username: string;

 @Column()
 cookie: string;

 @Column()
 token: string;

 @Column()
 proxy_id: string;

 @Column()
 password: string;

 @Column()
 avatar: string;

 @Column()
 name: string;

 @Column()
 s_id: string;

 @Column()
 useragent_id: string;

 @OneToMany(() => Posts, (post) => post.account)
 post: Posts[];

 @ManyToOne(() => Channel, (channel) => channel.account)
 channel: Channel;

 @ManyToOne(() => Proxy, (proxy) => proxy.account)
 proxy: Proxy;

 @ManyToOne(() => UserAgent, (useragent) => useragent.account)
 useragent: UserAgent;
}