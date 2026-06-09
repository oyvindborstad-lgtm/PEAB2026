/* Shared inline icons (Lucide path data) + tiny helpers → window */
(function () {
  var e = React.createElement;
  var P = {
    "chevron-right": "M9 18l6-6-6-6",
    "chevron-down": "M6 9l6 6 6-6",
    "x": "M18 6L6 18M6 6l12 12",
    "check": "M20 6L9 17l-5-5",
    "link": "M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8",
    "info": "M12 16v-4M12 8h.01",
    "arrow-right": "M5 12h14M12 5l7 7-7 7",
    "arrow-down": "M12 5v14M5 12l7 7 7-7",
    "sliders": "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6",
    "layers": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    "calculator": "M9 7h6M9 11h.01M13 11h.01M9 15h.01M13 15h.01M5 3h14v18H5z",
    "shield": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "git-branch": "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM15 6a9 9 0 0 1-9 9",
    "circle-dot": "M12 12m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
    "users": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    "award": "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12"
  };
  function Icon(props) {
    var name = props.name, size = props.size || 18;
    var extra = name === "circle-dot" ? e("circle", { cx:12, cy:12, r:10 }) : null;
    return e("svg", {
      width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      stroke: "currentColor", strokeWidth: props.sw || 2, strokeLinecap: "round",
      strokeLinejoin: "round", style: props.style, "aria-hidden": "true"
    }, extra, e("path", { d: P[name] || "" }));
  }
  window.Icon = Icon;

  /* render a translated string that may contain inline <b>/<span> markup */
  window.H = function (str) { return { dangerouslySetInnerHTML: { __html: str || "" } }; };
})();
