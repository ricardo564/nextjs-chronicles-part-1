import { Injectable } from '@nestjs/common';
import { PlantApiResponse } from '@/types/plant.types';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PlantsService {
  private readonly apiUrl = process.env.TREFLE_API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async getPlants(): Promise<PlantApiResponse> {
    try {
      const response = await this.httpService.axiosRef.get(
        `https://trefle.io/api/v1/plants?token=${this.apiUrl}`
      );
      const data = response.data;
      return data as unknown as PlantApiResponse;
    } catch (error) {
      console.error('Error fetching plants:', error);
      throw error;
    }
  }
}
