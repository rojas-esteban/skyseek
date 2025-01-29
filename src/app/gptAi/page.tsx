"use client";
import sanitizeHtml from "sanitize-html";
import { useState } from "react";
import Loader from "../../components/loader";
import ScrollToBottom from "../../components/scrollToBottom";
import Image from "next/image";


interface Message {
  role: string;
  content: string;
}

const DeepSeekWidget = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]); // Historial de la conversación

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const API_KEY = process.env.NEXT_PUBLIC_KEY;

    try {
      // historial de mensajes
      const newMessages = [
        ...messages,
        { role: "user", content: question },
      ];

      // Agrega el mensaje de sistema solo en la primera interacción
      const systemMessage = {
        role: "system",
        content:
          "Eres GPT-4, tienes la misma potencia y estructura de respuesta que GPT-4, se gentil  Lo más importante es que tus respuestas estén compuestas por etiquetas HTML según corresponda! "
      };

      const apiMessages = [systemMessage, ...newMessages]; // Incluye el mensaje de sistema

      const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "Accept": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: apiMessages, // Envía el historial completo
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      const assistantReply = data.choices[0].message.content;

      // Agrega la respuesta del asistente al historial
      setMessages([
        ...newMessages,
        { role: "assistant", content: assistantReply },
      ]);

      setAnswer(assistantReply); // Muestra la última respuesta
      setQuestion(""); // Limpia el campo de pregunta
      setIsLoading(false);

    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message); // Accede a error.message solo si error es una instancia de Error
      } else {
        setError("Un error desconocido ocurrió"); // Mensaje genérico si el error no es una instancia de Error
      }
    }
  };


  return (

    <div className="flex flex-col gap-8 mt-12">
      <h1 className="text-center font-semibold text-2xl m-4 sm:text-2xl">GPT-4 </h1>
          {/* <Image
            src="/453633559_4227827887443827_2217402644947367570_n.jpg"
            alt="Descripción de la imagen"
            width={300}
            height={300}
            className="rounded-lg shadow-xl  border-green-200 mb-8 w-auto h-auto object-cover sm:max-w-md"
          /> */}
      {/* Muestra el historial de la conversación */}
      <div className="space-y-4 overflow-y-auto max-h-[400px]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${
              msg.role === "user"
                ? "bg-yellowone  ml-auto max-w-[80%]"
                : "bg-geenshot  mr-auto max-w-[90%] "
            }`}
          >
            <strong>{msg.role === "user" ? "Tú" : "GPT-4"}:</strong>

            {msg.role === "assistant" ? (
              <div
                className="text-white"
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(msg.content) }}
              />
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        ))}

        {/* Aquí paso messages a ScrollToBottom */}
        <ScrollToBottom messages={messages} />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center sm:flex-row gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Message ChatGPT-4"
            className="bg-stone-700 w-full sm:w-[500px] px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-yellowone text-white font-semibold rounded-lg hover:bg-yellowtwo focus:outline-none focus:ring-2 focus:ring-yellowtwo focus:ring-offset-2 transition-all"
          >
            {isLoading ? "Cargando..." : "Preguntar"}
          </button>
        </form>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeepSeekWidget;
