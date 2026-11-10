/*
  Conversação (espanhol)
  Aula criada pela MEA Academy: como começar, manter e encerrar uma conversa em espanhol.
  Mesma estrutura da versão em inglês (aulas/conversacao.js).
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-conversacao",
  idioma: "es",
  curso: "MEA Español",
  semana: "Conversação",
  titulo: "Conversação",
  subtitulo: "Como começar, manter e encerrar uma conversa em espanhol",
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
      titulo: "Empezar una conversación",
      tituloPt: "Começando uma conversa",
      icone: "aperto",
      blocos: [
        { tipo: "frases", titulo: "Cumprimentos:", itens: [
          { en: "¡Hola! ¿Cómo estás?", pt: "Oi! Como você está?" },
          { en: "¿Qué tal?", pt: "E aí, tudo bem? (informal)" },
          { en: "¡Buenos días! Qué gusto verte.", pt: "Bom dia! Que bom te ver." },
          { en: "¡Cuánto tiempo!", pt: "Quanto tempo! (para quem você não vê há tempo)" }
        ]},
        { tipo: "frases", titulo: "Respostas:", itens: [
          { en: "Bien, gracias. ¿Y tú?", pt: "Estou bem, obrigado(a). E você?" },
          { en: "¡Muy bien!", pt: "Muito bem!" },
          { en: "Más o menos.", pt: "Mais ou menos." },
          { en: "Un poco cansado, pero bien.", pt: "Um pouco cansado, mas tudo bem." }
        ]},
        { tipo: "dica", rotulo: "Atenção:", texto: "Com amigos use “tú” (¿Cómo estás?). Com desconhecidos, pessoas mais velhas ou em situações formais use “usted” (¿Cómo está usted?)." }
      ]
    },

    {
      id: "puxar-assunto",
      rotulo: "Parte 2",
      titulo: "Charlas cotidianas",
      tituloPt: "Puxando assunto",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "A conversa leve do dia a dia tem temas seguros: o tempo, o fim de semana, trabalho ou estudos, comida e viagens." },
        { tipo: "cartoes", itens: [
          { titulo: "O tempo", en: "Hace buen tiempo hoy, ¿verdad?", pt: "O tempo está bom hoje, não é?" },
          { titulo: "Fim de semana", en: "¿Qué hiciste el fin de semana?", pt: "O que você fez no fim de semana?" },
          { titulo: "Trabalho e estudos", en: "¿A qué te dedicas?", pt: "O que você faz? (qual é sua profissão?)" },
          { titulo: "Planos", en: "¿Tienes planes para el fin de semana?", pt: "Você tem planos para o fim de semana?" },
          { titulo: "Comida", en: "¿Ya probaste el restaurante nuevo?", pt: "Você já experimentou o restaurante novo?" },
          { titulo: "Viagens", en: "¿Has viajado al extranjero?", pt: "Você já foi para o exterior?" }
        ]}
      ]
    },

    {
      id: "perguntas",
      rotulo: "Parte 3",
      titulo: "Mantener la conversación",
      tituloPt: "Mantendo a conversa viva",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "Perguntas de sim ou não encerram o assunto rápido. Perguntas abertas, com qué, dónde, cómo e por qué, fazem a pessoa falar mais." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Pergunta fechada", en: "¿Te gusta la música?", pt: "Você gosta de música?", nota: "Resposta provável: “Sí.” E a conversa para." },
          { titulo: "Pergunta aberta", en: "¿Qué tipo de música te gusta?", pt: "Que tipo de música você gosta?", nota: "A pessoa precisa explicar, e a conversa continua." }
        ]},
        { tipo: "frases", titulo: "Perguntas para continuar o assunto:", itens: [
          { en: "¿En serio? ¡Cuéntame más!", pt: "Sério? Me conta mais!" },
          { en: "¿Qué tal fue?", pt: "Como foi?" },
          { en: "¿Por qué te gusta?", pt: "Por que você gosta disso?" },
          { en: "¿Y tú?", pt: "E você?" }
        ]}
      ]
    },

    {
      id: "reagir",
      rotulo: "Parte 4",
      titulo: "Reaccionar",
      tituloPt: "Reagindo ao que a pessoa diz",
      icone: "coracao",
      blocos: [
        { tipo: "texto", texto: "Reagir mostra que você está ouvindo. São frases curtas e muito usadas por nativos." },
        { tipo: "palavras", itens: ["¿En serio?", "¡Qué bien!", "¡Qué padre!", "¡Qué lástima!", "Ya veo.", "¡Qué interesante!", "¡Yo también!", "¡Qué suerte!"] },
        { tipo: "frases", itens: [
          { en: "¡Qué bien!", pt: "Que ótimo! (notícia boa)" },
          { en: "¡Qué lástima! Lo siento mucho.", pt: "Que pena! Sinto muito. (notícia ruim)" },
          { en: "¡Yo también!", pt: "Eu também!" },
          { en: "Yo tampoco.", pt: "Eu também não." }
        ]},
        { tipo: "dica", rotulo: "Curiosidade:", texto: "“¡Qué padre!” (que legal!) é típico do México. Na Espanha se diz “¡Qué guay!” e na Argentina “¡Qué bueno!”." }
      ]
    },

    {
      id: "opiniao",
      rotulo: "Parte 5",
      titulo: "Dar tu opinión",
      tituloPt: "Dando opinião, concordando e discordando",
      icone: "estrela",
      blocos: [
        { tipo: "frases", titulo: "Para dar opinião:", itens: [
          { en: "Creo que…", pt: "Eu acho que…" },
          { en: "En mi opinión…", pt: "Na minha opinião…" },
          { en: "Para mí…", pt: "Para mim…" }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Concordar", lista: ["Estoy de acuerdo.", "Tienes razón.", "¡Exacto!"] },
          { titulo: "Discordar com educação", lista: ["No estoy seguro.", "Entiendo, pero…", "No estoy de acuerdo."] }
        ]},
        { tipo: "dica", rotulo: "Falso amigo:", texto: "“Tienes razón” significa “você tem razão”. Não diga “estás correcto” para concordar: soa estranho no dia a dia." }
      ]
    },

    {
      id: "nao-entendi",
      rotulo: "Parte 6",
      titulo: "Cuando no entiendes",
      tituloPt: "Quando você não entende",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "Não entender faz parte. Pedir para repetir é normal e mostra interesse. Nunca finja que entendeu!" },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "caixasom", titulo: "Pedir para repetir", en: "Perdón, ¿puedes repetirlo, por favor?", pt: "Desculpe, pode repetir, por favor?" },
          { icone: "relogio", titulo: "Pedir para falar devagar", en: "¿Puedes hablar más despacio, por favor?", pt: "Pode falar mais devagar, por favor?" },
          { icone: "lupa", titulo: "Perguntar o significado", en: "¿Qué significa eso?", pt: "O que isso significa?" },
          { icone: "letras", titulo: "Perguntar como se diz", en: "¿Cómo se dice “saudade” en español?", pt: "Como se diz “saudade” em espanhol?" },
          { icone: "nota", titulo: "Pedir para soletrar", en: "¿Cómo se escribe?", pt: "Como se escreve?" }
        ]}
      ]
    },

    {
      id: "encerrar",
      rotulo: "Parte 7",
      titulo: "Terminar la conversación",
      tituloPt: "Encerrando a conversa",
      icone: "check",
      blocos: [
        { tipo: "frases", itens: [
          { en: "¡Fue un gusto hablar contigo!", pt: "Foi bom conversar com você!" },
          { en: "Me tengo que ir.", pt: "Preciso ir agora." },
          { en: "¡Hasta luego!", pt: "Até mais tarde!" },
          { en: "¡Hasta mañana!", pt: "Até amanhã!" },
          { en: "¡Cuídate!", pt: "Se cuida!" },
          { en: "¡Que tengas un buen día!", pt: "Tenha um bom dia!" }
        ]}
      ]
    },

    {
      id: "dialogo",
      rotulo: "Exemplo",
      titulo: "Una conversación real",
      tituloPt: "Uma conversa completa",
      icone: "pessoas",
      blocos: [
        { tipo: "texto", texto: "Veja todas as partes juntas. Toque em “Ouvir diálogo completo” para ouvir a conversa inteira." },
        { tipo: "dialogo", falas: [
          { quem: "Ana", lado: "a", en: "¡Hola, Tomás! ¿Cómo estás?", pt: "Oi, Tomás! Como você está?" },
          { quem: "Tomás", lado: "b", en: "¡Hola, Ana! Muy bien, gracias. ¿Y tú?", pt: "Oi, Ana! Muito bem, obrigado. E você?" },
          { quem: "Ana", lado: "a", en: "Bien. ¿Qué hiciste el fin de semana?", pt: "Bem. O que você fez no fim de semana?" },
          { quem: "Tomás", lado: "b", en: "Fui a la playa con mi familia.", pt: "Fui à praia com minha família." },
          { quem: "Ana", lado: "a", en: "¡Qué bien! ¿Qué tal fue?", pt: "Que ótimo! Como foi?" },
          { quem: "Tomás", lado: "b", en: "Fue increíble. ¡El agua estaba perfecta!", pt: "Foi incrível. A água estava perfeita!" },
          { quem: "Ana", lado: "a", en: "¡Qué suerte! Me tengo que ir. ¡Fue un gusto hablar contigo!", pt: "Que sorte! Preciso ir. Foi bom conversar com você!" },
          { quem: "Tomás", lado: "b", en: "¡Igualmente! ¡Hasta luego!", pt: "Igualmente! Até mais!" }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Prática",
      titulo: "¿Qué dirías?",
      tituloPt: "O que você diria? Toque para ver uma resposta possível",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", itens: [
          { emoji: "👋", pergunta: "Te dicen: “¿Cómo estás?”", resposta: "Bien, gracias. ¿Y tú?" },
          { emoji: "😮", pergunta: "Tu amigo tiene un trabajo nuevo.", resposta: "¡Qué bien! ¡Felicidades!" },
          { emoji: "😢", pergunta: "Tu amiga está enferma.", resposta: "¡Qué lástima! Lo siento mucho." },
          { emoji: "🤔", pergunta: "No entendiste.", resposta: "Perdón, ¿puedes repetirlo, por favor?" },
          { emoji: "🐢", pergunta: "La persona habla muy rápido.", resposta: "¿Puedes hablar más despacio, por favor?" },
          { emoji: "🚪", pergunta: "Te tienes que ir.", resposta: "Me tengo que ir. ¡Hasta luego!" }
        ]},
        { tipo: "lista", titulo: "Role-play com um colega:", numerada: true, itens: [
          "Cumprimente e pergunte como a pessoa está.",
          "Faça duas perguntas abertas sobre o fim de semana dela.",
          "Reaja a cada resposta com uma expressão da Parte 4.",
          "Dê sua opinião sobre um assunto e peça a opinião da pessoa.",
          "Encerre a conversa com educação."
        ]},
        { tipo: "destaque", forte: "¡La práctica hace al maestro!", texto: "Quanto mais você conversa, mais natural fica. Use pelo menos três frases desta aula nesta semana." }
      ]
    }
  ]
});
