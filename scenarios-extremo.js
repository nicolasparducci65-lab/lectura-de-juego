// ============================================================
//  ESCENARIOS — Extremo izquierdo (4-3-3)
//  Perfil: extremo que juega pegado a la banda, encara y centra.
//  Mismo sistema de coordenadas que scenarios.js (105 x 68, atacamos a la derecha,
//  banda izquierda arriba). "you" ocupa el rol EI.
// ============================================================
window.TACTICA.scenarios.push(
  {
    id: "e01", posicion: "extremo", fase: "ataque", tipo: "conduccion", principio: "1 contra 1 por fuera",
    titulo: "Tienes al lateral de frente",
    situacion: "Recibes abierto en banda. El lateral rival te espera de frente, pero detrás de él hay espacio hasta la línea de fondo. El 9 está atento al primer palo.",
    pregunta: "Toca a dónde encaras o a quién pasas.",
    pista: "¿Dónde hay espacio: por fuera hacia la línea o por dentro donde esperan el central y el volante?",
    you: [72, 10], ball: [73, 11],
    team: { LI: [58, 12], MI: [60, 24], DC: [82, 32], ED: [76, 54], MCD: [50, 34] },
    rivals: { LD: [78, 13], VD: [68, 22], DCD: [88, 28], DCI: [90, 40], MCD: [72, 30] },
    zones: [
      { c: [89, 6], r: 6, score: 3, txt: "Encara por fuera hacia la línea de fondo: hay espacio, el lateral queda en desventaja y el 9 ataca el primer palo. Es la jugada del extremo." },
      { c: [80, 21], r: 5, score: 2, txt: "Encarar por dentro es posible, pero ahí te esperan el volante y el central. Más gente, menos espacio." },
      { c: [58, 12], r: 5, score: 1, txt: "Devolver al lateral cuando tienes un 1v1 con espacio es desperdiciar la ventaja." }
    ],
    miss: "Frenar y girar con el lateral de frente deja que llegue la ayuda del volante.",
    ideal: [[{ who: "you", to: [89, 6] }, { who: "ball", to: [90, 7] }], [{ who: "T:DC", to: [96, 30] }, { who: "ball", to: [96, 30] }]]
  },
  {
    id: "e02", posicion: "extremo", fase: "ataque", tipo: "pase", principio: "Centro atrás",
    titulo: "Llegaste a la línea de fondo",
    situacion: "Ganaste la línea de fondo. El área está llena: el central tiene al 9 encima y el lateral rival pegado al extremo derecho en el segundo palo. Tu interior llega libre al borde del área.",
    pregunta: "¿Qué centro eliges?",
    pista: "¿Quién está solo y de frente al arco?",
    you: [97, 8], ball: [97, 9],
    team: { MI: [86, 28], DC: [91, 31], ED: [94, 52], MCD: [72, 36], LI: [80, 6] },
    rivals: { DCD: [93, 29], DCI: [94, 40], LI: [92, 54], LD: [94, 14], MCD: [84, 34], MCI: [84, 44], POR: [101, 31] },
    zones: [
      { c: [86, 28], r: 5, score: 3, txt: "Centro atrás al borde del área: el interior llega de frente y los defensores están de espaldas, mirando la línea de fondo. El pase más difícil de defender." },
      { c: [94, 52], r: 5, score: 2, txt: "Centro al segundo palo: válido, pero el lateral rival está pegado al extremo y el balón viaja mucho." },
      { c: [91, 31], r: 4, score: 1, txt: "Centro al primer palo con el central encima del 9: casi siempre lo despejan." }
    ],
    miss: "Regatear en la línea de fondo con el área llena termina en saque de meta o en pérdida.",
    ideal: [[{ who: "ball", to: [86, 28] }], [{ who: "ball", to: [104, 36] }]]
  },
  {
    id: "e03", posicion: "extremo", fase: "ataque", tipo: "desmarque", principio: "Amplitud",
    titulo: "El pivote tiene la pelota y tiempo",
    situacion: "El mediocentro recibe con espacio y levanta la cabeza. Tienes ganas de meterte por dentro cerca del balón.",
    pregunta: "¿Dónde te ubicas para recibir?",
    pista: "El extremo que se abre hasta la raya estira a toda la defensa, aunque no reciba.",
    you: [62, 22], ball: [45, 34],
    team: { MCD: [44, 34], MI: [56, 24], DC: [72, 34], LI: [44, 10] },
    rivals: { LD: [72, 14], DCD: [80, 27], DCI: [80, 41], LI: [76, 54], VD: [58, 18], MCD: [56, 32], D1: [36, 28] },
    zones: [
      { c: [68, 4], r: 6, score: 3, txt: "Ábrete hasta la línea de banda: estiras la defensa y el lateral rival tiene que elegir entre seguirte o cuidar el espacio interior. Amplitud." },
      { c: [84, 12], r: 6, score: 2, txt: "Carrera a la espalda: válida, pero el pivote todavía no tiene línea clara para el pase largo." },
      { c: [64, 24], r: 5, score: 1, txt: "Meterte por dentro junta a todos en la misma zona y le facilita el trabajo a la defensa." }
    ],
    miss: "Quedarte entre dos aguas, ni abierto ni por dentro, no le sirve a nadie.",
    ideal: [[{ who: "you", to: [68, 4] }], [{ who: "ball", to: [68, 4] }, { who: "R:LD", to: [74, 10] }]]
  },
  {
    id: "e04", posicion: "extremo", fase: "ataque", tipo: "desmarque", principio: "Liberar la banda",
    titulo: "Tu lateral sube con el balón",
    situacion: "Tu lateral izquierdo conduce por la banda hacia ti. Si te quedas donde estás, van a chocar en el mismo carril.",
    pregunta: "¿Qué movimiento haces?",
    pista: "Dos jugadores en el mismo carril es uno de más. ¿Quién libera la banda?",
    you: [72, 10], ball: [62, 6],
    team: { LI: [60, 6], MI: [60, 26], DC: [76, 34], MCD: [48, 34] },
    rivals: { LD: [76, 12], VD: [64, 18], DCD: [84, 26], MCD: [68, 30] },
    zones: [
      { c: [80, 22], r: 6, score: 3, txt: "Diagonal por dentro, al espacio entre el lateral y el central: le dejas la banda al lateral y arrastras a tu marcador contigo." },
      { c: [86, 6], r: 5, score: 1, txt: "Seguir por fuera delante del lateral: los dos en el mismo carril, y un solo defensor los cubre." },
      { c: [60, 14], r: 5, score: 0, txt: "Bajar hacia el balón frena la subida del lateral." }
    ],
    miss: "Quedarte quieto obliga al lateral a frenar o a pasarte por encima.",
    ideal: [[{ who: "you", to: [80, 22] }, { who: "R:LD", to: [80, 18] }, { who: "T:LI", to: [76, 5] }, { who: "ball", to: [76, 6] }]]
  },
  {
    id: "e05", posicion: "extremo", fase: "ataque", tipo: "pase", principio: "Pared",
    titulo: "El lateral te cierra y el interior se ofrece",
    situacion: "Tienes el balón con el lateral rival bien parado de frente. Tu interior se ofrece libre por dentro y detrás del lateral rival hay espacio.",
    pregunta: "¿Qué haces con la pelota?",
    pista: "Una pared elimina a un defensor sin regatearlo.",
    you: [70, 12], ball: [71, 13],
    team: { MI: [66, 22], LI: [58, 8], DC: [76, 34], MCD: [50, 34] },
    rivals: { LD: [74, 12], VD: [60, 24], DCD: [86, 28], MCD: [70, 30] },
    zones: [
      { c: [66, 22], r: 5, score: 3, txt: "Pared: se la das al interior y arrancas a la espalda del lateral rival para recibirla de vuelta. El lateral queda eliminado sin regate." },
      { c: [58, 8], r: 5, score: 2, txt: "Devolver al lateral conserva el balón, pero la jugada vuelve a empezar." },
      { c: [84, 8], r: 5, score: 1, txt: "Regate contra un lateral bien parado y con ayuda cerca: es un 50/50." }
    ],
    miss: "Esperar con el balón parado deja que el volante rival llegue a doblar la marca.",
    ideal: [[{ who: "ball", to: [66, 22] }], [{ who: "you", to: [82, 8] }, { who: "ball", to: [82, 8] }]]
  },
  {
    id: "e06", posicion: "extremo", fase: "transicion", tipo: "desmarque", principio: "Transición ofensiva",
    titulo: "Recuperación: el lateral rival quedó arriba",
    situacion: "El mediocentro recupera el balón. El lateral rival se había sumado al ataque y está lejos de su zona.",
    pregunta: "¿A dónde corres?",
    pista: "Un extremo rápido en una contra es la mayor amenaza del equipo. ¿Dónde está el espacio?",
    you: [50, 14], ball: [40, 34],
    team: { MCD: [40, 34], DC: [58, 34], MI: [44, 24], MD: [42, 44], ED: [52, 56], LI: [30, 10] },
    rivals: { LD: [54, 8], DCD: [62, 28], DCI: [64, 40], LI: [56, 56], VD: [42, 18], MCD: [36, 36], MCI: [40, 46], D1: [26, 30], D2: [30, 40] },
    zones: [
      { c: [76, 8], r: 7, score: 3, txt: "Carrera profunda por tu banda: el lateral rival quedó arriba y tienes 25 metros libres. El pivote busca el pase largo." },
      { c: [56, 22], r: 5, score: 2, txt: "Apoyo en diagonal para conducir rápido: también sirve, pero el rival gana un segundo para volver." },
      { c: [42, 22], r: 5, score: 0, txt: "Bajar a recibir cerca del balón frena la contra." }
    ],
    miss: "Quedarte parado en el momento de la recuperación desperdicia la ventaja.",
    ideal: [[{ who: "you", to: [76, 8] }, { who: "ball", to: [76, 8] }]]
  },
  {
    id: "e07", posicion: "extremo", fase: "ataque", tipo: "desmarque", principio: "Segundo palo",
    titulo: "El centro viene del otro lado",
    situacion: "El extremo derecho va a centrar. Estás abierto en tu banda, lejos del área.",
    pregunta: "¿Dónde apareces?",
    pista: "El extremo contrario siempre llega al segundo palo. Siempre.",
    you: [76, 14], ball: [92, 60],
    team: { ED: [92, 60], DC: [92, 36], MI: [80, 30], MD: [84, 44], LD: [82, 62] },
    rivals: { LD: [86, 24], DCD: [93, 33], DCI: [95, 41], LI: [90, 52], VI: [86, 58], MCD: [80, 36], POR: [102, 36] },
    zones: [
      { c: [91, 22], r: 6, score: 3, txt: "Segundo palo: si el centro pasa al 9 y a los centrales, llegas solo. El lateral rival mira el balón y te pierde." },
      { c: [84, 32], r: 5, score: 2, txt: "Borde del área para el rechace: zona útil, pero no amenazas el arco directamente." },
      { c: [72, 12], r: 5, score: 0, txt: "Quedarte abierto cuando el centro viene del otro lado es no participar de la jugada." }
    ],
    miss: "Caminar hacia el área cuando el balón ya va en el aire es llegar tarde.",
    ideal: [[{ who: "you", to: [91, 22] }, { who: "ball", to: [92, 25] }]]
  },
  {
    id: "e08", posicion: "extremo", fase: "defensa", tipo: "ubicacion", principio: "Acompañar al lateral rival",
    titulo: "El lateral rival se suma al ataque",
    situacion: "El rival ataca por tu banda. Su lateral derecho sube por fuera con el balón y tu lateral izquierdo ya está ocupado con el volante rival.",
    pregunta: "¿Qué haces?",
    pista: "Cuando el lateral rival sube, es tu marca. Si no lo sigues, tu lateral queda 2 contra 1.",
    you: [66, 16], ball: [60, 8],
    team: { LI: [46, 12], DCI: [30, 26], DCD: [30, 40], LD: [34, 58], MCD: [42, 32], MI: [50, 26], DC: [60, 36] },
    rivals: { LD: [60, 8], VD: [48, 16], DCD: [68, 28], MCD: [54, 32], D1: [36, 30], D2: [38, 42], VI: [50, 54] },
    zones: [
      { c: [54, 10], r: 6, score: 3, txt: "Acompaña al lateral rival hacia atrás: es tu marca cuando sube. Tu lateral se queda con el volante y no hay 2 contra 1." },
      { c: [46, 20], r: 5, score: 2, txt: "Bascular por dentro ayuda, pero el lateral rival sigue libre por la banda para centrar." },
      { c: [70, 12], r: 5, score: 0, txt: "Quedarte arriba esperando la contra deja a tu lateral solo contra dos." }
    ],
    miss: "Mirar la jugada sin correr es dejar que ataquen en superioridad por tu lado.",
    ideal: [[{ who: "you", to: [54, 10] }, { who: "R:LD", to: [52, 6] }, { who: "ball", to: [52, 7] }]]
  },
  {
    id: "e09", posicion: "extremo", fase: "defensa", tipo: "presion", principio: "Presión orientada",
    titulo: "Eres el primer defensor",
    situacion: "Presión alta. El central derecho rival tiene el balón y su lateral está abierto en la banda esperando el pase.",
    pregunta: "¿A dónde corres para presionar?",
    pista: "Presionar es tapar un camino y dejar abierto el que te conviene.",
    you: [72, 18], ball: [86, 25],
    team: { DC: [78, 34], ED: [74, 50], MI: [62, 24], MCD: [56, 34], MD: [62, 44], LI: [54, 8] },
    rivals: { DCD: [86, 26], DCI: [88, 42], LD: [82, 8], LI: [84, 56], VD: [72, 10], MCD: [72, 30], MCI: [72, 40], POR: [101, 34] },
    zones: [
      { c: [81, 18], r: 5, score: 3, txt: "Carrera curva hacia el central tapando la línea de pase al lateral: lo obligas a jugar hacia dentro, donde esperan tus mediocentros." },
      { c: [86, 26], r: 3, score: 2, txt: "Presionar de frente está bien, pero deja el pase fácil al lateral." },
      { c: [82, 8], r: 4, score: 2, txt: "Marcar al lateral sin presionar al central deja que el central avance con el balón." }
    ],
    miss: "Quedarte bajo deja que el central conduzca y rompa tu línea de presión.",
    ideal: [[{ who: "you", to: [81, 18] }], [{ who: "ball", to: [72, 30] }, { who: "you", to: [84, 23] }]]
  },
  {
    id: "e10", posicion: "extremo", fase: "defensa", tipo: "ubicacion", principio: "Bloque bajo",
    titulo: "Defendiendo cerca de tu área",
    situacion: "El rival tiene el balón en tu campo. El volante rival lo mueve por dentro y su lateral derecho está abierto en la banda, listo para recibir y centrar.",
    pregunta: "¿Dónde te ubicas?",
    pista: "En bloque bajo el extremo defiende como un segundo lateral.",
    you: [40, 14], ball: [38, 38],
    team: { LI: [28, 12], DCI: [24, 28], DCD: [24, 40], LD: [28, 56], MCD: [32, 34], MI: [36, 24], MD: [36, 46], DC: [48, 34], ED: [40, 54] },
    rivals: { MCI: [38, 38], LD: [34, 8], VD: [30, 18], DCD: [52, 30], MCD: [44, 30], D1: [28, 32], D2: [30, 44], VI: [34, 56], LI: [40, 60] },
    zones: [
      { c: [34, 10], r: 5, score: 3, txt: "Cierra al lateral rival: en bloque bajo el extremo defiende la banda como un segundo lateral y evita el centro." },
      { c: [42, 22], r: 5, score: 2, txt: "Cerrar por dentro suma gente al medio, pero deja libre el centro desde la banda." },
      { c: [56, 12], r: 5, score: 0, txt: "Esperar la contra con el rival en tu área es dejar a tu equipo con uno menos." }
    ],
    miss: "Quedarte en tierra de nadie no cubre ni la banda ni el interior.",
    ideal: [[{ who: "you", to: [34, 10] }], [{ who: "ball", to: [34, 8] }, { who: "R:LD", to: [33, 8] }, { who: "you", to: [31, 11] }]]
  },
  {
    id: "e11", posicion: "extremo", fase: "transicion", tipo: "presion", principio: "Contrapresión",
    titulo: "Perdiste el balón en el regate",
    situacion: "Intentaste el regate y el lateral rival te la quitó. Arranca con el balón y tu lateral izquierdo está subido, lejos de su zona.",
    pregunta: "¿Qué haces?",
    pista: "El que pierde el balón es el primero que tiene que recuperarlo.",
    you: [72, 13], ball: [77, 8],
    team: { LI: [64, 4], MI: [62, 24], MCD: [48, 34], DCI: [26, 26], DC: [78, 34] },
    rivals: { LD: [76, 7], VD: [50, 16], DCD: [86, 28], MCD: [66, 30], D1: [44, 30] },
    zones: [
      { c: [76, 7], r: 5, score: 3, txt: "Contrapresión inmediata: estás a dos metros y el rival todavía no levantó la cabeza. Recuperas o al menos lo frenas." },
      { c: [66, 16], r: 5, score: 2, txt: "Cerrar la línea de pase al volante ayuda, pero el lateral rival sale conduciendo libre por la banda." },
      { c: [80, 12], r: 5, score: 0, txt: "Quedarte parado lamentando la pérdida regala la contra." }
    ],
    miss: "Dudar un segundo es lo mismo que no hacer nada.",
    ideal: [[{ who: "you", to: [75, 9] }], [{ who: "R:LD", to: [71, 5] }, { who: "ball", to: [71, 5] }, { who: "you", to: [72, 7] }]]
  },
  {
    id: "e12", posicion: "extremo", fase: "ataque", tipo: "pase", principio: "Desdoblamiento por dentro",
    titulo: "Tu lateral entra por dentro",
    situacion: "Tienes el balón pegado a la banda con el lateral rival de frente. Tu lateral izquierdo corre por dentro, entre el lateral y el central rival.",
    pregunta: "¿A dónde juegas?",
    pista: "La carrera por dentro del lateral deja al central sin saber si salir o quedarse.",
    you: [74, 6], ball: [75, 7],
    team: { LI: [72, 18], MI: [60, 26], DC: [80, 34], MCD: [50, 34] },
    rivals: { LD: [78, 8], VD: [66, 20], DCD: [86, 26], DCI: [88, 40], MCD: [70, 32] },
    zones: [
      { c: [85, 22], r: 6, score: 3, txt: "Pase al lateral que entra por dentro: recibe en la zona entre lateral y central, de cara al arco, y el central no sabe si salir." },
      { c: [60, 26], r: 5, score: 2, txt: "Pase atrás al interior: seguro, pero desperdicias la carrera de tu lateral." },
      { c: [88, 4], r: 5, score: 1, txt: "Encarar por fuera con el lateral rival bien parado y tu lateral ya por dentro: un 1v1 sin apoyo." }
    ],
    miss: "Frenar la jugada deja que la carrera del lateral termine en fuera de juego o en nada.",
    ideal: [[{ who: "T:LI", to: [85, 22] }, { who: "ball", to: [85, 22] }], [{ who: "ball", to: [92, 30] }]]
  }
);
