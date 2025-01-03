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
      className="relative bg-black/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/20 w-full max-w-[20rem] flex flex-col items-center"
      role="article"
      aria-label={`Plant card for ${plant.common_name || plant.scientific_name}`}
    >
      <div className="mb-6">
        {plant.image_url && (
          <Image
            src={plant.image_url}
            alt={plant.common_name || plant.scientific_name}
            width={240}
            height={240}
            className={`object-cover w-60 h-60 rounded-2xl ${imageClassName}`}
          />
        )}
      </div>

      <div className="flex flex-col w-full gap-2">
        <p className="text-gray-300 text-sm mb-2">
          {getRandomName()}
        </p>

        <p className="text-gray-300 text-sm">
            Family: {plant.family}
        </p>

        <p className="text-gray-300 text-sm">
          Genus: {plant.genus}
        </p>

        <p className={`text-white text-2xl font-semibold mb-6 ${titleClassName}`}>
          {plant.bibliography + " " + plant.scientific_name}
        </p>
      </div>

        <div className="w-full flex items-center justify-start">
          <button
            className="px-6 py-3 bg-gray-500/20 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
            aria-label={`Buy ${plant.common_name || plant.scientific_name}`}
          >
            Buy Now
          </button>
        </div>
    </div>
  );
}
