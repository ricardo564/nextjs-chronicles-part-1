import { Plant, PlantApiResponse } from "@/types/plant.types";
import { PlantCard } from "@/components/PlantCard";

async function getPlants(): Promise<PlantApiResponse> {
  const apiKey = process.env.TREFLE_API_KEY;
  const errorMessage = "Failed to fetch plants";

  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${apiKey}`,
      {
        next: {
          revalidate: 10800,
        },
      }
    );

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    console.error(errorMessage, error);
    throw new Error(errorMessage);
  }
}

export default async function Home() {
  const { data: plants } = await getPlants();

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {!plants.length && (
          <p className="text-white text-2xl font-bold">
            Nenhuma planta para ser exibida...
          </p>
        )}

        {plants.map((plant: Plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
