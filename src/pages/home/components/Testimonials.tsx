
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ioana M.',
      rating: 5,
      text: 'Am regăsit exact gustul din Istanbul—carne suculentă, condimente echilibrate.'
    },
    {
      id: 2,
      name: 'Andrei T.',
      rating: 5,
      text: 'Interior cald, muzică discretă, servire ireproșabilă—revenim.'
    },
    {
      id: 3,
      name: 'Cem U.',
      rating: 5,
      text: 'Cea mai bună baklava; crocantă, aromată, nu excesiv de dulce.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ce Spun Clienții Noștri
          </h2>
          <div className="w-24 h-1 bg-[#C8A46B] mx-auto mb-6"></div>
          <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
            Mii de clienți mulțumiți confirmă calitatea și autenticitatea preparatelor noastre
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Slider */}
          <div className="bg-[#F8E7D0] rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A46B' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15H0l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-center mb-6">
                <i className="ri-double-quotes-l text-4xl text-[#C8A46B]"></i>
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                <p className="text-xl md:text-2xl text-[#1C1C1C] leading-relaxed mb-6 font-light italic">
                  {testimonials[currentSlide].text}
                </p>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#C8A46B] text-xl mx-1"></i>
                  ))}
                </div>

                {/* Customer Info */}
                <div className="text-center">
                  <div className="font-semibold text-[#1C1C1C] text-lg mb-1">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-[#1C1C1C]/70 text-sm">
                    Client verificat
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <i className="ri-arrow-left-line text-[#1C1C1C]"></i>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <i className="ri-arrow-right-line text-[#1C1C1C]"></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#B41E1E]' : 'bg-[#C8A46B]/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#B41E1E] mb-2">50,000+</div>
            <div className="text-[#1C1C1C]/70">Clienți mulțumiți</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#B41E1E] mb-2">4.9/5</div>
            <div className="text-[#1C1C1C]/70">Rating mediu</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#B41E1E] mb-2">15+</div>
            <div className="text-[#1C1C1C]/70">Ani experiență</div>
          </div>
        </div>
      </div>
    </section>
  );
}
