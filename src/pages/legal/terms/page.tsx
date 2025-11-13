
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8E7D0]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-[#B41E1E]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Saray Kebap Cluj
            </a>
            <a 
              href="/"
              className="text-[#1C1C1C] hover:text-[#B41E1E] transition-colors flex items-center space-x-2"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Înapoi la site</span>
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Termeni și Condiții
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#1C1C1C]/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                1. Informații generale
              </h2>
              <p>
                Prezentii termeni și condiții reglementează utilizarea site-ului web și serviciilor oferite de SC SARAY KEBAP CLUJ SRL, 
                cu sediul în Cluj-Napoca, Str. Horea 15, CUI: RO12345678, înregistrată la J12/1234/2023.
              </p>
              <p>
                Prin accesarea și utilizarea site-ului nostru, acceptați în totalitate acești termeni și condiții.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                2. Servicii oferite
              </h2>
              <p>
                Saray Kebap Cluj oferă servicii de restaurant și catering, incluzând:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prepararea și servirea de mâncare turcească autentică</li>
                <li>Servicii de livrare la domiciliu în Cluj-Napoca și Florești</li>
                <li>Rezervări pentru masa în restaurant</li>
                <li>Comenzi telefonice și online</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                3. Comenzi și plăți
              </h2>
              <p>
                Comenzile se pot plasa telefonic la 0728 888 404 sau prin formularul de contact de pe site. 
                Prețurile afișate sunt orientative și pot suferi modificări în funcție de disponibilitatea ingredientelor premium.
              </p>
              <p>
                Plata se efectuează la livrare sau la ridicarea personală. Acceptăm plăți în numerar și cu cardul.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                4. Livrări
              </h2>
              <p>
                Livrările se efectuează în Cluj-Napoca și Florești. Livrarea este gratuită pentru comenzi peste 80 lei. 
                Timpul de livrare estimat este de 30-45 minute, în funcție de distanță și trafic.
              </p>
              <p>
                Ne rezervăm dreptul de a refuza livrarea în anumite zone sau în condiții meteorologice extreme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                5. Anulări și returnări
              </h2>
              <p>
                Comenzile pot fi anulate în primele 10 minute de la plasare. După începerea preparării, 
                anularea nu mai este posibilă din motive de siguranță alimentară.
              </p>
              <p>
                În cazul unor probleme cu calitatea produselor, vă rugăm să ne contactați imediat pentru rezolvare.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                6. Responsabilități
              </h2>
              <p>
                Ne angajăm să respectăm cele mai înalte standarde de igienă și siguranță alimentară. 
                Toate ingredientele sunt verificate și preparatele sunt realizate în condiții optime.
              </p>
              <p>
                Clientul este responsabil să ne informeze despre eventuale alergii alimentare înainte de plasarea comenzii.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                7. Modificări
              </h2>
              <p>
                Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                Modificările vor fi publicate pe site și vor intra în vigoare imediat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                8. Contact
              </h2>
              <p>
                Pentru întrebări legate de acești termeni și condiții, ne puteți contacta:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Telefon: 0728 888 404</li>
                <li>Email: contact@saraykebapcluj.ro</li>
                <li>Adresa: Str. Horea 15, Cluj-Napoca</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-[#1C1C1C]/60">
              Ultima actualizare: Decembrie 2024
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
