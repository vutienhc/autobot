import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StatusCode } from "src/common/enums";
import { Message } from "src/common/message.const";
import { createPaginationObject } from "src/common/pagination";
import { Repository } from "typeorm";
import { AllDto } from "../storages/storages.dto";
import { Source } from "./source.entity";

@Injectable()
export class SourceService {
    constructor(@InjectRepository(Source)
    private repository: Repository<Source>) {}

    async all(query: AllDto) : Promise<any> {
      const limit = parseInt(query.limit) || 25;
      const page = parseInt(query.page) || 1;
      const q = this.repository.createQueryBuilder('source');
  
  
      const [result, total] = await q
        .take(limit)
        .skip(limit * (page - 1))
        .orderBy('source.id', 'DESC')
        .getManyAndCount();
  
      return createPaginationObject(result, total, page, limit);
    }
    
    async create(data: Source) {
        return await this.repository.save(data);
    }

    async update(data: Source, id: number): Promise<any> {
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