// ============================================================
//  ESCENARIOS — Delantero centro (4-3-3)
//  "you" ocupa el rol DC.
// ============================================================
window.TACTICA.scenarios.push(
  {
    id: "dc01", posicion: "delantero", fase: "ataque", tipo: "desmarque", principio: "Desmarque de ruptura",
    titulo: "El volante levanta la cabeza",
    situacion: "Tu volante izquierdo recibe entre líneas y levanta la cabeza. Los dos centrales rivales te tienen de frente, con espacio a su espalda.",
    pregunta: "¿A dónde corres?",
    pista: "El pase al espacio se gana antes de que salga: arranca en diagonal, nunca en línea recta hacia el central.",
    you: [76, 34], ball: [57, 25],
    team: { MI: [56, 24], EI: [72, 10], ED: [72, 58], MCD: [46, 34], MD: [60, 46], LI: [62, 6] },
    rivals: { DCD: [88, 27], DCI: [88, 41], LD: [80, 12], LI: [80, 56], MCD: [62, 30], MCI: [64, 42], POR: [101, 34] },
    zones: [
      { c: [93, 32], r: 6, score: 3, txt: "Diagonal a la espalda del central derecho: el volante tiene tiempo para el pase filtrado y llegas de frente al arco." },
      { c: [86, 52], r: 5, score: 2, txt: "Abrirte a la banda deja espacio al extremo, pero tú quedas lejos del remate." },
      { c: [70, 30], r: 4, score: 1, txt: "Bajar al pie con los centrales a tres metros: recibes de espaldas y sin peligro." }
    ],
    miss: "Quedarte parado entre los dos centrales es no existir para el volante.",
    ideal: [[{ who: "you", to: [93, 32] }, { who: "ball", to: [94, 33] }]]
  },
  {
    id: "dc02", posicion: "delantero", fase: "ataque", tipo: "desmarque", principio: "Tercer hombre",
    titulo: "El pivote está presionado",
    situacion: "Tu pivote tiene el balón con el delantero rival encima. Tu volante izquierdo está listo para arrancar. El central rival te marca de cerca.",
    pregunta: "¿Qué movimiento haces?",
    pista: "Si bajas, el central te sigue. ¿Qué queda detrás de él?",
    you: [78, 34], ball: [45, 35],
    team: { MCD: [44, 34], MI: [58, 22], MD: [58, 46], EI: [70, 10], ED: [70, 58] },
    rivals: { D1: [50, 32], DCD: [84, 30], DCI: [88, 42], MCD: [60, 30], MCI: [62, 42], LD: [78, 12], LI: [78, 56], POR: [101, 34] },
    zones: [
      { c: [62, 32], r: 5, score: 3, txt: "Baja a recibir: arrastras al central contigo y abres el espacio para que el volante rompa. Se la tocas de primera al volante: tercer hombre." },
      { c: [92, 30], r: 6, score: 2, txt: "Carrera de ruptura: válida, pero el pivote presionado difícilmente mete ese pase largo." },
      { c: [80, 34], r: 3.5, score: 1, txt: "Quedarte pegado al central no le da ninguna opción al pivote presionado." }
    ],
    miss: "Moverte hacia la banda saca al 9 de la zona donde hace daño.",
    ideal: [[{ who: "you", to: [62, 32] }, { who: "R:DCD", to: [68, 31] }, { who: "ball", to: [62, 32] }], [{ who: "T:MI", to: [82, 28] }, { who: "ball", to: [82, 28] }]]
  },
  {
    id: "dc03", posicion: "delantero", fase: "ataque", tipo: "pase", principio: "Definición",
    titulo: "Mano a mano con el portero",
    situacion: "Te escapaste solo. El portero sale a achicarte y el central vuelve corriendo por tu derecha. Tu volante llega por detrás, libre.",
    pregunta: "Toca a dónde defines o a quién pasas.",
    pista: "Contra un portero que achica, el tiro raso al palo lejano es el más difícil de atajar.",
    you: [90, 30], ball: [91, 31],
    team: { MI: [80, 36], EI: [84, 10], ED: [82, 56], MCD: [64, 34] },
    rivals: { POR: [97, 33], DCD: [86, 24], DCI: [84, 44], LD: [78, 14], MCD: [72, 30], LI: [78, 54] },
    zones: [
      { c: [104, 38], r: 4, score: 3, txt: "Raso y cruzado al palo lejano: el portero que achica tiene que estirarse para llegar. Definición de 9." },
      { c: [80, 36], r: 5, score: 2, txt: "Pase atrás al volante libre: válido si el portero te cerró del todo, aunque aquí tienes el tiro." },
      { c: [104, 30], r: 3.5, score: 1, txt: "Al primer palo, el que el portero cubre primero." },
      { c: [96, 30], r: 3, score: 1, txt: "Regate al portero: espectacular si sale, pero el central ya llega." }
    ],
    miss: "Dudar con el portero saliendo le regala el balón en los pies.",
    ideal: [[{ who: "ball", to: [104, 38] }]]
  },
  {
    id: "dc04", posicion: "delantero", fase: "ataque", tipo: "desmarque", principio: "Atacar el primer palo",
    titulo: "Centro del extremo: tu zona",
    situacion: "Tu extremo izquierdo gana la línea y va a centrar. El central derecho rival te marca. El extremo derecho llega al segundo palo.",
    pregunta: "¿Dónde apareces?",
    pista: "El 9 ataca el primer palo por delante del central: si llega primero, remata; si no, arrastra al central y deja libre el segundo palo.",
    you: [88, 34], ball: [95, 7],
    team: { EI: [94, 6], ED: [92, 52], MI: [80, 28], MD: [76, 44], MCD: [64, 34], LI: [82, 6] },
    rivals: { DCD: [92, 30], DCI: [94, 44], LI: [92, 56], LD: [90, 12], MCD: [82, 34], MCI: [84, 44], POR: [101, 32] },
    zones: [
      { c: [97, 28], r: 4, score: 3, txt: "Ataca el primer palo por delante del central: llegas antes al centro raso o arrastras al central y liberas el segundo palo." },
      { c: [90, 36], r: 4, score: 2, txt: "Punto penal: zona útil, pero te quedas detrás del central." },
      { c: [86, 46], r: 5, score: 1, txt: "Irte al segundo palo junta a dos atacantes en la misma zona." }
    ],
    miss: "Quedarte en la frontal mientras el centro viene es no rematar.",
    ideal: [[{ who: "you", to: [97, 28] }, { who: "R:DCD", to: [95, 30] }, { who: "ball", to: [98, 28] }]]
  },
  {
    id: "dc05", posicion: "delantero", fase: "defensa", tipo: "presion", principio: "Presión orientada",
    titulo: "Presionar al central como 9",
    situacion: "Presión alta. El central derecho rival tiene el balón. Su compañero central está libre al otro lado y su pivote pide por dentro.",
    pregunta: "¿A dónde corres para presionar?",
    pista: "El 9 presiona tapando el pase al otro central: así obliga a jugar hacia un lado y el equipo sabe dónde cerrar.",
    you: [78, 32], ball: [86, 25],
    team: { EI: [76, 14], ED: [76, 54], MI: [66, 24], MD: [66, 44], MCD: [60, 34], LI: [56, 8], LD: [56, 60], DCI: [40, 26], DCD: [40, 42] },
    rivals: { DCD: [86, 26], DCI: [88, 42], MCD: [72, 32], LD: [82, 10], LI: [82, 58], VD: [70, 14], VI: [70, 54], MCI: [70, 44], POR: [101, 34] },
    zones: [
      { c: [84, 32], r: 4.5, score: 3, txt: "Carrera curva hacia el central, tapando la línea al otro central: lo obligas a jugar hacia su banda, donde tu extremo y tu lateral cierran." },
      { c: [86, 26], r: 3, score: 2, txt: "Presionar de frente: lo apuras, pero el pase al otro central sigue abierto y la presión se rompe." },
      { c: [73, 32], r: 4, score: 2, txt: "Marcar al pivote rival quita la salida por dentro, pero el central avanza libre." }
    ],
    miss: "Quedarte parado deja al central conducir hasta el medio campo.",
    ideal: [[{ who: "you", to: [84, 32] }], [{ who: "ball", to: [82, 10] }, { who: "T:EI", to: [80, 11] }]]
  },
  {
    id: "dc06", posicion: "delantero", fase: "defensa", tipo: "presion", principio: "Presión al portero",
    titulo: "Pase atrás al portero",
    situacion: "El central rival, presionado, devuelve el balón a su portero. El portero juega con los pies. Estás a 15 metros de él.",
    pregunta: "¿Qué haces?",
    pista: "Un portero presionado despeja largo. Un portero tranquilo sale jugando.",
    you: [82, 30], ball: [94, 32],
    team: { EI: [80, 12], ED: [80, 56], MI: [70, 24], MD: [70, 44], MCD: [62, 34], LI: [60, 8], LD: [60, 60] },
    rivals: { POR: [98, 33], DCD: [88, 24], DCI: [90, 44], LD: [84, 10], LI: [84, 58], MCD: [74, 30], MCI: [74, 42] },
    zones: [
      { c: [93, 31], r: 4.5, score: 3, txt: "Presiona al portero con carrera curva tapando el pase al central más cercano: lo obligas a despejar largo y tu equipo recupera en el medio." },
      { c: [87, 26], r: 4, score: 2, txt: "Quedarte sobre el central cercano tapa esa salida, pero el portero juega tranquilo al otro lado." },
      { c: [76, 30], r: 4, score: 0, txt: "Retroceder regala al rival una salida limpia desde el portero." }
    ],
    miss: "Mirar el pase atrás sin correr es la ocasión de presión más fácil desperdiciada.",
    ideal: [[{ who: "you", to: [93, 31] }], [{ who: "ball", to: [60, 34] }, { who: "T:MCD", to: [61, 34] }]]
  },
  {
    id: "dc07", posicion: "delantero", fase: "ataque", tipo: "pase", principio: "Jugar de espaldas",
    titulo: "Recibes de espaldas con el central pegado",
    situacion: "El pivote te juega al pie. Recibes de espaldas al arco con el central encima. Tu volante izquierdo llega de frente y el extremo izquierdo está abierto.",
    pregunta: "¿Qué haces con la pelota?",
    pista: "El 9 de espaldas no gira: devuelve a quien llega de cara y vuelve a arrancar.",
    you: [68, 34], ball: [66, 33],
    team: { MI: [60, 24], EI: [66, 12], ED: [70, 58], MCD: [48, 34], MD: [60, 46] },
    rivals: { DCD: [71, 34], DCI: [84, 42], MCD: [58, 30], MCI: [62, 44], LD: [76, 12], LI: [78, 56], POR: [101, 34] },
    zones: [
      { c: [60, 24], r: 4.5, score: 3, txt: "Descarga de primera al volante que llega de cara: él ve todo el campo, y tú giras y arrancas al espacio. Pivotear." },
      { c: [66, 12], r: 4.5, score: 2, txt: "Al extremo abierto: válido, aunque es un pase más largo de espaldas." },
      { c: [48, 34], r: 4, score: 2, txt: "Devolver al pivote conserva el balón, pero la jugada vuelve a empezar." }
    ],
    miss: "Girar con el central pegado en la espalda: pérdida y contra rival.",
    ideal: [[{ who: "ball", to: [60, 24] }], [{ who: "you", to: [84, 30] }, { who: "ball", to: [84, 30] }]]
  },
  {
    id: "dc08", posicion: "delantero", fase: "transicion", tipo: "desmarque", principio: "Fijar y liberar",
    titulo: "Contra: el volante conduce",
    situacion: "Contragolpe. Tu volante izquierdo conduce por el centro. Quedan los dos centrales rivales, que te miran a ti.",
    pregunta: "¿A dónde corres?",
    pista: "En la contra, tu carrera decide qué central se queda contigo y cuál enfrenta al que conduce.",
    you: [72, 36], ball: [59, 31],
    team: { MI: [58, 30], EI: [66, 12], ED: [68, 58], MCD: [44, 34], MD: [52, 48] },
    rivals: { DCD: [80, 30], DCI: [84, 42], MCD: [48, 30], LD: [50, 12], LI: [54, 58], POR: [101, 34] },
    zones: [
      { c: [84, 22], r: 6, score: 3, txt: "Diagonal hacia fuera, arrastrando al central derecho: el volante conduce al espacio que dejas y queda 1 contra 1 con el otro central." },
      { c: [70, 34], r: 4, score: 2, txt: "Pedir al pie frena la contra, pero conserva el balón con los centrales a seis metros." },
      { c: [84, 36], r: 4, score: 1, txt: "Correr recto hacia los dos centrales: chocas con los dos y no abres nada." }
    ],
    miss: "Quedarte parado mientras el volante conduce es dejarlo solo contra dos.",
    ideal: [[{ who: "you", to: [84, 22] }, { who: "R:DCD", to: [82, 26] }, { who: "T:MI", to: [74, 32] }, { who: "ball", to: [75, 33] }]]
  },
  {
    id: "dc09", posicion: "delantero", fase: "ataque", tipo: "desmarque", principio: "Córner a favor",
    titulo: "Córner a favor",
    situacion: "Córner desde la derecha a favor. Tus centrales ya subieron y ocupan el punto penal y el segundo palo. El rival defiende en zona.",
    pregunta: "¿Qué zona atacas?",
    pista: "En zona, el defensor espera. El atacante que llega en carrera siempre gana al que espera parado.",
    you: [88, 30], ball: [105, 68],
    team: { DCI: [90, 36], DCD: [92, 44], ED: [104, 67], MI: [84, 40], EI: [86, 52], MCD: [76, 36], LI: [80, 22] },
    rivals: { DCD: [97, 30], DCI: [98, 38], MCD: [97, 44], LD: [94, 28], LI: [94, 44], VD: [92, 50], MCI: [90, 40], D1: [86, 34], POR: [102, 36] },
    zones: [
      { c: [96, 36], r: 4, score: 3, txt: "Arranca tarde desde fuera y ataca el primer palo en carrera: llegas con impulso y el defensor en zona te espera parado." },
      { c: [90, 32], r: 3.5, score: 1, txt: "Esperar en el punto penal: el balón suele caer antes y los centrales ya ocupan esa zona." },
      { c: [100, 32], r: 3.5, score: 1, txt: "Pegado al portero, no tienes espacio para rematar y el portero lo atrapa por encima." }
    ],
    miss: "Fuera del área en un córner a favor desperdicias tu mejor remate de cabeza.",
    ideal: [[{ who: "you", to: [96, 36] }, { who: "ball", to: [97, 37] }]]
  },
  {
    id: "dc10", posicion: "delantero", fase: "transicion", tipo: "presion", principio: "Contrapresión",
    titulo: "Perdiste el balón en el área",
    situacion: "Intentaste el regate dentro del área y el central te la quitó. Tiene el balón en los pies, de espaldas a su arco, y su portero pide el pase atrás.",
    pregunta: "¿Qué haces?",
    pista: "Un central con el balón dentro de su área y un 9 encima es el momento más incómodo del fútbol para él.",
    you: [92, 34], ball: [93, 30],
    team: { MI: [82, 28], EI: [88, 12], ED: [88, 56], MCD: [70, 34], MD: [80, 44] },
    rivals: { DCD: [92, 28], DCI: [90, 42], LD: [88, 14], LI: [88, 54], MCD: [78, 30], MCI: [80, 44], POR: [100, 34] },
    zones: [
      { c: [92, 28], r: 4, score: 3, txt: "Presiona ya: estás a dos metros, el central está de espaldas y solo puede despejar o errar. Contrapresión dentro del área." },
      { c: [96, 31], r: 3.5, score: 2, txt: "Cerrar el pase al portero: lo obliga a despejar hacia afuera, pero no lo presionas en el balón." },
      { c: [84, 34], r: 4, score: 0, txt: "Retroceder tras perderla le regala al central tiempo para salir jugando." }
    ],
    miss: "Quedarte quejándote del regate perdido deja al central salir tranquilo.",
    ideal: [[{ who: "you", to: [92, 29] }], [{ who: "ball", to: [84, 12] }, { who: "T:EI", to: [85, 12] }]]
  }
);
