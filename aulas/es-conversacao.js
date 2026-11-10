/*
  Conversação (Español) — aula escrita inteiramente em espanhol.
  Mesma estrutura da versão em inglês (aulas/conversacao.js), adaptada ao que é próprio do espanhol:
  sinalefa, tú/usted/vos, variações regionais ao telefone e na linguagem corporal.
  Os campos "en" guardam a frase no idioma estudado (aqui, espanhol).
*/
MEA.registrarAula({
  id: "es-conversacao",
  idioma: "es",
  curso: "MEA Español",
  semana: "Conversação",
  titulo: "Conversação",
  subtitulo: "Hablar y comunicarse: la guía completa",
  resumo: "Una clase profunda sobre cómo funciona la comunicación real: escucha, voz, acento y entonación, registros, preguntas, turnos de palabra, opiniones, malentendidos, estructura de ideas, narración, empatía, lenguaje corporal y llamadas.",
  capaEmoji: "💬 🗣️ 👂\n🤝 🎙️ 😊",

  secoes: [
    {
      id: "o-que-e",
      rotulo: "Introducción",
      titulo: "¿Qué es comunicarse?",
      icone: "alvo",
      blocos: [
        { tipo: "texto", texto: "Comunicarse no es solo decir palabras. Es asegurarte de que la otra persona entienda el mensaje que quieres transmitir, y de que tú entiendas el suyo. Los buenos hablantes no son los que tienen más vocabulario, sino los que escuchan bien, hablan con claridad y se adaptan a la persona que tienen delante." },
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "conversa", titulo: "Palabras", texto: "Lo que dices: vocabulario, gramática y el orden de tus ideas." },
          { icone: "caixasom", titulo: "Voz", texto: "Cómo lo dices: velocidad, volumen, pausas, acento y entonación." },
          { icone: "pessoa", titulo: "Cuerpo", texto: "Lo que muestras: mirada, expresión facial, postura y gestos." }
        ]},
        { tipo: "dica", rotulo: "Un mito famoso:", texto: "Quizás has oído que “solo el 7 % de la comunicación son palabras”. Ese número viene de un estudio de los años sesenta sobre sentimientos y tono de voz, no sobre toda la comunicación. Las palabras importan mucho. Lo importante es que la voz y el cuerpo pueden reforzar tus palabras o contradecirlas." },
        { tipo: "destaque", texto: "Ser fluido no es hablar sin errores. Es comunicar tus ideas con seguridad, incluso cuando te equivocas." }
      ]
    },

    {
      id: "ciclo",
      rotulo: "Parte 1",
      titulo: "El ciclo de la comunicación",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "Toda conversación sigue el mismo ciclo. Los problemas aparecen cuando falla uno de los pasos." },
        { tipo: "passos", itens: [
          { titulo: "Intención", texto: "Decides qué quieres decir y para qué. ¿Quieres informar, preguntar, pedir ayuda, bromear, convencer?" },
          { titulo: "Mensaje", texto: "Eliges las palabras, el tono y el lenguaje corporal para expresarlo." },
          { titulo: "Escucha", texto: "La otra persona recibe el mensaje y lo interpreta según su experiencia, su cultura y su estado de ánimo." },
          { titulo: "Respuesta", texto: "Reacciona con palabras, con un gesto o con silencio. Así sabes si el mensaje llegó." },
          { titulo: "Ajuste", texto: "Confirmas, repites, lo explicas de otra forma o sigues adelante. Y el ciclo vuelve a empezar." }
        ]},
        { tipo: "dica", rotulo: "Recuerda:", texto: "El significado de un mensaje es la respuesta que recibes. Si no te entienden, cambia la forma de decirlo, no solo el volumen." }
      ]
    },

    {
      id: "escuta",
      rotulo: "Parte 2",
      titulo: "La escucha activa",
      icone: "olho",
      blocos: [
        { tipo: "texto", texto: "La mitad de una conversación es escuchar. Escuchar activamente es mostrar que sigues lo que dice la otra persona y comprobar que de verdad lo entendiste. Además, te da tiempo para preparar tu respuesta." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "1. Muestra que escuchas", texto: "Pequeñas palabras que animan a la otra persona a seguir hablando.", lista: ["Ajá.", "Ya veo.", "Claro.", "¿En serio?", "¡No me digas!"] },
          { titulo: "2. Parafrasea", texto: "Repite la idea con tus propias palabras.", lista: ["O sea, que…", "Es decir…", "Entonces, lo que quieres decir es…"] },
          { titulo: "3. Pide aclaraciones", texto: "Pregunta por la parte que no está clara.", lista: ["¿Qué quieres decir con…?", "¿Me pones un ejemplo?"] },
          { titulo: "4. Resume", texto: "Al final, repasa los puntos principales.", lista: ["Entonces, en resumen…", "A ver si lo he entendido bien…"] }
        ]},
        { tipo: "dica", rotulo: "Evita:", texto: "Interrumpir para terminar la frase del otro, mirar el móvil o pensar en tu respuesta mientras la otra persona todavía está hablando." }
      ]
    },

    {
      id: "voz",
      rotulo: "Parte 3",
      titulo: "Tu voz",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "La misma frase puede sonar segura, nerviosa, maleducada o simpática. La diferencia está en la voz. Trabaja estos cuatro controles:" },
        { tipo: "cartoes", itens: [
          { titulo: "Velocidad", texto: "Hablar rápido no es lo mismo que hablar con fluidez. Un ritmo tranquilo suena más seguro y se entiende mejor, sobre todo en otro idioma." },
          { titulo: "Volumen", texto: "Habla lo bastante alto para que te oigan sin esfuerzo. Un volumen bajo suele sonar inseguro; uno muy alto puede sonar agresivo." },
          { titulo: "Pausas", texto: "Una pausa corta antes de una idea importante llama la atención. Una pausa es mucho mejor que “eeeh, eeeh”." },
          { titulo: "Tono", texto: "Variar el tono (agudo y grave) transmite emoción e interés. Una voz plana y monótona suena aburrida." }
        ]},
        { tipo: "frases", titulo: "Escucha y repite, con una pausa en cada | :", itens: [
          { en: "Tengo algo importante | que decirte.", pt: "pausa antes de lo importante" },
          { en: "La respuesta | es sencilla.", pt: "pausa para crear atención" },
          { en: "Primero, | hablamos. | Después, | decidimos.", pt: "las pausas ordenan las ideas" }
        ]}
      ]
    },

    {
      id: "acento",
      rotulo: "Parte 4",
      titulo: "El acento de la palabra y el énfasis en la frase",
      icone: "letras",
      blocos: [
        { tipo: "texto", texto: "El español tiene un ritmo silábico: todas las sílabas duran más o menos lo mismo. Pero cada palabra tiene una sílaba tónica, y cambiarla puede cambiar el significado por completo." },
        { tipo: "pronuncia", itens: [
          { en: "papa", guia: "PA-pa" },
          { en: "papá", guia: "pa-PÁ" },
          { en: "término", guia: "TÉR-mi-no" },
          { en: "termino", guia: "ter-MI-no" },
          { en: "terminó", guia: "ter-mi-NÓ" },
          { en: "ánimo", guia: "Á-ni-mo" },
          { en: "animo", guia: "a-NI-mo" },
          { en: "animó", guia: "a-ni-MÓ" }
        ]},
        { tipo: "texto", texto: "En la frase, la palabra que destacas con la voz cambia el sentido de lo que dices:" },
        { tipo: "frases", itens: [
          { en: "YO no dije que ella robó el dinero.", pt: "énfasis en YO → lo dijo otra persona" },
          { en: "Yo no DIJE que ella robó el dinero.", pt: "énfasis en DIJE → solo lo insinué" },
          { en: "Yo no dije que ELLA robó el dinero.", pt: "énfasis en ELLA → lo robó otra persona" },
          { en: "Yo no dije que ella robó el DINERO.", pt: "énfasis en DINERO → robó otra cosa" }
        ]},
        { tipo: "dica", rotulo: "Practica:", texto: "Lee la frase cuatro veces, destacando una palabra distinta cada vez. Pide a un compañero que te diga el significado." }
      ]
    },

    {
      id: "entonacao",
      rotulo: "Parte 5",
      titulo: "La entonación: la música del español",
      icone: "sol",
      blocos: [
        { tipo: "texto", texto: "La entonación es el movimiento de la voz hacia arriba ↗ y hacia abajo ↘. Le dice a quien escucha si preguntas, afirmas, dudas o te sorprendes. En español es todavía más importante porque muchas preguntas tienen las mismas palabras que una afirmación." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "↘ Descendente", texto: "Afirmaciones, órdenes y preguntas con qué, dónde, cómo…", lista: ["Vivo en São Paulo. ↘", "¿Dónde trabajas? ↘"] },
          { titulo: "↗ Ascendente", texto: "Preguntas de sí o no, sorpresa y listas que continúan.", lista: ["¿Quieres un café? ↗", "¿En serio? ↗"] },
          { titulo: "Misma frase, otro sentido", texto: "Solo la entonación diferencia la afirmación de la pregunta.", lista: ["Tienes hambre. ↘", "¿Tienes hambre? ↗"] }
        ]},
        { tipo: "dica", rotulo: "Por qué importa:", texto: "Un “gracias” plano puede sonar irónico. Un “gracias ↘” cálido y descendente suena sincero." }
      ]
    },

    {
      id: "fala-conectada",
      rotulo: "Parte 6",
      titulo: "El habla encadenada",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "Los nativos no pronuncian las palabras una por una. Las palabras se unen y algunos sonidos se reducen. Entender esto es la clave para entender el español rápido." },
        { tipo: "pronuncia", itens: [
          { en: "mi amigo", guia: "mia-MI-go · sinalefa" },
          { en: "la escuela", guia: "laes-CUE-la · sinalefa" },
          { en: "los amigos", guia: "lo-sa-MI-gos · enlace" },
          { en: "para que", guia: "pa' que · informal" },
          { en: "cansado", guia: "cansao · informal" },
          { en: "¿Qué hubo?", guia: "¿Quiubo? · informal (Colombia, México)" }
        ]},
        { tipo: "dica", rotulo: "Importante:", texto: "La sinalefa (unir vocales entre palabras) es normal en cualquier registro. Las formas como “pa'” o “cansao” son coloquiales: entiéndelas cuando las oigas, pero escribe siempre la forma completa." }
      ]
    },

    {
      id: "registro",
      rotulo: "Parte 7",
      titulo: "El registro: formal, neutro e informal",
      icone: "carta",
      blocos: [
        { tipo: "texto", texto: "En español, el registro empieza en el pronombre: tú (informal), usted (formal) y, en Argentina, Uruguay y parte de Centroamérica, vos (informal). En plural, en España se usa vosotros (informal) y ustedes (formal); en América, ustedes para todo." },
        { tipo: "cartoes", itens: [
          { titulo: "Pedir ayuda", lista: ["Formal: ¿Sería tan amable de ayudarme?", "Neutro: ¿Me puede ayudar, por favor?", "Informal: ¿Me echas una mano?"] },
          { titulo: "Decir que no", lista: ["Formal: Me temo que no será posible.", "Neutro: Lo siento, no puedo.", "Informal: ¡Qué va, imposible!"] },
          { titulo: "Saludar", lista: ["Formal: Buenos días, ¿cómo está usted?", "Neutro: Hola, ¿cómo estás?", "Informal: ¿Qué tal? ¿Qué onda?"] }
        ]},
        { tipo: "lista", titulo: "Señales de un registro más formal:", itens: [
          "Usar usted y sus formas: ¿Cómo se llama usted?",
          "El condicional: ¿Podría…?, ¿Le importaría…?",
          "Fórmulas de cortesía: Me temo que…, Quería pedirle…, Disculpe la molestia…",
          "Títulos y apellidos: señor Pérez, doctora Gómez."
        ]}
      ]
    },

    {
      id: "comecar",
      rotulo: "Parte 8",
      titulo: "Empezar una conversación y charlar",
      icone: "aperto",
      blocos: [
        { tipo: "texto", texto: "La charla ligera crea confianza antes de los temas más profundos. Una técnica útil es FORD: Familia, Ocupación, Recreación y Deseos (sueños)." },
        { tipo: "cartoes", itens: [
          { titulo: "Familia", en: "¿Tienes hermanos?" },
          { titulo: "Ocupación", en: "¿A qué te dedicas? ¿Cuánto tiempo llevas haciéndolo?" },
          { titulo: "Recreación", en: "¿Qué te gusta hacer en tu tiempo libre?" },
          { titulo: "Deseos", en: "Si pudieras vivir en cualquier lugar, ¿dónde vivirías?" }
        ]},
        { tipo: "frases", titulo: "Frases para empezar según la situación:", itens: [
          { en: "Hola, creo que no nos conocemos. Soy Ana.", pt: "en una fiesta o evento" },
          { en: "¿De qué conoces a los anfitriones?", pt: "en una fiesta" },
          { en: "¿Está libre este asiento?", pt: "en el autobús o en un café" },
          { en: "Qué buen día hace, ¿no?", pt: "tema seguro, en cualquier lugar" },
          { en: "¿Qué tal el fin de semana?", pt: "con compañeros de trabajo" }
        ]},
        { tipo: "dica", rotulo: "Temas que conviene evitar con desconocidos:", texto: "El sueldo, la religión, la política, la edad, el peso y los problemas muy personales." }
      ]
    },

    {
      id: "perguntas",
      rotulo: "Parte 9",
      titulo: "Hacer buenas preguntas",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "Las buenas preguntas son el motor de la conversación. Las preguntas cerradas reciben respuestas cortas. Las abiertas invitan a contar historias. Las de seguimiento demuestran interés real." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Cerrada", en: "¿Te gustó el viaje?", nota: "Respuesta: “Sí.” Fin de la conversación." },
          { titulo: "Abierta", en: "¿Qué fue lo mejor del viaje?", nota: "Respuesta: una historia. La conversación sigue." },
          { titulo: "De seguimiento", en: "¿Y cómo te sentiste al llegar?", nota: "Se apoya en lo que la persona acaba de decir." }
        ]},
        { tipo: "frases", titulo: "Comienzos de pregunta que abren la conversación:", itens: [
          { en: "Cuéntame sobre…", pt: "invita a contar una historia" },
          { en: "¿Cómo fue?", pt: "pide una descripción" },
          { en: "¿Cómo empezaste a…?", pt: "pregunta por el origen" },
          { en: "¿Qué es lo que más te gusta de…?", pt: "pregunta por sentimientos" },
          { en: "¿Por qué decidiste…?", pt: "pregunta por los motivos" }
        ]}
      ]
    },

    {
      id: "turnos",
      rotulo: "Parte 10",
      titulo: "Los turnos de palabra",
      icone: "pessoas",
      blocos: [
        { tipo: "texto", texto: "Una conversación es como un partido de tenis: la pelota tiene que ir y volver. Aprende a tomar la palabra, mantenerla y cederla." },
        { tipo: "cartoes", itens: [
          { titulo: "Tomar la palabra", lista: ["¿Puedo añadir algo?", "Perdona que te interrumpa, pero…", "Si me permites…"] },
          { titulo: "Mantener la palabra", lista: ["Déjame terminar, por favor.", "Solo una cosa más…", "Espera, que ya termino."] },
          { titulo: "Ceder la palabra", lista: ["¿Tú qué opinas?", "¿Y tú?", "¿Te ha pasado alguna vez?"] },
          { titulo: "Retomar un tema", lista: ["Volviendo a lo que decías…", "Bueno, como te decía…", "Por cierto…"] }
        ]},
        { tipo: "dica", rotulo: "Equilibrio:", texto: "Si notas que llevas mucho tiempo hablando, devuelve el turno con una pregunta." }
      ]
    },

    {
      id: "opiniao",
      rotulo: "Parte 11",
      titulo: "Opinar, estar de acuerdo y discrepar",
      icone: "estrela",
      blocos: [
        { tipo: "texto", texto: "Dar tu opinión es ser claro y respetuoso a la vez. Fíjate en la gramática: “Creo que es verdad” (indicativo), pero “No creo que sea verdad” (subjuntivo)." },
        { tipo: "cartoes", itens: [
          { titulo: "Opinión fuerte", lista: ["Estoy convencido de que…", "No tengo ninguna duda de que…", "Está claro que…"] },
          { titulo: "Opinión neutra", lista: ["Creo que…", "En mi opinión…", "Para mí…"] },
          { titulo: "Opinión suave", lista: ["Me parece que…", "A lo mejor…", "Puede que me equivoque, pero…"] }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Estar de acuerdo", lista: ["¡Totalmente!", "Estoy completamente de acuerdo.", "Tienes razón.", "En parte, sí."] },
          { titulo: "Discrepar con educación", lista: ["Entiendo lo que dices, pero…", "No estoy tan seguro.", "Es verdad, pero por otro lado…", "Yo lo veo de otra manera."] }
        ]},
        { tipo: "dica", rotulo: "Fórmula para discrepar con educación:", texto: "Reconocer + Pero + Tu punto de vista. “Entiendo lo que dices, pero creo que necesitamos más tiempo.”" }
      ]
    },

    {
      id: "hesitacao",
      rotulo: "Parte 12",
      titulo: "Ganar tiempo: muletillas y pausas",
      icone: "relogio",
      blocos: [
        { tipo: "texto", texto: "Todo el mundo necesita tiempo para pensar, también los nativos. En lugar de quedarte en silencio, usa expresiones naturales que muestran que estás pensando." },
        { tipo: "frases", itens: [
          { en: "A ver…", pt: "muy común para empezar a pensar" },
          { en: "Pues…", pt: "al comenzar una respuesta" },
          { en: "Bueno…", pt: "para organizar la idea" },
          { en: "Buena pregunta.", pt: "te da tiempo y halaga a la otra persona" },
          { en: "¿Cómo te lo explico?", pt: "cuando buscas las palabras" },
          { en: "¿Cómo se dice…?", pt: "cuando olvidas una palabra" },
          { en: "O sea…", pt: "para reformular lo que dijiste" }
        ]},
        { tipo: "dica", rotulo: "¿Olvidaste una palabra?", texto: "Descríbela: “Es una cosa que sirve para…”, “Es como un… pero más grande”, “Es un tipo de…”. Esto se llama circunlocución y es una habilidad clave de la comunicación." }
      ]
    },

    {
      id: "reparo",
      rotulo: "Parte 13",
      titulo: "Cuando hay un malentendido",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "Los malentendidos son normales en cualquier idioma. Los buenos comunicadores los resuelven rápido. Nunca finjas que entendiste." },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "caixasom", titulo: "No lo oíste", en: "¿Perdón? ¿Me lo repites?" },
          { icone: "relogio", titulo: "Fue muy rápido", en: "¿Puedes hablar un poco más despacio, por favor?" },
          { icone: "lupa", titulo: "Una palabra que no conoces", en: "¿Qué significa “madrugar”?" },
          { icone: "check", titulo: "Comprobar que entendiste", en: "Entonces, la reunión es el lunes, ¿verdad?" },
          { icone: "conversa", titulo: "No te entendieron", en: "Te lo digo de otra manera…" },
          { icone: "letras", titulo: "Nombres y correos", en: "¿Me lo deletreas, por favor?" }
        ]},
        { tipo: "dica", rotulo: "Corrígete:", texto: "Si te das cuenta de que te equivocaste, simplemente corrígelo: “Perdón, quise decir martes, no jueves.” Es completamente natural." }
      ]
    },

    {
      id: "estrutura",
      rotulo: "Parte 14",
      titulo: "Organizar lo que dices",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Las ideas claras son fáciles de seguir. Cuando tengas que explicar algo o responder una pregunta importante, usa la estructura PREP." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Punto", en: "Creo que trabajar desde casa es mejor." },
          { titulo: "Razón", en: "Porque ahorro dos horas al día." },
          { titulo: "Ejemplo", en: "Por ejemplo, ahora tengo tiempo para hacer ejercicio." },
          { titulo: "Punto", en: "Así que, para mí, trabajar desde casa es mejor." }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Ordenar", lista: ["En primer lugar…", "Luego…", "Después…", "Por último…"] },
          { titulo: "Añadir", lista: ["Además…", "También…", "Encima…"] },
          { titulo: "Contrastar", lista: ["Sin embargo…", "Por otro lado…", "Aun así…"] },
          { titulo: "Concluir", lista: ["Así que…", "En resumen…", "En definitiva…"] }
        ]}
      ]
    },

    {
      id: "historias",
      rotulo: "Parte 15",
      titulo: "Contar una historia",
      icone: "livro",
      blocos: [
        { tipo: "texto", texto: "Las historias son lo que más se recuerda de una conversación. Una buena historia tiene un contexto, un problema, un momento clave y un final. Usa el pretérito imperfecto para describir el contexto y el indefinido para las acciones." },
        { tipo: "passos", itens: [
          { titulo: "Contexto", en: "El verano pasado, estaba de viaje por Portugal con dos amigos." },
          { titulo: "Problema", en: "Una noche, nos dimos cuenta de que habíamos perdido la llave del hotel." },
          { titulo: "Momento clave", en: "De repente, un desconocido se acercó con la llave en la mano." },
          { titulo: "Final", en: "Al final, lo invitamos a cenar y ahora somos amigos." }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Para contar", lista: ["No te vas a creer lo que me pasó…", "Pues resulta que…", "Y de repente…", "Total, que…"] },
          { titulo: "Para reaccionar", lista: ["¡No me digas!", "¿Y qué pasó después?", "¡Qué horror!", "¡Qué risa!"] }
        ]}
      ]
    },

    {
      id: "empatia",
      rotulo: "Parte 16",
      titulo: "Empatía y conversaciones difíciles",
      icone: "coracao",
      blocos: [
        { tipo: "texto", texto: "Comunicarse también es gestionar emociones. En los momentos difíciles, el objetivo es ser sincero sin herir a la otra persona." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Mostrar empatía", lista: ["Debe de ser muy difícil.", "Entiendo cómo te sientes.", "Cuenta conmigo para lo que necesites."] },
          { titulo: "Pedir perdón", lista: ["Lo siento muchísimo.", "Fue culpa mía.", "No volverá a pasar."] },
          { titulo: "Aceptar una disculpa", lista: ["No te preocupes.", "Tranquilo, son cosas que pasan.", "Disculpas aceptadas."] }
        ]},
        { tipo: "texto", texto: "Habla desde el “yo” en lugar de acusar con el “tú”. Así describes lo que sientes sin atacar a la otra persona." },
        { tipo: "frases", itens: [
          { en: "¡Nunca me escuchas!", pt: "✗ ataca y pone a la otra persona a la defensiva" },
          { en: "Me siento ignorado cuando me interrumpen.", pt: "✓ describe tu sentimiento" },
          { en: "¡Siempre llegas tarde!", pt: "✗ generaliza" },
          { en: "Me preocupo cuando llegas tarde. ¿Me escribes la próxima vez?", pt: "✓ sentimiento + petición" }
        ]}
      ]
    },

    {
      id: "corpo",
      rotulo: "Parte 17",
      titulo: "El lenguaje corporal",
      icone: "pessoa",
      blocos: [
        { tipo: "texto", texto: "Tu cuerpo habla antes que tu boca. Un lenguaje corporal abierto hace que los demás se sientan cómodos y te hace parecer seguro, aunque estés nervioso." },
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "olho", titulo: "Mirada", texto: "Mira a la persona la mayor parte del tiempo, de forma natural. Evitar la mirada parece inseguridad; mirar fijamente puede parecer agresivo." },
          { icone: "pessoa", titulo: "Postura", texto: "Espalda recta, hombros relajados y el cuerpo orientado hacia la persona. Los brazos cruzados pueden parecer una actitud defensiva." },
          { icone: "aperto", titulo: "Gestos", texto: "Las manos abiertas ayudan a explicar. Evita jugar con el móvil, el pelo o el bolígrafo." },
          { icone: "coracao", titulo: "Rostro", texto: "Una sonrisa sincera y asentir con la cabeza muestran interés." }
        ]},
        { tipo: "dica", rotulo: "La cultura importa:", texto: "En España es habitual saludar con dos besos en las mejillas; en gran parte de América Latina, con uno. En el mundo hispano la distancia personal suele ser corta y el contacto físico, frecuente. En contextos de trabajo, lo más seguro es el apretón de manos." }
      ]
    },

    {
      id: "chamadas",
      rotulo: "Parte 18",
      titulo: "Llamadas y videollamadas",
      icone: "relogio",
      blocos: [
        { tipo: "texto", texto: "Sin lenguaje corporal, las llamadas son más difíciles. Habla con más claridad, confirma la información y usa expresiones habituales." },
        { tipo: "cartoes", itens: [
          { titulo: "Contestar", lista: ["¿Diga? / ¿Sí? (España)", "¿Bueno? (México)", "¿Aló? (Colombia, Perú, Chile)", "¿Hola? (Argentina)"] },
          { titulo: "Empezar", lista: ["Hola, soy Ana, de MEA.", "¿Te pillo en buen momento?", "Te llamo por…"] },
          { titulo: "Problemas", lista: ["Perdona, se corta.", "Creo que tienes el micrófono silenciado.", "¿Me oyes ahora?"] },
          { titulo: "Terminar", lista: ["Gracias por tu tiempo.", "Hablamos pronto.", "Un abrazo, chao."] }
        ]}
      ]
    },

    {
      id: "encerrar",
      rotulo: "Parte 19",
      titulo: "Terminar una conversación con educación",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "Terminar bien es tan importante como empezar bien. Avisa que vas a terminar, agradece y despídete." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Avisar", en: "Bueno, me tengo que ir." },
          { titulo: "Agradecer", en: "Fue un placer hablar contigo." },
          { titulo: "Futuro", en: "Seguimos en contacto." },
          { titulo: "Despedirse", en: "Cuídate. ¡Hasta pronto!" }
        ]}
      ]
    },

    {
      id: "dialogo",
      rotulo: "Ejemplo",
      titulo: "Todo junto: una conversación real",
      icone: "pessoas",
      blocos: [
        { tipo: "texto", texto: "Dos personas se conocen en un evento de trabajo. Fíjate en la charla ligera, las preguntas abiertas, la escucha activa, la opinión y la despedida educada." },
        { tipo: "dialogo", rotuloBotao: "Escuchar todo el diálogo", falas: [
          { quem: "Ana", lado: "a", en: "Hola, creo que no nos conocemos. Soy Ana." },
          { quem: "Leo", lado: "b", en: "Encantado, Ana. Yo soy Leo. ¿De qué conoces al equipo?" },
          { quem: "Ana", lado: "a", en: "Trabajo en marketing. ¿Y tú? ¿A qué te dedicas?" },
          { quem: "Leo", lado: "b", en: "Soy programador. Empecé a trabajar desde casa el año pasado." },
          { quem: "Ana", lado: "a", en: "¿Ah, sí? ¿Y qué tal?" },
          { quem: "Leo", lado: "b", en: "Pues depende. Ahorro mucho tiempo, pero a veces me siento un poco aislado." },
          { quem: "Ana", lado: "a", en: "Entiendo. O sea, que echas de menos a la gente, pero no el tráfico." },
          { quem: "Leo", lado: "b", en: "¡Exacto! ¿Y tú? ¿Prefieres la oficina?" },
          { quem: "Ana", lado: "a", en: "Me parece que lo mejor es combinar las dos cosas. Bueno, me tengo que ir. ¡Fue un placer hablar contigo!" },
          { quem: "Leo", lado: "b", en: "Igualmente, Ana. Seguimos en contacto. ¡Cuídate!" }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Práctica",
      titulo: "¿Qué dirías?",
      icone: "foguete",
      blocos: [
        { tipo: "texto", texto: "Piensa primero tu respuesta. Después toca la tarjeta para ver una respuesta posible." },
        { tipo: "adivinhe", rotuloClique: "Toca para ver una respuesta", itens: [
          { emoji: "🤝", pergunta: "Quieres hablar con alguien en una fiesta.", resposta: "Hola, creo que no nos conocemos. Soy…" },
          { emoji: "🤔", pergunta: "Necesitas tiempo para pensar una pregunta.", resposta: "Buena pregunta. A ver…" },
          { emoji: "🙋", pergunta: "Quieres añadir una idea en una reunión.", resposta: "Perdona que te interrumpa, pero ¿puedo añadir algo?" },
          { emoji: "🙅", pergunta: "No estás de acuerdo con tu jefe.", resposta: "Entiendo lo que dice, pero yo lo veo de otra manera." },
          { emoji: "😕", pergunta: "No entendiste la explicación.", resposta: "¿Me pones un ejemplo?" },
          { emoji: "😢", pergunta: "Tu amigo perdió su trabajo.", resposta: "Debe de ser muy difícil. Cuenta conmigo para lo que necesites." },
          { emoji: "📞", pergunta: "En una llamada, se corta el audio.", resposta: "Perdona, se corta. ¿Me oyes ahora?" },
          { emoji: "🚪", pergunta: "Tienes que terminar la conversación.", resposta: "Bueno, me tengo que ir. ¡Fue un placer hablar contigo!" }
        ]},
        { tipo: "lista", titulo: "Tu plan de conversación para esta semana:", numerada: true, itens: [
          "Shadowing: pon un diálogo de esta clase y habla al mismo tiempo, copiando el ritmo y la entonación.",
          "Grábate respondiendo “Cuéntame cómo fue tu semana” durante un minuto. Escúchate y fíjate en tu velocidad y tus pausas.",
          "Usa la estructura PREP para dar tu opinión sobre un tema que te guste.",
          "Cuenta una historia corta con contexto, problema, momento clave y final.",
          "Ten una conversación real en español y usa al menos cinco expresiones de esta clase."
        ]},
        { tipo: "destaque", forte: "¡La práctica hace al maestro!", texto: "Comunicarse es una habilidad, como tocar un instrumento. Cada conversación, aunque no sea perfecta, te hace mejor." }
      ]
    }
  ]
});
