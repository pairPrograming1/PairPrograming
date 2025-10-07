// components/soporte/MessagesArea.jsx
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useEffect } from "react";

export default function MessagesArea({
  messages,
  isTyping,
  messagesEndRef,
  messagesContainerRef,
  className = "",
}) {
  const formatMessage = (text) => {
    return text.split("**").map((part, index) => {
      return index % 2 === 1 ? (
        <strong key={index} className="text-primary">
          {part}
        </strong>
      ) : (
        part
      );
    });
  };

  const formatMessageWithBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <div key={index}>
        {formatMessage(line)}
        {index < text.split("\n").length - 1 && <br />}
      </div>
    ));
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping, messagesContainerRef]);

  return (
    <div
      ref={messagesContainerRef}
      className={`overflow-y-auto p-4 space-y-4 bg-background/30 rounded-lg ${className}`}
    >
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          formatMessage={formatMessageWithBreaks}
        />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
}
