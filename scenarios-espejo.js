// ============================================================
//  ESPEJO — genera las posiciones del lado derecho a partir de las del izquierdo.
//  Debe cargarse DESPUÉS de todos los archivos scenarios-*.js.
//  Invierte el eje y (banda izquierda <-> derecha), intercambia los roles
//  izquierdo/derecho y ajusta los textos ("izquierdo" <-> "derecho").
// ============================================================
(function () {
  const D = window.TACTICA;
  const MAP = { interior: "interior-der", extremo: "extremo-der", lateral: "lateral-der", central: "central-der", volante: "volante-der" };
  const TEAM = { LI: "LD", LD: "LI", DCI: "DCD", DCD: "DCI", MI: "MD", MD: "MI", EI: "ED", ED: "EI" };
  const RIV = { LD: "LI", LI: "LD", DCD: "DCI", DCI: "DCD", VD: "VI", VI: "VD", MCD: "MCI", MCI: "MCD", D1: "D2", D2: "D1" };
  const fy = p => [p[0], 68 - p[1]];
  const swapKeys = (obj, m) => { const o = {}; for (const k in obj) o[m[k] || k] = fy(obj[k]); return o; };
  const who = w => { const [t, k] = w.split(":"); if (t === "T") return "T:" + (TEAM[k] || k); if (t === "R") return "R:" + (RIV[k] || k); return w; };
  function texto(s) {
    if (!s) return s;
    return s
      .replace(/[Ii]zquierd/g, m => m[0] === "I" ? "§Derech" : "§derech")
      .replace(/(^|[^§])([Dd]erech)/g, (m, pre, w) => pre + (w[0] === "D" ? "Izquierd" : "izquierd"))
      .replace(/§/g, "")
      .replace(/\(la de abajo\)/g, "§").replace(/\(la de arriba\)/g, "(la de abajo)").replace(/§/g, "(la de arriba)");
  }
  const extra = [];
  D.scenarios.forEach(s => {
    const np = MAP[s.posicion]; if (!np) return;
    extra.push({
      id: s.id + "r", posicion: np, fase: s.fase, tipo: s.tipo, principio: texto(s.principio),
      titulo: texto(s.titulo), situacion: texto(s.situacion), pregunta: texto(s.pregunta), pista: texto(s.pista),
      you: fy(s.you), ball: fy(s.ball),
      team: swapKeys(s.team || {}, TEAM), rivals: swapKeys(s.rivals || {}, RIV),
      zones: s.zones.map(z => ({ c: fy(z.c), r: z.r, score: z.score, txt: texto(z.txt) })),
      miss: texto(s.miss),
      ideal: (s.ideal || []).map(step => step.map(m => ({ who: who(m.who), to: fy(m.to) })))
    });
  });
  D.scenarios.push(...extra);
})();
