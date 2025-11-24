# Responsive Image Guide

Bu rehber, portfolio sitesinde farklı ekran boyutları ve formatlar için optimize edilmiş resimlerin nasıl kullanılacağını açıklar.

## Özellikler

✅ **Responsive Aspect Ratios:**
- **Mobil** (≤768px): 1:1 (kare) aspect ratio
- **Desktop** (>768px): 16:9 (geniş) aspect ratio

✅ **Modern Format Desteği:**
- WebP formatı (modern tarayıcılar için)
- AVIF formatı (en yeni tarayıcılar için)
- JPEG/PNG fallback (eski tarayıcılar için)

✅ **Performance:**
- Lazy loading desteği
- Otomatik format seçimi
- Optimize edilmiş boyutlar

## Kullanım

### 1. Basit Kullanım (Mevcut Yöntem)

Eski yöntem hala çalışır, sadece `<img>` elementi kullanabilirsiniz:

```html
<div class="project-image-carousel">
    <img src="assets/images/projects/proje.jpg" alt="Proje" class="project-image active">
    <img src="assets/images/projects/proje2.jpg" alt="Proje 2" class="project-image">
</div>
```

**Özellikler:**
- CSS otomatik olarak mobilde 1:1, desktop'ta 16:9 aspect ratio uygular
- Resim `object-fit: cover` ile kırpılır
- Herhangi bir resim boyutu kullanabilirsiniz, CSS uyarlar

### 2. Gelişmiş Kullanım (Modern Format Desteği)

WebP ve diğer modern formatları desteklemek için `<picture>` elementi kullanın:

```html
<div class="project-image-carousel">
    <!-- Resim 1 -->
    <picture class="project-image active">
        <!-- Modern tarayıcılar için WebP -->
        <source type="image/webp" srcset="assets/images/projects/proje.webp">
        <!-- Fallback: JPEG/PNG -->
        <img src="assets/images/projects/proje.jpg" alt="Proje" loading="lazy">
    </picture>

    <!-- Resim 2 -->
    <picture class="project-image">
        <source type="image/webp" srcset="assets/images/projects/proje2.webp">
        <img src="assets/images/projects/proje2.jpg" alt="Proje 2" loading="lazy">
    </picture>
</div>
```

### 3. Farklı Ekran Boyutları İçin Farklı Resimler

Mobil ve desktop için tamamen farklı resimler kullanmak istiyorsanız:

```html
<picture class="project-image active">
    <!-- Mobil için 1:1 aspect ratio resim -->
    <source media="(max-width: 768px)"
            type="image/webp"
            srcset="assets/images/projects/proje-mobile-1x1.webp">
    <source media="(max-width: 768px)"
            srcset="assets/images/projects/proje-mobile-1x1.jpg">

    <!-- Desktop için 16:9 aspect ratio resim -->
    <source media="(min-width: 769px)"
            type="image/webp"
            srcset="assets/images/projects/proje-desktop-16x9.webp">
    <source media="(min-width: 769px)"
            srcset="assets/images/projects/proje-desktop-16x9.jpg">

    <!-- Fallback -->
    <img src="assets/images/projects/proje-desktop-16x9.jpg" alt="Proje" loading="lazy">
</picture>
```

### 4. Yüksek Çözünürlük (Retina) Destek

2x, 3x gibi yüksek çözünürlük ekranlar için:

```html
<picture class="project-image active">
    <source type="image/webp"
            srcset="assets/images/projects/proje-1x.webp 1x,
                    assets/images/projects/proje-2x.webp 2x,
                    assets/images/projects/proje-3x.webp 3x">
    <img src="assets/images/projects/proje-1x.jpg"
         srcset="assets/images/projects/proje-1x.jpg 1x,
                 assets/images/projects/proje-2x.jpg 2x"
         alt="Proje" loading="lazy">
</picture>
```

## Resim Hazırlama

### Önerilen Boyutlar

#### Desktop (16:9 Aspect Ratio)
- **Width:** 1600px
- **Height:** 900px
- **Format:** WebP (ana), JPEG (fallback)
- **Kalite:** WebP 80%, JPEG 85%

