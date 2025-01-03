interface ApiLinks {
  first?: string;
  last?: string;
  prev?: string;
  next?: string;
}

interface PlantLinks {
  self: string;
  plant: string;
  genus: string;
}

interface ApiMeta {
  current_page?: number;
  total?: number;
}

interface Plant {
  id: number;
  common_name: string | null;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string | null;
  genus_id: number;
  image_url: string;
  synonyms: string[];
  genus: string;
  family: string;
  links: PlantLinks;
}

interface PlantApiResponse {
  data: Plant[];
  links?: ApiLinks;
  meta?: ApiMeta;
}

export type {
  Plant,
  PlantApiResponse,
  ApiLinks,
  PlantLinks,
  ApiMeta
};
