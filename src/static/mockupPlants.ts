import { Plant } from "@/types/plant.types";
import dieffenbachiaPlantPot from '@/assets/images/dieffenbachia-plant-pot.webp';
import hostaPlantWhiteVase from '@/assets/images/hosta-plant-white-vase.webp';
import succulentMintPot from '@/assets/images/succulent-mint-pot.webp';
import aloeModernDecor from '@/assets/images/aloe-modern-decor.webp';
import birdParadiseWhitePot from '@/assets/images/bird-paradise-white-pot.webp';
import cactusTerracottaPot from '@/assets/images/cactus-terracotta-pot.webp';
import monsteraDarkPedestal from '@/assets/images/monstera-dark-pedestal.webp';

export const mockupPlants: Plant[] = [
  {
    id: 1,
    common_name: "Dieffenbachia",
    slug: "dieffenbachia-amoena",
    scientific_name: "Dieffenbachia amoena",
    year: 1977,
    bibliography: "Exotic Foliage Plants: A Comprehensive Guide to Cultivation and Care. This book provides an in-depth look at the world of exotic foliage plants, including their history, classification, and cultivation techniques.",
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
    bibliography: "Journal of the Horticultural Society of London: Volume 14. This journal issue features a detailed description of the Hosta ventricosa species, including its discovery, classification, and cultivation.",
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
    bibliography: "Journal of the Horticultural Society of London: Volume 14. This journal issue features a detailed description of the Succulent mint pot species, including its discovery, classification, and cultivation.",
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
  {
    id: 4,
    common_name: "Aloe Vera",
    slug: "aloe-vera-modern",
    scientific_name: "Aloe barbadensis miller",
    year: 1768,
    bibliography: "Medicinal Plants of the World: An Illustrated Scientific Guide. This comprehensive guide details the therapeutic properties and cultivation requirements of Aloe vera.",
    author: "Philip Miller",
    status: "accepted",
    rank: "species",
    family_common_name: "Asphodelaceae",
    genus_id: 3277,
    image_url: aloeModernDecor.src,
    synonyms: [
      "Aloe vera var. chinensis",
      "Aloe vera var. littoralis",
      "Aloe perfoliata var. vera"
    ],
    genus: "Aloe",
    family: "Asphodelaceae",
    links: {
      self: "/api/v1/species/aloe-vera",
      plant: "/api/v1/plants/aloe-vera",
      genus: "/api/v1/genus/aloe"
    },
  },
  {
    id: 5,
    common_name: "Bird of Paradise",
    slug: "strelitzia-reginae",
    scientific_name: "Strelitzia reginae",
    year: 1789,
    bibliography: "Botanical Magazine: Volume 3. First detailed description and illustration of the Bird of Paradise plant, highlighting its unique flower structure and tropical origins.",
    author: "William Aiton",
    status: "accepted",
    rank: "species",
    family_common_name: "Strelitziaceae",
    genus_id: 3278,
    image_url: birdParadiseWhitePot.src,
    synonyms: [
      "Strelitzia parvifolia",
      "Strelitzia glauca",
      "Heliconia reginae"
    ],
    genus: "Strelitzia",
    family: "Strelitziaceae",
    links: {
      self: "/api/v1/species/strelitzia-reginae",
      plant: "/api/v1/plants/strelitzia-reginae",
      genus: "/api/v1/genus/strelitzia"
    },
  },
  {
    id: 6,
    common_name: "Golden Barrel Cactus",
    slug: "echinocactus-grusonii",
    scientific_name: "Echinocactus grusonii",
    year: 1886,
    bibliography: "Cacti and Succulents: A Complete Guide to Species, Cultivation and Care. Detailed examination of desert plants with focus on the Golden Barrel Cactus.",
    author: "Heinrich Hildmann",
    status: "accepted",
    rank: "species",
    family_common_name: "Cactaceae",
    genus_id: 3279,
    image_url: cactusTerracottaPot.src,
    synonyms: [
      "Kroenleinia grusonii",
      "Mother-in-law's cushion",
      "Golden ball"
    ],
    genus: "Echinocactus",
    family: "Cactaceae",
    links: {
      self: "/api/v1/species/echinocactus-grusonii",
      plant: "/api/v1/plants/echinocactus-grusonii",
      genus: "/api/v1/genus/echinocactus"
    },
  },
  {
    id: 7,
    common_name: "Swiss Cheese Plant",
    slug: "monstera-deliciosa",
    scientific_name: "Monstera deliciosa",
    year: 1849,
    bibliography: "Tropical Plants of the Americas: A Comprehensive Guide to Identification and Care. Features extensive coverage of Aroids including Monstera species.",
    author: "Karl Heinrich Leopold Liebmann",
    status: "accepted",
    rank: "species",
    family_common_name: "Araceae",
    genus_id: 3280,
    image_url: monsteraDarkPedestal.src,
    synonyms: [
      "Philodendron pertusum",
      "Tornelia fragrans",
      "Mexican breadfruit"
    ],
    genus: "Monstera",
    family: "Araceae",
    links: {
      self: "/api/v1/species/monstera-deliciosa",
      plant: "/api/v1/plants/monstera-deliciosa",
      genus: "/api/v1/genus/monstera"
    },
  },
];
