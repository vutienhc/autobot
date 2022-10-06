import { SourceType } from "src/common/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('source')
export class Source {
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
}