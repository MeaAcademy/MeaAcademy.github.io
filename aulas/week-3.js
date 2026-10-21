/*
  MeaEnglish – Semana 3 · Welcome to week 3 | Bem-vindo à Semana 3
  Conteúdo transcrito fielmente do PDF original (pdfs/MeaEnglish-Semana-3.pdf).
*/
MEA.registrarAula({
  id: "week-3",
  curso: "MeaEnglish",
  semana: "Semana 3",
  titulo: "Welcome to week 3",
  subtitulo: "Bem-vindo à Semana 3",
  resumo: "Prepare-se para explorar o vocabulário sobre família e aprender a descrever as pessoas que você ama em inglês!",
  capa: "assets/img/week-3/capa.jpg",
  capaAlt: "Família reunida no sofá de uma sala aconchegante",
  pdf: "pdfs/MeaEnglish-Semana-3.pdf",

  secoes: [
    {
      id: "targets",
      rotulo: "Semana 3",
      titulo: "Targets",
      icone: "alvo",
      imagem: "assets/img/week-3/alvos.jpg",
      imagemAlt: "Família de três gerações sorrindo ao ar livre",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Learn vocabulary about family members." },
          { en: "Practice simple sentences to describe your family." }
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
            { en: "Husband", pt: "Marido" }, { en: "Wife", pt: "Esposa" }, { en: "Spouse", pt: "Cônjuge" },
            { en: "Foster", pt: "Adotivo" }, { en: "Son", pt: "Filho" }, { en: "Daughter", pt: "Filha" },
            { en: "Children", pt: "Filhos" }
          ]},
          { titulo: "Parentes Próximos", itens: [
            { en: "Father", pt: "Pai" }, { en: "Mother", pt: "Mãe" }, { en: "Parents", pt: "Pais" },
            { en: "Brother", pt: "Irmão" }, { en: "Sister", pt: "Irmã" }, { en: "Siblings", pt: "Irmãos" }
          ]},
          { titulo: "Outros Parentes", itens: [
            { en: "Brother-in-law", pt: "Cunhado" }, { en: "Great-grandfather", pt: "Bisavô" },
            { en: "Great-grandmother", pt: "Bisavó" }, { en: "Grandfather", pt: "Avô" },
            { en: "Grandmother", pt: "Avó" }, { en: "Grandparents", pt: "Avós" },
            { en: "Uncle", pt: "Tio" }, { en: "Aunt", pt: "Tia" }, { en: "Cousin", pt: "Primo" },
            { en: "Nephew", pt: "Sobrinho" }, { en: "Niece", pt: "Sobrinha" }, { en: "Granddaughter", pt: "Neta" }
          ]}
        ]},
        { tipo: "dica", texto: "O vocabulário de família é usado para falar sobre relações e vida cotidiana. Use essas palavras para criar conexões!" }
      ]
    },

    {
      id: "pet",
      titulo: "Do you have a pet as a family member?",
      tituloPt: "Você tem um animal de estimação como membro da família?",
      icone: "coracao",
      imagem: "assets/img/week-3/pets.jpg",
      imagemAlt: "Dois cachorros da raça lulu-da-pomerânia ao lado de um aquário com peixinho dourado",
      blocos: [
        { tipo: "pares", itens: [
          { en: "Tell me about your pet and its name.", pt: "Me conte sobre seu animal de estimação e o nome dele." }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Exemplo 1", en: "This is my dog Gigi, she is cream colored and very playful.", pt: "Este é minha cachorra Gigi, ela é da cor creme e muito brincalhona." },
          { titulo: "Exemplo 2", en: "This is Ponyo. He is my gold fish.", pt: "Este é o Ponyo. Ele é meu peixinho dourado." },
          { titulo: "Exemplo 3", en: "This is Tobby, he is my mother-in-law's dog.", pt: "Este é o Tobby, ele é o cachorro da minha sogra." }
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
        { tipo: "texto", texto: "Use this para algo perto e that para algo distante. Veja os exemplos:" },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "pessoa", en: "This is my son", pt: "Este é meu filho", nota: "Use \"this\" quando a pessoa está perto de você" },
          { icone: "pessoa", en: "This is my grandmother and she has white hair", pt: "Esta é minha avó e ela tem cabelo branco" },
          { icone: "xicara", en: "That's my wife and she likes coffee", pt: "Essa é minha esposa e ela gosta de café", nota: "Use \"that\" quando a pessoa está mais distante" },
          { icone: "livro", en: "That's my cousin and he loves to study", pt: "Aquele é meu primo e ele ama estudar" }
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
          { titulo: "Exemplo", en: "My name is Melissa and my nickname is Mel.", pt: "Meu nome é Melissa e meu apelido é Mel." },
          { en: "My favorite season of the year is spring.", pt: "Minha estação favorita do ano é a primavera." }
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
          { titulo: "Doce favorito", en: "I love cookies.", pt: "Eu amo cookies.", nota: "Que doce você ama?" },
          { titulo: "Fruta favorita", en: "My favorite fruit is strawberries.", pt: "Minha fruta favorita é morango.", nota: "Qual é sua fruta favorita?" },
          { titulo: "Bebida preferida", en: "I like coffee.", pt: "Eu gosto de café.", nota: "Me conte algo que você gosta de beber..." }
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
          { titulo: "O que você quer aprender?", imagem: "assets/img/week-3/croche.jpg", imagemAlt: "Mãos fazendo crochê com linha azul e branca", en: "I want to learn crochet", pt: "Eu quero aprender crochê" },
          { titulo: "Época favorita do ano", imagem: "assets/img/week-3/natal.jpg", imagemAlt: "Família reunida no sofá ao lado de uma árvore de Natal", en: "My favorite time of the year is Christmas.", pt: "Minha época favorita do ano é o Natal." }
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
          { en: "The teacher likes...", pt: "O professor gosta..." },
          { en: "My teacher likes...", pt: "Minha professora gosta..." },
          { en: "My teacher Mel loves...", pt: "Minha professora Mel ama..." }
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
          { imagem: "assets/img/week-3/blanket.jpg", imagemAlt: "Cobertor de bolinhas sobre um sofá azul", en: "Blanket", pt: "Cobertor" },
          { imagem: "assets/img/week-3/socks.jpg", imagemAlt: "Par de meias de tricô", en: "Socks", pt: "Meias" },
          { imagem: "assets/img/week-3/roses.jpg", imagemAlt: "Buquê de rosas vermelhas em um vaso", en: "Roses", pt: "Rosas" },
          { imagem: "assets/img/week-3/ler-cafe.jpg", imagemAlt: "Mulher lendo um livro e tomando café", en: "To read and drink coffee", pt: "Ler e tomar café" },
          { imagem: "assets/img/week-3/livros.jpg", imagemAlt: "Pilha de livros sobre uma mesa", en: "Read lots of books", pt: "Ler muitos livros" },
          { imagem: "assets/img/week-3/chocolate.jpg", imagemAlt: "Caneca de chocolate quente com chantilly e marshmallows", en: "Hot chocolate with whipped cream", pt: "Chocolate quente com chantilly" }
        ]},
        { tipo: "texto", texto: "Agora crie suas frases! Exemplo:", en: "My teacher Mel loves roses." }
      ]
    }
  ]
});
