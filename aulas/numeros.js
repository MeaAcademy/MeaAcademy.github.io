/*
  Numbers: How to Count (inglês) — aula criada pela MEA Academy.
  Contagem de 0 a milhões, números no dia a dia e contas básicas.
  Explicações em inglês, com a tradução em português de cada palavra.
*/
MEA.registrarAula({
  id: "numeros",
  curso: "MEA English",
  semana: "Básico",
  titulo: "Numbers: How to Count",
  subtitulo: "Números em inglês: contar, usar no dia a dia e fazer contas",
  resumo: "Count from zero to a million, avoid the classic -teen / -ty mistake, say prices and phone numbers, and do basic math in English.",
  capaTexto: "1 2 3\n+ − × ÷",

  secoes: [
    {
      id: "zero-doze",
      rotulo: "Part 1",
      titulo: "0 to 12",
      tituloPt: "De 0 a 12: os números que precisam ser decorados",
      icone: "letras",
      blocos: [
        { tipo: "texto", texto: "The numbers from zero to twelve have their own names. Learn them by heart: all the other numbers are built from them. Tap each card to hear it." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { emoji: "0", en: "zero", pt: "zero" },
          { emoji: "1", en: "one", pt: "um" },
          { emoji: "2", en: "two", pt: "dois" },
          { emoji: "3", en: "three", pt: "três" },
          { emoji: "4", en: "four", pt: "quatro" },
          { emoji: "5", en: "five", pt: "cinco" },
          { emoji: "6", en: "six", pt: "seis" },
          { emoji: "7", en: "seven", pt: "sete" },
          { emoji: "8", en: "eight", pt: "oito" },
          { emoji: "9", en: "nine", pt: "nove" },
          { emoji: "10", en: "ten", pt: "dez" },
          { emoji: "11", en: "eleven", pt: "onze" },
          { emoji: "12", en: "twelve", pt: "doze" }
        ]},
        { tipo: "dica", rotulo: "Pronunciation:", texto: "Three starts with “th”: put your tongue between your teeth. Eight sounds like “eit”: the “gh” is silent." }
      ]
    },

    {
      id: "teen",
      rotulo: "Part 2",
      titulo: "13 to 19: the -teen numbers",
      tituloPt: "De 13 a 19: os números com -teen",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "From 13 to 19, add -teen to the number. Some change a little: three → thirteen, five → fifteen, eight → eighteen." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { emoji: "13", en: "thirteen", pt: "treze" },
          { emoji: "14", en: "fourteen", pt: "catorze" },
          { emoji: "15", en: "fifteen", pt: "quinze" },
          { emoji: "16", en: "sixteen", pt: "dezesseis" },
          { emoji: "17", en: "seventeen", pt: "dezessete" },
          { emoji: "18", en: "eighteen", pt: "dezoito" },
          { emoji: "19", en: "nineteen", pt: "dezenove" }
        ]}
      ]
    },

    {
      id: "dezenas",
      rotulo: "Part 3",
      titulo: "The tens: -ty",
      tituloPt: "As dezenas: -ty",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "The tens end in -ty. To say 21 to 99, join the ten and the unit with a hyphen: twenty-one, thirty-five, ninety-nine." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { emoji: "20", en: "twenty", pt: "vinte" },
          { emoji: "30", en: "thirty", pt: "trinta" },
          { emoji: "40", en: "forty", pt: "quarenta" },
          { emoji: "50", en: "fifty", pt: "cinquenta" },
          { emoji: "60", en: "sixty", pt: "sessenta" },
          { emoji: "70", en: "seventy", pt: "setenta" },
          { emoji: "80", en: "eighty", pt: "oitenta" },
          { emoji: "90", en: "ninety", pt: "noventa" }
        ]},
        { tipo: "pronuncia", itens: [
          { en: "21", guia: "twenty-one", falar: "twenty-one" },
          { en: "34", guia: "thirty-four", falar: "thirty-four" },
          { en: "47", guia: "forty-seven", falar: "forty-seven" },
          { en: "58", guia: "fifty-eight", falar: "fifty-eight" },
          { en: "99", guia: "ninety-nine", falar: "ninety-nine" }
        ]},
        { tipo: "dica", rotulo: "Spelling trap:", texto: "Four has a “u”, but forty does not: four, fourteen, forty." }
      ]
    },

    {
      id: "teen-ty",
      rotulo: "Part 4",
      titulo: "-teen or -ty? The classic mistake",
      tituloPt: "-teen ou -ty? O erro clássico",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "Thirteen and thirty sound very similar. The difference is the stress: -TEEN is strong and long; in -ty, the strong part is the beginning." },
        { tipo: "pronuncia", itens: [
          { en: "13 · thirteen", guia: "thir-TEEN", falar: "thirteen" },
          { en: "30 · thirty", guia: "THIR-ty", falar: "thirty" },
          { en: "14 · fourteen", guia: "four-TEEN", falar: "fourteen" },
          { en: "40 · forty", guia: "FOR-ty", falar: "forty" },
          { en: "15 · fifteen", guia: "fif-TEEN", falar: "fifteen" },
          { en: "50 · fifty", guia: "FIF-ty", falar: "fifty" }
        ]},
        { tipo: "dica", rotulo: "In real life:", texto: "When a price or a time is important, confirm it: “Did you say fifteen, one five, or fifty, five zero?”" }
      ]
    },

    {
      id: "centenas",
      rotulo: "Part 5",
      titulo: "Hundreds, thousands and millions",
      tituloPt: "Centenas, milhares e milhões",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "Hundred, thousand and million never take an -s after a number: two hundred, five thousand, three million. In British English, you say “and” after hundred." },
        { tipo: "pronuncia", itens: [
          { en: "100", guia: "one hundred / a hundred", falar: "one hundred" },
          { en: "105", guia: "one hundred (and) five", falar: "one hundred and five" },
          { en: "250", guia: "two hundred (and) fifty", falar: "two hundred and fifty" },
          { en: "1,000", guia: "one thousand", falar: "one thousand" },
          { en: "3,500", guia: "three thousand five hundred", falar: "three thousand five hundred" },
          { en: "10,000", guia: "ten thousand", falar: "ten thousand" },
          { en: "1,000,000", guia: "one million", falar: "one million" },
          { en: "1,000,000,000", guia: "one billion (= um bilhão)", falar: "one billion" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Comma and point", texto: "In English, the comma separates thousands and the point separates decimals. It is the opposite of Brazil.", lista: ["English: 1,250.75", "Brazil: 1.250,75"] },
          { titulo: "Hundreds of…", texto: "Without an exact number, use -s and “of”.", lista: ["hundreds of people", "thousands of years", "millions of fans"] }
        ]}
      ]
    },

    {
      id: "dia-a-dia",
      rotulo: "Part 6",
      titulo: "Numbers in everyday life",
      tituloPt: "Números no dia a dia",
      icone: "dinheiro",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Prices", lista: ["$3.50: three fifty / three dollars and fifty cents", "£12.99: twelve ninety-nine", "€100: a hundred euros"] },
          { titulo: "Phone numbers", texto: "Say each digit. Zero is often “oh”. Two equal digits: “double”.", lista: ["555-0198: five five five, oh one nine eight", "33: double three"] },
          { titulo: "Ages", lista: ["I'm twenty-five (years old).", "She's in her thirties."] },
          { titulo: "Zero", texto: "zero (general), oh (phones, years), nil (football, UK), love (tennis)." }
        ]},
        { tipo: "frases", titulo: "Questions with numbers:", itens: [
          { en: "How much is it? It's twenty dollars.", pt: "Quanto custa? Custa vinte dólares." },
          { en: "How many students are there? There are fifteen.", pt: "Quantos alunos há? Há quinze." },
          { en: "How old are you? I'm thirty-two.", pt: "Quantos anos você tem? Tenho trinta e dois." },
          { en: "What's your phone number?", pt: "Qual é o seu número de telefone?" }
        ]},
        { tipo: "dica", rotulo: "Much or many?", texto: "How many + things you can count (students, apples). How much + money and things you can't count (water, time)." }
      ]
    },

    {
      id: "contas-vocabulario",
      rotulo: "Part 7",
      titulo: "Basic math: the vocabulary",
      tituloPt: "Contas básicas: o vocabulário",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "To do math in English you need eight words. Tap to hear them." },
        { tipo: "grupos", grupos: [
          { titulo: "Operations", itens: [
            { en: "plus", pt: "mais (+)" },
            { en: "minus", pt: "menos (−)" },
            { en: "times", pt: "vezes (×)" },
            { en: "divided by", pt: "dividido por (÷)" },
            { en: "equals", pt: "é igual a (=)" }
          ]},
          { titulo: "Names", itens: [
            { en: "addition", pt: "adição" },
            { en: "subtraction", pt: "subtração" },
            { en: "multiplication", pt: "multiplicação" },
            { en: "division", pt: "divisão" },
            { en: "the result", pt: "o resultado" }
          ]}
        ]},
        { tipo: "dica", rotulo: "Two ways to say it:", texto: "“Five plus three equals eight” and “Five plus three is eight” are both correct. “Is” is more common in conversation." }
      ]
    },

    {
      id: "contas",
      rotulo: "Part 8",
      titulo: "Basic math: saying the operations",
      tituloPt: "Contas básicas: falando as operações",
      icone: "check",
      blocos: [
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Addition +", texto: "plus", lista: ["2 + 3 = 5: two plus three equals five", "10 + 15 = 25: ten plus fifteen is twenty-five"] },
          { titulo: "Subtraction −", texto: "minus", lista: ["9 − 4 = 5: nine minus four equals five", "50 − 20 = 30: fifty minus twenty is thirty"] },
          { titulo: "Multiplication ×", texto: "times / multiplied by", lista: ["3 × 4 = 12: three times four equals twelve", "6 × 7 = 42: six multiplied by seven is forty-two"] },
          { titulo: "Division ÷", texto: "divided by", lista: ["20 ÷ 5 = 4: twenty divided by five equals four", "100 ÷ 4 = 25: a hundred divided by four is twenty-five"] }
        ]},
        { tipo: "pronuncia", itens: [
          { en: "7 + 8 = 15", guia: "seven plus eight equals fifteen", falar: "seven plus eight equals fifteen" },
          { en: "30 − 12 = 18", guia: "thirty minus twelve equals eighteen", falar: "thirty minus twelve equals eighteen" },
          { en: "9 × 9 = 81", guia: "nine times nine equals eighty-one", falar: "nine times nine equals eighty-one" },
          { en: "56 ÷ 8 = 7", guia: "fifty-six divided by eight equals seven", falar: "fifty-six divided by eight equals seven" }
        ]},
        { tipo: "frases", titulo: "Useful expressions:", itens: [
          { en: "What's five plus seven?", pt: "Quanto é cinco mais sete?" },
          { en: "Can you add these numbers?", pt: "Você pode somar esses números?" },
          { en: "Let's split the bill. That's thirty each.", pt: "Vamos dividir a conta. Dá trinta para cada um." },
          { en: "Twice ten is twenty.", pt: "Duas vezes dez é vinte." },
          { en: "Half of fifty is twenty-five.", pt: "Metade de cinquenta é vinte e cinco." }
        ]}
      ]
    },

    {
      id: "problemas",
      rotulo: "Part 9",
      titulo: "Math in real life",
      tituloPt: "Contas na vida real",
      icone: "dinheiro",
      blocos: [
        { tipo: "dialogo", rotuloBotao: "Listen to the whole dialogue", falas: [
          { quem: "Ana", lado: "a", en: "How much is the bill?", pt: "Quanto deu a conta?" },
          { quem: "Leo", lado: "b", en: "It's sixty dollars.", pt: "Deu sessenta dólares." },
          { quem: "Ana", lado: "a", en: "There are three of us, so sixty divided by three is twenty.", pt: "Somos três, então sessenta dividido por três é vinte." },
          { quem: "Leo", lado: "b", en: "Plus a ten percent tip. Six dollars, so two more each.", pt: "Mais dez por cento de gorjeta. Seis dólares, então mais dois para cada um." },
          { quem: "Ana", lado: "a", en: "OK, twenty plus two equals twenty-two each.", pt: "Certo, vinte mais dois é vinte e dois para cada um." }
        ]},
        { tipo: "dica", rotulo: "Percent:", texto: "% is “percent”: ten percent, fifty percent, a hundred percent." }
      ]
    },

    {
      id: "pratica",
      rotulo: "Practice",
      titulo: "Test yourself",
      tituloPt: "Teste: faça a conta e toque para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", rotuloClique: "Tap to see the answer", itens: [
          { pergunta: "How do you say 17?", resposta: "seventeen" },
          { pergunta: "How do you say 70?", resposta: "seventy" },
          { pergunta: "How do you say 346?", resposta: "three hundred (and) forty-six" },
          { pergunta: "What's four plus nine?", resposta: "Four plus nine equals thirteen." },
          { pergunta: "What's twenty minus seven?", resposta: "Twenty minus seven equals thirteen." },
          { pergunta: "What's six times eight?", resposta: "Six times eight equals forty-eight." },
          { pergunta: "What's forty-five divided by nine?", resposta: "Forty-five divided by nine equals five." },
          { pergunta: "A pizza costs $24. Four friends split it. How much each?", resposta: "Twenty-four divided by four is six. Six dollars each." }
        ]},
        { tipo: "lista", titulo: "Your turn:", numerada: true, itens: [
          "Count from 1 to 20 out loud, then count by tens to 100.",
          "Say your phone number in English, digit by digit.",
          "Say the price of three things you bought this week.",
          "Ask a partner three math questions: “What's … plus / minus / times / divided by …?”"
        ]}
      ]
    }
  ]
});
