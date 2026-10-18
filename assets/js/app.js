/* MEA Academy — motor do site.
   Cada aula é um arquivo em /aulas que chama MEA.registrarAula({...}).
   A lista de aulas publicadas fica em /aulas/lista.js. */
(function () {
  "use strict";

  const MEA = (window.MEA = window.MEA || {});
  MEA.aulas = MEA.aulas || {};
  MEA.registrarAula = (aula) => { MEA.aulas[aula.id] = aula; };

  /* ---------- Ícones (traço simples, herdam a cor) ---------- */
  const P = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICONES = {
    alvo: P('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>'),
    calendario: P('<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h3"/>'),
    lupa: P('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>'),
    pessoas: P('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.5c2.4.2 4 1.9 4.5 4.5"/>'),
    moeda: P('<circle cx="12" cy="12" r="9"/><path d="M14.8 9.2c-.5-1-1.6-1.6-2.8-1.6-1.6 0-2.8.9-2.8 2.1 0 2.9 5.8 1.6 5.8 4.6 0 1.2-1.3 2.1-3 2.1-1.3 0-2.5-.7-3-1.7M12 6v1.6M12 16.4V18"/>'),
    cama: P('<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.8"/>'),
    estrela: P('<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>'),
    mais: P('<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>'),
    conversa: P('<path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="M17 9h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3H13"/>'),
    talheres: P('<path d="M7 3v8M4.5 3v5a2.5 2.5 0 0 0 5 0V3M7 11v10M17 21V3c-2.2 1.2-3.5 3.7-3.5 7v3H17"/>'),
    check: P('<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.7 2.7L16.5 9.5"/>'),
    chave: P('<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l2.5 2.5M14.5 8.5 16.5 10.5"/>'),
    bandeja: P('<path d="M3 17h18M5 17a7 7 0 0 1 14 0M12 8V6.5M10.5 6.5h3M2.5 20h19"/>'),
    cartao: P('<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M2.5 10h19M6 15h4"/>'),
    mapa: P('<path d="m9 4-6 2.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>'),
    sacola: P('<path d="M5 8h14l-1 12H6z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/>'),
    foguete: P('<path d="M12 15c-1.5-1.5-2.5-3.5-2.5-6C9.5 6 11 3.5 12 2.5c1 1 2.5 3.5 2.5 6.5 0 2.5-1 4.5-2.5 6z"/><path d="M9.6 11.5 6.5 14l1 4 3-2M14.4 11.5l3.1 2.5-1 4-3-2M12 15v6"/><circle cx="12" cy="8" r="1.3"/>'),
    cardapio: P('<rect x="4" y="3" width="11" height="18" rx="1.5"/><path d="M7 7h5M7 10.5h5M7 14h3M18 3v18M18 3c1.6 1 2.2 2.6 2.2 4.2 0 1.8-1 2.8-2.2 2.8"/>'),
    pizza: P('<path d="M3.5 7.5C9 3 15 3 20.5 7.5L12 21z"/><path d="M5.5 10.5c4-2.8 9-2.8 13 0"/><circle cx="10" cy="12.5" r="1"/><circle cx="14" cy="14" r="1"/>'),
    agua: P('<path d="M12 3s-5 5.6-5 9a5 5 0 0 0 10 0c0-3.4-5-9-5-9z"/><path d="M3 19c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0"/>'),
    museu: P('<path d="M3 9.5 12 4l9 5.5M4.5 10v8M9 10v8M15 10v8M19.5 10v8M3 20.5h18M2.5 18h19"/>'),
    relogio: P('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    dinheiro: P('<rect x="2.5" y="6" width="19" height="12" rx="1.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9v.01M18 15v.01"/>'),
    lista: P('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h7M9 12h7M9 16h7M7.3 8v.01M7.3 12v.01M7.3 16v.01"/>'),
    recibo: P('<path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21z"/><path d="M9 8h6M9 11.5h6M9 15h4"/>'),
    predio: P('<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10.5 21v-3h3v3"/>'),
    pessoa: P('<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.6-4 3.4-6.4 7-6.4s6.4 2.4 7 6.4"/>'),
    som: P('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),
    nota: P('<path d="M5 4h14v11l-5 5H5z"/><path d="M14 20v-5h5"/>'),
    olho: P('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'),
    lua: P('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'),
    texto: P('<path d="M4 18 8.5 6 13 18M5.7 14h5.6M15 18l3-8 3 8M15.9 15.8h4.2"/>'),
    imprimir: P('<path d="M7 9V3.5h10V9M7 17H4.5V10a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v7H17"/><rect x="7" y="14" width="10" height="7"/>'),
    voltar: P('<path d="M15 5 8 12l7 7"/>'),
    play: P('<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z"/>'),
    pdf: P('<path d="M6 3h9l4 4v14H6z"/><path d="M14.5 3v4.5H19M9 13h6M9 16.5h4"/>'),
    cerebro: P('<path d="M9.5 4.5a3 3 0 0 0-5 2.2 3 3 0 0 0-1 5.3 3 3 0 0 0 2 4.8 3 3 0 0 0 4 2.7V4.5zM14.5 4.5a3 3 0 0 1 5 2.2 3 3 0 0 1 1 5.3 3 3 0 0 1-2 4.8 3 3 0 0 1-4 2.7V4.5z"/><path d="M9.5 4.5a2.5 2.5 0 0 1 5 0"/>'),
    coracao: P('<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z"/>'),
    envelope: P('<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="m3.5 6.5 8.5 7 8.5-7"/>'),
    caixasom: P('<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="14" r="3.2"/><circle cx="12" cy="7.3" r="1.2"/>'),
    aperto: P('<path d="M2.5 11 6 7.5l3 1 3-2 4 .5 5.5 4M21.5 11l-3.5 3.5M2.5 11 7 15.5"/><path d="m9 12 2.5 2.5M11 10l3.5 3.5M7 15.5l1.5 1.5a1.4 1.4 0 0 0 2-2M10.5 15l1.5 1.5a1.4 1.4 0 0 0 2-2l.5.5a1.4 1.4 0 0 0 2-2"/>'),
    nascer: P('<path d="M3 18h18M6.5 18a5.5 5.5 0 0 1 11 0M12 6v3M4.6 10.6l1.8 1.8M19.4 10.6l-1.8 1.8M7 21h10"/>'),
    sol: P('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>'),
    bussola: P('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>'),
    letras: P('<path d="M3 18 6.5 6 10 18M4.2 14h4.6M13 6h4a3 3 0 0 1 0 6h-4zM13 12h4.5a3 3 0 0 1 0 6H13z"/>'),
    carta: P('<path d="M5 3h10l4 4v14H5z"/><path d="M8 9h8M8 12.5h8M8 16h5"/>'),
    aspas: P('<path d="M4 17c0-5 1.5-8 5-10M4 17h4v-4H4zM13 17c0-5 1.5-8 5-10M13 17h4v-4h-4z"/>'),
    seta: P('<path d="M5 12h13M13 6l6 6-6 6"/>'),
  };
  MEA.icone = (n) => ICONES[n] || ICONES.nota;

  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Preferências (salvas no navegador) ---------- */
  const pref = {
    get(k, d) { try { const v = localStorage.getItem("mea." + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("mea." + k, JSON.stringify(v)); } catch {} },
  };
  MEA.pref = pref;

  function aplicarPreferencias() {
    const tema = pref.get("tema", null);
    if (tema) document.documentElement.dataset.theme = tema;
    document.documentElement.style.setProperty("--escala", pref.get("escala", 1));
  }
  aplicarPreferencias();

  MEA.montarFerramentas = function (alvo, { estudo = false } = {}) {
    const el = document.querySelector(alvo);
    if (!el) return;
    const temaAtual = () => document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    el.innerHTML = `
      ${estudo ? `<button class="btn" id="b-estudo" aria-pressed="false" title="Esconde as traduções para você testar a memória">${MEA.icone("olho")}<span class="rotulo">Modo estudo</span></button>` : ""}
      <button class="btn" id="b-menos" aria-label="Diminuir texto" title="Diminuir texto">A−</button>
      <button class="btn" id="b-mais" aria-label="Aumentar texto" title="Aumentar texto">A+</button>
      <button class="btn" id="b-tema" aria-label="Alternar tema claro ou escuro" title="Tema claro / escuro">${MEA.icone("lua")}</button>`;
    const escala = (d) => {
      const v = Math.min(1.5, Math.max(0.85, +(pref.get("escala", 1) + d).toFixed(2)));
      pref.set("escala", v); document.documentElement.style.setProperty("--escala", v);
    };
    el.querySelector("#b-menos").onclick = () => escala(-0.1);
    el.querySelector("#b-mais").onclick = () => escala(0.1);
    el.querySelector("#b-tema").onclick = () => {
      const novo = temaAtual() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = novo; pref.set("tema", novo);
    };
    const be = el.querySelector("#b-estudo");
    if (be) {
      const set = (on) => { document.body.classList.toggle("modo-estudo", on); be.setAttribute("aria-pressed", on); pref.set("estudo", on);
        document.querySelectorAll(".pt").forEach((p) => { p.classList.remove("revelado"); on ? p.setAttribute("tabindex", "0") : p.removeAttribute("tabindex"); }); };
      be.onclick = () => set(!document.body.classList.contains("modo-estudo"));
      set(pref.get("estudo", false));
    }
  };

  /* ---------- Pronúncia (voz do navegador, en-US) ---------- */
  let vozEn = null;
  function escolherVoz() {
    if (!("speechSynthesis" in window)) return;
    const vozes = speechSynthesis.getVoices();
    vozEn = vozes.find((v) => /en-US/i.test(v.lang) && /natural|google|samantha|aria|jenny/i.test(v.name)) ||
            vozes.find((v) => /en-US/i.test(v.lang)) || vozes.find((v) => /^en/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { escolherVoz(); speechSynthesis.onvoiceschanged = escolherVoz; }

  function falar(texto, botao, aoTerminar) {
    if (!("speechSynthesis" in window)) { alert("Seu navegador não tem leitura em voz alta."); return; }
    speechSynthesis.cancel();
    document.querySelectorAll(".ouvir.tocando").forEach((b) => b.classList.remove("tocando"));
    const limpo = texto.replace(/\[([^\]]+)\]/g, "$1").replace(/…/g, "...");
    const u = new SpeechSynthesisUtterance(limpo);
    u.lang = "en-US"; u.rate = pref.get("velocidade", 0.9); if (vozEn) u.voice = vozEn;
    if (botao) { botao.classList.add("tocando"); }
    u.onend = u.onerror = () => { botao && botao.classList.remove("tocando"); aoTerminar && aoTerminar(); };
    speechSynthesis.speak(u);
  }

  /* ---------- Peças de conteúdo ---------- */
  const botaoOuvir = (en) => `<button class="ouvir" type="button" data-falar="${esc(en)}" aria-label="Ouvir pronúncia: ${esc(en)}" title="Ouvir pronúncia">${MEA.icone("som")}</button>`;
  const frase = (it) => `
    <div class="frase-linha">
      <div class="en-wrap"><p class="en" lang="en">${it.rotuloEn ? `<span class="rot-en">${esc(it.rotuloEn)}</span> ` : ""}${esc(it.en)}</p>
      ${it.pt ? `<span class="pt">${it.rotuloPt ? `<span class="rot">${esc(it.rotuloPt)}</span> ` : ""}${esc(it.pt)}</span>` : ""}</div>
      ${botaoOuvir(it.en)}
    </div>`;

  const BLOCOS = {
    texto: (b) => `<p class="texto">${esc(b.texto)}</p>`,

    chave: (b) => `<div class="chave"><h3>${esc(b.titulo)}</h3><p>${esc(b.texto)}</p></div>`,

    frases: (b) => `<div class="frases ${b.estilo || ""}">
      ${b.titulo ? `<h3>${esc(b.titulo)}${b.tituloPt ? `<span class="titulo-pt">${esc(b.tituloPt)}</span>` : ""}</h3>` : ""}
      <ul>${b.itens.map((it) => b.estilo === "icones"
        ? `<li><span class="icone-bolha">${MEA.icone(it.icone)}</span><div>${it.titulo ? `<div class="tit">${esc(it.titulo)}</div>` : ""}${frase(it)}</div></li>`
        : `<li><div class="frase-linha"><div class="en-wrap"><span class="en" lang="en">${esc(it.en)}</span><span class="sep" aria-hidden="true">–</span><span class="pt">${esc(it.pt)}</span></div>${botaoOuvir(it.en)}</div></li>`).join("")}</ul></div>`,

    cartoes: (b) => `<div class="cartoes ${b.estilo || ""}">${b.itens.map((it) => `
      <article class="cartao">
        ${it.imagem ? `<img src="${esc(it.imagem)}" alt="${esc(it.imagemAlt || "")}" loading="lazy">` : ""}
        <div>
        ${it.icone ? `<span class="icone-bolha">${MEA.icone(it.icone)}</span>` : ""}
        ${it.titulo ? `<h3>${esc(it.titulo)}</h3>` : ""}
        ${it.subtitulo ? `<p class="subtit">${esc(it.subtitulo)}</p>` : ""}
        ${it.lista ? `<ul class="lista-falar">${it.lista.map((x) => `<li><span lang="en">${esc(x)}</span>${botaoOuvir(x)}</li>`).join("")}</ul>` : ""}
        ${it.texto ? `<p>${esc(it.texto)}</p>` : ""}
        ${it.en ? frase(it) : ""}
        ${it.nota ? `<p class="nota">${esc(it.nota)}</p>` : ""}
        </div>
      </article>`).join("")}</div>`,

    dica: (b) => `<aside class="dica">${MEA.icone("nota")}<p>${b.rotulo ? `<strong>${esc(b.rotulo)}</strong> ` : ""}${esc(b.texto)}</p></aside>`,

    destaque: (b) => `<blockquote class="destaque"><p>${b.forte ? `<strong>${esc(b.forte)}</strong> ` : ""}${esc(b.texto)}</p></blockquote>`,

    papeis: (b) => `<div class="papeis" aria-hidden="true">
      <div class="papel"><div class="circ">${MEA.icone("pessoa")}</div>${esc(b.papeis[0])}</div>
      <div class="papel"><div class="circ">${MEA.icone("pessoa")}</div>${esc(b.papeis[1])}</div></div>`,

    dialogo: (b) => `<div class="dialogo">
      ${b.falas.map((f) => `<div class="fala ${f.lado === "b" ? "b" : ""}">
        <div class="quem"><span class="avatar" aria-hidden="true">${esc(f.quem.charAt(0))}</span>${esc(f.quem)}</div>
        ${frase(f)}</div>`).join("")}
      <div class="dialogo-acoes"><button class="btn" type="button" data-dialogo>${MEA.icone("play")}<span>Ouvir diálogo completo</span></button></div>
    </div>`,

    passos: (b) => `<ol class="passos ${b.estilo || ""}">${b.itens.map((it, i) => `
      <li><span class="passo-n">${b.estilo === "linha" ? String(i + 1).padStart(2, "0") : i + 1}</span>
      <div><h3>${esc(it.titulo)}</h3>${it.en ? frase(it) : ""}${it.forte ? `<p><strong>${esc(it.forte)}</strong></p>` : ""}${it.texto ? `<p>${esc(it.texto)}</p>` : ""}</div></li>`).join("")}</ol>`,

    /* pares inglês/português, uma linha embaixo da outra */
    pares: (b) => `<div class="pares ${b.forte ? "forte" : ""}">${b.titulo ? `<h3>${esc(b.titulo)}${b.tituloPt ? `<span class="titulo-pt">${esc(b.tituloPt)}</span>` : ""}</h3>` : ""}${b.itens.map((it) => it.en
      ? `<div class="par">${frase(it)}</div>`
      : `<p class="par-pt">${esc(it.pt)}</p>`).join("")}</div>`,

    /* duas colunas: English | Português */
    bilingue: (b) => `<div class="bilingue">
      <div class="col" lang="en"><h3>English</h3>${b.en.map((t) => `<div class="frase-linha"><p class="en-wrap">${esc(t)}</p>${botaoOuvir(t)}</div>`).join("")}</div>
      <div class="col"><h3>Português</h3>${b.pt.map((t) => `<p>${esc(t)}</p>`).join("")}</div></div>`,

    alfabeto: (b) => `<ul class="alfabeto">${b.itens.map((x) => `
      <li><button type="button" class="letra" data-falar="${esc(x.letra + ". " + x.palavra)}" aria-label="Ouvir ${esc(x.letra)}: ${esc(x.palavra)}">
        <span class="l" lang="en">${esc(x.letra)}</span><span class="som">"${esc(x.som)}"</span>
        <span class="pal"><span lang="en">${esc(x.palavra)}</span> <span class="pt">(${esc(x.pt)})</span></span></button></li>`).join("")}</ul>`,

    palavras: (b) => `<ul class="palavras">${b.itens.map((w) => `<li><button type="button" data-falar="${esc(w)}" aria-label="Ouvir: ${esc(w)}" lang="en">${esc(w)}${MEA.icone("som")}</button></li>`).join("")}</ul>`,

    citacoes: (b) => `<div class="citacoes">${b.itens.map((q) => `<blockquote class="citacao">${MEA.icone("aspas")}
      <p class="cit-pt">${esc(q.pt)}</p><div class="frase-linha"><p class="cit-en" lang="en">${esc(q.en)}</p>${botaoOuvir(q.en)}</div></blockquote>`).join("")}</div>`,

    grafico: (b) => `<figure class="grafico-fig" style="margin:0">
      <figcaption class="sr-only">${esc(b.descricao)}</figcaption>
      <div class="grafico" aria-hidden="true">
        <div class="grafico-eixo">${b.marcas.map((m) => `<span>${m}</span>`).join("")}</div>
        <div class="grafico-area">
          ${b.marcas.slice(1).map((m) => `<div class="grade" style="bottom:${(m / b.maximo) * 100}%"></div>`).join("")}
          ${b.barras.map((x) => `<div class="barra-g" style="height:${(x.valor / b.maximo) * 100}%"><span>${esc(x.rotulo)}</span></div>`).join("")}
        </div>
      </div></figure>`,
  };

  /* ---------- Página da aula ---------- */
  MEA.renderizarAula = function (aula) {
    document.title = `${aula.titulo} · ${aula.semana} · MEA Academy`;
    const feitos = new Set(pref.get("feito." + aula.id, []));

    document.getElementById("capa").innerHTML = `
      <div class="capa-img"><img src="${esc(aula.capa)}" alt="${esc(aula.capaAlt || "")}"></div>
      <div class="capa-txt">
        <div class="curso">${esc(aula.curso)}</div>
        <div class="selos"><span class="selo">${MEA.icone("calendario")}${esc(aula.semana)}</span>${aula.ciclo ? `<span class="selo contorno">${esc(aula.ciclo)}</span>` : ""}</div>
        <h1>${esc(aula.titulo)}</h1>
        ${aula.subtitulo ? `<p class="capa-sub">${esc(aula.subtitulo)}</p>` : ""}
        ${aula.resumo ? `<p>${esc(aula.resumo)}</p>` : ""}
        <div class="capa-acoes">
          <a class="btn btn-primario" href="#${esc(aula.secoes[0].id)}">Começar a aula ${MEA.icone("seta")}</a>
          ${aula.pdf && !MEA.previa ? `<a class="btn" href="${esc(aula.pdf)}" download>${MEA.icone("pdf")}<span>Baixar PDF original</span></a>` : ""}
          ${MEA.previa ? "" : `<button class="btn" type="button" onclick="print()">${MEA.icone("imprimir")}<span>Imprimir</span></button>`}
        </div>
      </div>`;

    document.getElementById("sumario").innerHTML = `
      <details ${matchMedia("(max-width: 960px)").matches ? "" : "open"}><summary>Conteúdo da aula</summary>
      <h2>Conteúdo da aula</h2>
      <ol>${aula.secoes.map((s) => `<li><a href="#${esc(s.id)}" data-sec="${esc(s.id)}" class="${feitos.has(s.id) ? "feito" : ""}">${esc(s.titulo)}</a></li>`).join("")}</ol>
      <p class="nota" id="contagem"></p></details>`;

    document.getElementById("secoes").innerHTML = aula.secoes.map((s, i) => `
      <section class="secao revela ${s.imagem ? "secao-com-img" : ""}" id="${esc(s.id)}" aria-labelledby="t-${esc(s.id)}">
        ${s.banner ? `<img class="secao-banner" src="${esc(s.banner)}" alt="${esc(s.bannerAlt || "")}" loading="lazy">` : ""}
        <header class="secao-cab">
          <span class="secao-icone">${MEA.icone(s.icone)}</span>
          <div><div class="secao-num">${String(i + 1).padStart(2, "0")} / ${String(aula.secoes.length).padStart(2, "0")}${s.rotulo ? ` <span class="selo">${esc(s.rotulo)}</span>` : ""}</div>
          <h2 id="t-${esc(s.id)}">${esc(s.titulo)}${s.tituloPt ? `<span class="titulo-pt">${esc(s.tituloPt)}</span>` : ""}</h2></div>
        </header>
        <div class="secao-corpo">
          <div class="blocos">${s.blocos.map((b) => (BLOCOS[b.tipo] || (() => ""))(b)).join("")}</div>
          ${s.imagem ? `<figure class="secao-foto" style="margin:0"><img src="${esc(s.imagem)}" alt="${esc(s.imagemAlt || "")}" loading="lazy"></figure>` : ""}
        </div>
        <div class="secao-rodape"><button class="btn marcar ${feitos.has(s.id) ? "feito" : ""}" type="button" data-marcar="${esc(s.id)}" aria-pressed="${feitos.has(s.id)}">${MEA.icone("check")}<span>${feitos.has(s.id) ? "Estudado" : "Marcar como estudado"}</span></button></div>
      </section>`).join("");

    const contar = () => { const c = document.getElementById("contagem"); if (c) c.textContent = `${feitos.size} de ${aula.secoes.length} partes estudadas`; };
    contar();

    // interações
    document.addEventListener("click", (e) => {
      const o = e.target.closest("[data-falar]");
      if (o) return falar(o.dataset.falar, o);
      const d = e.target.closest("[data-dialogo]");
      if (d) {
        const botoes = [...d.closest(".dialogo").querySelectorAll(".fala [data-falar]")];
        const tocar = (i) => i < botoes.length && falar(botoes[i].dataset.falar, botoes[i], () => setTimeout(() => tocar(i + 1), 350));
        return tocar(0);
      }
      const m = e.target.closest("[data-marcar]");
      if (m) {
        const id = m.dataset.marcar; const on = !feitos.has(id);
        on ? feitos.add(id) : feitos.delete(id);
        pref.set("feito." + aula.id, [...feitos]);
        m.classList.toggle("feito", on); m.setAttribute("aria-pressed", on);
        m.querySelector("span").textContent = on ? "Estudado" : "Marcar como estudado";
        document.querySelector(`.sumario a[data-sec="${id}"]`).classList.toggle("feito", on);
        contar(); return;
      }
      const p = e.target.closest(".modo-estudo .pt");
      if (p) p.classList.toggle("revelado");
    });
    document.addEventListener("keydown", (e) => {
      const p = e.target.closest && e.target.closest(".modo-estudo .pt");
      if (p && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); p.classList.toggle("revelado"); }
    });

    // seção ativa + entrada suave
    const links = [...document.querySelectorAll(".sumario a")];
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visivel");
        links.forEach((a) => a.classList.toggle("ativo", a.dataset.sec === en.target.id));
      }
    }), { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".secao").forEach((s) => io.observe(s));
    const io2 = new IntersectionObserver((ents) => ents.forEach((en) => en.isIntersecting && en.target.classList.add("visivel")), { threshold: 0.05 });
    document.querySelectorAll(".revela").forEach((s) => io2.observe(s));

    // barra de progresso de leitura
    const barra = document.querySelector(".progresso");
    const atualizar = () => { const h = document.documentElement; barra.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100 + "%"; };
    addEventListener("scroll", atualizar, { passive: true }); atualizar();

    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 50);
  };

  /* ---------- Carregar arquivos de aula ---------- */
  MEA.carregar = (ids) => Promise.all(ids.map((id) => MEA.aulas[id] ? Promise.resolve() : new Promise((ok) => {
    const s = document.createElement("script"); s.src = `aulas/${id}.js`; s.onload = ok; s.onerror = ok; document.head.appendChild(s);
  })));

  /* ---------- Página inicial ---------- */
  MEA.renderizarInicio = async function () {
    const ids = MEA.lista || [];
    await MEA.carregar(ids);
    const aulas = ids.map((id) => MEA.aulas[id]).filter(Boolean);
    const grade = document.getElementById("aulas");
    const desenhar = (filtro = "") => {
      const f = filtro.trim().toLowerCase();
      const vis = aulas.filter((a) => !f || [a.titulo, a.curso, a.semana, a.ciclo, a.resumo].join(" ").toLowerCase().includes(f));
      grade.innerHTML = vis.length ? vis.map((a) => {
        const feitos = pref.get("feito." + a.id, []).length;
        return `<a class="aula-card" href="aula.html?id=${encodeURIComponent(a.id)}">
          <img src="${esc(a.capa)}" alt="" loading="lazy">
          <div class="corpo">
            <div class="selos"><span class="selo">${esc(a.semana)}</span><span class="selo contorno">${esc(a.ciclo)}</span></div>
            <h2>${esc(a.titulo)}</h2>
            ${a.resumo || a.subtitulo ? `<p>${esc(a.resumo || a.subtitulo)}</p>` : ""}
            <p class="nota" style="margin-top:12px">${a.secoes.length} partes${feitos ? ` · ${feitos} estudadas` : ""}</p>
          </div></a>`;
      }).join("") : `<p>Nenhuma aula encontrada.</p>`;
    };
    desenhar();
    const busca = document.getElementById("busca");
    if (busca) busca.addEventListener("input", () => desenhar(busca.value));
  };
})();
