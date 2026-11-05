/*
  English Lesson: Fruits 🍎 — aula particular (aluno de 12 anos, nível A1)
  Conteúdo transcrito fielmente do texto enviado pela professora.
  Os emojis das fichas e do jogo servem de figura para cada fruta.
*/
MEA.registrarAula({
  id: "fruits",
  curso: "English Lesson",
  semana: "Beginner (A1)",
  ciclo: "45 minutes",
  titulo: "Fruits 🍎",
  subtitulo: "Vocabulary, Speaking & Fun Activities",
  capaEmoji: "🍓 🍌 🍉\n🍍 🍇",

  secoes: [
    {
      id: "objective",
      rotulo: "Lesson plan",
      titulo: "Objective",
      icone: "alvo",
      blocos: [
        { tipo: "info", itens: [
          { rotulo: "Student", valor: "12 years old" },
          { rotulo: "Level", valor: "Beginner (A1)" },
          { rotulo: "Duration", valor: "45 minutes" },
          { rotulo: "Topic", valor: "Fruits, food preferences, and healthy eating" }
        ]},
        { tipo: "lista", titulo: "By the end of the lesson, the student will be able to:", itens: [
          "Recognize and name 15 fruits in English.",
          "Pronounce fruit names correctly.",
          "Ask and answer questions about food preferences.",
          "Build simple sentences using “I like,” “I don't like,” and “My favorite fruit is...”"
        ]}
      ]
    },

    {
      id: "welcome",
      rotulo: "Slide 1",
      titulo: "Welcome!",
      icone: "estrela",
      blocos: [
        { tipo: "chave", estilo: "emojis", titulo: "Today's topic: FRUITS!", texto: "🍓 🍌 🍉 🍍 🍇" },
        { tipo: "pares", titulo: "Warm-up questions:", itens: [
          { en: "Do you like fruits?" },
          { en: "What is your favorite fruit?" },
          { en: "Do you eat fruit every day?" }
        ]}
      ]
    },

    {
      id: "guess",
      rotulo: "Slide 2",
      titulo: "Guess the Fruit!",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "Look at the pictures and guess the fruit!" },
        { tipo: "adivinhe", itens: [
          { emoji: "🍌", pergunta: "What is it?", resposta: "It is a banana!" },
          { emoji: "🍎", pergunta: "What is it?", resposta: "It is an apple!" },
          { emoji: "🍉", pergunta: "What is it?", resposta: "It is a watermelon!" },
          { emoji: "🍓", pergunta: "What is it?", resposta: "It is a strawberry!" }
        ]},
        { tipo: "pares", titulo: "Useful expression:", itens: [
          { en: "“What is this?”" },
          { en: "Answer: “It is a banana!”" }
        ]}
      ]
    },

    {
      id: "vocabulary",
      rotulo: "Slide 3",
      titulo: "Fruit Vocabulary",
      icone: "lista",
      blocos: [
        { tipo: "fichas", itens: [
          { emoji: "🍎", en: "Apple", pt: "Maçã" },
          { emoji: "🍌", en: "Banana", pt: "Banana" },
          { emoji: "🍓", en: "Strawberry", pt: "Morango" },
          { emoji: "🍉", en: "Watermelon", pt: "Melancia" },
          { emoji: "🍊", en: "Orange", pt: "Laranja" },
          { emoji: "🍍", en: "Pineapple", pt: "Abacaxi" },
          { emoji: "🍇", en: "Grapes", pt: "Uvas" },
          { emoji: "🥭", en: "Mango", pt: "Manga" },
          { emoji: "🍐", en: "Pear", pt: "Pera" },
          { emoji: "🍑", en: "Peach", pt: "Pêssego" },
          { emoji: "🍒", en: "Cherry", pt: "Cereja" },
          { emoji: "🍋", en: "Lemon", pt: "Limão" },
          { emoji: "🥥", en: "Coconut", pt: "Coco" },
          { emoji: "🥝", en: "Kiwi", pt: "Kiwi" },
          { emoji: "🫐", en: "Blueberry", pt: "Mirtilo" }
        ]},
        { tipo: "dica", rotulo: "Teacher's tip:", texto: "Use colorful pictures of each fruit. Show the picture first and let the student guess before revealing the English word." }
      ]
    },

    {
      id: "pronunciation",
      rotulo: "Slide 4",
      titulo: "Pronunciation Challenge",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "Let's practice!" },
        { tipo: "pronuncia", itens: [
          { en: "Apple", guia: "É-pəl" },
          { en: "Banana", guia: "bə-NÉ-nə" },
          { en: "Strawberry", guia: "STRÓ-bé-ri" },
          { en: "Watermelon", guia: "UÓ-tər-mé-lən" },
          { en: "Orange", guia: "Ó-rəndj" },
          { en: "Pineapple", guia: "PÁI-né-pəl" },
          { en: "Grapes", guia: "GRÊIPS" },
          { en: "Mango", guia: "MÊN-gou" },
          { en: "Cherry", guia: "TCHÉ-ri" },
          { en: "Lemon", guia: "LÉ-mən" }
        ]},
        { tipo: "lista", titulo: "Activity:", numerada: true, itens: [
          "Listen and repeat.",
          "Say the words slowly.",
          "Say them faster.",
          "Choose your three favorite words and pronounce them without help."
        ]},
        { tipo: "dica", texto: "Pronunciation guides are approximate and adapted for Brazilian Portuguese speakers." }
      ]
    },

    {
      id: "colors",
      rotulo: "Slide 5",
      titulo: "Fruit Colors",
      icone: "sol",
      blocos: [
        { tipo: "texto", texto: "What color is the fruit?" },
        { tipo: "cores", itens: [
          { emoji: "🍌", cores: ["#f2c94c"], en: "A banana is yellow." },
          { emoji: "🍎", cores: ["#d64545", "#6fbf4a"], en: "An apple can be red or green." },
          { emoji: "🍓", cores: ["#d64545"], en: "A strawberry is red." },
          { emoji: "🍉", cores: ["#3f9a3f", "#e0484f"], en: "A watermelon is green and red." },
          { emoji: "🍊", cores: ["#f28c28"], en: "An orange is orange." },
          { emoji: "🫐", cores: ["#4a6fd6"], en: "A blueberry is blue." }
        ]},
        { tipo: "paleta", itens: [
          { en: "Red", cor: "#d64545" }, { en: "Yellow", cor: "#f2c94c" }, { en: "Green", cor: "#4fae4a" },
          { en: "Orange", cor: "#f28c28" }, { en: "Purple", cor: "#8e5bb5" }, { en: "Blue", cor: "#4a6fd6" }
        ]},
        { tipo: "pares", titulo: "Speaking practice:", itens: [
          { en: "“What color is the banana?”" },
          { en: "“The banana is yellow!”" }
        ]}
      ]
    },

    {
      id: "flavors",
      rotulo: "Slide 6",
      titulo: "Sweet or Sour?",
      icone: "coracao",
      blocos: [
        { tipo: "texto", texto: "Let's talk about flavors!" },
        { tipo: "frases", itens: [
          { en: "Sweet", pt: "Doce" },
          { en: "Sour", pt: "Azedo" },
          { en: "Juicy", pt: "Suculento" },
          { en: "Fresh", pt: "Fresco" },
          { en: "Delicious", pt: "Delicioso" }
        ]},
        { tipo: "pares", titulo: "Examples:", itens: [
          { en: "Strawberries are sweet." },
          { en: "Lemons are sour." },
          { en: "Watermelons are juicy." },
          { en: "Apples are delicious." }
        ]},
        { tipo: "dica", rotulo: "Your turn:", texto: "Is a lemon sweet or sour" }
      ]
    }
  ]
});
