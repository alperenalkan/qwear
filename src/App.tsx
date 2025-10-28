import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './lib/LanguageContext';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          <section id="home">
            <Hero />
          </section>

          <Products />


          <section id="about">
            <About />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
        <Toaster position="top-center" />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}
