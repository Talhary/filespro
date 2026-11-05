# FilesPro: dual-pane file manager for Windows

**FilesPro** is a fast, keyboard-first file manager for Windows 10 and 11, built in Rust. It has two panes, tabs, instant search and an operation queue you can pause, resume and undo. It opens code, PDFs, documents, pictures and video in its own viewer tab, runs terminals side by side, tags files, finds duplicates, shows what fills your disk and syncs folders. No account, no ads, no telemetry.

**Official site:** https://talhatechs.co.uk/products/filespro/

**Download:** [Get FilesPro from the Microsoft Store](https://apps.microsoft.com/detail/9NTKTTNK7JXX)

**Made by:** [TalhaTechs](https://talhatechs.co.uk/), who build fast, private Windows software in Rust. Also from TalhaTechs: Noyare, a system monitor for Windows, on the [Microsoft Store](https://apps.microsoft.com/detail/9PL83RF36NP4).

## Guides

Step-by-step guides for common Windows file tasks: [keyboard shortcuts](https://talhary.github.io/filespro/shortcuts.html), [how to batch rename files in Windows](https://talhary.github.io/filespro/batch-rename-files-windows.html), [how to compare two folders in Windows](https://talhary.github.io/filespro/compare-two-folders-windows.html) and [a File Explorer alternative](https://talhary.github.io/filespro/file-explorer-alternative.html).

## Privacy

FilesPro collects no telemetry. Read the [privacy policy](https://talhary.github.io/filespro/privacy.html).

---

## About this repository

This repository holds the FilesPro website source, not the app's source code.

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
