import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { storesProviders } from './stores.providers';
import { StoresService } from './stores.service';
import { StoresController } from '../../controllers/stores.controller';

@Module({
  controllers: [StoresController],
  imports: [DatabaseModule],
  providers: [...storesProviders, StoresService],
})
export class StoresModule {}
