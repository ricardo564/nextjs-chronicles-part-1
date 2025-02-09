import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PlantsController } from '@/app/api/plants/plants.controller';
import { PlantsService } from '@/app/api/plants/plants.service';

@Module({
  imports: [HttpModule],
  controllers: [PlantsController],
  providers: [PlantsService],
})

export class PlantsModule {}
