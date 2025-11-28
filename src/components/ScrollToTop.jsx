// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - scrolls to top on route change
 * - optionally offsets for a fixed header
 * - uses a tiny timeout to play nicely with mobile address-bar resizing
 *
 * Usage: place inside your Router, e.g. <Router><ScrollToTop/><AppRoutes/></Router>
 */
export default function ScrollToTop({ offsetSelector = null, behavior = "smooth" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // compute offset (height of header or element)
    let offset = 0;
    if (offsetSelector) {
      const el = document.querySelector(offsetSelector);
      if (el) {
        const rect = el.getBoundingClientRect();
        offset = rect.height;
      }
    }

    // small delay helps on mobile where the browser UI may change height
    const timer = window.setTimeout(() => {
      // For smooth behaviour: try scrollTo with top value
      try {
        window.scrollTo({ top: Math.max(0, 0 + offset * 0), behavior }); // default top = 0
        // If you want to scroll below header:
        window.scrollTo({ top: Math.max(0, 0 - offset), behavior }); // fallback (some browsers)
      } catch (err) {
        // fallback for older browsers
        window.scrollTo(0, Math.max(0, 0 - offset));
      }

      // Better approach: if you need to scroll to the very top of the document:
      window.scrollTo({ top: 0, behavior });
      // If you want to scroll to just under a fixed header, use:
      // window.scrollTo({ top: offset, behavior });
    }, 60); // 60ms is small but enough for most mobile address-bar adjustments

    return () => clearTimeout(timer);
  }, [pathname, offsetSelector, behavior]);

  return null;
}
