import { Controller, Get } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantApiResponse } from '@/types/plant.types';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get('/')
  async getPlants(): Promise<PlantApiResponse> {
    return this.plantsService.getPlants();
  }
}
