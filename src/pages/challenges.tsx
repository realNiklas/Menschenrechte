'use client';

import { challenges } from '@/data/content';

export default function ChallengesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center gradient-text">
            Aktuelle Herausforderungen
          </h1>
          <p className="text-center text-gray-700 mb-16 text-lg max-w-2xl mx-auto">
            Trotz internationaler Gesetze werden Menschenrechte weltweit verletzt. Hier sind einige der größten Probleme:
          </p>

          <div className="grid grid-cols-1 gap-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{challenge.title}</h2>
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold text-sm">
                    {challenge.impact}
                  </span>
                </div>
                <p className="text-gray-700 text-lg">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Weltweite Statistiken</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Menschenhandel</h3>
              <p className="text-gray-700">Jedes Jahr werden Millionen von Menschen Opfer von Menschenhandel. Dies ist eine der schlimmsten Menschenrechtsverletzungen.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Zugang zu sauberem Wasser</h3>
              <p className="text-gray-700">Etwa 2 Milliarden Menschen haben keinen Zugang zu sauberem Trinkwasser - ein fundamentales Menschenrecht.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
