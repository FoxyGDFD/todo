import Main from '@pages/Main';
import RootLayout from '@widgets/layout/RootLayout.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootLayout>
      <Main />
    </RootLayout>
  </React.StrictMode>
);
