import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function WhatsAppButton() {
  const { language } = useLanguage();
  
  // Rusça için Telegram, diğerleri için WhatsApp
  const isTelegram = language === 'ru';
  
  const phoneNumber = '4915201761971'; // Ülke kodu ile birlikte (boşluksuz)
  const telegramUsername = 'yourusername'; // Telegram kullanıcı adınız (@'sız)
  
  const messages = {
    en: 'Hello, I would like to get information.',
    de: 'Hallo, ich möchte Informationen erhalten.',
    tr: 'Merhaba, bilgi almak istiyorum.',
    ru: 'Здравствуйте, я хотел бы получить информацию.'
  };
  
  const tooltips = {
    whatsapp: {
      en: 'Contact via WhatsApp',
      de: 'Kontakt über WhatsApp',
      tr: 'WhatsApp ile iletişime geç',
      ru: 'Связаться через WhatsApp'
    },
    telegram: {
      en: 'Contact via Telegram',
      de: 'Kontakt über Telegram',
      tr: 'Telegram ile iletişime geç',
      ru: 'Связаться через Telegram'
    }
  };
  
  const message = messages[language];
  
  const url = isTelegram 
    ? `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const tooltip = isTelegram ? tooltips.telegram[language] : tooltips.whatsapp[language];
  const bgColor = isTelegram ? 'bg-blue-500' : 'bg-green-500';
  const hoverBgColor = isTelegram ? 'hover:bg-blue-600' : 'hover:bg-green-600';
  const pingColor = isTelegram ? 'bg-blue-500' : 'bg-green-500';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={tooltip}
    >
      <div className="relative">
        {/* Ping animation */}
        <span className={`absolute inset-0 rounded-full ${pingColor} opacity-75 animate-slow-ping`} />
        
        {/* Button */}
        <div className={`relative ${bgColor} ${hoverBgColor} text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110`}>
          {isTelegram ? (
            <Send className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            {tooltip}
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    </a>
  );
}
