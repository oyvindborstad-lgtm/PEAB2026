/* ============================================================
   Kaffeprat med PEAB — Lean Communications
   App-logikk (norsk): scroll-reveal · scrollspy ·
   samspillshjul · taktflyt · fullskjerm-embed · utlogging
   ============================================================ */
(function () {
  "use strict";

  /* ---------- samspillshjul ---------- */
  var ORG_NODES = ["Råbygg", "Fasade & tak", "Innredning", "Tekniske fag",
                   "Prosjektering", "Innkjøp", "Produksjon", "BIM / VDC"];

  function buildOrg() {
    var ring = document.getElementById("orgRing");
    if (!ring) return;
    ring.querySelectorAll(".org-node, .org-spoke").forEach(function (n) { n.remove(); });

    var n = ORG_NODES.length;
    var R = 41; // % radius for node-sentre
    for (var i = 0; i < n; i++) {
      var ang = (-90 + i * (360 / n)) * Math.PI / 180;
      var x = 50 + R * Math.cos(ang);
      var y = 50 + R * Math.sin(ang);

      var spoke = document.createElement("div");
      spoke.className = "org-spoke";
      spoke.style.left = "50%";
      spoke.style.top = "50%";
      spoke.style.width = R + "%";
      spoke.style.transform = "rotate(" + (ang * 180 / Math.PI) + "deg)";
      spoke.dataset.idx = i;
      ring.appendChild(spoke);

      var node = document.createElement("div");
      node.className = "org-node";
      node.style.left = x + "%";
      node.style.top = y + "%";
      node.dataset.idx = i;
      node.innerHTML = "<span>" + ORG_NODES[i] + "</span>";
      node.addEventListener("mouseenter", function () {
        var id = this.dataset.idx;
        ring.querySelectorAll('.org-spoke[data-idx="' + id + '"]').forEach(function (s) { s.classList.add("hot"); });
        this.classList.add("hot");
      });
      node.addEventListener("mouseleave", function () {
        var id = this.dataset.idx;
        ring.querySelectorAll('.org-spoke[data-idx="' + id + '"]').forEach(function (s) { s.classList.remove("hot"); });
        this.classList.remove("hot");
      });
      ring.appendChild(node);
    }
  }

  /* ---------- taktflyt ---------- */
  var TRADES = ["Betong", "Tømmer", "Rør", "Ventilasjon", "Elektro"];
  var LOCS = ["KO-01 · Grunn", "KO-02 · Plan 1", "KO-03 · Plan 2",
              "KO-04 · Plan 3", "KO-05 · Tak & teknikk", "KO-06 · Fasade"];
  var TK_COLORS = ["#5a7681", "#33A6B1", "#78BE20", "#CDD751", "#196573"];
  var taktTimer = null;

  function buildTakt() {
    var grid = document.getElementById("taktGrid");
    if (!grid) return;
    if (taktTimer) { clearInterval(taktTimer); taktTimer = null; }
    grid.innerHTML = "";

    var LOC = LOCS.length;
    var TIME = LOC + TRADES.length - 1;

    function cell(cls, txt) {
      var d = document.createElement("div");
      d.className = cls;
      d.textContent = txt;
      return d;
    }

    var legend = document.getElementById("taktLegend");
    if (legend) {
      legend.innerHTML = "";
      TRADES.forEach(function (name, i) {
        var s = document.createElement("span");
        s.className = "tk-key";
        s.innerHTML = '<i style="background:' + TK_COLORS[i % TK_COLORS.length] + '"></i>' + name;
        legend.appendChild(s);
      });
    }

    var head = document.createElement("div");
    head.className = "tk-row tk-head";
    head.appendChild(cell("tk-rowlabel", ""));
    for (var t = 0; t < TIME; t++) head.appendChild(cell("tk-area", "T" + (t + 1)));
    grid.appendChild(head);

    var cells = [];
    LOCS.forEach(function (name) {
      var row = document.createElement("div");
      row.className = "tk-row";
      row.appendChild(cell("tk-rowlabel tk-loc", name));
      var rowCells = [];
      for (var t2 = 0; t2 < TIME; t2++) {
        var c = document.createElement("div");
        c.className = "tk-cell";
        row.appendChild(c);
        rowCells.push(c);
      }
      cells.push(rowCells);
      grid.appendChild(row);
    });

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function render(step) {
      for (var L = 0; L < LOC; L++) {
        for (var t = 0; t < TIME; t++) {
          var tradeIdx = t - L;
          var hasTrade = tradeIdx >= 0 && tradeIdx < TRADES.length;
          var visible = t < step;
          var c = cells[L][t];
          if (hasTrade && visible) {
            c.style.setProperty("--c", TK_COLORS[tradeIdx]);
            c.classList.add("on");
          } else {
            c.classList.remove("on");
          }
          c.classList.toggle("front", hasTrade && t === step - 1 && !reduce);
        }
      }
    }

    if (reduce) { render(TIME + 1); return; }

    var step = 0;
    render(step);
    taktTimer = setInterval(function () {
      step++;
      if (step > TIME + 2) step = 0;
      render(step);
    }, 850);
  }

  /* ---------- fullskjerm-overlay for den interaktive modellen ---------- */
  function initFullscreen() {
    var frame = document.querySelector(".embed-frame");
    var openBtn = document.querySelector("[data-fs-open]");
    var closeBtn = document.querySelector("[data-fs-close]");
    if (!frame || !openBtn) return;

    var iframe = frame.querySelector("iframe");
    var baseSrc = iframe ? (iframe.getAttribute("data-src") || "gjennomforingsmodellen.html") : "";
    var parent = frame.parentNode;
    var placeholder = document.createComment("embed-frame-home");
    parent.insertBefore(placeholder, frame);

    function open(moduleId) {
      var id = moduleId || "A";
      if (iframe) iframe.setAttribute("src", baseSrc + "#" + id);
      document.body.appendChild(frame);
      frame.classList.add("fs");
      frame.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function close() {
      frame.classList.remove("fs");
      frame.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      placeholder.parentNode.insertBefore(frame, placeholder);
    }

    openBtn.addEventListener("click", function () { open(); });
    if (closeBtn) closeBtn.addEventListener("click", close);

    document.querySelectorAll("[data-fs-module]").forEach(function (card) {
      function go() { open(card.getAttribute("data-fs-module")); }
      card.addEventListener("click", go);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && frame.classList.contains("fs")) close();
    });
  }

  /* ---------- utlogging ---------- */
  function initLogout() {
    var btn = document.getElementById("logout");
    if (!btn) return;
    btn.addEventListener("click", function () {
      try { sessionStorage.removeItem("peab-auth"); } catch (e) {}
      location.href = "logget-ut.html";
    });
  }

  /* ---------- scroll-reveal ---------- */
  function reveal() {
    var els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- scrollspy ---------- */
  function spy() {
    var links = Array.prototype.slice.call(document.querySelectorAll("nav .links a[data-sec]"));
    if (!links.length) return;
    var map = {};
    links.forEach(function (l) {
      var s = document.getElementById(l.getAttribute("data-sec"));
      if (s) map[l.getAttribute("data-sec")] = { link: l, el: s };
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var id = e.target.id;
        if (!map[id]) return;
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          map[id].link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (k) { io.observe(map[k].el); });
  }

  /* ---------- init ---------- */
  function init() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      try { window.lucide.createIcons(); } catch (e) {}
    }
    buildOrg();
    buildTakt();
    initFullscreen();
    initLogout();
    reveal();
    spy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
