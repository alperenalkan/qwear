import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Button } from './ui/button';
import { X, Cookie } from 'lucide-react';
import { Switch } from './ui/switch';

export function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {!showCustomize ? (
            // Simple consent view
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Cookie className="w-8 h-8 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2">{t.cookies.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{t.cookies.message}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {t.cookies.acceptAll}
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      className="border-gray-300"
                    >
                      {t.cookies.rejectAll}
                    </Button>
                    <Button
                      onClick={() => setShowCustomize(true)}
                      variant="ghost"
                      className="text-gray-600"
                    >
                      {t.cookies.customize}
                    </Button>
                  </div>
                </div>
                <button
                  onClick={handleRejectAll}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            // Customize view
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 mt-1">
                  <Cookie className="w-8 h-8 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2">{t.cookies.title}</h3>
                  <p className="text-gray-600 text-sm">{t.cookies.message}</p>
                </div>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Back"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-gray-900">{t.cookies.necessary}</h4>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                        Always Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{t.cookies.necessaryDesc}</p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{t.cookies.analytics}</h4>
                    <p className="text-sm text-gray-600">{t.cookies.analyticsDesc}</p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, analytics: checked })
                    }
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{t.cookies.marketing}</h4>
                    <p className="text-sm text-gray-600">{t.cookies.marketingDesc}</p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, marketing: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleSavePreferences}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  {t.cookies.savePreferences}
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="outline"
                  className="border-gray-300"
                >
                  {t.cookies.acceptAll}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
