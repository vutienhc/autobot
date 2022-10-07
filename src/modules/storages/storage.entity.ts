import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Source } from '../source/source.entity';

@Entity('storages')
export class Storages extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @Column()
  type: number;

  @OneToMany(() => Source, (source)=> source.storage)
  source: Source[];
}
