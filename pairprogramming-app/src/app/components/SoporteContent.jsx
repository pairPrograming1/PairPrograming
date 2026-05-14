
"use client";
import { useState, useRef, useEffect } from "react";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import SoporteHeader from "./soporte/SoporteHeader";
import TicketInfoPanel from "./soporte/TicketInfoPanel";
import SupportTeamPanel from "./soporte/SupportTeamPanel";
import ChatContainer from "./soporte/ChatContainer";
import SupportFeatures from "./soporte/SupportFeatures";

export default function SoporteContent() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 👋 Soy **Carlos**, tu especialista de soporte técnico. ¿En qué puedo ayudarte hoy?",
      sender: "agent",
      timestamp: new Date(),
      agent: "Carlos Rodríguez",
      role: "Especialista en Soporte Técnico",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(null);

  useEffect(() => {
    if (!ticketNumber) {
      setTicketNumber(`TKT-${Date.now().toString().slice(-6)}`);
    }
  }, [ticketNumber]);

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size="default">
        <SoporteHeader />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Panel lateral */}
          <div className="lg:col-span-1 space-y-6">
            <TicketInfoPanel ticketNumber={ticketNumber} />
            <SupportTeamPanel />
          </div>

          {/* Chat principal */}
          <div className="lg:col-span-3">
            <ChatContainer
              messages={messages}
              setMessages={setMessages}
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              isTyping={isTyping}
              setIsTyping={setIsTyping}
              ticketNumber={ticketNumber}
            />

            <SupportFeatures ticketNumber={ticketNumber} />
          </div>
        </div>
      </Container>
    </section>
  );
}
