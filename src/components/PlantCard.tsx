import { Plant } from "@/types/plant.types";
import Image from "next/image";
import { BuyShortcut } from "./BuyShortcut";

interface PlantCardProps {
  plant: Plant;
  containerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
}

export function PlantCard({
  plant,
  containerClassName,
  imageClassName,
  titleClassName,
}: PlantCardProps) {
  const getRandomName = () => {
    const synonymsLength = plant.synonyms.length;

    const randomIndex = Math.floor(Math.random() * synonymsLength);

    return plant.synonyms[randomIndex];
  };

  return (
    <div
      className={`relative bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-[32px] p-8 border border-white/20 w-full md:max-w-[20rem] flex flex-col items-center animate-fade-in ${containerClassName}`}
      role="article"
      aria-label={`Plant card for ${plant.common_name || plant.scientific_name
        }`}
    >
      <div className="mb-6 animate-slide-down">
        {plant.image_url && (
          <Image
            src={plant.image_url}
            alt={plant.common_name || plant.scientific_name}
            width={240}
            height={240}
            loading="lazy"
            className={`-mt-24 md:-mt-32 object-cover w-[20rem] h-[20rem] rounded-2xl animate-scale-in scale-150 md:scale-125 ${imageClassName}`}
          />
        )}
      </div>

      <div className="flex flex-col w-full animate-slide-up">
        <p className="text-gray-300 text-sm mb-2">{getRandomName()}</p>

        <p className="text-gray-300 text-xs grid grid-cols-2">
          <span>Family: {plant.family}</span>
          <span>Genus: {plant.genus}</span>
        </p>

        <p
          className={`text-white text-2xl font-semibold my-3 h-32 w-full line-clamp-3 overflow-hidden  ${titleClassName}`}
        >
          {plant.bibliography + " " + plant.scientific_name}
        </p>
      </div>

      <div className="w-full flex items-center justify-start animate-fade-in-delay">
        <BuyShortcut
          label="Buy Now"
          className="px-6 py-3 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
          plant={plant}
        />
      </div>
    </div>
  );
}
