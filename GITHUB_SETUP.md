# GitHub Setup ve Yayınlama Rehberi

Bu rehber, portfolyo sitenizi GitHub'a yükleyip GitHub Pages ile yayınlamanız için adım adım talimatlar içerir.

## 📋 Ön Hazırlık

✅ Git repository'niz başarıyla oluşturuldu
✅ İlk commit yapıldı
✅ Main branch'e geçildi
✅ Tüm dosyalar hazır

## 🚀 Adım 1: GitHub'da Repository Oluşturma

### Seçenek A: Kişisel Site (Önerilen)

1. [GitHub](https://github.com) hesabınıza giriş yapın
2. Sağ üstteki `+` ikonuna tıklayın ve "New repository" seçin
3. Repository adını **tam olarak** `MustafaGulsoy.github.io` olarak girin
   - ⚠️ **ÖNEMLİ**: Adın tam olarak GitHub kullanıcı adınızla eşleşmesi gerekir
4. "Public" seçeneğini işaretleyin
5. **README, .gitignore veya license eklemeyin** (zaten var)
6. "Create repository" butonuna tıklayın

### Seçenek B: Proje Repository'si

1. Repository adını `portfolio-site` (veya istediğiniz bir isim) olarak girin
2. Diğer adımlar aynı

## 🔗 Adım 2: GitHub'a Bağlanma ve Push

Aşağıdaki komutları **sırasıyla** terminal/command prompt'ta çalıştırın:

### Seçenek A için (Kişisel Site):

```bash
git remote add origin https://github.com/MustafaGulsoy/MustafaGulsoy.github.io.git
git push -u origin main
```

### Seçenek B için (Proje Repository):

```bash
git remote add origin https://github.com/MustafaGulsoy/portfolio-site.git
git push -u origin main
```

## 🌐 Adım 3: GitHub Pages'i Aktifleştirme

### Seçenek A Kullandıysanız (Kişisel Site):

✅ GitHub Pages otomatik olarak aktif! Siteniz şu adreste yayında:
- **URL**: `https://mustafagulsoy.github.io`

5-10 dakika içinde erişilebilir olacaktır.

### Seçenek B Kullandıysanız (Proje Repository):

1. GitHub'da repository sayfanıza gidin
2. "Settings" sekmesine tıklayın
3. Sol menüden "Pages" seçin
4. **Source** bölümünde:
   - Branch: `main`
   - Folder: `/ (root)`
5. "Save" butonuna tıklayın

✅ Siteniz şu adreste yayında olacak:
- **URL**: `https://mustafagulsoy.github.io/portfolio-site`

## 🔍 Adım 4: Yayını Kontrol Etme

1. GitHub Pages ayarlar sayfasında yeşil bir onay işareti ve "Your site is live at..." mesajı görünecek
2. Verilen URL'ye tıklayarak sitenizi kontrol edin
3. İlk yayın 1-5 dakika sürebilir

## 🎨 Adım 5: Repository'yi Özelleştirme (Opsiyonel)

GitHub repository sayfanızda:

1. **About** bölümündeki ⚙️ (dişli) ikonuna tıklayın
2. **Description**: "My personal portfolio website - Game Developer & AI Engineer"
3. **Website**: GitHub Pages URL'nizi ekleyin
4. **Topics** ekleyin:
   - `portfolio`
   - `game-development`
   - `artificial-intelligence`
   - `bilingual-website`
   - `github-pages`
5. "Save changes"

## 🔄 Gelecekteki Güncellemeler

Sitenizde değişiklik yaptığınızda:

```bash
# Değişiklikleri kaydet
git add .
git commit -m "Update: açıklama buraya"
git push

# Örnek:
git add .
git commit -m "Update: Yeni proje eklendi"
git push
```

## 📱 Sosyal Medya Paylaşımı

Siteniz yayında olduğunda:

1. LinkedIn profilinize "Website" olarak ekleyin
2. GitHub profilinizde "pinned repository" olarak sabitleyin
3. Twitter/X'te paylaşın

## 🐛 Sorun Giderme

### "Repository already exists" hatası:

```bash
# Mevcut remote'u kaldır
git remote remove origin

# Doğru URL ile tekrar ekle
git remote add origin DOGRU_URL
git push -u origin main
```

### "Permission denied" hatası:

GitHub hesabınıza SSH key eklemeniz veya Personal Access Token kullanmanız gerekebilir.

**Kolay Çözüm - GitHub CLI:**
```bash
# GitHub CLI yükleyin: https://cli.github.com/
gh auth login
gh repo create MustafaGulsoy.github.io --public --source=. --push
```

### Site görünmüyor:

1. GitHub Settings > Pages'te doğru branch'in seçili olduğundan emin olun
2. 5-10 dakika bekleyin
3. Tarayıcı cache'ini temizleyin (Ctrl+Shift+R)
4. Repository'nin "Public" olduğundan emin olun

### Stil bozuk görünüyor:

`index.html` dosyasındaki tüm yolların doğru olduğundan emin olun:
- ✅ `styles.css` (doğru)
- ❌ `/styles.css` (yanlış - GitHub Pages'te sorun çıkarabilir)

## 📊 Site İstatistikleri (Opsiyonel)

Google Analytics eklemek için `index.html` dosyasına `<head>` bölümüne:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎯 Özel Domain (İleri Düzey)

Kendi domain adınızı kullanmak istiyorsanız:

1. Domain sağlayıcınızdan bir domain satın alın
2. Repository root'una `CNAME` dosyası oluşturun:
   ```
   yourdomain.com
   ```
3. Domain DNS ayarlarını güncelleyin:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
4. GitHub Settings > Pages > Custom domain bölümüne domain'inizi girin

## ✅ Başarılı Yayın Kontrolü

Site yayında olduğunda:

- [ ] Ana sayfa açılıyor
- [ ] Dil değiştirme çalışıyor (EN/TR)
- [ ] Tüm bölümler görünüyor (Projects, Experience, About, Contact)
- [ ] Email, GitHub, LinkedIn linkleri çalışıyor
- [ ] Mobil cihazda responsive görünüyor
- [ ] Smooth scroll çalışıyor

## 🎉 Tebrikler!

Portfolyo siteniz artık canlı!

**Site URL'niz**: https://mustafagulsoy.github.io (veya seçtiğiniz URL)

## 📝 Notlar

- Her push işlemi GitHub Pages'i otomatik olarak günceller
- Güncellemeler 1-2 dakika içinde yansır
- Repository'yi private yapamazsınız (GitHub Pages için public olmalı)
- Dosya boyutu limiti: 100 MB
- Repository boyutu limiti: 1 GB

## 🆘 Yardım

Sorun yaşarsanız:

1. GitHub Settings > Pages bölümünü kontrol edin
2. Repository'nin Public olduğundan emin olun
3. Browser console'da hata var mı kontrol edin (F12)
4. GitHub [Status](https://www.githubstatus.com/) sayfasını kontrol edin

---

**Hazırlayan**: Claude Code ile oluşturuldu
**Tarih**: Kasım 2024
