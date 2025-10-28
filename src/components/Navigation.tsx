import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../lib/LanguageContext';
import { images } from '../lib/images';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FCF5E7] shadow-md' : 'bg-[#FCF5E7]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={images.logo} 
                alt="QWEAR Logo" 
                className="h-16 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Language Selector - Right Side */}
          <div className="hidden md:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Select language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-amber-50' : ''}
                >
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('de')}
                  className={language === 'de' ? 'bg-amber-50' : ''}
                >
                  🇩🇪 Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('tr')}
                  className={language === 'tr' ? 'bg-amber-50' : ''}
                >
                  🇹🇷 Türkçe
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ru')}
                  className={language === 'ru' ? 'bg-amber-50' : ''}
                >
                  🇷🇺 Русский
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button and language selector */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Select language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-amber-50' : ''}
                >
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('de')}
                  className={language === 'de' ? 'bg-amber-50' : ''}
                >
                  🇩🇪 Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('tr')}
                  className={language === 'tr' ? 'bg-amber-50' : ''}
                >
                  🇹🇷 Türkçe
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ru')}
                  className={language === 'ru' ? 'bg-amber-50' : ''}
                >
                  🇷🇺 Русский
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FCF5E7] border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
