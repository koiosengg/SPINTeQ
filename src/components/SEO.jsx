import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.spinteq.in";

function SEO({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 2. Set meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // 3. Set canonical URL dynamically for every route
    const canonicalHref = pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

  }, [title, description, pathname]);

  return null;
}

export default SEO;
