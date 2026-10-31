// ============================================================
//  ESCENARIOS — Mediocentro defensivo / pivote (4-3-3)
//  "you" ocupa el rol MCD.
// ============================================================
window.TACTICA.scenarios.push(
  {
    id: "p01", posicion: "pivote", fase: "ataque", tipo: "pase", principio: "Jugar de primera",
    titulo: "Recibes de espaldas con un rival detrás",
    situacion: "El central te da el balón. El pivote rival viene pegado a tu espalda. Tu volante izquierdo se ofrece libre y de cara.",
    pregunta: "¿Qué haces con la pelota?",
    pista: "Con un rival en la espalda, el pase de primera es lo único que no falla.",
    you: [40, 34], ball: [38, 33],
    team: { POR: [5, 34], DCI: [24, 24], DCD: [24, 44], LI: [34, 8], LD: [34, 60], MI: [50, 22], MD: [50, 46], DC: [70, 34] },
    rivals: { MCD: [44, 36], D1: [30, 28], D2: [36, 44], VD: [48, 12], VI: [50, 54], MCI: [56, 46], LD: [64, 14], DCD: [78, 28] },
    zones: [
      { c: [50, 22], r: 5, score: 3, txt: "Pase de primera al volante libre: recibe de cara al juego y el pivote rival queda eliminado." },
      { c: [24, 44], r: 5, score: 2, txt: "Devolver al central derecho de primera: seguro, cambia el lado, pero no avanza." },
      { c: [34, 8], r: 5, score: 1, txt: "Al lateral: pase largo de espaldas, fácil de leer para el rival." }
    ],
    miss: "Girar con el pivote rival en la espalda frente a tu área es la pérdida más peligrosa.",
    ideal: [[{ who: "ball", to: [50, 22] }], [{ who: "you", to: [48, 32] }]]
  },
  {
    id: "p02", posicion: "pivote", fase: "ataque", tipo: "desmarque", principio: "Ofrecerse con línea de pase",
    titulo: "El delantero rival te tapa",
    situacion: "Tu central izquierdo tiene el balón. El delantero rival se para entre tú y el balón para taparte la línea de pase.",
    pregunta: "¿Dónde te ubicas para recibir?",
    pista: "Si el rival se pone en la línea de pase, muévete a donde haya una nueva línea.",
    you: [38, 30], ball: [23, 27],
    team: { POR: [5, 34], DCI: [22, 26], DCD: [24, 44], LI: [34, 8], LD: [34, 60], MI: [50, 22], MD: [50, 46], DC: [70, 34] },
    rivals: { D1: [32, 29], D2: [34, 42], MCD: [50, 32], MCI: [52, 44], VD: [46, 12], VI: [48, 54] },
    zones: [
      { c: [36, 36], r: 4, score: 3, txt: "Desplázate al otro lado del delantero, perfilado hacia el campo rival: línea de pase limpia y recibes de medio lado." },
      { c: [44, 30], r: 4, score: 1, txt: "Alejarte en línea recta no crea línea de pase: el delantero sigue en medio." },
      { c: [30, 34], r: 4, score: 2, txt: "Bajar entre los centrales asegura el pase, pero te saca del medio campo." }
    ],
    miss: "Quedarte escondido detrás del delantero es no existir para el central.",
    ideal: [[{ who: "you", to: [36, 36] }], [{ who: "ball", to: [36, 36] }]]
  },
  {
    id: "p03", posicion: "pivote", fase: "ataque", tipo: "pase", principio: "Cambio de orientación",
    titulo: "Todo el rival está en un lado",
    situacion: "Tienes el balón con tiempo. El rival basculó hacia tu banda izquierda. Tu extremo derecho está solo, abierto en la otra banda.",
    pregunta: "¿A dónde juegas?",
    pista: "Cuando el rival carga un lado, el balón va al otro.",
    you: [44, 30], ball: [45, 31],
    team: { POR: [5, 34], DCI: [26, 22], DCD: [28, 42], LI: [48, 8], LD: [46, 58], MI: [56, 20], MD: [56, 44], EI: [68, 12], DC: [74, 32], ED: [70, 62] },
    rivals: { D1: [50, 26], D2: [52, 36], VD: [60, 14], MCD: [60, 26], MCI: [62, 36], VI: [66, 44], LD: [74, 16], DCD: [80, 28], DCI: [82, 38], LI: [78, 50] },
    zones: [
      { c: [70, 62], r: 7, score: 3, txt: "Cambio de orientación al extremo derecho: el rival cargó tu lado y él está solo. La defensa tiene que correr 40 metros." },
      { c: [46, 58], r: 5, score: 2, txt: "Al lateral derecho: también abre el campo, aunque más lento." },
      { c: [56, 20], r: 5, score: 1, txt: "Al volante izquierdo: lo metes en la zona donde está todo el rival." }
    ],
    miss: "Conducir hacia donde está el rival es entrar en el embudo.",
    ideal: [[{ who: "ball", to: [70, 62] }], [{ who: "T:ED", to: [86, 58] }, { who: "ball", to: [86, 58] }]]
  },
  {
    id: "p04", posicion: "pivote", fase: "transicion", tipo: "ubicacion", principio: "Cobertura al central",
    titulo: "Tu central salió a presionar",
    situacion: "Contra rival. Tu central izquierdo saltó a presionar al delantero y detrás de él queda un hueco. El volante rival conduce con el balón.",
    pregunta: "¿Dónde te ubicas?",
    pista: "El pivote tapa el hueco que deja el central que sale. Siempre.",
    you: [44, 32], ball: [48, 36],
    team: { POR: [5, 34], DCI: [34, 28], DCD: [26, 42], LI: [40, 10], LD: [40, 58], MI: [54, 22], MD: [54, 46] },
    rivals: { MCI: [49, 37], D1: [38, 30], D2: [36, 46], VD: [50, 14], VI: [52, 54], MCD: [56, 30] },
    zones: [
      { c: [28, 30], r: 5, score: 3, txt: "Baja a ocupar el espacio del central: cobertura. Si el volante supera al central, te encuentra a ti." },
      { c: [48, 36], r: 4, score: 2, txt: "Presionar al portador frena la contra si llegas, pero el hueco detrás del central sigue abierto." },
      { c: [46, 24], r: 4, score: 0, txt: "Quedarte arriba a un costado no tapa nada." }
    ],
    miss: "Seguir al balón hacia la banda abre el centro del campo.",
    ideal: [[{ who: "you", to: [28, 30] }, { who: "R:MCI", to: [40, 34] }, { who: "ball", to: [41, 34] }]]
  },
  {
    id: "p05", posicion: "pivote", fase: "defensa", tipo: "presion", principio: "Saltar al pivote rival",
    titulo: "El pivote rival va a recibir de espaldas",
    situacion: "El central rival juega al pie de su pivote, que está de espaldas a su arco... es decir, de frente a ti pero mirando hacia atrás. Estás a seis metros.",
    pregunta: "¿Qué haces?",
    pista: "El mejor momento para robar es mientras el balón viaja hacia alguien que recibe de espaldas.",
    you: [58, 34], ball: [84, 28],
    team: { POR: [5, 34], DCI: [38, 24], DCD: [38, 44], LI: [50, 10], LD: [50, 58], MI: [64, 22], MD: [64, 46], EI: [76, 12], DC: [80, 34], ED: [76, 56] },
    rivals: { DCD: [86, 26], DCI: [88, 42], MCD: [64, 31], MCI: [70, 42], LD: [82, 10], LI: [82, 58], VD: [72, 16], VI: [72, 52], D1: [48, 30], D2: [50, 40] },
    zones: [
      { c: [63, 31], r: 4, score: 3, txt: "Salta al pivote rival mientras el balón viaja: lo recibe de espaldas, con tu presión encima, y la recuperación es casi segura." },
      { c: [60, 26], r: 4, score: 2, txt: "Cerrar la línea de pase al volante es correcto, pero el pivote rival recibe tranquilo y gira." },
      { c: [56, 34], r: 3.5, score: 1, txt: "Esperar a que controle y gire: llegas tarde y ya te encara." }
    ],
    miss: "Retroceder mientras el rival recibe libre de cara regala el medio campo.",
    ideal: [[{ who: "ball", to: [64, 31] }, { who: "you", to: [63, 31] }], [{ who: "ball", to: [60, 34] }, { who: "you", to: [60, 34] }]]
  },
  {
    id: "p06", posicion: "pivote", fase: "transicion", tipo: "ubicacion", principio: "Contrapresión: cerrar por dentro",
    titulo: "Perdimos el balón en banda",
    situacion: "Tu extremo pierde el balón contra el lateral rival. El extremo ya va a presionarlo. El pivote rival pide el pase por dentro.",
    pregunta: "¿Qué haces?",
    pista: "Cuando un compañero presiona al portador, el siguiente cierra las salidas.",
    you: [54, 30], ball: [66, 13],
    team: { POR: [5, 34], DCI: [34, 24], DCD: [34, 44], LI: [56, 8], LD: [50, 58], MI: [62, 22], MD: [60, 46], EI: [70, 14], DC: [76, 34], ED: [70, 56] },
    rivals: { LD: [66, 12], MCD: [60, 26], VD: [48, 18], DCD: [84, 28], DCI: [86, 42], MCI: [66, 40], D1: [40, 30], D2: [44, 40] },
    zones: [
      { c: [59, 23], r: 4.5, score: 3, txt: "Cierra la línea de pase al pivote rival: el extremo presiona al portador y tú le quitas la salida por dentro. El balón solo puede ir hacia atrás." },
      { c: [64, 16], r: 4, score: 2, txt: "Ir también al portador suma presión, pero el pivote rival queda libre y sale por dentro." },
      { c: [44, 34], r: 5, score: 1, txt: "Retroceder a tu posición es correcto si la presión ya se rompió; aquí todavía no." }
    ],
    miss: "Quedarte mirando deja al rival salir cómodo por dentro.",
    ideal: [[{ who: "you", to: [59, 23] }, { who: "T:EI", to: [67, 13] }], [{ who: "ball", to: [84, 28] }]]
  },
  {
    id: "p07", posicion: "pivote", fase: "ataque", tipo: "pase", principio: "Tercer hombre",
    titulo: "El 9 baja y el volante rompe",
    situacion: "Tienes el balón. El 9 baja a recibir y arrastra al central. Tu volante izquierdo arranca al espacio que dejó el central.",
    pregunta: "¿A dónde juegas?",
    pista: "Al que baja, para que la toque al que rompe. Dos pases, un defensor eliminado.",
    you: [44, 34], ball: [45, 35],
    team: { POR: [5, 34], DCI: [26, 22], DCD: [28, 42], LI: [48, 8], LD: [48, 60], MI: [58, 24], MD: [56, 46], EI: [70, 10], DC: [60, 32], ED: [70, 58] },
    rivals: { D1: [50, 28], D2: [52, 40], MCD: [56, 36], MCI: [62, 46], VD: [60, 14], VI: [62, 54], DCD: [66, 30], DCI: [86, 40], LD: [78, 12], LI: [80, 56] },
    zones: [
      { c: [60, 32], r: 4.5, score: 3, txt: "Al 9 que baja, de primera: él la toca al volante que rompe al espacio del central. Tercer hombre." },
      { c: [78, 26], r: 6, score: 2, txt: "Directo al espacio del volante: posible, pero es un pase largo por encima de dos líneas y más fácil de leer." },
      { c: [70, 10], r: 5, score: 1, txt: "Al extremo: no aprovechas el espacio que acaba de abrir el 9." }
    ],
    miss: "Conducir mientras el 9 baja y el volante arranca desperdicia el movimiento de los dos.",
    ideal: [[{ who: "ball", to: [60, 32] }, { who: "T:MI", to: [70, 26] }], [{ who: "ball", to: [80, 26] }, { who: "T:MI", to: [80, 26] }]]
  },
  {
    id: "p08", posicion: "pivote", fase: "defensa", tipo: "ubicacion", principio: "Proteger la frontal",
    titulo: "Centro rival: ¿dónde te paras?",
    situacion: "El rival ataca por su banda izquierda y va a centrar. Tus cuatro defensores están en el área. El mediapunta rival espera en la frontal.",
    pregunta: "¿Dónde te ubicas?",
    pista: "La defensa despeja; el pivote recoge el rechace y vigila la frontal.",
    you: [30, 34], ball: [20, 58],
    team: { POR: [4, 34], DCI: [10, 28], DCD: [9, 40], LI: [12, 20], LD: [14, 52], MI: [22, 24], MD: [24, 48], DC: [50, 34] },
    rivals: { VI: [20, 58], D1: [11, 32], D2: [12, 42], MCD: [18, 36], LD: [24, 18], MCI: [26, 44], LI: [34, 56] },
    zones: [
      { c: [17, 36], r: 4.5, score: 3, txt: "Frontal del área: recoges el rechace y vigilas al mediapunta rival. Es la zona donde se cocinan los goles de segunda jugada." },
      { c: [24, 46], r: 4, score: 2, txt: "Marcar al volante rival cerca del balón: ayuda, pero deja libre la frontal." },
      { c: [32, 36], r: 4, score: 0, txt: "Quedarte en el medio campo viendo el centro es no participar." }
    ],
    miss: "Meterte en el área a disputar el centro deja la frontal vacía para el rechace.",
    ideal: [[{ who: "you", to: [17, 36] }, { who: "R:MCD", to: [18, 34] }], [{ who: "ball", to: [16, 36] }]]
  }
);
