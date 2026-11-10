/*
  Conversação (inglês)
  Aula criada pela MEA Academy: como começar, manter e encerrar uma conversa em inglês.
  A versão em espanhol fica em aulas/es-conversacao.js, com a mesma estrutura.
*/
MEA.registrarAula({
  id: "conversacao",
  curso: "MEA English",
  semana: "Conversação",
  titulo: "Conversação",
  subtitulo: "Como começar, manter e encerrar uma conversa em inglês",
  resumo: "As expressões que fazem uma conversa fluir: cumprimentar, puxar assunto, fazer perguntas, reagir, dar opinião, pedir para repetir e se despedir.",
  capaEmoji: "💬 🗣️\n👋 😊",

  secoes: [
    {
      id: "objetivo",
      rotulo: "Introdução",
      titulo: "Por que treinar conversação?",
      icone: "alvo",
      blocos: [
        { tipo: "texto", texto: "Conversar não é só saber palavras: é saber começar, reagir ao que a outra pessoa diz, manter o assunto vivo e encerrar com educação. Nesta aula você vai aprender as frases que fazem isso acontecer." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Começar", texto: "Cumprimentar e puxar assunto." },
          { titulo: "Manter", texto: "Perguntar, reagir e dar opinião." },
          { titulo: "Resolver", texto: "Pedir para repetir quando não entender." },
          { titulo: "Encerrar", texto: "Se despedir com naturalidade." }
        ]},
        { tipo: "dica", rotulo: "Segredo da fluência:", texto: "Ninguém fala sem errar. O importante é se comunicar, não ser perfeito." }
      ]
    },

    {
      id: "comecar",
      rotulo: "Parte 1",
      titulo: "Starting a conversation",
      tituloPt: "Começando uma conversa",
      icone: "aperto",
      blocos: [
        { tipo: "frases", titulo: "Cumprimentos:", itens: [
          { en: "Hi! How are you?", pt: "Oi! Como você está?" },
          { en: "Hey, how's it going?", pt: "E aí, como vão as coisas? (informal)" },
          { en: "Good morning! Nice to see you.", pt: "Bom dia! Que bom te ver." },
          { en: "Long time no see!", pt: "Quanto tempo! (para quem você não vê há tempo)" }
        ]},
        { tipo: "frases", titulo: "Respostas:", itens: [
          { en: "I'm fine, thanks. And you?", pt: "Estou bem, obrigado(a). E você?" },
          { en: "Pretty good!", pt: "Muito bem!" },
          { en: "Not bad.", pt: "Nada mal." },
          { en: "A little tired, but OK.", pt: "Um pouco cansado(a), mas tudo bem." }
        ]},
        { tipo: "dica", rotulo: "Atenção:", texto: "“How are you?” quase sempre é só um cumprimento. A resposta esperada é curta, como “Good, thanks!”, seguida de “And you?”." }
      ]
    },

    {
      id: "puxar-assunto",
      rotulo: "Parte 2",
      titulo: "Small talk",
      tituloPt: "Puxando assunto",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "Small talk é a conversa leve do dia a dia. Temas seguros: o tempo, o fim de semana, trabalho ou estudos, comida e viagens." },
        { tipo: "cartoes", itens: [
          { titulo: "O tempo", en: "Nice weather today, isn't it?", pt: "O tempo está bom hoje, não é?" },
          { titulo: "Fim de semana", en: "What did you do last weekend?", pt: "O que você fez no fim de semana passado?" },
          { titulo: "Trabalho e estudos", en: "What do you do?", pt: "O que você faz? (qual é sua profissão?)" },
          { titulo: "Planos", en: "Do you have any plans for the weekend?", pt: "Você tem planos para o fim de semana?" },
          { titulo: "Comida", en: "Have you tried the new restaurant?", pt: "Você já experimentou o restaurante novo?" },
          { titulo: "Viagens", en: "Have you ever been abroad?", pt: "Você já foi para o exterior?" }
        ]}
      ]
    },

    {
      id: "perguntas",
      rotulo: "Parte 3",
      titulo: "Keeping the conversation going",
      tituloPt: "Mantendo a conversa viva",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "Perguntas de sim ou não encerram o assunto rápido. Perguntas abertas, com What, Where, How e Why, fazem a pessoa falar mais." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Pergunta fechada", en: "Do you like music?", pt: "Você gosta de música?", nota: "Resposta provável: “Yes.” E a conversa para." },
          { titulo: "Pergunta aberta", en: "What kind of music do you like?", pt: "Que tipo de música você gosta?", nota: "A pessoa precisa explicar, e a conversa continua." }
        ]},
        { tipo: "frases", titulo: "Perguntas para continuar o assunto:", itens: [
          { en: "Really? Tell me more!", pt: "Sério? Me conta mais!" },
          { en: "How was it?", pt: "Como foi?" },
          { en: "Why do you like it?", pt: "Por que você gosta disso?" },
          { en: "What about you?", pt: "E você?" }
        ]}
      ]
    },

    {
      id: "reagir",
      rotulo: "Parte 4",
      titulo: "Reacting",
      tituloPt: "Reagindo ao que a pessoa diz",
      icone: "coracao",
      blocos: [
        { tipo: "texto", texto: "Reagir mostra que você está ouvindo. São frases curtas e muito usadas por nativos." },
        { tipo: "palavras", itens: ["Really?", "That's great!", "Wow!", "Oh no!", "I see.", "That's interesting!", "Me too!", "Lucky you!"] },
        { tipo: "frases", itens: [
          { en: "That's great!", pt: "Que ótimo! (notícia boa)" },
          { en: "Oh no! I'm sorry to hear that.", pt: "Ah, não! Sinto muito. (notícia ruim)" },
          { en: "Me too!", pt: "Eu também!" },
          { en: "Me neither.", pt: "Eu também não." }
        ]}
      ]
    },

    {
      id: "opiniao",
      rotulo: "Parte 5",
      titulo: "Giving your opinion",
      tituloPt: "Dando opinião, concordando e discordando",
      icone: "estrela",
      blocos: [
        { tipo: "frases", titulo: "Para dar opinião:", itens: [
          { en: "I think…", pt: "Eu acho que…" },
          { en: "In my opinion…", pt: "Na minha opinião…" },
          { en: "I believe…", pt: "Eu acredito que…" }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Concordar", lista: ["I agree.", "You're right.", "Exactly!"] },
          { titulo: "Discordar com educação", lista: ["I'm not sure about that.", "I see your point, but…", "I don't really agree."] }
        ]},
        { tipo: "dica", rotulo: "Educação conta:", texto: "Em vez de “You're wrong” (você está errado), prefira “I see your point, but…”. Soa muito mais gentil." }
      ]
    },

    {
      id: "nao-entendi",
      rotulo: "Parte 6",
      titulo: "When you don't understand",
      tituloPt: "Quando você não entende",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "Não entender faz parte. Pedir para repetir é normal e mostra interesse. Nunca finja que entendeu!" },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "caixasom", titulo: "Pedir para repetir", en: "Sorry, could you repeat that, please?", pt: "Desculpe, pode repetir, por favor?" },
          { icone: "relogio", titulo: "Pedir para falar devagar", en: "Could you speak more slowly, please?", pt: "Pode falar mais devagar, por favor?" },
          { icone: "lupa", titulo: "Perguntar o significado", en: "What does that mean?", pt: "O que isso significa?" },
          { icone: "letras", titulo: "Perguntar como se diz", en: "How do you say “saudade” in English?", pt: "Como se diz “saudade” em inglês?" },
          { icone: "nota", titulo: "Pedir para soletrar", en: "How do you spell that?", pt: "Como se escreve isso?" }
        ]}
      ]
    },

    {
      id: "encerrar",
      rotulo: "Parte 7",
      titulo: "Ending a conversation",
      tituloPt: "Encerrando a conversa",
      icone: "check",
      blocos: [
        { tipo: "frases", itens: [
          { en: "It was nice talking to you!", pt: "Foi bom conversar com você!" },
          { en: "I have to go now.", pt: "Preciso ir agora." },
          { en: "See you later!", pt: "Até mais tarde!" },
          { en: "See you tomorrow!", pt: "Até amanhã!" },
          { en: "Take care!", pt: "Se cuida!" },
          { en: "Have a nice day!", pt: "Tenha um bom dia!" }
        ]}
      ]
    },

    {
      id: "dialogo",
      rotulo: "Exemplo",
      titulo: "A real conversation",
      tituloPt: "Uma conversa completa",
      icone: "pessoas",
      blocos: [
        { tipo: "texto", texto: "Veja todas as partes juntas. Toque em “Ouvir diálogo completo” para ouvir a conversa inteira." },
        { tipo: "dialogo", falas: [
          { quem: "Ana", lado: "a", en: "Hi, Tom! How are you?", pt: "Oi, Tom! Como você está?" },
          { quem: "Tom", lado: "b", en: "Hey, Ana! Pretty good, thanks. And you?", pt: "Oi, Ana! Muito bem, obrigado. E você?" },
          { quem: "Ana", lado: "a", en: "I'm fine. What did you do last weekend?", pt: "Estou bem. O que você fez no fim de semana passado?" },
          { quem: "Tom", lado: "b", en: "I went to the beach with my family.", pt: "Fui à praia com minha família." },
          { quem: "Ana", lado: "a", en: "That's great! How was it?", pt: "Que ótimo! Como foi?" },
          { quem: "Tom", lado: "b", en: "It was amazing. The water was perfect!", pt: "Foi incrível. A água estava perfeita!" },
          { quem: "Ana", lado: "a", en: "Lucky you! I have to go now. It was nice talking to you!", pt: "Que sorte! Preciso ir agora. Foi bom conversar com você!" },
          { quem: "Tom", lado: "b", en: "You too! See you later!", pt: "Igualmente! Até mais!" }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Prática",
      titulo: "What would you say?",
      tituloPt: "O que você diria? Toque para ver uma resposta possível",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", itens: [
          { emoji: "👋", pergunta: "Someone says: “How are you?”", resposta: "I'm fine, thanks. And you?" },
          { emoji: "😮", pergunta: "Your friend got a new job.", resposta: "That's great! Congratulations!" },
          { emoji: "😢", pergunta: "Your friend is sick.", resposta: "Oh no! I'm sorry to hear that." },
          { emoji: "🤔", pergunta: "You didn't understand.", resposta: "Sorry, could you repeat that, please?" },
          { emoji: "🐢", pergunta: "The person speaks too fast.", resposta: "Could you speak more slowly, please?" },
          { emoji: "🚪", pergunta: "You need to leave.", resposta: "I have to go now. See you later!" }
        ]},
        { tipo: "lista", titulo: "Role-play com um colega:", numerada: true, itens: [
          "Cumprimente e pergunte como a pessoa está.",
          "Faça duas perguntas abertas sobre o fim de semana dela.",
          "Reaja a cada resposta com uma expressão da Parte 4.",
          "Dê sua opinião sobre um assunto e peça a opinião da pessoa.",
          "Encerre a conversa com educação."
        ]},
        { tipo: "destaque", forte: "Practice makes progress!", texto: "Quanto mais você conversa, mais natural fica. Use pelo menos três frases desta aula nesta semana." }
      ]
    }
  ]
});
