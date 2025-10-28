import React from 'react';
import { Car, Coffee, Bean, Candy } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../lib/LanguageContext';
import { images } from '../lib/images';

export function Products() {
  const { t } = useLanguage();

  const products = [
    {
      title: t.products.chocolate.title,
      description: t.products.chocolate.description,
      icon: Candy,
      image: images.products.chocolate,
    },
    {
      title: t.products.suv.title,
      description: t.products.suv.description,
      icon: Car,
      image: images.products.bmw,
    },
    {
      title: t.products.coffeeMachines.title,
      description: t.products.coffeeMachines.description,
      icon: Coffee,
      image: images.products.coffee,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            {t.products.title}
          </h2>
          <p className="text-xl text-gray-600">{t.products.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
