# Resim Değiştirme Rehberi

Bu dosya size resimleri nasıl değiştireceğinizi gösterir.

## 🎯 Hızlı Başlangıç

1. **Resimlerinizi hazırlayın** - JPG, PNG formatında
2. **public/images/ klasörüne kopyalayın** - Aynı isimle kaydedin
3. **Website otomatik güncellenecek**

## 📁 Klasör Yapısı

```
public/images/
├── hero/
│   ├── hero-slide-1.jpg    # İlk hero slide
│   ├── hero-slide-2.jpg    # İkinci hero slide  
│   └── hero-slide-3.jpg    # Üçüncü hero slide
├── products/
│   ├── products-chocolate.jpg  # Çikolata ürünü
│   ├── products-bmw.jpg        # BMW ürünü
│   └── products-coffee.jpg     # Kahve makinesi
├── about/
│   └── about-trade.jpg         # About section resmi
└── carousel/
    ├── bmw-main.jpg           # BMW ana resim
    ├── bmw-7series.jpg        # BMW 7 serisi
    ├── bmw-x5.jpg             # BMW X5
    ├── bmw-interior.jpg       # BMW iç mekan
    ├── bmw-factory.jpg        # BMW fabrika
    ├── nespresso-main.jpg     # Nespresso ana resim
    ├── nespresso-vertuo.jpg   # Nespresso Vertuo
    ├── nespresso-maker.jpg    # Nespresso makine
    ├── nespresso-maker2.jpg   # Nespresso makine 2
    ├── capsules-main.jpg      # Kapsül ana resim
    ├── capsules-colorful.jpg  # Renkli kapsüller
    ├── capsules-variety.jpg   # Kapsül çeşitleri
    ├── capsules-original.jpg  # Orijinal kapsüller
    ├── beans-main.jpg         # Kahve çekirdeği ana
    ├── beans-dark.jpg         # Koyu kahve çekirdeği
    ├── beans-roasted.jpg      # Kavrulmuş çekirdek
    ├── beans-bag.jpg          # Çekirdek poşeti
    ├── lindt-main.jpg         # Lindt ana resim
    ├── lindt-truffles.jpg     # Lindt truffle
    ├── lindt-chocolate.jpg    # Lindt çikolata
    ├── lindt-assortment.jpg   # Lindt çeşitleri
    ├── kinder-main.jpg        # Kinder ana resim
    ├── kinder-bueno.jpg       # Kinder Bueno
    ├── kinder-joy.jpg        # Kinder Joy
    └── kinder-chocolate.jpg  # Kinder çikolata
```

## 🔄 Resim Değiştirme Adımları

### Hero Section Resimleri
1. `public/images/hero/` klasörüne gidin
2. Yeni resminizi `hero-slide-1.jpg` olarak kaydedin
3. Diğer slide'lar için `hero-slide-2.jpg`, `hero-slide-3.jpg` kullanın

### Products Section Resimleri  
1. `public/images/products/` klasörüne gidin
2. Çikolata için: `products-chocolate.jpg`
3. BMW için: `products-bmw.jpg`
4. Kahve makinesi için: `products-coffee.jpg`

### About Section Resmi
1. `public/images/about/` klasörüne gidin
2. `about-trade.jpg` olarak kaydedin

### Carousel Resimleri
1. `public/images/carousel/` klasörüne gidin
2. İlgili ürün klasörüne bakın
3. Aynı isimle kaydedin

## ⚠️ Önemli Notlar

- **Dosya isimleri tam olarak aynı olmalı**
- **JPG veya PNG formatı kullanın**
- **Resim boyutları optimize edilmiş olmalı**
- **Web için uygun boyutlarda kaydedin**
- **public/images/ klasörünü kullanın (src/images/ değil)**

## 🎨 Resim Boyut Önerileri

- **Hero slides**: 1920x1080px
- **Products**: 800x600px  
- **About**: 1200x800px
- **Carousel**: 1000x800px

## 🚀 Test Etme

Resimleri değiştirdikten sonra:
1. Development server'ı yeniden başlatın
2. Browser'ı yenileyin
3. Yeni resimlerin göründüğünü kontrol edin

## 📝 Not

Şu anda Hero, Products ve About resimleri Unsplash URL'leri kullanıyor. 
Carousel resimleri için local dosya yolları hazır.
Resimlerinizi `public/images/` klasörüne kopyalayarak kolayca değiştirebilirsiniz.