import { Plant } from "@/types/plant.types";
import dieffenbachiaPlantPot from '@/assets/images/dieffenbachia-plant-pot.webp';
import hostaPlantWhiteVase from '@/assets/images/hosta-plant-white-vase.webp';
import succulentMintPot from '@/assets/images/succulent-mint-pot.webp';

export const mockupPlants: Plant[] = [
  {
    id: 1,
    common_name: "Dieffenbachia",
    slug: "dieffenbachia-amoena",
    scientific_name: "Dieffenbachia amoena",
    year: 1977,
    bibliography: "Exotic Foliage Plants",
    author: "Heinrich Wilhelm Schott",
    status: "accepted",
    rank: "species",
    family_common_name: "Araceae",
    genus_id: 3275,
    image_url: dieffenbachiaPlantPot.src,
    synonyms: [
      "Dieffenbachia maculata",
      "Caladium maculatum",
      "Comigo-ninguém-pode"
    ],
    genus: "Dieffenbachia",
    family: "Araceae",
    links: {
      self: "/api/v1/species/dieffenbachia-amoena",
      plant: "/api/v1/plants/dieffenbachia-amoena",
      genus: "/api/v1/genus/dieffenbachia"
    },
  },
  {
    id: 2,
    common_name: "Hosta",
    slug: "hosta-ventricosa",
    scientific_name: "Hosta ventricosa",
    year: 1859,
    bibliography: "Journal of the Horticultural Society of London",
    author: "Stapf",
    status: "accepted",
    rank: "species",
    family_common_name: "Asparagaceae",
    genus_id: 3276,
    image_url: hostaPlantWhiteVase.src,
    synonyms: [
      "Hosta caerulea",
      "Hosta sieboldiana",
      "Hosta undulata"
    ],
    genus: "Hosta",
    family: "Asparagaceae",
    links: {
      self: "/api/v1/species/hosta-ventricosa",
      plant: "/api/v1/plants/hosta-ventricosa",
      genus: "/api/v1/genus/hosta"
    },
  },
  {
    id: 3,
    common_name: "Succulent",
    slug: "succulent-mint-pot",
    scientific_name: "Succulent mint pot",
    year: 1859,
    bibliography: "Journal of the Horticultural Society of London",
    author: "Stapf",
    status: "accepted",
    rank: "species",
    family_common_name: "Asparagaceae",
    genus_id: 3276,
    image_url: succulentMintPot.src,
    synonyms: [
      "Hosta caerulea",
      "Hosta sieboldiana",
      "Hosta undulata"
    ],
    genus: "Hosta",
    family: "Asparagaceae",
    links: {
      self: "/api/v1/species/hosta-ventricosa",
      plant: "/api/v1/plants/hosta-ventricosa",
      genus: "/api/v1/genus/hosta"
    },
  },
];
