/*
  MEA Español – Semana 1 · Bienvenidos a MEA | Bem-vindos ao MEA
  Versão em espanhol da aula MEA English – Week 1 (Ciclo 1).
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-week-1-ciclo-1",
  idioma: "es",
  curso: "MEA Español – Semana 1",
  semana: "Semana 1",
  ciclo: "Ciclo 1",
  titulo: "Bienvenidos a MEA | Bem-vindos ao MEA",
  capa: "assets/img/week-1-ciclo-1/capa.jpg",
  capaAlt: "Grupo de alunos conversando em uma sala de aula",

  secoes: [
    {
      id: "imagine",
      rotulo: "Introdução",
      titulo: "Imagínate ya hablando.",
      tituloPt: "Imagine-se já falando.",
      icone: "foguete",
      imagem: "assets/img/week-1-ciclo-1/imagine.jpg",
      imagemAlt: "Homem de terno apresentando para colegas em uma sala de reuniões",
      blocos: [
        { tipo: "pares", itens: [
          { en: "¿Dónde estarías?", pt: "Onde você estaria?" },
          { en: "¿Con quién estarías hablando?", pt: "Com quem você estaria falando?" },
          { en: "¿Qué estarías haciendo?", pt: "O que você estaria fazendo?" },
          { en: "Imagínate allí, imagínate comunicándote. Escríbelo.", pt: "Imagine-se ali, imagine-se se comunicando. Escreva isso." }
        ]}
      ]
    },

    {
      id: "duas-leis",
      titulo: "Las 2 Leyes del Aprendizaje en MEA Español",
      tituloPt: "As 2 Leis do Aprendizado no MEA Español",
      icone: "mapa",
      imagem: "assets/img/week-1-ciclo-1/montanha.jpg",
      imagemAlt: "Caminho sinuoso subindo uma montanha ao pôr do sol",
      blocos: [
        { tipo: "texto", texto: "No MEA Español, trabalhamos com dois princípios fundamentais que transformarão sua relação com o aprendizado. Estas leis são a base para o seu sucesso e desenvolvimento contínuo." }
      ]
    },

    {
      id: "lei-1",
      rotulo: "Lei #1",
      titulo: "Ley número uno: Responsabilidad por lo que piensas y haces",
      tituloPt: "Lei número um: Responsabilidade pelo que você pensa e faz",
      icone: "cerebro",
      imagem: "assets/img/week-1-ciclo-1/cerebro.jpg",
      imagemAlt: "Homem olhando para um grande cérebro envolto em espirais",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Muchas veces estamos donde estamos y somos quienes somos por nuestros pensamientos y acciones.", pt: "Muitas vezes estamos onde estamos e somos quem somos por causa dos nossos pensamentos e ações." }
        ]},
        { tipo: "pares", titulo: "Cuidado con = Cuidado com", itens: [
          { en: "Semillas de miedo, semillas de duda.", pt: "Sementes de medo, sementes de dúvida." },
          { en: "(Las semillas son tus palabras/pensamientos o los de otras personas.)", pt: "(Sementes são suas palavras/pensamentos ou as de outras pessoas.)" },
          { en: "Recuerda: mantén las puertas de tu mente herméticamente cerradas a todos los pensamientos que intentan limitarte de cualquier forma.", pt: "Lembre-se: mantenha as portas da sua mente hermeticamente fechadas para todos os pensamentos que tentam te limitar de qualquer forma." }
        ]}
      ]
    },

    {
      id: "nao-sao-o-alvo",
      titulo: "Estos pensamientos no son nuestro objetivo:",
      tituloPt: "Esses pensamentos não são o nosso alvo:",
      icone: "alvo",
      imagem: "assets/img/week-1-ciclo-1/bloqueio.jpg",
      imagemAlt: "Barreiras de rua bloqueando a passagem",
      blocos: [
        { tipo: "frases", itens: [
          { en: "Demasiado difícil", pt: "Muito difícil" },
          { en: "Demasiado complicado", pt: "Muito complicado" },
          { en: "No puedo", pt: "Eu não consigo" }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Muito difícil", en: "\"Demasiado difícil\"", nota: "Este pensamento cria uma barreira antes mesmo de você tentar." },
          { titulo: "Muito complicado", en: "\"Demasiado complicado\"", nota: "A complexidade existe apenas quando não dividimos em passos menores." },
          { titulo: "Eu não consigo", en: "\"No puedo\"", nota: "A palavra \"ainda\" transforma tudo: \"Eu não consigo ainda\" (\"Todavía no puedo\")." }
        ]},
        { tipo: "destaque", texto: "Reconhecer esses padrões de pensamento é o primeiro passo para quebrá-los. Apenas você pode fazer isso por você mesmo." }
      ]
    },

    {
      id: "reflection-class",
      titulo: "Clase de Reflexión",
      tituloPt: "Aula de Reflexão",
      icone: "nota",
      imagem: "assets/img/week-1-ciclo-1/reflexao.jpg",
      imagemAlt: "Mão escrevendo em um caderno ao lado de uma xícara de café",
      blocos: [
        { tipo: "pares", titulo: "Clase – Reflexión", tituloPt: "Aula – Reflexão", itens: [
          { en: "Dime algunas frases y palabras que te vinieron a la mente o que ya escuchaste.", pt: "Diga algumas frases e palavras que vieram à sua mente ou que você já ouviu." }
        ]},
        { tipo: "frases", titulo: "Ejemplo:", tituloPt: "Exemplo:", itens: [
          { en: "Esto no es para mí", pt: "Isso não é pra mim" },
          { en: "Soy demasiado mayor", pt: "Eu sou muito velho(a)" }
        ]},
        { tipo: "dica", rotulo: "Sua vez:", texto: "Escreva agora 2-3 pensamentos que você já teve sobre aprender espanhol." }
      ]
    },

    {
      id: "reframing",
      titulo: "Resignificando / Ressignificando",
      icone: "estrela",
      imagem: "assets/img/week-1-ciclo-1/sapo.jpg",
      imagemAlt: "Sapo saltando sobre a água com girinos ao redor",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Podemos reemplazarlo por:", pt: "Podemos substituir por:" }
        ]},
        { tipo: "pares", forte: true, itens: [
          { en: "Esto es un desafío para mí, pero sé que puedo alcanzar el objetivo.", pt: "Isso é desafiador para mim, mas eu sei que posso atingir o alvo." }
        ]},
        { tipo: "pares", itens: [
          { en: "Estas palabras/semillas pueden venir de ti o de otras personas.", pt: "Essas palavras/sementes podem vir de você ou de outras pessoas." },
          { en: "Todo lo que pones en tu mente y determinas, lo alcanzas.", pt: "Tudo aquilo que você coloca na sua mente e determina, você alcança." }
        ]}
      ]
    },

    {
      id: "tip",
      titulo: "Consejo",
      tituloPt: "Dica",
      icone: "cerebro",
      imagem: "assets/img/week-1-ciclo-1/dica.jpg",
      imagemAlt: "Pesquisador segurando um modelo de cérebro em um laboratório",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Aprende y estudia siempre cómo funciona tu mente.", pt: "Sempre aprenda e estude como a sua mente funciona." }
        ]}
      ]
    },

    {
      id: "paralyzing",
      titulo: "Cuidado con lo que paraliza",
      tituloPt: "Cuidado com o que paralisa",
      icone: "pessoa",
      imagem: "assets/img/week-1-ciclo-1/rato.jpg",
      imagemAlt: "Rato dentro de uma gaiola de laboratório",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Incertidumbre / indecisión", pt: "Incerteza / indecisão" },
          { en: "Miedo a la crítica", pt: "Medo da crítica" }
        ]},
        { tipo: "pares", titulo: "Ejemplo", tituloPt: "Exemplo", itens: [
          { en: "Decidí ir al gimnasio 4 veces por semana.", pt: "Eu decidi ir à academia 4 vezes por semana." },
          { en: "Entonces te despiertas, hace un poco de frío y piensas:", pt: "Então você acorda, está um pouco frio e você pensa:" },
          { en: "«¿Voy al gimnasio?»", pt: "\"Será que eu vou para a academia?\"" },
          { en: "«Me duele un poco la cabeza, ¿voy?»", pt: "\"Estou com uma leve dor de cabeça, será que eu vou?\"" },
          { en: "(Si de verdad te sientes enfermo, claro que debes cuidarte o ir al médico.)", pt: "(Se você realmente estiver doente, claro que deve se cuidar ou ir ao médico.)" },
          { en: "O solo tienes ese horario y es la «Hora del Ratón».", pt: "Ou você só tem aquele horário e é o \"horário do rato\"." },
          { en: "¿Qué van a pensar de mí?", pt: "O que eles vão pensar de mim?" }
        ]}
      ]
    },

    {
      id: "exemplo-pratico",
      titulo: "Exemplo Prático",
      icone: "check",
      blocos: [
        { tipo: "passos", itens: [
          { titulo: "A Decisão", texto: "Eu decidi ir à academia 4 vezes por semana. Uma meta clara e específica." },
          { titulo: "O Despertar da Dúvida", texto: "Você acorda, está um pouco frio e os pensamentos começam: \"Será que eu vou para a academia?\" \"Estou com uma leve dor de cabeça, será que eu vou?\"" },
          { titulo: "A Escolha", texto: "Você tem duas opções: deixar as perguntas, incertezas vencer ou agir conforme você já decidiu com você mesmo. A ação constrói confiança. Quando você volta atrás da sua própria palavra, do combinado que você fez consigo mesmo, O que acha que acontece?" }
        ]},
        { tipo: "dica", rotulo: "Importante:", texto: "Se você realmente estiver doente, claro que deve se cuidar ou ir ao médico. Mas aprenda a diferenciar sua mente querendo poupar energia temporária, de problemas reais de saúde." }
      ]
    },

    {
      id: "lei-2",
      rotulo: "Lei #2",
      titulo: "Ley número dos: Objetivo",
      tituloPt: "Lei número Dois: Alvo",
      icone: "alvo",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Tu mente se enfocará en lo que más enfatiza, piensa y presta atención.", pt: "Sua mente vai focar naquilo que ela enfatiza, pensa e presta mais atenção." }
        ]},
        { tipo: "texto", texto: "Sua mente vai focar naquilo que ela enfatiza, pensa e presta mais atenção. Este é um princípio fundamental da neurociência: aquilo em que você se concentra cresce e se fortalece." },
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "olho", titulo: "Atenção", texto: "Onde você direciona seu olhar mental ( pensamento), determina ações." },
          { icone: "cerebro", titulo: "Pensamento", texto: "Pensamentos repetidos criam caminhos neurais mais fortes." },
          { icone: "coracao", titulo: "Ênfase", texto: "O que você valoriza e enfatiza molda sua experiência diária." }
        ]},
        { tipo: "destaque", texto: "Escolha conscientemente onde colocar seu foco. Você está mirando no alvo certo?" }
      ]
    },

    {
      id: "dicas-estudo",
      titulo: "Dicas de Estudo",
      icone: "lista",
      imagem: "assets/img/week-1-ciclo-1/estudo.jpg",
      imagemAlt: "Estudante lendo à noite em uma mesa cheia de flashcards coloridos",
      blocos: [
        { tipo: "texto", texto: "Aplique técnicas comprovadas pela ciência da aprendizagem para maximizar sua retenção e progresso." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Repetição Espaçada", forte: "3 horas – 24 horas – 3 dias – 7 dias – 3 horas", texto: "Revise o conteúdo nestes intervalos para mover informações da memória de curto prazo para a memória de longo prazo." },
          { titulo: "Gerar Perguntas", texto: "Crie perguntas a partir das suas anotações e se autoavalie regularmente. O ato de recuperar informação fortalece a memória." },
          { titulo: "Usar Flashcards", texto: "Flashcards são ferramentas poderosas para prática ativa e repetição espaçada. Use aplicativos ou cartões físicos." },
          { titulo: "Ensinar Outras Pessoas", texto: "Quando você ensina, você aprende duas vezes. Explique conceitos para amigos, familiares ou até mesmo para você mesmo em voz alta." }
        ]}
      ]
    },

    {
      id: "reflexao-extra",
      titulo: "Reflexión Extra",
      tituloPt: "Reflexão Extra",
      icone: "aspas",
      banner: "assets/img/week-1-ciclo-1/calendario.jpg",
      bannerAlt: "Calendário com todos os dias marcados com um sinal de visto",
      blocos: [
        { tipo: "citacoes", itens: [
          { pt: "Aprender espanhol não é sobre perfeição, é sobre constância.", en: "Aprender español no se trata de perfección, se trata de constancia." },
          { pt: "Você não precisa de confiança para começar, você ganha confiança começando.", en: "No necesitas confianza para empezar, ganas confianza empezando." }
        ]},
        { tipo: "texto", texto: "Cada passo que você dá, por menor que seja, te aproxima do seu objetivo. A jornada de mil milhas começa com um único passo e você já deu esse passo ao estar aqui." }
      ]
    }
  ]
});
