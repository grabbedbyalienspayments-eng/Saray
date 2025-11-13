
export default function CookiesPage() {
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
            Politica de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#1C1C1C]/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                1. Ce sunt cookies-urile?
              </h2>
              <p>
                Cookies-urile sunt fișiere mici de text care se stochează pe dispozitivul dumneavoastră 
                când vizitați site-ul nostru. Ele ne ajută să îmbunătățim experiența de navigare și să 
                personalizăm conținutul.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                2. Tipuri de cookies folosite
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Cookies esențiale</h3>
                  <p>
                    Necesare pentru funcționarea corectă a site-ului. Nu pot fi dezactivate și includ:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cookies de sesiune pentru navigare</li>
                    <li>Cookies pentru securitate</li>
                    <li>Cookies pentru funcționalitatea formularelor</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Cookies de performanță</h3>
                  <p>
                    Ne ajută să înțelegem cum interactionați cu site-ul nostru:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics (trafic, pagini vizitate)</li>
                    <li>Timpul petrecut pe site</li>
                    <li>Ratele de respingere</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Cookies de funcționalitate</h3>
                  <p>
                    Îmbunătățesc experiența de utilizare:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Preferințele de limbă</li>
                    <li>Setările de afișare</li>
                    <li>Informațiile de contact salvate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Cookies de marketing</h3>
                  <p>
                    Folosite pentru publicitate personalizată (doar cu consimțământul dumneavoastră):
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Facebook Pixel</li>
                    <li>Google Ads</li>
                    <li>Remarketing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                3. Cookies de la terți
              </h2>
              <p>Site-ul nostru poate include cookies de la:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google:</strong> Analytics, Maps, reCAPTCHA</li>
                <li><strong>Facebook:</strong> Social plugins, remarketing</li>
                <li><strong>YouTube:</strong> Video-uri integrate</li>
                <li><strong>WhatsApp:</strong> Widget de chat</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                4. Durata de stocare
              </h2>
              <div className="space-y-3">
                <p><strong>Cookies de sesiune:</strong> Se șterg când închideți browserul</p>
                <p><strong>Cookies persistente:</strong> Rămân stocate pentru perioade specifice:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Preferințe utilizator: 1 an</li>
                  <li>Analytics: 2 ani</li>
                  <li>Marketing: 30-90 zile</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                5. Gestionarea cookies-urilor
              </h2>
              <p>Puteți controla cookies-urile prin:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Setările browserului</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Chrome:</strong> Setări → Confidențialitate și securitate → Cookies</li>
                    <li><strong>Firefox:</strong> Opțiuni → Confidențialitate și securitate</li>
                    <li><strong>Safari:</strong> Preferințe → Confidențialitate</li>
                    <li><strong>Edge:</strong> Setări → Cookies și permisiuni site</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Bannere de consimțământ</h3>
                  <p>
                    La prima vizită, veți vedea un banner unde puteți alege ce tipuri de cookies acceptați.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                6. Impactul dezactivării
              </h2>
              <p>Dezactivarea anumitor cookies poate afecta:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Funcționarea corectă a formularelor</li>
                <li>Personalizarea conținutului</li>
                <li>Viteza de încărcare a paginilor</li>
                <li>Funcțiile sociale (share, like)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                7. Actualizări
              </h2>
              <p>
                Această politică poate fi actualizată periodic pentru a reflecta schimbările în 
                utilizarea cookies-urilor sau în legislație. Vă recomandăm să o consultați regulat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                8. Contact
              </h2>
              <p>Pentru întrebări despre cookies-uri, ne puteți contacta:</p>
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
