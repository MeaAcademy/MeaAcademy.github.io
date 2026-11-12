/*
  Los colores (espanhol) — aula criada pela MEA Academy.
  Cores básicas, concordância de gênero e número, tons, perguntas, misturas e expressões.
  Os campos "en" guardam a palavra no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-cores",
  idioma: "es",
  curso: "MEA Español",
  semana: "Básico",
  titulo: "Los colores",
  subtitulo: "As cores em espanhol",
  resumo: "Los colores básicos, cómo concuerdan con el sustantivo, los tonos claros y oscuros, cómo preguntar por un color, las mezclas y las expresiones más comunes.",
  capaTexto: "rojo · azul\namarillo",

  secoes: [
    {
      id: "basicas",
      rotulo: "Parte 1",
      titulo: "Los colores básicos",
      tituloPt: "As cores básicas",
      icone: "sol",
      blocos: [
        { tipo: "texto", texto: "Toca cada color para escucharlo. Usa el botón para esconder la palabra en español y ponerte a prueba." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { cor: "#d63a3a", en: "rojo", pt: "vermelho" },
          { cor: "#f28c28", en: "naranja", pt: "laranja" },
          { cor: "#f2c94c", en: "amarillo", pt: "amarelo" },
          { cor: "#3f9a4a", en: "verde", pt: "verde" },
          { cor: "#2f6fd1", en: "azul", pt: "azul" },
          { cor: "#7e4fb0", en: "morado", pt: "roxo" },
          { cor: "#f19bbf", en: "rosa", pt: "rosa" },
          { cor: "#7a4e2d", en: "marrón / café", pt: "marrom" },
          { cor: "#111111", en: "negro", pt: "preto" },
          { cor: "#ffffff", en: "blanco", pt: "branco" },
          { cor: "#8e9399", en: "gris", pt: "cinza" },
          { cor: "#e6d5b8", en: "beis / beige", pt: "bege" }
        ]},
        { tipo: "dica", rotulo: "Falsos amigos:", texto: "“Roxo” en portugués es morado. En español, “rojo” es vermelho. ¡No los confundas! Y “negro” es la palabra normal para preto." }
      ]
    },

    {
      id: "pronuncia",
      rotulo: "Parte 2",
      titulo: "Pronunciación",
      tituloPt: "Pronúncia das cores",
      icone: "caixasom",
      blocos: [
        { tipo: "pronuncia", itens: [
          { en: "rojo", guia: "RRO-rro · j aspirada" },
          { en: "amarillo", guia: "a-ma-RI-io" },
          { en: "naranja", guia: "na-RAN-rra" },
          { en: "azul", guia: "a-ZUL" },
          { en: "gris", guia: "GRIS" },
          { en: "marrón", guia: "ma-RRÓN" },
          { en: "verde", guia: "VER-de · sin “dj”" },
          { en: "blanco", guia: "BLAN-co" }
        ]},
        { tipo: "dica", rotulo: "La “ll”:", texto: "En amarillo, la “ll” suena como “i” o “j” suave, según el país. En Argentina y Uruguay suena “ch” o “sh”: amarisho." }
      ]
    },

    {
      id: "concordancia",
      rotulo: "Parte 3",
      titulo: "Masculino, femenino y plural",
      tituloPt: "Concordância: a cor muda com o substantivo",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "En español los colores van DESPUÉS del sustantivo y concuerdan con él. Los que terminan en -o cambian en género y número. Los demás solo cambian en número." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Terminan en -o: 4 formas", lista: ["un coche rojo", "una casa roja", "unos zapatos rojos", "unas flores rojas"] },
          { titulo: "Terminan en -e o consonante: 2 formas", lista: ["un coche verde · unos coches verdes", "una camisa azul · unas camisas azules", "un gato gris · unos gatos grises"] },
          { titulo: "Naranja y rosa: normalmente no cambian", lista: ["una camiseta naranja", "unos pantalones rosa", "También se oye: pantalones rosas"] }
        ]},
        { tipo: "dica", rotulo: "Atención:", texto: "Azul → azules, gris → grises, marrón → marrones (pierde la tilde en plural)." }
      ]
    },

    {
      id: "tons",
      rotulo: "Parte 4",
      titulo: "Claro, oscuro y otros tonos",
      tituloPt: "Tons: claro, escuro e outras nuances",
      icone: "olho",
      blocos: [
        { tipo: "texto", texto: "Para el tono se añade claro u oscuro después del color. En este caso, el color no cambia: una camisa azul claro." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { cor: "#9cc6f2", en: "azul claro", pt: "azul-claro" },
          { cor: "#173a6b", en: "azul oscuro", pt: "azul-escuro" },
          { cor: "#9ed49b", en: "verde claro", pt: "verde-claro" },
          { cor: "#1f5a2a", en: "verde oscuro", pt: "verde-escuro" },
          { cor: "#0f6e80", en: "azul petróleo", pt: "azul-petróleo" },
          { cor: "#1c2c5b", en: "azul marino", pt: "azul-marinho" },
          { cor: "#74b9e8", en: "celeste", pt: "azul-celeste" },
          { cor: "#c9a227", en: "dorado", pt: "dourado" },
          { cor: "#c0c4c8", en: "plateado", pt: "prateado" }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "-izo / -ado = más o menos", lista: ["rojizo: avermelhado", "verdoso: esverdeado", "azulado: azulado", "grisáceo: acinzentado"] },
          { titulo: "Intenso y pálido", lista: ["amarillo intenso: amarelo vivo", "rosa pálido: rosa-claro"] }
        ]}
      ]
    },

    {
      id: "perguntas",
      rotulo: "Parte 5",
      titulo: "Preguntar por los colores",
      tituloPt: "Perguntando sobre cores",
      icone: "conversa",
      blocos: [
        { tipo: "frases", itens: [
          { en: "¿De qué color es tu coche? Es plateado.", pt: "De que cor é o seu carro? É prata." },
          { en: "¿De qué color tienes los ojos? Los tengo verdes.", pt: "De que cor são seus olhos? São verdes." },
          { en: "¿Cuál es tu color favorito? El azul.", pt: "Qual é a sua cor favorita? Azul." },
          { en: "¿Lo tienen en negro?", pt: "Vocês têm em preto?" },
          { en: "¿Hay en otros colores?", pt: "Tem em outras cores?" }
        ]},
        { tipo: "dialogo", rotuloBotao: "Escuchar todo el diálogo", falas: [
          { quem: "Dependienta", lado: "a", en: "Hola, ¿te puedo ayudar?", pt: "Oi, posso ajudar?" },
          { quem: "Ana", lado: "b", en: "Sí, me encanta esta camisa. ¿La tienen en verde?", pt: "Sim, adorei esta camisa. Vocês têm em verde?" },
          { quem: "Dependienta", lado: "a", en: "Lo siento, solo en blanco, azul marino y rosa.", pt: "Desculpe, só em branco, azul-marinho e rosa." },
          { quem: "Ana", lado: "b", en: "Vale, me llevo la azul marino.", pt: "Tudo bem, vou levar a azul-marinho." }
        ]},
        { tipo: "dica", rotulo: "Los ojos y el pelo:", texto: "Para los ojos castaños se dice “ojos marrones” o “ojos cafés”. Para el pelo: “pelo castaño”, “pelo rubio” (loiro), “pelo moreno” o “negro”, “pelo canoso” (grisalho)." }
      ]
    },

    {
      id: "misturas",
      rotulo: "Parte 6",
      titulo: "Mezclar colores",
      tituloPt: "Misturando cores",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "Los colores primarios se mezclan para formar los secundarios. Fíjate en cómo se dice en español." },
        { tipo: "cores", itens: [
          { cores: ["#d63a3a", "#f2c94c", "#f28c28"], en: "El rojo y el amarillo dan naranja." },
          { cores: ["#2f6fd1", "#f2c94c", "#3f9a4a"], en: "El azul y el amarillo dan verde." },
          { cores: ["#d63a3a", "#2f6fd1", "#7e4fb0"], en: "El rojo y el azul dan morado." },
          { cores: ["#111111", "#ffffff", "#8e9399"], en: "El negro y el blanco dan gris." },
          { cores: ["#d63a3a", "#ffffff", "#f19bbf"], en: "El rojo y el blanco dan rosa." }
        ]}
      ]
    },

    {
      id: "expressoes",
      rotulo: "Parte 7",
      titulo: "Expresiones con colores",
      tituloPt: "Expressões com cores",
      icone: "estrela",
      blocos: [
        { tipo: "texto", texto: "El español tiene muchas expresiones con colores. No se traducen palabra por palabra." },
        { tipo: "frases", itens: [
          { en: "Se puso rojo como un tomate.", pt: "Ficou vermelho como um pimentão." },
          { en: "Todavía está muy verde en el trabajo.", pt: "Ainda é muito inexperiente no trabalho." },
          { en: "Lo ve todo de color de rosa.", pt: "Vê tudo cor-de-rosa (é otimista demais)." },
          { en: "Me quedé en blanco en el examen.", pt: "Deu branco na prova." },
          { en: "Pasé la noche en blanco.", pt: "Passei a noite em claro." },
          { en: "Está esperando a su príncipe azul.", pt: "Está esperando o príncipe encantado." },
          { en: "Lo ve todo negro.", pt: "Vê tudo de forma pessimista." },
          { en: "Estoy sin blanca.", pt: "Estou sem um tostão. (Espanha)" }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Práctica",
      titulo: "Ponte a prueba",
      tituloPt: "Teste: toque para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", rotuloClique: "Toca para ver la respuesta", itens: [
          { pergunta: "¿De qué color es el cielo?", resposta: "Es azul." },
          { pergunta: "¿Cómo se dice “roxo” en español?", resposta: "morado" },
          { pergunta: "una casa ___ (vermelho)", resposta: "una casa roja" },
          { pergunta: "unas camisas ___ (azul)", resposta: "unas camisas azules" },
          { pergunta: "El azul y el amarillo dan…", resposta: "verde" },
          { pergunta: "¿Qué significa “quedarse en blanco”?", resposta: "dar branco, esquecer tudo" },
          { pergunta: "Plural de “marrón”", resposta: "marrones (sin tilde)" },
          { pergunta: "Corrige: un rojo coche", resposta: "un coche rojo" }
        ]},
        { tipo: "lista", titulo: "Tu turno:", numerada: true, itens: [
          "Di cuál es tu color favorito y por qué.",
          "Describe la ropa que llevas hoy: “Llevo una camisa azul y unos pantalones negros.”",
          "Describe el color de tus ojos y de tu pelo.",
          "Mira a tu alrededor y nombra cinco objetos con su color, cuidando la concordancia."
        ]}
      ]
    }
  ]
});
