import { Controller, Get } from '@nestjs/common';
import { PlantsService } from '@/app/api/plants/plants.service';
import { PlantApiResponse } from '@/types/plant.types';

@Controller('api/plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get()
  async getPlants(): Promise<PlantApiResponse> {
    return this.plantsService.getPlants();
  }
}
