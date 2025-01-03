import { PlantCard } from "@/components/PlantCard";
import { PlantService } from "@/services/plant.service";
import { HttpClient } from "@/services/http-client";
import { Plant } from "@/types/plant.types";
import { NoDataToShow } from "@/components/NoDataToShow";
import DefaultLayout from "@/layouts/DefaultLayout";

export default async function PlantsPage() {
  const httpClient = new HttpClient();
  const plantService = new PlantService(httpClient);

  try {
    const plants = await plantService.getPlants();
    const typedPlants = plants as unknown as Plant[];

    return (
      <DefaultLayout>
        <div className="py-8">
          {typedPlants.length === 0 ? (
            <NoDataToShow message="Nenhuma planta para ser exibida..." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typedPlants.map((plant: Plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          )}
        </div>
      </DefaultLayout>
    );
  } catch (error) {
    console.error('Error fetching plants:', error);
    return (
      <DefaultLayout>
        <div className="py-8">
          <NoDataToShow message="Erro ao carregar as plantas..." />
        </div>
      </DefaultLayout>
    );
  }
}
