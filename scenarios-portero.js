// ============================================================
//  ESCENARIOS — Portero (4-3-3)
//  "you" ocupa el rol POR. Nuestro arco está en x = 0.
// ============================================================
window.TACTICA.scenarios.push(
  {
    id: "por01", posicion: "portero", fase: "ataque", tipo: "pase", principio: "Salida corta",
    titulo: "Tienes el balón en los pies y te presionan",
    situacion: "Recibes un pase atrás. Los dos delanteros rivales suben a presionar: uno va al central izquierdo y el otro tapa al pivote. El central derecho queda libre.",
    pregunta: "¿A dónde juegas?",
    pista: "La presión siempre deja a alguien libre. Búscalo antes de que llegue el siguiente rival.",
    you: [4, 34], ball: [6, 33],
    team: { DCI: [14, 22], DCD: [16, 46], LI: [26, 8], LD: [28, 60], MCD: [26, 34], MI: [40, 22], MD: [40, 46], EI: [60, 12], DC: [66, 34], ED: [60, 56] },
    rivals: { D1: [14, 27], D2: [22, 36], VD: [34, 12], VI: [36, 56], MCD: [40, 30], MCI: [42, 42], LD: [56, 14], LI: [56, 54], DCD: [70, 28], DCI: [70, 40] },
    zones: [
      { c: [16, 46], r: 5, score: 3, txt: "Pase al central derecho libre: rompes la primera línea de presión y el equipo sale jugando de cara." },
      { c: [28, 60], r: 5, score: 2, txt: "Pase largo al lateral derecho: también sale limpio, aunque el balón viaja más y da tiempo a bascular." },
      { c: [66, 34], r: 7, score: 1, txt: "Pelotazo al 9: evitas el riesgo, pero regalas la posesión en un 50/50 con dos centrales." },
      { c: [14, 22], r: 4, score: 0, txt: "El central izquierdo tiene al delantero encima: es el pase que el rival quiere que des." }
    ],
    miss: "Conducir con dos delanteros encima dentro de tu área es la pérdida más cara del fútbol.",
    ideal: [[{ who: "ball", to: [16, 46] }], [{ who: "ball", to: [40, 46] }]]
  },
  {
    id: "por02", posicion: "portero", fase: "defensa", tipo: "ubicacion", principio: "Achicar",
    titulo: "Mano a mano",
    situacion: "El delantero rival se escapó solo y viene conduciendo hacia ti por el centro. Está a 25 metros del arco.",
    pregunta: "¿Dónde te ubicas?",
    pista: "Cuanto más cerca del delantero, menos arco ve. Pero si sales demasiado, te la pican.",
    you: [4, 34], ball: [27, 33],
    team: { DCI: [20, 22], DCD: [22, 46], LI: [34, 10], LD: [36, 58], MCD: [30, 36], MI: [44, 24], MD: [44, 44] },
    rivals: { D1: [28, 33], D2: [26, 44], VD: [40, 14], VI: [42, 54], MCD: [48, 30], MCI: [50, 40] },
    zones: [
      { c: [11, 34], r: 4, score: 3, txt: "Sal a achicar hasta el borde del área chica, de pie y con los brazos abiertos: le quitas arco y lo obligas a decidir rápido. No te tires antes de tiempo." },
      { c: [3, 34], r: 4, score: 1, txt: "Quedarte en la línea le deja ver todo el arco: el delantero elige el palo con calma." },
      { c: [20, 34], r: 5, score: 0, txt: "Salir hasta la frontal con el delantero ya controlando es regalar la picada o el regate." }
    ],
    miss: "Moverte hacia un costado te saca de la línea del balón y abre el arco.",
    ideal: [[{ who: "you", to: [11, 34] }, { who: "R:D1", to: [18, 33] }, { who: "ball", to: [19, 33] }]]
  },
  {
    id: "por03", posicion: "portero", fase: "defensa", tipo: "ubicacion", principio: "Cubrir el segundo palo",
    titulo: "Centro al segundo palo",
    situacion: "El volante rival centra desde la banda izquierda hacia el segundo palo, donde llega un rival por detrás. Estás pegado al primer palo.",
    pregunta: "¿Dónde te ubicas?",
    pista: "El balón viaja: tú también. El portero acompaña el centro con pasos cortos.",
    you: [3, 28], ball: [18, 8],
    team: { DCI: [8, 30], DCD: [8, 42], LI: [16, 12], LD: [10, 54], MCD: [14, 36], MI: [20, 22], MD: [18, 46] },
    rivals: { VD: [18, 8], D1: [10, 32], D2: [9, 44], LD: [22, 16], MCD: [22, 34], MCI: [20, 44], VI: [14, 56] },
    zones: [
      { c: [4, 38], r: 4, score: 3, txt: "Un paso hacia el centro y otro hacia el segundo palo, siguiendo el vuelo del balón: llegas a cubrir el remate del que entra por atrás." },
      { c: [10, 30], r: 4, score: 1, txt: "Salir a cortar un centro que va al segundo palo es llegar tarde y dejar el arco vacío." },
      { c: [3, 27], r: 3, score: 0, txt: "Quedarte en el primer palo: el centro te pasa por encima y el rival remata a arco libre." }
    ],
    miss: "Dudar entre salir y quedarte es lo peor: ni cortas ni cubres.",
    ideal: [[{ who: "you", to: [4, 38] }, { who: "R:LD", to: [8, 42] }, { who: "ball", to: [7, 41] }]]
  },
  {
    id: "por04", posicion: "portero", fase: "defensa", tipo: "ubicacion", principio: "Tiro libre con barrera",
    titulo: "Tiro libre frontal",
    situacion: "Tiro libre a 22 metros, ligeramente a la izquierda. Tu barrera de cuatro cubre el palo izquierdo. El lado derecho del arco depende de ti.",
    pregunta: "¿Dónde te ubicas?",
    pista: "La barrera cubre un lado. Tú cubres el otro, sin dejar de ver el balón.",
    you: [3, 34], ball: [22, 30],
    team: { DCI: [13, 27], DCD: [13, 30], MCD: [13, 33], MI: [13, 36], LD: [8, 44], LI: [10, 24], MD: [18, 40] },
    rivals: { MCD: [23, 30], D1: [10, 38], D2: [9, 45], VD: [16, 22], VI: [20, 46], LD: [24, 18] },
    zones: [
      { c: [3, 39], r: 3, score: 3, txt: "Ubícate cubriendo el lado que la barrera deja libre, viendo el balón por fuera de ella. Tu lado es tu responsabilidad; el otro, de la barrera." },
      { c: [3, 34], r: 2.5, score: 2, txt: "En el centro cubres poco de cada lado: llegas a los tiros medios, pero no a los ajustados." },
      { c: [3, 29], r: 3, score: 0, txt: "Detrás de la barrera no ves el balón y dejas el lado abierto libre." }
    ],
    miss: "Adelantarte antes del golpe te deja sin tiempo de reacción.",
    ideal: [[{ who: "you", to: [3, 39] }], [{ who: "ball", to: [1, 40] }, { who: "you", to: [2, 40] }]]
  },
  {
    id: "por05", posicion: "portero", fase: "ataque", tipo: "pase", principio: "Decidir bajo presión",
    titulo: "Pase atrás con el delantero encima",
    situacion: "Tu lateral te devuelve el balón y el delantero rival ya viene a presionarte. Tienes un toque. El central derecho está libre, el pivote marcado.",
    pregunta: "¿Qué haces con la pelota?",
    pista: "Con un rival a cinco metros, el primer pase seguro es el bueno. No hay tiempo para el segundo.",
    you: [4, 34], ball: [8, 30],
    team: { DCI: [12, 20], DCD: [14, 46], LI: [16, 8], LD: [24, 60], MCD: [22, 34], MI: [38, 22], MD: [38, 46], DC: [62, 34] },
    rivals: { D1: [12, 30], D2: [24, 36], VD: [18, 12], VI: [34, 56], MCD: [38, 30], MCI: [40, 44], LD: [50, 14], DCD: [66, 28], DCI: [66, 40] },
    zones: [
      { c: [14, 46], r: 5, score: 3, txt: "Pase de primera al central derecho libre: sale limpio y la presión queda rota." },
      { c: [62, 34], r: 7, score: 2, txt: "Despeje largo: seguro con el delantero encima, aunque regalas la posesión." },
      { c: [16, 8], r: 4, score: 1, txt: "Al lateral marcado por el volante: lo recibe de espaldas y pegado a la línea. Peligro." },
      { c: [22, 34], r: 4, score: 0, txt: "El pivote está marcado: ese pase lo intercepta el segundo delantero." }
    ],
    miss: "Controlar y pensar con el delantero a cinco metros termina en gol en contra.",
    ideal: [[{ who: "ball", to: [14, 46] }], [{ who: "ball", to: [24, 60] }]]
  },
  {
    id: "por06", posicion: "portero", fase: "defensa", tipo: "ubicacion", principio: "Portero líbero",
    titulo: "Pelotazo a la espalda de tu defensa",
    situacion: "Tu equipo defiende con la línea muy adelantada. El rival mete un pelotazo largo hacia el espacio detrás de tus centrales y el delantero arranca.",
    pregunta: "¿Qué haces?",
    pista: "Con la línea alta, el portero es el último defensor. El espacio detrás de los centrales es tuyo.",
    you: [4, 34], ball: [50, 32],
    team: { DCI: [40, 24], DCD: [40, 44], LI: [46, 10], LD: [46, 58], MCD: [52, 34], MI: [58, 22], MD: [58, 46] },
    rivals: { D1: [42, 30], D2: [38, 40], MCD: [52, 30], VD: [54, 14], VI: [56, 54], MCI: [60, 42] },
    zones: [
      { c: [26, 30], r: 6, score: 3, txt: "Sal decidido fuera del área y despeja antes de que llegue el delantero: con la línea alta, ese espacio es tuyo." },
      { c: [4, 34], r: 4, score: 1, txt: "Quedarte en el arco deja al delantero recibir solo y encararte con tiempo." },
      { c: [14, 32], r: 4, score: 0, txt: "Salir a medias es lo peor: ni llegas al balón ni cubres el arco." }
    ],
    miss: "Moverte hacia un costado no resuelve un balón que cae por el centro.",
    ideal: [[{ who: "ball", to: [26, 30] }, { who: "you", to: [26, 30] }, { who: "R:D1", to: [32, 30] }], [{ who: "ball", to: [40, 8] }]]
  },
  {
    id: "por07", posicion: "portero", fase: "defensa", tipo: "ubicacion", principio: "Córner en contra",
    titulo: "Córner en contra",
    situacion: "Córner desde tu izquierda. Tu equipo defiende en zona, con un compañero en cada palo. El rival llena el área chica.",
    pregunta: "¿Dónde te ubicas antes del saque?",
    pista: "Desde el córner, el peligro llega por el centro y al segundo palo. El primer palo lo cubre tu compañero.",
    you: [3, 34], ball: [0, 0],
    team: { LI: [2, 30], LD: [2, 38], DCI: [6, 28], DCD: [6, 36], MCD: [6, 44], MI: [10, 24], MD: [10, 40], EI: [16, 34], DC: [50, 34], ED: [14, 50] },
    rivals: { VD: [0, 1], DCD: [8, 32], DCI: [9, 40], D1: [11, 30], D2: [12, 44], MCD: [14, 38], LD: [18, 20], MCI: [20, 44], VI: [22, 28] },
    zones: [
      { c: [3, 36], r: 3, score: 3, txt: "Un paso hacia el centro del arco y un poco hacia el segundo palo: ves el balón, llegas a los centros al área chica y no te estorba el jugador del primer palo." },
      { c: [2, 30], r: 3, score: 1, txt: "Pegado al primer palo duplicas a tu compañero y dejas el resto del arco lejos." },
      { c: [9, 34], r: 3, score: 0, txt: "Adelantado en el área chica con tanta gente, te bloquean y el arco queda vacío." }
    ],
    miss: "Fuera del arco antes del saque pierdes la referencia de la línea.",
    ideal: [[{ who: "you", to: [3, 36] }], [{ who: "ball", to: [6, 34] }, { who: "you", to: [5, 34] }]]
  },
  {
    id: "por08", posicion: "portero", fase: "transicion", tipo: "pase", principio: "Saque rápido",
    titulo: "Atrapas el balón: ¿contra o pausa?",
    situacion: "Atrapas un centro. El rival tiene a sus laterales subidos y tu extremo izquierdo quedó solo en banda, con todo el campo por delante.",
    pregunta: "¿Qué haces con la pelota?",
    pista: "El rival tarda unos segundos en volver. Ese es el momento del portero.",
    you: [4, 34], ball: [6, 33],
    team: { DCI: [14, 24], DCD: [14, 44], LI: [22, 10], LD: [22, 60], MCD: [28, 34], MI: [40, 22], MD: [40, 46], EI: [42, 8], DC: [52, 34], ED: [44, 58] },
    rivals: { D1: [18, 30], D2: [16, 40], LD: [20, 20], VD: [30, 16], MCD: [30, 36], MCI: [34, 44], LI: [26, 50], VI: [36, 58], DCD: [62, 28], DCI: [62, 40] },
    zones: [
      { c: [42, 8], r: 6, score: 3, txt: "Saque rápido con la mano al extremo libre: arranca la contra antes de que el lateral rival vuelva." },
      { c: [52, 34], r: 6, score: 2, txt: "Saque largo al 9: posible, pero es un balón dividido con dos centrales." },
      { c: [14, 24], r: 4, score: 1, txt: "Pausar con el central: válido si no hay contra, pero aquí la hay y la desperdicias." }
    ],
    miss: "Esperar con el balón en las manos deja que el rival se reordene.",
    ideal: [[{ who: "ball", to: [42, 8] }], [{ who: "T:EI", to: [70, 8] }, { who: "ball", to: [70, 8] }]]
  }
);
