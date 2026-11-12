/*
  Colors (inglês) — aula criada pela MEA Academy.
  Cores básicas, tons, posição do adjetivo, perguntas, misturas e expressões idiomáticas.
  Explicações em inglês, com a tradução em português de cada palavra.
*/
MEA.registrarAula({
  id: "cores",
  curso: "MEA English",
  semana: "Básico",
  titulo: "Colors",
  subtitulo: "As cores em inglês",
  resumo: "The basic colors, light and dark shades, where to put the color in a sentence, how to ask about colors, mixing colors and the most common color expressions.",
  capaTexto: "red · blue\nyellow",

  secoes: [
    {
      id: "basicas",
      rotulo: "Part 1",
      titulo: "The basic colors",
      tituloPt: "As cores básicas",
      icone: "sol",
      blocos: [
        { tipo: "texto", texto: "Tap each color to hear it. Use the button to hide the English word and test your memory." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { cor: "#d63a3a", en: "red", pt: "vermelho" },
          { cor: "#f28c28", en: "orange", pt: "laranja" },
          { cor: "#f2c94c", en: "yellow", pt: "amarelo" },
          { cor: "#3f9a4a", en: "green", pt: "verde" },
          { cor: "#2f6fd1", en: "blue", pt: "azul" },
          { cor: "#7e4fb0", en: "purple", pt: "roxo" },
          { cor: "#f19bbf", en: "pink", pt: "rosa" },
          { cor: "#7a4e2d", en: "brown", pt: "marrom" },
          { cor: "#111111", en: "black", pt: "preto" },
          { cor: "#ffffff", en: "white", pt: "branco" },
          { cor: "#8e9399", en: "gray / grey", pt: "cinza" },
          { cor: "#e6d5b8", en: "beige", pt: "bege" }
        ]},
        { tipo: "dica", rotulo: "Spelling:", texto: "Gray is American English; grey is British English. In the same way, the word itself is color (US) or colour (UK)." }
      ]
    },

    {
      id: "pronuncia",
      rotulo: "Part 2",
      titulo: "Pronunciation",
      tituloPt: "Pronúncia das cores mais difíceis",
      icone: "caixasom",
      blocos: [
        { tipo: "pronuncia", itens: [
          { en: "color", guia: "CÂ-lâr" },
          { en: "orange", guia: "Ó-rindj" },
          { en: "purple", guia: "PÂR-pâl" },
          { en: "yellow", guia: "IÉ-lou" },
          { en: "brown", guia: "BRÁUN" },
          { en: "beige", guia: "BÊIJ" },
          { en: "white", guia: "UÁIT" },
          { en: "green", guia: "GRIIN" }
        ]},
        { tipo: "dica", rotulo: "Careful:", texto: "Purple and pink are different colors: purple is roxo, pink is rosa." }
      ]
    },

    {
      id: "tons",
      rotulo: "Part 3",
      titulo: "Light, dark and other shades",
      tituloPt: "Tons: claro, escuro e outras nuances",
      icone: "olho",
      blocos: [
        { tipo: "texto", texto: "Put light or dark before the color. In English, the description always comes first." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o inglês para adivinhar", itens: [
          { cor: "#9cc6f2", en: "light blue", pt: "azul-claro" },
          { cor: "#173a6b", en: "dark blue", pt: "azul-escuro" },
          { cor: "#9ed49b", en: "light green", pt: "verde-claro" },
          { cor: "#1f5a2a", en: "dark green", pt: "verde-escuro" },
          { cor: "#0f6e80", en: "teal", pt: "azul-petróleo" },
          { cor: "#1c2c5b", en: "navy blue", pt: "azul-marinho" },
          { cor: "#c9a227", en: "gold", pt: "dourado" },
          { cor: "#c0c4c8", en: "silver", pt: "prateado" }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "-ish = more or less", texto: "Add -ish when the color is not exact.", lista: ["reddish: avermelhado", "greenish: esverdeado", "bluish: azulado"] },
          { titulo: "Bright and pale", texto: "Bright is strong and vivid; pale is soft.", lista: ["bright yellow: amarelo vivo", "pale pink: rosa-claro, rosa-bebê"] }
        ]}
      ]
    },

    {
      id: "posicao",
      rotulo: "Part 4",
      titulo: "Where does the color go?",
      tituloPt: "Onde a cor fica na frase",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Colors are adjectives. In English, they come BEFORE the noun and never change: no plural, no masculine or feminine." },
        { tipo: "frases", itens: [
          { en: "a red car", pt: "um carro vermelho" },
          { en: "two red cars", pt: "dois carros vermelhos (red não muda)" },
          { en: "a black dress", pt: "um vestido preto" },
          { en: "white shoes", pt: "sapatos brancos" },
          { en: "My eyes are brown.", pt: "Meus olhos são castanhos." },
          { en: "The sky is blue today.", pt: "O céu está azul hoje." }
        ]},
        { tipo: "dica", rotulo: "Classic mistake:", texto: "Don't say “a car red” or “two reds cars”. The correct form is “a red car”, “two red cars”." }
      ]
    },

    {
      id: "perguntas",
      rotulo: "Part 5",
      titulo: "Asking about colors",
      tituloPt: "Perguntando sobre cores",
      icone: "conversa",
      blocos: [
        { tipo: "frases", itens: [
          { en: "What color is your car? It's silver.", pt: "De que cor é o seu carro? É prata." },
          { en: "What color are your eyes? They're green.", pt: "De que cor são seus olhos? São verdes." },
          { en: "What's your favorite color? It's blue.", pt: "Qual é a sua cor favorita? É azul." },
          { en: "Do you have this in black?", pt: "Vocês têm este em preto?" },
          { en: "Does it come in other colors?", pt: "Tem em outras cores?" }
        ]},
        { tipo: "dialogo", rotuloBotao: "Listen to the whole dialogue", falas: [
          { quem: "Clerk", lado: "a", en: "Can I help you?", pt: "Posso ajudar?" },
          { quem: "Ana", lado: "b", en: "Yes, I love this shirt. Do you have it in green?", pt: "Sim, adorei esta camisa. Vocês têm em verde?" },
          { quem: "Clerk", lado: "a", en: "Sorry, only in white, navy blue and pink.", pt: "Desculpe, só em branco, azul-marinho e rosa." },
          { quem: "Ana", lado: "b", en: "OK, I'll take the navy blue one.", pt: "Tudo bem, vou levar a azul-marinho." }
        ]}
      ]
    },

    {
      id: "misturas",
      rotulo: "Part 6",
      titulo: "Mixing colors",
      tituloPt: "Misturando cores",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "Primary colors mix to make secondary colors. Notice how we say it in English." },
        { tipo: "cores", itens: [
          { cores: ["#d63a3a", "#f2c94c", "#f28c28"], en: "Red and yellow make orange." },
          { cores: ["#2f6fd1", "#f2c94c", "#3f9a4a"], en: "Blue and yellow make green." },
          { cores: ["#d63a3a", "#2f6fd1", "#7e4fb0"], en: "Red and blue make purple." },
          { cores: ["#111111", "#ffffff", "#8e9399"], en: "Black and white make gray." },
          { cores: ["#d63a3a", "#ffffff", "#f19bbf"], en: "Red and white make pink." }
        ]}
      ]
    },

    {
      id: "expressoes",
      rotulo: "Part 7",
      titulo: "Color expressions",
      tituloPt: "Expressões com cores",
      icone: "estrela",
      blocos: [
        { tipo: "texto", texto: "English has many expressions with colors. They don't translate word by word." },
        { tipo: "frases", itens: [
          { en: "I'm feeling blue today.", pt: "Estou triste hoje." },
          { en: "He was green with envy.", pt: "Ele ficou morrendo de inveja." },
          { en: "She was caught red-handed.", pt: "Ela foi pega em flagrante." },
          { en: "It happens once in a blue moon.", pt: "Acontece muito raramente." },
          { en: "It was just a white lie.", pt: "Foi só uma mentirinha inofensiva." },
          { en: "He's the black sheep of the family.", pt: "Ele é a ovelha negra da família." },
          { en: "We got the green light.", pt: "Recebemos sinal verde (autorização)." },
          { en: "I saw red.", pt: "Fiquei furioso." }
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
          { pergunta: "What color is the sky?", resposta: "It's blue." },
          { pergunta: "What color is a banana?", resposta: "It's yellow." },
          { pergunta: "Red and yellow make…", resposta: "orange" },
          { pergunta: "Blue and yellow make…", resposta: "green" },
          { pergunta: "Correct it: I have two cars reds.", resposta: "I have two red cars." },
          { pergunta: "How do you say azul-marinho?", resposta: "navy blue" },
          { pergunta: "What does “I'm feeling blue” mean?", resposta: "I'm sad." },
          { pergunta: "Purple or pink? (roxo)", resposta: "purple" }
        ]},
        { tipo: "lista", titulo: "Your turn:", numerada: true, itens: [
          "Say your favorite color and why.",
          "Describe the colors of your clothes today: “I'm wearing a blue shirt and black pants.”",
          "Describe the colors of your eyes and your hair.",
          "Look around you and name five objects with their colors."
        ]}
      ]
    }
  ]
});
