"use client";
import { useEffect, useRef } from "react";

interface ScrollToBottomProps {
  messages: { role: string; content: string }[];
}

const ScrollToBottom: React.FC<ScrollToBottomProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Desplazar hacia abajo cuando los mensajes cambian
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Ejecutar cada vez que los mensajes cambian

  return <div ref={bottomRef} />;
};

export default ScrollToBottom;
