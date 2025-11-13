
import { useState } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('toate');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filters = [
    { id: 'toate', label: 'Toate' },
    { id: 'gratar', label: 'Grătar' },
    { id: 'preparate', label: 'Preparatele' },
    { id: 'deserturi', label: 'Deserturi' },
    { id: 'interior', label: 'Interior' }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'gratar',
      image: 'https://readdy.ai/api/search-image?query=grilled%20turkish%20kebab%20on%20natural%20charcoal%20with%20flames%20and%20sparks%2C%20traditional%20turkish%20restaurant%20grill%20setup%2C%20professional%20cooking%20with%20authentic%20fire%2C%20warm%20golden%20lighting%2C%20appetizing%20meat%20preparation&width=400&height=600&seq=grill-sparks&orientation=portrait',
      alt: 'Grătar încins, scântei și jar',
      description: 'Flacăra adevărată pentru aromă de neuitat'
    },
    {
      id: 2,
      category: 'preparate',
      image: 'https://readdy.ai/api/search-image?query=steaming%20hot%20turkish%20kebab%20served%20on%20warm%20turkish%20bread%2C%20appetizing%20presentation%20with%20visible%20steam%20rising%2C%20traditional%20turkish%20restaurant%20serving%2C%20professional%20food%20photography&width=600&height=400&seq=kebab-steaming&orientation=landscape',
      alt: 'Kebab aburind pe lipie',
      description: 'Servit fierbinte, direct de pe grătar'
    },
    {
      id: 3,
      category: 'preparate',
      image: 'https://readdy.ai/api/search-image?query=traditional%20turkish%20lahmacun%20with%20fresh%20herbs%20and%20lemon%20wedge%2C%20authentic%20turkish%20pizza%20presentation%2C%20crispy%20thin%20dough%20with%20seasoned%20meat%2C%20professional%20food%20photography&width=400&height=400&seq=lahmacun-herbs&orientation=squarish',
      alt: 'Lahmacun cu ierburi și lămâie',
      description: 'Gust de stradă din Istanbul'
    },
    {
      id: 4,
      category: 'deserturi',
      image: 'https://readdy.ai/api/search-image?query=golden%20turkish%20baklava%20glistening%20with%20honey%20syrup%2C%20crispy%20phyllo%20pastry%20layers%20with%20pistachios%2C%20elegant%20dessert%20presentation%20on%20traditional%20turkish%20serving%20tray&width=600&height=400&seq=baklava-honey&orientation=landscape',
      alt: 'Tăvi de baklava lucind a miere',
      description: 'Foi fine, fistic Antep, miere'
    },
    {
      id: 5,
      category: 'interior',
      image: 'https://readdy.ai/api/search-image?query=warm%20turkish%20restaurant%20interior%20with%20wooden%20furniture%20and%20warm%20pendant%20lighting%2C%20cozy%20dining%20atmosphere%20with%20traditional%20middle%20eastern%20design%20elements%2C%20comfortable%20seating%20area&width=400&height=600&seq=interior-wood&orientation=portrait',
      alt: 'Interior din lemn, lampadare calde, mozaicuri fine',
      description: 'Atmosferă caldă și ospitalieră'
    },
    {
      id: 6,
      category: 'preparate',
      image: 'https://readdy.ai/api/search-image?query=traditional%20turkish%20tea%20served%20in%20ruby%20red%20tulip-shaped%20glasses%2C%20authentic%20turkish%20tea%20service%20with%20warm%20atmosphere%2C%20professional%20beverage%20photography&width=400&height=400&seq=tea-ruby&orientation=squarish',
      alt: 'Pahare de ceai rubiniu',
      description: 'Ceai turcesc aromat, servit fierbinte'
    },
    {
      id: 7,
      category: 'interior',
      image: 'https://readdy.ai/api/search-image?query=group%20of%20happy%20friends%20laughing%20around%20dining%20table%20in%20turkish%20restaurant%2C%20warm%20social%20atmosphere%2C%20people%20enjoying%20meal%20together%2C%20authentic%20restaurant%20dining%20experience&width=600&height=400&seq=friends-dining&orientation=landscape',
      alt: 'Prieteni care râd în jurul mesei',
      description: 'Ospitalitatea e standardul casei'
    },
    {
      id: 8,
      category: 'gratar',
      image: 'https://readdy.ai/api/search-image?query=variety%20of%20colorful%20turkish%20spices%20and%20seasonings%20in%20traditional%20bowls%2C%20authentic%20middle%20eastern%20spice%20display%2C%20aromatic%20cooking%20ingredients%2C%20professional%20culinary%20photography&width=400&height=600&seq=spices-colorful&orientation=portrait',
      alt: 'Condimente și fistic importate',
      description: 'Ingrediente naturale din Turcia'
    }
  ];

  const filteredImages = activeFilter === 'toate' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Galeria Noastră
          </h2>
          <div className="w-24 h-1 bg-[#C8A46B] mx-auto mb-6"></div>
          <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
            Grătar încins, scântei și jar; kebab aburind pe lipie; lahmacun cu ierburi și lămâie; tăvi de baklava lucind a miere; interior din lemn, lampadare calde, mozaicuri fine; pahare de ceai rubiniu; prieteni care râd în jurul mesei.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-[#B41E1E] text-white shadow-lg'
                  : 'bg-[#F5F5F5] text-[#1C1C1C] hover:bg-[#F8E7D0] hover:text-[#B41E1E]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setLightboxImage(image.image)}
            >
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <i className="ri-eye-line text-white text-2xl"></i>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium text-sm mb-1">{image.alt}</p>
                <p className="text-white/80 text-xs">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#C8A46B] transition-colors"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
              <img
                src={lightboxImage}
                alt="Imagine mărită"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
