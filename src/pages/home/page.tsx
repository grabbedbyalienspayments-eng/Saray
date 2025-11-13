
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <WhyUs />
      <Gallery />
      <Delivery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
