import { Plant } from "@/types/plant.types";
import Image from "next/image";
import { ExploreShortcut } from "./ExploreShortcut";

interface PlantBannerCardProps {
  plant: Plant;
  imageClassName?: string;
}

export function PlantBannerCard({
  plant,
  imageClassName,
}: PlantBannerCardProps) {
  return (
    <div
      className="relative w-full bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-xl rounded-[32px] p-8 border border-white/20"
      role="article"
      aria-label={`Plant card for ${plant.common_name || plant.scientific_name}`}
    >
      <div className="flex gap-8 items-center w-full justify-between">
        <div className="shrink-0">
          {plant.image_url && (
            <Image
              src={plant.image_url}
              alt={plant.common_name || plant.scientific_name}
              width={180}
              height={180}
              loading="lazy"
              className={`object-cover w-[17rem] h-[17rem] rounded-2xl absolute -top-[1rem] left-0 scale-150 ${imageClassName}`}
            />
          )}
        </div>

        <div className="ml-auto max-w-[45rem]">
          <h3 className="text-white text-2xl font-semibold mb-2">
            {plant.common_name || plant.scientific_name}
          </h3>

          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {plant.bibliography}
          </p>

          <div className="flex items-center gap-4">
            <ExploreShortcut plant={plant} />

            <button
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg"
              aria-label="See details"
            >
              <span className="text-white">→</span>
            </button>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Rs. 570/-
          </p>
        </div>
      </div>
    </div>
  );
}
