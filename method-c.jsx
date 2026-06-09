/* ============================================================
   Module C — Kalkyle, modenhet, risiko og alternativer
   → window.ModuleC
   ============================================================ */
(function () {
  var e = React.createElement;
  var useState = React.useState;
  var MD = window.MD, Icon = window.Icon;
  var ui = MD.ui;
  var H = window.H;

  var LOC = { no: "nb-NO", en: "en-US", es: "es-ES", de: "de-DE" }[MD.lang] || "nb-NO";
  var DEC = (MD.lang === "en") ? "." : ",";

  function nok(v) { return Math.round(v).toLocaleString(LOC); }
  function sign(v, dec) {
    return (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(dec == null ? 1 : dec).replace(".", DEC);
  }
  function statusLabel(code) { return ui.status[code] || code; }

  /* ---------------- maturity gauge ---------------- */
  function Gauge(props) {
    var v = props.value, target = props.target, max = 10;
    var cx = 90, cy = 88, rr = 72;
    function pt(val) {
      var theta = Math.PI * (1 - val / max);
      return [cx + rr * Math.cos(theta), cy - rr * Math.sin(theta)];
    }
    function arc(from, to, n) {
      var pts = [];
      for (var i = 0; i <= n; i++) { var val = from + (to - from) * i / n; pts.push(pt(val).join(",")); }
      return pts.join(" ");
    }
    var color = v >= 7.5 ? "#78BE20" : (v >= 5 ? "#e0a800" : "#E4022D");
    var tp = pt(target);
    return e("svg", { width: 180, height: 108, viewBox: "0 0 180 108" },
      e("polyline", { points: arc(0, max, 60), fill: "none", stroke: "#E6E8EA", strokeWidth: 14, strokeLinecap: "round" }),
      e("polyline", { points: arc(0, v, Math.max(2, Math.round(v * 6))), fill: "none", stroke: color, strokeWidth: 14, strokeLinecap: "round" }),
      e("line", { x1: tp[0], y1: tp[1], x2: cx + (rr + 9) * Math.cos(Math.PI * (1 - target / max)), y2: cy - (rr + 9) * Math.sin(Math.PI * (1 - target / max)), stroke: "#002A3A", strokeWidth: 2 }),
      e("text", { x: cx, y: 78, textAnchor: "middle", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, fill: "#002A3A" }, v.toFixed(1).replace(".", DEC)),
      e("text", { x: cx, y: 98, textAnchor: "middle", fontFamily: "var(--font-display)", fontSize: 11, fill: "#667F8B" }, ui.outOf)
    );
  }

  /* ---------------- line chart ---------------- */
  function LineChart(props) {
    var s = MD.calc.series, selIdx = props.selIdx;
    var W = 580, H2 = 300, padL = 46, padR = 40, padT = 18, padB = 38;
    var plotW = W - padL - padR, plotH = H2 - padT - padB;
    var lo = 1660, hi = 1748;
    function x(i) { return padL + (i / (s.length - 1)) * plotW; }
    function y(v) { return padT + (1 - (v - lo) / (hi - lo)) * plotH; }
    function ym(v) { return padT + (1 - v / 10) * plotH; }

    function line(key) {
      return s.filter(function (p) { return p[key] != null; })
        .map(function (p) { return x(s.indexOf(p)) + "," + y(p[key]); }).join(" ");
    }
    var modLine = s.map(function (p, i) { return x(i) + "," + ym(p.mod); }).join(" ");
    var malLine = x(0) + "," + y(1678) + " " + x(s.length - 1) + "," + y(1678);

    var gx = [1660, 1680, 1700, 1720, 1740];
    return e("svg", { width: "100%", viewBox: "0 0 " + W + " " + H2, style: { maxWidth: W } },
      gx.map(function (g, i) {
        return e("g", { key: i },
          e("line", { x1: padL, y1: y(g), x2: W - padR, y2: y(g), stroke: "#EEF1F2", strokeWidth: 1 }),
          e("text", { x: padL - 8, y: y(g) + 3, textAnchor: "end", fontSize: 10, fill: "#99AAB1" }, g));
      }),
      s.map(function (p, i) {
        return e("text", { key: "x" + i, x: x(i), y: H2 - 16, textAnchor: "middle", fontSize: 10, fill: "#667F8B" }, p.m);
      }),
      [2, 4, 6, 8, 10].map(function (g, i) {
        return e("text", { key: "r" + i, x: W - padR + 8, y: ym(g) + 3, textAnchor: "start", fontSize: 10, fill: "#AED879" }, g);
      }),
      selIdx != null ? e("line", { x1: x(selIdx), y1: padT, x2: x(selIdx), y2: padT + plotH, stroke: "#78BE20", strokeWidth: 1.5, strokeDasharray: "4 3" }) : null,
      e("polyline", { points: malLine, fill: "none", stroke: "#CDD751", strokeWidth: 2, strokeDasharray: "6 4" }),
      e("polyline", { points: modLine, fill: "none", stroke: "#78BE20", strokeWidth: 2.5 }),
      e("polyline", { points: line("plan"), fill: "none", stroke: "#335564", strokeWidth: 2.5, strokeDasharray: "5 4" }),
      e("polyline", { points: line("kalk"), fill: "none", stroke: "#002A3A", strokeWidth: 3 }),
      s.map(function (p, i) {
        if (p.kalk == null) return null;
        return e("circle", { key: "c" + i, cx: x(i), cy: y(p.kalk), r: i === selIdx ? 5 : 3.5, fill: "#002A3A" });
      })
    );
  }

  /* ---------------- bars ---------------- */
  function Bars() {
    var g = MD.calc.groups;
    var maxv = 540;
    var st = useState(-1); var open = st[0], setOpen = st[1];
    return e("div", null, g.map(function (fg, i) {
      var diff = Math.round((fg.val - fg.mal) / fg.mal * 100);
      var isOpen = open === i;
      return e("div", { key: fg.id, className: "bar" + (isOpen ? " openbar" : ""), onClick: function () { setOpen(isOpen ? -1 : i); } },
        e("div", { className: "brow" },
          e("span", { className: "bn" }, fg.navn),
          e("span", { className: "bv" }, nok(fg.val), " " + ui.unit + " ", e("span", { className: "bdiff" }, "+" + diff + "%"))
        ),
        e("div", { className: "btrack" },
          e("div", { className: "bfill", style: { width: (fg.val / maxv * 100) + "%", background: fg.c } }),
          e("div", { className: "bmal", style: { left: (fg.mal / maxv * 100) + "%" }, title: ui.malTitle + nok(fg.mal) })
        ),
        isOpen ? e("div", { className: "bsub fade" }, fg.sub.map(function (sb, j) {
          return e("div", { className: "srow", key: j }, e("span", { className: "sn" }, sb[0]), e("span", null, nok(sb[1]) + " " + ui.unit));
        })) : null
      );
    }));
  }

  /* ---------------- Tab 1: dynamisk kalkyle ---------------- */
  function TabKalkyle() {
    var s = MD.calc.series;
    var idxState = useState(5); var idx = idxState[0], setIdx = idxState[1];
    var accState = useState(false); var accOpen = accState[0], setAccOpen = accState[1];
    var snap = s[idx];
    var cur = snap.kalk != null ? snap.kalk : snap.plan;
    var prev = idx > 0 ? (s[idx - 1].kalk != null ? s[idx - 1].kalk : s[idx - 1].plan) : cur;
    var move = cur - prev;
    var overTarget = cur - 1678;

    return e("div", { className: "fade" },
      e("div", { className: "slider-wrap" },
        e("span", { className: "sl-lbl" }, ui.timeline),
        e("input", { type: "range", min: 0, max: s.length - 1, step: 1, value: idx,
          onChange: function (ev) { setIdx(+ev.target.value); } }),
        e("span", { className: "sl-val" }, snap.m, snap.now ? ui.nowSuffix : "")
      ),

      e("div", { className: "kpis" },
        e("div", { className: "kpi" },
          e("div", { className: "kl" }, ui.kpiCur),
          e("div", { className: "kv" }, nok(cur), " ", e("span", { className: "u" }, ui.unit)),
          e("div", { className: "ks" }, snap.kalk != null ? ui.ksHist : ui.ksPlan)
        ),
        e("div", { className: "kpi" },
          e("div", { className: "kl" }, ui.kpiTarget),
          e("div", { className: "kv", style: { color: overTarget > 0 ? "#E4022D" : "#78BE20" } }, sign(overTarget, 0)),
          e("div", { className: "ks" }, ui.malPrefix + nok(1678) + " " + ui.unit + " (" + sign(overTarget / 1678 * 100, 1) + " %)")
        ),
        e("div", { className: "kpi" },
          e("div", { className: "kl" }, ui.kpiMove),
          e("div", { className: "kv", style: { color: move <= 0 ? "#78BE20" : "#E4022D" } }, sign(move, 0)),
          e("div", { className: "ks " + (move <= 0 ? "pos" : "neg") }, move <= 0 ? ui.moveDown : ui.moveUp)
        ),
        e("div", { className: "kpi gauge-kpi" },
          e("div", { className: "kl" }, ui.gaugeLabel),
          e(Gauge, { value: snap.mod, target: 8.5 })
        )
      ),

      e("div", { className: "cgrid" },
        e("div", { className: "chartcard" },
          e("h4", null, ui.chartTitle),
          e(LineChart, { selIdx: idx }),
          e("div", { className: "legend" },
            e("span", null, e("span", { className: "ln", style: { borderColor: "#002A3A" } }), ui.legKalkHist),
            e("span", null, e("span", { className: "ln dash", style: { borderColor: "#335564" } }), ui.legKalkPlan),
            e("span", null, e("span", { className: "ln dash", style: { borderColor: "#CDD751" } }), ui.legMal),
            e("span", null, e("span", { className: "ln", style: { borderColor: "#78BE20" } }), ui.legMod)
          )
        ),
        e("div", { className: "barscard" },
          e("h4", null, ui.barsTitle),
          e("p", { className: "meta", style: { marginTop: "-8px", marginBottom: "14px" } }, ui.barsMeta),
          e(Bars, null)
        )
      ),

      e("div", { className: "accordion", style: { marginTop: "26px" } },
        e("div", { className: "acc" + (accOpen ? " open" : "") },
          e("div", { className: "ah", onClick: function () { setAccOpen(!accOpen); } },
            e("span", { className: "an" }, ui.vederlag),
            e("span", { className: "acount" }, MD.calc.spg.length + ui.posterSuffix),
            e("span", { className: "achev" }, e(Icon, { name: "chevron-right", size: 16 }))
          ),
          e("div", { className: "abody" }, MD.calc.spg.map(function (p, i) {
            return e("div", { className: "altitem", key: i, style: i === 0 ? { borderTop: "none" } : null },
              e("div", { className: "an2" }, p[0]), e("div", { className: "ak" }, p[1]));
          }))
        )
      )
    );
  }

  /* ---------------- Tab 2: alternativer ---------------- */
  function Flow() {
    function step(label, cls) { return e("div", { className: "fstep" + (cls ? " " + cls : "") }, e("span", { className: "fx" }, label)); }
    function arrow() { return e("div", { className: "farrow" }, e(Icon, { name: "arrow-right", size: 18 })); }
    var f = ui.flow;
    return e("div", { className: "flow" },
      step(f[0]), arrow(),
      step(f[1]), arrow(),
      step(f[2]), arrow(),
      step(f[3]), arrow(),
      e("div", { className: "fbranch" },
        step(f[4], "green"),
        step(f[5], "grey")
      )
    );
  }

  function TabAlternativer() {
    var groups = MD.altGroups;
    var st = useState(0); var open = st[0], setOpen = st[1];
    var total = groups.reduce(function (a, g) { return a + g.items.length; }, 0);
    return e("div", { className: "fade" },
      e("p", { className: "lead", style: { maxWidth: "70ch" } }, ui.altLead1 + total + ui.altLead2),
      e(Flow, null),
      e("div", { className: "accordion", style: { marginTop: "26px" } }, groups.map(function (g, i) {
        var isOpen = open === i;
        return e("div", { key: g.id, className: "acc" + (isOpen ? " open" : "") },
          e("div", { className: "ah", onClick: function () { setOpen(isOpen ? -1 : i); } },
            e("span", { className: "atag", style: { background: g.c } }, g.id),
            e("span", { className: "an" }, g.navn),
            e("span", { className: "acount" }, g.items.length + (g.items.length === 1 ? ui.altSing : ui.altPlur)),
            e("span", { className: "achev" }, e(Icon, { name: "chevron-right", size: 16 }))
          ),
          e("div", { className: "abody" }, g.items.map(function (it, j) {
            return e("div", { className: "altitem", key: j, style: j === 0 ? { borderTop: "none" } : null },
              e("div", { className: "at" },
                e("span", { className: "an2" }, it.navn),
                e("span", { className: "besp " + (it.bes >= 0 ? "pos" : "neg") }, sign(it.bes), " " + ui.unit)
              ),
              e("div", { className: "ak" }, it.kons),
              e("div", { className: "ameta" },
                e("span", null, ui.underlagLabel, e("b", null, it.underlag)),
                e("span", null, ui.fristLabel, e("b", null, it.frist)),
                e("span", { className: "sbadge " + it.status }, statusLabel(it.status))
              )
            );
          }))
        );
      }))
    );
  }

  /* ---------------- Tab 3: risiko ---------------- */
  function TabRisiko() {
    var risks = MD.risks;
    var gState = useState("all"); var gf = gState[0], setGf = gState[1];
    var sState = useState("all"); var sf = sState[0], setSf = sState[1];

    var groups = ["all"].concat(risks.map(function (r) { return r.g; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
    var statuses = ["all", "pending", "decide", "ok"];

    var filtered = risks.filter(function (r) {
      return (gf === "all" || r.g === gf) && (sf === "all" || r.status === sf);
    });
    var red = risks.filter(function (r) { return MD.riskColor(r.kons) === "red"; }).length;
    var expo = risks.reduce(function (a, r) { return a + r.kons; }, 0);

    return e("div", { className: "fade" },
      e("div", { className: "msteps" }, ui.rsteps.map(function (m, i) {
        return e(React.Fragment, { key: i },
          e("div", { className: "mstep" }, e("div", { className: "mn" }, m[0]), e("div", { className: "mt" }, m[1]), e("div", { className: "md" }, m[2])),
          i < 3 ? e("div", { className: "msarrow" }, e(Icon, { name: "arrow-right", size: 18 })) : null
        );
      })),

      e("div", { className: "rkpis" },
        e("div", { className: "rkpi red" }, e("div", { className: "rv" }, red), e("div", { className: "rl" }, ui.rRed)),
        e("div", { className: "rkpi" }, e("div", { className: "rv" }, nok(expo)), e("div", { className: "rl" }, ui.rExpo)),
        e("div", { className: "rkpi" }, e("div", { className: "rv" }, risks.length), e("div", { className: "rl" }, ui.rCount))
      ),

      e("div", { className: "rfilter" },
        e("span", { className: "flbl" }, ui.filterGroup),
        groups.map(function (g) { return e("button", { key: g, className: gf === g ? "on" : "", onClick: function () { setGf(g); } }, g === "all" ? ui.allLabel : g); })
      ),
      e("div", { className: "rfilter" },
        e("span", { className: "flbl" }, ui.filterStatus),
        statuses.map(function (s) { return e("button", { key: s, className: sf === s ? "on" : "", onClick: function () { setSf(s); } }, s === "all" ? ui.allLabel : statusLabel(s)); })
      ),

      e("div", { className: "rscroll" },
        e("table", { className: "rtable" },
          e("thead", null, e("tr", null,
            ui.rtableHead.map(function (h, i) { return e("th", { key: i }, h); })
          )),
          e("tbody", null, filtered.map(function (r) {
            var col = MD.riskColor(r.kons);
            return e("tr", { key: r.nr },
              e("td", null, e("span", { className: "rlight " + col })),
              e("td", null, e("span", { className: "rnum" }, r.nr)),
              e("td", null, e("span", { className: "eier-badge" }, r.g)),
              e("td", { style: { minWidth: "220px", color: "#002A3A" } }, r.b),
              e("td", null, e("span", { className: "eier-badge" }, r.eier)),
              e("td", { style: { fontVariantNumeric: "tabular-nums" } }, r.kons.toString().replace(".", DEC)),
              e("td", null, r.s + " %"),
              e("td", { style: { fontVariantNumeric: "tabular-nums", fontWeight: 700, color: "#002A3A" } }, (r.kons * r.s / 100).toFixed(1).replace(".", DEC)),
              e("td", { style: { minWidth: "200px" } }, r.tiltak),
              e("td", null, e("span", { className: "sbadge " + r.status }, statusLabel(r.status)))
            );
          }))
        )
      )
    );
  }

  function ModuleC() {
    var t = useState("kalkyle"); var tab = t[0], setTab = t[1];
    return e("section", { className: "mod" },
      e("div", { className: "wrap" },
        e("div", { className: "modhead" },
          e("div", { className: "eyebrow-rule" }, ui.cEyebrow),
          e("h2", null, ui.cTitlePre, e("span", { className: "g" }, ui.cTitleHi)),
          e("p", Object.assign({ className: "lead" }, H(ui.cLead)))
        ),
        e("div", { className: "subtabs" },
          e("button", { className: tab === "kalkyle" ? "on" : "", onClick: function () { setTab("kalkyle"); } }, ui.subKalk),
          e("button", { className: tab === "alt" ? "on" : "", onClick: function () { setTab("alt"); } }, ui.subAlt),
          e("button", { className: tab === "risiko" ? "on" : "", onClick: function () { setTab("risiko"); } }, ui.subRisk)
        ),
        e("div", { style: { marginTop: "24px" } },
          tab === "kalkyle" ? e(TabKalkyle, { key: "k" }) :
          tab === "alt" ? e(TabAlternativer, { key: "a" }) :
          e(TabRisiko, { key: "r" })
        ),
        e("div", { className: "ownnote" },
          e("div", { className: "ic" }, e(Icon, { name: "calculator", size: 20 })),
          e("p", H(ui.ownNoteC))
        )
      )
    );
  }

  window.ModuleC = ModuleC;
})();
