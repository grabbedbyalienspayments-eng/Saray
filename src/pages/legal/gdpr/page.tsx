
export default function GDPRPage() {
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
            Informații GDPR
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#1C1C1C]/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                1. Ce este GDPR?
              </h2>
              <p>
                Regulamentul General privind Protecția Datelor (GDPR) este o lege europeană care protejează 
                datele personale ale cetățenilor UE. SC SARAY KEBAP CLUJ SRL respectă în totalitate 
                prevederile acestui regulament.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                2. Drepturile dumneavoastră GDPR
              </h2>
              
              <div className="space-y-4">
                <div className="bg-[#F8E7D0] p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                    <i className="ri-eye-line mr-2 text-[#B41E1E]"></i>
                    Dreptul de acces
                  </h3>
                  <p>
                    Puteți solicita o copie a tuturor datelor personale pe care le deținem despre dumneavoastră.
                  </p>
                </div>

                <div className="bg-[#F8E7D0] p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                    <i className="ri-edit-line mr-2 text-[#B41E1E]"></i>
                    Dreptul de rectificare
                  </h3>
                  <p>
                    Puteți cere corectarea datelor inexacte sau completarea datelor incomplete.
                  </p>
                </div>

                <div className="bg-[#F8E7D0] p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                    <i className="ri-delete-bin-line mr-2 text-[#B41E1E]"></i>
                    Dreptul de ștergere
                  </h3>
                  <p>
                    Puteți solicita ștergerea datelor personale în anumite condiții ("dreptul de a fi uitat").
                  </p>
                </div>

                <div className="bg-[#F8E7D0] p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                    <i className="ri-pause-line mr-2 text-[#B41E1E]"></i>
                    Dreptul de restricționare
                  </h3>
                  <p>
                    Puteți cere limitarea prelucrării datelor în anumite situații.
                  </p>
                </div>

                <div className="bg-[#F8E7D0] p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                    <i className="ri-download-line mr-2 text-[#B41E1E]"></i>
                    Dreptul la portabilitate
                  </h3>
                  <p>
                    Puteți primi datele într-un format structurat pentru transfer la alt furnizor.
                  </p>
                </div>

                <div className="bg-[#F8E7D0] p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                    <i className="ri-close-line mr-2 text-[#B41E1E]"></i>
                    Dreptul de opoziție
                  </h3>
                  <p>
                    Puteți vă opune prelucrării datelor pentru marketing direct sau alte scopuri.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                3. Cum exercitați aceste drepturi?
              </h2>
              
              <div className="bg-white border-2 border-[#B41E1E] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Contactați-ne prin:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="ri-mail-line text-[#B41E1E]"></i>
                    <span><strong>Email:</strong> contact@saraykebapcluj.ro</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-phone-line text-[#B41E1E]"></i>
                    <span><strong>Telefon:</strong> 0728 888 404</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-map-pin-line text-[#B41E1E]"></i>
                    <span><strong>Adresa:</strong> Str. Horea 15, Cluj-Napoca</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-[#F8E7D0] rounded-lg">
                  <p className="text-sm">
                    <strong>Timp de răspuns:</strong> Vă vom răspunde în maximum 30 de zile de la primirea cererii.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                4. Consimțământul
              </h2>
              <p>
                Pentru anumite activități de prelucrare, avem nevoie de consimțământul dumneavoastră explicit:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trimiterea de oferte și promoții prin email</li>
                <li>Cookies de marketing și publicitate</li>
                <li>Utilizarea datelor pentru studii de piață</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> Puteți retrage consimțământul oricând, fără a afecta legalitatea 
                prelucrării efectuate înainte de retragere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                5. Securitatea datelor
              </h2>
              <p>Implementăm măsuri de securitate pentru protejarea datelor:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptarea datelor sensibile</li>
                <li>Acces restricționat la datele personale</li>
                <li>Backup-uri regulate și securizate</li>
                <li>Monitorizarea accesului la sisteme</li>
                <li>Instruirea personalului în protecția datelor</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                6. Transferul datelor
              </h2>
              <p>
                Datele dumneavoastră sunt procesate în România și în Uniunea Europeană. 
                Nu transferăm date personale în afara UE fără garanții adecvate de protecție.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                7. Încălcări de securitate
              </h2>
              <p>
                În cazul unei încălcări de securitate care poate afecta datele dumneavoastră personale, 
                vă vom notifica în termen de 72 de ore și vom lua toate măsurile necesare pentru remediere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                8. Plângeri
              </h2>
              <p>
                Dacă considerați că drepturile dumneavoastră GDPR au fost încălcate, puteți depune o plângere la:
              </p>
              <div className="bg-[#F8E7D0] p-4 rounded-xl mt-4">
                <p><strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong></p>
                <p>Website: <a href="https://www.dataprotection.ro" className="text-[#B41E1E] hover:underline">www.dataprotection.ro</a></p>
                <p>Email: anspdcp@dataprotection.ro</p>
                <p>Telefon: 021.252.5599</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                9. Responsabilul cu protecția datelor
              </h2>
              <p>
                Pentru întrebări specifice GDPR, puteți contacta responsabilul nostru cu protecția datelor 
                la adresa contact@saraykebapcluj.ro cu subiectul "GDPR - Protecția Datelor".
              </p>
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
