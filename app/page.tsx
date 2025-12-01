"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// BASE DE DATOS DE OFERTAS (Esto luego vendrá de tu DB real)
const OFERTAS: any = {
  keto: {
    titulo: "Dormía 4 horas... hasta que descubrí este truco de 5 segundos.",
    imagen: "🥑",
    link: "https://www.digistore24.com/redir/283755/antigravity96",
    nicho: "Pérdida de Peso"
  },
  diabetes: {
    titulo: "El secreto para el azúcar en sangre que tu médico no te dice.",
    imagen: "🩸",
    link: "https://www.digistore24.com/redir/OTRO_ID/antigravity96",
    nicho: "Salud"
  },
  madera: {
    titulo: "16,000 Planos de Carpintería para hacer en casa.",
    imagen: "🪑",
    link: "https://hop.clickbank.net/...",
    nicho: "DIY"
  }
};

function Contenido() {
  const searchParams = useSearchParams();
  // Leemos el parametro '?offer=xxx'. Si no existe, usamos 'keto' por defecto.
  const offerKey = searchParams.get('offer') || 'keto';
  const oferta = OFERTAS[offerKey] || OFERTAS['keto'];

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <div className="font-bold text-red-600 tracking-tighter">DAILY NEWS: {oferta.nicho.toUpperCase()}</div>
          <div className="text-xs text-gray-400">Sponsored</div>
        </div>
      </header>

      <article className="max-w-2xl mx-auto bg-white p-6 md:p-10 shadow-lg mt-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-black">
          {oferta.titulo}
        </h1>

        <div className="relative w-full h-64 bg-gray-200 mb-8 rounded-lg flex items-center justify-center text-6xl">
          {oferta.imagen}
        </div>

        <div className="prose prose-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            <span className="font-bold">Atención - </span>
            Miles de personas están hablando de esto. No es magia, es ciencia.
          </p>
          <div className="my-6 bg-yellow-50 p-6 border-l-4 border-yellow-400 italic text-gray-700">
            "Pensé que no había solución, hasta que probé este método."
          </div>
        </div>

        <div className="mt-10 p-6 bg-red-50 border-2 border-dashed border-red-200 rounded-xl text-center">
          <a
            href={oferta.link}
            target="_blank"
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-5 rounded-lg shadow-xl animate-pulse"
          >
            VER VIDEO AHORA &gt;&gt;
          </a>
        </div>
      </article>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando oferta...</div>}>
      <Contenido />
    </Suspense>
  );
}