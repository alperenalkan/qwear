import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useLanguage } from '../lib/LanguageContext';
import { images } from '../lib/images';

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  origin: string;
  gallery?: GalleryItem[];
}

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const { t } = useLanguage();

  // Detect screen size and update cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(3); // lg: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // md: 2 cards
      } else {
        setCardsPerSlide(1); // mobile: 1 card
      }
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: t.carousel.products.bmw.name,
      category: t.carousel.products.bmw.category,
      image: images.carousel.bmw.main,
      description: t.carousel.products.bmw.description,
      features: t.carousel.products.bmw.features,
      origin: t.carousel.products.bmw.origin,
      gallery: [
        {
          title: 'BMW 7 Series',
          description: 'The flagship BMW 7 Series represents the pinnacle of luxury and innovation. Factory-original white finish with elegant design, powerful engines, and cutting-edge technology.',
          image: images.carousel.bmw.series7,
        },
        {
          title: 'BMW X5 SUV',
          description: 'Experience the perfect blend of luxury and versatility with the BMW X5. Factory specifications with premium white exterior, spacious interior, and unmatched performance.',
          image: images.carousel.bmw.x5,
        },
        {
          title: 'Premium Interior',
          description: 'Immerse yourself in luxury with BMW\'s exquisite interior craftsmanship. Premium leather upholstery, advanced technology displays, and meticulous German engineering.',
          image: images.carousel.bmw.interior,
        },
        {
          title: 'Factory Excellence',
          description: 'All BMW vehicles are factory-original, not modified. Every detail meets BMW\'s rigorous standards for luxury, performance, and safety.',
          image: images.carousel.bmw.factory,
        },
      ],
    },
    {
      id: 2,
      name: t.carousel.products.nespressoMachines.name,
      category: t.carousel.products.nespressoMachines.category,
      image: images.carousel.nespresso.main,
      description: t.carousel.products.nespressoMachines.description,
      features: t.carousel.products.nespressoMachines.features,
      origin: t.carousel.products.nespressoMachines.origin,
      gallery: [
        {
          title: 'Nespresso Original Line',
          description: 'Classic Nespresso Original machines deliver authentic espresso at the touch of a button. Compact design with powerful 19-bar pressure system for perfect crema every time.',
          image: images.carousel.nespresso.main,
        },
        {
          title: 'Nespresso Vertuo',
          description: 'Revolutionary Vertuo system with Centrifusion technology. Brews coffee and espresso from single-serve capsules with smooth, full-bodied taste and rich crema.',
          image: images.carousel.nespresso.vertuo,
        },
        {
          title: 'Nespresso Lattissima',
          description: 'Premium Lattissima machines with integrated milk frother. Create barista-quality cappuccinos, lattes, and macchiatos at home with one-touch convenience.',
          image: images.carousel.nespresso.maker,
        },
        {
          title: 'Nespresso Professional',
          description: 'Professional-grade Nespresso machines for offices and businesses. High capacity, durable construction, and consistent quality for demanding environments.',
          image: images.carousel.nespresso.maker2,
        },
      ],
    },
    {
      id: 3,
      name: t.carousel.products.nespresso.name,
      category: t.carousel.products.nespresso.category,
      image: images.carousel.capsules.main,
      description: t.carousel.products.nespresso.description,
      features: t.carousel.products.nespresso.features,
      origin: t.carousel.products.nespresso.origin,
      gallery: [
        {
          title: 'Espresso Intensity Range',
          description: 'Full range of espresso capsules from mild to intense. Choose from intensity levels 4 to 12 for your perfect espresso experience.',
          image: images.carousel.capsules.colorful,
        },
        {
          title: 'Lungo & Americano',
          description: 'Longer coffee options with balanced flavors. Perfect for a milder, larger cup while maintaining premium quality.',
          image: images.carousel.capsules.variety,
        },
        {
          title: 'Flavored Varieties',
          description: 'Indulge in flavored options including vanilla, caramel, and chocolate notes. Premium coffee with a delightful twist.',
          image: images.carousel.capsules.original,
        },
      ],
    },
    {
      id: 4,
      name: t.carousel.products.beans.name,
      category: t.carousel.products.beans.category,
      image: images.carousel.beans.main,
      description: t.carousel.products.beans.description,
      features: t.carousel.products.beans.features,
      origin: t.carousel.products.beans.origin,
      gallery: [
        {
          title: 'Dark Roast Arabica',
          description: 'Premium dark-roasted Arabica beans with intense, bold flavors and rich body. Perfect for espresso and strong coffee lovers.',
          image: images.carousel.beans.dark,
        },
        {
          title: 'Medium Roast Blend',
          description: 'Balanced medium roast combining German and Italian traditions. Smooth, aromatic with notes of chocolate and caramel.',
          image: images.carousel.beans.roasted,
        },
        {
          title: 'Premium Espresso Beans',
          description: 'Specially selected and roasted for authentic Italian espresso. Rich crema, full-bodied taste, and persistent aroma.',
          image: images.carousel.beans.bag,
        },
      ],
    },
    {
      id: 5,
      name: t.carousel.products.lindt.name,
      category: t.carousel.products.lindt.category,
      image: images.carousel.lindt.main,
      description: t.carousel.products.lindt.description,
      features: t.carousel.products.lindt.features,
      origin: t.carousel.products.lindt.origin,
      gallery: [
        {
          title: 'Lindor Chocolate Truffles',
          description: 'Discover the smooth melting experience of Lindor truffles. Available in milk, dark, white chocolate and exotic flavors with irresistibly smooth centers.',
          image: images.carousel.lindt.truffles,
        },
        {
          title: 'Lindt Excellence Bars',
          description: 'Premium dark chocolate bars crafted from the finest cocoa beans. Ranging from 70% to 99% cocoa intensity for true chocolate connoisseurs.',
          image: images.carousel.lindt.chocolate,
        },
        {
          title: 'Lindt Assorted Collections',
          description: 'Elegant gift boxes and assortments featuring a variety of Lindt chocolates - perfect for special occasions and celebrations.',
          image: images.carousel.lindt.assortment,
        },
      ],
    },
    {
      id: 6,
      name: t.carousel.products.kinder.name,
      category: t.carousel.products.kinder.category,
      image: images.carousel.kinder.main,
      description: t.carousel.products.kinder.description,
      features: t.carousel.products.kinder.features,
      origin: t.carousel.products.kinder.origin,
      gallery: [
        {
          title: 'Kinder Bueno',
          description: 'Crispy wafer filled with creamy hazelnut filling, covered in smooth milk chocolate. A perfect combination of taste and texture.',
          image: images.carousel.kinder.bueno,
        },
        {
          title: 'Kinder Joy',
          description: 'Two delicious halves - one with creamy layers and crunchy wafer bites, the other with a surprise toy. Fun and taste combined!',
          image: images.carousel.kinder.joy,
        },
        {
          title: 'Kinder Chocolate Bars',
          description: 'Classic milk chocolate bars with a unique milky taste. Made with the finest ingredients for a delicate and creamy experience.',
          image: images.carousel.kinder.chocolate,
        },
      ],
    },
  ];

  // Calculate total number of slides/pages
  const totalSlides = Math.ceil(products.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedGalleryIndex(0);
    setIsDialogOpen(true);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            {t.carousel.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.carousel.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-0 md:-translate-x-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 text-gray-800 p-2 md:p-3 rounded-full transition-all"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 md:translate-x-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 text-gray-800 p-2 md:p-3 rounded-full transition-all"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-1 md:px-2">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`,
              }}
            >
              {/* Render products 3 times for infinite loop */}
              {[...products, ...products, ...products].map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  <Card
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                        <span className="inline-block bg-amber-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm mb-1 md:mb-2">
                          {product.category}
                        </span>
                        <h3 className="text-white text-lg md:text-xl line-clamp-2">{product.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-3 md:mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-amber-600">
                          {product.origin}
                        </span>
                        <span className="text-gray-500 group-hover:text-amber-600 transition-colors">
                          {t.carousel.details} →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-amber-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] lg:max-w-[85vw] max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="sr-only">
                  Product details for {selectedProduct.name}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Gallery Section */}
                {selectedProduct.gallery && selectedProduct.gallery.length > 0 ? (
                  <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {/* Thumbnail Gallery - Left Side */}
                    <div className="md:col-span-1 order-2 md:order-1">
                      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[500px]">
                        {selectedProduct.gallery.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedGalleryIndex(index)}
                            className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${
                              selectedGalleryIndex === index
                                ? 'ring-2 ring-amber-600'
                                : 'opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-24 h-24 md:w-full md:h-28 lg:h-32 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Main Image and Description - Right Side */}
                    <div className="md:col-span-3 lg:col-span-4 order-1 md:order-2 space-y-4">
                      <div className="relative h-64 md:h-[450px] lg:h-[550px] rounded-lg overflow-hidden">
                        <img
                          src={selectedProduct.gallery[selectedGalleryIndex].image}
                          alt={selectedProduct.gallery[selectedGalleryIndex].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl mb-2 text-gray-900">
                          {selectedProduct.gallery[selectedGalleryIndex].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {selectedProduct.gallery[selectedGalleryIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Fallback for products without gallery
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Product Information */}
                <div className="space-y-4 border-t pt-4">
                  <div>
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm mb-3">
                      {selectedProduct.category}
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg mb-3 text-gray-900">{t.carousel.features}</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <span className="text-amber-600 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-gray-700">
                      <span className="text-gray-900">{t.carousel.origin}:</span>{' '}
                      {selectedProduct.origin}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
