import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Source } from "../source/source.entity";
import { BaseEntity } from "src/common/base.entity";

@Entity('category')
export class Category extends BaseEntity {
    @Column()
    name: string;

    @Column()
    parent_id: number;

    @OneToMany(() => Source, (source) => source.category)
    source: Source[];

    @OneToMany(() => Category, (category) => category.children)
    parent: Category[];

    @ManyToOne(() => Category, (category) => category.parent)
    children: Category;
}