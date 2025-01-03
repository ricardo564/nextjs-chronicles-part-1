import { PlantCard } from "@/components/PlantCard";
import { PlantService } from "@/services/plant.service";
import { HttpClient } from "@/services/http-client";
import { Plant } from "@/types/plant.types";
import { NoDataToShow } from "@/components/NoDataToShow";
import DefaultLayout from "@/layouts/DefaultLayout";

export default async function Home() {
  const httpClient = new HttpClient();
  const plantService = new PlantService(httpClient);

  try {
    const plants = await plantService.getPlants();
    const typedPlants = plants as unknown as Plant[];

    if (typedPlants.length === 0) {
      return (
        <DefaultLayout>
          <NoDataToShow message="Nenhuma planta para ser exibida..." />
        </DefaultLayout>
      );
    }

    return (
      <DefaultLayout>
        <div className="min-h-screen bg-gray-900 p-8">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {typedPlants.map((plant: Plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </DefaultLayout>
    );
  } catch (error) {
    console.error('Error fetching plants:', error);
    return (
      <DefaultLayout>
        <NoDataToShow message="Erro ao carregar as plantas..." />
      </DefaultLayout>
    );
  }
}
