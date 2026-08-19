import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Every route change lands at the top of the page, and a refresh does too —
 * browsers otherwise restore the previous scroll position, which drops you
 * into the middle of an itinerary instead of the hero.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Stop the browser restoring the old scroll position on reload / back-forward
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
