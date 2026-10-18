/*
  MeaEnglish – Week 1 PT 2 · Aula 1 – Destination, Alphabet & Greetings
  Conteúdo transcrito fielmente do PDF original (pdfs/MeaEnglish-Semana-1-PT-2.pdf).
*/
MEA.registrarAula({
  id: "week-1-pt-2",
  curso: "MeaEnglish – Week 1 PT 2",
  semana: "Semana 1",
  ciclo: "PT 2",
  titulo: "Aula 1 – Destination, Alphabet & Greetings",
  capa: "assets/img/week-1-pt-2/capa.jpg",
  capaAlt: "Livro aberto e xícara sobre uma mesa iluminada pela janela",
  pdf: "pdfs/MeaEnglish-Semana-1-PT-2.pdf",

  secoes: [
    {
      id: "bem-vindo",
      rotulo: "Semana 1",
      titulo: "Bem-vindo à Semana 1",
      icone: "estrela",
      imagem: "assets/img/week-1-pt-2/veleiro.jpg",
      imagemAlt: "Veleiro navegando ao pôr do sol",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "English", en: "MeaEnglish – Welcome to Week 1" },
          { titulo: "Português", texto: "MeaEnglish – Bem-vindo à Semana 1" }
        ]},
        { tipo: "texto", texto: "Este é o início da sua jornada com o inglês." },
        { tipo: "pares", itens: [ { en: "This is the beginning of your journey with English." } ] },
        { tipo: "texto", texto: "Juntos, vamos construir uma base sólida que abrirá portas para novas oportunidades, conexões e conquistas." }
      ]
    },

    {
      id: "para-onde",
      titulo: "Para Onde Você Quer Ir?",
      icone: "bussola",
      imagem: "assets/img/week-1-pt-2/bussola.jpg",
      imagemAlt: "Bússola dourada aberta sobre um mapa ilustrado",
      blocos: [
        { tipo: "bilingue",
          en: ["Where do you want to go? What do you want to achieve while you are on the MEA journey?", "It is ok to change the destination in the middle of the journey. Now you will take another path."],
          pt: ["Para onde você quer ir? O que você quer alcançar enquanto estiver na jornada MEA?", "Tudo bem mudar o destino no meio da jornada. Agora você vai seguir outro caminho."] },
        { tipo: "dica", rotulo: "🧠 Extra pedagógico:", texto: "Seu cérebro aprende melhor quando tem um destino claro. Your brain learns better when it has a clear destination." }
      ]
    },

    {
      id: "vocabulario",
      rotulo: "Semana 1",
      titulo: "Vocabulário & Intenções da Semana",
      icone: "calendario",
      blocos: [
        { tipo: "texto", texto: "Estas são palavras e frases essenciais para expressar suas metas e planos durante a jornada de aprendizado:" },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Alphabet – Alfabeto", rotuloEn: "English:", en: "This week I want to learn how to pronounce the alphabet.", rotuloPt: "Português:", pt: "Esta semana eu quero aprender a pronunciar o alfabeto." },
          { titulo: "Productivity – Produtividade", rotuloEn: "English:", en: "This week I want to be productive. I will work out 3 times this week.", rotuloPt: "Português:", pt: "Esta semana eu quero ser produtivo(a). Vou me exercitar 3 vezes." },
          { titulo: "Goals – Alvos", rotuloEn: "English:", en: "This week I'm going to set goals.", rotuloPt: "Português:", pt: "Esta semana eu vou definir metas." },
          { titulo: "Trip – Viagem", rotuloEn: "English:", en: "I'm going on a trip this weekend.", rotuloPt: "Português:", pt: "Vou viajar neste final de semana." },
          { titulo: "English – Inglês", rotuloEn: "English:", en: "I will study English 10 minutes a day, from Monday to Friday.", rotuloPt: "Português:", pt: "Vou estudar inglês 10 minutos por dia, de segunda a sexta." }
        ]}
      ]
    },

    {
      id: "alvos",
      titulo: "Seus Alvos para a Semana 1",
      icone: "alvo",
      banner: "assets/img/week-1-pt-2/alvo-mea.jpg",
      bannerAlt: "Letras MEA em destaque sobre um alvo azul",
      blocos: [
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "envelope", titulo: "Alfabeto", texto: "Aprender o alfabeto e sua pronúncia em inglês" },
          { icone: "caixasom", titulo: "Fonética", texto: "Entender a fonética básica das letras e palavras" },
          { icone: "aperto", titulo: "Saudações", texto: "Praticar saudações e apresentações cotidianas" }
        ]},
        { tipo: "dica", rotulo: "🧠 Lembre-se:", texto: "Pequenos alvos criam consistência. Small goals create consistency." }
      ]
    },

    {
      id: "alfabeto-a-m",
      rotulo: "Parte 1",
      titulo: "Alfabeto Inglês – Letras A-M",
      icone: "letras",
      imagem: "assets/img/week-1-pt-2/abc.jpg",
      imagemAlt: "Blocos de madeira com as letras de A a M",
      blocos: [
        { tipo: "texto", texto: "Aprenda a pronúncia correta de cada letra com exemplos práticos de palavras do dia a dia:" },
        { tipo: "alfabeto", itens: [
          { letra: "A", som: "ei", palavra: "apple", pt: "maçã" },
          { letra: "B", som: "bi", palavra: "boy", pt: "menino" },
          { letra: "C", som: "si", palavra: "cat", pt: "gato" },
          { letra: "D", som: "di", palavra: "dog", pt: "cachorro" },
          { letra: "E", som: "i", palavra: "egg", pt: "ovo" },
          { letra: "F", som: "ef", palavra: "fish", pt: "peixe" },
          { letra: "G", som: "ji", palavra: "girl", pt: "menina" },
          { letra: "H", som: "eitch", palavra: "house", pt: "casa" },
          { letra: "I", som: "ai", palavra: "ice", pt: "gelo" },
          { letra: "J", som: "djei", palavra: "jump", pt: "pular" },
          { letra: "K", som: "kei", palavra: "key", pt: "chave" },
          { letra: "L", som: "el", palavra: "light", pt: "luz" },
          { letra: "M", som: "em", palavra: "milk", pt: "leite" }
        ]}
      ]
    },

    {
      id: "alfabeto-n-z",
      rotulo: "Parte 2",
      titulo: "Alfabeto Inglês – Letras N-Z",
      icone: "letras",
      banner: "assets/img/week-1-pt-2/alfabeto-nz.jpg",
      bannerAlt: "Letras do alfabeto em tons de azul",
      blocos: [
        { tipo: "texto", texto: "Continue praticando a pronúncia das últimas letras do alfabeto:" },
        { tipo: "alfabeto", itens: [
          { letra: "N", som: "en", palavra: "nose", pt: "nariz" },
          { letra: "O", som: "ou", palavra: "orange", pt: "laranja" },
          { letra: "P", som: "pi", palavra: "pen", pt: "caneta" },
          { letra: "Q", som: "kiu", palavra: "queen", pt: "rainha" },
          { letra: "R", som: "ar", palavra: "red", pt: "vermelho" },
          { letra: "S", som: "es", palavra: "sun", pt: "sol" },
          { letra: "T", som: "ti", palavra: "tree", pt: "árvore" },
          { letra: "U", som: "iu", palavra: "umbrella", pt: "guarda-chuva" },
          { letra: "V", som: "vi", palavra: "vase", pt: "vaso" },
          { letra: "W", som: "dabliu", palavra: "watch", pt: "relógio" },
          { letra: "X", som: "eks", palavra: "xylophone", pt: "xilofone" },
          { letra: "Y", som: "uai", palavra: "yellow", pt: "amarelo" },
          { letra: "Z", som: "zi\" ou \"zed", palavra: "zebra", pt: "zebra" }
        ]}
      ]
    },

    {
      id: "conjunctions",
      titulo: "Conjunctions ( Conjunções) Essenciais em Inglês",
      icone: "conversa",
      banner: "assets/img/week-1-pt-2/conexoes.jpg",
      bannerAlt: "Esferas conectadas por linhas iluminadas",
      blocos: [
        { tipo: "texto", texto: "Estas são comuns em inglês. Elas aparecem em quase todas as frases que você vai encontrar:" },
        { tipo: "palavras", itens: ["To Be", "And", "Of", "A", "I", "It", "Is", "That", "Are", "As", "With", "Not", "On", "For", "At", "By", "Then", "Have"] }
      ]
    },

    {
      id: "greetings",
      titulo: "Saudações( Greetings) em Inglês",
      icone: "sol",
      imagem: "assets/img/week-1-pt-2/saudacoes.jpg",
      imagemAlt: "Duas pessoas se cumprimentando em diferentes momentos do dia",
      blocos: [
        { tipo: "cartoes", itens: [
          { icone: "nascer", titulo: "Morning Greetings", subtitulo: "Saudações Matinais", lista: ["Good morning", "Good morning, [person's name]"] },
          { icone: "sol", titulo: "Afternoon Greetings", subtitulo: "Saudações Vespertinas", lista: ["Good afternoon", "Good afternoon, [person's name]"] },
          { icone: "lua", titulo: "Evening Greetings", subtitulo: "Saudações Noturnas", lista: ["Good evening", "Good evening, [person's name]"] }
        ]}
      ]
    },

    {
      id: "apresentacoes",
      titulo: "Apresentações Formais e Informais",
      icone: "aperto",
      imagem: "assets/img/week-1-pt-2/apresentacoes.jpg",
      imagemAlt: "Duas pessoas apertando as mãos em um escritório",
      blocos: [
        { tipo: "texto", texto: "Aprenda as expressões mais usadas quando você conhece alguém novo, seja em contextos formais ou casuais:" },
        { tipo: "cartoes", estilo: "balao", itens: [
          { en: "How do you do?", pt: "Como vai?" },
          { en: "Pleased to meet you", pt: "Prazer em conhecê-lo(a)" },
          { en: "Nice to meet you", pt: "Prazer" },
          { en: "It's nice to meet you", pt: "É um prazer conhecê-lo(a)" },
          { en: "It's a pleasure to meet you", pt: "É um prazer conhecê-lo(a)" }
        ]}
      ]
    },

    {
      id: "correspondencia",
      titulo: "Correspondência Formal",
      icone: "carta",
      imagem: "assets/img/week-1-pt-2/carta.jpg",
      imagemAlt: "Carta formal e caneta sobre uma mesa azul",
      blocos: [
        { tipo: "texto", texto: "Quando você escreve e-mails ou cartas formais em inglês, estas são as saudações mais apropriadas:" },
        { tipo: "cartoes", estilo: "escuro", itens: [
          { en: "Dear Sir or Madam", pt: "Prezado Senhor ou Senhora", nota: "Use quando você não sabe o nome da pessoa." },
          { en: "To Whom It May Concern", pt: "A quem possa interessar", nota: "Use para comunicações muito formais ou gerais." }
        ]}
      ]
    },

    {
      id: "pratique",
      titulo: "Pratique, Pratique, Pratique!",
      icone: "pessoas",
      imagem: "assets/img/week-1-pt-2/pratique.jpg",
      imagemAlt: "Três estudantes sorrindo e estudando juntos",
      blocos: [
        { tipo: "bilingue",
          en: ["Walk with people who are on the journey with you. Walk with people who share goals like yours."],
          pt: ["Caminhe com pessoas que estão na jornada com você. Caminhe com pessoas que compartilham os mesmos alvos que os seus."] }
      ]
    },

    {
      id: "consistencia",
      titulo: "Consistência é Melhor que Perfeição",
      icone: "check",
      imagem: "assets/img/week-1-pt-2/consistencia.jpg",
      imagemAlt: "A frase Consistency is better than perfection em letras em relevo",
      blocos: [
        { tipo: "bilingue", en: ["Consistency is better than perfection."], pt: ["Consistência é melhor que perfeição."] },
        { tipo: "texto", texto: "Lembre-se: o progresso acontece um passo de cada vez. Não se preocupe em ser perfeito desde o início. O importante é continuar praticando, mesmo que apenas 10 minutos por dia. Pequenas ações diárias criam grandes resultados ao longo do tempo. Você está no caminho certo!" }
      ]
    }
  ]
});
