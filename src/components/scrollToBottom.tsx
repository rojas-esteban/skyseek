"use client";
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
  }, []);

  return <div ref={bottomRef} />;
};

export default ScrollToBottom;
