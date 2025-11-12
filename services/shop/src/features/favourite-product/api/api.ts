import { httpClient } from '~shared/api';
import {
  type ProductUi,
  productsEndpoints,
  mapProductUiToProductRequestDto,
} from '~entities/product';

export const favoriteProductApi = {
  addToFavorites: (product: ProductUi) => {
    const body = mapProductUiToProductRequestDto(product);
    return httpClient.post(productsEndpoints.add(), body);
  },
  removeFromFavorites: (id: number) => httpClient.delete(productsEndpoints.byId(id)),
  getAll: async (): Promise<ProductUi[]> => {
    // можно позже подключить реальный бекенд
    return [];
  },
};
