import { Plant } from "@/types/plant.types";
import Image from "next/image";

interface PlantCardProps {
  plant: Plant;
  imageClassName?: string;
  titleClassName?: string;
}

// {
//   id: 262017,
//   common_name: 'Meadowsweet',
//   slug: 'filipendula-ulmaria',
//   scientific_name: 'Filipendula ulmaria',
//   year: 1879,
//   bibliography: 'Trudy Imp. S.-Peterburgsk. Bot. Sada 6: 251 (1879)',
//   author: '(L.) Maxim.',
//   status: 'accepted',
//   rank: 'species',
//   family_common_name: 'Rose family',
//   genus_id: 12148,
//   image_url: 'https://bs.plantnet.org/image/o/53c73903dc455a3d734b193dad7d9d8c4ec0e324',
//   synonyms: [
//     'Ulmaria ulmaria',
//     'Thecanisia ulmaria',
//     'Spiraea ulmaria',
//     'Spiraea ulmaria f. tomentosa',
//     'Spiraea ulmaria var. tomentosa'
//   ],
//   genus: 'Filipendula',
//   family: 'Rosaceae',
//   links: {
//     self: '/api/v1/species/filipendula-ulmaria',
//     plant: '/api/v1/plants/filipendula-ulmaria',
//     genus: '/api/v1/genus/filipendula'
//   }
// }

export function PlantCard({
  plant,
  imageClassName,
  titleClassName,
}: PlantCardProps) {

  const getRandomName = () => {
    const synonymsLength = plant.synonyms.length;

    const randomIndex = Math.floor(Math.random() * synonymsLength);

    return plant.synonyms[randomIndex];
  }

  return (
    <div
      className="relative bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-xl rounded-[32px] p-8 border border-white/20 w-full max-w-[20rem] flex flex-col items-center animate-fade-in"
      role="article"
      aria-label={`Plant card for ${plant.common_name || plant.scientific_name}`}
    >
      <div className="mb-6 animate-slide-down">
        {plant.image_url && (
          <Image
            src={plant.image_url}
            alt={plant.common_name || plant.scientific_name}
            width={240}
            height={240}
            loading="lazy"
            className={`object-cover w-60 h-60 rounded-2xl animate-scale-in ${imageClassName}`}
          />
        )}
      </div>

      <div className="flex flex-col w-full animate-slide-up">
        <p className="text-gray-300 text-sm mb-2">
          {getRandomName()}
        </p>

        <p className="text-gray-300 text-xs grid grid-cols-2">
          <span>Family: {plant.family}</span>
          <span>Genus: {plant.genus}</span>
        </p>

        <p className={`text-white text-2xl font-semibold my-3 h-32 w-full line-clamp-3 overflow-hidden  ${titleClassName}`}>
        {plant.bibliography + " " + plant.scientific_name}
        </p>
      </div>

        <div className="w-full flex items-center justify-start animate-fade-in-delay">
          <button
            className="px-6 py-3 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
            aria-label={`Buy ${plant.common_name || plant.scientific_name}`}
          >
            Buy Now
          </button>
        </div>
    </div>
  );
}
