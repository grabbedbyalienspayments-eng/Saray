
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    email: '',
    tipComanda: 'comanda',
    mesaj: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate textarea length
    if (formData.mesaj.length > 500) {
      setSubmitMessage('Mesajul nu poate depăși 500 de caractere.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d418nd5pa96c2r9goh10', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitMessage('Îți mulțumim! Te contactăm în scurt timp pentru confirmare.');
        setFormData({
          nume: '',
          telefon: '',
          email: '',
          tipComanda: 'comanda',
          mesaj: ''
        });
      } else {
        setSubmitMessage('A apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați telefonic.');
      }
    } catch (error) {
      setSubmitMessage('A apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați telefonic.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F8E7D0]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact & Locație
          </h2>
          <div className="w-24 h-1 bg-[#C8A46B] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto px-4">
            Te așteptăm la Str. Horea 15, Cluj-Napoca. Sună pentru comenzi sau rezervări: 0728 888 404.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Trimite-ne un mesaj
            </h3>

            <form id="contact-form" onSubmit={handleSubmit} data-readdy-form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nume" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="nume"
                    name="nume"
                    value={formData.nume}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B41E1E] focus:border-transparent text-sm"
                    placeholder="Numele dumneavoastră"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B41E1E] focus:border-transparent text-sm"
                    placeholder="0728 888 404"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B41E1E] focus:border-transparent text-sm"
                  placeholder="email@exemplu.ro"
                />
              </div>

              <div>
                <label htmlFor="tipComanda" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Tip solicitare
                </label>
                <div className="relative">
                  <select
                    id="tipComanda"
                    name="tipComanda"
                    value={formData.tipComanda}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B41E1E] focus:border-transparent text-sm appearance-none pr-8"
                  >
                    <option value="comanda">Comandă mâncare</option>
                    <option value="rezervare">Rezervare masă</option>
                    <option value="intrebare">Întrebare generală</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>

              <div>
                <label htmlFor="mesaj" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Mesaj *
                </label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  value={formData.mesaj}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B41E1E] focus:border-transparent text-sm resize-none"
                  placeholder="Detalii despre comandă, rezervare sau întrebarea dumneavoastră..."
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.mesaj.length}/500 caractere
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#B41E1E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-[#9A1A1A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i>
                    <span>Se trimite...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line"></i>
                    <span>Trimite mesajul</span>
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`p-3 sm:p-4 rounded-xl text-sm ${
                  submitMessage.includes('mulțumim') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#F8E7D0] rounded-xl">
              <p className="text-[#1C1C1C]/80 text-xs sm:text-sm text-center">
                <strong>Răspundem prompt între 10:00 și 23:00.</strong> Parcări în apropiere, stații de transport la câteva minute.
              </p>
            </div>
          </div>

          {/* Location & Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.8234567890123!2d23.6236!3d46.7712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1234567890%3A0x1234567890abcdef!2sStr.%20Horea%2015%2C%20Cluj-Napoca!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Saray Kebap Cluj"
                className="sm:h-[300px]"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1C1C1C] mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Informații de contact
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B41E1E] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-sm sm:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1 text-sm sm:text-base">Adresa</h4>
                    <p className="text-[#1C1C1C]/70 text-xs sm:text-sm">Str. Horea 15, Cluj-Napoca, România</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B41E1E] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-sm sm:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1 text-sm sm:text-base">Telefon</h4>
                    <a href="tel:+40728888404" className="text-[#B41E1E] hover:underline text-xs sm:text-sm">
                      0728 888 404
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B41E1E] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-sm sm:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1 text-sm sm:text-base">Email</h4>
                    <a href="mailto:contact@saraykebapcluj.ro" className="text-[#B41E1E] hover:underline text-xs sm:text-sm break-all">
                      contact@saraykebapcluj.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B41E1E] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-sm sm:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1 text-sm sm:text-base">Program</h4>
                    <p className="text-[#1C1C1C]/70 text-xs sm:text-sm">Luni - Duminică: 10:00 - 23:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-white text-sm sm:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1 text-sm sm:text-base">WhatsApp</h4>
                    <a 
                      href="https://wa.me/40728888404" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline text-xs sm:text-sm"
                    >
                      Mesaj rapid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
