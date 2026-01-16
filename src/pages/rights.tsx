'use client';

import { rights } from '@/data/content';
import { useState } from 'react';

export default function RightsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center gradient-text">
            Grundlegende Menschenrechte
          </h1>
          <p className="text-center text-gray-700 mb-16 text-lg max-w-2xl mx-auto">
            Die Allgemeine Erklärung der Menschenrechte von 1948 garantiert diese fundamentalen Rechte für alle Menschen, unabhängig von Rasse, Farbe, Geschlecht, Sprache, Religion oder Herkunft.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right) => (
              <div
                key={right.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
                onClick={() => setExpandedId(expandedId === right.id ? null : right.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{right.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{right.title}</h2>
                  </div>
                  <p className="text-gray-700">{right.description}</p>
                  {expandedId === right.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600">{right.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Declaration Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Die Allgemeine Erklärung der Menschenrechte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4">📅 Geschichte</h3>
              <p className="text-gray-700">Die Erklärung wurde am 10. Dezember 1948 von der UN-Generalversammlung verabschiedet.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4">🌍 Reichweite</h3>
              <p className="text-gray-700">Sie gilt für alle Menschen und alle Länder weltweit ohne Ausnahmen.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4">⚖️ Konsequenzen</h3>
              <p className="text-gray-700">Verstöße können vor internationalen Gerichten geahndet werden.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
