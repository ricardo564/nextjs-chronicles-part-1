import { PlantCard } from "@/components/PlantCard";
import { PlantService } from "@/services/plant.service";
import { HttpClient } from "@/services/http-client";
import { Plant } from "@/types/plant.types";
import { NoDataToShow } from "@/components/NoDataToShow";

export default async function IntroSection() {
  const httpClient = new HttpClient();
  const plantService = new PlantService(httpClient);

  try {
    const plants = await plantService.getPlants();
    const typedPlants = plants as unknown as Plant[];

    if (typedPlants.length === 0) {
      return (
        <div>
          <NoDataToShow message="Nenhuma planta para ser exibida..." />
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 min-h-screen">
        {typedPlants.map((plant: Plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching plants:', error);
    return (
      <div>
        <NoDataToShow message="Erro ao carregar as plantas..." />
      </div>
    );
  }
}
