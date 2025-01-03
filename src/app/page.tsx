'use client';

import { HttpClient } from '@/services/http-client';
import { PlantService } from '@/services/plant.service';
import { Plant, PlantApiResponse } from '@/types/plant.types';
import { useEffect, useState } from 'react';
export default function Home() {
  const [plants, setPlants] = useState<Plant[]>([]);

  const plantService = new PlantService(new HttpClient());

  const handleGetPlants = async () => {
    plantService.getPlants().then((response: PlantApiResponse) => {
      const { data } = response;
      if (!data) return;

      setPlants(data);
    });
  };

  useEffect(() => {
    handleGetPlants();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(plants, null, 2)}</pre>
    </div>
  );
}
