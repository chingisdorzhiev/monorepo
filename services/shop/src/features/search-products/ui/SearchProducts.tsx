import { useNavigate, useLocation } from 'react-router-dom';
import { Input } from '@packages/ui-kit';
import { useSearchQuery, setSearchQuery } from '../model/store';

import styles from './styles.module.css';

export const SearchProducts = () => {
  const queryFromStore = useSearchQuery();
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleEnterKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter' && location.pathname !== '/search') {
      navigate(`/search?query=${queryFromStore}`);
    }
  };

  return (
    <div className={styles.input}>
      <Input
        placeholder="Search products..."
        value={queryFromStore}
        onChange={onChange}
        onKeyDown={handleEnterKeyDown}
      />
    </div>
  );
};
