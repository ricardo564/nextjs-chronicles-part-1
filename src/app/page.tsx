import { PlantApiResponse } from "@/types/plant.types";
import Image from "next/image";

async function getPlants(): Promise<PlantApiResponse> {
  const apiKey = process.env.TREFLE_API_KEY;

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
      throw new Error("Failed to fetch plants");
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch plants");
  }
}

export default async function Home() {
  const { data: plants } = await getPlants();

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <pre className="text-white">{JSON.stringify(plants, null, 2)}</pre>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">
              {plant.image_url && (
                <Image
                  src={plant.image_url}
                  alt={plant.common_name || plant.scientific_name}
                  width={200}
                  height={200}
                  className="object-cover w-48 h-48"
                />
              )}
            </div>

            <div className="flex flex-col items-center w-full">
              <p className="text-gray-400 text-sm mb-2">Trendy House Plant</p>
              <h2 className="text-white text-xl font-semibold mb-4 mr-auto">
                {plant.common_name || plant.scientific_name}
              </h2>
            </div>

            <button className="px-6 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors mr-auto">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
