/*
  Días, meses y años (espanhol) — aula criada pela MEA Academy.
  Explicações em espanhol, com a tradução em português de cada palavra.
  Os campos "en" guardam a palavra no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-dias-meses-anos",
  idioma: "es",
  curso: "MEA Español",
  semana: "Básico",
  titulo: "Días, meses y años",
  subtitulo: "Dias da semana, meses e anos em espanhol",
  resumo: "Los días de la semana, los doce meses, cómo decir y escribir la fecha y cómo leer cualquier año en español.",
  capaTexto: "lunes · enero\n2026",

  secoes: [
    {
      id: "dias",
      rotulo: "Parte 1",
      titulo: "Los días de la semana",
      tituloPt: "Os dias da semana",
      icone: "calendario",
      blocos: [
        { tipo: "texto", texto: "En los países hispanohablantes, la semana empieza el lunes. Toca cada día para escucharlo." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { en: "lunes", pt: "segunda-feira" },
          { en: "martes", pt: "terça-feira" },
          { en: "miércoles", pt: "quarta-feira" },
          { en: "jueves", pt: "quinta-feira" },
          { en: "viernes", pt: "sexta-feira" },
          { en: "sábado", pt: "sábado" },
          { en: "domingo", pt: "domingo" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Días laborables", texto: "De lunes a viernes: los días de trabajo.", en: "Trabajo de lunes a viernes.", pt: "Trabalho de segunda a sexta." },
          { titulo: "El fin de semana", texto: "El sábado y el domingo.", en: "¿Qué haces este fin de semana?", pt: "O que você vai fazer neste fim de semana?" }
        ]},
        { tipo: "dica", rotulo: "Minúsculas:", texto: "En español, los días de la semana se escriben con minúscula: lunes, no Lunes (salvo al principio de una frase). Y no existe “-feira”: solo lunes, martes…" }
      ]
    },

    {
      id: "pronuncia-dias",
      rotulo: "Parte 2",
      titulo: "Pronunciación y abreviaturas",
      tituloPt: "Pronúncia e abreviações",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "Fíjate en la sílaba tónica. La “j” de jueves suena como una “r” fuerte, aspirada, desde la garganta." },
        { tipo: "pronuncia", itens: [
          { en: "lunes", guia: "LU-nes · L" },
          { en: "martes", guia: "MAR-tes · M" },
          { en: "miércoles", guia: "MIÉR-co-les · X" },
          { en: "jueves", guia: "JUE-ves · J" },
          { en: "viernes", guia: "VIER-nes · V" },
          { en: "sábado", guia: "SÁ-ba-do · S" },
          { en: "domingo", guia: "do-MIN-go · D" }
        ]},
        { tipo: "dica", rotulo: "Curiosidad:", texto: "En los calendarios, miércoles se abrevia con X para no confundirlo con martes (M)." }
      ]
    },

    {
      id: "falar-dias",
      rotulo: "Parte 3",
      titulo: "Hablar de los días",
      tituloPt: "Falando sobre os dias",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "Con los días se usa el artículo, no una preposición: “el lunes” (una vez) y “los lunes” (todas las semanas). Lunes a viernes no cambian en plural." },
        { tipo: "frases", itens: [
          { en: "Tengo clase de español el lunes.", pt: "Tenho aula de espanhol na segunda. (uma vez)" },
          { en: "Tengo clase de español los lunes.", pt: "Tenho aula de espanhol às segundas. (toda semana)" },
          { en: "¡Nos vemos el viernes!", pt: "Até sexta!" },
          { en: "Voy al gimnasio todos los días.", pt: "Vou à academia todos os dias." }
        ]},
        { tipo: "grupos", grupos: [
          { titulo: "Días", itens: [
            { en: "ayer", pt: "ontem" },
            { en: "hoy", pt: "hoje" },
            { en: "mañana", pt: "amanhã" },
            { en: "anteayer", pt: "anteontem" },
            { en: "pasado mañana", pt: "depois de amanhã" }
          ]},
          { titulo: "Semanas", itens: [
            { en: "la semana pasada", pt: "a semana passada" },
            { en: "esta semana", pt: "esta semana" },
            { en: "la semana que viene", pt: "a semana que vem" },
            { en: "cada semana", pt: "toda semana" },
            { en: "quince días", pt: "quinze dias" }
          ]}
        ]},
        { tipo: "dica", rotulo: "Falso amigo:", texto: "“Mañana” significa amanhã, pero “la mañana” significa a manhã. Por eso: “mañana por la mañana” = amanhã de manhã." }
      ]
    },

    {
      id: "meses",
      rotulo: "Parte 4",
      titulo: "Los meses del año",
      tituloPt: "Os meses do ano",
      icone: "calendario",
      blocos: [
        { tipo: "texto", texto: "Los meses también se escriben con minúscula. Toca cada uno para escucharlo." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { emoji: "1", en: "enero", pt: "janeiro" },
          { emoji: "2", en: "febrero", pt: "fevereiro" },
          { emoji: "3", en: "marzo", pt: "março" },
          { emoji: "4", en: "abril", pt: "abril" },
          { emoji: "5", en: "mayo", pt: "maio" },
          { emoji: "6", en: "junio", pt: "junho" },
          { emoji: "7", en: "julio", pt: "julho" },
          { emoji: "8", en: "agosto", pt: "agosto" },
          { emoji: "9", en: "septiembre", pt: "setembro" },
          { emoji: "10", en: "octubre", pt: "outubro" },
          { emoji: "11", en: "noviembre", pt: "novembro" },
          { emoji: "12", en: "diciembre", pt: "dezembro" }
        ]},
        { tipo: "pronuncia", itens: [
          { en: "enero", guia: "e-NE-ro · ene." },
          { en: "junio", guia: "RRU-nio · jun." },
          { en: "julio", guia: "RRU-lio · jul." },
          { en: "septiembre", guia: "sep-TIEM-bre · sept." },
          { en: "octubre", guia: "oc-TU-bre · oct." },
          { en: "diciembre", guia: "di-CIEM-bre · dic." }
        ]},
        { tipo: "dica", rotulo: "Atención:", texto: "Junio y julio se parecen mucho. La diferencia está en la “n” y la “l”. Y la “j” se pronuncia aspirada, como una “rr” suave." }
      ]
    },

    {
      id: "estacoes",
      rotulo: "Parte 5",
      titulo: "Las estaciones",
      tituloPt: "As estações do ano",
      icone: "sol",
      blocos: [
        { tipo: "frases", itens: [
          { en: "la primavera", pt: "a primavera" },
          { en: "el verano", pt: "o verão" },
          { en: "el otoño", pt: "o outono" },
          { en: "el invierno", pt: "o inverno" }
        ]},
        { tipo: "dica", rotulo: "Recuerda:", texto: "En España y México, diciembre es invierno. En Argentina, Chile y Uruguay, como en Brasil, diciembre es verano." }
      ]
    },

    {
      id: "datas",
      rotulo: "Parte 6",
      titulo: "Decir y escribir la fecha",
      tituloPt: "Como falar e escrever datas",
      icone: "nota",
      blocos: [
        { tipo: "texto", texto: "En español la fecha va en este orden: día, mes y año, igual que en portugués. Se usan los números normales (cardinales), con “de” entre las partes." },
        { tipo: "cartoes", itens: [
          { titulo: "Escribir", texto: "Día / mes / año", en: "4/3/2026", pt: "4 de março de 2026" },
          { titulo: "Decir", texto: "el + día + de + mes + de + año", en: "el cuatro de marzo de dos mil veintiséis", pt: "4 de março de 2026" }
        ]},
        { tipo: "frases", titulo: "Las preposiciones:", itens: [
          { en: "en marzo", pt: "em março (mês)" },
          { en: "en verano", pt: "no verão (estação)" },
          { en: "en 2026", pt: "em 2026 (ano)" },
          { en: "el 5 de mayo", pt: "em 5 de maio (data, sem preposição)" },
          { en: "a las siete", pt: "às sete (hora)" }
        ]},
        { tipo: "dica", rotulo: "El día 1:", texto: "En muchos países de América se dice “el primero de mayo”. En España es más común “el uno de mayo”. Los demás días siempre van con el número normal: el dos, el tres…" }
      ]
    },

    {
      id: "anos",
      rotulo: "Parte 7",
      titulo: "Cómo decir los años",
      tituloPt: "Como falar os anos",
      icone: "relogio",
      blocos: [
        { tipo: "texto", texto: "En español los años se leen como un número completo, nunca en parejas como en inglés. 1985 es “mil novecientos ochenta y cinco”." },
        { tipo: "pronuncia", itens: [
          { en: "1985", guia: "mil novecientos ochenta y cinco" },
          { en: "1999", guia: "mil novecientos noventa y nueve" },
          { en: "1906", guia: "mil novecientos seis" },
          { en: "2000", guia: "dos mil" },
          { en: "2005", guia: "dos mil cinco" },
          { en: "2010", guia: "dos mil diez" },
          { en: "2021", guia: "dos mil veintiuno" },
          { en: "2026", guia: "dos mil veintiséis" }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Décadas", lista: ["los años ochenta", "los años noventa", "los años dos mil"] },
          { titulo: "Siglos", texto: "Se escriben con números romanos.", lista: ["el siglo XX: siglo veinte", "el siglo XXI: siglo veintiuno"] }
        ]},
        { tipo: "grupos", grupos: [
          { titulo: "Palabras de tiempo", itens: [
            { en: "un día", pt: "um dia" },
            { en: "una semana", pt: "uma semana" },
            { en: "un mes", pt: "um mês" },
            { en: "un año", pt: "um ano" },
            { en: "una década", pt: "uma década" },
            { en: "un siglo", pt: "um século" }
          ]}
        ]},
        { tipo: "dica", rotulo: "¡Cuidado!", texto: "Año (ano) se escribe con ñ. Sin la tilde de la ñ, la palabra cambia completamente de significado." }
      ]
    },

    {
      id: "perguntas",
      rotulo: "Parte 8",
      titulo: "Preguntas y respuestas",
      tituloPt: "Perguntas e respostas",
      icone: "pessoas",
      blocos: [
        { tipo: "frases", itens: [
          { en: "¿Qué día es hoy? Hoy es martes.", pt: "Que dia é hoje? Hoje é terça." },
          { en: "¿A qué fecha estamos? Estamos a cinco de mayo.", pt: "Que dia é hoje? Hoje é 5 de maio." },
          { en: "¿Cuándo es tu cumpleaños? Es el diez de julio.", pt: "Quando é seu aniversário? É em 10 de julho." },
          { en: "¿En qué año naciste? Nací en mil novecientos noventa y ocho.", pt: "Em que ano você nasceu? Nasci em 1998." },
          { en: "¿Cuál es tu mes favorito? Me encanta diciembre.", pt: "Qual é seu mês favorito? Adoro dezembro." }
        ]},
        { tipo: "dialogo", rotuloBotao: "Escuchar todo el diálogo", falas: [
          { quem: "Ana", lado: "a", en: "Oye, ¿a qué fecha estamos?", pt: "Ei, que dia é hoje?" },
          { quem: "Leo", lado: "b", en: "Hoy es viernes, doce de junio.", pt: "Hoje é sexta, 12 de junho." },
          { quem: "Ana", lado: "a", en: "¡Ay, no! ¡Mañana es el cumpleaños de mi madre!", pt: "Ah, não! Amanhã é o aniversário da minha mãe!" },
          { quem: "Leo", lado: "b", en: "Tranquila, las tiendas abren el sábado.", pt: "Calma, as lojas abrem no sábado." }
        ]}
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
          { pergunta: "¿Qué día va después del martes?", resposta: "el miércoles" },
          { pergunta: "¿Qué mes va antes de marzo?", resposta: "febrero" },
          { pergunta: "¿Cómo se dice 1975?", resposta: "mil novecientos setenta y cinco" },
          { pergunta: "¿Cómo se dice 2008?", resposta: "dos mil ocho" },
          { pergunta: "¿Cómo se escribe? “Lunes” o “lunes”", resposta: "lunes, con minúscula" },
          { pergunta: "Di la fecha 25/12.", resposta: "el veinticinco de diciembre" },
          { pergunta: "“Tengo clase ___ jueves” (todas las semanas)", resposta: "Tengo clase los jueves." },
          { pergunta: "¿Qué significa “pasado mañana”?", resposta: "depois de amanhã" }
        ]},
        { tipo: "lista", titulo: "Tu turno:", numerada: true, itens: [
          "Di en voz alta qué día es hoy y la fecha completa.",
          "Di el año en que naciste y la fecha de tu cumpleaños.",
          "Cuenta qué haces los lunes y los fines de semana.",
          "Di cuál es tu mes favorito y por qué."
        ]}
      ]
    }
  ]
});
