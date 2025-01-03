'use client';

import { PlantService } from '@/services/plant.service';
import { Plant } from '@/types/plant.types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [plants, setPlants] = useState<Plant[]>([]);

  const plantService = new PlantService();

  const handleGetPlants = async () => {
    plantService.getPlants().then((response) => {
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
