import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { ImpressumModal } from './ImpressumModal';
import { PrivacyModal } from './PrivacyModal';

export function Footer() {
  const { t } = useLanguage();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => setImpressumOpen(true)}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                {t.footer.impressum}
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                {t.footer.privacy}
              </button>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">© 2025 QWEAR. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ImpressumModal open={impressumOpen} onOpenChange={setImpressumOpen} />
      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </>
  );
}
