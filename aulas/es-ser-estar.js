/*
  Ser y estar (espanhol) — aula criada pela MEA Academy.
  Versão em espanhol da aula "The Verb To Be": formas, usos, adjetivos que mudam de sentido,
  hay x está e as diferenças em relação ao português.
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-ser-estar",
  idioma: "es",
  curso: "MEA Español",
  semana: "Gramática",
  titulo: "Ser y estar",
  subtitulo: "O “verbo to be” do espanhol, explicado do começo ao fim",
  resumo: "Los dos verbos más importantes del español: sus formas, cuándo usar cada uno, los adjetivos que cambian de significado, la diferencia entre hay y está, y las trampas para quien habla portugués.",
  capaTexto: "soy · estoy\nes · está",

  secoes: [
    {
      id: "o-que-e",
      rotulo: "Introducción",
      titulo: "Dos verbos, como en portugués",
      tituloPt: "Dois verbos, como no português",
      icone: "alvo",
      blocos: [
        { tipo: "texto", texto: "En inglés hay un solo verbo (to be). En español, igual que en portugués, hay dos: ser y estar. La buena noticia: casi siempre se usan como en portugués. En esta clase vas a ver las reglas y, sobre todo, las diferencias." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "SER: qué es algo", texto: "Identidad, origen, profesión, características.", lista: ["Soy brasileña.", "Ella es profesora.", "La casa es grande."] },
          { titulo: "ESTAR: cómo y dónde está", texto: "Estados, sentimientos, ubicación.", lista: ["Estoy cansada.", "Ella está en casa.", "El café está caliente."] }
        ]}
      ]
    },

    {
      id: "formas",
      rotulo: "Parte 1",
      titulo: "El presente de ser y estar",
      tituloPt: "O presente de ser e estar",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Los dos verbos son irregulares. Toca cada forma para escucharla." },
        { tipo: "grupos", grupos: [
          { titulo: "SER", itens: [
            { en: "yo soy", pt: "eu sou" },
            { en: "tú eres", pt: "você é (informal)" },
            { en: "él, ella, usted es", pt: "ele, ela, o senhor é" },
            { en: "nosotros somos", pt: "nós somos" },
            { en: "vosotros sois", pt: "vocês são (Espanha, informal)" },
            { en: "ellos, ellas, ustedes son", pt: "eles, elas, vocês são" }
          ]},
          { titulo: "ESTAR", itens: [
            { en: "yo estoy", pt: "eu estou" },
            { en: "tú estás", pt: "você está (informal)" },
            { en: "él, ella, usted está", pt: "ele, ela, o senhor está" },
            { en: "nosotros estamos", pt: "nós estamos" },
            { en: "vosotros estáis", pt: "vocês estão (Espanha, informal)" },
            { en: "ellos, ellas, ustedes están", pt: "eles, elas, vocês estão" }
          ]}
        ]},
        { tipo: "dica", rotulo: "Con vos:", texto: "En Argentina y Uruguay se usa vos: “vos sos” y “vos estás”." }
      ]
    },

    {
      id: "usos-ser",
      rotulo: "Parte 2",
      titulo: "Cuándo usar SER",
      tituloPt: "Quando usar SER",
      icone: "estrela",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Identidad", en: "Soy Ana. Este es mi amigo Leo.", pt: "Sou a Ana. Este é meu amigo Leo." },
          { titulo: "Origen y nacionalidad", en: "Somos de Brasil. Somos brasileños.", pt: "Somos do Brasil. Somos brasileiros." },
          { titulo: "Profesión", en: "Él es ingeniero.", pt: "Ele é engenheiro.", nota: "Sin artículo: “es ingeniero”, no “es un ingeniero”." },
          { titulo: "Características", en: "La ciudad es bonita y muy antigua.", pt: "A cidade é bonita e muito antiga." },
          { titulo: "Material", en: "La mesa es de madera.", pt: "A mesa é de madeira." },
          { titulo: "Hora y fecha", en: "Son las tres. Hoy es lunes.", pt: "São três horas. Hoje é segunda." },
          { titulo: "Precio total", en: "¿Cuánto es? Son veinte euros.", pt: "Quanto é? São vinte euros." },
          { titulo: "Dónde ocurre un evento", en: "La fiesta es en mi casa.", pt: "A festa é na minha casa.", nota: "Para eventos se usa SER, aunque hable de lugar." }
        ]}
      ]
    },

    {
      id: "usos-estar",
      rotulo: "Parte 3",
      titulo: "Cuándo usar ESTAR",
      tituloPt: "Quando usar ESTAR",
      icone: "check",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Ubicación", en: "Las llaves están en la mesa.", pt: "As chaves estão na mesa." },
          { titulo: "Estados físicos", en: "Estoy cansado y tengo frío.", pt: "Estou cansado e com frio." },
          { titulo: "Emociones", en: "Estamos muy contentos.", pt: "Estamos muito contentes." },
          { titulo: "Resultado de una acción", en: "La puerta está abierta.", pt: "A porta está aberta." },
          { titulo: "Acción en curso", en: "Estoy estudiando español.", pt: "Estou estudando espanhol.", nota: "estar + gerundio, igual que en portugués." },
          { titulo: "Opinión sobre algo concreto", en: "¡La comida está buenísima!", pt: "A comida está ótima!" }
        ]},
        { tipo: "dica", rotulo: "Truco:", texto: "Pregúntate: ¿hablo de lo que algo ES (su identidad) o de cómo o dónde ESTÁ ahora? En la mayoría de los casos, tu intuición del portugués funciona." }
      ]
    },

    {
      id: "adjetivos",
      rotulo: "Parte 4",
      titulo: "Adjetivos que cambian de significado",
      tituloPt: "Adjetivos que mudam de sentido",
      icone: "olho",
      blocos: [
        { tipo: "texto", texto: "Algunos adjetivos significan una cosa con ser y otra muy diferente con estar. Aquí el portugués no ayuda: apréndelos de memoria." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "listo", lista: ["Es listo. → É inteligente, esperto.", "Está listo. → Está pronto."] },
          { titulo: "aburrido", lista: ["Es aburrido. → É chato.", "Está aburrido. → Está entediado."] },
          { titulo: "rico", lista: ["Es rico. → É rico (tem dinheiro).", "Está rico. → Está gostoso."] },
          { titulo: "malo", lista: ["Es malo. → É mau, ruim.", "Está malo. → Está doente."] },
          { titulo: "verde", lista: ["Es verde. → É verde (cor).", "Está verde. → Está verde (fruta) ou inexperiente."] },
          { titulo: "despierto", lista: ["Es despierto. → É esperto, vivo.", "Está despierto. → Está acordado."] }
        ]}
      ]
    },

    {
      id: "hay-esta",
      rotulo: "Parte 5",
      titulo: "Hay o está",
      tituloPt: "Hay x está: existir ou estar em um lugar",
      icone: "mapa",
      blocos: [
        { tipo: "texto", texto: "“Hay” dice que algo existe (em português: tem, há). “Está / están” dice dónde se encuentra algo que ya conocemos." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "HAY + un, una, números, nada", texto: "Algo nuevo o no específico.", lista: ["Hay un banco cerca.", "Hay tres personas en la sala.", "No hay leche."] },
          { titulo: "ESTÁ / ESTÁN + el, la, mi, tu…", texto: "Algo específico y conocido.", lista: ["El banco está en la esquina.", "Mis padres están en casa.", "¿Dónde está la estación?"] }
        ]},
        { tipo: "dica", rotulo: "Error frecuente:", texto: "“Hay el banco en la esquina” es incorrecto. Con el, la, los, las se usa estar: “El banco está en la esquina.”" }
      ]
    },

    {
      id: "negativa-perguntas",
      rotulo: "Parte 6",
      titulo: "Negativa y preguntas",
      tituloPt: "Negativa e perguntas",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "Igual que en portugués: “no” va antes del verbo, y para preguntar basta con la entonación y los signos ¿?. No hace falta cambiar el orden, como en inglés." },
        { tipo: "frases", itens: [
          { en: "No soy de aquí.", pt: "Não sou daqui." },
          { en: "No estoy cansado.", pt: "Não estou cansado." },
          { en: "¿Eres brasileño? Sí, soy de Recife.", pt: "Você é brasileiro? Sim, sou de Recife." },
          { en: "¿Estás bien? Sí, estoy bien, gracias.", pt: "Você está bem? Sim, estou bem, obrigado." },
          { en: "¿Dónde estás? Estoy en el trabajo.", pt: "Onde você está? Estou no trabalho." },
          { en: "¿De dónde eres? Soy de Brasil.", pt: "De onde você é? Sou do Brasil." }
        ]}
      ]
    },

    {
      id: "passado",
      rotulo: "Parte 7",
      titulo: "Un vistazo al pasado",
      tituloPt: "Uma olhada no passado",
      icone: "relogio",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "SER", lista: ["fui, fuiste, fue… (pretérito indefinido)", "era, eras, era… (imperfecto)"] },
          { titulo: "ESTAR", lista: ["estuve, estuviste, estuvo… (pretérito indefinido)", "estaba, estabas, estaba… (imperfecto)"] }
        ]},
        { tipo: "frases", itens: [
          { en: "La película fue muy buena.", pt: "O filme foi muito bom." },
          { en: "De niño, era muy tímido.", pt: "Quando criança, eu era muito tímido." },
          { en: "Ayer estuve en la playa.", pt: "Ontem estive na praia." },
          { en: "Estaba cansado cuando llegué.", pt: "Eu estava cansado quando cheguei." }
        ]},
        { tipo: "dica", rotulo: "Curiosidad:", texto: "“Fui” es el pasado de ser y también de ir: “Fui profesor” (ser) y “Fui a Madrid” (ir). Igual que en portugués." }
      ]
    },

    {
      id: "erros",
      rotulo: "Parte 8",
      titulo: "Errores frecuentes de los brasileños",
      tituloPt: "Erros comuns de quem fala português",
      icone: "check",
      blocos: [
        { tipo: "frases", itens: [
          { en: "Tengo veinticinco años.", pt: "✗ Soy veinticinco años. (a idade usa tener)" },
          { en: "La reunión es en la sala 3.", pt: "✗ La reunión está en la sala 3. (eventos usam ser)" },
          { en: "Soy médico.", pt: "✗ Soy un médico. (profissão sem artigo)" },
          { en: "El banco está en la esquina.", pt: "✗ Hay el banco en la esquina." },
          { en: "Estoy listo, ¡vamos!", pt: "✗ Soy listo, ¡vamos! (soy listo = sou esperto)" },
          { en: "Estoy de acuerdo.", pt: "✓ Igual ao português: estar de acordo." },
          { en: "Tengo frío.", pt: "✗ Estoy con frío. (o natural é usar tener para sensações)" }
        ]},
        { tipo: "dica", rotulo: "Cómo leer esta lista:", texto: "La frase en negrita es la correcta. Al lado ves el error que debes evitar." }
      ]
    },

    {
      id: "dialogo",
      rotulo: "Ejemplo",
      titulo: "Todo junto",
      tituloPt: "Tudo junto em uma conversa",
      icone: "pessoas",
      blocos: [
        { tipo: "dialogo", rotuloBotao: "Escuchar todo el diálogo", falas: [
          { quem: "Ana", lado: "a", en: "¡Hola! Soy Ana. ¿Eres nuevo aquí?", pt: "Oi! Sou a Ana. Você é novo aqui?" },
          { quem: "Leo", lado: "b", en: "Sí, soy Leo. Encantado.", pt: "Sou, sim. Sou o Leo. Prazer." },
          { quem: "Ana", lado: "a", en: "¿De dónde eres?", pt: "De onde você é?" },
          { quem: "Leo", lado: "b", en: "Soy de Porto Alegre. Está en el sur de Brasil.", pt: "Sou de Porto Alegre. Fica no sul do Brasil." },
          { quem: "Ana", lado: "a", en: "¡Qué bien! ¿Y cómo estás? ¿Estás cansado del viaje?", pt: "Que legal! E como você está? Está cansado da viagem?" },
          { quem: "Leo", lado: "b", en: "Un poco, pero estoy contento. Por cierto, ¿dónde es la reunión?", pt: "Um pouco, mas estou contente. Aliás, onde é a reunião?" },
          { quem: "Ana", lado: "a", en: "Es en la sala tres. Está al final del pasillo.", pt: "É na sala três. Fica no fim do corredor." },
          { quem: "Leo", lado: "b", en: "¡Perfecto! Ya estoy listo.", pt: "Perfeito! Já estou pronto." }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Práctica",
      titulo: "Ponte a prueba",
      tituloPt: "Teste: complete e toque para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", rotuloClique: "Toca para ver la respuesta", itens: [
          { pergunta: "Yo ___ de Brasil.", resposta: "Yo soy de Brasil." },
          { pergunta: "Mis padres ___ en casa.", resposta: "Mis padres están en casa." },
          { pergunta: "La fiesta ___ en el club.", resposta: "La fiesta es en el club." },
          { pergunta: "Hoy ___ muy cansada.", resposta: "Hoy estoy muy cansada." },
          { pergunta: "Ella ___ abogada.", resposta: "Ella es abogada." },
          { pergunta: "¡Esta paella ___ riquísima!", resposta: "¡Esta paella está riquísima!" },
          { pergunta: "___ un supermercado cerca.", resposta: "Hay un supermercado cerca." },
          { pergunta: "¿Qué significa “Es listo”?", resposta: "É inteligente, esperto." },
          { pergunta: "Corrige: Soy 30 años.", resposta: "Tengo 30 años." },
          { pergunta: "¿Qué hora ___? ___ las cinco.", resposta: "¿Qué hora es? Son las cinco." }
        ]},
        { tipo: "lista", titulo: "Tu turno: preséntate usando ser y estar", numerada: true, itens: [
          "Di tu nombre, de dónde eres y cuál es tu profesión.",
          "Di dónde estás ahora y cómo estás hoy.",
          "Describe tu ciudad: cómo es y qué hay en ella.",
          "Usa dos adjetivos que cambian de significado: listo, aburrido, rico…"
        ]},
        { tipo: "destaque", forte: "¡Muy bien!", texto: "Ser y estar son la base del español. Con lo que aprendiste hoy, ya puedes presentarte, describir y explicar dónde está todo." }
      ]
    }
  ]
});
