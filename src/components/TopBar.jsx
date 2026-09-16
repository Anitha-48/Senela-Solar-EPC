import { Phone, Mail, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__contacts">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
            <Phone size={13} /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={13} /> {siteConfig.email}
          </a>
        </div>
        <div className="topbar__social">
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
          <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={14} /></a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={14} /></a>
        </div>
      </div>
    </div>
  );
}
