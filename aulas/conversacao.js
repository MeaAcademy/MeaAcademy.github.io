/*
  Conversação (English) — aula escrita inteiramente em inglês.
  Aprofundamento em fala e comunicação: escuta, voz, entonação, registro, perguntas,
  turnos de fala, opinião, reparo, estrutura, narrativa, empatia, linguagem corporal e chamadas.
  A versão em espanhol (aulas/es-conversacao.js) segue a mesma estrutura.
*/
MEA.registrarAula({
  id: "conversacao",
  curso: "MEA English",
  semana: "Conversação",
  titulo: "Conversação",
  subtitulo: "Speaking and communication: the complete guide",
  resumo: "A deep lesson on how real communication works: listening, voice, stress and intonation, registers, questions, turn-taking, opinions, repairing misunderstandings, structuring ideas, storytelling, empathy, body language and calls.",
  capaEmoji: "💬 🗣️ 👂\n🤝 🎙️ 😊",

  secoes: [
    {
      id: "o-que-e",
      rotulo: "Introduction",
      titulo: "What is communication?",
      icone: "alvo",
      blocos: [
        { tipo: "texto", texto: "Communication is not just saying words. It is making sure that the other person understands the message you intended, and that you understand theirs. Good speakers are not the ones with the biggest vocabulary. They are the ones who listen well, speak clearly and adapt to the person in front of them." },
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "conversa", titulo: "Words", texto: "What you say: vocabulary, grammar, the order of your ideas." },
          { icone: "caixasom", titulo: "Voice", texto: "How you say it: speed, volume, pauses, stress and intonation." },
          { icone: "pessoa", titulo: "Body", texto: "What you show: eye contact, facial expression, posture and gestures." }
        ]},
        { tipo: "dica", rotulo: "A famous myth:", texto: "You may have heard that “only 7% of communication is words”. That number comes from a 1960s study about feelings and tone of voice, not about all communication. Words matter a lot. The point is that voice and body can support your words or contradict them." },
        { tipo: "destaque", texto: "Fluency is not speaking without mistakes. Fluency is communicating your ideas with confidence, even when you make mistakes." }
      ]
    },

    {
      id: "ciclo",
      rotulo: "Part 1",
      titulo: "The communication cycle",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "Every conversation follows the same cycle. Problems happen when one of the steps fails." },
        { tipo: "passos", itens: [
          { titulo: "Intention", texto: "You decide what you want to say and why. Are you informing, asking, asking for help, joking, persuading?" },
          { titulo: "Message", texto: "You choose words, tone and body language to express it." },
          { titulo: "Listening", texto: "The other person receives the message and interprets it with their own experience, culture and mood." },
          { titulo: "Feedback", texto: "They react with words, a facial expression or silence. This tells you if the message arrived." },
          { titulo: "Adjustment", texto: "You confirm, repeat, explain in another way or continue. Then the cycle starts again." }
        ]},
        { tipo: "dica", rotulo: "Remember:", texto: "The meaning of a message is the response you get. If people misunderstand you, change the way you say it, not only the volume." }
      ]
    },

    {
      id: "escuta",
      rotulo: "Part 2",
      titulo: "Active listening",
      icone: "olho",
      blocos: [
        { tipo: "texto", texto: "Half of a conversation is listening. Active listening means showing the speaker that you are following, and checking that you really understood. It also gives you time to prepare your answer." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "1. Show you are listening", texto: "Short sounds and words keep the speaker going. They are called backchannels.", lista: ["Uh-huh.", "I see.", "Right.", "Really?", "Oh, wow."] },
          { titulo: "2. Paraphrase", texto: "Repeat the idea with your own words.", lista: ["So what you mean is…", "In other words…", "So basically, you…"] },
          { titulo: "3. Ask to clarify", texto: "Ask about the part that is not clear.", lista: ["What do you mean by…?", "Could you give me an example?"] },
          { titulo: "4. Summarize", texto: "At the end, sum up the main points.", lista: ["So, to sum up…", "Let me see if I got this right…"] }
        ]},
        { tipo: "dica", rotulo: "Avoid:", texto: "Interrupting to finish the other person's sentence, checking your phone, or preparing your answer while the other person is still talking." }
      ]
    },

    {
      id: "voz",
      rotulo: "Part 3",
      titulo: "Your voice",
      icone: "caixasom",
      blocos: [
        { tipo: "texto", texto: "The same sentence can sound confident, nervous, rude or friendly. The difference is in the voice. Work on four controls:" },
        { tipo: "cartoes", itens: [
          { titulo: "Pace", texto: "Speaking fast is not the same as speaking fluently. A calm pace sounds more confident and is easier to understand, especially in a foreign language." },
          { titulo: "Volume", texto: "Speak loud enough for the other person to hear you without effort. Low volume often sounds insecure; very high volume can sound aggressive." },
          { titulo: "Pauses", texto: "A short pause before an important idea creates attention. A pause is much better than “uhm, uhm, uhm”." },
          { titulo: "Pitch", texto: "Varying your pitch (high and low) shows emotion and interest. A flat, monotone voice sounds bored." }
        ]},
        { tipo: "frases", titulo: "Listen and repeat, with a pause at each | :", itens: [
          { en: "I have one important thing | to tell you.", pt: "pause before the important part" },
          { en: "The answer | is simple.", pt: "pause to create attention" },
          { en: "First, | we talk. | Then, | we decide.", pt: "pauses organize the ideas" }
        ]}
      ]
    },

    {
      id: "acento",
      rotulo: "Part 4",
      titulo: "Word stress and sentence stress",
      icone: "letras",
      blocos: [
        { tipo: "texto", texto: "English is a stress-timed language: some syllables are long and strong, others are short and weak. If you put the stress in the wrong place, people may not recognize a word you pronounce perfectly." },
        { tipo: "pronuncia", itens: [
          { en: "photograph", guia: "PHO-to-graph" },
          { en: "photographer", guia: "pho-TO-gra-pher" },
          { en: "photographic", guia: "pho-to-GRA-phic" },
          { en: "record (noun)", guia: "RE-cord" },
          { en: "record (verb)", guia: "re-CORD" },
          { en: "comfortable", guia: "COMF-ta-ble" }
        ]},
        { tipo: "texto", texto: "In sentences, we stress the content words (nouns, main verbs, adjectives, adverbs) and reduce the function words (a, the, to, of, and, is). Changing the stressed word changes the meaning:" },
        { tipo: "frases", itens: [
          { en: "I didn't say she stole the money.", pt: "stress on I → someone else said it" },
          { en: "I didn't SAY she stole the money.", pt: "stress on SAY → I only suggested it" },
          { en: "I didn't say SHE stole the money.", pt: "stress on SHE → someone else stole it" },
          { en: "I didn't say she stole the MONEY.", pt: "stress on MONEY → she stole something else" }
        ]},
        { tipo: "dica", rotulo: "Practice:", texto: "Read the sentence four times, stressing a different word each time. Ask a partner to tell you the meaning." }
      ]
    },

    {
      id: "entonacao",
      rotulo: "Part 5",
      titulo: "Intonation: the music of English",
      icone: "sol",
      blocos: [
        { tipo: "texto", texto: "Intonation is the movement of your voice up ↗ and down ↘. It tells the listener if you are asking, finishing, unsure or excited." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "↘ Falling", texto: "Statements, orders and Wh- questions.", lista: ["I live in São Paulo. ↘", "Where do you work? ↘"] },
          { titulo: "↗ Rising", texto: "Yes/No questions, surprise, lists that continue.", lista: ["Do you like coffee? ↗", "Really? ↗"] },
          { titulo: "Question tags", texto: "Falling: you expect agreement. Rising: you really want to know.", lista: ["It's cold today, isn't it? ↘", "You're coming, aren't you? ↗"] }
        ]},
        { tipo: "dica", rotulo: "Why it matters:", texto: "A flat “Thank you” can sound sarcastic. A falling, warm “Thank you ↘” sounds sincere." }
      ]
    },

    {
      id: "fala-conectada",
      rotulo: "Part 6",
      titulo: "Connected speech",
      icone: "conversa",
      blocos: [
        { tipo: "texto", texto: "Native speakers don't pronounce words one by one. Words connect, sounds disappear and weak forms appear. Understanding this is the key to understanding fast speech." },
        { tipo: "pronuncia", itens: [
          { en: "an apple", guia: "a-NA-pple · linking" },
          { en: "turn off", guia: "tur-NOFF · linking" },
          { en: "What do you want?", guia: "Whaddaya want?" },
          { en: "I'm going to call you.", guia: "I'm gonna call you." },
          { en: "I want to go.", guia: "I wanna go." },
          { en: "Did you eat?", guia: "Didja eat?" },
          { en: "fish and chips", guia: "fish 'n' chips · weak form" },
          { en: "a cup of tea", guia: "a cuppa tea · weak form" }
        ]},
        { tipo: "dica", rotulo: "Important:", texto: "Understand these forms when you hear them. In speaking you can use them in informal situations, but write the full forms (going to, want to)." }
      ]
    },

    {
      id: "registro",
      rotulo: "Part 7",
      titulo: "Register: formal, neutral and informal",
      icone: "carta",
      blocos: [
        { tipo: "texto", texto: "The same idea can be expressed in different ways depending on who you are talking to. Choosing the right register shows respect and social intelligence." },
        { tipo: "cartoes", itens: [
          { titulo: "Asking for help", lista: ["Formal: Would you mind helping me with this?", "Neutral: Could you help me, please?", "Informal: Can you give me a hand?"] },
          { titulo: "Saying no", lista: ["Formal: I'm afraid that won't be possible.", "Neutral: Sorry, I can't.", "Informal: No way, sorry!"] },
          { titulo: "Greeting", lista: ["Formal: Good morning. How do you do?", "Neutral: Hello, how are you?", "Informal: Hey! What's up?"] }
        ]},
        { tipo: "lista", titulo: "Signals of a more formal register:", itens: [
          "Modal verbs: would, could, might.",
          "Softeners: I'm afraid…, I was wondering if…, Perhaps…",
          "Full forms instead of contractions in very formal writing: I am, do not.",
          "Titles and surnames: Mr. Smith, Dr. Jones."
        ]}
      ]
    },

    {
      id: "comecar",
      rotulo: "Part 8",
      titulo: "Starting a conversation and small talk",
      icone: "aperto",
      blocos: [
        { tipo: "texto", texto: "Small talk is light, friendly conversation. It builds trust before deeper topics. A useful technique is FORD: Family, Occupation, Recreation, Dreams." },
        { tipo: "cartoes", itens: [
          { titulo: "Family", en: "Do you have any brothers or sisters?" },
          { titulo: "Occupation", en: "What do you do? How long have you been doing that?" },
          { titulo: "Recreation", en: "What do you like to do in your free time?" },
          { titulo: "Dreams", en: "If you could live anywhere, where would it be?" }
        ]},
        { tipo: "frases", titulo: "Openers for different situations:", itens: [
          { en: "Hi, I don't think we've met. I'm Ana.", pt: "at a party or event" },
          { en: "How do you know the host?", pt: "at a party" },
          { en: "Is this seat taken?", pt: "on a bus, in a café" },
          { en: "Nice weather today, isn't it?", pt: "safe topic, anywhere" },
          { en: "How was your weekend?", pt: "with colleagues" }
        ]},
        { tipo: "dica", rotulo: "Topics to avoid with strangers:", texto: "Salary, religion, politics, age, weight and very personal problems." }
      ]
    },

    {
      id: "perguntas",
      rotulo: "Part 9",
      titulo: "Asking great questions",
      icone: "lupa",
      blocos: [
        { tipo: "texto", texto: "Good questions are the engine of a conversation. Closed questions get short answers. Open questions invite stories. Follow-up questions show real interest." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Closed", en: "Did you like the trip?", nota: "Answer: “Yes.” End of conversation." },
          { titulo: "Open", en: "What was the best part of the trip?", nota: "Answer: a story. The conversation continues." },
          { titulo: "Follow-up", en: "How did you feel when you got there?", nota: "Builds on what the person just said." }
        ]},
        { tipo: "frases", titulo: "Question starters that open conversations:", itens: [
          { en: "Tell me about…", pt: "invites a story" },
          { en: "What was it like?", pt: "asks for a description" },
          { en: "How did you get into…?", pt: "asks about the beginning" },
          { en: "What do you enjoy most about…?", pt: "asks for feelings" },
          { en: "Why did you decide to…?", pt: "asks for reasons" }
        ]}
      ]
    },

    {
      id: "turnos",
      rotulo: "Part 10",
      titulo: "Turn-taking: when to speak",
      icone: "pessoas",
      blocos: [
        { tipo: "texto", texto: "A conversation is like a game of tennis: the ball must go back and forth. Learn to take a turn, keep it and give it back." },
        { tipo: "cartoes", itens: [
          { titulo: "Taking a turn", lista: ["Can I add something?", "Sorry to interrupt, but…", "If I could just say…"] },
          { titulo: "Keeping your turn", lista: ["Let me finish, please.", "Just one more thing…", "Hang on, I'm almost done."] },
          { titulo: "Giving the turn", lista: ["What do you think?", "How about you?", "Have you ever experienced that?"] },
          { titulo: "Going back to a topic", lista: ["Going back to what you said…", "Anyway, as I was saying…", "By the way…"] }
        ]},
        { tipo: "dica", rotulo: "Balance:", texto: "If you notice you have been talking for a long time, give the turn back with a question." }
      ]
    },

    {
      id: "opiniao",
      rotulo: "Part 11",
      titulo: "Opinions, agreeing and disagreeing",
      icone: "estrela",
      blocos: [
        { tipo: "texto", texto: "Expressing an opinion is about being clear and respectful. In English, people often soften opinions and disagreements. This is called hedging." },
        { tipo: "cartoes", itens: [
          { titulo: "Strong opinion", lista: ["I'm convinced that…", "I strongly believe…", "There's no doubt that…"] },
          { titulo: "Neutral opinion", lista: ["I think…", "In my opinion…", "As far as I'm concerned…"] },
          { titulo: "Soft opinion", lista: ["I tend to think…", "It seems to me that…", "I might be wrong, but…"] }
        ]},
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Agreeing", lista: ["Absolutely!", "I couldn't agree more.", "That's a good point.", "I agree to some extent."] },
          { titulo: "Disagreeing politely", lista: ["I see what you mean, but…", "I'm not so sure about that.", "That's true, but on the other hand…", "I see it differently."] }
        ]},
        { tipo: "dica", rotulo: "Formula for polite disagreement:", texto: "Acknowledge + But + Your view. “I see what you mean, but I think we need more time.”" }
      ]
    },

    {
      id: "hesitacao",
      rotulo: "Part 12",
      titulo: "Buying time: fillers and hesitation",
      icone: "relogio",
      blocos: [
        { tipo: "texto", texto: "Everyone needs time to think, even native speakers. Instead of silence or “uhm”, use phrases that sound natural and show you are thinking." },
        { tipo: "frases", itens: [
          { en: "Let me think…", pt: "simple and natural" },
          { en: "That's a good question.", pt: "gives you time and compliments the other person" },
          { en: "Well, it depends.", pt: "before a complex answer" },
          { en: "How can I put this?", pt: "when you are looking for words" },
          { en: "What's the word… ?", pt: "when you forget a word" },
          { en: "You know what I mean?", pt: "checking the listener follows you" }
        ]},
        { tipo: "dica", rotulo: "Forgot a word?", texto: "Describe it: “It's a kind of…”, “It's something you use to…”, “It's like a… but bigger.” This is called circumlocution, and it is a key communication skill." }
      ]
    },

    {
      id: "reparo",
      rotulo: "Part 13",
      titulo: "When communication breaks down",
      icone: "mais",
      blocos: [
        { tipo: "texto", texto: "Misunderstandings are normal in any language. Good communicators repair them quickly. Never pretend you understood." },
        { tipo: "frases", estilo: "icones", itens: [
          { icone: "caixasom", titulo: "You didn't hear", en: "Sorry, could you say that again?" },
          { icone: "relogio", titulo: "It was too fast", en: "Could you speak a bit more slowly, please?" },
          { icone: "lupa", titulo: "A word you don't know", en: "What does “awkward” mean?" },
          { icone: "check", titulo: "Checking you understood", en: "Just to confirm, the meeting is on Monday, right?" },
          { icone: "conversa", titulo: "The other person didn't understand you", en: "Let me put it another way…" },
          { icone: "letras", titulo: "Names and emails", en: "Could you spell that for me?" }
        ]},
        { tipo: "dica", rotulo: "Repair yourself:", texto: "If you notice you made a mistake, just correct it: “Sorry, I mean Tuesday, not Thursday.” This is completely natural." }
      ]
    },

    {
      id: "estrutura",
      rotulo: "Part 14",
      titulo: "Structuring what you say",
      icone: "lista",
      blocos: [
        { tipo: "texto", texto: "Clear ideas are easy to follow. When you need to explain something or answer an important question, use the PREP structure." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Point", en: "I think working from home is better." },
          { titulo: "Reason", en: "That's because I save two hours a day." },
          { titulo: "Example", en: "For example, I now have time to exercise." },
          { titulo: "Point", en: "So, for me, working from home is better." }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Sequencing", lista: ["First of all…", "Then…", "After that…", "Finally…"] },
          { titulo: "Adding", lista: ["Also…", "On top of that…", "What's more…"] },
          { titulo: "Contrasting", lista: ["However…", "On the other hand…", "Even so…"] },
          { titulo: "Concluding", lista: ["So…", "All in all…", "To sum up…"] }
        ]}
      ]
    },

    {
      id: "historias",
      rotulo: "Part 15",
      titulo: "Telling a story",
      icone: "livro",
      blocos: [
        { tipo: "texto", texto: "Stories are the most memorable part of any conversation. A good story has a setting, a problem, a climax and an ending. Use past tenses and time expressions." },
        { tipo: "passos", itens: [
          { titulo: "Setting", en: "Last summer, I was traveling in Portugal with two friends." },
          { titulo: "Problem", en: "One night, we realized we had lost our hotel key." },
          { titulo: "Climax", en: "Suddenly, a stranger came up to us holding it!" },
          { titulo: "Ending", en: "In the end, we invited him for dinner, and now we're friends." }
        ]},
        { tipo: "cartoes", itens: [
          { titulo: "Storyteller expressions", lista: ["You won't believe what happened…", "So, anyway…", "And then, out of nowhere…", "Long story short…"] },
          { titulo: "Listener reactions", lista: ["No way!", "What happened next?", "Oh, that's awful!", "That's hilarious!"] }
        ]}
      ]
    },

    {
      id: "empatia",
      rotulo: "Part 16",
      titulo: "Empathy and difficult conversations",
      icone: "coracao",
      blocos: [
        { tipo: "texto", texto: "Communication is also about emotions. In difficult moments, the goal is to be honest without hurting the other person." },
        { tipo: "cartoes", estilo: "borda", itens: [
          { titulo: "Showing empathy", lista: ["That must be really hard.", "I understand how you feel.", "I'm here if you need anything."] },
          { titulo: "Apologizing", lista: ["I'm really sorry about that.", "That was my fault.", "It won't happen again."] },
          { titulo: "Accepting an apology", lista: ["Don't worry about it.", "It's OK, these things happen.", "Apology accepted."] }
        ]},
        { tipo: "texto", texto: "Use “I statements” instead of “You statements”. They describe your feelings instead of attacking the other person." },
        { tipo: "frases", itens: [
          { en: "You never listen to me!", pt: "✗ attacks, creates defense" },
          { en: "I feel ignored when I'm interrupted.", pt: "✓ describes your feeling" },
          { en: "You're always late!", pt: "✗ generalizes" },
          { en: "I get worried when you're late. Could you text me next time?", pt: "✓ feeling + request" }
        ]}
      ]
    },

    {
      id: "corpo",
      rotulo: "Part 17",
      titulo: "Body language",
      icone: "pessoa",
      blocos: [
        { tipo: "texto", texto: "Your body speaks before your mouth. Open body language makes people feel comfortable and makes you look confident, even when you are nervous." },
        { tipo: "cartoes", estilo: "icone", itens: [
          { icone: "olho", titulo: "Eye contact", texto: "Look at the person most of the time, but naturally. Looking away all the time can seem insecure; staring can seem aggressive." },
          { icone: "pessoa", titulo: "Posture", texto: "Stand or sit straight, shoulders relaxed, facing the person. Crossed arms can look defensive." },
          { icone: "aperto", titulo: "Gestures", texto: "Open hands help explain ideas. Avoid playing with your phone, hair or pen." },
          { icone: "coracao", titulo: "Face", texto: "A real smile and nodding show interest and agreement." }
        ]},
        { tipo: "dica", rotulo: "Culture matters:", texto: "Gestures and personal space change between cultures. The “OK” hand sign and the thumbs-up are offensive in some countries, and people in the UK or US usually stand further apart than people in Brazil." }
      ]
    },

    {
      id: "chamadas",
      rotulo: "Part 18",
      titulo: "Phone and video calls",
      icone: "relogio",
      blocos: [
        { tipo: "texto", texto: "Without body language, calls are harder. Speak more clearly, confirm information and use standard expressions." },
        { tipo: "cartoes", itens: [
          { titulo: "Starting", lista: ["Hi, this is Ana from MEA.", "Is this a good time to talk?", "I'm calling about…"] },
          { titulo: "Problems", lista: ["Sorry, you're breaking up.", "I think you're on mute.", "Can you hear me now?"] },
          { titulo: "Confirming", lista: ["Let me read that back to you.", "So, just to recap…", "I'll send you an email to confirm."] },
          { titulo: "Ending", lista: ["Thanks for your time.", "Talk to you soon.", "Have a good one!"] }
        ]}
      ]
    },

    {
      id: "encerrar",
      rotulo: "Part 19",
      titulo: "Ending a conversation politely",
      icone: "check",
      blocos: [
        { tipo: "texto", texto: "Ending well is as important as starting well. Signal the end, thank the person and say goodbye." },
        { tipo: "passos", estilo: "linha", itens: [
          { titulo: "Signal", en: "Well, I should get going." },
          { titulo: "Thank", en: "It was really nice talking to you." },
          { titulo: "Future", en: "Let's keep in touch." },
          { titulo: "Goodbye", en: "Take care. See you soon!" }
        ]}
      ]
    },

    {
      id: "dialogo",
      rotulo: "Example",
      titulo: "Everything together: a real conversation",
      icone: "pessoas",
      blocos: [
        { tipo: "texto", texto: "Two people meet at a work event. Notice the small talk, the open questions, the active listening, the opinion and the polite ending." },
        { tipo: "dialogo", rotuloBotao: "Listen to the whole dialogue", falas: [
          { quem: "Ana", lado: "a", en: "Hi, I don't think we've met. I'm Ana." },
          { quem: "Leo", lado: "b", en: "Nice to meet you, Ana. I'm Leo. How do you know the team?" },
          { quem: "Ana", lado: "a", en: "I work in marketing. What about you? What do you do?" },
          { quem: "Leo", lado: "b", en: "I'm a developer. I started working from home last year." },
          { quem: "Ana", lado: "a", en: "Oh, really? What's it like?" },
          { quem: "Leo", lado: "b", en: "Well, it depends. I save a lot of time, but sometimes I feel a bit isolated." },
          { quem: "Ana", lado: "a", en: "I see what you mean. So you miss the people, but not the traffic?" },
          { quem: "Leo", lado: "b", en: "Exactly! How about you? Do you prefer the office?" },
          { quem: "Ana", lado: "a", en: "I tend to think a mix is best. Anyway, I should get going. It was really nice talking to you!" },
          { quem: "Leo", lado: "b", en: "You too, Ana. Let's keep in touch. Take care!" }
        ]}
      ]
    },

    {
      id: "pratica",
      rotulo: "Practice",
      titulo: "What would you say?",
      icone: "foguete",
      blocos: [
        { tipo: "texto", texto: "Think of your answer first. Then tap the card to see one possible answer." },
        { tipo: "adivinhe", rotuloClique: "Tap to see an answer", itens: [
          { emoji: "🤝", pergunta: "You want to start talking to someone at a party.", resposta: "Hi, I don't think we've met. I'm…" },
          { emoji: "🤔", pergunta: "You need time to think about a question.", resposta: "That's a good question. Let me think…" },
          { emoji: "🙋", pergunta: "You want to add an idea in a meeting.", resposta: "Sorry to interrupt, but can I add something?" },
          { emoji: "🙅", pergunta: "You disagree with your boss.", resposta: "I see what you mean, but I see it differently." },
          { emoji: "😕", pergunta: "You didn't understand the explanation.", resposta: "Could you give me an example?" },
          { emoji: "😢", pergunta: "Your friend lost their job.", resposta: "That must be really hard. I'm here if you need anything." },
          { emoji: "📞", pergunta: "On a call, the audio stops.", resposta: "Sorry, you're breaking up. Can you hear me now?" },
          { emoji: "🚪", pergunta: "You need to leave the conversation.", resposta: "Well, I should get going. It was really nice talking to you!" }
        ]},
        { tipo: "lista", titulo: "Your speaking plan for this week:", numerada: true, itens: [
          "Shadowing: play a dialogue from this lesson and speak at the same time, copying the rhythm and intonation.",
          "Record yourself answering “Tell me about your week” for one minute. Listen and notice your pace and pauses.",
          "Use the PREP structure to give your opinion about a topic you like.",
          "Tell a short story with setting, problem, climax and ending.",
          "Have a real conversation in English and use at least five expressions from this lesson."
        ]},
        { tipo: "destaque", forte: "Practice makes progress.", texto: "Communication is a skill, like playing an instrument. Every conversation, even an imperfect one, makes you better." }
      ]
    }
  ]
});
