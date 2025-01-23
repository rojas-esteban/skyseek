"use client";
import { useState } from "react";

const DeepSeekWidget = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [model, setModel] = useState("deepseek-chat"); // Estado para el modelo seleccionado

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const API_URL = process.env.URL;
    const API_KEY = process.env.KEY;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: model, // Usa el modelo seleccionado
          messages: [
            {
              role: "user",
              content: question,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setAnswer(data.choices[0].message.content);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center">Interroge SkyDeep, Esteban invite 😉</h1>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="bg-stone-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        >
          <option value="deepseek-chat">DeepSeek Chat</option>
          <option value="deepseek-code">DeepSeek Code</option> {/* Ejemplo de otro modelo */}
        </select>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ingresa tu pregunta"
          disabled={isLoading}
          className="bg-stone-700 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          {isLoading ? "Cargando..." : "Preguntar"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {answer && (
        <div>
          <h2>Respuesta:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default DeepSeekWidget;