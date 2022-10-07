import { BaseEntity } from "src/common/base.entity";
import { SourceType } from "src/common/enums";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";
import { Posts } from "../post/post.entity";
import { Storages } from "../storages/storage.entity";

@Entity('source')
export class Source extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @Column()
    name: string;

    @Column()
    descreption: string;

    @Column({enum: SourceType})
    type: number

    @Column()
    storage_id: number;

    @Column()
    category_id: number;

    @Column()
    s_link: string;

    @ManyToOne(() => Category, (category) => category.source)
    category: Category;
    
    @ManyToOne(() => Storages, (storage) => storage.source)
    storage: Storages;

    @OneToMany(() => Posts, (post) => post.source)
    post: Posts[];

}