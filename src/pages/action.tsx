'use client';

import { actions } from '@/data/content';

export default function ActionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center gradient-text">
            Wie du handeln kannst
          </h1>
          <p className="text-center text-gray-700 mb-16 text-lg max-w-2xl mx-auto">
            Jeder kann einen Unterschied machen. Hier sind praktische Wege, wie du Menschenrechte schützen und fördern kannst:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {actions.map((action, index) => (
              <div
                key={action.id}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{action.title}</h2>
                </div>
                <p className="text-gray-700">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Unterstützenswerte Organisationen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">🕊️ Amnesty International</h3>
              <p className="text-gray-700 mb-4">Eine der weltweit größten Menschenrechtsorganisationen, die sich gegen Ungerechtigkeit kämpft.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Mehr erfahren
              </button>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">👁️ Human Rights Watch</h3>
              <p className="text-gray-700 mb-4">Untersucht und dokumentiert Menschenrechtsverletzungen in über 100 Ländern.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Mehr erfahren
              </button>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">🌐 Ärzte ohne Grenzen</h3>
              <p className="text-gray-700 mb-4">Bietet medizinische Hilfe in Konfliktgebieten und leistet humanitäre Arbeit weltweit.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Beginne heute noch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Du brauchst nicht perfekt zu sein, um einen Unterschied zu machen. Jede kleine Aktion zählt.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Mein Engagement starten
          </button>
        </div>
      </section>
    </main>
  );
}
