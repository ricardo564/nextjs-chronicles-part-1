import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PlantsController } from '@/modules/plants/plants.controller';
import { PlantsService } from '@/modules/plants/plants.service';

@Module({
  imports: [HttpModule],
  controllers: [PlantsController],
  providers: [PlantsService],
})

export class PlantsModule {}
