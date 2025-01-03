import { HttpClient } from '@/services/http-client';
import { PlantApiResponse, Plant } from '@/types/plant.types';

export class PlantService {
  constructor(private readonly httpClient: HttpClient) {}

  async getPlants(): Promise<PlantApiResponse> {
    const response = await this.httpClient.get<{ data: Plant[] }>('/api/plants');

    console.log("getPlants -> response", response)

    return response.data;
  }

  async getPlantById(id: number): Promise<Plant> {
    const response = await this.httpClient.get<{ data: Plant }>(`/api/plants/${id}`);
    return response.data.data;
  }
}
