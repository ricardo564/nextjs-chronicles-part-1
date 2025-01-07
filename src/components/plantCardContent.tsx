import { Plant } from "@/types/plant.types";
import Image from "next/image";
import { BuyShortcut } from "@/blocks/buyShortcut";
import { ExploreShortcut } from "@/blocks/exploreShortcut";

interface PlantCardProps {
  plant: Plant;
  containerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  showPrice?: boolean;
  showBuyShortcut?: boolean;
  contentClassName?: string;
  showRemoveButton?: boolean;
  quantityClassName?: string;
}

export function PlantCardContent({
  plant,
  containerClassName,
  imageClassName,
  titleClassName,
  showPrice = false,
  showBuyShortcut = true,
  contentClassName,
  showRemoveButton = true,
  quantityClassName = "!h-[3.7rem]",
}: PlantCardProps) {
  const getRandomName = () => {
    const synonymsLength = plant.synonyms.length;

    const randomIndex = Math.floor(Math.random() * synonymsLength);

    return plant.synonyms[randomIndex];
  };

  return (
    <div className={`flex flex-col items-center ${containerClassName}`}>
      <div className={`mb-6 animate-slide-down`}>
        {plant.image_url && (
          <Image
            src={plant.image_url}
            alt={plant.common_name || plant.scientific_name}
            width={240}
            height={240}
            loading="lazy"
            className={`absolute md:relative -mt-[9rem] -ml-[6rem] md:ml-0 md:-mt-32 object-cover w-[20rem] h-[17rem] md:h-[20rem] rounded-2xl animate-scale-in md:scale-125 ${imageClassName}`}
          />
        )}
      </div>

      <div className={`flex flex-col w-full animate-slide-up ${contentClassName}`}>
        <div className="flex flex-col w-full animate-slide-up">
          <p className="text-white text-sm mb-2">{getRandomName()}</p>

          <p className="text-white text-xs grid grid-cols-1 md:grid-cols-2">
            <span className="truncate max-w-[10rem] text-ellipsis">
              Family: {plant.family}
            </span>
            <span className="truncate max-w-[10rem] text-ellipsis">
              Genus: {plant.genus}
            </span>
          </p>

          <p
            className={`text-white text-sm md:text-xl font-semibold my-3 h-32 md:h-36 w-full md:line-clamp-3 overflow-ellipsis overflow-y-auto  ${titleClassName}`}
          >
            {plant.bibliography + " " + plant.scientific_name}
          </p>
        </div>

        {!showPrice && (
          <div className="w-full flex items-center justify-start animate-fade-in-delay">
            <BuyShortcut
              className="px-6 py-3 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              showIcon={false}
              plant={plant}
            />
          </div>
        )}

        {showPrice && (
          <div className="flex items-center gap-4">
            <ExploreShortcut plant={plant} />

            {showBuyShortcut &&<BuyShortcut plant={plant} showRemoveButton={showRemoveButton} quantityClassName={quantityClassName} />}
          </div>
        )}
      </div>
    </div>
  );
}
