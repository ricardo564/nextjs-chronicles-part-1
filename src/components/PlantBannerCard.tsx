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
      className={`flex relative justify-between items-center w-full bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-3xl md:ounded-full p-8 border border-white/20 max-w-6xl mx-auto ${className}`}
      role="article"
      aria-label={`Plant card for ${plant.common_name || plant.scientific_name}`}
    >

        <div className="w-full relative h-24 ml-auto top-0 flex justify-center items-center">
          {plant.image_url && (
            <Image
              src={plant.image_url}
              alt={plant.common_name || plant.scientific_name}
              width={240}
              height={240}
              loading="lazy"
              className={`object-cover w-[17rem] h-[17rem] rounded-2xl absolute -top-[9rem] right-0 md:-top-[11rem] md:left-0 scale-150 ${imageClassName}`}
            />
          )}
        </div>

        <div className="w-full max-w-[45rem] px-6">
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
  );
}
