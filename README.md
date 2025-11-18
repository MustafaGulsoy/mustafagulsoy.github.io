# Portfolio Website - Mustafa Gülsoy

A modern, minimal, and bilingual portfolio website showcasing my work as a Game Developer and AI Engineer. Built with vanilla HTML, CSS, and JavaScript with no framework dependencies.

## 🌐 Live Demo

Visit the live site: **[mustafagulsoy.github.io/portfolio-site](https://mustafagulsoy.github.io/portfolio-site)**

## ✨ Features

- **Bilingual Support**: Seamlessly switch between English and Turkish
- **Modern Design**: Clean, minimal interface with smooth animations
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Accessible**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Language Detection**: Automatically detects user's browser language
- **GitHub Pages Ready**: Deploy instantly without build process

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with i18n support
- **CSS3**: Modern CSS with Variables, Grid, and Flexbox
- **Vanilla JavaScript**: No frameworks, pure JS for interactions
- **Google Fonts**: Inter font family for clean typography

## 📁 Project Structure

```
portfolio-site/
├── index.html              # Main HTML file with bilingual support
├── styles.css              # All styles including responsive design
├── script.js               # Interactive features and language switcher
├── translations.js         # Bilingual content (EN/TR)
├── assets/
│   └── images/
│       └── projects/       # Project screenshots and images
├── Projects/               # Original project folders
│   ├── AITO/              # Underwater vehicle project
│   ├── EasyWay/           # Educational game project
│   ├── Minder/            # VR game project
│   └── Mudhis/            # Smart toothbrush project
├── Resumes/               # CV documents
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment instructions
├── HIZLI_BASLANGIC.md    # Quick start guide (Turkish)
└── OZET.md               # Project summary (Turkish)
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MustafaGulsoy/portfolio-site.git
   cd portfolio-site
   ```

2. **Open in browser**

   Simply open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html

   # On macOS
   open index.html

   # On Linux
   xdg-open index.html
   ```

   Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (with http-server)
   npx http-server
   ```

3. **Visit** `http://localhost:8000`

## 🌍 Deployment to GitHub Pages

### Method 1: Personal GitHub Pages

1. **Create a repository** named `MustafaGulsoy.github.io`

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website with bilingual support"
   git branch -M main
   git remote add origin https://github.com/MustafaGulsoy/MustafaGulsoy.github.io.git
   git push -u origin main
   ```

3. **Your site will be live at**: `https://mustafagulsoy.github.io`

### Method 2: Project Repository

1. **Create a repository** (e.g., `portfolio-site`)

2. **Push code to main branch**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/MustafaGulsoy/portfolio-site.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

4. **Your site will be live at**: `https://mustafagulsoy.github.io/portfolio-site`

## 🎨 Customization

### Update Personal Information

**Edit `index.html`:**
- Update contact information (email, GitHub, LinkedIn)
- Modify project descriptions
- Add or remove projects

**Edit `translations.js`:**
- Update English and Turkish translations
- Add new sections or modify existing content

**Edit `styles.css`:**
```css
/* Customize colors */
:root {
    --color-accent: #0066cc;  /* Your brand color */
    --color-text: #1a1a1a;    /* Main text color */
}
```

### Add New Projects

Add a project card in the `#projects` section of `index.html`:

```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title" data-i18n="projects.yourproject.title">Project Name</h3>
        <span class="project-year">2024</span>
    </div>
    <p class="project-description" data-i18n="projects.yourproject.description">
        Description here...
    </p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</article>
```

Then add translations in `translations.js`.

## 🌐 Language Support

The website automatically detects the user's browser language and displays content in English or Turkish. Users can manually switch languages using the language buttons in the navigation.

**Supported Languages:**
- 🇬🇧 English (en)
- 🇹🇷 Turkish (tr)

Language preference is saved in localStorage for returning visitors.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 📊 Performance

- Lighthouse Score: 95+
- Page Load Time: <1s
- First Contentful Paint: <0.5s
- No JavaScript frameworks required
- Total Size: ~60KB (excluding images)

## 🔧 Advanced Features

### Language Switcher Implementation

The language switcher uses vanilla JavaScript to:
- Detect browser language on first visit
- Store language preference in localStorage
- Dynamically update all elements with `data-i18n` attributes
- Support nested translation keys (e.g., `nav.projects`)

### Smooth Scroll & Animations

- Smooth scrolling to anchor links
- Intersection Observer for fade-in animations
- Active navigation link highlighting
- Project card hover effects

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration from [Timmy O'Mahony](https://timmyomahony.com)
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Contact

- **Email**: mustafagulsoy05@gmail.com
- **GitHub**: [@MustafaGulsoy](https://github.com/MustafaGulsoy)
- **LinkedIn**: [Mustafa Gülsoy](https://linkedin.com/in/mustafa-gulsoy)

## 🎯 Featured Projects

- **1.5 Adana AITO**: SAF2023 Champion Underwater Vehicle
- **Mudhiş**: TÜBITAK-funded Smart Toothbrush for Kids
- **Healthcare AI Systems**: Production AI for Kardelen Yazılım
- **EasyWay**: Cross-platform Educational Games
- **Minder**: VR Game Development

---

**Built with ❤️ by Mustafa Gülsoy**

*Last Updated: November 2024*
