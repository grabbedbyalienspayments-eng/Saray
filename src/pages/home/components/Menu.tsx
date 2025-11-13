
export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Kebab Mixt (Vită + Pui)',
      description: 'Carne marinată, friptă pe jar, servită cu orez pufos, salată și lipie turcească caldă; suculență și fum fin.',
      price: '45 lei',
      image: 'https://readdy.ai/api/search-image?query=delicious%20mixed%20turkish%20kebab%20with%20beef%20and%20chicken%20grilled%20on%20natural%20charcoal%2C%20served%20with%20fluffy%20rice%2C%20fresh%20salad%20and%20warm%20turkish%20bread%2C%20traditional%20turkish%20plate%20presentation%2C%20warm%20lighting%2C%20appetizing%20food%20photography&width=400&height=300&seq=kebab-mixt&orientation=landscape',
      badge: 'Porții mari'
    },
    {
      id: 2,
      name: 'Shawarma la Farfurie',
      description: 'Felii fragede de pui, legume proaspete, sosuri ușor picante, echilibru dintre crocant și cremos.',
      price: '40 lei',
      image: 'https://readdy.ai/api/search-image?query=authentic%20turkish%20chicken%20shawarma%20served%20on%20plate%20with%20tender%20chicken%20slices%2C%20fresh%20vegetables%2C%20slightly%20spicy%20sauces%2C%20balance%20between%20crispy%20and%20creamy%20textures%2C%20traditional%20turkish%20restaurant%20presentation%2C%20professional%20food%20photography&width=400&height=300&seq=shawarma-farfurie&orientation=landscape',
      badge: 'Porții mari'
    },
    {
      id: 3,
      name: 'Lahmacun Tradițional',
      description: 'Aluat subțire, carne tocată condimentată, pătrunjel, lămâie; gust de stradă din Istanbul.',
      price: '30 lei',
      image: 'https://readdy.ai/api/search-image?query=traditional%20turkish%20lahmacun%20with%20thin%20dough%2C%20seasoned%20minced%20meat%2C%20parsley%20and%20lemon%2C%20authentic%20Istanbul%20street%20food%20style%2C%20crispy%20edges%2C%20fresh%20herbs%2C%20professional%20food%20photography&width=400&height=300&seq=lahmacun&orientation=landscape',
      badge: 'Specialitate'
    },
    {
      id: 4,
      name: 'Baklava',
      description: 'Foi fine, unt clarifiat, fistic Antep, miere; dulce elegant, straturi perfecte.',
      price: '25 lei',
      image: 'https://readdy.ai/api/search-image?query=traditional%20turkish%20baklava%20dessert%20with%20fine%20phyllo%20layers%2C%20clarified%20butter%2C%20Antep%20pistachios%20and%20honey%2C%20elegant%20sweet%20with%20perfect%20layers%2C%20golden%20brown%2C%20authentic%20turkish%20sweets%2C%20professional%20food%20photography&width=400&height=300&seq=baklava&orientation=landscape',
      badge: 'Desert autentic'
    },
    {
      id: 5,
      name: 'Ceai Turcesc',
      description: 'Negru aromat, infuzat dublu, servit fierbinte; conversația curge mai ușor.',
      price: '10 lei',
      image: 'https://readdy.ai/api/search-image?query=authentic%20turkish%20tea%20served%20hot%20in%20traditional%20tulip-shaped%20glasses%2C%20aromatic%20black%20tea%20double-brewed%2C%20warm%20atmosphere%2C%20traditional%20turkish%20tea%20service%2C%20conversation%20setting%2C%20professional%20beverage%20photography&width=400&height=300&seq=ceai-turcesc&orientation=landscape',
      badge: 'Tradițional'
    },
    {
      id: 6,
      name: 'Meniu pentru 2 Persoane',
      description: 'Platou mixt cu selecție de carne pe cărbuni, garnituri, desert și băutură—o călătorie de împărțit.',
      price: '99 lei',
      image: 'https://readdy.ai/api/search-image?query=complete%20turkish%20dinner%20for%20two%20people%20with%20mixed%20grilled%20meat%20selection%20on%20charcoal%2C%20side%20dishes%2C%20dessert%20and%20drinks%2C%20sharing%20journey%20feast%2C%20abundant%20presentation%2C%20traditional%20turkish%20restaurant%20setting&width=400&height=300&seq=meniu-2-persoane&orientation=landscape',
      badge: 'Cel mai popular'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Meniul Nostru
          </h2>
          <div className="w-24 h-1 bg-[#C8A46B] mx-auto mb-6"></div>
          <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
            Preparate autentice turcești gătite pe cărbuni naturali cu ingrediente aduse din Istanbul
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#B41E1E] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#C8A46B] text-white px-3 py-2 rounded-full font-bold text-lg">
                    {item.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.name}
                </h3>
                <p className="text-[#1C1C1C]/70 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#B41E1E]">
                    {item.price}
                  </div>
                  <button 
                    onClick={scrollToContact}
                    className="bg-[#B41E1E] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#9A1A1A] transition-colors whitespace-nowrap flex items-center space-x-2 cursor-pointer"
                  >
                    <i className="ri-phone-line"></i>
                    <span>Comandă</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Observații */}
        <div className="bg-[#F8E7D0] rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <i className="ri-information-line text-[#B41E1E] text-xl mr-2"></i>
            <h3 className="text-lg font-semibold text-[#1C1C1C]">Observații importante</h3>
          </div>
          <p className="text-[#1C1C1C]/80">
            Prețuri orientative; ingredientele premium pot varia ușor. Pentru comenzi și informații actualizate, vă rugăm să ne contactați telefonic la <strong>0728 888 404</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
