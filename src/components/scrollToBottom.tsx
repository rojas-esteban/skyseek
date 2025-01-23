"use client"; // Marca este archivo como un componente de cliente

import { useEffect, useRef } from "react";

interface ScrollToBottomProps {
  messages: { role: string; content: string }[];
}

const ScrollToBottom: React.FC<ScrollToBottomProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Dependencia de 'messages' para que el scroll se ejecute cuando los mensajes cambien

  return (
    <div
      ref={bottomRef}
      style={{
        // Asegúrate de que el div esté justo antes del input para hacer scroll hacia él
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        marginTop: "20px", // Opcional: ajusta para que no quede pegado al input
      }}
    />
  );
};

export default ScrollToBottom;
