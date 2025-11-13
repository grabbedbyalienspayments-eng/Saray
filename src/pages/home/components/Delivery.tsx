
export default function Delivery() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="delivery" className="py-20 bg-[#F8E7D0]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Livrare & Comenzi
          </h2>
          <div className="w-24 h-1 bg-[#C8A46B] mx-auto mb-6"></div>
          <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
            Livrăm în Cluj-Napoca și Florești, rapid și cu grijă
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Livrare Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#B41E1E] rounded-full flex items-center justify-center mr-4">
                <i className="ri-truck-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Zone de Livrare
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#C8A46B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-map-pin-line text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">Cluj-Napoca</h4>
                  <p className="text-[#1C1C1C]/70 text-sm">Livrare în toată Cluj-Napoca</p>
                  <p className="text-[#B41E1E] font-medium text-sm">Timp estimat: 30-45 minute</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#C8A46B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-map-pin-line text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">Florești</h4>
                  <p className="text-[#1C1C1C]/70 text-sm">Livrare în Florești și împrejurimi</p>
                  <p className="text-[#B41E1E] font-medium text-sm">Pentru zone limitrofe, timpul poate varia</p>
                </div>
              </div>

              <div className="bg-[#F8E7D0] rounded-xl p-4 mt-6">
                <div className="flex items-center mb-2">
                  <i className="ri-gift-line text-[#B41E1E] mr-2"></i>
                  <span className="font-semibold text-[#1C1C1C]">Prag de livrare gratuită: 80 lei</span>
                </div>
                <p className="text-[#1C1C1C]/80 text-sm">
                  Păstrăm preparatele la temperatură optimă și confirmăm telefonic pentru prospețime
                </p>
              </div>

              <div className="bg-[#B41E1E]/10 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <i className="ri-store-line text-[#B41E1E] mr-2"></i>
                  <span className="font-semibold text-[#1C1C1C]">Ridicare personală</span>
                </div>
                <p className="text-[#1C1C1C]/80 text-sm">
                  Disponibilă la Str. Horea 15, Cluj-Napoca
                </p>
              </div>
            </div>
          </div>

          {/* Comenzi */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mr-4">
                <i className="ri-message-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Modalități de Comandă
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              <a
                href="tel:+40728888404"
                className="flex items-center justify-between bg-[#B41E1E] text-white p-4 rounded-xl hover:bg-[#9A1A1A] transition-colors group"
              >
                <div className="flex items-center">
                  <i className="ri-phone-line text-2xl mr-4"></i>
                  <div>
                    <div className="font-semibold">Sună acum, gătim pe loc</div>
                    <div className="text-sm opacity-90">0728 888 404</div>
                  </div>
                </div>
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a
                href="https://wa.me/40728888404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#25D366] text-white p-4 rounded-xl hover:bg-[#20B858] transition-colors group"
              >
                <div className="flex items-center">
                  <i className="ri-whatsapp-line text-2xl mr-4"></i>
                  <div>
                    <div className="font-semibold">Scrie-ne rapid pe WhatsApp</div>
                    <div className="text-sm opacity-90">Mesaj instant</div>
                  </div>
                </div>
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-between bg-[#C8A46B] text-white p-4 rounded-xl hover:bg-[#B8956B] transition-colors group w-full"
              >
                <div className="flex items-center">
                  <i className="ri-mail-line text-2xl mr-4"></i>
                  <div>
                    <div className="font-semibold">Formular Contact</div>
                    <div className="text-sm opacity-90">Completează mai jos</div>
                  </div>
                </div>
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>

            <div className="bg-[#F8E7D0] rounded-xl p-4">
              <div className="flex items-center mb-2">
                <i className="ri-time-line text-[#B41E1E] mr-2"></i>
                <span className="font-semibold text-[#1C1C1C]">Program Comenzi</span>
              </div>
              <p className="text-[#1C1C1C]/80 text-sm mb-2">
                Luni - Duminică: 10:00 - 23:00
              </p>
              <p className="text-[#1C1C1C]/70 text-xs">
                Răspundem prompt între 10:00 și 23:00
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#B41E1E] to-[#C8A46B] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Gata să savurezi autenticitatea turcească?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Comandă acum și bucură-te de preparatele noastre delicioase, gătite cu pasiune și servite cu dragoste
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+40728888404"
                className="bg-white text-[#B41E1E] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center space-x-2"
              >
                <i className="ri-phone-line"></i>
                <span>Comenzi: 0728 888 404</span>
              </a>
              <a
                href="https://wa.me/40728888404"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#20B858] transition-colors whitespace-nowrap flex items-center space-x-2"
              >
                <i className="ri-whatsapp-line"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
