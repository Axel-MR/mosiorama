// src/app/components/Canvas.jsx
"use client";
import { useState, useEffect } from "react";
import Card from "./Card";
import Link from "next/link"; 

const images = [
  "/images/card_01.png",
  "/images/card_02.png",
  "/images/card_03.png",
  "/images/card_04.png",
  "/images/card_05.png", // Nueva imagen
  "/images/card_06.png", // Nueva imagen
];

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const initializeGame = () => {
    const initialCards = [...images, ...images]
      .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(initialCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setShowModal(false); // Cierra la modal al reiniciar
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    if (clickedCard.isFlipped || clickedCard.isMatched) return;

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      const [firstCardId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = clickedCard;

      if (firstCard.image === secondCard.image) {
        setTimeout(() => {
          const newCards = cards.map((card) =>
            card.id === firstCardId || card.id === id
              ? { ...card, isMatched: true }
              : card
          );
          setCards(newCards);
          setMatchedPairs((prev) => prev + 1);
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = cards.map((card) =>
            card.id === firstCardId || card.id === id
              ? { ...card, isFlipped: false }
              : card
          );
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedPairs === images.length) {
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  }, [matchedPairs]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-x-hidden">
      {/* Primera fila de 4 cartas */}
      <div className="grid grid-cols-4 gap-x-2 gap-y-1 mb-4">
        {cards.slice(0, 4).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            isFlipped={card.isFlipped || card.isMatched}
            isMatched={card.isMatched}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Segunda fila de 4 cartas */}
      <div className="grid grid-cols-4 gap-x-2 gap-y-1 mb-4">
        {cards.slice(4, 8).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            isFlipped={card.isFlipped || card.isMatched}
            isMatched={card.isMatched}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Tercera fila de 4 cartas */}
      <div className="grid grid-cols-4 gap-x-2 gap-y-1">
        {cards.slice(8, 12).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            isFlipped={card.isFlipped || card.isMatched}
            isMatched={card.isMatched}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Botón de reinicio */}
      <button onClick={initializeGame} className="mt-4">
        <img src="/images/restart.png" alt="Reiniciar" className="w-[244] h-[108px]" />
      </button>

      <Link href="/gallery">
        <button>
          Ver Galería
        </button>
      </Link>

      {/* Modal de victoria */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f0b7b7] bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center bg-opacity-20">
            <h1 className="text-xl font-bold mb-4">GG MOSIA! </h1>
            <img src="/images/mosios.gif?nocache=1" alt="Victoria" className="w-40 h-auto mx-auto mb-4 bg-[#f0b7b7] bg-opacity-0" />
            <p className="mb-4">Tu premio es una cita de San Valentín con tu Mosio</p>
            <button onClick={initializeGame} className="btn-modal">
              tiamo :3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canvas;