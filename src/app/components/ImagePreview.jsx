"use client";
import { useState } from "react";

export default function ImagePreview({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={`/images/${image.src}`}
          alt={image.description}
          className="w-full h-auto cursor-pointer rounded-lg shadow-lg hover:scale-105 transition scale-x-[-1]"
          onClick={() => setSelectedImage(image)}
        />
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <img
            src={`/images/${selectedImage.src}`}
            alt={selectedImage.description}
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-xl scale-x-[-1]"
          />

          <div className="mt-4 p-4 bg-white text-black max-w-lg rounded-lg shadow-lg overflow-y-auto">
            <p className="text-center">
              {selectedImage.description}
            </p>
          </div>

          <button
            className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
            onClick={() => setSelectedImage(null)}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}