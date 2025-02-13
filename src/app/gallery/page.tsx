import ImagePreview from "../components/ImagePreview";
import Link from "next/link";

export default function Gallery() {
  const images = [
    {
      src: "card_01.png",
      description: "Los Mosios con la bendición de Renegul GG"
    },
    {
      src: "card_02.png",
      description: "Mosia en su bed con su Pibei, Sinff y Teresa"
    },
    {
      src: "card_03.png",
      description: "Mosia bebé sobre un caballo y bandera mientras la ilumina Mosia adulta como un Sol"
    },
    {
      src: "card_04.png",
      description: "Mosio Sol con Poli y Polo"
    },
    {
      src: "card_05.png",
      description: "Mosios cuando se ven Mosios mmm mmmuuack"
    },
    {
      src: "card_06.png",
      description: "Nuestro bebé huevito que es una estrella"
    },
    {
      src: "fondo.png",
      description: "El fondo uwu"
    },
    {
      src: "tapa.png",
      description: "La parte trasera de todas las cartas"
    },
    {
      src: "mosios.gif",
      description: "Gif de mosios queriendose jeje"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-7xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Galería de Imágenes</h1>

      </div>
      <ImagePreview images={images} />
      <Link 
          href="/"
          className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
        >
          Regresar al Inicio
        </Link>
    </main>
  );
}