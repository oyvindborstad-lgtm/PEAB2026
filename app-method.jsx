/* ============================================================
   App shell — module navigation + framing
   ============================================================ */
(function () {
  var e = React.createElement;
  var useState = React.useState;
  var Icon = window.Icon;
  var ui = window.MD.ui;

  var MODULES = [
    { id: "A", n: "01", label: ui.modA, icon: "users", comp: function () { return window.ModuleA; } },
    { id: "B", n: "02", label: ui.modB, icon: "layers", comp: function () { return window.ModuleB; } },
    { id: "C", n: "03", label: ui.modC, icon: "calculator", comp: function () { return window.ModuleC; } }
  ];

  function moduleFromHash() {
    var h = (window.location.hash || "").replace("#", "").toUpperCase();
    return (h === "A" || h === "B" || h === "C") ? h : "A";
  }

  function App() {
    var st = useState(moduleFromHash()); var cur = st[0], setCur = st[1];

    React.useEffect(function () {
      function onHash() { setCur(moduleFromHash()); }
      window.addEventListener("hashchange", onHash);
      return function () { window.removeEventListener("hashchange", onHash); };
    }, []);

    function go(id) { setCur(id); try { history.replaceState(null, "", "#" + id); } catch (e) {} window.scrollTo({ top: 0, behavior: "smooth" }); }

    var mod = MODULES.filter(function (m) { return m.id === cur; })[0];
    var Comp = mod.comp();

    return e("div", { className: "app" },
      e("header", { className: "topbar" },
        e("div", { className: "wrap" },
          e("div", { className: "row" },
            e("img", { className: "logo", src: "assets/logo-lc.png", alt: "Lean Communications" }),
            e("span", { className: "mtag" }, ui.mtag),
            e("span", { className: "spacer" })
          )
        )
      ),

      e("div", { className: "wrap" },
        e("div", { className: "modnav" }, MODULES.map(function (m) {
          return e("button", { key: m.id, className: cur === m.id ? "on" : "", onClick: function () { go(m.id); } },
            e("span", { className: "nn" }, m.n),
            e(Icon, { name: m.icon, size: 17 }),
            m.label);
        }))
      ),

      e(Comp, { key: cur }),

      e("footer", { className: "mfooter" },
        e("div", { className: "wrap" },
          e("div", { className: "row" },
            e("div", null,
              e("img", { className: "logo", src: "assets/logo-lc.png", alt: "Lean Communications" }),
              e("p", null, ui.footerAbout)
            ),
            e("p", null, ui.footerNote)
          )
        )
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(e(App));
})();
