/*
  Los números ordinales (espanhol) — aula criada pela MEA Academy.
  Primero, segundo, tercero… vigésimo primero: formação, concordância e usos.
  Os campos "en" guardam a palavra no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-ordinais",
  idioma: "es",
  curso: "MEA Español",
  semana: "Básico",
  titulo: "Los números ordinales",
  subtitulo: "Primeiro, segundo, terceiro… vigésimo primeiro em espanhol",
  resumo: "Cómo decir y escribir primero, segundo, tercero y todos los ordinales, cómo concuerdan en género y número, y cuándo se usan en el día a día.",
  capaTexto: "1.º 2.º 3.º\n21.º",

  secoes: [
    {
      id: "o-que-sao",
      rotulo: "Introducción",
      titulo: "¿Cardinal u ordinal?",
      tituloPt: "Cardinal ou ordinal?",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Los números cardinales sirven para contar: uno, dos, tres. Los ordinales indican el orden o la posición: primero, segundo, tercero." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Cardinal: ¿cuántos?", en: "Tengo tres hermanos.", pt: "Tenho três irmãos." },
          { titulo: "Ordinal: ¿en qué posición?", en: "Soy el tercer hijo.", pt: "Sou o terceiro filho." }
        ]}
      ]
    },

    {
      id: "primeiro-decimo",
      rotulo: "Parte 1",
      titulo: "Del primero al décimo",
      tituloPt: "Do primeiro ao décimo",
      icone: "estrela",
      blocos: [
        { tipo: "texto", texto: "Son los ordinales más usados. Se parecen mucho al portugués, pero fíjate en la escritura y en la pronunciación. Se abrevian con el número y una letra pequeña: 1.º (masculino), 1.ª (femenino)." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { emoji: "1.º", en: "primero", pt: "primeiro" },
          { emoji: "2.º", en: "segundo", pt: "segundo" },
          { emoji: "3.º", en: "tercero", pt: "terceiro" },
          { emoji: "4.º", en: "cuarto", pt: "quarto" },
          { emoji: "5.º", en: "quinto", pt: "quinto" },
          { emoji: "6.º", en: "sexto", pt: "sexto" },
          { emoji: "7.º", en: "séptimo", pt: "sétimo" },
          { emoji: "8.º", en: "octavo", pt: "oitavo" },
          { emoji: "9.º", en: "noveno", pt: "nono" },
          { emoji: "10.º", en: "décimo", pt: "décimo" }
        ]},
        { tipo: "dica", rotulo: "Diferencias con el portugués:", texto: "tercero (no “terceiro”), séptimo (con “p”), octavo (no “oitavo”) y noveno (no “nono”)." }
      ]
    },

    {
      id: "concordancia",
      rotulo: "Parte 2",
      titulo: "Masculino, femenino y la forma corta",
      tituloPt: "Masculino, feminino e a forma curta",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "Los ordinales concuerdan con el sustantivo: primero, primera, primeros, primeras. Además, primero y tercero pierden la “o” delante de un sustantivo masculino singular." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Primer / tercer", texto: "Delante de un sustantivo masculino singular:", lista: ["el primer día", "el tercer piso", "mi primer trabajo"] },
          { titulo: "Primero / tercero", texto: "Cuando van solos o después del sustantivo:", lista: ["Llegué el primero.", "el capítulo tercero"] },
          { titulo: "Femenino", texto: "Nunca se acorta:", lista: ["la primera vez", "la tercera casa", "las primeras semanas"] }
        ]},
        { tipo: "frases", itens: [
          { en: "Es mi primer viaje a España.", pt: "É minha primeira viagem à Espanha. (viaje é masculino)" },
          { en: "Es la primera vez que vengo.", pt: "É a primeira vez que venho." },
          { en: "Vivo en el tercer piso.", pt: "Moro no terceiro andar." },
          { en: "Ella terminó tercera.", pt: "Ela terminou em terceiro lugar." }
        ]}
      ]
    },

    {
      id: "do-11",
      rotulo: "Parte 3",
      titulo: "Del 11.º en adelante",
      tituloPt: "Do 11.º em diante",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Del 11 al 19 hay dos formas correctas. La forma con “decimo-” es la más fácil y la más usada hoy." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { emoji: "11.º", en: "undécimo / decimoprimero", pt: "décimo primeiro" },
          { emoji: "12.º", en: "duodécimo / decimosegundo", pt: "décimo segundo" },
          { emoji: "13.º", en: "decimotercero", pt: "décimo terceiro" },
          { emoji: "14.º", en: "decimocuarto", pt: "décimo quarto" },
          { emoji: "15.º", en: "decimoquinto", pt: "décimo quinto" },
          { emoji: "20.º", en: "vigésimo", pt: "vigésimo" },
          { emoji: "30.º", en: "trigésimo", pt: "trigésimo" },
          { emoji: "40.º", en: "cuadragésimo", pt: "quadragésimo" },
          { emoji: "50.º", en: "quincuagésimo", pt: "quinquagésimo" },
          { emoji: "100.º", en: "centésimo", pt: "centésimo" }
        ]}
      ]
    },

    {
      id: "vigesimo",
      rotulo: "Parte 4",
      titulo: "Vigésimo primero, vigésimo segundo…",
      tituloPt: "Vigésimo primeiro, vigésimo segundo…",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "Para los números compuestos, se juntan los dos ordinales. Se pueden escribir separados o en una palabra." },
        { tipo: "pronuncia", itens: [
          { en: "21.º", guia: "vigésimo primero / vigesimoprimero", falar: "vigésimo primero" },
          { en: "22.º", guia: "vigésimo segundo", falar: "vigésimo segundo" },
          { en: "23.º", guia: "vigésimo tercero", falar: "vigésimo tercero" },
          { en: "25.º", guia: "vigésimo quinto", falar: "vigésimo quinto" },
          { en: "31.º", guia: "trigésimo primero", falar: "trigésimo primero" },
          { en: "42.º", guia: "cuadragésimo segundo", falar: "cuadragésimo segundo" }
        ]},
        { tipo: "dica", rotulo: "En la vida real:", texto: "A partir del 10.º, los hablantes casi siempre usan el número cardinal: “el piso veintiuno”, “el aniversario número treinta”, “la planta doce”. Los ordinales largos se usan sobre todo en textos formales." }
      ]
    },

    {
      id: "usos",
      rotulo: "Parte 5",
      titulo: "¿Cuándo se usan?",
      tituloPt: "Quando usar os ordinais",
      icone: "estrela",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Pisos", en: "La oficina está en la segunda planta.", pt: "O escritório fica no segundo andar.", nota: "El térreo es la planta baja." },
          { titulo: "Clasificaciones", en: "Quedó en primer lugar.", pt: "Ficou em primeiro lugar." },
          { titulo: "Reyes y papas", en: "Felipe Sexto · Carlos Tercero", pt: "Felipe VI · Carlos III", nota: "Se escriben con números romanos y se leen como ordinales hasta el décimo, sin artículo." },
          { titulo: "Siglos", en: "el siglo veintiuno", pt: "o século vinte e um (XXI)", nota: "Los siglos se leen con números cardinales." },
          { titulo: "Fechas", en: "el primero de mayo · el dos de mayo", pt: "1.º de maio · 2 de maio", nota: "Solo el día 1 puede ser ordinal. Los demás días siempre son cardinales." },
          { titulo: "Aniversarios", en: "Celebramos nuestro décimo aniversario.", pt: "Comemoramos nosso décimo aniversário." }
        ]},
        { tipo: "frases", titulo: "Expresiones frecuentes:", itens: [
          { en: "en primer lugar", pt: "em primeiro lugar" },
          { en: "a primera vista", pt: "à primeira vista" },
          { en: "de segunda mano", pt: "de segunda mão, usado" },
          { en: "la tercera edad", pt: "a terceira idade" },
          { en: "un tercio (1/3)", pt: "um terço" }
        ]},
        { tipo: "dica", rotulo: "Fracciones:", texto: "1/2 es “la mitad” o “un medio”, 1/3 es “un tercio”, 1/4 es “un cuarto”, 2/5 son “dos quintos”." }
      ]
    },

    {
      id: "pratica",
      rotulo: "Práctica",
      titulo: "Ponte a prueba",
      tituloPt: "Teste: toque para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", rotuloClique: "Toca para ver la respuesta", itens: [
          { pergunta: "¿Cómo se dice 3.º?", resposta: "tercero" },
          { pergunta: "¿Cómo se dice 7.º?", resposta: "séptimo" },
          { pergunta: "“Es mi ___ día de trabajo” (1)", resposta: "Es mi primer día de trabajo." },
          { pergunta: "“Es la ___ vez” (1)", resposta: "Es la primera vez." },
          { pergunta: "¿Cómo se dice 21.º?", resposta: "vigésimo primero" },
          { pergunta: "¿Cómo se dice 9.º? ¿“nono”?", resposta: "noveno" },
          { pergunta: "¿Cómo se lee “Carlos III”?", resposta: "Carlos Tercero" },
          { pergunta: "¿Cómo se lee “el siglo XXI”?", resposta: "el siglo veintiuno" }
        ]},
        { tipo: "lista", titulo: "Tu turno:", numerada: true, itens: [
          "Cuenta en voz alta del primero al décimo.",
          "Di en qué piso vives o trabajas.",
          "Cuenta tu primer día en un trabajo o en una escuela usando “primer” y “primera”.",
          "Di en qué lugar quedó tu equipo favorito en el último campeonato."
        ]}
      ]
    }
  ]
});
