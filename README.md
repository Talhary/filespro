# FilesPro website

Static marketing site for FilesPro, served by GitHub Pages. No build step.

- `index.html` – home page
- `privacy.html` – privacy policy (use this URL in Partner Center once the site is live)
- `assets/` – styles, script, icons, screenshots (`shots/*.webp`, exported from the app repo's `store/images/screenshots`)

Live at https://talhary.github.io/filespro/

## Publish

Every push to `main` deploys through `.github/workflows/pages.yml` (Settings > Pages > Source is
"GitHub Actions"). The workflow can also be run by hand from the Actions tab.

## After the Store listing is live

The "Get FilesPro" buttons point at a Store search for now. Replace every
`https://apps.microsoft.com/search?query=FilesPro+Manager` (all marked `data-store`) with
`https://apps.microsoft.com/detail/<Store ID>`.

## Preview locally

```
python -m http.server 8000
```
