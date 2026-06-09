/* ============================================================
   Lean Communications — Gjennomføringsmodell (metode-demo)
   Language-NEUTRAL skeleton: ids, colours, numbers, geometry.
   All display text lives in method-tx-*.js (window.MD_TX[lang]).
   window.buildMD(lang) merges the two into window.MD.
   ============================================================ */
(function () {
  "use strict";

  var C = {
    blue: "#002A3A", blue80: "#335564", blue60: "#667F8B",
    green: "#78BE20", greendk: "#4f8a13", teal: "#33A6B1",
    tealdk: "#196573", lime: "#b9c43e", slate: "#5a7681"
  };

  /* ---- structural skeletons (ids + colours + flags only) ---- */
  var SKEL = {
    circle: {
      hub: { id: "hub" },
      ring1: [
        { id: "PL", color: C.blue }, { id: "PRL", color: C.blue },
        { id: "PRODL", color: C.blue }, { id: "IL", color: C.blue },
        { id: "RL", color: C.blue }
      ],
      ring2: [
        { id: "GLM", color: C.greendk, key: true },
        { id: "FGA", color: C.green }, { id: "FGB", color: C.green },
        { id: "FGC", color: C.green }, { id: "FGD", color: C.green },
        { id: "PGK", color: C.teal }, { id: "PGI", color: C.teal },
        { id: "PGP", color: C.teal }, { id: "PGR", color: C.teal }
      ],
      ring3: [
        { id: "RIA", color: C.blue60, pull: true }, { id: "RIM", color: C.blue60, pull: true },
        { id: "RIByfy", color: C.blue60, pull: true }, { id: "RIBr", color: C.blue60, pull: true },
        { id: "STOY", color: C.blue60, pull: true }, { id: "RIG", color: C.blue60, pull: true },
        { id: "UU", color: C.blue60, pull: true }, { id: "LYS", color: C.blue60, pull: true }
      ]
    },
    orgchart: {
      levels: [
        { lvl: "L0", nodes: [{ id: "styre" }] },
        { lvl: "L1", nodes: [{ id: "ledelse" }] },
        { lvl: "L2", nodes: [{ id: "PL2" }, { id: "PRL2" }, { id: "AL2" }, { id: "ITB2" }] },
        { lvl: "L3", nodes: [{ id: "FG1b" }, { id: "FG2b" }, { id: "FG3b" }, { id: "FG4b" }, { id: "FG5b" }, { id: "PG1b" }, { id: "PG2b" }, { id: "PG3b" }] }
      ],
      support: { id: "vdc" }
    },
    bindings: [
      { id: "b1", c: C.green }, { id: "b2", c: C.teal }, { id: "b3", c: C.tealdk },
      { id: "b4", c: C.blue80 }, { id: "b5", c: C.slate }
    ],
    roles: [
      { in: "PL", c: C.blue }, { in: "LK", c: C.blue80 }, { in: "SL", c: C.teal },
      { in: "PT", c: C.tealdk }, { in: "PV", c: C.greendk }
    ],
    trades: [
      { id: "bygg", c: "#335564" }, { id: "vvs", c: "#33A6B1" }, { id: "el", c: "#b9c43e" },
      { id: "auto", c: "#196573" }, { id: "flate", c: "#78BE20" }, { id: "rigg", c: "#8a99a0" }
    ],
    taktWeeks: 12,
    calc: {
      kpi: { current: 1682, target: 1678, lastMove: -22, maturity: 7.5, maturityTarget: 8.5 },
      series: [
        { kalk: 1740, plan: null, mal: 1678, mod: 3.0 },
        { kalk: 1722, plan: null, mal: 1678, mod: 4.0 },
        { kalk: 1710, plan: null, mal: 1678, mod: 4.8 },
        { kalk: 1698, plan: null, mal: 1678, mod: 5.6 },
        { kalk: 1704, plan: null, mal: 1678, mod: 6.4 },
        { kalk: 1682, plan: 1682, mal: 1678, mod: 7.5, now: true },
        { kalk: null, plan: 1676, mal: 1678, mod: 8.0 },
        { kalk: null, plan: 1672, mal: 1678, mod: 8.5 }
      ],
      groups: [
        { id: "FG1", val: 447, mal: 423, c: "#335564", subv: [214, 132, 101] },
        { id: "FG2", val: 228, mal: 216, c: "#196573", subv: [128, 62, 38] },
        { id: "FG3", val: 514, mal: 487, c: "#33A6B1", subv: [214, 182, 118] },
        { id: "FG4", val: 286, mal: 270, c: "#78BE20", subv: [142, 88, 56] },
        { id: "FG5", val: 107, mal: 100, c: "#b9c43e", subv: [58, 34, 15] },
        { id: "FG8", val: 305, mal: 282, c: "#667F8B", subv: [168, 84, 53] }
      ]
    },
    altGroups: [
      { id: "FG1", c: "#002A3A", items: [
        { bes: 8.5, underlag: "15.05.28", frist: "01.06.28", status: "ok" },
        { bes: 4.2, underlag: "22.05.28", frist: "10.06.28", status: "decide" },
        { bes: 2.1, underlag: "02.06.28", frist: "20.06.28", status: "pending" }
      ]},
      { id: "FG2", c: "#196573", items: [
        { bes: 6.8, underlag: "18.05.28", frist: "05.06.28", status: "ok" },
        { bes: -1.4, underlag: "25.05.28", frist: "15.06.28", status: "decide" },
        { bes: 1.9, underlag: "30.05.28", frist: "18.06.28", status: "pending" }
      ]},
      { id: "FG3", c: "#d4a017", items: [
        { bes: 3.2, underlag: "16.05.28", frist: "04.06.28", status: "ok" },
        { bes: 5.6, underlag: "24.05.28", frist: "12.06.28", status: "decide" },
        { bes: 9.1, underlag: "01.06.28", frist: "22.06.28", status: "pending" }
      ]},
      { id: "FG4", c: "#7c3aed", items: [
        { bes: 7.4, underlag: "17.05.28", frist: "06.06.28", status: "ok" },
        { bes: 2.8, underlag: "23.05.28", frist: "14.06.28", status: "decide" },
        { bes: 3.5, underlag: "29.05.28", frist: "19.06.28", status: "pending" }
      ]},
      { id: "FG5", c: "#4f8a13", items: [
        { bes: -2.2, underlag: "14.05.28", frist: "02.06.28", status: "ok" },
        { bes: 1.3, underlag: "21.05.28", frist: "11.06.28", status: "pending" },
        { bes: 2.0, underlag: "28.05.28", frist: "17.06.28", status: "decide" }
      ]},
      { id: "PG1", c: "#94a3b8", items: [
        { bes: 6.0, underlag: "12.05.28", frist: "30.05.28", status: "decide" }
      ]},
      { id: "PG2", c: "#64748b", items: [
        { bes: 4.5, underlag: "19.05.28", frist: "08.06.28", status: "pending" }
      ]},
      { id: "PG3", c: "#475569", items: [
        { bes: -1.1, underlag: "26.05.28", frist: "16.06.28", status: "ok" }
      ]}
    ],
    risks: [
      { nr: 1,  g: "FG3", eier: "BH",  kons: 5,   s: 50, status: "pending" },
      { nr: 2,  g: "FG4", eier: "BH",  kons: 12,  s: 35, status: "decide" },
      { nr: 3,  g: "PG1", eier: "TE",  kons: 20,  s: 40, status: "pending" },
      { nr: 4,  g: "PG3", eier: "BH",  kons: 15,  s: 40, status: "pending" },
      { nr: 5,  g: "FG1", eier: "RÅD", kons: 4,   s: 45, status: "pending" },
      { nr: 6,  g: "FG2", eier: "TE",  kons: 3,   s: 40, status: "ok" },
      { nr: 7,  g: "FG3", eier: "RÅD", kons: 3.5, s: 50, status: "pending" },
      { nr: 8,  g: "FG5", eier: "RÅD", kons: 4,   s: 35, status: "pending" },
      { nr: 9,  g: "FG4", eier: "TE",  kons: 2.5, s: 45, status: "pending" },
      { nr: 10, g: "PG2", eier: "TE",  kons: 3,   s: 55, status: "pending" },
      { nr: 11, g: "FG3", eier: "TE",  kons: 4.5, s: 30, status: "decide" },
      { nr: 12, g: "PG1", eier: "TE",  kons: 3,   s: 40, status: "pending" },
      { nr: 13, g: "FG2", eier: "RÅD", kons: 1.8, s: 35, status: "ok" },
      { nr: 14, g: "PG3", eier: "TE",  kons: 1.5, s: 50, status: "pending" },
      { nr: 15, g: "FG1", eier: "RÅD", kons: 1.6, s: 30, status: "ok" },
      { nr: 16, g: "FG5", eier: "TE",  kons: 1.4, s: 35, status: "ok" }
    ]
  };

  function riskColor(kons) { return kons >= 5 ? "red" : (kons >= 2 ? "yellow" : "green"); }

  function merge(skel, tx) { return Object.assign({}, skel, tx || {}); }
  function byId(arr, map) { return arr.map(function (s) { return merge(s, map[s.id]); }); }

  window.buildMD = function (lang) {
    var TX = (window.MD_TX && window.MD_TX[lang]) || (window.MD_TX && window.MD_TX.no) || {};

    var circle = {
      hub: merge({ id: "hub" }, TX.circle.hub),
      ring1: byId(SKEL.circle.ring1, TX.circle.nodes),
      ring2: byId(SKEL.circle.ring2, TX.circle.nodes),
      ring3: byId(SKEL.circle.ring3, TX.circle.nodes)
    };

    var orgchart = {
      levels: SKEL.orgchart.levels.map(function (lvl) {
        return { lvl: lvl.lvl, nodes: byId(lvl.nodes, TX.org) };
      }),
      support: merge({ id: "vdc" }, TX.org.vdc)
    };

    var bindings = byId(SKEL.bindings, TX.bindings);
    var roles = SKEL.roles.map(function (s) { return merge(s, TX.roles[s.in]); });
    var trades = byId(SKEL.trades, TX.trades);

    var calc = {
      kpi: SKEL.calc.kpi,
      series: SKEL.calc.series.map(function (s, i) { return merge(s, { m: TX.calc.months[i] }); }),
      groups: SKEL.calc.groups.map(function (s) {
        var tg = TX.calc.groups[s.id];
        return Object.assign({}, s, { navn: tg.navn, sub: s.subv.map(function (v, i) { return [tg.sub[i], v]; }) });
      }),
      spg: TX.calc.spg
    };

    var altGroups = SKEL.altGroups.map(function (s) {
      var tg = TX.alt[s.id];
      return {
        id: s.id, c: s.c, navn: tg.navn,
        items: s.items.map(function (it, i) {
          return Object.assign({}, it, { navn: tg.items[i].navn, kons: tg.items[i].kons });
        })
      };
    });

    var risks = SKEL.risks.map(function (s, i) { return merge(s, TX.risks[i]); });

    return {
      C: C, lang: lang, ui: TX.ui,
      circle: circle, orgchart: orgchart, bindings: bindings, roles: roles,
      trades: trades, taktAreas: TX.taktAreas, taktWeeks: SKEL.taktWeeks,
      calc: calc, altGroups: altGroups, risks: risks, riskColor: riskColor
    };
  };

  /* build for the active language right away so the JSX IIFEs
     (which capture window.MD at load) get a fully-populated object */
  var initLang = (window.LCLang ? window.LCLang.get() : "no");
  window.MD = window.buildMD(initLang);
})();
