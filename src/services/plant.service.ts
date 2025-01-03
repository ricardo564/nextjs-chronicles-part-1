import { PlantApiResponse, Plant } from '@/types/plant.types';

const TREFLE_API_KEY = process.env.TREFLE_API_KEY;

export class PlantService {
  async getPlants(): Promise<PlantApiResponse> {
    console.log(TREFLE_API_KEY);

    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${TREFLE_API_KEY}`
    );

    return response.json();
  }

  async getPlantById(id: number): Promise<Plant> {
    const response = await fetch(`sua-url-api/plants/${id}`);
    return response.json();
  }
}
