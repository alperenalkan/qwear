import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useLanguage } from '../lib/LanguageContext';

interface ImpressumModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImpressumModal({ open, onOpenChange }: ImpressumModalProps) {
  const { t } = useLanguage();
  const legal = t.legal.impressum;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{legal.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {legal.companyInfo}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-gray-700">
          {/* Company Info */}
          <div>
            <h3 className="text-amber-600 mb-3">{legal.companyInfo}</h3>
            <div className="space-y-1">
              <p>{legal.companyName}</p>
              <p>{legal.address}</p>
              <p>{legal.country}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-600 mb-3">{legal.contact}</h3>
            <div className="space-y-1">
              <p><span className="font-medium">{legal.phone}:</span> +49 152 01761971</p>
              <p><span className="font-medium">{legal.email}:</span> info@qwear.com</p>
            </div>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-amber-600 mb-3">{legal.management}</h3>
            <p>QWEAR Management Team</p>
          </div>

          {/* Registration */}
          <div>
            <h3 className="text-amber-600 mb-3">{legal.registration}</h3>
            <div className="space-y-1">
              <p><span className="font-medium">{legal.registrationNumber}:</span> HRB XXXXX</p>
              <p><span className="font-medium">{legal.vatId}:</span> DE XXXXXXXXX</p>
            </div>
          </div>

          {/* Responsible for Content */}
          <div>
            <h3 className="text-amber-600 mb-3">{legal.responsibleContent}</h3>
            <p>QWEAR Management</p>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-amber-600 mb-3">{legal.disclaimer}</h3>
            <p className="text-sm">{legal.disclaimerContent}</p>
          </div>

          {/* Liability for Links */}
          <div>
            <h3 className="text-amber-600 mb-3">{legal.liabilityLinks}</h3>
            <p className="text-sm">{legal.liabilityLinksContent}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
