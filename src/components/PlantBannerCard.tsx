import { Plant } from "@/types/plant.types";
import Image from "next/image";
import { ExploreShortcut } from "./ExploreShortcut";
import { BuyShortcut } from "./BuyShortcut";

interface PlantBannerCardProps {
  plant: Plant;
  imageClassName?: string;
  className?: string;
}

export function PlantBannerCard({
  plant,
  imageClassName,
  className,
}: PlantBannerCardProps) {
  return (
    <div
      className={`relative w-full bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-full p-8 border border-white/20 max-w-6xl mx-auto ${className}`}
      role="article"
      aria-label={`Plant card for ${plant.common_name || plant.scientific_name}`}
    >
      <div className="grid grid-cols-2 gap-8 items-center w-full justify-between">
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

        <div className="w-full max-w-[45rem]">
          <h3 className="text-white text-2xl font-semibold mb-2">
            {plant.common_name || plant.scientific_name}
          </h3>

          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {plant.bibliography}
          </p>

          <p className="mt-4 text-white text-2xl font-semibold my-4">
            Rs. 570/-
          </p>

          <div className="flex items-center gap-4">
            <ExploreShortcut plant={plant} />

            <BuyShortcut plant={plant} />
          </div>
        </div>
      </div>
    </div>
  );
}
