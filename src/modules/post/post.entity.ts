import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

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
}