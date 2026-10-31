// ============================================================
//  ESCENARIOS — Volante izquierdo / interior de medio campo (4-3-3)
//  "you" ocupa el rol MI. El volante derecho se genera como espejo.
// ============================================================
window.TACTICA.scenarios.push(
  {
    id: "v01", posicion: "volante", fase: "ataque", tipo: "desmarque", principio: "Recibir entre líneas",
    titulo: "El central tiene el balón y tiempo",
    situacion: "Tu central izquierdo tiene el balón sin presión. El pivote rival te marca por delante. Detrás de los volantes rivales hay espacio.",
    pregunta: "¿Dónde te ubicas para recibir?",
    pista: "Entre la línea de medios y la de defensas del rival nadie te ve. Ahí recibes de cara.",
    you: [48, 22], ball: [23, 27],
    team: { POR: [5, 34], DCI: [22, 26], DCD: [24, 44], LI: [40, 8], LD: [40, 60], MCD: [38, 36], MD: [52, 46], EI: [70, 10], DC: [74, 34], ED: [70, 58] },
    rivals: { D1: [34, 28], D2: [36, 40], MCD: [50, 28], MCI: [54, 44], VD: [52, 12], VI: [54, 56], LD: [76, 12], DCD: [80, 28], DCI: [82, 40], LI: [78, 56] },
    zones: [
      { c: [62, 20], r: 5, score: 3, txt: "Métete entre líneas, detrás del pivote rival: el central tiene tiempo para el pase y tú recibes de cara, con la defensa de frente." },
      { c: [42, 20], r: 4, score: 2, txt: "Apoyo corto delante del pivote rival: seguro, pero no haces progresar al equipo." },
      { c: [74, 14], r: 5, score: 1, txt: "Demasiado profundo: te metes en la zona del extremo y el pase ya es un pelotazo." }
    ],
    miss: "Quedarte tapado por el pivote rival es no existir para tu central.",
    ideal: [[{ who: "you", to: [62, 20] }], [{ who: "ball", to: [62, 20] }]]
  },
  {
    id: "v02", posicion: "volante", fase: "ataque", tipo: "desmarque", principio: "Llegada de segunda línea",
    titulo: "Tu extremo va a centrar",
    situacion: "Tu extremo izquierdo ganó la línea de fondo y va a centrar. El 9 ataca el primer palo y el extremo derecho el segundo. Tú estás en la frontal.",
    pregunta: "¿Dónde apareces?",
    pista: "Los centrales marcan a los delanteros. Al que llega desde atrás nadie lo marca.",
    you: [68, 26], ball: [95, 7],
    team: { EI: [94, 6], DC: [92, 30], ED: [92, 50], MCD: [60, 36], MD: [72, 44], LI: [80, 6], LD: [78, 60] },
    rivals: { DCD: [94, 28], DCI: [94, 44], LI: [92, 52], LD: [90, 12], MCD: [80, 32], MCI: [82, 42], POR: [101, 32] },
    zones: [
      { c: [86, 32], r: 5, score: 3, txt: "Llegada al punto penal desde segunda línea: nadie te marca y llegas de frente al balón." },
      { c: [76, 30], r: 5, score: 2, txt: "Borde del área: cubres el rechace, aunque no amenazas el arco." },
      { c: [66, 26], r: 4, score: 0, txt: "Quedarte en la frontal viendo el centro es no participar del remate." }
    ],
    miss: "Correr hacia la banda del centro te saca del remate.",
    ideal: [[{ who: "you", to: [86, 32] }, { who: "ball", to: [87, 33] }]]
  },
  {
    id: "v03", posicion: "volante", fase: "ataque", tipo: "pase", principio: "Asistir al desdoblamiento",
    titulo: "El lateral sube por fuera",
    situacion: "Tienes el balón. El extremo izquierdo está marcado por el lateral rival y tu lateral izquierdo pasa lanzado por fuera.",
    pregunta: "¿A dónde juegas?",
    pista: "¿Quién está en carrera y sin marca?",
    you: [56, 22], ball: [57, 23],
    team: { EI: [66, 12], LI: [64, 4], DC: [74, 34], MCD: [44, 34], MD: [56, 46], ED: [70, 58], LD: [46, 60] },
    rivals: { LD: [70, 14], VD: [60, 18], DCD: [82, 28], DCI: [84, 42], MCD: [62, 30], MCI: [64, 42], LI: [80, 56] },
    zones: [
      { c: [76, 4], r: 6, score: 3, txt: "Pase al lateral que pasa por fuera: está en carrera y sin marca. El extremo arrastra al lateral rival hacia dentro." },
      { c: [44, 34], r: 4, score: 2, txt: "Atrás al pivote: conservas, pero el desdoblamiento se pierde." },
      { c: [66, 12], r: 4, score: 1, txt: "Al extremo marcado: lo recibe de espaldas con el lateral encima." }
    ],
    miss: "Conducir mientras el lateral corre es desperdiciar su carrera.",
    ideal: [[{ who: "T:LI", to: [78, 4] }, { who: "ball", to: [78, 4] }, { who: "T:EI", to: [72, 20] }, { who: "R:LD", to: [74, 18] }]]
  },
  {
    id: "v04", posicion: "volante", fase: "transicion", tipo: "presion", principio: "Contrapresión",
    titulo: "Perdimos el balón en campo rival",
    situacion: "Tu 9 pierde el balón y el pivote rival lo recupera a cinco metros de ti. Aún no levantó la cabeza.",
    pregunta: "¿Qué haces?",
    pista: "Los 5 segundos tras la pérdida son la mejor oportunidad para recuperar.",
    you: [62, 26], ball: [60, 31],
    team: { DC: [66, 34], EI: [72, 12], ED: [72, 56], MCD: [48, 34], MD: [60, 46], LI: [56, 8], DCI: [34, 24], DCD: [34, 44] },
    rivals: { MCD: [59, 31], D1: [50, 28], D2: [52, 40], VD: [56, 14], MCI: [64, 44], DCD: [80, 28], DCI: [82, 40] },
    zones: [
      { c: [59, 31], r: 4, score: 3, txt: "Presiona ya: estás a cinco metros y el pivote rival aún no se orientó. Recuperas en campo rival." },
      { c: [54, 28], r: 4, score: 2, txt: "Cerrar la línea al delantero ayuda, pero el pivote rival sale por el otro lado." },
      { c: [50, 22], r: 4, score: 0, txt: "Retroceder sin presión le regala la salida." }
    ],
    miss: "Dudar en ese momento es lo mismo que no hacer nada.",
    ideal: [[{ who: "you", to: [59, 31] }], [{ who: "ball", to: [60, 36] }, { who: "you", to: [60, 35] }]]
  },
  {
    id: "v05", posicion: "volante", fase: "defensa", tipo: "ubicacion", principio: "Cerrar el interior",
    titulo: "Tu lateral sale a la banda",
    situacion: "El volante rival recibe en banda y tu lateral izquierdo sale a cerrarlo. El lateral rival se mete por dentro, al espacio que dejó.",
    pregunta: "¿Dónde te ubicas?",
    pista: "El volante cubre el espacio interior que deja el lateral cuando sale.",
    you: [46, 24], ball: [48, 11],
    team: { LI: [40, 12], DCI: [30, 26], DCD: [30, 42], LD: [34, 58], MCD: [40, 34], MD: [46, 44], EI: [56, 14], DC: [60, 34] },
    rivals: { VD: [48, 10], LD: [44, 20], MCD: [50, 32], MCI: [50, 44], D1: [36, 30], D2: [38, 40], VI: [44, 56] },
    zones: [
      { c: [41, 20], r: 5, score: 3, txt: "Cierra el interior detrás de tu lateral y vigila al lateral rival que entra: el pase por dentro queda tapado." },
      { c: [48, 14], r: 4, score: 2, txt: "Doblar la marca al balón ayuda, pero deja libre al lateral rival por dentro." },
      { c: [52, 26], r: 4, score: 0, txt: "Quedarte arriba deja un 2 contra 1 contra tu lateral." }
    ],
    miss: "Mirar la jugada sin moverte deja el interior libre.",
    ideal: [[{ who: "you", to: [41, 20] }, { who: "R:LD", to: [40, 22] }]]
  },
  {
    id: "v06", posicion: "volante", fase: "defensa", tipo: "ubicacion", principio: "Marcar entre líneas",
    titulo: "El mediapunta rival se esconde",
    situacion: "El central rival tiene el balón. Su mediapunta se ubica entre tu línea de medios y tu defensa, pidiendo el pase.",
    pregunta: "¿Qué haces?",
    pista: "Al que recibe entre líneas se le marca antes de que reciba, no después.",
    you: [48, 22], ball: [74, 30],
    team: { LI: [34, 10], DCI: [28, 26], DCD: [28, 42], LD: [34, 58], MCD: [40, 34], MD: [50, 46], EI: [62, 12], DC: [68, 32], ED: [62, 56] },
    rivals: { DCD: [75, 30], MCD: [40, 26], D1: [36, 32], D2: [38, 42], VD: [56, 12], VI: [58, 56], MCI: [60, 44], DCI: [78, 42] },
    zones: [
      { c: [41, 24], r: 4, score: 3, txt: "Baja a marcar al mediapunta antes de que reciba: pegado y perfilado, no puede girar." },
      { c: [60, 28], r: 4, score: 2, txt: "Presionar al central que tiene el balón frena el pase, pero el mediapunta queda libre." },
      { c: [50, 22], r: 3.5, score: 0, txt: "Quedarte deja al mediapunta recibir entre líneas, girar y encarar a tus centrales." }
    ],
    miss: "Moverte hacia la banda deja el centro del campo abierto.",
    ideal: [[{ who: "you", to: [41, 24] }], [{ who: "ball", to: [60, 44] }]]
  },
  {
    id: "v07", posicion: "volante", fase: "ataque", tipo: "pase", principio: "Pared",
    titulo: "El volante rival te cierra",
    situacion: "Conduces y el volante rival te sale de frente. Tu extremo está cerca, marcado pero de cara a ti. Detrás del volante rival hay espacio.",
    pregunta: "¿Qué haces con la pelota?",
    pista: "Toca y corre: una pared elimina al que te cierra.",
    you: [60, 18], ball: [61, 19],
    team: { EI: [72, 12], LI: [54, 6], DC: [76, 34], MCD: [48, 34], MD: [60, 46] },
    rivals: { VD: [65, 20], LD: [76, 10], DCD: [84, 28], MCD: [62, 32], DCI: [86, 42] },
    zones: [
      { c: [72, 12], r: 4.5, score: 3, txt: "Pared con el extremo: tocas y arrancas al espacio detrás del volante rival para recibir de vuelta." },
      { c: [54, 6], r: 4.5, score: 2, txt: "Atrás al lateral: conservas, pero el volante rival ya cumplió su trabajo." },
      { c: [48, 34], r: 4, score: 2, txt: "Al pivote: seguro, cambia el ritmo, aunque no eliminas a nadie." }
    ],
    miss: "Regatear contra el volante rival con el lateral de apoyo cerca es un 50/50 innecesario.",
    ideal: [[{ who: "ball", to: [72, 12] }], [{ who: "you", to: [74, 24] }, { who: "ball", to: [74, 24] }]]
  },
  {
    id: "v08", posicion: "volante", fase: "ataque", tipo: "pase", principio: "Decidir en la frontal",
    titulo: "Llegas a la frontal con el balón",
    situacion: "Recibes en la frontal del área. El central te cierra. El 9 está marcado y tu extremo derecho llega solo por el lado contrario.",
    pregunta: "¿Qué haces?",
    pista: "Un tiro con el central encima vale menos que un compañero solo.",
    you: [84, 26], ball: [85, 27],
    team: { DC: [92, 36], ED: [88, 52], EI: [90, 10], MCD: [70, 34], MD: [76, 44], LI: [80, 4] },
    rivals: { DCD: [88, 29], DCI: [94, 40], LI: [94, 54], LD: [92, 14], MCD: [78, 30], MCI: [80, 44], POR: [101, 34] },
    zones: [
      { c: [88, 52], r: 5, score: 3, txt: "Pase al extremo derecho libre: recibe solo, de frente y con el portero descolocado." },
      { c: [104, 34], r: 6, score: 2, txt: "Tiro desde la frontal con el central cerrando: posible, pero probablemente bloqueado." },
      { c: [92, 36], r: 4, score: 1, txt: "Al 9 marcado por el central: recibe de espaldas en el área, difícil." }
    ],
    miss: "Regatear al central en la frontal con tres rivales cerca termina en contra.",
    ideal: [[{ who: "ball", to: [88, 52] }], [{ who: "ball", to: [104, 38] }]]
  }
);
