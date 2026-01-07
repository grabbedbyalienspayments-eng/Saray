import { useState } from 'react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    setActiveModal(sectionId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <footer className="bg-[#B41E1E] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact
              </h3>
              <div className="space-y-2 text-white/90">
                <p className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  Str. Horea 15, Cluj-Napoca
                </p>
                <p className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  <a href="tel:0700000000" className="hover:text-white transition-colors">
                    070 000 000
                  </a>
                </p>
                <p className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  <a href="mailto:contact@saraykebapcluj.ro" className="hover:text-white transition-colors">
                    contact@saraykebapcluj.ro
                  </a>
                </p>
              </div>
            </div>

            {/* Program */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Program
              </h3>
              <div className="space-y-2 text-white/90">
                <p>Luni - Duminică</p>
                <p className="text-lg font-semibold">10:00 - 23:00</p>
                <p className="text-sm mt-2">
                  Gătit pe cărbuni naturali cu ingrediente din Istanbul
                </p>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Saray Kebap Cluj
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Gustul autentic al Turciei, adus în Cluj de bucătarul Yilmaz Kemal. 
                Preparate tradiționale cu ingrediente originale și tehnici pe cărbuni naturali.
              </p>
            </div>
          </div>

          {/* Company Data */}
          <div className="border-t border-white/20 pt-8 mb-6">
            <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">
              <div>
                <h4 className="font-semibold text-white mb-2">Date firmă:</h4>
                <p>SC SARAY KEBAP CLUJ SRL</p>
                <p>CUI: RO12345678</p>
                <p>J12/1234/2023</p>
                <p>Capital social: 200 LEI</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Informații legale:</h4>
                <div className="space-y-1">
                  <button 
                    onClick={() => scrollToSection('termeni')}
                    className="hover:text-white transition-colors block"
                  >
                    Termeni și condiții
                  </button>
                  <button 
                    onClick={() => scrollToSection('privacy')}
                    className="hover:text-white transition-colors block"
                  >
                    Politica de confidențialitate
                  </button>
                  <button 
                    onClick={() => scrollToSection('cookies')}
                    className="hover:text-white transition-colors block"
                  >
                    Politica de cookies
                  </button>
                  <button 
                    onClick={() => scrollToSection('gdpr')}
                    className="hover:text-white transition-colors block"
                  >
                    GDPR
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Saray Kebap Cluj. Toate drepturile rezervate.</p>
            </div>
            <div className="flex items-center">
              <a 
                href="https://websiteon.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Made by WebsiteON.ro
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal pentru Termeni și Condiții */}
      {activeModal === 'termeni' && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Termeni și Condiții
              </h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-[#B41E1E] text-white rounded-full hover:bg-[#9A1A1A] transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none text-[#1C1C1C]/80">
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">1. Informații generale</h3>
                <p>
                  Prezentii termeni și condiții reglementează utilizarea site-ului web și serviciilor oferite de SC SARAY KEBAP CLUJ SRL, 
                  cu sediul în Cluj-Napoca, Str. Horea 15, CUI: RO12345678, înregistrată la J12/1234/2023.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2. Servicii oferite</h3>
                <p>Saray Kebap Cluj oferă:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prepararea și servirea de mâncare turcească autentică</li>
                  <li>Servicii de livrare la domiciliu în Cluj-Napoca și Florești</li>
                  <li>Rezervări pentru masa în restaurant</li>
                  <li>Comenzi telefonice și online</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">3. Comenzi și plăți</h3>
                <p>
                  Comenzile se pot plasa telefonic la 070 000 000 sau prin formularul de contact. 
                  Prețurile afișate sunt orientative și pot suferi modificări în funcție de disponibilitatea ingredientelor premium.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">4. Livrări</h3>
                <p>
                  Livrările se efectuează în Cluj-Napoca și Florești. Livrarea este gratuită pentru comenzi peste 80 lei. 
                  Timpul de livrare estimat este de 30-45 minute.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">5. Contact</h3>
                <p>Pentru întrebări:</p>
                <ul className="list-disc pl-6">
                  <li>Telefon: 070 000 000</li>
                  <li>Email: contact@saraykebapcluj.ro</li>
                </ul>
              </section>

              <p className="text-sm text-[#1C1C1C]/60 mt-8">Ultima actualizare: Decembrie 2024</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal pentru Politica de Confidențialitate */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Politica de Confidențialitate
              </h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-[#B41E1E] text-white rounded-full hover:bg-[#9A1A1A] transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none text-[#1C1C1C]/80">
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">1. Date colectate</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Date de identificare: nume, prenume</li>
                  <li>Date de contact: telefon, email</li>
                  <li>Date de livrare: adresa de livrare</li>
                  <li>Date despre comenzi: preferințe culinare</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2. Scopul prelucrării</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesarea și livrarea comenzilor</li>
                  <li>Comunicarea cu clienții</li>
                  <li>Îmbunătățirea serviciilor</li>
                  <li>Marketing direct (cu acordul dvs.)</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">3. Drepturile dumneavoastră</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dreptul de acces la datele personale</li>
                  <li>Dreptul de rectificare</li>
                  <li>Dreptul de ștergere</li>
                  <li>Dreptul de opoziție</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">4. Contact</h3>
                <ul className="list-disc pl-6">
                  <li>Email: contact@saraykebapcluj.ro</li>
                  <li>Telefon: 070 000 000</li>
                </ul>
              </section>

              <p className="text-sm text-[#1C1C1C]/60 mt-8">Ultima actualizare: Decembrie 2024</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal pentru Politica de Cookies */}
      {activeModal === 'cookies' && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Politica de Cookies
              </h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-[#B41E1E] text-white rounded-full hover:bg-[#9A1A1A] transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none text-[#1C1C1C]/80">
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">1. Ce sunt cookies-urile?</h3>
                <p>
                  Cookies-urile sunt fișiere mici de text care se stochează pe dispozitivul dumneavoastră 
                  când vizitați site-ul nostru.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2. Tipuri de cookies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-2">Cookies esențiale</h4>
                    <p>Necesare pentru funcționarea corectă a site-ului</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-2">Cookies de performanță</h4>
                    <p>Google Analytics pentru înțelegerea traficului</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-2">Cookies de marketing</h4>
                    <p>Pentru publicitate personalizată (cu consimțământ)</p>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">3. Gestionarea cookies</h3>
                <p>Puteți controla cookies-urile prin setările browserului sau bannere de consimțământ.</p>
              </section>

              <p className="text-sm text-[#1C1C1C]/60 mt-8">Ultima actualizare: Decembrie 2024</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal pentru GDPR */}
      {activeModal === 'gdpr' && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Informații GDPR
              </h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-[#B41E1E] text-white rounded-full hover:bg-[#9A1A1A] transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none text-[#1C1C1C]/80">
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">1. Ce este GDPR?</h3>
                <p>
                  Regulamentul General privind Protecția Datelor este o lege europeană care protejează 
                  datele personale ale cetățenilor UE.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2. Drepturile dumneavoastră GDPR</h3>
                <div className="space-y-3">
                  <div className="bg-[#F8E7D0] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2"><i className="ri-eye-line mr-2 text-[#B41E1E]"></i>Dreptul de acces</h4>
                    <p>Puteți solicita o copie a datelor personale</p>
                  </div>
                  <div className="bg-[#F8E7D0] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2"><i className="ri-edit-line mr-2 text-[#B41E1E]"></i>Dreptul de rectificare</h4>
                    <p>Puteți cere corectarea datelor inexacte</p>
                  </div>
                  <div className="bg-[#F8E7D0] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2"><i className="ri-delete-bin-line mr-2 text-[#B41E1E]"></i>Dreptul de ștergere</h4>
                    <p>Puteți solicita ștergerea datelor personale</p>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">3. Contact</h3>
                <div className="bg-white border-2 border-[#B41E1E] rounded-xl p-4">
                  <p><strong>Email:</strong> contact@saraykebapcluj.ro</p>
                  <p><strong>Telefon:</strong> 070 000 000</p>
                  <p className="text-sm mt-2">Răspundem în maximum 30 de zile</p>
                </div>
              </section>

              <p className="text-sm text-[#1C1C1C]/60 mt-8">Ultima actualizare: Decembrie 2024</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
