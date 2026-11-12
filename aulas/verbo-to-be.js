/*
  The Verb To Be (inglês) — aula criada pela MEA Academy.
  Formas, contrações, negativa, perguntas, respostas curtas, usos, passado (was/were),
  there is / there are e os erros mais comuns de quem fala português.
  Explicações em inglês, com a tradução em português dos exemplos.
*/
MEA.registrarAula({
  id: "verbo-to-be",
  curso: "MEA English",
  semana: "Gramática",
  titulo: "The Verb To Be",
  subtitulo: "O verbo to be explicado do começo ao fim",
  resumo: "The most important verb in English: ser and estar in one word. Forms, contractions, negatives, questions, short answers, the past (was / were), there is / there are and the classic mistakes of Brazilian speakers.",
  capaTexto: "I am\nyou are\nhe is",

  secoes: [
    {
      id: "o-que-e",
      rotulo: "Introduction",
      titulo: "One verb, two meanings",
      tituloPt: "Um verbo, dois significados: ser e estar",
      icone: "alvo",
      blocos: [
        { tipo: "texto", texto: "In Portuguese we have two verbs: ser and estar. In English there is only one: to be. The context shows the meaning." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "To be = ser", texto: "Permanent things: identity, origin, profession, characteristics.", lista: ["I am Brazilian.", "She is a teacher.", "The house is big."] },
          { titulo: "To be = estar", texto: "Temporary things: feelings, states, location.", lista: ["I am tired.", "She is at home.", "The coffee is hot."] }
        ]},
        { tipo: "frases", itens: [
          { en: "I am a doctor.", pt: "Eu sou médico. (ser)" },
          { en: "I am at the hospital.", pt: "Eu estou no hospital. (estar)" },
          { en: "He is happy.", pt: "Ele é feliz / Ele está feliz. (o contexto decide)" }
        ]},
        { tipo: "dica", rotulo: "Good news:", texto: "You don't need to choose between ser and estar. In English, “to be” covers both." }
      ]
    },

    {
      id: "formas",
      rotulo: "Part 1",
      titulo: "The present: am, is, are",
      tituloPt: "O presente: am, is, are",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "In the present, to be has three forms. Each person uses one of them. Tap to hear." },
        { tipo: "grupos", grupos: [
          { titulo: "Singular", itens: [
            { en: "I am", pt: "eu sou / estou" },
            { en: "you are", pt: "você é / está" },
            { en: "he is", pt: "ele é / está" },
            { en: "she is", pt: "ela é / está" },
            { en: "it is", pt: "ele, ela (coisa, animal) é / está" }
          ]},
          { titulo: "Plural", itens: [
            { en: "we are", pt: "nós somos / estamos" },
            { en: "you are", pt: "vocês são / estão" },
            { en: "they are", pt: "eles, elas são / estão" }
          ]}
        ]},
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "pessoa", titulo: "AM", texto: "Only with I." },
          { icone: "pessoas", titulo: "IS", texto: "With he, she, it and any singular name: Ana is, the dog is." },
          { icone: "conversa", titulo: "ARE", texto: "With you, we, they and any plural: the kids are." }
        ]},
        { tipo: "dica", rotulo: "About “it”:", texto: "Use “it” for things, animals and situations. Portuguese doesn't need a subject (“Está frio”), but English always does: “It is cold.”" }
      ]
    },

    {
      id: "contracoes",
      rotulo: "Part 2",
      titulo: "Contractions",
      tituloPt: "Contrações: a forma curta",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "In conversation and informal writing, natives almost always use the short form. The apostrophe ( ' ) replaces the missing letter." },
        { tipo: "pronuncia", itens: [
          { en: "I am → I'm", guia: "AIM", falar: "I'm" },
          { en: "you are → you're", guia: "IÓR", falar: "you're" },
          { en: "he is → he's", guia: "RIZ", falar: "he's" },
          { en: "she is → she's", guia: "CHIZ", falar: "she's" },
          { en: "it is → it's", guia: "ITS", falar: "it's" },
          { en: "we are → we're", guia: "UÍR", falar: "we're" },
          { en: "they are → they're", guia: "DÉR", falar: "they're" }
        ]},
        { tipo: "frases", itens: [
          { en: "I'm from São Paulo.", pt: "Sou de São Paulo." },
          { en: "She's my sister.", pt: "Ela é minha irmã." },
          { en: "It's late.", pt: "Está tarde." },
          { en: "They're at work.", pt: "Eles estão no trabalho." }
        ]},
        { tipo: "dica", rotulo: "Attention:", texto: "it's (it is) is different from its (dele, dela, para coisas). And they're (they are) is different from their (deles) and there (lá). They all sound similar!" }
      ]
    },

    {
      id: "usos",
      rotulo: "Part 3",
      titulo: "When do we use to be?",
      tituloPt: "Quando usar o to be",
      icone: "estrela",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Name and identity", en: "I'm Ana. This is my friend Leo.", pt: "Eu sou a Ana. Este é meu amigo Leo." },
          { titulo: "Origin and nationality", en: "We're from Brazil. We're Brazilian.", pt: "Somos do Brasil. Somos brasileiros." },
          { titulo: "Profession", en: "He's an engineer.", pt: "Ele é engenheiro.", nota: "Use a / an before professions in English." },
          { titulo: "Age", en: "I'm twenty-five (years old).", pt: "Tenho vinte e cinco anos.", nota: "In English, you ARE an age. You don't HAVE it." },
          { titulo: "Feelings and states", en: "I'm hungry and a bit tired.", pt: "Estou com fome e um pouco cansado." },
          { titulo: "Location", en: "The keys are on the table.", pt: "As chaves estão na mesa." },
          { titulo: "Descriptions", en: "The city is beautiful and very old.", pt: "A cidade é linda e muito antiga." },
          { titulo: "Weather, time and price", en: "It's sunny. It's three o'clock. It's ten dollars.", pt: "Está ensolarado. São três horas. Custa dez dólares." }
        ]}
      ]
    },

    {
      id: "negativa",
      rotulo: "Part 4",
      titulo: "The negative: not",
      tituloPt: "A negativa: not",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "To make a negative sentence, put “not” after am, is or are. There are two ways to contract: both are correct." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Full form", lista: ["I am not", "you are not", "he is not", "we are not", "they are not"] },
          { titulo: "Contraction 1: 'm not / 's not / 're not", lista: ["I'm not", "you're not", "he's not", "we're not", "they're not"] },
          { titulo: "Contraction 2: isn't / aren't", texto: "There is no form for I: use I'm not.", lista: ["you aren't", "he isn't", "we aren't", "they aren't"] }
        ]},
        { tipo: "frases", itens: [
          { en: "I'm not ready.", pt: "Não estou pronto." },
          { en: "She isn't at home.", pt: "Ela não está em casa." },
          { en: "We aren't from here.", pt: "Não somos daqui." },
          { en: "It's not expensive.", pt: "Não é caro." }
        ]},
        { tipo: "dica", rotulo: "Remember:", texto: "“I amn't” does not exist. With I, the only contraction is “I'm not”." }
      ]
    },

    {
      id: "perguntas",
      rotulo: "Part 5",
      titulo: "Questions: change the order",
      tituloPt: "Perguntas: inverta a ordem",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "In Portuguese, a question can have the same words as a statement: “Você está cansado?”. In English, you must change the order: the verb goes before the subject." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Statement", en: "You are tired." },
          { titulo: "Question", en: "Are you tired?" },
          { titulo: "Statement", en: "She is a teacher." },
          { titulo: "Question", en: "Is she a teacher?" }
        ]},
        { tipo: "frases", itens: [
          { en: "Am I late?", pt: "Estou atrasado?" },
          { en: "Is it cold outside?", pt: "Está frio lá fora?" },
          { en: "Are they your parents?", pt: "Eles são seus pais?" },
          { en: "Is Leo at work?", pt: "O Leo está no trabalho?" }
        ]},
        { tipo: "dica", rotulo: "Intonation:", texto: "Yes / no questions go up at the end: Are you tired? ↗" }
      ]
    },

    {
      id: "respostas-curtas",
      rotulo: "Part 6",
      titulo: "Short answers",
      tituloPt: "Respostas curtas",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "Natives rarely answer with just “yes” or “no”. They repeat the subject and the verb: Yes, I am. / No, she isn't." },
        { tipo: "dialogo", rotuloBotao: "Listen to all the answers", falas: [
          { quem: "A", lado: "a", en: "Are you Brazilian?", pt: "Você é brasileiro?" },
          { quem: "B", lado: "b", en: "Yes, I am.", pt: "Sim, sou." },
          { quem: "A", lado: "a", en: "Is your sister a student?", pt: "Sua irmã é estudante?" },
          { quem: "B", lado: "b", en: "No, she isn't. She's a nurse.", pt: "Não, não é. Ela é enfermeira." },
          { quem: "A", lado: "a", en: "Are your parents at home?", pt: "Seus pais estão em casa?" },
          { quem: "B", lado: "b", en: "Yes, they are.", pt: "Sim, estão." }
        ]},
        { tipo: "dica", rotulo: "Important rule:", texto: "In affirmative short answers, never contract: “Yes, I am.” is correct, “Yes, I'm.” is wrong. In negative answers, contract: “No, I'm not.”, “No, he isn't.”" }
      ]
    },

    {
      id: "wh",
      rotulo: "Part 7",
      titulo: "Wh- questions",
      tituloPt: "Perguntas com What, Where, How, Who",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "Put the question word first, then the verb to be, then the subject." },
        { tipo: "frases", itens: [
          { en: "What's your name? My name's Ana.", pt: "Qual é o seu nome? Meu nome é Ana." },
          { en: "Where are you from? I'm from Recife.", pt: "De onde você é? Sou de Recife." },
          { en: "How old are you? I'm thirty.", pt: "Quantos anos você tem? Tenho trinta." },
          { en: "How are you? I'm fine, thanks.", pt: "Como você está? Estou bem, obrigado." },
          { en: "Who is that man? He's my boss.", pt: "Quem é aquele homem? É meu chefe." },
          { en: "Where are my keys? They're in your bag.", pt: "Onde estão minhas chaves? Estão na sua bolsa." },
          { en: "What time is it? It's ten o'clock.", pt: "Que horas são? São dez horas." }
        ]}
      ]
    },

    {
      id: "expressoes",
      rotulo: "Part 8",
      titulo: "Expressions with to be",
      tituloPt: "Expressões com to be que em português usam “ter” ou “estar com”",
      icone: "estrela",
      blocos: [
        { tipo: "texto", texto: "Many feelings that use “ter” or “estar com” in Portuguese use “to be” in English. Learn them as blocks." },
        { tipo: "grupos", grupos: [
          { titulo: "Body", itens: [
            { en: "to be hungry", pt: "estar com fome" },
            { en: "to be thirsty", pt: "estar com sede" },
            { en: "to be cold", pt: "estar com frio" },
            { en: "to be hot", pt: "estar com calor" },
            { en: "to be sleepy", pt: "estar com sono" }
          ]},
          { titulo: "Mind", itens: [
            { en: "to be afraid", pt: "ter medo" },
            { en: "to be right", pt: "ter razão" },
            { en: "to be wrong", pt: "estar errado" },
            { en: "to be sure", pt: "ter certeza" },
            { en: "to be in a hurry", pt: "estar com pressa" }
          ]},
          { titulo: "Situation", itens: [
            { en: "to be late", pt: "estar atrasado" },
            { en: "to be ready", pt: "estar pronto" },
            { en: "to be busy", pt: "estar ocupado" },
            { en: "to be lucky", pt: "ter sorte" },
            { en: "to be born", pt: "nascer" }
          ]}
        ]},
        { tipo: "frases", itens: [
          { en: "I'm hungry. Let's eat!", pt: "Estou com fome. Vamos comer!" },
          { en: "You're right.", pt: "Você tem razão." },
          { en: "Are you sure?", pt: "Você tem certeza?" },
          { en: "I was born in 1995.", pt: "Eu nasci em 1995." }
        ]}
      ]
    },

    {
      id: "passado",
      rotulo: "Part 9",
      titulo: "The past: was and were",
      tituloPt: "O passado: was e were",
      icone: "relogio",
      blocos: [
        { tipo: "texto", texto: "In the past, to be has only two forms. Was for I, he, she, it. Were for you, we, they. It means “era / estava / foi / esteve”." },
        { tipo: "grupos", grupos: [
          { titulo: "Was", itens: [
            { en: "I was", pt: "eu era / estava" },
            { en: "he was", pt: "ele era / estava" },
            { en: "she was", pt: "ela era / estava" },
            { en: "it was", pt: "era / estava" }
          ]},
          { titulo: "Were", itens: [
            { en: "you were", pt: "você era / estava" },
            { en: "we were", pt: "nós éramos / estávamos" },
            { en: "they were", pt: "eles eram / estavam" }
          ]}
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Negative", lista: ["I wasn't at home.", "They weren't happy."] },
          { titulo: "Question", lista: ["Were you at the party?", "Was it expensive?"] },
          { titulo: "Short answers", lista: ["Yes, I was.", "No, it wasn't."] }
        ]},
        { tipo: "frases", itens: [
          { en: "Yesterday I was very tired.", pt: "Ontem eu estava muito cansado." },
          { en: "The movie was great!", pt: "O filme foi ótimo!" },
          { en: "Where were you last night?", pt: "Onde você estava ontem à noite?" },
          { en: "We weren't at home.", pt: "Não estávamos em casa." }
        ]},
        { tipo: "dica", rotulo: "Next step:", texto: "For the future, use will be: “I will be there at 8.” (Eu estarei lá às 8.)" }
      ]
    },

    {
      id: "there-is",
      rotulo: "Part 10",
      titulo: "There is and there are",
      tituloPt: "There is / there are: o “haver” e o “ter” de existência",
      icone: "mapa",
      blocos: [
        { tipo: "texto", texto: "To say that something exists somewhere, use “there is” (singular) or “there are” (plural). In Portuguese we say “tem” or “há”." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "There is + singular", en: "There is a bank near here.", pt: "Tem um banco aqui perto." },
          { titulo: "There are + plural", en: "There are three people in the room.", pt: "Há três pessoas na sala." },
          { titulo: "Negative", en: "There isn't any milk. There aren't any chairs.", pt: "Não tem leite. Não tem cadeiras." },
          { titulo: "Question", en: "Is there a pharmacy here? Yes, there is.", pt: "Tem uma farmácia aqui? Tem, sim." },
          { titulo: "Past", en: "There was a party. There were many guests.", pt: "Teve uma festa. Havia muitos convidados." }
        ]},
        { tipo: "dica", rotulo: "Classic mistake:", texto: "Don't translate “tem” as “have” here. “Have a bank here” is wrong. The correct form is “There is a bank here.”" }
      ]
    },

    {
      id: "erros",
      rotulo: "Part 11",
      titulo: "Common mistakes of Brazilian speakers",
      tituloPt: "Erros comuns de quem fala português",
      icone: "check",
      blocos: [
        { tipo: "frases", itens: [
          { en: "I am twenty years old.", pt: "✗ I have twenty years." },
          { en: "It is raining.", pt: "✗ Is raining. (falta o sujeito “it”)" },
          { en: "It is beautiful!", pt: "✗ Is beautiful!" },
          { en: "I agree.", pt: "✗ I am agree. (agree já é verbo)" },
          { en: "Are you tired?", pt: "✗ You are tired? (pergunta precisa inverter)" },
          { en: "Yes, I am.", pt: "✗ Yes, I'm." },
          { en: "I'm hungry.", pt: "✗ I have hunger." },
          { en: "There is a problem.", pt: "✗ Have a problem." },
          { en: "She is a teacher.", pt: "✗ She is teacher. (falta o “a”)" }
        ]},
        { tipo: "dica", rotulo: "How to read this list:", texto: "The bold sentence is correct. The translation side shows the mistake to avoid." }
      ]
    },

    {
      id: "dialogo",
      rotulo: "Example",
      titulo: "Everything together",
      tituloPt: "Tudo junto em uma conversa",
      icone: "pessoas",
      blocos: [
        { tipo: "dialogo", rotuloBotao: "Listen to the whole dialogue", falas: [
          { quem: "Ana", lado: "a", en: "Hi! I'm Ana. Are you new here?", pt: "Oi! Eu sou a Ana. Você é novo aqui?" },
          { quem: "Leo", lado: "b", en: "Yes, I am. I'm Leo. Nice to meet you.", pt: "Sou, sim. Eu sou o Leo. Prazer." },
          { quem: "Ana", lado: "a", en: "Where are you from, Leo?", pt: "De onde você é, Leo?" },
          { quem: "Leo", lado: "b", en: "I'm from Porto Alegre. It's in the south of Brazil.", pt: "Sou de Porto Alegre. Fica no sul do Brasil." },
          { quem: "Ana", lado: "a", en: "Oh, cool! Is it cold there?", pt: "Que legal! Faz frio lá?" },
          { quem: "Leo", lado: "b", en: "In winter, yes. Last July it was really cold!", pt: "No inverno, sim. Em julho passado estava muito frio!" },
          { quem: "Ana", lado: "a", en: "Are you hungry? There's a great café near here.", pt: "Você está com fome? Tem um café ótimo aqui perto." },
          { quem: "Leo", lado: "b", en: "Yes, I'm starving! Let's go.", pt: "Sim, estou morrendo de fome! Vamos." }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Practice",
      titulo: "Test yourself",
      tituloPt: "Teste: complete e toque para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", rotuloClique: "Tap to see the answer", itens: [
          { pergunta: "I ___ a student.", resposta: "I am a student." },
          { pergunta: "She ___ from Brazil.", resposta: "She is from Brazil." },
          { pergunta: "They ___ at home.", resposta: "They are at home." },
          { pergunta: "Make it negative: He is tired.", resposta: "He isn't tired. / He's not tired." },
          { pergunta: "Make a question: You are ready.", resposta: "Are you ready?" },
          { pergunta: "Short answer: Is she your sister? (yes)", resposta: "Yes, she is." },
          { pergunta: "Correct it: I have 30 years.", resposta: "I am 30 years old." },
          { pergunta: "Past: I ___ at the beach yesterday.", resposta: "I was at the beach yesterday." },
          { pergunta: "Past: We ___ very happy.", resposta: "We were very happy." },
          { pergunta: "___ a supermarket near here?", resposta: "Is there a supermarket near here?" }
        ]},
        { tipo: "lista", titulo: "Your turn: introduce yourself using to be", numerada: true, itens: [
          "Say your name, where you are from and how old you are.",
          "Say your profession and where you are now.",
          "Say how you feel today (tired, happy, hungry…).",
          "Say where you were last weekend and how it was.",
          "Describe your city using there is / there are."
        ]},
        { tipo: "destaque", forte: "Well done!", texto: "To be is the base of English. Once you master am, is, are, was and were, all the other tenses become much easier." }
      ]
    }
  ]
});
