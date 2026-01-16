'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Über uns</h3>
            <p className="text-gray-400">Eine Website zur Aufklärung über Menschenrechte für Schulen und Lernende.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quellen</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">UN Menschenrechte</a></li>
              <li><a href="#" className="hover:text-white transition">Amnesty International</a></li>
              <li><a href="#" className="hover:text-white transition">Human Rights Watch</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <p className="text-gray-400">info@menschenrechte.de</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Menschenrechte Projekt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
