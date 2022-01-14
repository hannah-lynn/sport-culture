export interface IProduct {
  brandName: string;
  color: string;
  description: string;
  id: string;
  mainImage: string;
  name: string;
  price: {amount: string, currency: string};
  sizes: number[];
  sku: string;
  stockStatus: string;
}
