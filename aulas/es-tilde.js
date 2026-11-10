/*
  MEA Español – Gramática · La tilde y los signos del español
  Aula criada pela MEA Academy com base nas regras de acentuação da RAE (Ortografía de la lengua española, 2010).
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-tilde",
  idioma: "es",
  curso: "MEA Español – Gramática",
  semana: "Ortografía",
  titulo: "La tilde y los signos del español",
  subtitulo: "Por que, quando e onde usar: tilde, ¿ ¡, ñ e ü",
  resumo: "Entenda de uma vez por todas onde vai o acento em espanhol, por que ele muda o sentido das palavras e como usar os sinais de abertura ¿ e ¡.",
  capaTexto: "á é í ó ú\n¿ ¡ ñ ü",

  secoes: [
    {
      id: "o-que-e",
      rotulo: "Introdução",
      titulo: "¿Qué es la tilde?",
      tituloPt: "O que é a tilde?",
      icone: "letras",
      blocos: [
        { tipo: "chave", titulo: "Atenção, falsos amigos!", texto: "Em português, “til” é o sinal ~ (como em “mãe”). Em espanhol, “tilde” é o acento agudo ´ (como em “café”). O ~ do ñ tem outro nome: virgulilla." },
        { tipo: "texto", texto: "A tilde mostra qual é a sílaba mais forte da palavra (a sílaba tônica). Em espanhol existe só um acento escrito: o agudo ´. Não existem ê, â, ã, õ nem à como no português." },
        { tipo: "cartoes", itens: [
          { titulo: "Português", texto: "você, avô, mãe, à, café" },
          { titulo: "Español", en: "usted, abuelo, madre, a, café", nota: "Só o acento agudo: á, é, í, ó, ú." }
        ]},
        { tipo: "dica", rotulo: "Lembre-se:", texto: "Todas as palavras têm uma sílaba tônica, mas só algumas levam tilde. As regras das próximas partes dizem quais." }
      ]
    },

    {
      id: "por-que",
      titulo: "¿Por qué es importante?",
      tituloPt: "Por que a tilde é importante?",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "A tilde não é enfeite: ela pode mudar completamente o sentido da palavra. Ouça a diferença:" },
        { tipo: "pronuncia", itens: [
          { en: "papa", guia: "PA-pa · batata / Papa" },
          { en: "papá", guia: "pa-PÁ · papai" },
          { en: "término", guia: "TÉR-mi-no · término" },
          { en: "termino", guia: "ter-MI-no · eu termino" },
          { en: "terminó", guia: "ter-mi-NÓ · ele terminou" },
          { en: "público", guia: "PÚ-bli-co · público" },
          { en: "publico", guia: "pu-BLI-co · eu publico" },
          { en: "publicó", guia: "pu-bli-CÓ · ele publicou" }
        ]},
        { tipo: "destaque", texto: "Mesmas letras, palavras diferentes. Por isso escrever a tilde certa é tão importante quanto escrever as letras certas." }
      ]
    },

    {
      id: "silaba-tonica",
      titulo: "Las palabras según la sílaba tónica",
      tituloPt: "Os 4 tipos de palavra",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Antes das regras, descubra onde está a sílaba forte. Conte as sílabas de trás para frente:" },
        { tipo: "passos", itens: [
          { titulo: "Agudas", texto: "A sílaba forte é a última.", en: "can-CIÓN, re-LOJ, ca-FÉ" },
          { titulo: "Llanas (ou graves)", texto: "A sílaba forte é a penúltima. É o tipo mais comum em espanhol.", en: "CA-sa, ÁR-bol, LÁ-piz" },
          { titulo: "Esdrújulas", texto: "A sílaba forte é a antepenúltima.", en: "MÚ-si-ca, te-LÉ-fo-no" },
          { titulo: "Sobresdrújulas", texto: "A sílaba forte vem antes da antepenúltima. Quase sempre são verbos com pronomes.", en: "DÍ-ga-me-lo, CUÉN-ta-se-lo" }
        ]}
      ]
    },

    {
      id: "regras",
      rotulo: "As regras",
      titulo: "¿Cuándo lleva tilde?",
      tituloPt: "Quando a palavra leva tilde?",
      icone: "check",
      blocos: [
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Agudas", texto: "Levam tilde quando terminam em vogal, -n ou -s.", en: "café, canción, compás, sofá", nota: "Sem tilde: reloj, papel, feliz, ciudad (terminam em outra consoante)." },
          { titulo: "Llanas", texto: "Levam tilde quando NÃO terminam em vogal, -n ou -s. É o contrário das agudas.", en: "árbol, lápiz, fácil, móvil", nota: "Sem tilde: casa, examen, lunes, joven." },
          { titulo: "Esdrújulas e sobresdrújulas", texto: "Levam tilde SEMPRE, sem exceção.", en: "música, teléfono, rápido, dígamelo" }
        ]},
        { tipo: "dica", rotulo: "Truque para memorizar:", texto: "Agudas e llanas são opostas. Vogal, N ou S: a aguda leva tilde e a llana não. Qualquer outra letra: a llana leva tilde e a aguda não." },
        { tipo: "texto", texto: "Repare como a regra funciona com plurais: a palavra muda de tipo e a tilde aparece ou desaparece." },
        { tipo: "frases", itens: [
          { en: "canción → canciones", pt: "aguda com tilde → llana sem tilde" },
          { en: "examen → exámenes", pt: "llana sem tilde → esdrújula com tilde" },
          { en: "joven → jóvenes", pt: "llana sem tilde → esdrújula com tilde" }
        ]}
      ]
    },

    {
      id: "hiato",
      titulo: "La tilde que rompe el diptongo",
      tituloPt: "Hiato: quando duas vogais se separam",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "As vogais i e u são fracas. Quando uma delas é a sílaba forte e está ao lado de a, e, o, ela leva tilde SEMPRE, mesmo que as regras anteriores digam o contrário. A tilde mostra que as vogais estão em sílabas separadas." },
        { tipo: "pronuncia", itens: [
          { en: "día", guia: "DÍ-a · dia" },
          { en: "país", guia: "pa-ÍS · país" },
          { en: "río", guia: "RÍ-o · rio" },
          { en: "baúl", guia: "ba-ÚL · baú" },
          { en: "frío", guia: "FRÍ-o · frio" },
          { en: "Raúl", guia: "ra-ÚL · Raul" }
        ]},
        { tipo: "dica", rotulo: "Compare:", texto: "Sem tilde, as vogais ficam juntas na mesma sílaba (ditongo): ciudad, bueno, aire, piano." }
      ]
    },

    {
      id: "diacritica",
      titulo: "La tilde diacrítica",
      tituloPt: "Palavras iguais com sentidos diferentes",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "Algumas palavras curtas existem em dois sentidos. A tilde separa um do outro. Toque para ouvir os exemplos:" },
        { tipo: "cartoes", itens: [
          { titulo: "tú / tu", en: "Tú tienes tu libro.", pt: "Você tem o seu livro.", nota: "tú = você · tu = seu/sua" },
          { titulo: "él / el", en: "Él compró el coche.", pt: "Ele comprou o carro.", nota: "él = ele · el = o" },
          { titulo: "mí / mi", en: "Este regalo es para mí, de mi madre.", pt: "Este presente é para mim, da minha mãe.", nota: "mí = mim · mi = meu/minha" },
          { titulo: "sí / si", en: "Sí, voy si puedo.", pt: "Sim, eu vou se puder.", nota: "sí = sim · si = se" },
          { titulo: "té / te", en: "Te preparo un té.", pt: "Eu te preparo um chá.", nota: "té = chá · te = te (pronome)" },
          { titulo: "sé / se", en: "No sé si se fue.", pt: "Não sei se ele foi embora.", nota: "sé = sei · se = se (pronome)" },
          { titulo: "dé / de", en: "Quiero que me dé un vaso de agua.", pt: "Quero que me dê um copo de água.", nota: "dé = dê (verbo dar) · de = de" },
          { titulo: "más / mas", en: "Quiero más pan.", pt: "Quero mais pão.", nota: "más = mais · mas = mas (pouco usado; prefira “pero”)" }
        ]}
      ]
    },

    {
      id: "interrogativos",
      titulo: "Qué, cómo, dónde… en preguntas",
      tituloPt: "Palavras de pergunta e exclamação",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "As palavras de pergunta e exclamação levam tilde, também em perguntas indiretas, ou seja, sem os sinais ¿?. Quando não perguntam nada, ficam sem tilde." },
        { tipo: "palavras", itens: ["qué", "quién", "cuál", "cómo", "dónde", "cuándo", "cuánto", "por qué"] },
        { tipo: "frases", itens: [
          { en: "¿Cómo estás?", pt: "pergunta → com tilde" },
          { en: "No sé cómo se llama.", pt: "pergunta indireta → com tilde" },
          { en: "Como pan todos los días.", pt: "verbo comer → sem tilde" },
          { en: "¿Dónde vives?", pt: "pergunta → com tilde" },
          { en: "La casa donde vivo es grande.", pt: "não pergunta → sem tilde" },
          { en: "¡Qué bonito!", pt: "exclamação → com tilde" }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "por qué · porque · el porqué", en: "¿Por qué estudias? Porque me gusta.", pt: "Por que você estuda? Porque eu gosto.", nota: "por qué = pergunta · porque = resposta (causa) · el porqué = o motivo" }
        ]}
      ]
    },

    {
      id: "sinais",
      rotulo: "Pontuação",
      titulo: "Los signos ¿ y ¡",
      tituloPt: "Os sinais de abertura",
      icone: "aspas",
      blocos: [
        { tipo: "texto", texto: "Em espanhol, perguntas e exclamações têm um sinal de abertura e outro de fechamento. O motivo: muitas vezes a pergunta tem exatamente as mesmas palavras de uma afirmação. O ¿ avisa desde o começo que é para ler como pergunta." },
        { tipo: "frases", itens: [
          { en: "Tienes hambre.", pt: "afirmação: Você está com fome." },
          { en: "¿Tienes hambre?", pt: "pergunta: Você está com fome?" },
          { en: "¡Tienes hambre!", pt: "exclamação: Você está com fome!" }
        ]},
        { tipo: "lista", titulo: "Onde colocar:", itens: [
          "O sinal abre exatamente onde a pergunta começa, mesmo no meio da frase: Hola, ¿cómo estás?",
          "Se a frase começa antes da pergunta, ela segue em letra minúscula: Si llueve, ¿vienes igual?",
          "Depois de ? ou ! não se coloca ponto final. O próprio sinal já fecha a frase.",
          "Dá para combinar os dois em perguntas exclamativas: ¡¿Qué dices?!"
        ]},
        { tipo: "dica", rotulo: "Erro comum:", texto: "Esquecer o sinal de abertura, como no português e no inglês. Em espanhol, “Cómo estás?” está errado; o certo é “¿Cómo estás?”." }
      ]
    },

    {
      id: "n-u",
      titulo: "La ñ y la diéresis (ü)",
      tituloPt: "Mais dois sinais especiais",
      icone: "letras",
      blocos: [
        { tipo: "cartoes", itens: [
          { titulo: "Ñ – eñe", texto: "É uma letra própria do alfabeto, não uma n com acento. Soa como o “nh” do português.", en: "España, niño, mañana, año", nota: "Sem o ñ, a palavra muda de sentido: cana (cabelo branco) e caña (cana, vara)." },
          { titulo: "Ü – diéresis", texto: "Aparece só em güe e güi. Mostra que o u deve ser pronunciado.", en: "pingüino, vergüenza, bilingüe", nota: "Compare: guerra e guitarra (u mudo) com pingüino (u pronunciado)." }
        ]}
      ]
    },

    {
      id: "casos-especiais",
      titulo: "Casos especiales",
      tituloPt: "Dúvidas frequentes",
      icone: "estrela",
      blocos: [
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Monossílabos não levam tilde", en: "fue, dio, vio, ti, fe, pie", nota: "Erro muito comum: “fué” e “tí”. O certo é fue e ti. A exceção são as diacríticas (tú, él, sí, más…)." },
          { titulo: "Maiúsculas também levam tilde", en: "ÁFRICA, Ángel, Óscar", nota: "A tilde não desaparece só porque a letra é maiúscula." },
          { titulo: "Advérbios em -mente", en: "rápido → rápidamente · fácil → fácilmente", nota: "Mantêm a tilde do adjetivo de origem. Se o adjetivo não tem, o advérbio também não tem: lento → lentamente." },
          { titulo: "solo e este", en: "Solo quiero un café. Este es mi hermano.", nota: "Desde 2010, a RAE recomenda escrever sem tilde: solo, este, ese, aquel." }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Prática",
      titulo: "¿Lleva tilde o no?",
      tituloPt: "Teste: toque em cada palavra para ver a resposta",
      icone: "foguete",
      blocos: [
        { tipo: "texto", texto: "Pense na regra antes de tocar: que tipo de palavra é? Em que letra termina?" },
        { tipo: "adivinhe", itens: [
          { pergunta: "cancion", resposta: "canción · aguda em -n", falar: "canción" },
          { pergunta: "arbol", resposta: "árbol · llana em -l", falar: "árbol" },
          { pergunta: "musica", resposta: "música · esdrújula", falar: "música" },
          { pergunta: "reloj", resposta: "reloj · sem tilde", falar: "reloj" },
          { pergunta: "examen", resposta: "examen · sem tilde", falar: "examen" },
          { pergunta: "telefono", resposta: "teléfono · esdrújula", falar: "teléfono" },
          { pergunta: "pais", resposta: "país · hiato", falar: "país" },
          { pergunta: "fue", resposta: "fue · monossílabo", falar: "fue" }
        ]},
        { tipo: "adivinhe", itens: [
          { pergunta: "como estas", resposta: "¿Cómo estás?" },
          { pergunta: "que bonito", resposta: "¡Qué bonito!" },
          { pergunta: "tu tienes tu libro", resposta: "Tú tienes tu libro." },
          { pergunta: "si, se donde esta", resposta: "Sí, sé dónde está." }
        ]}
      ]
    },

    {
      id: "resumo",
      titulo: "Resumen",
      tituloPt: "Resumo da aula",
      icone: "check",
      blocos: [
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Agudas", texto: "Tilde se terminam em vogal, -n ou -s.", en: "café" },
          { titulo: "Llanas", texto: "Tilde se NÃO terminam em vogal, -n ou -s.", en: "árbol" },
          { titulo: "Esdrújulas", texto: "Tilde sempre.", en: "música" },
          { titulo: "Hiato", texto: "i ou u forte junto de a, e, o: tilde sempre.", en: "día" },
          { titulo: "Diacrítica", texto: "Diferencia palavras iguais.", en: "tú / tu" },
          { titulo: "Perguntas", texto: "qué, cómo, dónde… levam tilde; ¿ ¡ abrem a frase.", en: "¿Dónde estás?" }
        ]},
        { tipo: "destaque", forte: "¡Muy bien!", texto: "Com estas regras você consegue acentuar praticamente qualquer palavra em espanhol. Na dúvida, consulte o dicionário da RAE (dle.rae.es)." }
      ]
    }
  ]
});
