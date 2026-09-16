import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function WhatsAppFloat() {
  // Format phone number: removing any spaces/dashes and adding country code if missing
  // India country code is +91
  const phoneNumber = siteConfig.phone.replace(/\s+/g, "");
  const message = encodeURIComponent("I would like to inquire about your solar solutions. Please provide Further information.");
  const whatsappUrl = `https://wa.me/${phoneNumber.startsWith("91") ? phoneNumber : "91" + phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}
