export type Comic = {
  id: number;
  title: string;
  textObjects?: Array<{
    text: string;
  }>;
  description: string;
  prices: Array<{
    price: number;
  }>;
  thumbnail: {
    path: string;
    extension: string;
  }
  creators?: {
    items: Array<{
      name: string;
      role: string;
    }>;
  }
  amount?: number;
  rare?: boolean;
}

export type ApiResponse = {
  total: number;
  count: number;
  results: Comic[];
}