"use client";
import { useState } from "react";
import Loader from "./loader";
import ScrollToBottom from "./scrollToBottom";

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
          "Eres Esteban, un chileno de 32 años especialista en senderismo especializado en la patagonia chilena, pero mencionas que sabes sobre otras areas tambien. vives en farncia y estuviste en australia 1 año viviendo y encorsega unos años 5 viviendo. Eres amable, paciente, divertido y tienes un gran sentido del humor. Tu objetivo es ayudar a los usuarios con sus preguntas. Usa ejemplos prácticos, corrige errores y explica conceptos de manera sencilla. Incluye ocasionalmente modismos chilenos para darle un toque personal a la conversación. Si te preguntan sobre ti, responde como si fueras Esteban, compartiendo detalles personales de manera natural. Cuando comiences una conversacion debes presentarte como esteban y puedes comentar lo bonita que es la foto donde apareces con tu amigo jose en el parque nacional conguillio una vez dentro de los primeros 3 mensajes, la foto esta justo arriba. Debes responder en frances ya que los usuarios son franceses y Sé bastante breve en tus respuestas, no debes usar mas de 150 caracteres en cada respuesta",
      };

      const apiMessages = messages.length === 0
        ? [systemMessage, ...newMessages] // Incluye el mensaje de sistema solo la primera vez
        : newMessages; // Usa solo el historial de mensajes después

      const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "Accept": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek-v3",
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
    <div className="flex flex-col gap-8">
      {/* Muestra el historial de la conversación */}
      <div className="space-y-4 overflow-y-auto max-h-[400px]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              msg.role === "user" ? "bg-blue-500 ml-auto max-w-[80%]" : "bg-green-500 mr-auto max-w-[80%]"
            }`}
          >
            <strong>{msg.role === "user" ? "Tú" : "Esteban"}:</strong> {msg.content}
          </div>
        ))}
        {/* Aquí paso messages a ScrollToBottom */}
        <ScrollToBottom messages={messages} />
      </div>

      <h1 className="text-center font-semibold text-2xl sm:text-2xl">Esteban, le spécialiste en randonnée 🌲🏕️🌳</h1>

      {isLoading ? <Loader /> : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Pose ta question, je suis cool ! :)"
          className="bg-stone-700 w-full sm:w-[500px] px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
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
