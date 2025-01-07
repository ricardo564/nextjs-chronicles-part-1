import { PlantCard } from "@/components/PlantCard";
import { Plant } from "@/types/plant.types";
import { NoDataToShow } from "@/components/NoDataToShow";
import DefaultLayout from "@/layouts/DefaultLayout";
import { PlantsService } from "@/modules/plants/plants.service";
import { HttpService } from "@nestjs/axios";

export default async function PlantsPage() {
  const httpService = new HttpService();
  const plantsService = new PlantsService(httpService);

  try {
    const response = await plantsService.getPlants();
    const plants: Plant[] = response.data;

    if (!Array.isArray(plants)) {
      throw new Error("Dados inválidos recebidos do servidor");
    }

    return (
      <DefaultLayout>
        <div className="py-8">
          {plants.length === 0 ? (
            <NoDataToShow message="Nenhuma planta para ser exibida..." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-6">
              {plants.map((plant) => (
                <PlantCard
                  containerClassName="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 relative flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
                  imageClassName="rounded-full overflow-hidden w-[120px] h-[120px] md:w-[9rem] md:h-[9rem] -mt-12 md:-mt-[10rem] shadow-lg border-4 border-white/10 ml-12"
                  key={plant.id}
                  plant={plant}
                  showPrice
                />
              ))}
            </div>
          )}
        </div>
      </DefaultLayout>
    );
  } catch (error: unknown) {
    console.error("Error fetching plants:", error);

    const errorMessage =
      error instanceof Error
        ? `Erro ao carregar as plantas: ${error.message}`
        : "Erro ao carregar as plantas...";

    return (
      <DefaultLayout>
        <div className="py-8">
          <NoDataToShow message={errorMessage} />
        </div>
      </DefaultLayout>
    );
  }
}
