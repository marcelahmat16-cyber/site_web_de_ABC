
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section id="accueil">
          <Hero />
          <Stats />
        </section>
        <section id="a-propos">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="galerie">
          <Gallery />
        </section>
        <section id="temoignages">
          <Testimonials />
        </section>
        <section id="partenaires">
          <Partners />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
