/*
  MEA Español – Semana 1 PT 2 · Clase 1 – Destino, Alfabeto y Saludos
  Versão em espanhol da aula MeaEnglish – Week 1 PT 2.
  O alfabeto e as palavras essenciais foram adaptados ao espanhol (o alfabeto espanhol tem a letra Ñ).
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-week-1-pt-2",
  idioma: "es",
  curso: "MEA Español – Semana 1 PT 2",
  semana: "Semana 1",
  ciclo: "PT 2",
  titulo: "Clase 1 – Destino, Alfabeto y Saludos",
  capa: "assets/img/week-1-pt-2/capa.jpg",
  capaAlt: "Livro aberto e xícara sobre uma mesa iluminada pela janela",

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
          { titulo: "Español", en: "MEA Español – Bienvenido a la Semana 1" },
          { titulo: "Português", texto: "MEA Español – Bem-vindo à Semana 1" }
        ]},
        { tipo: "texto", texto: "Este é o início da sua jornada com o espanhol." },
        { tipo: "pares", itens: [ { en: "Este es el comienzo de tu viaje con el español." } ] },
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
          en: ["¿A dónde quieres ir? ¿Qué quieres lograr mientras estás en el camino MEA?", "Está bien cambiar el destino a mitad del camino. Ahora tomarás otro rumbo."],
          pt: ["Para onde você quer ir? O que você quer alcançar enquanto estiver na jornada MEA?", "Tudo bem mudar o destino no meio da jornada. Agora você vai seguir outro caminho."] },
        { tipo: "dica", rotulo: "🧠 Extra pedagógico:", texto: "Seu cérebro aprende melhor quando tem um destino claro. Tu cerebro aprende mejor cuando tiene un destino claro." }
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
          { titulo: "Alfabeto – Alfabeto", rotuloEn: "Español:", en: "Esta semana quiero aprender a pronunciar el alfabeto.", rotuloPt: "Português:", pt: "Esta semana eu quero aprender a pronunciar o alfabeto." },
          { titulo: "Productividad – Produtividade", rotuloEn: "Español:", en: "Esta semana quiero ser productivo(a). Haré ejercicio 3 veces esta semana.", rotuloPt: "Português:", pt: "Esta semana eu quero ser produtivo(a). Vou me exercitar 3 vezes." },
          { titulo: "Metas – Alvos", rotuloEn: "Español:", en: "Esta semana voy a fijar metas.", rotuloPt: "Português:", pt: "Esta semana eu vou definir metas." },
          { titulo: "Viaje – Viagem", rotuloEn: "Español:", en: "Me voy de viaje este fin de semana.", rotuloPt: "Português:", pt: "Vou viajar neste final de semana." },
          { titulo: "Español – Espanhol", rotuloEn: "Español:", en: "Estudiaré español 10 minutos al día, de lunes a viernes.", rotuloPt: "Português:", pt: "Vou estudar espanhol 10 minutos por dia, de segunda a sexta." }
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
          { icone: "envelope", titulo: "Alfabeto", texto: "Aprender o alfabeto e sua pronúncia em espanhol" },
          { icone: "caixasom", titulo: "Fonética", texto: "Entender a fonética básica das letras e palavras" },
          { icone: "aperto", titulo: "Saudações", texto: "Praticar saudações e apresentações cotidianas" }
        ]},
        { tipo: "dica", rotulo: "🧠 Lembre-se:", texto: "Pequenos alvos criam consistência. Las metas pequeñas crean constancia." }
      ]
    },

    {
      id: "alfabeto-a-m",
      rotulo: "Parte 1",
      titulo: "Alfabeto Espanhol – Letras A-M",
      icone: "letras",
      imagem: "assets/img/week-1-pt-2/abc.jpg",
      imagemAlt: "Blocos de madeira com as letras de A a M",
      blocos: [
        { tipo: "texto", texto: "Aprenda a pronúncia correta de cada letra com exemplos práticos de palavras do dia a dia:" },
        { tipo: "alfabeto", itens: [
          { letra: "A", som: "a", palavra: "agua", pt: "água" },
          { letra: "B", som: "be", palavra: "barco", pt: "barco" },
          { letra: "C", som: "ce", palavra: "casa", pt: "casa" },
          { letra: "D", som: "de", palavra: "dedo", pt: "dedo" },
          { letra: "E", som: "e", palavra: "escuela", pt: "escola" },
          { letra: "F", som: "efe", palavra: "flor", pt: "flor" },
          { letra: "G", som: "ge", palavra: "gato", pt: "gato" },
          { letra: "H", som: "hache", palavra: "hola", pt: "olá" },
          { letra: "I", som: "i", palavra: "isla", pt: "ilha" },
          { letra: "J", som: "jota", palavra: "jugo", pt: "suco" },
          { letra: "K", som: "ka", palavra: "kilo", pt: "quilo" },
          { letra: "L", som: "ele", palavra: "luna", pt: "lua" },
          { letra: "M", som: "eme", palavra: "manzana", pt: "maçã" }
        ]}
      ]
    },

    {
      id: "alfabeto-n-z",
      rotulo: "Parte 2",
      titulo: "Alfabeto Espanhol – Letras N-Z",
      icone: "letras",
      banner: "assets/img/week-1-pt-2/alfabeto-nz.jpg",
      bannerAlt: "Letras do alfabeto em tons de azul",
      blocos: [
        { tipo: "texto", texto: "Continue praticando a pronúncia das últimas letras do alfabeto:" },
        { tipo: "alfabeto", itens: [
          { letra: "N", som: "ene", palavra: "nariz", pt: "nariz" },
          { letra: "Ñ", som: "eñe", palavra: "niño", pt: "menino" },
          { letra: "O", som: "o", palavra: "ojo", pt: "olho" },
          { letra: "P", som: "pe", palavra: "perro", pt: "cachorro" },
          { letra: "Q", som: "cu", palavra: "queso", pt: "queijo" },
          { letra: "R", som: "erre", palavra: "rojo", pt: "vermelho" },
          { letra: "S", som: "ese", palavra: "sol", pt: "sol" },
          { letra: "T", som: "te", palavra: "tren", pt: "trem" },
          { letra: "U", som: "u", palavra: "uva", pt: "uva" },
          { letra: "V", som: "uve", palavra: "vaso", pt: "copo" },
          { letra: "W", som: "uve doble", palavra: "wifi", pt: "wi-fi" },
          { letra: "X", som: "equis", palavra: "xilófono", pt: "xilofone" },
          { letra: "Y", som: "ye", palavra: "yo", pt: "eu" },
          { letra: "Z", som: "zeta", palavra: "zapato", pt: "sapato" }
        ]}
      ]
    },

    {
      id: "conjunctions",
      titulo: "Palavras Essenciais em Espanhol",
      icone: "conversa",
      banner: "assets/img/week-1-pt-2/conexoes.jpg",
      bannerAlt: "Esferas conectadas por linhas iluminadas",
      blocos: [
        { tipo: "texto", texto: "Estas são comuns em espanhol. Elas aparecem em quase todas as frases que você vai encontrar:" },
        { tipo: "palavras", itens: ["Ser / Estar", "Y", "De", "Un / Una", "Yo", "Lo", "Es", "Que", "Son", "Como", "Con", "No", "En", "Para", "A", "Por", "Entonces", "Tener"] }
      ]
    },

    {
      id: "greetings",
      titulo: "Saudações (Saludos) em Espanhol",
      icone: "sol",
      imagem: "assets/img/week-1-pt-2/saudacoes.jpg",
      imagemAlt: "Duas pessoas se cumprimentando em diferentes momentos do dia",
      blocos: [
        { tipo: "cartoes", itens: [
          { icone: "nascer", titulo: "Saludos de la mañana", subtitulo: "Saudações Matinais", lista: ["Buenos días", "Buenos días, [nombre de la persona]"] },
          { icone: "sol", titulo: "Saludos de la tarde", subtitulo: "Saudações Vespertinas", lista: ["Buenas tardes", "Buenas tardes, [nombre de la persona]"] },
          { icone: "lua", titulo: "Saludos de la noche", subtitulo: "Saudações Noturnas", lista: ["Buenas noches", "Buenas noches, [nombre de la persona]"] }
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
          { en: "¿Cómo está usted?", pt: "Como vai?" },
          { en: "Encantado(a) de conocerle", pt: "Prazer em conhecê-lo(a)" },
          { en: "Mucho gusto", pt: "Prazer" },
          { en: "Es un gusto conocerte", pt: "É um prazer conhecê-lo(a)" },
          { en: "Es un placer conocerle", pt: "É um prazer conhecê-lo(a)" }
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
        { tipo: "texto", texto: "Quando você escreve e-mails ou cartas formais em espanhol, estas são as saudações mais apropriadas:" },
        { tipo: "cartoes", estilo: "escuro", itens: [
          { en: "Estimado señor o señora", pt: "Prezado Senhor ou Senhora", nota: "Use quando você não sabe o nome da pessoa." },
          { en: "A quien corresponda", pt: "A quem possa interessar", nota: "Use para comunicações muito formais ou gerais." }
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
          en: ["Camina con personas que están en el camino contigo. Camina con personas que comparten metas como las tuyas."],
          pt: ["Caminhe com pessoas que estão na jornada com você. Caminhe com pessoas que compartilham os mesmos alvos que os seus."] }
      ]
    },

    {
      id: "consistencia",
      titulo: "Consistência é Melhor que Perfeição",
      icone: "check",
      imagem: "assets/img/week-1-pt-2/consistencia.jpg",
      imagemAlt: "Frase sobre consistência e perfeição em letras em relevo",
      blocos: [
        { tipo: "bilingue", en: ["La constancia es mejor que la perfección."], pt: ["Consistência é melhor que perfeição."] },
        { tipo: "texto", texto: "Lembre-se: o progresso acontece um passo de cada vez. Não se preocupe em ser perfeito desde o início. O importante é continuar praticando, mesmo que apenas 10 minutos por dia. Pequenas ações diárias criam grandes resultados ao longo do tempo. Você está no caminho certo!" }
      ]
    }
  ]
});
