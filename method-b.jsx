/* ============================================================
   Module B — Taktplan (kontrollområder × uker, diagonal flyt)
   → window.ModuleB
   ============================================================ */
(function () {
  var e = React.createElement;
  var useState = React.useState;
  var MD = window.MD;
  var ui = MD.ui;
  var H = window.H;

  function ModuleB() {
    var trades = MD.trades, areas = MD.taktAreas, W = MD.taktWeeks;
    var initial = {}; trades.forEach(function (t) { initial[t.id] = true; });
    var st = useState(initial); var on = st[0], setOn = st[1];

    function toggle(id) { var n = Object.assign({}, on); n[id] = !n[id]; setOn(n); }

    // header
    var weeks = [];
    for (var w = 0; w < W; w++) weeks.push(w);

    return e("section", { className: "mod" },
      e("div", { className: "wrap" },
        e("div", { className: "modhead" },
          e("div", { className: "eyebrow-rule" }, ui.bEyebrow),
          e("h2", null, ui.bTitlePre, e("span", { className: "g" }, ui.bTitleHi)),
          e("p", Object.assign({ className: "lead" }, H(ui.bLead)))
        ),

        // filter chips
        e("div", { className: "tchips" }, trades.map(function (t) {
          return e("button", { key: t.id, className: "tchip" + (on[t.id] ? "" : " off"), onClick: function () { toggle(t.id); } },
            e("i", { style: { background: t.c } }), t.navn);
        })),

        // matrix
        e("div", { className: "tscroll" },
          e("table", { className: "tmatrix" },
            e("thead", null, e("tr", null,
              e("th", { className: "korner" }, ui.bKO),
              weeks.map(function (w) { return e("th", { key: w }, ui.weekPrefix + (w + 1)); })
            )),
            e("tbody", null, areas.map(function (area, r) {
              return e("tr", { key: r },
                e("td", { className: "kolab" }, area),
                weeks.map(function (w) {
                  var t = w - r;                       // diagonal: each KO starts one week later
                  var trade = (t >= 0 && t < trades.length) ? trades[t] : null;
                  if (!trade) return e("td", { key: w, className: "tcell" });
                  var enabled = on[trade.id];
                  return e("td", { key: w, className: "tcell" },
                    e("span", {
                      className: "pill" + (enabled ? "" : " dim"),
                      style: { background: trade.c }
                    }, trade.navn));
                })
              );
            }))
          )
        ),

        // explainer
        e("div", { className: "texplain" }, ui.bExplain.map(function (ex, i) {
          return e("div", { className: "tex", key: i }, e("div", { className: "tk" }, ex.k), e("p", null, ex.p));
        })),

        e("div", { className: "tquote" },
          e("div", Object.assign({ className: "q" }, H(ui.bQuote)))
        ),

        e("div", { className: "ownnote" },
          e("div", { className: "ic" }, e(window.Icon, { name: "layers", size: 20 })),
          e("p", H(ui.ownNoteB))
        )
      )
    );
  }

  window.ModuleB = ModuleB;
})();
