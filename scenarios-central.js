// ============================================================
//  ESCENARIOS — Central izquierdo (4-3-3)
//  "you" ocupa el rol DCI. El central derecho se genera como espejo.
// ============================================================
window.TACTICA.scenarios.push(
  {
    id: "c01", posicion: "central", fase: "ataque", tipo: "pase", principio: "Salida de balón",
    titulo: "Salida con el delantero encima",
    situacion: "Recibes del portero. El delantero rival viene a presionarte y el otro delantero tapa al pivote. Tu lateral izquierdo está libre y abierto.",
    pregunta: "¿A dónde juegas?",
    pista: "Dos delanteros no pueden tapar a tres jugadores. ¿Quién quedó libre?",
    you: [22, 26], ball: [23, 27],
    team: { POR: [5, 34], LI: [30, 8], DCD: [22, 44], LD: [30, 60], MCD: [34, 34], MI: [46, 22], MD: [46, 46], DC: [66, 34] },
    rivals: { D1: [28, 28], D2: [34, 36], VD: [40, 14], VI: [42, 56], MCD: [48, 30], MCI: [50, 42], LD: [60, 12], DCD: [72, 28] },
    zones: [
      { c: [30, 8], r: 5, score: 3, txt: "Pase al lateral libre: rompes la presión por fuera y el lateral recibe con todo el campo de frente." },
      { c: [5, 34], r: 5, score: 2, txt: "Volver al portero para cambiar de lado es correcto si no ves nada, aunque aquí tenías al lateral libre." },
      { c: [34, 34], r: 4, score: 1, txt: "El pivote está tapado por el segundo delantero: pase fácil de interceptar frente a tu área." },
      { c: [66, 34], r: 6, score: 1, txt: "Pelotazo al 9: evita el riesgo, pero regalas el balón." }
    ],
    miss: "Conducir hacia el delantero que te presiona es entregarle el balón.",
    ideal: [[{ who: "ball", to: [30, 8] }], [{ who: "ball", to: [46, 22] }]]
  },
  {
    id: "c02", posicion: "central", fase: "defensa", tipo: "ubicacion", principio: "Marcar al delantero de espaldas",
    titulo: "El 9 rival va a recibir de espaldas",
    situacion: "El pivote rival va a jugar al pie de su delantero, que está de espaldas a tu arco. Estás a cuatro metros de él.",
    pregunta: "¿Qué haces?",
    pista: "Un delantero de espaldas con el central pegado no puede girar. Con espacio, sí.",
    you: [28, 28], ball: [48, 32],
    team: { POR: [5, 34], LI: [34, 10], DCD: [26, 42], LD: [34, 58], MCD: [38, 36], MI: [44, 22], MD: [46, 46] },
    rivals: { MCD: [48, 32], D1: [33, 30], D2: [30, 42], VD: [42, 12], VI: [44, 56], MCI: [50, 44] },
    zones: [
      { c: [32, 30], r: 3.5, score: 3, txt: "Pégate al delantero antes de que controle: lo recibes de espaldas y no puede girar. Firme, sin falta." },
      { c: [38, 31], r: 3.5, score: 2, txt: "Anticipar por delante: brillante si llegas al balón, pero si no, el delantero queda solo contra el portero." },
      { c: [24, 28], r: 4, score: 1, txt: "Retroceder le deja espacio para controlar, girar y encararte." }
    ],
    miss: "Mirar el pase sin moverte es regalarle el control y el giro.",
    ideal: [[{ who: "you", to: [32, 30] }, { who: "ball", to: [34, 30] }]]
  },
  {
    id: "c03", posicion: "central", fase: "defensa", tipo: "ubicacion", principio: "Cobertura al lateral",
    titulo: "Regatearon a tu lateral",
    situacion: "El volante rival acaba de regatear a tu lateral izquierdo por la banda y se va hacia la línea de fondo.",
    pregunta: "¿Dónde te ubicas?",
    pista: "Cuando un compañero es superado, el central cierra hacia su palo, no hacia el balón.",
    you: [22, 26], ball: [27, 9],
    team: { POR: [5, 34], LI: [33, 12], DCD: [20, 40], LD: [26, 56], MCD: [30, 34], MI: [38, 22], MD: [36, 46] },
    rivals: { VD: [28, 8], D1: [16, 32], D2: [18, 42], MCD: [36, 32], MCI: [34, 44], VI: [30, 56], LD: [40, 14] },
    zones: [
      { c: [12, 20], r: 5, score: 3, txt: "Cierra en diagonal hacia el palo cercano: cobertura al lateral y le tapas el centro raso. El central derecho se queda con los delanteros." },
      { c: [22, 28], r: 4, score: 1, txt: "Quedarte en tu posición deja la banda libre hasta la línea de fondo." },
      { c: [27, 12], r: 4, score: 0, txt: "Salir a la banda a buscar el balón abandona el centro del área con dos delanteros adentro." }
    ],
    miss: "Correr hacia el balón sin cerrar el palo deja el camino directo al arco.",
    ideal: [[{ who: "you", to: [12, 20] }, { who: "R:VD", to: [16, 6] }, { who: "ball", to: [17, 7] }]]
  },
  {
    id: "c04", posicion: "central", fase: "defensa", tipo: "ubicacion", principio: "Línea defensiva",
    titulo: "El balón va hacia atrás: manda la línea",
    situacion: "El rival no encuentra pase y devuelve el balón a su central. Eres quien manda la línea de cuatro. El delantero rival está al límite.",
    pregunta: "¿Qué haces?",
    pista: "El central que manda la línea sube primero y los demás lo siguen.",
    you: [34, 26], ball: [58, 30],
    team: { POR: [5, 34], LI: [34, 10], DCD: [34, 42], LD: [34, 58], MCD: [44, 34], MI: [50, 22], MD: [50, 46], EI: [56, 10] },
    rivals: { DCD: [66, 28], MCD: [52, 34], D1: [38, 30], D2: [40, 40], VD: [48, 14], VI: [50, 54], LD: [54, 8] },
    zones: [
      { c: [43, 26], r: 5, score: 3, txt: "Sube con el pase hacia atrás y arrastra la línea contigo: el delantero rival queda en fuera de juego y ganas 10 metros." },
      { c: [34, 26], r: 4, score: 1, txt: "Quedarte quieto: no pierdes, pero el delantero sigue habilitado y el rival tiene campo." },
      { c: [26, 26], r: 5, score: 0, txt: "Retroceder sin presión en el balón regala espacio y permite el siguiente pase." }
    ],
    miss: "Moverte hacia la banda no corrige la altura de la línea.",
    ideal: [[{ who: "ball", to: [66, 28] }, { who: "you", to: [43, 26] }, { who: "T:LI", to: [43, 10] }, { who: "T:DCD", to: [43, 42] }, { who: "T:LD", to: [43, 58] }]]
  },
  {
    id: "c05", posicion: "central", fase: "defensa", tipo: "pase", principio: "Despeje orientado",
    titulo: "Balón largo que cae sobre ti",
    situacion: "El rival mete un pelotazo largo y el balón viene hacia ti. El delantero rival te presiona para disputar el cabezazo.",
    pregunta: "¿Hacia dónde despejas?",
    pista: "Un despeje al centro es un balón para el rival. Un despeje a la banda es un balón para nadie, o para tu extremo.",
    you: [26, 24], ball: [36, 26],
    team: { POR: [5, 34], LI: [30, 8], DCD: [24, 42], LD: [30, 58], MCD: [34, 36], MI: [42, 20], MD: [42, 46], EI: [52, 8] },
    rivals: { D1: [30, 27], D2: [30, 40], MCD: [42, 32], MCI: [44, 44], VD: [40, 12], VI: [46, 56], LD: [56, 10] },
    zones: [
      { c: [44, 6], r: 7, score: 3, txt: "Despeje de cabeza hacia la banda, lejos del centro: si lo gana tu extremo, mejor; si no, el rival lo recupera lejos del arco." },
      { c: [26, 24], r: 3.5, score: 1, txt: "Controlar con el delantero encima es jugar con fuego a 25 metros de tu arco." },
      { c: [38, 34], r: 6, score: 0, txt: "Despejar al centro, hacia donde está el pivote rival: les devuelves el balón en la zona más peligrosa." }
    ],
    miss: "Dejar botar el balón esperando a ver qué pasa es regalárselo al delantero.",
    ideal: [[{ who: "ball", to: [44, 6] }, { who: "T:EI", to: [46, 7] }]]
  },
  {
    id: "c06", posicion: "central", fase: "transicion", tipo: "ubicacion", principio: "Temporizar",
    titulo: "Dos contra uno en tu zona",
    situacion: "Contra rival. El delantero conduce hacia ti y el segundo delantero corre a su lado. Tu otro central viene cerrando y el pivote vuelve, pero están a unos segundos.",
    pregunta: "¿Qué haces?",
    pista: "En inferioridad no se entra: se frena al rival hasta que llegue la ayuda.",
    you: [24, 28], ball: [33, 33],
    team: { POR: [5, 34], DCD: [26, 44], LI: [44, 12], LD: [40, 58], MCD: [40, 36], MI: [50, 24], MD: [48, 46] },
    rivals: { D1: [34, 33], D2: [34, 44], MCD: [46, 34], VD: [48, 14], VI: [46, 56], MCI: [52, 46] },
    zones: [
      { c: [20, 31], r: 4, score: 3, txt: "Retrocede de frente al balón, perfilado, mostrando la banda y sin entrar: ganas tiempo hasta que lleguen el otro central y el pivote." },
      { c: [33, 33], r: 3.5, score: 1, txt: "Entrar al portador en un 2 contra 1: si te elimina, el otro delantero queda solo." },
      { c: [30, 44], r: 4, score: 0, txt: "Irte con el segundo delantero deja al portador libre hacia el arco." }
    ],
    miss: "Correr hacia la banda abre el centro para la pared entre los dos delanteros.",
    ideal: [[{ who: "you", to: [20, 31] }, { who: "R:D1", to: [26, 33] }, { who: "ball", to: [27, 34] }, { who: "T:DCD", to: [22, 42] }, { who: "T:MCD", to: [30, 36] }]]
  },
  {
    id: "c07", posicion: "central", fase: "transicion", tipo: "pase", principio: "Transición ofensiva",
    titulo: "Recuperas y el rival está desordenado",
    situacion: "Acabas de robar el balón. El lateral rival se quedó subido y tu extremo izquierdo está solo en banda. El pivote se ofrece cerca.",
    pregunta: "¿Cuál es tu primer pase?",
    pista: "El primer pase tras recuperar decide si hay contra.",
    you: [26, 26], ball: [27, 27],
    team: { POR: [5, 34], LI: [30, 10], DCD: [24, 42], LD: [30, 58], MCD: [34, 34], MI: [44, 22], MD: [44, 46], EI: [56, 10], DC: [60, 34] },
    rivals: { D1: [30, 30], D2: [28, 40], MCD: [40, 32], MCI: [42, 44], VD: [36, 14], VI: [44, 56], LD: [66, 20], DCD: [70, 28], DCI: [70, 40] },
    zones: [
      { c: [56, 10], r: 6, score: 3, txt: "Pase directo al extremo libre: el lateral rival quedó arriba y la contra arranca antes de que vuelva." },
      { c: [34, 34], r: 4, score: 2, txt: "Al pivote: sale limpio, pero la contra pierde velocidad." },
      { c: [60, 34], r: 6, score: 1, txt: "Pelotazo al 9 con dos centrales encima: regalas una recuperación valiosa." }
    ],
    miss: "Despejar después de recuperar limpio es tirar a la basura el balón robado.",
    ideal: [[{ who: "ball", to: [56, 10] }], [{ who: "T:EI", to: [76, 8] }, { who: "ball", to: [76, 8] }]]
  },
  {
    id: "c08", posicion: "central", fase: "defensa", tipo: "ubicacion", principio: "Córner en zona",
    titulo: "Córner en contra: tu zona",
    situacion: "Córner desde tu izquierda. Defienden en zona. Eres el más alto del equipo y el rival más peligroso de cabeza ataca el primer palo.",
    pregunta: "¿Dónde te ubicas?",
    pista: "En zona, el central más fuerte de cabeza cubre la zona donde cae la mayoría de los centros.",
    you: [12, 24], ball: [0, 0],
    team: { POR: [3, 34], LI: [2, 30], LD: [2, 38], DCD: [6, 36], MCD: [6, 44], MI: [10, 40], MD: [12, 48], EI: [16, 30], DC: [50, 34], ED: [14, 54] },
    rivals: { VD: [0, 1], DCD: [8, 31], DCI: [10, 40], D1: [12, 30], D2: [14, 44], MCD: [16, 38], LD: [20, 20], MCI: [22, 44], VI: [24, 28] },
    zones: [
      { c: [6, 28], r: 3.5, score: 3, txt: "Zona del primer palo, en el borde del área chica: ahí caen la mayoría de los centros y ahí ataca su mejor cabeceador. Primero al balón." },
      { c: [12, 34], r: 4, score: 2, txt: "Zona del punto penal: útil, pero lejos del primer palo donde está el mayor peligro." },
      { c: [2, 34], r: 3, score: 0, txt: "En la línea estorbas al portero y no disputas ningún balón aéreo." }
    ],
    miss: "Fuera del área en un córner en contra dejas a tu equipo con uno menos en el aire.",
    ideal: [[{ who: "you", to: [6, 28] }], [{ who: "ball", to: [7, 29] }], [{ who: "ball", to: [30, 10] }]]
  }
);
