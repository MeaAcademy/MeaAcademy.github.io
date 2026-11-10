/*
  Los números: cómo contar (espanhol) — aula criada pela MEA Academy.
  Contagem de 0 a milhões, números no dia a dia e contas básicas.
  Explicações em espanhol, com a tradução em português de cada palavra.
  Os campos "en" guardam a palavra no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-numeros",
  idioma: "es",
  curso: "MEA Español",
  semana: "Básico",
  titulo: "Los números: cómo contar",
  subtitulo: "Números em espanhol: contar, usar no dia a dia e fazer contas",
  resumo: "Cuenta de cero a un millón, aprende las formas especiales del español, di precios y teléfonos y haz cuentas básicas en español.",
  capaTexto: "1 2 3\n+ − × ÷",

  secoes: [
    {
      id: "zero-quinze",
      rotulo: "Parte 1",
      titulo: "Del 0 al 15",
      tituloPt: "De 0 a 15: os números que precisam ser decorados",
      icone: "letras",
      blocos: [
        { tipo: "texto", texto: "Del cero al quince, cada número tiene su propio nombre. Apréndelos de memoria: todos los demás se forman a partir de ellos. Toca cada tarjeta para escucharla." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { emoji: "0", en: "cero", pt: "zero" },
          { emoji: "1", en: "uno", pt: "um" },
          { emoji: "2", en: "dos", pt: "dois" },
          { emoji: "3", en: "tres", pt: "três" },
          { emoji: "4", en: "cuatro", pt: "quatro" },
          { emoji: "5", en: "cinco", pt: "cinco" },
          { emoji: "6", en: "seis", pt: "seis" },
          { emoji: "7", en: "siete", pt: "sete" },
          { emoji: "8", en: "ocho", pt: "oito" },
          { emoji: "9", en: "nueve", pt: "nove" },
          { emoji: "10", en: "diez", pt: "dez" },
          { emoji: "11", en: "once", pt: "onze" },
          { emoji: "12", en: "doce", pt: "doze" },
          { emoji: "13", en: "trece", pt: "treze" },
          { emoji: "14", en: "catorce", pt: "catorze" },
          { emoji: "15", en: "quince", pt: "quinze" }
        ]},
        { tipo: "dica", rotulo: "Uno, un, una:", texto: "Para contar se dice “uno”. Delante de un sustantivo masculino se dice “un” (un libro) y delante de uno femenino, “una” (una casa)." }
      ]
    },

    {
      id: "dieci-veinti",
      rotulo: "Parte 2",
      titulo: "Del 16 al 29: dieci- y veinti-",
      tituloPt: "De 16 a 29: tudo em uma palavra só",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Del 16 al 29, los números se escriben en una sola palabra. Algunos llevan tilde: dieciséis, veintidós, veintitrés, veintiséis." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { emoji: "16", en: "dieciséis", pt: "dezesseis" },
          { emoji: "17", en: "diecisiete", pt: "dezessete" },
          { emoji: "18", en: "dieciocho", pt: "dezoito" },
          { emoji: "19", en: "diecinueve", pt: "dezenove" },
          { emoji: "20", en: "veinte", pt: "vinte" },
          { emoji: "21", en: "veintiuno", pt: "vinte e um" },
          { emoji: "22", en: "veintidós", pt: "vinte e dois" },
          { emoji: "23", en: "veintitrés", pt: "vinte e três" },
          { emoji: "26", en: "veintiséis", pt: "vinte e seis" },
          { emoji: "29", en: "veintinueve", pt: "vinte e nove" }
        ]},
        { tipo: "dica", rotulo: "Veintiún:", texto: "Delante de un sustantivo masculino, veintiuno pierde la “o”: veintiún años. Con un sustantivo femenino: veintiuna personas." }
      ]
    },

    {
      id: "dezenas",
      rotulo: "Parte 3",
      titulo: "Las decenas: del 30 al 99",
      tituloPt: "As dezenas: de 30 a 99",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "A partir del 31, los números se escriben en tres palabras, con “y” entre la decena y la unidad: treinta y uno, cuarenta y cinco, noventa y nueve." },
        { tipo: "fichas", rotuloAdivinhar: "Esconder o espanhol para adivinhar", itens: [
          { emoji: "30", en: "treinta", pt: "trinta" },
          { emoji: "40", en: "cuarenta", pt: "quarenta" },
          { emoji: "50", en: "cincuenta", pt: "cinquenta" },
          { emoji: "60", en: "sesenta", pt: "sessenta" },
          { emoji: "70", en: "setenta", pt: "setenta" },
          { emoji: "80", en: "ochenta", pt: "oitenta" },
          { emoji: "90", en: "noventa", pt: "noventa" }
        ]},
        { tipo: "pronuncia", itens: [
          { en: "31", guia: "treinta y uno", falar: "treinta y uno" },
          { en: "45", guia: "cuarenta y cinco", falar: "cuarenta y cinco" },
          { en: "57", guia: "cincuenta y siete", falar: "cincuenta y siete" },
          { en: "68", guia: "sesenta y ocho", falar: "sesenta y ocho" },
          { en: "99", guia: "noventa y nueve", falar: "noventa y nueve" }
        ]},
        { tipo: "dica", rotulo: "Cuidado con el portugués:", texto: "Se escribe cincuenta (con “c”), no “cinquenta”. Y sesenta (con “s”), no “sessenta”." }
      ]
    },

    {
      id: "centenas",
      rotulo: "Parte 4",
      titulo: "Las centenas",
      tituloPt: "As centenas",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "100 es “cien”. Si va seguido de otro número, se dice “ciento”: ciento uno, ciento cincuenta. Atención: “ciento” no lleva “y” después." },
        { tipo: "pronuncia", itens: [
          { en: "100", guia: "cien", falar: "cien" },
          { en: "101", guia: "ciento uno", falar: "ciento uno" },
          { en: "200", guia: "doscientos", falar: "doscientos" },
          { en: "300", guia: "trescientos", falar: "trescientos" },
          { en: "400", guia: "cuatrocientos", falar: "cuatrocientos" },
          { en: "500", guia: "quinientos", falar: "quinientos" },
          { en: "600", guia: "seiscientos", falar: "seiscientos" },
          { en: "700", guia: "setecientos", falar: "setecientos" },
          { en: "800", guia: "ochocientos", falar: "ochocientos" },
          { en: "900", guia: "novecientos", falar: "novecientos" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Las irregulares", texto: "Tres centenas no siguen la regla:", lista: ["500: quinientos", "700: setecientos", "900: novecientos"] },
          { titulo: "Masculino y femenino", texto: "Las centenas concuerdan con el sustantivo:", lista: ["doscientos libros", "doscientas personas", "quinientas casas"] }
        ]}
      ]
    },

    {
      id: "milhares",
      rotulo: "Parte 5",
      titulo: "Miles y millones",
      tituloPt: "Milhares e milhões",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "1000 es “mil”, nunca “un mil”. Mil no cambia en plural: dos mil, diez mil. Millón sí: un millón, dos millones, y va con “de” delante de un sustantivo." },
        { tipo: "pronuncia", itens: [
          { en: "1000", guia: "mil", falar: "mil" },
          { en: "2000", guia: "dos mil", falar: "dos mil" },
          { en: "3500", guia: "tres mil quinientos", falar: "tres mil quinientos" },
          { en: "10 000", guia: "diez mil", falar: "diez mil" },
          { en: "100 000", guia: "cien mil", falar: "cien mil" },
          { en: "1 000 000", guia: "un millón", falar: "un millón" },
          { en: "2 000 000", guia: "dos millones", falar: "dos millones" },
          { en: "1 000 000 000", guia: "mil millones (= um bilhão)", falar: "mil millones" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Un millón de…", lista: ["un millón de personas", "tres millones de euros"] },
          { titulo: "¡Falso amigo!", texto: "En español, “un billón” es un millón de millones (um trilhão). Um bilhão en portugués es “mil millones”." },
          { titulo: "Puntos y comas", texto: "En España y gran parte de Sudamérica, como en Brasil: 1.250,75. En México y Centroamérica, como en inglés: 1,250.75." }
        ]}
      ]
    },

    {
      id: "dia-a-dia",
      rotulo: "Parte 6",
      titulo: "Los números en la vida diaria",
      tituloPt: "Números no dia a dia",
      icone: "dinheiro",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Precios", lista: ["3,50 €: tres euros con cincuenta (céntimos)", "$120: ciento veinte pesos", "1,99 €: un euro con noventa y nueve"] },
          { titulo: "Teléfonos", texto: "En España se dicen en grupos de dos o tres cifras; en muchos países de América, cifra por cifra.", lista: ["612 34 56 78: seis doce, treinta y cuatro, cincuenta y seis, setenta y ocho"] },
          { titulo: "Edad", texto: "En español se usa el verbo “tener”, no “ser”.", lista: ["Tengo veinticinco años.", "Mi abuela tiene ochenta y un años."] }
        ]},
        { tipo: "frases", titulo: "Preguntas con números:", itens: [
          { en: "¿Cuánto cuesta? Cuesta veinte euros.", pt: "Quanto custa? Custa vinte euros." },
          { en: "¿Cuántos alumnos hay? Hay quince.", pt: "Quantos alunos há? Há quinze." },
          { en: "¿Cuántas personas vienen? Vienen doce.", pt: "Quantas pessoas vêm? Vêm doze." },
          { en: "¿Cuántos años tienes? Tengo treinta y dos.", pt: "Quantos anos você tem? Tenho trinta e dois." },
          { en: "¿Cuál es tu número de teléfono?", pt: "Qual é o seu número de telefone?" }
        ]},
        { tipo: "dica", rotulo: "Cuánto, cuántos, cuántas:", texto: "Concuerdan con el sustantivo: ¿cuánto dinero?, ¿cuánta agua?, ¿cuántos libros?, ¿cuántas casas?" }
      ]
    },

    {
      id: "contas-vocabulario",
      rotulo: "Parte 7",
      titulo: "Cuentas básicas: el vocabulario",
      tituloPt: "Contas básicas: o vocabulário",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Para hacer cuentas en español necesitas pocas palabras. Toca para escucharlas." },
        { tipo: "grupos", grupos: [
          { titulo: "Operaciones", itens: [
            { en: "más", pt: "mais (+)" },
            { en: "menos", pt: "menos (−)" },
            { en: "por", pt: "vezes (×)" },
            { en: "entre / dividido por", pt: "dividido por (÷)" },
            { en: "es igual a / son", pt: "é igual a (=)" }
          ]},
          { titulo: "Nombres", itens: [
            { en: "la suma", pt: "a soma, a adição" },
            { en: "la resta", pt: "a subtração" },
            { en: "la multiplicación", pt: "a multiplicação" },
            { en: "la división", pt: "a divisão" },
            { en: "el resultado", pt: "o resultado" }
          ]},
          { titulo: "Verbos", itens: [
            { en: "sumar", pt: "somar" },
            { en: "restar", pt: "subtrair" },
            { en: "multiplicar", pt: "multiplicar" },
            { en: "dividir", pt: "dividir" },
            { en: "calcular", pt: "calcular" }
          ]}
        ]},
        { tipo: "dica", rotulo: "Por = vezes:", texto: "Para multiplicar se usa “por”: tres por cuatro, doce. Y para el resultado, en la conversación es muy común “son”: dos más dos son cuatro." }
      ]
    },

    {
      id: "contas",
      rotulo: "Parte 8",
      titulo: "Cuentas básicas: decir las operaciones",
      tituloPt: "Contas básicas: falando as operações",
      icone: "check",
      blocos: [
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Suma +", texto: "más", lista: ["2 + 3 = 5: dos más tres son cinco", "10 + 15 = 25: diez más quince es igual a veinticinco"] },
          { titulo: "Resta −", texto: "menos", lista: ["9 − 4 = 5: nueve menos cuatro son cinco", "50 − 20 = 30: cincuenta menos veinte es igual a treinta"] },
          { titulo: "Multiplicación ×", texto: "por / multiplicado por", lista: ["3 × 4 = 12: tres por cuatro son doce", "6 × 7 = 42: seis multiplicado por siete es igual a cuarenta y dos"] },
          { titulo: "División ÷", texto: "entre / dividido por", lista: ["20 ÷ 5 = 4: veinte entre cinco son cuatro", "100 ÷ 4 = 25: cien dividido por cuatro es igual a veinticinco"] }
        ]},
        { tipo: "pronuncia", itens: [
          { en: "7 + 8 = 15", guia: "siete más ocho son quince", falar: "siete más ocho son quince" },
          { en: "30 − 12 = 18", guia: "treinta menos doce son dieciocho", falar: "treinta menos doce son dieciocho" },
          { en: "9 × 9 = 81", guia: "nueve por nueve son ochenta y uno", falar: "nueve por nueve son ochenta y uno" },
          { en: "56 ÷ 8 = 7", guia: "cincuenta y seis entre ocho son siete", falar: "cincuenta y seis entre ocho son siete" }
        ]},
        { tipo: "frases", titulo: "Expresiones útiles:", itens: [
          { en: "¿Cuánto es cinco más siete?", pt: "Quanto é cinco mais sete?" },
          { en: "¿Puedes sumar estos números?", pt: "Você pode somar esses números?" },
          { en: "Pagamos a medias. Son treinta cada uno.", pt: "Vamos dividir. Dá trinta para cada um." },
          { en: "El doble de diez es veinte.", pt: "O dobro de dez é vinte." },
          { en: "La mitad de cincuenta es veinticinco.", pt: "A metade de cinquenta é vinte e cinco." }
        ]}
      ]
    },

    {
      id: "problemas",
      rotulo: "Parte 9",
      titulo: "Las cuentas en la vida real",
      tituloPt: "Contas na vida real",
      icone: "dinheiro",
      blocos: [
        { tipo: "dialogo", rotuloBotao: "Escuchar todo el diálogo", falas: [
          { quem: "Ana", lado: "a", en: "¿Cuánto es la cuenta?", pt: "Quanto deu a conta?" },
          { quem: "Leo", lado: "b", en: "Son sesenta euros.", pt: "Deu sessenta euros." },
          { quem: "Ana", lado: "a", en: "Somos tres, así que sesenta entre tres son veinte.", pt: "Somos três, então sessenta dividido por três é vinte." },
          { quem: "Leo", lado: "b", en: "Más un diez por ciento de propina. Seis euros, o sea, dos más cada uno.", pt: "Mais dez por cento de gorjeta. Seis euros, ou seja, mais dois para cada um." },
          { quem: "Ana", lado: "a", en: "Vale, veinte más dos son veintidós cada uno.", pt: "Certo, vinte mais dois é vinte e dois para cada um." }
        ]},
        { tipo: "dica", rotulo: "Por ciento:", texto: "% se dice “por ciento”: el diez por ciento, el cincuenta por ciento, el cien por cien." }
      ]
    },

    {
      id: "pratica",
      rotulo: "Práctica",
      titulo: "Ponte a prueba",
      tituloPt: "Teste: faça a conta e toque para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "adivinhe", rotuloClique: "Toca para ver la respuesta", itens: [
          { pergunta: "¿Cómo se dice 16?", resposta: "dieciséis" },
          { pergunta: "¿Cómo se dice 55?", resposta: "cincuenta y cinco" },
          { pergunta: "¿Cómo se dice 500?", resposta: "quinientos" },
          { pergunta: "¿Cuánto es cuatro más nueve?", resposta: "Cuatro más nueve son trece." },
          { pergunta: "¿Cuánto es veinte menos siete?", resposta: "Veinte menos siete son trece." },
          { pergunta: "¿Cuánto es seis por ocho?", resposta: "Seis por ocho son cuarenta y ocho." },
          { pergunta: "¿Cuánto es cuarenta y cinco entre nueve?", resposta: "Cuarenta y cinco entre nueve son cinco." },
          { pergunta: "Una pizza cuesta 24 €. Cuatro amigos pagan a medias. ¿Cuánto paga cada uno?", resposta: "Veinticuatro entre cuatro son seis. Seis euros cada uno." }
        ]},
        { tipo: "lista", titulo: "Tu turno:", numerada: true, itens: [
          "Cuenta del 1 al 20 en voz alta y después de diez en diez hasta 100.",
          "Di tu número de teléfono en español.",
          "Di el precio de tres cosas que compraste esta semana.",
          "Hazle a un compañero tres preguntas: “¿Cuánto es … más / menos / por / entre …?”"
        ]}
      ]
    }
  ]
});
