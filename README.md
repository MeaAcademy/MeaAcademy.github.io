# MEA Academy — Aulas

Site com as aulas da MEA Academy em formato visual, acessível e fácil de estudar.
O conteúdo de cada aula é transcrito **fielmente** do material original. Só muda a apresentação.

## O que cada aula oferece
- 🔊 **Ouvir pronúncia** de cada frase em inglês, e do diálogo inteiro
- 👁️ **Modo estudo**: esconde as traduções. Clique em uma para revelar
- **A− / A+** para mudar o tamanho do texto, e **tema escuro**
- ✓ **Marcar como estudado**, com o progresso guardado no navegador do aluno
- Sumário lateral, barra de leitura, impressão e download do PDF original
- Funciona bem no celular, com contraste alto e navegação por teclado

## Como adicionar uma aula nova
1. Coloque o PDF da aula na pasta `pdfs/` e peça ao Claude: *"transforme esta aula em uma aba do site"*.
2. O Claude cria:
   - `aulas/<id-da-aula>.js`, com o conteúdo transcrito sem alterações
   - `assets/img/<id-da-aula>/`, com as fotos extraídas do PDF
   - uma linha nova em `aulas/lista.js`
3. Faça o commit. O GitHub Pages atualiza o site sozinho.

## Publicar no GitHub Pages (uma única vez)
1. No GitHub, crie o repositório **MeaAcademy.github.io** na conta *MeaAcademy* e envie estes arquivos para ele.
2. Abra **Settings → Pages → Build and deployment**, escolha *Deploy from a branch*, depois `main` e `/ (root)`.
3. O site vai ficar no ar em **https://meaacademy.github.io**.

## Estrutura
```
index.html            página inicial (lista de aulas)
aula.html             página que mostra uma aula (aula.html?id=...)
aulas/lista.js        aulas publicadas, em ordem
aulas/*.js            conteúdo de cada aula
assets/css/style.css  visual (azul petróleo, fontes Lexend + Source Sans 3)
assets/js/app.js      funcionamento do site
assets/img/           fotos das aulas
pdfs/                 PDFs originais
```

### Tipos de bloco disponíveis em uma aula
`texto`, `chave`, `frases`, `cartoes` (estilos: `borda`, `barra`, `numerado`, `foto`, `miniatura`, `icone`),
`dica`, `destaque`, `dialogo`, `papeis`, `passos` (estilo `linha`), `grafico`,
`pares`, `bilingue`, `alfabeto`, `palavras`, `citacoes`, `grupos` (cartões também aceitam os estilos `escuro` e `balao`).
Cada seção aceita `rotulo`, `tituloPt`, `ocultarTitulo`, `imagem` (foto lateral) e `banner` (foto no topo).
