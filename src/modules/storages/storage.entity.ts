import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('storages')
export class Storages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  key: string;

  @Column()
  type: number;
}
