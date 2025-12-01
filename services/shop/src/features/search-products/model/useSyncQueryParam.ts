import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSearchQuery, setSearchQuery } from './store';

export const useSyncQueryParam = () => {
  const [params, setParams] = useSearchParams();
  const queryFromUrl = params.get('query') ?? '';
  const queryFromStore = useSearchQuery();

  // 1. URL - STORE (при заходе на страницу /search)
  useEffect(() => {
    if (queryFromUrl !== queryFromStore) {
      setSearchQuery(queryFromUrl);
    }
  }, [queryFromUrl]);

  // 2. STORE - URL (при вводе в input)
  useEffect(() => {
    if (queryFromStore !== queryFromUrl) {
      setParams({ query: queryFromStore });
    }
  }, [queryFromStore]);
};
