import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useLanguage } from '../lib/LanguageContext';

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyModal({ open, onOpenChange }: PrivacyModalProps) {
  const { t } = useLanguage();
  const privacy = t.legal.privacy;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{privacy.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {privacy.intro}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-gray-700">
          {/* Intro */}
          <div>
            <h3 className="text-amber-600 mb-3">{privacy.intro}</h3>
            <p className="text-sm">{privacy.introContent}</p>
          </div>

          {/* Data Controller */}
          <div>
            <h3 className="text-amber-600 mb-3">{privacy.dataController}</h3>
            <div className="space-y-1 text-sm">
              <p>QWEAR Import-Export GmbH</p>
              <p>{t.contact.address}</p>
              <p>{t.contact.email}: info@qwear.com</p>
              <p>{t.contact.phone}: +49 152 01761971</p>
            </div>
          </div>

          {/* Data Collection */}
          <div>
            <h3 className="text-amber-600 mb-3">{privacy.dataCollection}</h3>
            <p className="text-sm">{privacy.dataCollectionContent}</p>
          </div>

          {/* Personal Data */}
          <div>
            <h3 className="text-amber-600 mb-3">{privacy.personalData}</h3>
            <p className="text-sm">{privacy.personalDataContent}</p>
          </div>

          {/* Cookies */}
          <div>
            <h3 className="text-amber-600 mb-3">{privacy.cookies}</h3>
            <p className="text-sm">{privacy.cookiesContent}</p>
          </div>

          {/* Rights */}
          <div>
            <h3 className="text-amber-600 mb-3">{privacy.rights}</h3>
            <p className="text-sm">{privacy.rightsContent}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-600 mb-3">{privacy.contact}</h3>
            <div className="space-y-1 text-sm">
              <p>QWEAR Import-Export GmbH</p>
              <p>Email: info@qwear.com</p>
              <p>Phone: +49 152 01761971</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
