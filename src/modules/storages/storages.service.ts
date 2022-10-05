import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusCode } from 'src/common/enums';
import { Message } from 'src/common/message.const';
import { Repository } from 'typeorm';
import { Storages } from './storage.entity';

@Injectable()
export class StoragesService {
  constructor(
    @InjectRepository(Storages)
    private repository: Repository<Storages>,
  ) {}

  async all(query: AllDto) : Promise<any> {
    
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
}
