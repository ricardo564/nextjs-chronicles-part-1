import { PlantCard } from "@/components/PlantCard";
import { PlantService } from "@/services/plant.service";
import { HttpClient } from "@/services/http-client";
import { Plant } from "@/types/plant.types";
import { NoDataToShow } from "@/components/NoDataToShow";

export default async function Home() {
  const httpClient = new HttpClient();
  const plantService = new PlantService(httpClient);

  try {
    const plants = await plantService.getPlants();
    const typedPlants = plants as unknown as Plant[];

    if (typedPlants.length === 0) {
      return (
        <NoDataToShow message="Nenhuma planta para ser exibida..." />
      );
    }

    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {typedPlants.map((plant: Plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching plants:', error);
    return (
      <div className="min-h-screen bg-gray-900 p-8 flex justify-center items-center">
        <p className="text-white text-2xl font-bold">
          Erro ao carregar as plantas...
        </p>
      </div>
    );
  }
}
