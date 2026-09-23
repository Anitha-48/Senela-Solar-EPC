import { useEffect } from "react";

/**
 * Drop this at the top of any page component to set that page's
 * <title> and meta description for Google.
 *
 * Usage:
 *   <SEO
 *     title="About Us | Senela Solar EPC"
 *     description="Learn about Senela International's solar EPC expertise..."
 *   />
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
