
import { HelmetProvider } from 'react-helmet-async';
// routes
import {BrowserRouter} from "react-router-dom";
import Router from './routes';
// theme
// components
import ThemeProvider from './theme';

import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />

          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
