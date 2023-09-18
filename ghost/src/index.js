import React from 'react';
import AppRouter from './AppRouter';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(<AppRouter />);
}
