
export default function WhyUs() {
  const benefits = [
    {
      icon: 'ri-award-line',
      title: 'Autenticitate verificată',
      description: 'Bucătar turc certificat, rețete din Istanbul'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Ingrediente naturale',
      description: 'Ulei de măsline, condimente și fistic importate'
    },
    {
      icon: 'ri-fire-line',
      title: 'Gătit pe cărbuni',
      description: 'Flacără adevărată, aromă de neuitat'
    },
    {
      icon: 'ri-time-line',
      title: 'Servire rapidă',
      description: 'Mâncarea ajunge caldă, la timp'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Porții mari',
      description: 'Satisfacție fără compromis'
    },
    {
      icon: 'ri-truck-line',
      title: 'Livrare gratuită',
      description: 'La comenzi peste 80 lei'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-[#F8E7D0] relative overflow-hidden">
      {/* Geometric Pattern */}
      <div 
        className="absolute inset-0 opacity-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A46B' fill-opacity='0.1'%3E%3Cpath d='M50 50l25-25v50l-25-25zm-25 0l25 25H0l25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            De Ce Să Alegi Saray Kebap?
          </h2>
          <div className="w-24 h-1 bg-[#C8A46B] mx-auto mb-6"></div>
          <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
            Șase motive pentru care suntem alegerea perfectă pentru o experiență culinară turcească autentică
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#B41E1E] to-[#C8A46B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {benefit.title}
              </h3>
              
              <p className="text-[#1C1C1C]/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Gata să guști autenticitatea?
            </h3>
            <p className="text-[#1C1C1C]/80 mb-6">
              Comandă acum și descoperă de ce suntem restaurantul turcesc preferat din Cluj-Napoca
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+40728888404"
                className="bg-[#B41E1E] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#9A1A1A] transition-colors whitespace-nowrap flex items-center space-x-2"
              >
                <i className="ri-phone-line"></i>
                <span>Sună acum, gătim pe loc</span>
              </a>
              <a
                href="https://wa.me/40728888404"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#20B858] transition-colors whitespace-nowrap flex items-center space-x-2"
              >
                <i className="ri-whatsapp-line"></i>
                <span>Scrie-ne rapid pe WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
