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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-[10rem] pt-[8rem]">
              {plants.map((plant) => (
                <PlantCard
                  containerClassName="w-full max-w-full min-w-full gap-8"
                  imageClassName="rounded-full overflow-hidden w-[90vw] md:w-[15rem] h-[6rem] md:h-[15rem] -mt-[9rem] md:-mt-[12rem]"
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
