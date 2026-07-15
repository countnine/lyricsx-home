# LyricsX for Windows — Landing Page

Static marketing/landing site for [**LyricsX for Windows**](https://github.com/countnine/LyricsX-Windows),
a Windows app that finds, syncs and translates the lyrics of whatever you're playing.

> This repository contains **only the website**. The app source lives in
> [`countnine/LyricsX-Windows`](https://github.com/countnine/LyricsX-Windows).

## Stack

Plain static HTML / CSS + a tiny vanilla-JS i18n script. **No build step.**

```
index.html            # single-page landing
assets/css/style.css  # dark, minimal, responsive theme
assets/js/i18n.js     # EN/KO dictionary + language detection & toggle
assets/img/           # icon, favicon, demo
.nojekyll             # serve files as-is (skip Jekyll)
```

## Language

English is the default. On first visit, browsers set to Korean (`navigator.language`
starting with `ko`) render Korean automatically. Visitors can switch with the **EN/KO**
toggle in the header; the choice is saved in `localStorage`.

## Local preview

```powershell
# from the repository root
python -m http.server 8000
# then open http://localhost:8000
```

Use a local server (not `file://`) so relative paths and the i18n script behave the same
as in production.

## Deploy (GitHub Pages)

1. Push this repository to GitHub (e.g. `countnine/lyricsx-home`).
2. **Settings → Pages → Build and deployment → Source:** `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
3. The site publishes at `https://countnine.github.io/lyricsx-home/`.
   All asset paths are relative, so it works from that sub-path.
4. *(Optional)* Add a `CNAME` file to use a custom domain.

## Updating content

- **New release / version:** update `download.version` in `assets/js/i18n.js`
  (both `en` and `ko`) and the default text in `index.html`.
- **Download links** point at `.../releases/latest`, so they don't need per-release edits.
- **Screenshot:** `assets/img/demo.png` is a real Windows capture of the overlay
  (`LyricsX.exe --demo`). Recapture the same way to refresh it.
