import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PlantsController } from '@/modules/plants/plants.controller';
import { PlantsService } from '@/modules/plants/plants.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
  ],
  controllers: [PlantsController],
  providers: [PlantsService],
  exports: [PlantsService],
})

export class PlantsModule {}
