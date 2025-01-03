import { PlantCard } from "@/components/PlantCard";
import { PlantService } from "@/services/plant.service";
import { HttpClient } from "@/services/http-client";

export default async function Home() {
  const httpClient = new HttpClient();
  const plantService = new PlantService(httpClient);

  try {
    const { data } = await plantService.getPlants();
    const plants = data;

    console.log("plants", plants)

    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {!plants?.length && (
            <p className="text-white text-2xl font-bold">
              Nenhuma planta para ser exibida...
            </p>
          )}

          {plants.map((plant) => (
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
