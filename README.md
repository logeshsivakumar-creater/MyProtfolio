# Logesh S – Personal Portfolio

A clean, modern, and responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript.

---

## 🗂 Project Structure

```
Protfolio_Loki/
│
├── index.html        ← Main HTML (all sections)
├── style.css         ← All styles (organized by section)
├── script.js         ← All JavaScript (scroll, menu, form)
│
├── images/
│   └── profile.jpg   ← Place your profile photo here
│
└── README.md         ← This file
```

---

## 🚀 How to Run

You **do not** need any server or build tool. This is a simple static website.

**Option 1 – Open directly in browser:**
1. Navigate to the `Protfolio_Loki` folder.
2. Double-click `index.html`.
3. It will open in your default browser.

**Option 2 – Use VS Code Live Server (recommended for development):**
1. Open the folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
4. The site will open at `http://127.0.0.1:5500`.

---

## 🖼 How to Replace the Profile Image

1. Get a **clear, professional photo** of yourself (square or portrait ratio works best).
2. Rename your photo file to `profile.jpg`.
3. Place it inside the `images/` folder:
   ```
   images/profile.jpg
   ```
4. Refresh the browser — your photo will appear automatically.

> **Tip:** A square image (e.g. 400×400 px or 600×600 px) works best. The image is automatically cropped to fit the circular frame.

> **If no image is provided**, a clean placeholder with your name will be shown automatically — no broken images.

---

## ✏️ How to Update Personal Information

All content is in `index.html`. Here are the key places to edit:

| What to change | Where in `index.html` |
|---|---|
| Name | `<a class="nav-logo">` and `<h1 class="hero-name">` |
| Tagline | `<p class="hero-tagline">` |
| Hero description | `<p class="hero-description">` |
| About Me text | `<div class="about-text">` |
| Skills | `<div class="skills-grid">` – edit each `.skill-card` |
| Experience | `<div class="timeline-card">` |
| Projects | `<div class="projects-grid">` – edit each `.project-card` |
| Education | `<div class="edu-card">` |
| Certification | `<div class="cert-card">` |
| Email | All `href="mailto:..."` and `contact-value` links |
| LinkedIn | All `href="https://www.linkedin.com/..."` links |
| Footer | `<footer class="footer">` |

---

## 🌐 How to Deploy the Website

### Option 1 – GitHub Pages (Free, Recommended)

1. Create a free account at [github.com](https://github.com).
2. Create a new repository named `portfolio` (or any name).
3. Upload all the files (`index.html`, `style.css`, `script.js`, `images/`).
4. Go to **Settings → Pages** in the repository.
5. Under **Source**, select `main` branch and `/ (root)`.
6. Click **Save**. Your site will be live at:
   ```
   https://your-username.github.io/portfolio/
   ```

### Option 2 – Netlify (Free, Very Easy)

1. Go to [netlify.com](https://netlify.com) and sign up.
2. Drag and drop the entire `Protfolio_Loki` folder onto the Netlify dashboard.
3. Your site is live instantly with a free URL.
4. You can connect a custom domain later.

### Option 3 – Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up.
2. Import your GitHub repository or drag-drop your folder.
3. Click **Deploy** — done.

---

## 🎨 How to Customize Colors

Open `style.css` and look for the `:root` block at the top (Section 1):

```css
:root {
  --clr-bg:     #0d1117;   /* Main background */
  --clr-accent: #3b82f6;   /* Blue accent color */
  --clr-text:   #e2e8f0;   /* Main text color */
  /* ... */
}
```

Change `--clr-accent` to any color you like. For example:
- Purple: `#8b5cf6`
- Green:  `#10b981`
- Teal:   `#14b8a6`

---

## 📱 Responsive Design

The website is tested and works on:
- ✅ Desktop (1280px+)
- ✅ Laptop (1024px)
- ✅ Tablet (768px)
- ✅ Mobile (375px – 640px)
- ✅ Small mobile (320px)

---

## 📬 Contact Form

The contact form is **frontend-only** (no backend or email service). It:
- Validates all fields (name, email, message).
- Shows clear error messages for empty or invalid fields.
- Shows a success message when submitted.
- Tells visitors to use your email for direct contact.

To make the form **actually send emails**, you can integrate:
- [EmailJS](https://www.emailjs.com/) – Free, no backend needed.
- [Formspree](https://formspree.io/) – Free tier available.
- [Web3Forms](https://web3forms.com/) – Free tier available.

---

## 🛠 Technologies Used

- **HTML5** – Semantic, accessible markup
- **CSS3** – Custom properties, Flexbox, Grid, animations
- **Vanilla JavaScript** – No frameworks, no dependencies
- **Font Awesome 6** – Icons (CDN)
- **Google Fonts** – Inter + Space Grotesk (CDN)

---

## 📄 License

This portfolio is personal. You are free to adapt it for your own use.

---

*Built with ❤️ for Logesh S – B.Sc AI & ML Student | COO at Innovate Graphicz*
