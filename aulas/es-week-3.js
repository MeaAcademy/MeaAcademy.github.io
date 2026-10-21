/*
  MEA Español – Semana 3 · Bienvenido a la semana 3 | Bem-vindo à Semana 3
  Versão em espanhol da aula MeaEnglish – Semana 3.
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-week-3",
  idioma: "es",
  curso: "MEA Español",
  semana: "Semana 3",
  titulo: "Bienvenido a la semana 3",
  subtitulo: "Bem-vindo à Semana 3",
  resumo: "Prepare-se para explorar o vocabulário sobre família e aprender a descrever as pessoas que você ama em espanhol!",
  capa: "assets/img/week-3/capa.jpg",
  capaAlt: "Família reunida no sofá de uma sala aconchegante",

  secoes: [
    {
      id: "targets",
      rotulo: "Semana 3",
      titulo: "Objetivos",
      icone: "alvo",
      imagem: "assets/img/week-3/alvos.jpg",
      imagemAlt: "Família de três gerações sorrindo ao ar livre",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Aprender vocabulario sobre los miembros de la familia." },
          { en: "Practicar frases sencillas para describir a tu familia." }
        ]},
        { tipo: "pares", titulo: "Alvos", itens: [
          { pt: "Aprender vocabulário sobre membros da família." },
          { pt: "Praticar frases simples para descrever sua família." }
        ]}
      ]
    },

    {
      id: "vocabulario-familia",
      titulo: "Vocabulário de Família",
      tituloPt: "Outros Parentes",
      icone: "pessoas",
      banner: "assets/img/week-3/arvore.jpg",
      bannerAlt: "Ilustração em aquarela de uma árvore com folhas azuis",
      blocos: [
        { tipo: "grupos", grupos: [
          { titulo: "Família", itens: [
            { en: "Esposo", pt: "Marido" }, { en: "Esposa", pt: "Esposa" }, { en: "Cónyuge", pt: "Cônjuge" },
            { en: "Adoptivo", pt: "Adotivo" }, { en: "Hijo", pt: "Filho" }, { en: "Hija", pt: "Filha" },
            { en: "Hijos", pt: "Filhos" }
          ]},
          { titulo: "Parentes Próximos", itens: [
            { en: "Padre", pt: "Pai" }, { en: "Madre", pt: "Mãe" }, { en: "Padres", pt: "Pais" },
            { en: "Hermano", pt: "Irmão" }, { en: "Hermana", pt: "Irmã" }, { en: "Hermanos", pt: "Irmãos" }
          ]},
          { titulo: "Outros Parentes", itens: [
            { en: "Cuñado", pt: "Cunhado" }, { en: "Bisabuelo", pt: "Bisavô" },
            { en: "Bisabuela", pt: "Bisavó" }, { en: "Abuelo", pt: "Avô" },
            { en: "Abuela", pt: "Avó" }, { en: "Abuelos", pt: "Avós" },
            { en: "Tío", pt: "Tio" }, { en: "Tía", pt: "Tia" }, { en: "Primo", pt: "Primo" },
            { en: "Sobrino", pt: "Sobrinho" }, { en: "Sobrina", pt: "Sobrinha" }, { en: "Nieta", pt: "Neta" }
          ]}
        ]},
        { tipo: "dica", texto: "O vocabulário de família é usado para falar sobre relações e vida cotidiana. Use essas palavras para criar conexões!" }
      ]
    },

    {
      id: "pet",
      titulo: "¿Tienes una mascota como miembro de la familia?",
      tituloPt: "Você tem um animal de estimação como membro da família?",
      icone: "coracao",
      imagem: "assets/img/week-3/pets.jpg",
      imagemAlt: "Dois cachorros da raça lulu-da-pomerânia ao lado de um aquário com peixinho dourado",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Háblame de tu mascota y de su nombre.", pt: "Me conte sobre seu animal de estimação e o nome dele." }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Exemplo 1", en: "Esta es mi perrita Gigi, es de color crema y muy juguetona.", pt: "Este é minha cachorra Gigi, ela é da cor creme e muito brincalhona." },
          { titulo: "Exemplo 2", en: "Este es Ponyo. Es mi pez dorado.", pt: "Este é o Ponyo. Ele é meu peixinho dourado." },
          { titulo: "Exemplo 3", en: "Este es Tobby, es el perro de mi suegra.", pt: "Este é o Tobby, ele é o cachorro da minha sogra." }
        ]}
      ]
    },

    {
      id: "descreva",
      titulo: "Descreva sua família",
      icone: "pessoa",
      imagem: "assets/img/week-3/descreva.jpg",
      imagemAlt: "Avó, mãe e filha abraçadas e sorrindo",
      blocos: [
        { tipo: "texto", texto: "Use este/esta para algo perto e ese/esa para algo distante. Veja os exemplos:" },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "pessoa", en: "Este es mi hijo", pt: "Este é meu filho", nota: "Use \"este\" quando a pessoa está perto de você" },
          { icone: "pessoa", en: "Esta es mi abuela y tiene el pelo blanco", pt: "Esta é minha avó e ela tem cabelo branco" },
          { icone: "xicara", en: "Esa es mi esposa y le gusta el café", pt: "Essa é minha esposa e ela gosta de café", nota: "Use \"ese/esa\" quando a pessoa está mais distante" },
          { icone: "livro", en: "Ese es mi primo y le encanta estudiar", pt: "Aquele é meu primo e ele ama estudar" }
        ]}
      ]
    },

    {
      id: "fale-sobre-voce",
      titulo: "Fale sobre você",
      icone: "conversa",
      imagem: "assets/img/week-3/flores.jpg",
      imagemAlt: "Campo de flores claras e azuis iluminado pelo sol",
      blocos: [
        { tipo: "cartoes", estilo: "barra", itens: [
          { titulo: "Exemplo", en: "Me llamo Melissa y mi apodo es Mel.", pt: "Meu nome é Melissa e meu apelido é Mel." },
          { en: "Mi estación favorita del año es la primavera.", pt: "Minha estação favorita do ano é a primavera." }
        ]},
        { tipo: "texto", texto: "Agora é sua vez! Compartilhe seu nome, apelido e estação favorita do ano." }
      ]
    },

    {
      id: "preferencias",
      titulo: "Me conte sobre suas preferências",
      icone: "estrela",
      imagem: "assets/img/week-3/preferencias.jpg",
      imagemAlt: "Morangos, cookies e uma xícara de café sobre a mesa",
      blocos: [
        { tipo: "passos", itens: [
          { titulo: "Doce favorito", en: "Me encantan las galletas.", pt: "Eu amo cookies.", nota: "Que doce você ama?" },
          { titulo: "Fruta favorita", en: "Mi fruta favorita son las fresas.", pt: "Minha fruta favorita é morango.", nota: "Qual é sua fruta favorita?" },
          { titulo: "Bebida preferida", en: "Me gusta el café.", pt: "Eu gosto de café.", nota: "Me conte algo que você gosta de beber..." }
        ]}
      ]
    },

    {
      id: "aprender-epoca",
      titulo: "O que você quer aprender? · Época favorita do ano",
      ocultarTitulo: true,
      icone: "calendario",
      blocos: [
        { tipo: "cartoes", estilo: "foto", itens: [
          { titulo: "O que você quer aprender?", imagem: "assets/img/week-3/croche.jpg", imagemAlt: "Mãos fazendo crochê com linha azul e branca", en: "Quiero aprender a tejer crochet.", pt: "Eu quero aprender crochê" },
          { titulo: "Época favorita do ano", imagem: "assets/img/week-3/natal.jpg", imagemAlt: "Família reunida no sofá ao lado de uma árvore de Natal", en: "Mi época favorita del año es la Navidad.", pt: "Minha época favorita do ano é o Natal." }
        ]},
        { tipo: "texto", texto: "Compartilhe suas respostas: o que você deseja aprender e qual é sua época favorita do ano?" }
      ]
    },

    {
      id: "preferencias-professora",
      titulo: "Pratique com as preferências da professora",
      icone: "nota",
      blocos: [
        { tipo: "texto", texto: "Use o vocabulário da próxima página para criar frases seguindo estes exemplos:" },
        { tipo: "cartoes", itens: [
          { en: "Al profesor le gusta...", pt: "O professor gosta..." },
          { en: "A mi profesora le gusta...", pt: "Minha professora gosta..." },
          { en: "A mi profesora Mel le encanta...", pt: "Minha professora Mel ama..." }
        ]},
        { tipo: "dica", texto: "Combine as estruturas acima com o vocabulário da próxima página para formar frases completas!" }
      ]
    },

    {
      id: "coisas-que-a-professora-ama",
      titulo: "Vocabulário: Coisas que a professora ama",
      icone: "coracao",
      blocos: [
        { tipo: "cartoes", estilo: "foto", itens: [
          { imagem: "assets/img/week-3/blanket.jpg", imagemAlt: "Cobertor de bolinhas sobre um sofá azul", en: "La manta", pt: "Cobertor" },
          { imagem: "assets/img/week-3/socks.jpg", imagemAlt: "Par de meias de tricô", en: "Los calcetines", pt: "Meias" },
          { imagem: "assets/img/week-3/roses.jpg", imagemAlt: "Buquê de rosas vermelhas em um vaso", en: "Las rosas", pt: "Rosas" },
          { imagem: "assets/img/week-3/ler-cafe.jpg", imagemAlt: "Mulher lendo um livro e tomando café", en: "Leer y tomar café", pt: "Ler e tomar café" },
          { imagem: "assets/img/week-3/livros.jpg", imagemAlt: "Pilha de livros sobre uma mesa", en: "Leer muchos libros", pt: "Ler muitos livros" },
          { imagem: "assets/img/week-3/chocolate.jpg", imagemAlt: "Caneca de chocolate quente com chantilly e marshmallows", en: "Chocolate caliente con nata", pt: "Chocolate quente com chantilly" }
        ]},
        { tipo: "texto", texto: "Agora crie suas frases! Exemplo:", en: "A mi profesora Mel le encantan las rosas." }
      ]
    }
  ]
});
