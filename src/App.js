
import { HelmetProvider } from 'react-helmet-async';
// routes
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
// eslint-disable-next-line import/no-named-as-default
import Routes from './Routes';
// theme
// components
import ThemeProvider from './theme';

import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
        <ThemeProvider>
          <ScrollToTop />

          <Routes />
        </ThemeProvider>
    </HelmetProvider>
  );
}
