'use client';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Menschenrechte für Alle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Verstehen, Schützen, Verteidigen - Deine Stimme zählt
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
              Mehr Erfahren
            </button>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Wichtige Fakten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">1948</div>
              <p className="text-lg">Allgemeine Erklärung der Menschenrechte verabschiedet</p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-lg text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-4">30</div>
              <p className="text-lg">Artikel in der Menschenrechtserklärung</p>
            </div>
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="text-5xl font-bold text-red-600 mb-4">193</div>
              <p className="text-lg">UN-Mitgliedstaaten</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Erkunde die verschiedenen Bereiche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/rights" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition p-8 rounded-lg">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-2">Deine Rechte</h3>
              <p>Erfahre, welche Menschenrechte es gibt</p>
            </a>
            <a href="/challenges" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition p-8 rounded-lg">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-2">Herausforderungen</h3>
              <p>Lerne über aktuelle Probleme</p>
            </a>
            <a href="/action" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition p-8 rounded-lg">
              <div className="text-4xl mb-4">✊</div>
              <h3 className="text-2xl font-bold mb-2">So kannst du handeln</h3>
              <p>Mache den Unterschied</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
