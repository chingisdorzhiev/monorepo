import { createRoot } from 'react-dom/client';
import { App } from './app/App';

const root = document.getElementById('root');
if (!root) {
  throw new Error('root not found');
}

const rootContainer = createRoot(root);
rootContainer.render(<App />);
