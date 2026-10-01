import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://senelasolar.tech";
const defaultKeywords = "solar EPC company India, solar power projects, solar installation, power transmission, substations, railway electrification, water infrastructure";

const pageSeo = {
  "/": {
    title: "Senela International Solar EPC | Solar & Infrastructure Solutions",
    description: "Senela International delivers solar EPC, power transmission, substations, railway electrification and water infrastructure solutions across India.",
    keywords: "solar EPC company India, solar EPC projects, utility scale solar, rooftop solar, renewable energy infrastructure",
  },
  "/epc": {
    title: "Solar EPC Services in India | Senela International",
    description: "End-to-end solar EPC execution from engineering and procurement through construction, commissioning and long-term support.",
    keywords: "solar EPC services India, solar engineering procurement construction, solar project commissioning",
  },
  "/solar-solutions": {
    title: "Solar Solutions for Homes, Industry and Utilities | Senela",
    description: "Explore residential, industrial, utility-scale, on-grid, off-grid and hybrid solar solutions from Senela International.",
    keywords: "solar solutions India, residential solar, industrial solar, utility scale solar, hybrid solar",
  },
  "/services": {
    title: "Power and Infrastructure Services | Senela International",
    description: "Engineering and construction services for transmission, substations, HTLS reconductoring, railway electrification, solar projects and water systems.",
    keywords: "power transmission services India, EHV substation contractor, railway electrification, water management infrastructure",
  },
  "/solar-calculator": {
    title: "Solar Calculator | Estimate Your Solar Power System",
    description: "Estimate solar system capacity, energy generation and project requirements with Senela International's solar calculator.",
    keywords: "solar calculator India, solar system size calculator, rooftop solar estimate",
  },
  "/contact": {
    title: "Contact Senela International | Solar EPC Enquiries",
    description: "Contact Senela International for solar EPC, transmission, substation, railway electrification and water infrastructure projects.",
    keywords: "contact solar EPC company India, solar project enquiry, Senela International contact",
  },
};

function getPageSeo(pathname) {
  if (pageSeo[pathname]) return pageSeo[pathname];
  if (pathname.startsWith("/solar-solutions/residential")) {
    return { title: "Residential Solar Solutions | Senela International", description: "Residential solar design and installation solutions from Senela International for reliable, affordable clean energy.", keywords: "residential solar panels India, home solar installation, rooftop solar Chennai" };
  }
  if (pathname.startsWith("/solar-solutions/industrial")) {
    return { title: "Industrial Solar Solutions | Senela International", description: "Industrial and commercial solar EPC solutions designed to reduce energy costs and improve power resilience.", keywords: "industrial solar EPC India, commercial rooftop solar, captive solar power" };
  }
  if (pathname.startsWith("/solar-solutions/utility-scale")) {
    return { title: "Utility-Scale Solar EPC Projects | Senela International", description: "Utility-scale solar EPC delivery from site assessment and engineering through grid commissioning.", keywords: "utility scale solar EPC India, solar power plant construction, solar farm contractor" };
  }
  if (pathname.startsWith("/solar-solutions/on-grid")) {
    return { title: "On-Grid Solar Systems | Senela International", description: "On-grid solar systems with engineering, installation, grid synchronisation and commissioning support.", keywords: "on-grid solar system India, grid connected solar, solar net metering" };
  }
  if (pathname.startsWith("/solar-solutions/off-grid")) {
    return { title: "Off-Grid Solar Systems | Senela International", description: "Off-grid solar power solutions for reliable electricity where grid supply is limited or unavailable.", keywords: "off-grid solar India, standalone solar power system, solar battery system" };
  }
  if (pathname.startsWith("/solar-solutions/hybrid-grid")) {
    return { title: "Hybrid Grid Solar Systems | Senela International", description: "Hybrid grid solar systems combining solar generation, battery storage and grid power for dependable energy.", keywords: "hybrid solar system India, solar battery backup, hybrid grid solar" };
  }
  if (pathname.startsWith("/services/")) {
    const serviceName = pathname.split("/").pop().replaceAll("-", " ");
    return { title: `${serviceName.replace(/\b\w/g, (letter) => letter.toUpperCase())} | Senela International`, description: `Professional ${serviceName} engineering and construction services from Senela International across India.`, keywords: `${serviceName} India, Senela International engineering services, infrastructure contractor India` };
  }
  if (pathname === "/privacy-policy") return { title: "Privacy Policy | Senela International", description: "Privacy policy for the Senela International website.", keywords: defaultKeywords };
  if (pathname === "/terms-conditions") return { title: "Terms and Conditions | Senela International", description: "Terms and conditions for using the Senela International website.", keywords: defaultKeywords };
  return { title: "Senela International Solar EPC | Infrastructure Solutions", description: "Solar EPC and infrastructure solutions delivered across India by Senela International.", keywords: defaultKeywords };
}

function setMeta(name, content, attribute = "name") {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function SEO({ title, description, keywords }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPageSeo(pathname);
    const pageTitle = title || page.title;
    const pageDescription = description || page.description;
    const pageKeywords = keywords || page.keywords;
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

    document.title = pageTitle;
    setMeta("description", pageDescription);
    setMeta("keywords", pageKeywords);
    setMeta("og:title", pageTitle, "property");
    setMeta("og:description", pageDescription, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [pathname, title, description, keywords]);

  return null;
}
