import { Plant } from "@/types/plant.types";
import { useTranslations } from "next-intl";
import dieffenbachiaPlantPot from '@/assets/images/dieffenbachia-plant-pot.webp';
import hostaPlantWhiteVase from '@/assets/images/hosta-plant-white-vase.webp';
import succulentMintPot from '@/assets/images/succulent-mint-pot.webp';
import aloeModernDecor from '@/assets/images/aloe-modern-decor.webp';
import birdParadiseWhitePot from '@/assets/images/bird-paradise-white-pot.webp';
import cactusTerracottaPot from '@/assets/images/cactus-terracotta-pot.webp';
import monsteraDarkPedestal from '@/assets/images/monstera-dark-pedestal.webp';

const plantImages = {
  dieffenbachiaPlantPot,
  hostaPlantWhiteVase,
  succulentMintPot,
  aloeModernDecor,
  birdParadiseWhitePot,
  cactusTerracottaPot,
  monsteraDarkPedestal,
} as const;

export const useMockupPlants = (): Plant[] => {
  const t = useTranslations("mockupPlants");

  type PlantKey = 'id' | 'common_name' | 'slug' | 'scientific_name' | 'year' | 'bibliography' | 'author' | 'status' | 'rank' | 'family_common_name' | 'genus_id' | 'image_url' | 'synonyms' | 'genus' | 'family' | 'links';

  const getPlantField = <T extends string | number>(
    index: number,
    field: PlantKey,
    defaultValue: T
  ): T => {
    const translationKey = `plant${index}.${field}`;
    try {
      const translated = t.raw(translationKey);
      if (field === 'synonyms') {
        return translated as T;
      }
      return typeof defaultValue === 'number'
        ? Number(translated) as T
        : String(translated) as T;
    } catch {
      console.warn(`Translation missing for ${translationKey}`);
      return defaultValue;
    }
  };

  const getImageForPlant = (index: number): string => {
    const imageMap: Record<number, keyof typeof plantImages> = {
      1: 'dieffenbachiaPlantPot',
      2: 'hostaPlantWhiteVase',
      3: 'succulentMintPot',
      4: 'aloeModernDecor',
      5: 'birdParadiseWhitePot',
      6: 'cactusTerracottaPot',
      7: 'monsteraDarkPedestal',
    };

    const imageName = imageMap[index];
    return imageName ? plantImages[imageName].src : '';
  };

  const createPlant = (index: number): Plant => {
    const plantNumber = index + 1;

    return {
      id: getPlantField(plantNumber, 'id', plantNumber),
      common_name: getPlantField(plantNumber, 'common_name', `Common Name ${plantNumber}`),
      slug: getPlantField(plantNumber, 'slug', `slug-${plantNumber}`),
      scientific_name: getPlantField(plantNumber, 'scientific_name', `Scientific Name ${plantNumber}`),
      year: getPlantField(plantNumber, 'year', 2024),
      bibliography: getPlantField(plantNumber, 'bibliography', ''),
      author: getPlantField(plantNumber, 'author', ''),
      status: getPlantField(plantNumber, 'status', ''),
      rank: getPlantField(plantNumber, 'rank', ''),
      family_common_name: getPlantField(plantNumber, 'family_common_name', ''),
      genus_id: getPlantField(plantNumber, 'genus_id', 0),
      image_url: getImageForPlant(plantNumber),
      synonyms: t.raw(`plant${plantNumber}.synonyms`) as string[],
      genus: getPlantField(plantNumber, 'genus', ''),
      family: getPlantField(plantNumber, 'family', ''),
      links: t.raw(`plant${plantNumber}.links`),
    };
  };

  const PLANT_COUNT = 8;

  return Array.from({ length: PLANT_COUNT }, (_, index) =>
    createPlant(index)
  );
};
