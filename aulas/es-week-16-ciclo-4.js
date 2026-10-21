/*
  MEA Español – Week 16 (Ciclo 4)
  Versão em espanhol da aula MEA English – Week 16 (Ciclo 4).
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-week-16-ciclo-4",
  idioma: "es",
  curso: "MEA Español – Semana 16 (Ciclo 4)",
  semana: "Semana 16",
  ciclo: "Ciclo 4",
  titulo: "Reservas, Hoteles, Restaurantes y Servicios",
  resumo: "Bem-vindos à Semana 16! Nesta semana, você aprenderá a se comunicar em espanhol em situações cotidianas como fazer reservas em hotéis e restaurantes, pedir serviços e interagir com confiança em diversos estabelecimentos. Essas habilidades são essenciais para quem viaja ou trabalha em ambientes internacionais.",
  capa: "assets/img/week-16/capa.jpg",
  capaAlt: "Recepcionista sorrindo atrás do balcão de um hotel elegante",

  secoes: [
    {
      id: "objetivos",
      titulo: "Objetivos da Semana 16",
      icone: "alvo",
      imagem: "assets/img/week-16/objetivos.jpg",
      imagemAlt: "Professor apresentando uma aula para alunos em uma sala de aula",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Frases Úteis", texto: "Aprender expressões essenciais para fazer reservas e agendamentos em diferentes situações do dia a dia." },
          { titulo: "Conversação Prática", texto: "Praticar diálogos simples e naturais em hotéis, restaurantes e outros serviços, desenvolvendo confiança na comunicação." },
          { titulo: "Situações Reais", texto: "Aplicar o vocabulário em contextos autênticos de viagem e serviços, preparando você para experiências reais." }
        ]},
        { tipo: "texto", texto: "Ao final desta semana, você estará preparado para interagir com segurança em espanhol nas situações mais comuns durante viagens e no uso de serviços diversos. Vamos começar!" }
      ]
    },

    {
      id: "reservas-gerais",
      titulo: "Fazendo Reservas Gerais",
      icone: "calendario",
      blocos: [
        { tipo: "chave", titulo: "Expressões-Chave", texto: "Use estas frases para iniciar qualquer tipo de reserva de forma educada e profissional." },
        { tipo: "frases", titulo: "Como Dizer em Espanhol:", itens: [
          { en: "Me gustaría reservar…", pt: "Gostaria de reservar…" },
          { en: "Deseo reservar…", pt: "Desejo reservar…" },
          { en: "¿Podría hacer una reserva para…?", pt: "Você poderia fazer uma reserva para…" },
          { en: "Necesito reservar…", pt: "Preciso reservar…" },
          { en: "Quisiera reservar…", pt: "Gostaria de reservar…" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Reservando uma Mesa", en: "Me gustaría reservar una mesa para…", pt: "Gostaria de reservar uma mesa para…" },
          { titulo: "Reservando um Quarto", en: "Me gustaría reservar una habitación", pt: "Gostaria de reservar um quarto" }
        ]}
      ]
    },

    {
      id: "disponibilidade",
      titulo: "Perguntando sobre Disponibilidade",
      icone: "lupa",
      imagem: "assets/img/week-16/disponibilidade.jpg",
      imagemAlt: "Balcão de recepção com tablets exibindo um calendário de disponibilidade",
      blocos: [
        { tipo: "texto", texto: "Quando você precisa saber se há vagas ou quartos disponíveis, estas expressões são fundamentais. Elas demonstram educação e permitem que você obtenha informações precisas sobre a disponibilidade do serviço desejado." },
        { tipo: "cartoes", itens: [
          { en: "¿Tienen plazas disponibles para el…?", rotuloPt: "Tradução:", pt: "Há vagas em…?", nota: "Use esta pergunta para verificar se há disponibilidade em uma data específica, seja para quartos de hotel ou outros serviços." },
          { en: "¿Hay habitaciones disponibles para el…?", rotuloPt: "Tradução:", pt: "Há quartos disponíveis em…?", nota: "Pergunta mais específica para quartos de hotel, demonstrando interesse em uma data particular." }
        ]}
      ]
    },

    {
      id: "mais-disponibilidade",
      titulo: "Mais Formas de Perguntar sobre Disponibilidade",
      icone: "lupa",
      blocos: [
        { tipo: "cartoes", estilo: "foto", itens: [
          { titulo: "Mesas de Restaurante", imagem: "assets/img/week-16/mesas.jpg", imagemAlt: "Salão de restaurante com mesas postas", en: "¿Tienen mesas disponibles para…?", pt: "Há mesas disponíveis para…?", nota: "Perfeita para reservar em restaurantes, especificando número de pessoas ou horário desejado." },
          { titulo: "Quartos de Hotel", imagem: "assets/img/week-16/quarto-hotel.jpg", imagemAlt: "Quarto de hotel com cama de casal e vista noturna da cidade", en: "Busco una habitación para el…", pt: "Estou procurando um quarto para…", nota: "Uma forma mais informal e direta de expressar sua necessidade de acomodação em uma data específica." }
        ]},
        { tipo: "dica", rotulo: "Dica Importante:", texto: "Sempre seja específico ao mencionar datas. Use o formato correto em espanhol: \"el 15 de junio\" ou \"de lunes a viernes\"." }
      ]
    },

    {
      id: "pessoas-noites",
      titulo: "Especificando Detalhes: Pessoas e Noites",
      icone: "pessoas",
      imagem: "assets/img/week-16/viajantes.jpg",
      imagemAlt: "Grupo de viajantes com malas em um saguão de aeroporto",
      blocos: [
        { tipo: "texto", texto: "Ao fazer uma reserva, você será questionado sobre detalhes importantes. Saber como responder a essas perguntas é essencial para garantir que sua reserva atenda às suas necessidades específicas." },
        { tipo: "cartoes", itens: [
          { en: "¿Para cuántas personas?", pt: "Para quantas pessoas?", nota: "Responda com números: \"Para dos personas\" ou \"Para cuatro\"." },
          { en: "¿Para cuántas noches?", pt: "Por quantas noites?", nota: "Indique a duração: \"Para tres noches\" ou \"Solo una noche\"." }
        ]}
      ]
    },

    {
      id: "datas-precos",
      titulo: "Datas e Preços",
      icone: "moeda",
      blocos: [
        { tipo: "cartoes", estilo: "numerado", itens: [
          { en: "¿Para qué fecha(s)?", pt: "Para qual(is) data(s)?", nota: "Pergunta fundamental para confirmar quando você precisa do serviço. Responda de forma clara: \"Para el 10 de marzo\" ou \"Del 5 al 8 de junio\"." },
          { en: "¿Cuál es el precio por noche?", pt: "Qual é o valor por noite?", nota: "Importante para planejar seu orçamento. Você também pode perguntar: \"¿Cuánto cuesta?\" (Quanto custa?)" }
        ]},
        { tipo: "destaque", texto: "Sempre confirme datas e preços antes de finalizar sua reserva. Isso evita mal-entendidos e garante que tudo esteja de acordo com suas expectativas." }
      ]
    },

    {
      id: "detalhes-quarto",
      titulo: "Detalhes sobre o Quarto",
      icone: "cama",
      imagem: "assets/img/week-16/detalhes-quarto.jpg",
      imagemAlt: "Sala de estar de uma suíte de hotel com sofá azul e televisão",
      blocos: [
        { tipo: "texto", texto: "Quando você reserva um quarto de hotel, é importante comunicar suas preferências específicas. Estas expressões ajudarão você a obter exatamente o tipo de acomodação que deseja." },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "cama", en: "¿Qué tipo de habitación le gustaría?", pt: "Que tipo de quarto você gostaria?" },
          { icone: "estrela", en: "¿Tiene una habitación con…?", pt: "Você tem um quarto com…?" },
          { icone: "mais", en: "¿Podríamos tener una cama adicional?", pt: "Poderíamos ter uma cama extra?" }
        ]},
        { tipo: "texto", texto: "Você pode completar essas frases com características específicas: \"una habitación con vista\" (quarto com vista), \"una habitación con balcón\" (quarto com varanda), ou \"una habitación con dos camas individuales\" (quarto com duas camas de solteiro)." }
      ]
    },

    {
      id: "dialogo-hotel",
      titulo: "Exemplo Prático: Reservando no Hotel",
      icone: "conversa",
      blocos: [
        { tipo: "papeis", papeis: ["Solicitud del huésped", "Detalles del recepcionista"] },
        { tipo: "dialogo", falas: [
          { quem: "Hóspede", lado: "a", en: "Me gustaría reservar una habitación por tres noches, a partir del 11 de junio.", pt: "Gostaria de reservar um quarto por três noites, a partir de 11 de junho." },
          { quem: "Recepcionista", lado: "b", en: "¿Para cuántas personas?", pt: "Para quantas pessoas?" },
          { quem: "Hóspede", lado: "a", en: "Solo para una persona.", pt: "Apenas para uma pessoa." }
        ]},
        { tipo: "texto", texto: "Este é um exemplo real de como uma conversa de reserva acontece. Observe a estrutura natural do diálogo." }
      ]
    },

    {
      id: "continuacao-hotel",
      titulo: "Continuação do Diálogo: Hotel",
      icone: "conversa",
      blocos: [
        { tipo: "passos", itens: [
          { titulo: "Recepcionista Pergunta", en: "¿Qué tipo de habitación busca?", pt: "Que tipo de quarto você está procurando?" },
          { titulo: "Hóspede Responde", en: "Una habitación individual, preferiblemente con vista.", pt: "Um quarto de solteiro, de preferência com vista." },
          { titulo: "Confirmação de Nome", en: "¿A nombre de quién hago la reserva?", pt: "Em que nome você gostaria de fazer a reserva?" }
        ]},
        { tipo: "dica", rotulo: "Vocabulário Útil:", texto: "Habitación individual (quarto de solteiro), Habitación doble (quarto de casal), Habitación con dos camas (quarto com duas camas), Suite (suíte)." }
      ]
    },

    {
      id: "dialogo-restaurante",
      titulo: "Exemplo Prático: Reservando no Restaurante",
      icone: "talheres",
      imagem: "assets/img/week-16/restaurante.jpg",
      imagemAlt: "Mesa posta com taças em um restaurante sofisticado",
      blocos: [
        { tipo: "texto", texto: "Fazer uma reserva em um restaurante é geralmente mais simples que em um hotel, mas requer atenção aos detalhes de horário e número de pessoas. Veja como essa conversa normalmente acontece:" },
        { tipo: "dialogo", falas: [
          { quem: "Cliente", lado: "a", en: "Me gustaría hacer una reserva para cenar para dos.", pt: "Gostaria de fazer uma reserva para jantar para duas pessoas." },
          { quem: "Atendente", lado: "b", en: "¿Para qué fecha y hora?", pt: "Para qual data e horário?" },
          { quem: "Cliente", lado: "a", en: "Esta noche, a las 7:30.", pt: "Hoje à noite, às 19h30." }
        ]}
      ]
    },

    {
      id: "finalizando-restaurante",
      titulo: "Finalizando a Reserva do Restaurante",
      icone: "check",
      imagem: "assets/img/week-16/maitre.jpg",
      imagemAlt: "Maître sorridente com o livro de reservas na entrada do restaurante",
      blocos: [
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Confirmação do Nome", en: "¿A nombre de quién hago la reserva?", pt: "Em que nome você gostaria de fazer a reserva?", nota: "Sempre forneça seu sobrenome para facilitar a identificação: \"A nombre de Smith\" ou \"A nombre de Silva\"." },
          { titulo: "Confirmação Final", en: "Gracias, su mesa está reservada.", pt: "Obrigado, sua mesa está reservada.", nota: "O atendente pode adicionar: \"Lo esperamos esta noche\" (Esperamos vê-lo hoje à noite)." }
        ]},
        { tipo: "texto", texto: "É sempre bom chegar alguns minutos antes do horário reservado e confirmar sua reserva ao chegar: \"Tengo una reserva a nombre de [nombre]\" (Tenho uma reserva em nome de [nome])." }
      ]
    },

    {
      id: "check-in",
      titulo: "No Hotel: Fazendo Check-In",
      icone: "chave",
      imagem: "assets/img/week-16/check-in.jpg",
      imagemAlt: "Hóspede com mala fazendo check-in no balcão da recepção",
      blocos: [
        { tipo: "texto", texto: "O momento do check-in é quando você finalmente chega ao hotel e recebe as chaves do seu quarto. Saber as expressões corretas torna esse processo muito mais tranquilo e eficiente." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Apresentar-se na Recepção", en: "Hola, tengo una reserva a nombre de [nombre].", pt: "Olá, tenho uma reserva em nome de [nome]." },
          { titulo: "Apresentar Documentos", en: "¿Me permite su pasaporte, por favor?", pt: "Poderia ver seu passaporte, por favor?" },
          { titulo: "Receber a Chave", en: "¿Me da la llave de mi habitación, por favor?", pt: "Posso pegar a chave do meu quarto, por favor?" }
        ]}
      ]
    },

    {
      id: "servico-quarto",
      titulo: "Serviço de Quarto",
      icone: "bandeja",
      imagem: "assets/img/week-16/servico-quarto.jpg",
      imagemAlt: "Bandeja de café da manhã com croissants, frutas e suco sobre a cama",
      blocos: [
        { tipo: "texto", texto: "O serviço de quarto é uma conveniência oferecida por muitos hotéis. Você pode pedir comida, bebidas ou outros itens diretamente para o seu quarto." },
        { tipo: "cartoes", estilo: "barra", itens: [
          { titulo: "Solicitar Serviço", en: "Quisiera pedir servicio a la habitación.", pt: "Gostaria de pedir serviço de quarto." },
          { titulo: "Pedir o Cardápio", en: "¿Me trae la carta, por favor?", pt: "Poderia me dar o cardápio, por favor?" },
          { titulo: "Fazer o Pedido", en: "Quisiera pedir el [plato], por favor.", pt: "Gostaria de pedir o [prato], por favor." }
        ]}
      ]
    },

    {
      id: "pedidos-restaurante",
      titulo: "No Restaurante: Fazendo Pedidos",
      icone: "talheres",
      imagem: "assets/img/week-16/garcom.jpg",
      imagemAlt: "Garçom anotando o pedido de clientes em um restaurante",
      blocos: [
        { tipo: "texto", texto: "Quando você está sentado em um restaurante, precisa saber como pedir o cardápio, fazer seu pedido e solicitar bebidas. Estas expressões são essenciais para uma experiência gastronômica tranquila." },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "cardapio", titulo: "Pedir o Cardápio", en: "¿Me trae una carta, por favor?", pt: "Poderia me dar um cardápio, por favor?" },
          { icone: "pizza", titulo: "Fazer o Pedido", en: "Quisiera pedir el [plato], por favor.", pt: "Gostaria de pedir o [prato], por favor." },
          { icone: "agua", titulo: "Pedir Bebidas", en: "¿Me trae un vaso de agua, por favor?", pt: "Posso ter um copo de água, por favor?" }
        ]}
      ]
    },

    {
      id: "conta",
      titulo: "Pedindo a Conta",
      icone: "cartao",
      blocos: [
        { tipo: "grafico", descricao: "Gráfico de barras com formas de pagamento: Cartão Crédito (barra maior, cerca de 65), Dinheiro (cerca de 20) e Cartão Débito (cerca de 15).",
          maximo: 75, marcas: [0, 25, 50, 75],
          barras: [ { rotulo: "Cartão Crédito", valor: 65 }, { rotulo: "Dinheiro", valor: 20 }, { rotulo: "Cartão Débito", valor: 15 } ] },
        { tipo: "texto", texto: "Ao terminar sua refeição, você precisará pedir a conta e escolher a forma de pagamento. A maioria dos estabelecimentos aceita cartões de crédito internacionais." },
        { tipo: "cartoes", estilo: "barra", itens: [
          { en: "¿Me trae la cuenta, por favor?", pt: "Poderia trazer a conta, por favor?" },
          { en: "¿Puedo pagar con tarjeta de crédito?", pt: "Posso pagar com cartão de crédito?" },
          { en: "¿Cuánto es?", pt: "Quanto é?" }
        ]}
      ]
    },

    {
      id: "informacoes",
      titulo: "Pedindo Informações e Serviços Gerais",
      icone: "mapa",
      blocos: [
        { tipo: "texto", texto: "Ao viajar, você frequentemente precisará pedir direções, encontrar locais importantes ou solicitar informações sobre a região. Estas expressões são fundamentais para se orientar em um ambiente estrangeiro." },
        { tipo: "cartoes", estilo: "miniatura", itens: [
          { titulo: "Pedir Direções", imagem: "assets/img/week-16/direcoes.jpg", imagemAlt: "Mapa com marcadores de localização", en: "¿Podría decirme cómo llegar a [lugar]?", pt: "Você poderia me dizer como chegar a [lugar]?" },
          { titulo: "Transporte Público", imagem: "assets/img/week-16/onibus.jpg", imagemAlt: "Placa de ponto de ônibus na rua", en: "¿Hay una parada de autobús cerca?", pt: "Há um ponto de ônibus por perto?" },
          { titulo: "Banheiro", imagem: "assets/img/week-16/banheiro.jpg", imagemAlt: "Entrada de um banheiro público", en: "¿Dónde está el baño más cercano?", pt: "Onde fica o banheiro mais próximo?" }
        ]}
      ]
    },

    {
      id: "recomendacoes",
      titulo: "Pedindo Recomendações",
      icone: "estrela",
      blocos: [
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "estrela", titulo: "Recomendações Gerais", en: "¿Tiene alguna recomendación?", pt: "Você tem alguma recomendação?", nota: "Use quando quiser sugestões de restaurantes, atrações ou atividades na área." },
          { icone: "museu", titulo: "Atrações Turísticas", en: "¿Qué atracción no me puedo perder?", pt: "Qual é uma atração imperdível?", nota: "Perfeita para descobrir os pontos turísticos mais importantes da cidade." },
          { icone: "relogio", titulo: "Melhor Horário", en: "¿Cuál es el mejor horario para visitarla?", pt: "Qual é o melhor horário para visitar?", nota: "Importante para evitar multidões e aproveitar melhor a experiência." }
        ]},
        { tipo: "destaque", texto: "Funcionários de hotéis e restaurantes geralmente têm ótimas recomendações locais. Não hesite em pedir sugestões!" }
      ]
    },

    {
      id: "compras",
      titulo: "Fazendo Compras e Pagamentos",
      icone: "sacola",
      imagem: "assets/img/week-16/compras.jpg",
      imagemAlt: "Cliente entregando um cartão para a atendente no caixa de uma loja",
      blocos: [
        { tipo: "texto", texto: "Ao fazer compras durante sua viagem, você precisará perguntar preços, solicitar informações sobre produtos e pedir recibos. Estas expressões são essenciais para transações comerciais." },
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "dinheiro", en: "¿Cuánto cuesta esto?", pt: "Quanto custa isto?" },
          { icone: "lista", en: "¿Puedo ver la lista de precios?", pt: "Posso ver a lista de preços?" },
          { icone: "recibo", en: "¿Me da un recibo, por favor?", pt: "Poderia me dar um recibo, por favor?" }
        ]},
        { tipo: "dica", rotulo: "Dica Cultural:", texto: "Em muitos países de língua espanhola, é comum deixar gorjeta (propina) em restaurantes. Geralmente cerca de 10% do valor total." }
      ]
    },

    {
      id: "praticar",
      titulo: "Hora de Praticar!",
      icone: "foguete",
      blocos: [
        { tipo: "texto", texto: "Agora que você aprendeu todas as expressões essenciais para reservas, hotéis, restaurantes e serviços, é hora de colocar em prática! A prática regular é fundamental para ganhar confiança e fluência na comunicação em espanhol." },
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "predio", titulo: "Role-Play: Reservas de Hotel", texto: "Pratique fazendo check-in, pedindo serviço de quarto e fazendo perguntas sobre as acomodações com um parceiro." },
          { icone: "talheres", titulo: "Simulação: Restaurantes", texto: "Simule situações de reserva de mesa, pedido de comida e solicitação da conta em diferentes cenários." },
          { icone: "conversa", titulo: "Diálogos: Serviços Diversos", texto: "Crie conversas pedindo informações, direções e recomendações em situações variadas do dia a dia." }
        ]},
        { tipo: "destaque", forte: "Parabéns por completar a Semana 16!", texto: "Continue praticando estas expressões no seu cotidiano. Quanto mais você praticar, mais natural será sua comunicação em espanhol. ¡Hasta la próxima semana!" }
      ]
    }
  ]
});
