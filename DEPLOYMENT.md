# 🚀 Deployment Guide

Complete step-by-step guide to deploy your portfolio website to GitHub Pages.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Text editor (VS Code, Sublime, etc.)

## 🌐 Option 1: Username Site (Recommended)

This will host your site at `https://username.github.io`

### Step 1: Create Repository

1. Go to GitHub.com
2. Click the **+** icon > **New repository**
3. Repository name: `username.github.io` (replace `username` with YOUR GitHub username)
   - Example: If your username is `mustafa`, name it `mustafa.github.io`
4. Make it **Public**
5. Don't initialize with README (we already have files)
6. Click **Create repository**

### Step 2: Prepare Your Files

1. **Download the portfolio files** to your computer
2. **Customize the content** (see Customization section below)
3. **Open terminal/command prompt** in the portfolio folder

### Step 3: Initialize Git

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Rename branch to main
git branch -M main
```

### Step 4: Connect to GitHub

```bash
# Add remote repository (replace 'username' with YOUR GitHub username)
git remote add origin https://github.com/username/username.github.io.git

# Push code
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 6: Wait & Visit

- Wait 1-2 minutes for deployment
- Visit: `https://username.github.io`
- Your site is live! 🎉

---

## 🗂️ Option 2: Project Site

This will host your site at `https://username.github.io/portfolio`

### Step 1: Create Repository

1. Repository name: `portfolio` (or any name you want)
2. Make it **Public**
3. Click **Create repository**

### Step 2-4: Same as Option 1

Follow steps 2-4 from Option 1, but use this remote URL:

```bash
git remote add origin https://github.com/username/portfolio.git
```

### Step 5: Enable GitHub Pages

Same as Option 1, but your site will be at:
`https://username.github.io/portfolio`

### Step 6: Update Links

If using a project site, update internal links in `index.html`:

```html
<!-- Change -->
<link rel="stylesheet" href="styles.css">

<!-- To -->
<link rel="stylesheet" href="/portfolio/styles.css">
```

---

## 🎨 Pre-Deployment Customization

### Required Changes

**1. Personal Information (index.html)**

```html
<!-- Line 15: Your name -->
<a href="index.html" class="nav-logo">Your Name</a>

<!-- Line 27-29: Your intro -->
<h1 class="hero-title">
    Your professional tagline here.
</h1>
```

**2. Email & Social Links**

```html
<!-- Find all these and update: -->
<a href="mailto:your.email@example.com">
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
<a href="https://twitter.com/yourhandle">
```

**3. Projects**

Update all project cards with your actual projects.

**4. About Section**

Replace the bio with your own story.

### Optional Changes

**1. Colors (styles.css)**

```css
:root {
    --color-accent: #0066cc;  /* Your brand color */
}
```

**2. Font**

Replace Inter with another font from Google Fonts.

**3. Add Photos**

Add your profile photo:
```html
<img src="profile.jpg" alt="Your Name">
```

---

## 🔄 Updating Your Site

After making changes:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main
```

Site will automatically update in 1-2 minutes.

---

## 🌍 Custom Domain Setup

Want to use your own domain (e.g., `yourname.com`)?

### Step 1: Add CNAME File

Create a file named `CNAME` (no extension) in your repository root:

```
yourdomain.com
```

### Step 2: Configure DNS

Go to your domain registrar (GoDaddy, Namecheap, etc.) and add:

**A Records:**
```
Type: A
Host: @
Points to: 185.199.108.153
```

Add 4 A records with these IPs:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**CNAME Record (for www):**
```
Type: CNAME
Host: www
Points to: username.github.io
```

### Step 3: Enable HTTPS

1. Go to repository Settings > Pages
2. Check **Enforce HTTPS**
3. Wait for SSL certificate (can take up to 24 hours)

### Step 4: Visit Your Domain

- Visit `https://yourdomain.com`
- Both `yourdomain.com` and `www.yourdomain.com` should work

---

## 🐛 Troubleshooting

### Site Not Loading

**Problem**: 404 error after deployment

**Solutions**:
1. Check repository name is `username.github.io` (exact match)
2. Wait 2-5 minutes after first push
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
4. Check Pages settings are enabled

### CSS/JS Not Loading

**Problem**: Page loads but no styling

**Solutions**:
1. Check file paths in HTML
2. Verify files are committed:
   ```bash
   git status
   git add styles.css script.js
   git commit -m "Add CSS and JS"
   git push
   ```

### Images Not Showing

**Problem**: Images show locally but not on GitHub

**Solutions**:
1. Use relative paths: `./images/photo.jpg` not `C:/images/photo.jpg`
2. Check file is committed
3. File names are case-sensitive: `Photo.jpg` ≠ `photo.jpg`

### Custom Domain Issues

**Problem**: Custom domain not working

**Solutions**:
1. DNS changes take 24-48 hours to propagate
2. Check CNAME file is correct (no http://, no trailing slash)
3. Verify DNS records with `nslookup yourdomain.com`
4. Try incognito mode to avoid cache

---

## 📊 Analytics Setup

### Google Analytics

**1. Get Tracking ID**
- Go to analytics.google.com
- Create property
- Copy Measurement ID (starts with G-)

**2. Add to index.html** (before `</head>`):

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

**3. Push changes**

```bash
git add index.html
git commit -m "Add Google Analytics"
git push
```

---

## 🔒 Security Best Practices

### 1. Never Commit Sensitive Data

Don't add to git:
- API keys
- Passwords
- Email addresses (use contact forms instead)
- Private information

### 2. Use Environment Variables

For any secrets, use GitHub Secrets instead of hardcoding.

### 3. Enable HTTPS

Always use HTTPS (enabled by default on GitHub Pages).

---

## ⚡ Performance Optimization

### 1. Image Optimization

```bash
# Compress images before uploading
# Use tools like TinyPNG, ImageOptim, or:
# https://squoosh.app/
```

### 2. Minify CSS/JS

Before deployment (optional):
```bash
# Install minifiers
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JS
uglifyjs script.js -o script.min.js
```

### 3. Check Performance

Use Google Lighthouse:
1. Open DevTools (F12)
2. Lighthouse tab
3. Generate report
4. Aim for 90+ score

---

## 📱 Testing Before Deployment

### 1. Test Locally

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

### 2. Test Responsiveness

- Desktop (1920x1080)
- Tablet (768px width)
- Mobile (375px width)

Use Chrome DevTools (F12 > Toggle device toolbar)

### 3. Cross-Browser Testing

Test on:
- Chrome
- Firefox  
- Safari (if on Mac)
- Edge

---

## 🆘 Getting Help

### Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [HTML/CSS Reference](https://developer.mozilla.org/en-US/docs/Web)

### Common Commands

```bash
# Check status
git status

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View remote URL
git remote -v

# Pull latest changes
git pull origin main
```

---

## ✅ Deployment Checklist

Before going live:

- [ ] Updated all personal information
- [ ] Changed all placeholder links
- [ ] Tested on mobile devices
- [ ] Checked for typos
- [ ] Verified all links work
- [ ] Optimized images
- [ ] Added analytics (optional)
- [ ] Tested in different browsers
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages
- [ ] Verified site loads correctly

---

**Need help?** Open an issue on the GitHub repository or contact me!

*Last Updated: November 2024*