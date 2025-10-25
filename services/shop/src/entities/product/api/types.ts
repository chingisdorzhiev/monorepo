export interface ProductDto {
  id: number;
  title: string;
  price: number;
}

export interface ProductsDto {
  products: ProductDto[];
  total: number;
  skip: number;
  limit: number;
}
