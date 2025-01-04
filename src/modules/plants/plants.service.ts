import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { PlantApiResponse } from '@/types/plant.types';

@Injectable()
export class PlantsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getPlants(): Promise<PlantApiResponse> {
    const apiKey = this.configService.get<string>('TREFLE_API_KEY');

    const { data } = await this.httpService.axiosRef.get(
      `https://trefle.io/api/v1/plants?token=${apiKey}`
    );

    return data as unknown as PlantApiResponse;
  }
}
