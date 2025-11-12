import { FC, useState } from 'react';
import { FavoriteButton } from '@packages/ui-kit';

import { type ProductUi } from '~entities/product';

import { useAddToFavoritesMutation, useRemoveFromFavoritesMutation } from '../model/mutations';

interface Props {
  product: ProductUi;
}

export const Favourite: FC<Props> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { mutate: addMutation } = useAddToFavoritesMutation();
  const { mutate: removeMutation } = useRemoveFromFavoritesMutation();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeMutation(product.id);
    } else {
      addMutation(product);
    }
    setIsFavorite(prev => !prev);
  };

  return <FavoriteButton isActive={isFavorite} onToggle={toggleFavorite} />;
};
