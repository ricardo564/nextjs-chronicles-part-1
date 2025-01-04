import { PlantCard } from "@/components/PlantCard";
import { Plant } from "@/types/plant.types";
import { NoDataToShow } from "@/components/NoDataToShow";
import DefaultLayout from "@/layouts/DefaultLayout";

export default async function PlantsPage() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plants`);
    const data = await response.json();
    const plants: Plant[] = data.data;

    return (
      <DefaultLayout>
        <div className="py-8">
          {plants.length === 0 ? (
            <NoDataToShow message="Nenhuma planta para ser exibida..." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-[10rem] pt-[8rem]">
              {plants.map((plant) => (
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
