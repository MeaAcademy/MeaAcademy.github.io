/*
  Days, Months and Years (inglês) — aula criada pela MEA Academy.
  Explicações em inglês, com a tradução em português de cada palavra.
*/
MEA.registrarAula({
  id: "dias-meses-anos",
  curso: "MEA English",
  semana: "Básico",
  titulo: "Days, Months and Years",
  subtitulo: "Dias da semana, meses e anos em inglês",
  resumo: "The days of the week, the twelve months, how to say and write dates, and how to read any year in English.",
  capaTexto: "Mon · Jan\n2026",

  secoes: [
    {
      id: "dias",
      rotulo: "Part 1",
      titulo: "The days of the week",
      tituloPt: "Os dias da semana",
      icone: "calendario",
      blocos: [
        { tipo: "texto", texto: "In English, the week usually starts on Sunday on calendars in the US and on Monday in the UK. Tap each day to hear it." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { en: "Monday", pt: "segunda-feira" },
          { en: "Tuesday", pt: "terça-feira" },
          { en: "Wednesday", pt: "quarta-feira" },
          { en: "Thursday", pt: "quinta-feira" },
          { en: "Friday", pt: "sexta-feira" },
          { en: "Saturday", pt: "sábado" },
          { en: "Sunday", pt: "domingo" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Weekdays", texto: "Monday to Friday: the working days.", en: "I work on weekdays.", pt: "Eu trabalho nos dias de semana." },
          { titulo: "The weekend", texto: "Saturday and Sunday.", en: "What are you doing this weekend?", pt: "O que você vai fazer neste fim de semana?" }
        ]},
        { tipo: "dica", rotulo: "Capital letters:", texto: "Days of the week always start with a capital letter in English: Monday, not monday." }
      ]
    },

    {
      id: "pronuncia-dias",
      rotulo: "Part 2",
      titulo: "Pronunciation and abbreviations",
      tituloPt: "Pronúncia e abreviações",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "The ending -day sounds like “dei”. Be careful with Wednesday: the first “d” is silent." },
        { tipo: "pronuncia", itens: [
          { en: "Monday", guia: "MÂN-dei · Mon" },
          { en: "Tuesday", guia: "TCHÚZ-dei · Tue" },
          { en: "Wednesday", guia: "UÉNZ-dei · Wed" },
          { en: "Thursday", guia: "THÂRZ-dei · Thu" },
          { en: "Friday", guia: "FRÁI-dei · Fri" },
          { en: "Saturday", guia: "SÉ-târ-dei · Sat" },
          { en: "Sunday", guia: "SÂN-dei · Sun" }
        ]},
        { tipo: "dica", rotulo: "Tip:", texto: "In Thursday, put your tongue between your teeth for the “th” sound. It is different from Tuesday." }
      ]
    },

    {
      id: "falar-dias",
      rotulo: "Part 3",
      titulo: "Talking about days",
      tituloPt: "Falando sobre os dias",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "Use “on” with days. Add an -s to talk about something you do every week." },
        { tipo: "frases", itens: [
          { en: "I have English class on Monday.", pt: "Tenho aula de inglês na segunda. (uma vez)" },
          { en: "I have English class on Mondays.", pt: "Tenho aula de inglês às segundas. (toda semana)" },
          { en: "See you on Friday!", pt: "Até sexta!" },
          { en: "I go to the gym every day.", pt: "Vou à academia todos os dias." }
        ]},
        { tipo: "grupos", grupos: [
          { titulo: "Days", itens: [
            { en: "yesterday", pt: "ontem" },
            { en: "today", pt: "hoje" },
            { en: "tomorrow", pt: "amanhã" },
            { en: "the day before yesterday", pt: "anteontem" },
            { en: "the day after tomorrow", pt: "depois de amanhã" }
          ]},
          { titulo: "Weeks", itens: [
            { en: "last week", pt: "semana passada" },
            { en: "this week", pt: "esta semana" },
            { en: "next week", pt: "semana que vem" },
            { en: "every week", pt: "toda semana" },
            { en: "a fortnight", pt: "quinze dias (UK)" }
          ]}
        ]},
        { tipo: "dica", rotulo: "Weekend:", texto: "Americans say “on the weekend”. The British say “at the weekend”. Both are correct." }
      ]
    },

    {
      id: "meses",
      rotulo: "Part 4",
      titulo: "The months of the year",
      tituloPt: "Os meses do ano",
      icone: "calendario",
      blocos: [
        { tipo: "texto", texto: "Like the days, months always start with a capital letter. Tap to hear each one." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { emoji: "1", en: "January", pt: "janeiro" },
          { emoji: "2", en: "February", pt: "fevereiro" },
          { emoji: "3", en: "March", pt: "março" },
          { emoji: "4", en: "April", pt: "abril" },
          { emoji: "5", en: "May", pt: "maio" },
          { emoji: "6", en: "June", pt: "junho" },
          { emoji: "7", en: "July", pt: "julho" },
          { emoji: "8", en: "August", pt: "agosto" },
          { emoji: "9", en: "September", pt: "setembro" },
          { emoji: "10", en: "October", pt: "outubro" },
          { emoji: "11", en: "November", pt: "novembro" },
          { emoji: "12", en: "December", pt: "dezembro" }
        ]},
        { tipo: "pronuncia", itens: [
          { en: "January", guia: "DJÉ-niu-é-ri · Jan" },
          { en: "February", guia: "FÉ-bru-é-ri · Feb" },
          { en: "April", guia: "ÊI-prâl · Apr" },
          { en: "July", guia: "dju-LÁI · Jul" },
          { en: "August", guia: "Ó-gâst · Aug" },
          { en: "September", guia: "sép-TÉM-bâr · Sep" }
        ]},
        { tipo: "dica", rotulo: "Careful:", texto: "May and June are short and are not abbreviated. July is stressed at the end: ju-LY." }
      ]
    },

    {
      id: "estacoes",
      rotulo: "Part 5",
      titulo: "Seasons",
      tituloPt: "As estações do ano",
      icone: "sol",
      blocos: [
        { tipo: "frases", itens: [
          { en: "spring", pt: "primavera" },
          { en: "summer", pt: "verão" },
          { en: "fall (US) / autumn (UK)", pt: "outono" },
          { en: "winter", pt: "inverno" }
        ]},
        { tipo: "dica", rotulo: "Remember:", texto: "In Brazil, December is summer. In the US and the UK, December is winter. When you talk with foreigners, say the month to avoid confusion." }
      ]
    },

    {
      id: "preposicoes",
      rotulo: "Part 6",
      titulo: "In, on, at",
      tituloPt: "Preposições de tempo",
      icone: "lista",
      blocos: [
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "IN", texto: "Long periods: months, seasons, years, centuries.", lista: ["in March", "in the summer", "in 2026", "in the 21st century"] },
          { titulo: "ON", texto: "Days and dates.", lista: ["on Monday", "on May 5th", "on my birthday", "on Christmas Day"] },
          { titulo: "AT", texto: "Exact times and short holidays.", lista: ["at 7 o'clock", "at night", "at Christmas", "at the weekend (UK)"] }
        ]},
        { tipo: "dica", rotulo: "Memory trick:", texto: "Think of a pyramid: IN is the biggest (years, months), ON is in the middle (days), AT is the smallest (hours)." }
      ]
    },

    {
      id: "datas",
      rotulo: "Part 7",
      titulo: "Saying and writing dates",
      tituloPt: "Como falar e escrever datas",
      icone: "nota",
      blocos: [
        { tipo: "texto", texto: "Dates use ordinal numbers when we speak: first, second, third, fourth… The order of day and month changes between the US and the UK." },
        { tipo: "cartoes", itens: [
          { titulo: "American English", texto: "Month / Day / Year", en: "March 4th, 2026", pt: "Write: 03/04/2026 · Say: March fourth" },
          { titulo: "British English", texto: "Day / Month / Year", en: "the 4th of March, 2026", pt: "Write: 04/03/2026 · Say: the fourth of March" }
        ]},
        { tipo: "dica", rotulo: "Attention:", texto: "03/04/2026 is March 4th in the US but April 3rd in the UK and in Brazil. In international emails, write the month as a word: 4 March 2026." }
      ]
    },

    {
      id: "anos",
      rotulo: "Part 8",
      titulo: "How to say years",
      tituloPt: "Como falar os anos",
      icone: "relogio",
      blocos: [
        { tipo: "texto", texto: "Most years are divided into two pairs of numbers: 19 | 85 = nineteen eighty-five. The years 2000 to 2009 are the exception." },
        { tipo: "pronuncia", itens: [
          { en: "1985", guia: "nineteen eighty-five", falar: "nineteen eighty-five" },
          { en: "1999", guia: "nineteen ninety-nine", falar: "nineteen ninety-nine" },
          { en: "1906", guia: "nineteen oh six", falar: "nineteen oh six" },
          { en: "1900", guia: "nineteen hundred", falar: "nineteen hundred" },
          { en: "2000", guia: "two thousand", falar: "two thousand" },
          { en: "2005", guia: "two thousand (and) five", falar: "two thousand and five" },
          { en: "2010", guia: "twenty ten / two thousand ten", falar: "twenty ten" },
          { en: "2026", guia: "twenty twenty-six", falar: "twenty twenty-six" }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Decades", lista: ["the 80s: the eighties", "the 1990s: the nineteen nineties", "the 2020s: the twenty twenties"] },
          { titulo: "Centuries", lista: ["the 20th century: 1901–2000", "the 21st century: 2001–2100"] }
        ]},
        { tipo: "grupos", grupos: [
          { titulo: "Time words", itens: [
            { en: "a day", pt: "um dia" },
            { en: "a week", pt: "uma semana" },
            { en: "a month", pt: "um mês" },
            { en: "a year", pt: "um ano" },
            { en: "a decade", pt: "uma década" },
            { en: "a century", pt: "um século" }
          ]}
        ]}
      ]
    },

    {
      id: "perguntas",
      rotulo: "Part 9",
      titulo: "Questions and answers",
      tituloPt: "Perguntas e respostas",
      icone: "pessoas",
      blocos: [
        { tipo: "frases", itens: [
          { en: "What day is it today? It's Tuesday.", pt: "Que dia da semana é hoje? É terça." },
          { en: "What's the date today? It's May 5th.", pt: "Que dia é hoje? É 5 de maio." },
          { en: "When is your birthday? It's on July 10th.", pt: "Quando é seu aniversário? É em 10 de julho." },
          { en: "What year were you born? I was born in 1998.", pt: "Em que ano você nasceu? Nasci em 1998." },
          { en: "What's your favorite month? I love December.", pt: "Qual é seu mês favorito? Adoro dezembro." }
        ]},
        { tipo: "dialogo", rotuloBotao: "Listen to the whole dialogue", falas: [
          { quem: "Ana", lado: "a", en: "Hey, what's the date today?", pt: "Ei, que dia é hoje?" },
          { quem: "Leo", lado: "b", en: "It's Friday, June 12th.", pt: "É sexta, 12 de junho." },
          { quem: "Ana", lado: "a", en: "Oh no! My mom's birthday is tomorrow!", pt: "Ah, não! O aniversário da minha mãe é amanhã!" },
          { quem: "Leo", lado: "b", en: "Don't worry. The shops are open on Saturday.", pt: "Não se preocupe. As lojas abrem no sábado." }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Practice",
      titulo: "Test yourself",
      tituloPt: "Teste: toque para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", rotuloClique: "Tap to see the answer", itens: [
          { pergunta: "What day comes after Tuesday?", resposta: "Wednesday" },
          { pergunta: "What month comes before March?", resposta: "February" },
          { pergunta: "How do you say 1975?", resposta: "nineteen seventy-five" },
          { pergunta: "How do you say 2008?", resposta: "two thousand (and) eight" },
          { pergunta: "in, on or at? ___ Monday", resposta: "on Monday" },
          { pergunta: "in, on or at? ___ April", resposta: "in April" },
          { pergunta: "Say 25/12 in American English.", resposta: "December twenty-fifth" },
          { pergunta: "What are the days of the weekend?", resposta: "Saturday and Sunday" }
        ]},
        { tipo: "lista", titulo: "Your turn:", numerada: true, itens: [
          "Say today's day and date out loud.",
          "Say the year you were born and your birthday.",
          "Say what you do on Mondays and on the weekend.",
          "Say your favorite month and why."
        ]}
      ]
    }
  ]
});
