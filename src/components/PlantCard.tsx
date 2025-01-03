import { Plant } from "@/types/plant.types";
import Image from "next/image";

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <div
      className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center text-center"
      role="article"
      aria-label={`Plant card for ${plant.common_name || plant.scientific_name}`}
    >
      <div className="mb-4">
        {plant.image_url && (
          <Image
            src={plant.image_url}
            alt={plant.common_name || plant.scientific_name}
            width={200}
            height={200}
            className="object-cover w-48 h-48 rounded-lg"
          />
        )}
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="text-gray-400 text-sm mb-2">Trendy House Plant</p>
        <h2 className="text-white text-xl font-semibold mb-4 mr-auto">
          {plant.common_name || plant.scientific_name}
        </h2>
      </div>

      <button
        className="px-6 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors mr-auto"
        aria-label={`Buy ${plant.common_name || plant.scientific_name}`}
      >
        Buy Now
      </button>
    </div>
  );
}
