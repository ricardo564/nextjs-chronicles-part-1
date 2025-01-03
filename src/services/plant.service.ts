import { HttpClient } from '@/services/http-client';
import { PlantApiResponse, Plant } from '@/types/plant.types';

export class PlantService {
  constructor(private readonly httpClient: HttpClient) {}

  async getPlants(): Promise<PlantApiResponse> {
    return this.httpClient.get<PlantApiResponse>('/api/plants');
  }

  async getPlantById(id: number): Promise<Plant> {
    return this.httpClient.get<Plant>(`/api/plants/${id}`);
  }
}
