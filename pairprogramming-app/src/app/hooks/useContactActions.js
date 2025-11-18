
import { CONTACTS } from "../data/contacts";

export function useContactActions() {
  const openWhatsApp = (phone) => {
    const phoneNumber = phone || (CONTACTS[3] && CONTACTS[3].phone) || "+1234567890";
    const message = "Hola, me interesa conocer más sobre sus servicios de desarrollo";
    const url = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const openChatbot = () => {
    const chatbotBtn = document.querySelector("[data-chatbot-toggle]");
    if (chatbotBtn) chatbotBtn.click();
  };

  return {
    openWhatsApp,
    openChatbot,
  };
}
