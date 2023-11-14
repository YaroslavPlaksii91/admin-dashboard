import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { authStore } from '@store/auth';

import { App } from './App';

import './index.css';

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <App authStore={authStore} />
        </ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
