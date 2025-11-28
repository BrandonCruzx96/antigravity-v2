import Image from "next/image";

export default function Home() {
  // TU LINK DE AFILIADO (Aquí pondremos el real de ClickBank luego)
  const affiliateLink = "https://www.digistore24.com/redir/283755/antigravity96";

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* HEADER TIPO NOTICIA */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <div className="font-bold text-red-600 tracking-tighter">DAILY HEALTH NEWS</div>
          <div className="text-xs text-gray-400">Sponsored Content</div>
        </div>
      </header>

      <article className="max-w-2xl mx-auto bg-white p-6 md:p-10 shadow-lg mt-4 mb-10">
        {/* TITULO AGRESIVO */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-black">
          "Dormía 4 horas y me despertaba con dolor..." Hasta que descubrí este truco de 5 segundos.
        </h1>

        <div className="flex items-center space-x-2 mb-6 text-sm text-gray-500">
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold">VIRAL</span>
          <span>• Actualizado hace 2 horas</span>
        </div>

        {/* IMAGEN DE GANCHO (Placeholder) */}
        <div className="relative w-full h-64 md:h-80 bg-gray-200 mb-8 rounded-lg overflow-hidden flex items-center justify-center border border-gray-300">
          <div className="text-center">
            <p className="text-gray-500 font-bold text-lg">[AQUÍ IRÁ EL VIDEO]</p>
            <p className="text-sm text-gray-400">(Imagen simulada)</p>
          </div>
        </div>

        {/* CUERPO DEL TEXTO */}
        <div className="prose prose-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            <span className="font-bold">Sídney, Australia - </span>
            ¿Te has sentido alguna vez como un zombi viviente? Yo sí.
          </p>
          <p className="mb-4">
            Cada mañana sonaba el despertador y sentía que un camión me había pasado por encima.
            El cuello rígido, la mente nublada... y lo peor de todo: la báscula subiendo sin parar.
          </p>

          <div className="my-6 bg-yellow-50 p-6 border-l-4 border-yellow-400 italic text-gray-700">
            "Probé pastillas, probé almohadas de $200 dólares, probé meditación. Nada funcionaba hasta que vi esto."
          </div>

          <p className="mb-4">
            Hasta que un especialista en sueño filtró este
            <strong> Ritual Nocturno de 10 Segundos</strong> que está volviendo locos a los doctores.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">La Solución que la Industria Odia</h2>
          <p className="mb-6">
            No se trata de medicamentos. Es un método natural que "reinicia" tu metabolismo mientras duermes.
            Miles de personas ya lo están usando.
          </p>
        </div>

        {/* CALL TO ACTION (BOTÓN ROJO) */}
        <div className="mt-10 p-6 bg-red-50 border-2 border-dashed border-red-200 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2 text-red-700">Oferta Limitada para Lectores</h3>
          <p className="mb-4 text-sm text-gray-600">Disponibilidad baja debido a la alta demanda viral.</p>

          <a
            href={affiliateLink}
            target="_blank"
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-5 rounded-lg shadow-xl transform transition hover:scale-105"
          >
            VER VIDEO AHORA &gt;&gt;
          </a>
          <p className="mt-3 text-xs text-gray-500">100% Garantía de Satisfacción</p>
        </div>
      </article>

      <footer className="text-center text-xs text-gray-400 pb-10">
        <p>© 2025 Health News. All rights reserved.</p>
        <p className="mt-2">This site is not part of the Facebook website or Facebook Inc.</p>
      </footer>
    </main>
  );
}