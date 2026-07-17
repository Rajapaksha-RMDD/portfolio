# Dasindu Rajapaksha — Portfolio

A single-page portfolio site: dark theme, animated starfield background, and a numbered-section layout showcasing frontend, full-stack, IoT, and videography work.

## Files
- `index.html` — page structure & content
- `style.css` — theme, layout, animations
- `script.js` — starfield canvas, accordion, nav, scroll reveal
- `assets/profile.jpg` — profile photo

## Run it locally
Just open `index.html` in a browser — no build step, no dependencies.

## Host it free on GitHub Pages

1. Create a new repository on GitHub, e.g. `portfolio` (public).
2. On your computer, in this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Rajapaksha-RMDD/portfolio.git
   git push -u origin main
   ```
   (replace the URL with your actual repo URL if different)
3. On GitHub, go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/root`. Save.
5. Wait about a minute, then your site will be live at:
   `https://rajapaksha-rmdd.github.io/portfolio/`

## Editing content later
- Text and links live in `index.html`.
- Colors and fonts are set as CSS variables at the top of `style.css` under `:root` — change one value there to restyle the whole site.
- To swap the profile photo, replace `assets/profile.jpg` with a new square image (same filename), or update the `src` in `index.html`.
