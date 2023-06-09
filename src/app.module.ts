import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './models/stores/stores.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [StoresModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
