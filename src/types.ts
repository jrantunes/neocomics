export type Comic = {
  id: number;
  title: string;
  description: string;
  prices: Array<{
    price: number;
  }>;
  thumbnail: {
    path: string;
    extension: string;
  }
}