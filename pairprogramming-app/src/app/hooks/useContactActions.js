// hooks/useContactActions.js
export function useContactActions() {
  const openWhatsApp = () => {
    const phoneNumber = "+1234567890";
    const message =
      "Hola, me interesa conocer más sobre sus servicios de desarrollo";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
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
