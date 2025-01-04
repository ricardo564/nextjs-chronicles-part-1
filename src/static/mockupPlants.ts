import { Plant } from "@/types/plant.types";
import dieffenbachiaPlantPot from '@/assets/images/dieffenbachia-plant-pot.webp';

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
];
