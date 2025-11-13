export default function Footer() {
  return (
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
                <a href="tel:0728888404" className="hover:text-white transition-colors">
                  0728 888 404
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
                <a href="/termeni-si-conditii" className="hover:text-white transition-colors block">Termeni și condiții</a>
                <a href="/politica-confidentialitate" className="hover:text-white transition-colors block">Politica de confidențialitate</a>
                <a href="/politica-cookies" className="hover:text-white transition-colors block">Politica de cookies</a>
                <a href="/gdpr" className="hover:text-white transition-colors block">GDPR</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Saray Kebap Cluj. Toate drepturile rezervate.</p>
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
  );
}
