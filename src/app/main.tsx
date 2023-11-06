import Main from '@pages/Main';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodosProvider from './providers/TodosProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodosProvider>
      <Main />
    </TodosProvider>
  </React.StrictMode>
);
