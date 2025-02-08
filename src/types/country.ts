export interface Country {
  name: string
  code: string
  flag: string
  capital?: string
  region?: string
  population?: number
}

export interface CountryResponse {
  name: {
    common: string;
    official: string;

  };
  cca2: string;
  flags: {
    png: string;
    svg: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, {
    name: string;
    symbol: string;
  }>;
}

