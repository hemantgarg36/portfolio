# Hemant Garg — Business Analyst Portfolio
## Setup & Customisation Guide

### 📁 Folder Structure
```
portfolio/
├── index.html          ← Main single-page website
├── resume.pdf          ← 🔴 ADD YOUR RESUME HERE (rename yours to resume.pdf)
├── resume-placeholder.txt
├── css/
│   └── style.css       ← All styles (light theme, gold accent)
├── js/
│   ├── main.js         ← Scroll, animations, modal, carousel, form
│   └── projects.js     ← All project/case study data
└── README.md
```

### 🚀 How to Use
1. Open `index.html` in any browser — no server needed
2. All sections work offline except the contact form (needs backend)
3. Add your `resume.pdf` to the root folder

### ✏️ Customisation

#### Update Personal Info
Edit `index.html`:
- Name, tagline, about text
- Email, phone, location
- Social media links (replace `href="#"` with your actual URLs)

#### Update Projects
Edit `js/projects.js`:
- Each project has: title, tag, description, images[], links[], features[]
- Replace `images` array with your own screenshot URLs or local paths
- Replace `links` URLs with actual demo/download links

#### Change Profile Photo
In `index.html`, find:
```html
<img src="https://images.unsplash.com/..." class="hero-img" />
```
Replace the src with your own photo path, e.g., `images/profile.jpg`

#### Change Colour Scheme
In `css/style.css`, update CSS variables at the top:
```css
--gold: #c8973a;        ← Accent colour
--ink: #1a1814;         ← Dark text
--cream: #faf8f4;       ← Background
```

### 📧 Contact Form
The form currently shows a success animation only. To make it functional:
- Connect to a service like **Formspree**: change `<form>` action to `https://formspree.io/f/YOUR_ID`
- Or use **EmailJS** in `main.js` inside the `handleForm` function

### 🌐 Deployment
Upload the entire `portfolio/` folder to:
- **GitHub Pages** (free)
- **Netlify** (drag & drop the folder)
- **Vercel**
- Any shared hosting / FTP

### 📱 Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation with active section highlighting
- ✅ Project modal with auto-scrolling image carousel
- ✅ Skill bars with animated fill on scroll
- ✅ Count-up stats animation
- ✅ Portfolio category filter
- ✅ Scroll-to-top button
- ✅ Resume opens in new tab
- ✅ Keyboard navigation (Esc, ←/→ arrows in modal)
- ✅ Mobile hamburger menu

---
Designed & Developed by **Hemant Garg** · © 2025
