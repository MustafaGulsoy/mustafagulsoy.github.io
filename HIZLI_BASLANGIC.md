# 🚀 Hızlı Başlangıç Kılavuzu

Portfolio web sitenizi 10 dakikada GitHub Pages'te yayınlayın!

## 📋 Gereksinimler

- GitHub hesabı (yoksa [buradan](https://github.com/join) oluşturun)
- Bilgisayarınızda Git (indirin: [git-scm.com](https://git-scm.com/))

## ⚡ 5 Adımda Yayınlama

### 1️⃣ Dosyaları İndirin

Portfolio dosyalarını bilgisayarınıza indirin ve bir klasöre çıkarın.

### 2️⃣ GitHub'da Repository Oluşturun

1. [GitHub.com](https://github.com)'a gidin
2. Sağ üstte **+** > **New repository** tıklayın
3. Repository adı: `kullaniciadi.github.io`
   - ⚠️ `kullaniciadi` yerine kendi GitHub kullanıcı adınızı yazın!
   - Örnek: GitHub kullanıcı adınız `mustafa` ise → `mustafa.github.io`
4. **Public** seçili olsun
5. **Create repository** tıklayın

### 3️⃣ Kişisel Bilgilerinizi Güncelleyin

Dosyaları bir metin editörü ile açın (VS Code, Notepad++, vb.)

**`index.html` dosyasında değiştirin:**

```html
<!-- Satır 15: Adınız -->
<a href="index.html" class="nav-logo">Adınız Soyadınız</a>

<!-- Satır 27-29: Başlık -->
<h1 class="hero-title">
    Türkiye'den bir AI Developer & Full-Stack Engineer.
</h1>

<!-- Satır 32-35: Açıklama -->
<p class="hero-description">
    Kendi açıklamanızı buraya yazın...
</p>

<!-- İletişim bölümünü bulun ve güncelleyin -->
<a href="mailto:sizin@email.com" class="contact-link">Email</a>
<a href="https://github.com/kullaniciadi" class="contact-link">GitHub</a>
```

**Projelerinizi ekleyin:**
- Her `<article class="project-card">` bir proje
- Kendi projelerinizle değiştirin

### 4️⃣ Git ile Yükleyin

Terminal veya Command Prompt'u açın, portfolio klasörüne gidin:

```bash
# Klasöre gidin (Windows)
cd C:\Users\kullanici\Desktop\portfolio-site

# Klasöre gidin (Mac/Linux)
cd ~/Desktop/portfolio-site

# Git başlat
git init

# Dosyaları ekle
git add .

# Commit
git commit -m "İlk portfolio yüklemesi"

# Branch adını main yap
git branch -M main

# GitHub'a bağlan (kullaniciadi'yi değiştirin!)
git remote add origin https://github.com/kullaniciadi/kullaniciadi.github.io.git

# Yükle
git push -u origin main
```

### 5️⃣ GitHub Pages Aktif Et

1. GitHub'daki repository'nize gidin
2. **Settings** > **Pages** (sol menü)
3. **Source** altında:
   - Branch: `main`
   - Folder: `/ (root)`
4. **Save** tıklayın

### ✅ Tamamdır!

1-2 dakika bekleyin, sonra ziyaret edin:
```
https://kullaniciadi.github.io
```

Siteniz yayında! 🎉

---

## 🔄 Site Güncelleme

Değişiklik yaptıktan sonra:

```bash
# Değişiklikleri kaydet
git add .
git commit -m "Güncelleme açıklaması"
git push
```

1-2 dakika içinde değişiklikler yayınlanır.

---

## 🎨 Renklerinizi Değiştirin

`styles.css` dosyasını açın, satır 10-16:

```css
:root {
    --color-accent: #0066cc;  /* Ana renginiz */
}
```

İstediğiniz renk kodunu yazın (hex, rgb, vb.)

---

## 📸 Fotoğraf Ekleyin

1. Fotoğrafınızı portfolio klasörüne koyun (`profile.jpg`)
2. `index.html`'de About bölümüne ekleyin:

```html
<div class="about-content">
    <img src="profile.jpg" alt="Adınız" style="max-width: 300px; border-radius: 10px;">
    <!-- Mevcut about text -->
</div>
```

---

## 🌐 Kendi Domain Kullanın

GoDaddy, Hostinger gibi yerlerden domain aldıysanız:

1. Portfolio klasörüne `CNAME` dosyası oluşturun
2. İçine domain'inizi yazın: `siteniz.com`
3. Domain ayarlarınıza gidin, şu DNS kayıtlarını ekleyin:

```
Type: A
Host: @
Points to: 185.199.108.153
```

4 tane A kaydı ekleyin (IP'ler):
- 185.199.108.153
- 185.199.109.153  
- 185.199.110.153
- 185.199.111.153

24 saat içinde domain aktif olur.

---

## ❓ Sık Sorulan Sorular

### Site yüklenmiyor?

- 2-5 dakika bekleyin
- Tarayıcı önbelleğini temizleyin (Ctrl+Shift+R)
- Repository adının doğru olduğundan emin olun

### CSS çalışmıyor?

```bash
# Dosyaların yüklendiğini kontrol edin
git status

# Eksik dosyaları ekleyin
git add styles.css script.js
git commit -m "CSS ve JS eklendi"
git push
```

### Repository adını değiştirmek istiyorum?

GitHub'da:
1. Settings > Repository name
2. Yeni adı yazın
3. **Rename** tıklayın
4. Local'de:
   ```bash
   git remote set-url origin https://github.com/kullaniciadi/yeni-ad.github.io.git
   ```

---

## 🆘 Yardım

Takıldığınız yer mi var?

1. [DEPLOYMENT.md](DEPLOYMENT.md) dosyasına bakın (detaylı anlatım)
2. [GitHub Issues](https://github.com/kullaniciadi/portfolio/issues) açın
3. Bana ulaşın!

---

## 📚 Ek Kaynaklar

- **Git Öğren**: [git-scm.com/book/tr/v2](https://git-scm.com/book/tr/v2)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **HTML/CSS**: [developer.mozilla.org](https://developer.mozilla.org/tr/)
- **VS Code**: [code.visualstudio.com](https://code.visualstudio.com/)

---

## ✅ Kontrol Listesi

Portfolio yayınlamadan önce:

- [ ] Adımı değiştirdim
- [ ] Email adresimi güncelledim
- [ ] GitHub/LinkedIn linklerimi ekledim
- [ ] En az 3 projemi ekledim
- [ ] About bölümünü yazdım
- [ ] Yerel olarak test ettim
- [ ] Git'e yükledim
- [ ] GitHub Pages aktif

---

**Başarılar! 🚀**

Siteniz hazır olduğunda bana da gösterin! 😊