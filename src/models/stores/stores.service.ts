import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @Inject('STORE_REPOSITORY')
    private storeRepository: Repository<Store>,
  ) {}

  async findAll(): Promise<Store[]> {
    return this.storeRepository.find();
  }

  async findOne(id: number): Promise<Store> {
    return this.storeRepository.findOneBy({ id });
  }

  async create(store: Store): Promise<Store> {
    return this.storeRepository.save(store);
  }

  async update(id: number, store: Store): Promise<Store> {
    await this.storeRepository.update(id, store);
    return this.storeRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.storeRepository.delete(id);
  }
}
