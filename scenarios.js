// ============================================================
//  ESCENARIOS TÁCTICOS — base del juego + escenarios de Interior izquierdo (4-3-3)
//  Los de otras posiciones viven en scenarios-<posicion>.js y se agregan con push().
// ============================================================
//  Sistema de coordenadas: cancha de 105 x 68 m.
//    x: 0 = nuestro arco, 105 = arco rival (atacamos hacia la derecha)
//    y: 0 = banda izquierda (arriba en pantalla), 68 = banda derecha
//
//  Cada escenario puede sobreescribir posiciones de la base (team / rivals).
//  Las "zones" son círculos [x, y, radio] con puntaje 0-3 y explicación.
//  Si el jugador toca fuera de toda zona, aplica "miss".
//  "ideal" es la jugada que se anima al pedir "Ver la jugada ideal":
//    lista de pasos; cada paso es una lista de movimientos simultáneos
//    { who: 'you' | 'ball' | 'T:ROL' | 'R:ROL', to: [x, y] }
// ============================================================

window.TACTICA = {
  sistema: "4-3-3",
  // Posiciones jugables. "rol" es la ficha de la formación base que el jugador reemplaza.
  //  Las posiciones "-der" se generan en scenarios-espejo.js a partir de las izquierdas.
  posiciones: [
    { id: "portero", linea: "Arquero", nombre: "Portero", rol: "POR", desc: "Último defensor y primer atacante" },
    { id: "lateral", linea: "Defensa", nombre: "Lateral izq.", rol: "LI", desc: "Defiende la banda y se suma al ataque" },
    { id: "central", linea: "Defensa", nombre: "Central izq.", rol: "DCI", desc: "Manda la línea y sale jugando" },
    { id: "central-der", linea: "Defensa", nombre: "Central der.", rol: "DCD", desc: "Manda la línea y sale jugando" },
    { id: "lateral-der", linea: "Defensa", nombre: "Lateral der.", rol: "LD", desc: "Defiende la banda y se suma al ataque" },
    { id: "pivote", linea: "Medio", nombre: "Pivote", rol: "MCD", desc: "Mediocentro defensivo: equilibrio y salida" },
    { id: "volante", linea: "Medio", nombre: "Volante izq.", rol: "MI", desc: "Interior de medio campo: llegada y pases" },
    { id: "volante-der", linea: "Medio", nombre: "Volante der.", rol: "MD", desc: "Interior de medio campo: llegada y pases" },
    { id: "interior", linea: "Ataque", nombre: "Interior izq.", rol: "EI", desc: "Extremo que juega por dentro" },
    { id: "extremo", linea: "Ataque", nombre: "Extremo izq.", rol: "EI", desc: "Pegado a la banda, encara y centra" },
    { id: "delantero", linea: "Ataque", nombre: "Delantero centro", rol: "DC", desc: "El 9: desmarques, presión y gol" },
    { id: "extremo-der", linea: "Ataque", nombre: "Extremo der.", rol: "ED", desc: "Pegado a la banda, encara y centra" },
    { id: "interior-der", linea: "Ataque", nombre: "Interior der.", rol: "ED", desc: "Extremo que juega por dentro" }
  ],
  base: {
    team: {
      POR: [5, 34], LI: [26, 10], DCI: [22, 26], DCD: [22, 42], LD: [26, 58],
      MCD: [40, 34], MI: [52, 24], MD: [52, 44], EI: [66, 14], DC: [74, 34], ED: [66, 58]
    },
    rivals: {
      POR: [101, 34], LD: [84, 14], DCD: [88, 27], DCI: [88, 41], LI: [84, 54],
      VD: [70, 14], MCD: [66, 28], MCI: [66, 40], VI: [70, 54], D1: [50, 30], D2: [50, 38]
    }
  },
  scoreLabels: { 3: "Óptima", 2: "Buena", 1: "Arriesgada", 0: "Error" },
  scenarios: [
    // ---------------- ATAQUE CON BALÓN ----------------
    {
      id: "a01", posicion: "interior", fase: "ataque", tipo: "pase", principio: "Amplitud",
      titulo: "El lateral que desborda",
      situacion: "Recibes en banda. El lateral rival te cierra de frente y su volante te tapa por dentro. Tu lateral izquierdo viene lanzado por fuera.",
      pregunta: "Tienes la pelota. ¿A dónde la juegas?",
      pista: "¿Quién está llegando solo y en carrera?",
      you: [70, 16], ball: [71, 17],
      team: { LI: [62, 5], MI: [52, 24] },
      rivals: { LD: [76, 14], VD: [67, 23], DCD: [86, 27] },
      zones: [
        { c: [84, 6], r: 7, score: 3, txt: "Tu lateral llega solo y en carrera por fuera. Jugar a su desborde rompe la línea defensiva: amplitud máxima." },
        { c: [52, 24], r: 5, score: 2, txt: "Pase de seguridad al interior. No pierdes el balón, pero el rival tiene tiempo de reorganizarse." },
        { c: [74, 34], r: 5, score: 1, txt: "Al 9 de espaldas con dos centrales encima: pase difícil y fácil de interceptar." }
      ],
      miss: "Encarar contra dos o tirar un pase sin ángulo suele terminar en pérdida en campo rival.",
      ideal: [[{ who: "T:LI", to: [86, 5] }, { who: "ball", to: [86, 6] }]]
    },
    {
      id: "a02", posicion: "interior", fase: "ataque", tipo: "pase", principio: "Profundidad",
      titulo: "La ruptura del 9",
      situacion: "Recibes entre líneas y el central derecho sale a presionarte. El 9 ve el hueco que dejó y arranca a la espalda.",
      pregunta: "¿A dónde juegas el pase?",
      pista: "El pase bueno no va al pie: va al espacio donde el 9 va a llegar.",
      you: [62, 24], ball: [63, 25],
      team: { DC: [76, 36], ED: [68, 56], MI: [50, 22] },
      rivals: { DCD: [75, 26], DCI: [88, 41], LD: [82, 12], VD: [62, 14], MCD: [58, 32] },
      zones: [
        { c: [92, 29], r: 7, score: 3, txt: "Pase filtrado al espacio que dejó el central. El 9 lo recibe de frente al arco: profundidad pura." },
        { c: [76, 36], r: 4, score: 1, txt: "Al pie del 9: lo recibe de espaldas y el otro central lo tapa. El pase tenía que ir al espacio, no al jugador." },
        { c: [68, 56], r: 5, score: 2, txt: "Cambio al extremo derecho: no pierdes, pero regalas la ventaja del central que saltó." }
      ],
      miss: "Conducir cuando ya tienes un compañero lanzado a la espalda es llegar tarde a la jugada.",
      ideal: [[{ who: "T:DC", to: [92, 29] }, { who: "ball", to: [92, 30] }]]
    },
    {
      id: "a03", posicion: "interior", fase: "ataque", tipo: "pase", principio: "Apoyo",
      titulo: "De espaldas y con marca encima",
      situacion: "Recibes de espaldas al arco pegado a la banda. El lateral rival está encima tuyo. El mediocentro se ofrece libre y de cara al juego.",
      pregunta: "¿Qué haces con la pelota?",
      pista: "Quien recibe de cara al juego ve todo el campo. Tú no.",
      you: [70, 20], ball: [69, 19],
      team: { MCD: [56, 31], MI: [48, 20], LI: [58, 8], DC: [76, 34] },
      rivals: { LD: [73, 18], VD: [64, 26], DCD: [84, 28], MCD: [60, 36] },
      zones: [
        { c: [56, 31], r: 6, score: 3, txt: "Pase de primera al mediocentro libre: recibe de cara al juego y puede girar la jugada. Apoyo y orientación." },
        { c: [48, 20], r: 5, score: 2, txt: "El interior también es apoyo, pero está más lejos y con el volante rival cerca de la línea de pase." },
        { c: [58, 8], r: 5, score: 2, txt: "Devolver al lateral es seguro. Aceptable, pero el juego sigue en la banda y no por dentro." }
      ],
      miss: "Intentar girar con el lateral encima es una pérdida casi segura en zona peligrosa.",
      ideal: [[{ who: "ball", to: [56, 31] }], [{ who: "you", to: [74, 26] }]]
    },
    {
      id: "a04", posicion: "interior", fase: "ataque", tipo: "pase", principio: "Cambio de orientación",
      titulo: "La defensa cargada a tu lado",
      situacion: "Conduces hacia dentro. Toda la defensa rival se desplazó hacia tu banda. El extremo derecho está completamente solo del otro lado.",
      pregunta: "¿A dónde juegas?",
      pista: "¿Dónde está el espacio? Donde no están los rivales.",
      you: [60, 24], ball: [61, 25],
      team: { ED: [72, 62], LD: [56, 56], DC: [74, 32], MI: [50, 18], MD: [52, 44] },
      rivals: { LD: [78, 14], DCD: [80, 25], DCI: [82, 36], LI: [78, 44], VD: [66, 16], MCD: [63, 30], MCI: [64, 38], VI: [70, 50] },
      zones: [
        { c: [72, 62], r: 7, score: 3, txt: "Cambio de orientación: el rival cargó tu lado y el extremo derecho está solo. Un pase largo y la defensa tiene que correr 40 metros." },
        { c: [56, 56], r: 5, score: 2, txt: "Cambio al lateral derecho: también abre el campo, aunque es más lento y el rival alcanza a bascular." },
        { c: [74, 32], r: 4, score: 1, txt: "El 9 tiene tres rivales alrededor. Pase forzado." }
      ],
      miss: "Seguir por el lado donde está toda la defensa es jugar en el embudo que el rival te preparó.",
      ideal: [[{ who: "ball", to: [72, 62] }], [{ who: "T:ED", to: [84, 58] }, { who: "ball", to: [84, 58] }]]
    },
    {
      id: "a05", posicion: "interior", fase: "transicion", tipo: "conduccion", principio: "Fijar y pasar",
      titulo: "Dos contra uno en la contra",
      situacion: "Contragolpe. Conduces por banda y solo queda el lateral rival. Tu lateral izquierdo corre por fuera a tu lado.",
      pregunta: "Toca a dónde conduces o a quién pasas.",
      pista: "Si pasas antes de que el defensor se decida, él aún puede cerrar al otro.",
      you: [58, 12], ball: [60, 12],
      team: { LI: [56, 4], DC: [62, 30], MCD: [44, 34], MI: [46, 24], ED: [60, 54] },
      rivals: { LD: [72, 14], DCD: [80, 30], DCI: [84, 42], LI: [76, 56], VD: [40, 20], MCD: [38, 34], MCI: [44, 44], VI: [42, 56], D1: [20, 30], D2: [24, 40] },
      zones: [
        { c: [69, 9], r: 6, score: 3, txt: "Conduces directo al defensor para fijarlo. Cuando salta a ti, juegas al lateral que queda solo: 2v1 bien resuelto." },
        { c: [78, 4], r: 6, score: 2, txt: "Pasar ya también funciona, pero el defensor todavía no está comprometido y puede cerrar al lateral." },
        { c: [62, 30], r: 5, score: 1, txt: "Al 9 con dos centrales encima: desperdicias la superioridad en la banda." }
      ],
      miss: "Frenar la contra o girar hacia atrás regala al rival el tiempo que necesita para replegarse.",
      ideal: [[{ who: "you", to: [69, 10] }, { who: "ball", to: [70, 11] }, { who: "T:LI", to: [72, 3] }], [{ who: "R:LD", to: [71, 11] }, { who: "ball", to: [82, 4] }, { who: "T:LI", to: [82, 4] }]]
    },
    {
      id: "a06", posicion: "interior", fase: "ataque", tipo: "pase", principio: "Pase atrás en el área",
      titulo: "Dentro del área, sin ángulo",
      situacion: "Entras al área por la izquierda. El central te cierra el ángulo de tiro y el portero cubre el primer palo. Tu interior derecho llega solo al punto penal.",
      pregunta: "¿Qué haces?",
      pista: "Un tiro bloqueado vale cero. Un compañero solo de frente al arco vale mucho.",
      you: [92, 22], ball: [93, 23],
      team: { MD: [87, 34], DC: [96, 38], ED: [88, 50], MI: [78, 26], MCD: [70, 34] },
      rivals: { DCD: [95, 26], DCI: [93, 36], LI: [90, 46], LD: [86, 18], MCD: [82, 30], MCI: [80, 40], POR: [101, 31] },
      zones: [
        { c: [87, 34], r: 5, score: 3, txt: "Pase atrás al punto penal: tu compañero está solo, de frente al arco y el portero tiene que reposicionarse. Es el centro más efectivo del fútbol." },
        { c: [96, 38], r: 4, score: 2, txt: "Al 9 al segundo palo: opción válida, pero el pase cruza por delante del central y del portero." },
        { c: [103, 32], r: 6, score: 1, txt: "Tiro con el central cubriendo y sin ángulo: lo más probable es un bloqueo o un saque de arco." }
      ],
      miss: "Driblar dentro del área con tres rivales cerca casi nunca termina bien.",
      ideal: [[{ who: "ball", to: [87, 34] }], [{ who: "ball", to: [104, 36] }]]
    },
    {
      id: "a07", posicion: "interior", fase: "ataque", tipo: "pase", principio: "Cambiar el ritmo",
      titulo: "Nada claro adelante",
      situacion: "Tienes el balón pero el lateral y el volante rival te cierran, y el 9 está tapado. El interior izquierdo queda libre detrás tuyo.",
      pregunta: "¿Qué haces?",
      pista: "Jugar hacia atrás no es retroceder: es cambiar el ritmo para buscar otro lado.",
      you: [74, 18], ball: [75, 19],
      team: { MI: [64, 26], LI: [66, 8], DC: [78, 34], MCD: [54, 34], ED: [72, 56] },
      rivals: { LD: [78, 14], VD: [72, 24], DCD: [82, 34], DCI: [88, 42], MCD: [68, 32] },
      zones: [
        { c: [64, 26], r: 6, score: 3, txt: "Pase al interior libre: conservas el balón, el rival tiene que volver a presionar y tú puedes buscar el cambio de lado o una nueva carrera." },
        { c: [66, 8], r: 5, score: 2, txt: "Devolver al lateral es seguro, pero el rival sigue cerrando la misma banda." },
        { c: [78, 34], r: 4, score: 0, txt: "El 9 tiene al central encima y el volante tapa la línea de pase. Pérdida casi segura." }
      ],
      miss: "Encarar contra dos en zona de pérdida peligrosa: si la pierdes, el rival sale en contra con tu lateral subido.",
      ideal: [[{ who: "ball", to: [64, 26] }], [{ who: "ball", to: [72, 56] }, { who: "you", to: [82, 20] }]]
    },

    // ---------------- ATAQUE SIN BALÓN ----------------
    {
      id: "b01", posicion: "interior", fase: "ataque", tipo: "desmarque", principio: "Desmarque de ruptura",
      titulo: "El mediocentro tiene tiempo",
      situacion: "El mediocentro recibe sin presión y levanta la cabeza. El lateral rival te marca de cerca y la línea defensiva está alta.",
      pregunta: "¿A dónde corres para recibir?",
      pista: "Si el que tiene el balón tiene tiempo, puede meter un pase largo.",
      you: [62, 14], ball: [45, 31],
      team: { MCD: [44, 31], MI: [54, 24], DC: [72, 34], LI: [48, 8] },
      rivals: { LD: [70, 16], DCD: [80, 27], DCI: [80, 41], LI: [76, 54], VD: [58, 18], MCD: [56, 30], D1: [36, 28] },
      zones: [
        { c: [86, 12], r: 7, score: 3, txt: "Carrera a la espalda del lateral: el mediocentro tiene tiempo para el pase largo y la defensa está alta. Desmarque de ruptura." },
        { c: [56, 22], r: 4, score: 2, txt: "Apoyo al pie: pase fácil, pero la defensa no se mueve y recibes de espaldas." },
        { c: [72, 24], r: 5, score: 2, txt: "Entre líneas también vale: recibes de cara y entre el lateral y el central." }
      ],
      miss: "Quedarte parado al lado de tu marcador no le da ninguna opción a quien tiene el balón.",
      ideal: [[{ who: "you", to: [86, 12] }, { who: "ball", to: [86, 12] }]]
    },
    {
      id: "b02", posicion: "interior", fase: "ataque", tipo: "desmarque", principio: "Tercer hombre",
      titulo: "El 9 baja a recibir",
      situacion: "El 9 baja a recibir del mediocentro y el central lo sigue. Detrás del 9 queda un espacio enorme.",
      pregunta: "¿A dónde corres?",
      pista: "Alguien arrastró a un defensor. ¿Quién aprovecha el hueco que dejó?",
      you: [66, 18], ball: [46, 34],
      team: { MCD: [46, 34], DC: [62, 32], MI: [54, 22], ED: [68, 56] },
      rivals: { DCI: [68, 32], DCD: [86, 26], LD: [74, 14], LI: [84, 54], VD: [60, 16], MCD: [58, 38] },
      zones: [
        { c: [84, 30], r: 7, score: 3, txt: "El 9 arrastró al central: tú atacas el espacio que dejó. El mediocentro juega al 9 y el 9 te la pone de primera. Eso es el tercer hombre." },
        { c: [58, 22], r: 4, score: 1, txt: "Bajar a recibir también junta a todos los jugadores en la misma zona. Se pierde la profundidad." }
      ],
      miss: "Quedarte en la banda viendo la jugada es desperdiciar el espacio más valioso de la cancha.",
      ideal: [[{ who: "ball", to: [62, 32] }, { who: "you", to: [76, 24] }], [{ who: "ball", to: [86, 30] }, { who: "you", to: [86, 30] }]]
    },
    {
      id: "b03", posicion: "interior", fase: "ataque", tipo: "desmarque", principio: "Ocupación del área",
      titulo: "Centro desde la derecha",
      situacion: "El extremo derecho va a centrar. El 9 ataca el primer palo. El lateral rival que te marca está mirando el balón.",
      pregunta: "¿Dónde apareces en el área?",
      pista: "El defensor que mira la pelota pierde de vista a quien llega por detrás.",
      you: [78, 20], ball: [90, 60],
      team: { ED: [90, 60], DC: [92, 36], MD: [76, 42], MI: [72, 28], LD: [80, 62] },
      rivals: { LD: [86, 24], DCD: [93, 32], DCI: [95, 40], LI: [90, 52], VI: [84, 58], MCD: [78, 36], POR: [102, 36] },
      zones: [
        { c: [93, 24], r: 6, score: 3, txt: "Segundo palo: el lateral te perdió de vista mirando el balón. Si el centro pasa al 9, llegas solo." },
        { c: [86, 34], r: 5, score: 2, txt: "Punto penal: buena zona para el rechace o el centro atrás, aunque hay más gente." },
        { c: [96, 36], r: 4, score: 0, txt: "El 9 ya ocupa el primer palo. Dos atacantes en el mismo lugar se estorban." }
      ],
      miss: "Quedarte fuera del área con un centro en el aire es no participar de la jugada.",
      ideal: [[{ who: "you", to: [93, 24] }, { who: "ball", to: [94, 26] }]]
    },
    {
      id: "b04", posicion: "interior", fase: "ataque", tipo: "desmarque", principio: "Apoyo",
      titulo: "Tu lateral está presionado",
      situacion: "Tu lateral izquierdo tiene el balón en banda y el volante rival lo presiona. El lateral rival te marca de cerca.",
      pregunta: "¿Qué movimiento haces?",
      pista: "Un jugador presionado necesita un pase corto y fácil, no uno largo.",
      you: [64, 14], ball: [51, 9],
      team: { LI: [50, 8], MI: [48, 26], MCD: [40, 36], DC: [72, 34] },
      rivals: { VD: [55, 12], LD: [70, 16], DCD: [80, 28], MCD: [58, 30], D1: [44, 30] },
      zones: [
        { c: [57, 21], r: 6, score: 3, txt: "Apoyo por dentro, de cara al juego: le das al lateral una salida corta y clara, y recibes con el campo de frente." },
        { c: [80, 10], r: 6, score: 2, txt: "Carrera a la espalda: posible, pero un lateral presionado difícilmente mete ese pase largo." }
      ],
      miss: "Quedarte parado al lado del lateral rival deja a tu compañero sin opciones.",
      ideal: [[{ who: "you", to: [57, 21] }, { who: "ball", to: [57, 21] }]]
    },
    {
      id: "b05", posicion: "interior", fase: "transicion", tipo: "desmarque", principio: "Transición ofensiva",
      titulo: "Recuperamos y el lateral rival quedó alto",
      situacion: "Tu mediocentro acaba de recuperar el balón. El lateral rival se había sumado al ataque y quedó muy adelantado.",
      pregunta: "¿A dónde corres?",
      pista: "En los primeros 3 segundos tras recuperar, el rival está desordenado. ¿Dónde está el hueco?",
      you: [48, 16], ball: [44, 30],
      team: { MCD: [44, 30], DC: [56, 34], MI: [40, 22], MD: [42, 44], ED: [52, 56], LI: [30, 10] },
      rivals: { LD: [46, 10], DCD: [60, 28], DCI: [62, 40], LI: [54, 56], VD: [40, 20], MCD: [38, 36], MCI: [42, 46], D1: [28, 30], D2: [32, 40] },
      zones: [
        { c: [74, 12], r: 7, score: 3, txt: "El lateral rival quedó alto: corre a su espalda. El mediocentro tiene un pase largo y tú arrancas 20 metros antes que cualquier defensor." },
        { c: [52, 24], r: 5, score: 1, txt: "Apoyo cerca del balón: seguro, pero frena la contra y permite que el rival se reorganice." }
      ],
      miss: "Quedarte en tu posición original desperdicia el momento más vulnerable del rival.",
      ideal: [[{ who: "you", to: [74, 12] }, { who: "ball", to: [74, 12] }]]
    },

    // ---------------- DEFENSA Y TRANSICIÓN DEFENSIVA ----------------
    {
      id: "d01", posicion: "interior", fase: "transicion", tipo: "presion", principio: "Contrapresión",
      titulo: "Acabamos de perder la pelota",
      situacion: "Tu lateral perdió el balón en campo rival. El volante rival lo recupera y aún no levantó la cabeza. Estás a 10 metros.",
      pregunta: "¿Qué haces?",
      pista: "Los 5 segundos después de perder el balón son la mejor oportunidad para recuperarlo.",
      you: [70, 20], ball: [66, 12],
      team: { LI: [60, 14], MI: [56, 26], MCD: [46, 34], DC: [76, 34] },
      rivals: { VD: [66, 12], LD: [78, 16], DCD: [86, 28], MCD: [60, 32], D1: [52, 28] },
      zones: [
        { c: [66, 12], r: 5, score: 3, txt: "Presiona ya: el rival aún no se orientó y estás cerca. Contrapresión inmediata para recuperar en campo rival." },
        { c: [58, 20], r: 5, score: 2, txt: "Cerrar la línea de pase interior ayuda, pero el balón sale libre por la banda." },
        { c: [50, 24], r: 5, score: 0, txt: "Retroceder sin presionar le regala al rival una salida limpia." }
      ],
      miss: "Dudar en ese momento es lo mismo que no hacer nada: el rival sale jugando.",
      ideal: [[{ who: "you", to: [66, 13] }], [{ who: "ball", to: [68, 18] }, { who: "you", to: [68, 17] }]]
    },
    {
      id: "d02", posicion: "interior", fase: "defensa", tipo: "presion", principio: "Presión orientada",
      titulo: "El central rival sale jugando",
      situacion: "Bloque medio. El central derecho rival tiene el balón y su lateral está abierto en la banda. Tú eres el primero en presionar.",
      pregunta: "¿A dónde corres para presionar?",
      pista: "Presionar no es solo correr al balón: es tapar un camino y dejar abierto otro, el que te conviene.",
      you: [72, 20], ball: [86, 25],
      team: { DC: [76, 34], ED: [72, 48], MI: [60, 26], MCD: [54, 34], MD: [60, 44], LI: [50, 10] },
      rivals: { DCD: [86, 26], DCI: [88, 42], LD: [82, 10], LI: [84, 56], VD: [72, 12], MCD: [70, 30], MCI: [70, 40], POR: [101, 34] },
      zones: [
        { c: [80, 20], r: 5, score: 3, txt: "Salta al central con carrera curva, tapando la línea de pase al lateral. Lo obligas a jugar hacia dentro, donde están tus mediocentros esperando." },
        { c: [86, 26], r: 3, score: 2, txt: "Presionar de frente al central está bien, pero deja el pase fácil al lateral abierto." },
        { c: [82, 10], r: 4, score: 2, txt: "Marcar al lateral sin presionar al central: el central avanza libre con el balón." }
      ],
      miss: "Quedarte bajo deja que el central avance con el balón y rompa tu bloque.",
      ideal: [[{ who: "you", to: [80, 20] }], [{ who: "ball", to: [70, 30] }, { who: "you", to: [84, 24] }]]
    },
    {
      id: "d03", posicion: "interior", fase: "defensa", tipo: "ubicacion", principio: "Cobertura y basculación",
      titulo: "Tu lateral salió a presionar",
      situacion: "El lateral rival recibe en banda y tu lateral izquierdo sale a cerrarlo. El volante rival se mete en el espacio interior que quedó libre.",
      pregunta: "¿Dónde te ubicas?",
      pista: "Cuando un compañero sale, alguien tiene que cubrir el espacio que dejó.",
      you: [56, 16], ball: [50, 8],
      team: { LI: [44, 10], DCI: [34, 24], DCD: [32, 40], MCD: [42, 32], MI: [48, 28], DC: [62, 34] },
      rivals: { LD: [50, 8], VD: [44, 20], DCD: [68, 28], MCD: [52, 32], D1: [36, 30], D2: [38, 42] },
      zones: [
        { c: [46, 20], r: 6, score: 3, txt: "Basculación: cierras el espacio interior que dejó tu lateral y vigilas al volante rival. Cobertura hecha." },
        { c: [50, 8], r: 4, score: 2, txt: "Doblar la marca sobre el balón es útil, pero deja libre al volante que entra por dentro." },
        { c: [70, 14], r: 6, score: 0, txt: "Quedarte arriba esperando la contra deja un 2 contra 1 en tu banda." }
      ],
      miss: "Mirar la jugada sin moverte deja a tu lateral solo contra dos.",
      ideal: [[{ who: "you", to: [46, 20] }], [{ who: "R:VD", to: [40, 22] }, { who: "you", to: [42, 22] }]]
    },
    {
      id: "d04", posicion: "interior", fase: "defensa", tipo: "ubicacion", principio: "Repliegue",
      titulo: "El rival cambió de lado",
      situacion: "El rival cambia de orientación hacia tu banda. Su lateral derecho recibe solo y tu lateral está a 15 metros de él.",
      pregunta: "¿Qué haces?",
      pista: "El primer trabajo del extremo cuando el rival ataca por su lado es evitar el 2v1 contra su lateral.",
      you: [60, 24], ball: [56, 10],
      team: { LI: [40, 14], DCI: [30, 26], DCD: [30, 40], MCD: [40, 34], MI: [48, 28], MD: [46, 44], DC: [58, 36] },
      rivals: { LD: [56, 10], VD: [44, 16], DCD: [66, 28], MCD: [52, 30], D1: [32, 28], D2: [34, 40] },
      zones: [
        { c: [52, 12], r: 6, score: 3, txt: "Repliegue inmediato sobre el lateral rival: le quitas tiempo para centrar o encarar y tu lateral puede quedarse con el volante que entra." },
        { c: [46, 20], r: 5, score: 2, txt: "Cubrir el interior está bien, pero el lateral rival tiene todo el tiempo del mundo para centrar." },
        { c: [66, 20], r: 5, score: 0, txt: "Esperar arriba para la contra deja a tu lateral en un 2 contra 1 claro." }
      ],
      miss: "Caminar hacia atrás mirando la jugada es llegar tarde a todo.",
      ideal: [[{ who: "you", to: [52, 12] }], [{ who: "T:LI", to: [44, 18] }]]
    }
  ]
};
