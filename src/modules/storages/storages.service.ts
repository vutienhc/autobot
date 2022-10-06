import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusCode } from 'src/common/enums';
import { Message } from 'src/common/message.const';
import { createPaginationObject } from 'src/common/pagination';
import { Repository } from 'typeorm';
import { Storages } from './storage.entity';
import { AllDto } from './storages.dto';

@Injectable()
export class StoragesService {
  constructor(
    @InjectRepository(Storages)
    private repository: Repository<Storages>,
  ) {}

  async all(query: AllDto) : Promise<any> {
    const limit = parseInt(query.limit) || 25;
    const page = parseInt(query.page) || 1;
    const q = this.repository.createQueryBuilder('storages');


    const [result, total] = await q
      .take(limit)
      .skip(limit * (page - 1))
      .orderBy('storages.id', 'DESC')
      .getManyAndCount();

    return createPaginationObject(result, total, page, limit);
  }

  async create(data: Storages): Promise<any> {
    return this.repository.save(data);
  }

  async update(data: Storages, id: number): Promise<any> {
    const sto = this.repository.findOne({ where: { id } });
    if (sto) {
      await this.repository.update(id, data);
      return {
        status: StatusCode.SUCCESS,
        message: Message.SUCCESS,
      };
    } else {
      throw new BadRequestException({
        status: StatusCode.ERROR,
        message: Message.NOT_FOUND,
      });
    }
  }

  async delete(id: number): Promise<any> {
    const sto = this.repository.findOne({ where: { id } });
    if (sto) {
      await this.repository.delete(id);
      return {
        status: StatusCode.SUCCESS,
        message: Message.SUCCESS,
      };
    } else {
      throw new BadRequestException({
        status: StatusCode.ERROR,
        message: Message.NOT_FOUND,
      });
    }
  }

  async byId(id: number) {
    const sto = this.repository.findOne({ where: { id } });
    return sto;
  }
}
