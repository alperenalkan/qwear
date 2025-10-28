import React from 'react';
import {
  Car,
  Coffee,
  Bean,
  FileText,
  TrendingUp,
  Shield,
  Truck,
  Leaf,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ProductCarousel } from './ProductCarousel';
import { useLanguage } from '../lib/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const mainServices = [
    {
      title: t.services.bmw.title,
      description: t.services.bmw.description,
      icon: Car,
    },
    {
      title: t.services.nespressoMachines.title,
      description: t.services.nespressoMachines.description,
      icon: Coffee,
    },
    {
      title: t.services.beans.title,
      description: t.services.beans.description,
      icon: Bean,
    },
  ];

  const exportServices = [
    {
      title: t.services.compliance.title,
      description: t.services.compliance.description,
      icon: Shield,
      label: t.services.compliance.label,
    },
    {
      title: t.services.documentation.title,
      description: t.services.documentation.description,
      icon: FileText,
      label: t.services.documentation.label,
    },
    {
      title: t.services.research.title,
      description: t.services.research.description,
      icon: TrendingUp,
      label: t.services.research.label,
    },
  ];

  const advancedServices = [
    {
      title: t.services.supply.title,
      description: t.services.supply.description,
      icon: Truck,
    },
    {
      title: t.services.risk.title,
      description: t.services.risk.description,
      icon: Shield,
    },
    {
      title: t.services.sustainability.title,
      description: t.services.sustainability.description,
      icon: Leaf,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.services.subtitle}
          </p>
          <p className="text-gray-500 mt-2">
            {t.services.description}
          </p>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="products">{t.services.tabs.products}</TabsTrigger>
            <TabsTrigger value="main">{t.services.tabs.services}</TabsTrigger>
            <TabsTrigger value="export">{t.services.tabs.export}</TabsTrigger>
            <TabsTrigger value="advanced">{t.services.tabs.advanced}</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-0">
            <ProductCarousel />
          </TabsContent>

          <TabsContent value="main">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200"
                  >
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-amber-600" />
                      </div>
                      <h3 className="text-xl mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="export">
            <div className="mb-12">
              <h3 className="text-2xl text-center mb-8 text-gray-900">
                {t.services.exportTitle}
              </h3>
              <p className="text-center text-gray-600 mb-8">
                {t.services.exportDesc}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exportServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200"
                  >
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-amber-600" />
                      </div>
                      <h3 className="text-xl mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <p className="text-sm text-amber-600">{service.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            <div className="mb-12">
              <h3 className="text-2xl text-center mb-8 text-gray-900">
                {t.services.advancedTitle}
              </h3>
              <p className="text-center text-gray-600 mb-8">
                {t.services.advancedDesc}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200"
                  >
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-amber-600" />
                      </div>
                      <h3 className="text-xl mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
