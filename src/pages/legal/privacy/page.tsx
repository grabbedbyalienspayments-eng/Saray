
export default function PrivacyPage() {
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
            Politica de Confidențialitate
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#1C1C1C]/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                1. Informații generale
              </h2>
              <p>
                SC SARAY KEBAP CLUJ SRL, cu sediul în Cluj-Napoca, Str. Horea 15, CUI: RO12345678, 
                respectă confidențialitatea datelor personale și se angajează să protejeze informațiile pe care ni le furnizați.
              </p>
              <p>
                Această politică explică cum colectăm, folosim și protejăm datele dumneavoastră personale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                2. Date colectate
              </h2>
              <p>Colectăm următoarele tipuri de date personale:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Date de identificare:</strong> nume, prenume</li>
                <li><strong>Date de contact:</strong> număr de telefon, adresa de email</li>
                <li><strong>Date de livrare:</strong> adresa de livrare</li>
                <li><strong>Date despre comenzi:</strong> preferințe culinare, istoricul comenzilor</li>
                <li><strong>Date tehnice:</strong> adresa IP, tipul browserului, timpul petrecut pe site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                3. Scopul prelucrării
              </h2>
              <p>Folosim datele dumneavoastră pentru:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Procesarea și livrarea comenzilor</li>
                <li>Comunicarea cu clienții (confirmări, actualizări)</li>
                <li>Îmbunătățirea serviciilor noastre</li>
                <li>Marketing direct (doar cu acordul dumneavoastră)</li>
                <li>Respectarea obligațiilor legale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                4. Temeiurile legale
              </h2>
              <p>Prelucrăm datele pe baza:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Executării contractului (comenzi, livrări)</li>
                <li>Interesului legitim (îmbunătățirea serviciilor)</li>
                <li>Consimțământului (marketing, newsletter)</li>
                <li>Obligațiilor legale (facturare, contabilitate)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                5. Partajarea datelor
              </h2>
              <p>
                Nu vindem, închiriem sau partajăm datele dumneavoastră cu terți, cu excepția:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Furnizorilor de servicii de livrare (doar datele necesare)</li>
                <li>Autorităților competente (la cerere legală)</li>
                <li>Partenerilor de încredere pentru procesarea plăților</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                6. Păstrarea datelor
              </h2>
              <p>
                Păstrăm datele dumneavoastră doar cât timp este necesar pentru îndeplinirea scopurilor 
                pentru care au fost colectate sau conform obligațiilor legale:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Date comenzi: 3 ani (pentru garanție și reclamații)</li>
                <li>Date facturare: 10 ani (obligații fiscale)</li>
                <li>Date marketing: până la retragerea consimțământului</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                7. Drepturile dumneavoastră
              </h2>
              <p>Aveți următoarele drepturi:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dreptul de acces la datele personale</li>
                <li>Dreptul de rectificare a datelor inexacte</li>
                <li>Dreptul de ștergere ("dreptul de a fi uitat")</li>
                <li>Dreptul de restricționare a prelucrării</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de opoziție</li>
                <li>Dreptul de a depune plângere la ANSPDCP</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                8. Securitatea datelor
              </h2>
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor împotriva 
                accesului neautorizat, modificării, divulgării sau distrugerii.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                9. Contact DPO
              </h2>
              <p>
                Pentru exercitarea drepturilor sau întrebări despre prelucrarea datelor, ne puteți contacta:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: contact@saraykebapcluj.ro</li>
                <li>Telefon: 0728 888 404</li>
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
