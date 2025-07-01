import { hostRoutes } from '@packages/shared/src/routes';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div>
      <div>SHOP Main Page</div>
      <div>
        <Link to={hostRoutes.home}>Home</Link>
      </div>
    </div>
  );
};
