"use client";
import { useState, useEffect } from "react";
import Canvas from "./components/Canva";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-custom overflow-hidden">
      <h1 className="text-4xl font-bold text-[#f8f5e3]">¡Mosiorama!</h1>
      <Canvas />      

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">¡Bienvenida!</h2>
            <p className="mb-4">♡ Gane el juego para obtener un lindo premio ♡</p>
            <button onClick={closeModal} className="btn-modal">
              Suerte
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
