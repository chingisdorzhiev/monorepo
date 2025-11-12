import { type FC, type ReactNode, type PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Loader, ErrorMessage } from '@packages/ui-kit';

interface QueryBoundaryProps {
  isLoading?: boolean;
  error?: unknown;
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: (error: unknown) => ReactNode;
  suspense?: boolean;
}

export const QueryBoundary: FC<PropsWithChildren<QueryBoundaryProps>> = ({
  isLoading,
  error,
  children,
  fallback = <Loader text="Loading..." />,
  errorFallback = error => (
    <ErrorMessage text={`Error: ${(error as Error)?.message || 'Something went wrong'}`} />
  ),
  suspense = false,
}) => {
  if (suspense) {
    return (
      <ErrorBoundary fallbackRender={({ error }) => errorFallback(error)}>
        <Suspense fallback={fallback}>{children}</Suspense>
      </ErrorBoundary>
    );
  }

  if (isLoading) return fallback;
  if (error) return errorFallback(error);

  return <>{children}</>;
};
