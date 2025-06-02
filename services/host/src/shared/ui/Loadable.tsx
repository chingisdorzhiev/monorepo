import { Suspense } from 'react';

export const Loadable = (Component: React.LazyExoticComponent<React.ComponentType>) => {
  return (props: any) => (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Component {...props} />
    </Suspense>
  );
};
