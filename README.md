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

- **Download links** point directly at the latest installer via
  `.../releases/latest/download/LyricsX-win-Setup.exe` (and `...-Portable.zip`),
  so they always serve the newest build with no per-release edits.
- **Displayed version** ("Latest release: vX.Y.Z") is refreshed automatically by
  the `Sync latest release version` GitHub Actions workflow — see below.
- **Demo:** `assets/img/demo.gif` is a real Windows capture of the karaoke fill
  (`LyricsX.exe --demo`, ~4s loop). Recapture the same way to refresh it.

## Auto-syncing the version label (.github/workflows/update-version.yml)

The workflow reads the newest release tag of `countnine/LyricsX-Windows` and
rewrites the `Latest release: vX.Y.Z` string in `index.html` and `assets/js/i18n.js`,
committing only when it changes (which re-triggers the Pages build).

Triggers:
- **Daily** at 06:00 UTC (fallback) and **manually** from the Actions tab.
- **Instant (optional):** have the app repo's release workflow fire a
  `repository_dispatch` of type `release-published` at this repo. That needs a PAT
  with `contents:write` on this repo stored as a secret in the app repo; without it,
  the daily/manual runs still keep the label current.

## Making this repo private?

GitHub Pages serves a site from a **private** repo only on a **paid** plan
(Pro/Team/Enterprise). On the **Free** plan, switching this repo to private
**unpublishes** the live site. Note that even on paid plans the published page stays
publicly viewable (private *source* ≠ private *site*). If you want to keep the source
private but the site free and public, deploy the same repo through
**Cloudflare Pages** or **Netlify** instead — both build from a private GitHub repo
at no cost.
