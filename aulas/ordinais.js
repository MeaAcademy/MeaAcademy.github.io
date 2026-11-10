/*
  Ordinal Numbers (inglês) — aula criada pela MEA Academy.
  First, second, third… twenty-first: formação, exceções e usos.
*/
MEA.registrarAula({
  id: "ordinais",
  curso: "MEA English",
  semana: "Básico",
  titulo: "Ordinal Numbers",
  subtitulo: "Primeiro, segundo, terceiro… vigésimo primeiro em inglês",
  resumo: "How to say and write first, second, third and all the ordinal numbers, the irregular ones, and when to use them: dates, floors, rankings, birthdays and centuries.",
  capaTexto: "1st 2nd 3rd\n21st",

  secoes: [
    {
      id: "o-que-sao",
      rotulo: "Introduction",
      titulo: "Cardinal or ordinal?",
      tituloPt: "Cardinal ou ordinal?",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Cardinal numbers count: one, two, three. Ordinal numbers show order or position: first, second, third." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Cardinal: how many?", en: "I have three brothers.", pt: "Tenho três irmãos." },
          { titulo: "Ordinal: which position?", en: "I'm the third child.", pt: "Sou o terceiro filho." }
        ]}
      ]
    },

    {
      id: "irregulares",
      rotulo: "Part 1",
      titulo: "The first three: completely different",
      tituloPt: "Os três primeiros: totalmente irregulares",
      icone: "estrela",
      blocos: [
        { tipo: "texto", texto: "The first three ordinals have their own forms. Their abbreviations use the last two letters of the word: -st, -nd, -rd." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { emoji: "1st", en: "first", pt: "primeiro" },
          { emoji: "2nd", en: "second", pt: "segundo" },
          { emoji: "3rd", en: "third", pt: "terceiro" }
        ]}
      ]
    },

    {
      id: "regra-th",
      rotulo: "Part 2",
      titulo: "The rule: add -th",
      tituloPt: "A regra: acrescente -th",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "From the 4th on, add -th to the cardinal number: four → fourth, six → sixth. The abbreviation is the number + th." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { emoji: "4th", en: "fourth", pt: "quarto" },
          { emoji: "5th", en: "fifth", pt: "quinto" },
          { emoji: "6th", en: "sixth", pt: "sexto" },
          { emoji: "7th", en: "seventh", pt: "sétimo" },
          { emoji: "8th", en: "eighth", pt: "oitavo" },
          { emoji: "9th", en: "ninth", pt: "nono" },
          { emoji: "10th", en: "tenth", pt: "décimo" },
          { emoji: "11th", en: "eleventh", pt: "décimo primeiro" },
          { emoji: "12th", en: "twelfth", pt: "décimo segundo" },
          { emoji: "13th", en: "thirteenth", pt: "décimo terceiro" },
          { emoji: "14th", en: "fourteenth", pt: "décimo quarto" },
          { emoji: "15th", en: "fifteenth", pt: "décimo quinto" },
          { emoji: "16th", en: "sixteenth", pt: "décimo sexto" },
          { emoji: "17th", en: "seventeenth", pt: "décimo sétimo" },
          { emoji: "18th", en: "eighteenth", pt: "décimo oitavo" },
          { emoji: "19th", en: "nineteenth", pt: "décimo nono" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Spelling changes", texto: "Some words change before -th:", lista: ["five → fifth", "eight → eighth", "nine → ninth", "twelve → twelfth"] },
          { titulo: "11th, 12th, 13th", texto: "They end in -th, not -st, -nd or -rd. Be careful in dates!", lista: ["the 11th (eleventh)", "the 12th (twelfth)", "the 13th (thirteenth)"] }
        ]},
        { tipo: "dica", rotulo: "Pronunciation:", texto: "The final “th” is soft: put your tongue between your teeth. Fifth and twelfth are hard even for natives: say them slowly." }
      ]
    },

    {
      id: "dezenas",
      rotulo: "Part 3",
      titulo: "The tens: -tieth",
      tituloPt: "As dezenas: -tieth",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "The tens change the final -y to -ieth: twenty → twentieth, thirty → thirtieth." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { emoji: "20th", en: "twentieth", pt: "vigésimo" },
          { emoji: "30th", en: "thirtieth", pt: "trigésimo" },
          { emoji: "40th", en: "fortieth", pt: "quadragésimo" },
          { emoji: "50th", en: "fiftieth", pt: "quinquagésimo" },
          { emoji: "60th", en: "sixtieth", pt: "sexagésimo" },
          { emoji: "70th", en: "seventieth", pt: "septuagésimo" },
          { emoji: "80th", en: "eightieth", pt: "octogésimo" },
          { emoji: "90th", en: "ninetieth", pt: "nonagésimo" },
          { emoji: "100th", en: "hundredth", pt: "centésimo" },
          { emoji: "1000th", en: "thousandth", pt: "milésimo" }
        ]}
      ]
    },

    {
      id: "compostos",
      rotulo: "Part 4",
      titulo: "21st, 22nd, 23rd…",
      tituloPt: "Vigésimo primeiro, vigésimo segundo…",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "In compound numbers, only the last word becomes ordinal. The first part stays cardinal: twenty-first, not twentieth-first." },
        { tipo: "pronuncia", itens: [
          { en: "21st", guia: "twenty-first", falar: "twenty-first" },
          { en: "22nd", guia: "twenty-second", falar: "twenty-second" },
          { en: "23rd", guia: "twenty-third", falar: "twenty-third" },
          { en: "24th", guia: "twenty-fourth", falar: "twenty-fourth" },
          { en: "31st", guia: "thirty-first", falar: "thirty-first" },
          { en: "42nd", guia: "forty-second", falar: "forty-second" },
          { en: "99th", guia: "ninety-ninth", falar: "ninety-ninth" },
          { en: "101st", guia: "one hundred and first", falar: "one hundred and first" }
        ]},
        { tipo: "dica", rotulo: "Abbreviation rule:", texto: "Look at the last word: one → st, two → nd, three → rd, all the others → th. 21st, 52nd, 73rd, but 11th, 12th, 13th." }
      ]
    },

    {
      id: "usos",
      rotulo: "Part 5",
      titulo: "When do we use ordinals?",
      tituloPt: "Quando usar os ordinais",
      icone: "estrela",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Dates", en: "My birthday is on May 21st.", pt: "Meu aniversário é em 21 de maio.", nota: "Say: May twenty-first / the twenty-first of May." },
          { titulo: "Floors", en: "I live on the third floor.", pt: "Moro no terceiro andar.", nota: "In the UK, the ground floor is the térreo and the first floor is one level up. In the US, the first floor is the térreo." },
          { titulo: "Rankings", en: "She came first in the race.", pt: "Ela chegou em primeiro na corrida." },
          { titulo: "Birthdays and anniversaries", en: "It's our tenth anniversary.", pt: "É o nosso décimo aniversário (de casamento)." },
          { titulo: "Centuries", en: "We live in the twenty-first century.", pt: "Vivemos no século vinte e um." },
          { titulo: "Kings and queens", en: "Elizabeth the Second", pt: "Elizabeth II", nota: "Written with Roman numerals, read as ordinals with “the”." }
        ]},
        { tipo: "frases", titulo: "Common expressions:", itens: [
          { en: "first of all", pt: "antes de tudo" },
          { en: "first come, first served", pt: "quem chega primeiro é atendido primeiro" },
          { en: "at first sight", pt: "à primeira vista" },
          { en: "second-hand", pt: "de segunda mão, usado" },
          { en: "a third (1/3)", pt: "um terço" }
        ]},
        { tipo: "dica", rotulo: "Fractions:", texto: "Ordinals are also used for fractions: a third (1/3), a quarter or a fourth (1/4), two fifths (2/5). The exception is a half (1/2)." }
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
          { pergunta: "How do you say 3rd?", resposta: "third" },
          { pergunta: "How do you say 5th?", resposta: "fifth" },
          { pergunta: "How do you write 12th as a word?", resposta: "twelfth" },
          { pergunta: "How do you say 21st?", resposta: "twenty-first" },
          { pergunta: "Abbreviation of “thirty-second”?", resposta: "32nd" },
          { pergunta: "11st, 11nd or 11th?", resposta: "11th (eleventh)" },
          { pergunta: "Say the date 23/09.", resposta: "September twenty-third / the twenty-third of September" },
          { pergunta: "Which century is 2026 in?", resposta: "the twenty-first century" }
        ]},
        { tipo: "lista", titulo: "Your turn:", numerada: true, itens: [
          "Say your birthday using an ordinal number.",
          "Say which floor you live or work on.",
          "Count the first ten ordinals out loud: first, second, third…",
          "Say the dates of three holidays: New Year's Day, Christmas, your favorite holiday."
        ]}
      ]
    }
  ]
});
