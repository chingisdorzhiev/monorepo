import { QueryProvider } from '../providers/QueryProvider';
import { AppRoutes } from '../routes';

type Props = {
  children: React.ReactNode;
};

const MFShopRoutes: React.FC<Props> = () => {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
};

export default MFShopRoutes;