#### Mobile (1:1 Aspect Ratio)
- **Width:** 800px
- **Height:** 800px
- **Format:** WebP (ana), JPEG (fallback)
- **Kalite:** WebP 75%, JPEG 80%

#### Profile Photo
- **Desktop:** 400x400px (2x için)
- **Mobile:** 300x300px (2x için)
- **Format:** WebP + JPEG fallback

### Resim Optimizasyonu

#### WebP'ye Dönüştürme

**Online Tool:**
- [Squoosh.app](https://squoosh.app/) - Google'ın ücretsiz aracı

**Command Line (Linux/Mac):**
```bash
# WebP'ye dönüştürme
cwebp -q 80 input.jpg -o output.webp

# Toplu dönüştürme
for file in *.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

**Command Line (Windows - PowerShell):**
```powershell
# WebP'ye dönüştürme
cwebp -q 80 input.jpg -o output.webp

# Toplu dönüştürme
Get-ChildItem *.jpg | ForEach-Object { cwebp -q 80 $_.FullName -o ($_.BaseName + ".webp") }
```

#### Boyutlandırma

**ImageMagick ile:**
```bash
# Desktop 16:9
magick input.jpg -resize 1600x900^ -gravity center -extent 1600x900 output-desktop.jpg

# Mobile 1:1
magick input.jpg -resize 800x800^ -gravity center -extent 800x800 output-mobile.jpg
```

**Online Tool:**
- [Photopea](https://www.photopea.com/) - Ücretsiz online Photoshop alternatifi

## Dosya Yapısı

Resimleri organize etmek için önerilen yapı:

```
assets/images/
├── profile.png
├── profile.webp (önerilen)
└── projects/
    ├── proje1/
    │   ├── desktop-16x9.jpg
    │   ├── desktop-16x9.webp
    │   ├── mobile-1x1.jpg
    │   └── mobile-1x1.webp
    ├── proje2/
    │   ├── desktop-16x9.jpg
    │   └── desktop-16x9.webp
    └── ... (diğer projeler)
```

**Not:** Eğer farklı aspect ratio'lu resimler hazırlamak istemezseniz, tek bir resim kullanıp CSS'in otomatik kırpmasına izin verebilirsiniz.

## Performans İpuçları

1. **Lazy Loading Kullanın:**
   ```html
   <img src="..." alt="..." loading="lazy">
   ```

2. **Modern Formatları Tercih Edin:**
   - WebP, JPEG'den %25-35 daha küçük
   - AVIF, WebP'den %20-30 daha küçük

3. **Boyutları Optimize Edin:**
   - 1600px'den büyük resimler gereksiz
   - Mobil için 800px yeterli

4. **Sıkıştırma Kullanın:**
   - WebP için 75-85% kalite
   - JPEG için 80-90% kalite

## Mevcut Projeleri Güncelleme

Minder projesi örnek olarak güncellenmiştir (index.html satır 93-105). Diğer projeleri de benzer şekilde güncelleyebilirsiniz:

**Önce (Eski):**
```html
<img src="assets/images/projects/proje.jpg" alt="Proje" class="project-image active">
```

**Sonra (Yeni):**
```html
<picture class="project-image active">
    <source type="image/webp" srcset="assets/images/projects/proje.webp">
    <img src="assets/images/projects/proje.jpg" alt="Proje" loading="lazy">
</picture>
```

## Tarayıcı Desteği

| Format | Destek |
|--------|--------|
| JPEG   | %100 (tüm tarayıcılar) |
| WebP   | %95+ (Chrome, Firefox, Edge, Safari 14+) |
| AVIF   | %75+ (Chrome 85+, Firefox 93+, Safari 16+) |

`<picture>` elementi otomatik olarak en uygun formatı seçer ve desteklenmeyenleri atlar.

## Sorular?

Herhangi bir sorunuz varsa, HTML'deki Minder projesi örneğine bakabilirsiniz (satır 91-105).
