// ============================================================
//  ESCENARIOS — Lateral izquierdo (4-3-3)
//  Mismo sistema de coordenadas que scenarios.js (105 x 68, atacamos a la derecha,
//  banda izquierda arriba). "you" ocupa el rol LI; el extremo (EI) es un compañero.
//  El rival ataca hacia la izquierda: su lateral y volante derechos vienen por tu banda.
// ============================================================
window.TACTICA.scenarios.push(
  {
    id: "l01", posicion: "lateral", fase: "ataque", tipo: "pase", principio: "Salida de balón",
    titulo: "Salida desde atrás bajo presión",
    situacion: "El central te da el balón cerca de tu área. El volante rival viene a presionarte. El pivote se ofrece por dentro y tu extremo está marcado en banda.",
    pregunta: "¿A dónde juegas?",
    pista: "El pase que rompe una línea de presión casi siempre es hacia dentro.",
    you: [28, 8], ball: [29, 9],
    team: { DCI: [22, 24], DCD: [22, 42], MCD: [38, 30], MI: [48, 20], EI: [60, 12], DC: [68, 34], POR: [5, 34] },
    rivals: { VD: [35, 10], D1: [30, 24], D2: [34, 36], LD: [64, 14], MCD: [46, 30], MCI: [48, 42], VI: [40, 54] },
    zones: [
      { c: [38, 30], r: 5, score: 3, txt: "Pase interior al pivote que se ofrece libre: rompes la primera línea de presión y el equipo sale jugando con el campo de frente." },
      { c: [22, 24], r: 5, score: 2, txt: "Devolver al central es seguro, pero no avanzas y la presión se reinicia." },
      { c: [60, 12], r: 5, score: 1, txt: "Pase largo por la banda al extremo marcado: recibe de espaldas con el lateral encima. 50/50." }
    ],
    miss: "Conducir contra la presión cerca de tu propia área es jugar con fuego.",
    ideal: [[{ who: "ball", to: [38, 30] }], [{ who: "ball", to: [48, 20] }, { who: "you", to: [40, 8] }]]
  },
  {
    id: "l02", posicion: "lateral", fase: "ataque", tipo: "pase", principio: "Pase al espacio",
    titulo: "El extremo pide a la espalda",
    situacion: "Tienes el balón con tiempo. El lateral rival está alto, pegado a tu extremo, y detrás de él hay espacio. Tu extremo arranca.",
    pregunta: "¿A dónde juegas el pase?",
    pista: "Cuando el defensor está pegado y hay espacio detrás, el pase va al espacio, no al pie.",
    you: [40, 8], ball: [41, 9],
    team: { EI: [58, 12], MI: [46, 24], MCD: [40, 32], DCI: [26, 26], DC: [70, 34] },
    rivals: { VD: [50, 14], LD: [62, 13], DCD: [76, 28], MCD: [52, 30], D1: [34, 28] },
    zones: [
      { c: [80, 8], r: 7, score: 3, txt: "Pase largo al espacio a la espalda del lateral rival: tu extremo arranca antes y lo gana en carrera." },
      { c: [46, 24], r: 5, score: 2, txt: "Pase al interior: conserva el balón, pero el extremo hizo la carrera en vano." },
      { c: [58, 12], r: 4, score: 1, txt: "Al pie del extremo: lo recibe de espaldas y pegado al lateral. El pase bueno era al espacio." }
    ],
    miss: "Conducir cuando el extremo ya arrancó es llegar tarde: termina en fuera de juego o en nada.",
    ideal: [[{ who: "T:EI", to: [80, 8] }, { who: "ball", to: [80, 8] }]]
  },
  {
    id: "l03", posicion: "lateral", fase: "ataque", tipo: "desmarque", principio: "Desdoblamiento",
    titulo: "¿Subo o me quedo?",
    situacion: "Tu extremo tiene el balón en banda, 1 contra 1 con el lateral rival. Estás detrás de la jugada. El delantero rival espera una contra.",
    pregunta: "¿Qué haces?",
    pista: "El desdoblamiento crea un 2 contra 1 que el lateral rival no puede resolver.",
    you: [48, 10], ball: [67, 9],
    team: { EI: [66, 8], MI: [58, 24], MCD: [46, 32], DCI: [30, 26], DCD: [30, 42], DC: [74, 34] },
    rivals: { LD: [72, 10], VD: [56, 18], DCD: [84, 28], MCD: [64, 30], D1: [42, 28] },
    zones: [
      { c: [74, 3], r: 6, score: 3, txt: "Desdoblamiento por fuera: tu carrera obliga al lateral rival a elegir entre el extremo y tú. 2 contra 1 creado." },
      { c: [56, 14], r: 5, score: 2, txt: "Apoyo por detrás: seguro para conservar, pero no creas superioridad." },
      { c: [40, 10], r: 5, score: 1, txt: "Quedarte cubre la contra, pero dejas a tu extremo solo contra el lateral y el volante." }
    ],
    miss: "Quedarte mirando sin decidir no cubre nada ni ayuda a nadie.",
    ideal: [[{ who: "you", to: [74, 3] }], [{ who: "R:LD", to: [73, 6] }, { who: "T:EI", to: [78, 16] }, { who: "ball", to: [78, 16] }]]
  },
  {
    id: "l04", posicion: "lateral", fase: "ataque", tipo: "desmarque", principio: "Amplitud",
    titulo: "Tu extremo se metió por dentro",
    situacion: "El pivote tiene el balón. Tu extremo se fue hacia dentro y la banda izquierda quedó vacía.",
    pregunta: "¿Dónde te ubicas?",
    pista: "Si el extremo deja la banda, alguien tiene que darle amplitud al equipo.",
    you: [50, 8], ball: [46, 30],
    team: { MCD: [46, 30], EI: [70, 22], MI: [56, 24], DC: [76, 34], DCI: [30, 26], ED: [68, 56] },
    rivals: { LD: [74, 16], VD: [58, 14], DCD: [84, 28], MCD: [60, 32], D1: [40, 28] },
    zones: [
      { c: [72, 6], r: 6, score: 3, txt: "Sube por fuera: el extremo te dejó la banda libre. Das amplitud y el pivote tiene un pase largo claro." },
      { c: [50, 20], r: 5, score: 1, txt: "Meterte por dentro también deja dos jugadores en el mismo carril y nadie en la banda." },
      { c: [34, 10], r: 5, score: 1, txt: "Quedarte atrás con el equipo atacando es cubrir una contra que todavía no existe." }
    ],
    miss: "Caminar sin decidir deja al equipo sin amplitud en tu lado.",
    ideal: [[{ who: "you", to: [72, 6] }, { who: "ball", to: [72, 6] }]]
  },
  {
    id: "l05", posicion: "lateral", fase: "ataque", tipo: "pase", principio: "Centro atrás",
    titulo: "Subiste y llegaste a la banda del área",
    situacion: "Desbordaste y tienes el balón en banda a la altura del área. El 9 tiene al central encima. Tu extremo llega libre al borde del área y el interior está más atrás.",
    pregunta: "¿Qué centro eliges?",
    pista: "¿Quién está solo y de frente al arco?",
    you: [88, 6], ball: [89, 7],
    team: { EI: [84, 22], DC: [92, 34], MI: [80, 30], ED: [94, 50], MCD: [70, 36] },
    rivals: { DCD: [93, 31], DCI: [94, 41], LI: [92, 53], LD: [86, 12], MCD: [82, 36], VD: [78, 14], POR: [101, 33] },
    zones: [
      { c: [84, 22], r: 5, score: 3, txt: "Centro atrás al extremo que llega al borde del área: solo, de frente y con la defensa mirando hacia atrás." },
      { c: [80, 30], r: 5, score: 2, txt: "Pase atrás al interior: seguro y conserva, pero menos peligro inmediato." },
      { c: [92, 34], r: 4, score: 1, txt: "Centro al primer palo con el central encima del 9: casi siempre lo despejan." }
    ],
    miss: "Regatear en la banda del área con el lateral rival volviendo es perderla en zona de contra.",
    ideal: [[{ who: "ball", to: [84, 22] }], [{ who: "ball", to: [103, 32] }]]
  },
  {
    id: "l06", posicion: "lateral", fase: "defensa", tipo: "ubicacion", principio: "Perfil defensivo",
    titulo: "1 contra 1: ¿a dónde lo mandas?",
    situacion: "El volante rival viene de frente con el balón. Tu central está a tu derecha, por dentro. No tienes ayuda por la banda.",
    pregunta: "¿Dónde te ubicas para defender?",
    pista: "Al que te encara no lo paras: lo mandas al lugar donde menos daño hace.",
    you: [34, 12], ball: [41, 11],
    team: { DCI: [26, 26], DCD: [26, 40], LD: [30, 56], MCD: [36, 32], MI: [44, 22], EI: [52, 8] },
    rivals: { VD: [42, 10], D1: [36, 30], D2: [36, 42], LD: [56, 8], MCD: [48, 30], MCI: [50, 42] },
    zones: [
      { c: [33, 16], r: 5, score: 3, txt: "Perfílate cerrando el interior: lo invitas hacia la banda, lejos del arco y de tu central. Si quiere entrar, tiene que pasar por ti." },
      { c: [41, 11], r: 4, score: 1, txt: "Entrar a quitársela de frente: si te regatea quedas eliminado y el central tiene que salir." },
      { c: [33, 6], r: 5, score: 0, txt: "Cerrar la banda le abre el camino hacia el área: lo invitas exactamente a donde hace daño." }
    ],
    miss: "Retroceder sin perfilarte le deja elegir a él.",
    ideal: [[{ who: "you", to: [33, 16] }], [{ who: "R:VD", to: [30, 5] }, { who: "ball", to: [30, 5] }, { who: "you", to: [28, 10] }]]
  },
  {
    id: "l07", posicion: "lateral", fase: "defensa", tipo: "ubicacion", principio: "Segundo palo",
    titulo: "Centro desde el otro lado",
    situacion: "El rival va a centrar desde su banda izquierda (la de abajo). El lateral rival llega por detrás hacia el segundo palo, tu palo.",
    pregunta: "¿Dónde te ubicas?",
    pista: "Los goles de segundo palo nacen cuando el lateral se queda abierto marcando a nadie.",
    you: [20, 14], ball: [15, 58],
    team: { POR: [4, 34], DCI: [12, 28], DCD: [10, 40], LD: [12, 52], MCD: [18, 36], MI: [22, 26], EI: [30, 12] },
    rivals: { VI: [15, 58], LD: [18, 20], D1: [10, 32], D2: [12, 42], MCI: [20, 44], MCD: [24, 34], LI: [26, 60] },
    zones: [
      { c: [10, 24], r: 5, score: 3, txt: "Cierra el segundo palo: el lateral rival llega por detrás y eres el último en esa zona. Nunca más lejos del arco que tu rival." },
      { c: [14, 34], r: 5, score: 2, txt: "Zona del punto penal: mejor que quedarte afuera, pero dejas tu palo libre." },
      { c: [22, 8], r: 5, score: 0, txt: "Quedarte abierto en banda es marcar a nadie mientras el rival llega solo." }
    ],
    miss: "Mirar el centro sin moverte es lo que todos los laterales hacen justo antes de un gol en contra.",
    ideal: [[{ who: "you", to: [10, 24] }, { who: "R:LD", to: [12, 26] }], [{ who: "ball", to: [11, 28] }]]
  },
  {
    id: "l08", posicion: "lateral", fase: "defensa", tipo: "ubicacion", principio: "Línea defensiva",
    titulo: "El balón va hacia atrás",
    situacion: "El rival no encuentra pase y juega hacia atrás a su central. Tu línea de cuatro está en la frontal del área y el delantero rival al límite.",
    pregunta: "¿Qué haces con la línea?",
    pista: "Cuando el balón va hacia atrás, la línea sube junta.",
    you: [26, 10], ball: [60, 30],
    team: { POR: [5, 34], DCI: [28, 26], DCD: [28, 42], LD: [26, 58], MCD: [38, 34], MI: [44, 24], MD: [44, 44], EI: [50, 10] },
    rivals: { DCD: [66, 28], MCD: [52, 34], D1: [34, 30], D2: [36, 40], VD: [44, 14], VI: [46, 54], LD: [52, 8] },
    zones: [
      { c: [36, 10], r: 5, score: 3, txt: "La línea sube junta mientras el balón viaja hacia atrás: el delantero rival queda en fuera de juego y ganas 10 metros." },
      { c: [26, 10], r: 4, score: 1, txt: "Quedarte quieto parte la línea: tus centrales suben y tú habilitas al delantero." },
      { c: [18, 10], r: 5, score: 0, txt: "Retroceder sin presión sobre el balón regala 10 metros." }
    ],
    miss: "Moverte hacia la banda no corrige la altura de la línea.",
    ideal: [[{ who: "ball", to: [66, 28] }, { who: "you", to: [36, 10] }, { who: "T:DCI", to: [38, 26] }, { who: "T:DCD", to: [38, 42] }, { who: "T:LD", to: [36, 58] }]]
  },
  {
    id: "l09", posicion: "lateral", fase: "defensa", tipo: "ubicacion", principio: "Cobertura",
    titulo: "Tu central sale a presionar",
    situacion: "El delantero rival recibe por dentro y tu central izquierdo sale a presionarlo. Detrás del central queda espacio hacia el arco.",
    pregunta: "¿Dónde te ubicas?",
    pista: "Cuando un compañero sale, alguien cubre su espalda.",
    you: [24, 10], ball: [35, 29],
    team: { POR: [5, 34], DCI: [29, 27], DCD: [24, 42], LD: [26, 58], MCD: [34, 36], MI: [40, 22], EI: [48, 8] },
    rivals: { D1: [36, 30], D2: [32, 44], VD: [42, 12], MCD: [46, 32], MCI: [44, 46], LD: [50, 6] },
    zones: [
      { c: [22, 21], r: 6, score: 3, txt: "Cierra por dentro, detrás de tu central: cobertura. Si el delantero lo regatea, estás tú." },
      { c: [34, 24], r: 5, score: 2, txt: "Doblar la marca al delantero: bien, pero deja libre al volante rival en tu banda." },
      { c: [24, 10], r: 4, score: 0, txt: "Quedarte en la banda deja el camino al arco abierto detrás de tu central." }
    ],
    miss: "Subir a presionar al volante en ese momento deja todo el interior libre.",
    ideal: [[{ who: "you", to: [22, 21] }, { who: "T:DCI", to: [33, 29] }], [{ who: "R:D1", to: [28, 24] }, { who: "ball", to: [28, 24] }]]
  },
  {
    id: "l10", posicion: "lateral", fase: "transicion", tipo: "presion", principio: "Contrapresión",
    titulo: "Subiste y perdimos el balón",
    situacion: "Habías subido por la banda. El volante rival recupera el balón cerca de ti y su lateral ya arranca hacia tu banda vacía.",
    pregunta: "¿Qué haces?",
    pista: "Estás a pocos metros del balón. Lo más rápido para no sufrir la contra es recuperarlo ahí mismo.",
    you: [70, 6], ball: [64, 12],
    team: { EI: [76, 12], MI: [60, 22], MCD: [48, 32], DCI: [30, 26], DCD: [30, 42], DC: [78, 34] },
    rivals: { VD: [64, 12], LD: [48, 14], DCD: [84, 28], MCD: [66, 30], D1: [42, 30] },
    zones: [
      { c: [64, 12], r: 5, score: 3, txt: "Contrapresión: estás a seis metros y el rival aún no se orientó. Recuperas o lo frenas, y tu banda no queda vacía." },
      { c: [52, 10], r: 5, score: 2, txt: "Volver corriendo a tu zona es correcto si no llegas al balón, pero aquí sí llegas." },
      { c: [74, 6], r: 5, score: 0, txt: "Quedarte arriba regala toda tu banda a la contra." }
    ],
    miss: "Dudar entre presionar y volver es lo peor: no haces ninguna de las dos.",
    ideal: [[{ who: "you", to: [64, 12] }], [{ who: "ball", to: [60, 24] }, { who: "T:MI", to: [60, 23] }]]
  },
  {
    id: "l11", posicion: "lateral", fase: "transicion", tipo: "pase", principio: "Transición ofensiva",
    titulo: "Recuperaste tú",
    situacion: "Le quitaste el balón al volante rival en tu banda. Tu extremo está libre adelante y el lateral rival llegó tarde. El pivote se ofrece.",
    pregunta: "¿Cuál es tu primer pase?",
    pista: "El primer pase después de recuperar define si hay contra o no.",
    you: [30, 12], ball: [31, 13],
    team: { EI: [56, 10], MCD: [36, 30], DCI: [22, 26], MI: [42, 22], DC: [60, 34] },
    rivals: { VD: [33, 16], LD: [60, 20], MCD: [44, 32], D1: [38, 28], DCD: [70, 28] },
    zones: [
      { c: [58, 9], r: 6, score: 3, txt: "Primer pase hacia adelante al extremo libre: la contra empieza antes de que el rival se reordene." },
      { c: [36, 30], r: 5, score: 2, txt: "Al pivote: sale jugando limpio, aunque la contra pierde velocidad." },
      { c: [22, 26], r: 5, score: 1, txt: "Atrás al central: seguro, pero el rival tiene tiempo de volver y la recuperación no vale nada." }
    ],
    miss: "Conducir con el volante rival encima es arriesgar la pérdida en tu zona.",
    ideal: [[{ who: "ball", to: [58, 9] }], [{ who: "T:EI", to: [76, 8] }, { who: "ball", to: [76, 8] }]]
  },
  {
    id: "l12", posicion: "lateral", fase: "defensa", tipo: "presion", principio: "Presión alta",
    titulo: "El lateral rival va a recibir",
    situacion: "Presión alta. El central rival juega al lateral derecho, que está en banda. Estás a 15 metros de él.",
    pregunta: "¿A dónde corres?",
    pista: "El mejor momento para presionar es mientras el balón viaja.",
    you: [62, 10], ball: [86, 24],
    team: { EI: [76, 20], DC: [80, 34], MI: [64, 24], MCD: [56, 34], DCI: [40, 26], DCD: [40, 42] },
    rivals: { DCD: [86, 25], LD: [80, 8], VD: [68, 14], MCD: [72, 30], DCI: [88, 42], D1: [48, 30] },
    zones: [
      { c: [77, 9], r: 5, score: 3, txt: "Salta al lateral rival mientras el balón viaja: lo recibes de frente, sin tiempo ni salida por la banda." },
      { c: [68, 18], r: 5, score: 2, txt: "Cerrar el pase interior al volante ayuda, pero el lateral conduce libre." },
      { c: [54, 12], r: 5, score: 0, txt: "Esperar atrás deja que el lateral rival avance 20 metros con el balón." }
    ],
    miss: "Correr tarde, cuando ya recibió y controló, es llegar a un 1v1 en desventaja.",
    ideal: [[{ who: "ball", to: [80, 8] }, { who: "you", to: [77, 9] }], [{ who: "ball", to: [86, 24] }]]
  }
);
