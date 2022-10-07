import { Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @UpdateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}