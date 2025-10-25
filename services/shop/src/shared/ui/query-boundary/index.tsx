import { type FC, type ReactNode, type PropsWithChildren, Suspense } from 'react';
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
  errorFallback = error => <ErrorMessage text={`Error: ${(error as Error)?.message}`} />,
  suspense = false,
}) => {
  if (suspense) {
    return <Suspense fallback={fallback}>{children}</Suspense>;
  }

  if (isLoading) return fallback;
  if (error) return <>{errorFallback}</>;

  return <>{children}</>;
};
