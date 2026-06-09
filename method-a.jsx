/* ============================================================
   Module A — Gjennomføringsmodellen (sirkel + org-chart)
   → window.ModuleA
   ============================================================ */
(function () {
  var e = React.createElement;
  var useState = React.useState;
  var Icon = window.Icon;
  var MD = window.MD;
  var ui = MD.ui;
  var H = window.H;

  /* ---- circle node geometry ---- */
  function placeRing(arr, ring, R, startDeg) {
    var n = arr.length;
    return arr.map(function (node, i) {
      var ang = (startDeg + i * (360 / n)) * Math.PI / 180;
      return {
        node: node, ring: ring,
        x: 50 + R * Math.cos(ang),
        y: 50 + R * Math.sin(ang)
      };
    });
  }

  function DetailPanel(props) {
    var n = props.node, onClose = props.onClose, accent = props.accent;
    if (!n) {
      return e("div", { className: "apanel" },
        e("div", { className: "empty" },
          e("span", { className: "big" }, ui.emptyTitle),
          ui.emptyBody
        )
      );
    }
    return e("div", { className: "apanel fade", key: n.id },
      e("div", { className: "ph" },
        e("div", { className: "dot", style: { background: accent || "#002A3A" } }, n.short.slice(0, 4)),
        e("div", null,
          e("h3", null, n.title),
          n.role ? e("div", { className: "prole" }, n.role) : null
        ),
        e("button", { className: "close", onClick: onClose, "aria-label": ui.closeLabel }, e(Icon, { name: "x", size: 16 }))
      ),
      e("div", { className: "lbl" }, ui.lblAnsvar),
      e("ul", null, (n.ansvar || []).map(function (a, i) {
        return e("li", { key: i }, e("i", null, e(Icon, { name: "chevron-right", size: 14 })), a);
      })),
      n.samspill ? e("div", null,
        e("div", { className: "lbl" }, ui.lblSamspill),
        e("p", { className: "samspill" }, n.samspill)
      ) : null,
      n.note ? e("div", null,
        e("div", { className: "lbl" }, ui.lblRolleFase),
        e("p", { className: "samspill" }, n.note)
      ) : null,
      n.tips ? e("div", { className: "tip" }, ui.tipsLabel, n.tips) : null
    );
  }

  function CircleModel(props) {
    var c = MD.circle;
    var nodes = []
      .concat(placeRing(c.ring1, "r1", 19, -90))
      .concat(placeRing(c.ring2, "r2", 32, -90))
      .concat(placeRing(c.ring3, "r3", 45, -90));

    var sel = props.sel, setSel = props.setSel;

    return e("div", { className: "circle-stage" },
      e("svg", { className: "rings", viewBox: "0 0 100 100" },
        [19, 32, 45].map(function (r, i) {
          return e("circle", { key: i, cx: 50, cy: 50, r: r, fill: "none",
            stroke: "#C8CED2", strokeWidth: 0.4, strokeDasharray: "1.4 1.4" });
        }),
        nodes.filter(function (p) { return !p.node.pull; }).map(function (p, i) {
          return e("line", { key: "l" + i, x1: 50, y1: 50, x2: p.x, y2: p.y,
            stroke: sel === p.node.id ? "#78BE20" : "#E6E8EA", strokeWidth: sel === p.node.id ? 0.7 : 0.4 });
        })
      ),
      e("button", {
        className: "cnode hub" + (sel === "hub" ? " sel" : ""),
        style: { left: "50%", top: "50%", width: "27%", height: "27%" },
        onClick: function () { setSel(sel === "hub" ? null : "hub"); }
      },
        e("span", { className: "cs" }, c.hub.short),
        e("span", { className: "csub" }, c.hub.csub)
      ),
      nodes.map(function (p) {
        var on = sel === p.node.id;
        var cls = "cnode " + p.ring + (p.node.key ? " key" : "") + (p.node.pull ? " pull" : "")
          + (on ? " sel" : "") + (on || p.node.key ? " pulse" : "");
        var style = { left: p.x + "%", top: p.y + "%" };
        if (!p.node.pull) style.background = p.node.color;
        else style.color = p.node.color;
        return e("button", { key: p.node.id, className: cls, style: style,
          onClick: function () { setSel(on ? null : p.node.id); }
        }, e("span", { className: "cs" }, p.node.short));
      })
    );
  }

  function findNode(id) {
    var c = MD.circle;
    if (id === "hub") return { n: c.hub, accent: "#002A3A" };
    var all = c.ring1.concat(c.ring2).concat(c.ring3);
    var f = all.filter(function (x) { return x.id === id; })[0];
    return f ? { n: f, accent: f.color } : null;
  }

  function OrgChart(props) {
    var oc = MD.orgchart, sel = props.sel, setSel = props.setSel;
    function nodeEl(node, lvlClass) {
      var on = sel === node.id;
      return e("button", {
        key: node.id, className: "onode " + lvlClass + (on ? " sel" : ""),
        onClick: function () { setSel(on ? null : node.id); }
      }, e("div", { className: "os" }, node.short), node.title && node.short !== node.title ? e("div", { className: "ot" }, node.title) : null);
    }
    return e("div", { className: "org" },
      oc.levels.map(function (lvl, i) {
        return e("div", { className: "lvl", key: lvl.lvl },
          e("div", { className: "lvlrow" }, lvl.nodes.map(function (nd) { return nodeEl(nd, "l" + i); })),
          i < oc.levels.length - 1 ? e("div", { className: "conn" }) : null
        );
      }),
      e("div", { className: "support" }, nodeEl(oc.support, "sup"))
    );
  }

  function findOrgNode(id) {
    var oc = MD.orgchart;
    if (id === oc.support.id) return oc.support;
    var found = null;
    oc.levels.forEach(function (lvl) {
      lvl.nodes.forEach(function (nd) { if (nd.id === id) found = nd; });
    });
    return found;
  }

  function Roles() {
    var roles = MD.roles;
    var st = useState(-1); var open = st[0], setOpen = st[1];
    return e("div", null,
      e("div", { className: "eyebrow-rule", style: { marginTop: "48px" } }, ui.rolesTitle),
      e("p", { className: "lead", style: { maxWidth: "62ch", marginBottom: "4px" } }, ui.rolesLead),
      e("div", { className: "roles" }, roles.map(function (r, i) {
        var isOpen = open === i;
        return e("div", { key: i, className: "role" + (isOpen ? " open" : "") },
          e("div", { className: "rhead", onClick: function () { setOpen(isOpen ? -1 : i); } },
            e("div", { className: "av", style: { background: r.c } }, r.in),
            e("div", { className: "rt" }, r.role),
            e("div", { className: "chev" }, e(Icon, { name: "chevron-right", size: 18 }))
          ),
          e("div", { className: "rbody" },
            e("div", { className: "rbi" },
              e("div", { className: "rlbl" }, ui.roleF1),
              e("p", null, r.f1),
              e("div", { className: "rlbl" }, ui.roleF2),
              e("p", null, r.f2)
            )
          )
        );
      }))
    );
  }

  function ModuleA() {
    var ph = useState("samspill"); var phase = ph[0], setPhase = ph[1];
    var s = useState(null); var sel = s[0], setSel = s[1];
    var b = useState(false); var showBind = b[0], setShowBind = b[1];

    // resolve selected node by phase
    var detail = null, accent = "#002A3A";
    if (sel) {
      if (phase === "samspill") { var r = findNode(sel); if (r) { detail = r.n; accent = r.accent; } }
      else { detail = findOrgNode(sel); accent = "#196573"; }
    }

    function switchPhase(p) { setPhase(p); setSel(null); }

    return e("section", { className: "mod" },
      e("div", { className: "wrap" },
        e("div", { className: "modhead" },
          e("div", { className: "eyebrow-rule" }, ui.aEyebrow),
          e("h2", null, ui.aTitlePre, e("span", { className: "g" }, ui.aTitleHi)),
          e("p", Object.assign({ className: "lead" }, H(ui.aLead)))
        ),

        e("div", { className: "phasetabs" },
          e("button", { className: phase === "samspill" ? "on" : "", onClick: function () { switchPhase("samspill"); } }, ui.phaseSamspill),
          e("button", { className: phase === "gjennomforing" ? "on" : "", onClick: function () { switchPhase("gjennomforing"); } }, ui.phaseGjennom)
        ),

        e("div", { className: "amain" },
          e("div", null,
            phase === "samspill"
              ? e(CircleModel, { sel: sel, setSel: setSel, key: "c" })
              : e(OrgChart, { sel: sel, setSel: setSel, key: "o" }),
            phase === "samspill" ? e("div", { className: "clegend" },
              [["#002A3A", ui.legend[0]], ["#335564", ui.legend[1]],
               ["#78BE20", ui.legend[2]], ["#33A6B1", ui.legend[3]],
               ["#4f8a13", ui.legend[4]], ["#667F8B", ui.legend[5]]].map(function (it, i) {
                return e("span", { key: i, className: "cleg" }, e("i", { style: { background: it[0] } }), it[1]);
              })
            ) : null,
            e("div", { className: "infobox" },
              e("div", { className: "lbl" }, phase === "samspill" ? ui.infoPullT : ui.infoLineT),
              e("p", null, phase === "samspill" ? ui.infoPullB : ui.infoLineB)
            )
          ),
          e("div", { className: "apanelwrap" },
            e(DetailPanel, { node: detail, accent: accent, onClose: function () { setSel(null); } }))
        ),

        // bindings
        e("div", { className: "bindbtn" },
          e("button", { className: "btn-teal", onClick: function () { setShowBind(!showBind); } },
            e(Icon, { name: "link", size: 16 }), showBind ? ui.bindHide : ui.bindShow)
        ),
        showBind ? e("div", { className: "binds fade" }, MD.bindings.map(function (bd, i) {
          return e("div", { className: "bind", key: i, style: { borderTopColor: bd.c } },
            e("div", { className: "bk" }, bd.k), e("p", null, bd.t));
        })) : null,

        // owned-by-LC note
        e("div", { className: "ownnote" },
          e("div", { className: "ic" }, e(Icon, { name: "award", size: 20 })),
          e("p", H(ui.ownNoteA))
        ),

        e(Roles, null)
      )
    );
  }

  window.ModuleA = ModuleA;
})();
