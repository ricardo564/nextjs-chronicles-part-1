import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PlantApiResponse, Plant } from '@/types/plant.types';

@Injectable()
export class PlantService {
  constructor(private configService: ConfigService) {}

  async getPlants(): Promise<PlantApiResponse> {
    const response = await fetch('/api/plants');
    return response.json();
  }

  async getPlantById(id: number): Promise<Plant> {
    const response = await fetch(`sua-url-api/plants/${id}`);
    return response.json();
  }
}
