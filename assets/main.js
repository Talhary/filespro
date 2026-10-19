// FilesPro website: theme toggle, sticky header, scroll reveal, screenshot lightbox,
// and the command palette demo. No dependencies.
(function () {
  "use strict";

  // Theme: light unless the visitor picked dark here before.
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  function setTheme(t) {
    if (t === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    if (toggle) toggle.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
  if (toggle) toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("fp-theme", next); } catch (e) { /* storage blocked */ }
  });

  // Header border once the page scrolls.
  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal sections as they come into view.
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Lightbox for screenshots.
  var box = document.getElementById("lightbox");
  if (box && typeof box.showModal === "function") {
    var img = box.querySelector("img");
    var cap = box.querySelector("p");
    document.querySelectorAll("button.window").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var shot = btn.querySelector("img");
        img.src = shot.src; // full size, not the srcset pick
        img.alt = shot.alt;
        cap.textContent = btn.getAttribute("data-caption") || shot.alt;
        box.showModal();
      });
    });
    box.addEventListener("click", function (e) { if (e.target === box || e.target.closest(".close")) box.close(); });
  }

  // Command palette demo: types a query, filters real FilesPro commands.
  var palette = document.getElementById("palette");
  if (palette) {
    var typed = palette.querySelector(".typed");
    var list = palette.querySelector("ul");
    var commands = [
      ["File", "Copy to other pane", "F5"],
      ["File", "Move to other pane", "F6"],
      ["File", "Rename", "F2"],
      ["File", "Batch rename…", "Ctrl+M"],
      ["File", "Quick look", "Space"],
      ["Edit", "Undo", "Ctrl+Z"],
      ["Tabs", "New tab", "Ctrl+T"],
      ["Navigate", "Jump to a frequent folder…", "Ctrl+J"],
      ["Tools", "Open terminal here", "Ctrl+`"],
      ["Archive", "Extract here", ""],
      ["Archive", "Compress…", ""],
      ["View", "Thumbnails view", "Ctrl+Shift+1"],
      ["View", "Show or hide hidden files", "Ctrl+H"],
      ["View", "Show or hide the preview pane", "Alt+P"]
    ];
    var queries = ["copy", "rename", "term", "view", "undo", "extract"];

    function esc(s) { return s.replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
    function keys(g) { return g ? '<span class="keyset">' + g.split("+").map(function (k) { return "<kbd>" + esc(k) + "</kbd>"; }).join(" ") + "</span>" : ""; }
    function render(q) {
      var hits = commands.filter(function (c) {
        return (c[0] + ": " + c[1]).toLowerCase().indexOf(q) >= 0;
      }).slice(0, 7);
      list.innerHTML = hits.map(function (c, i) {
        var label = esc(c[0] + ": " + c[1]);
        if (q) label = label.replace(new RegExp("(" + q + ")", "i"), "<b>$1</b>");
        return '<li class="' + (i === 0 ? "on" : "") + '"><span>' + label + "</span>" + keys(c[2]) + "</li>";
      }).join("");
    }

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { typed.textContent = "copy"; render("copy"); }
    else {
      var qi = 0, ci = 0, deleting = false;
      (function tick() {
        var q = queries[qi];
        if (!deleting) {
          ci++;
          typed.textContent = q.slice(0, ci);
          render(q.slice(0, ci));
          if (ci === q.length) { deleting = true; return setTimeout(tick, 2200); }
          return setTimeout(tick, 110);
        }
        ci--;
        typed.textContent = q.slice(0, ci);
        if (ci === 0) { deleting = false; qi = (qi + 1) % queries.length; render(""); return setTimeout(tick, 400); }
        setTimeout(tick, 45);
      })();
    }
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
