import React from 'react';
import ReactDOM from 'react-dom/client';
import { YMInitializer } from 'react-yandex-metrika';
import App from './App.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <YMInitializer
      accounts={[97990308]}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      }}
    />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
