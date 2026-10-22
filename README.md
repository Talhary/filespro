# FilesPro website

Static marketing site for FilesPro, served by GitHub Pages. No build step.

- `index.html` – home page
- `privacy.html` – privacy policy (use this URL in Partner Center once the site is live)
- `assets/` – styles, script, icons, screenshots (`shots/*.webp` at 480/800/1200/1600 wide, exported from the app repo's `store/images/screenshots-1.1`: light theme, Watercolor backdrop)

Live at https://talhary.github.io/filespro/

## Publish

Every push to `main` deploys through `.github/workflows/pages.yml` (Settings > Pages > Source is
"GitHub Actions"). The workflow can also be run by hand from the Actions tab.

## Store link

The "Get FilesPro" buttons (all marked `data-store`) point at
`https://apps.microsoft.com/detail/9NTKTTNK7JXX?hl=en-us&gl=US&ocid=pdpshare`.

## Preview locally

```
python -m http.server 8000
```

## Pages

| Page | Targets |
| --- | --- |
| `index.html` | FilesPro, dual-pane file manager for Windows |
| `shortcuts.html` | FilesPro keyboard shortcuts |
| `batch-rename-files-windows.html` | how to batch rename files in Windows |
| `compare-two-folders-windows.html` | how to compare two folders in Windows |
| `file-explorer-alternative.html` | File Explorer alternative |
| `privacy.html` | privacy policy (Partner Center) |

When you add or change a page, update `sitemap.xml` (and its `lastmod`) and link the page from the
home page's Guides section and the footers.
