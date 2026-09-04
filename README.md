# Trirreme — site

Site institucional da Trirreme (tecnologia e dados). Página única em HTML/CSS/JS,
sem build e sem dependências além das fontes do Google Fonts.

Reimplementado a partir do design `Trirreme Site.dc.html`, exportado do Claude Design /
OpenDesign, com CSS, HTML e assets separados em arquivos próprios.

## Estrutura

- `index.html` — a marcação do site.
- `css/style.css` — todos os estilos (tokens de cor, tipografia, layout, responsivo).
- `js/main.js` — tema claro/escuro, idioma PT/EN, menu mobile, formulário, animações.
- `assets/img/` — logo, ícones (`favicon.png`, `apple-touch-icon.png`), `og-image.png`
  e as capturas dos projetos em `assets/img/work/`.

## Rodar localmente

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

Vercel, ligada ao repositório: todo push na `main` vai para produção.
Preset **Other**, sem build command e sem output directory — é estático.
Qualquer outro host estático também serve (GitHub Pages, Netlify, Cloudflare Pages).

## Seções

Hero · faixa de serviços (marquee) · números · Serviços (5 frentes) · Processo (5 etapas) ·
Projetos (3 exemplos) · A empresa · Contato (formulário) · CTA · rodapé.

## Idioma

**Inglês é o padrão**; o botão `PT` no header troca para português e a escolha fica
salva em `localStorage` (`trirreme-lang`).

O inglês mora no HTML e é capturado do DOM no boot (em `js/main.js`) — só o português
precisa ser escrito à mão, no objeto `PT` do mesmo arquivo. Para mexer no texto:

- **Texto visível**: `data-i18n="chave"` no elemento. O valor é tratado como HTML,
  então pode conter `<a>`, `<em>` etc.
- **Atributos**: `data-i18n-ph` (placeholder), `data-i18n-val` (value dos rádios),
  `data-i18n-sfx` (data-suffix dos contadores).
- **Só em runtime** (mensagens do formulário, rótulos do botão de tema): a chave precisa
  existir nos dois objetos, `PT` e `EN`, em `js/main.js`.

Ao adicionar texto novo, escreva em inglês no HTML com uma `data-i18n` e acrescente a
mesma chave no `PT`. Sem a chave no `PT`, o trecho simplesmente não traduz.

## Identidade

- **Cores** (tokens em `:root`, em `css/style.css`): papel `#FAF8F3`, superfície `#FFFEFB`,
  painéis `#F0EDE3` / `#E7E3D6`, tinta `#1F1D1A`, texto `#45423C`, tijolo `#B0543C`,
  ocre `#C98A56`. Base branco-quente quase neutra — jornal impresso em papel novo.
- **Tema**: claro é o padrão em qualquer sistema — `prefers-color-scheme` é ignorado
  de propósito. O escuro (carvão neutro) só entra pelo botão no header e fica salvo
  em `localStorage` (`trirreme-theme`).
- **Tipografia**: Instrument Serif (títulos), Lora (texto), IBM Plex Mono (rótulos).
- **Movimento**: reveal ao rolar, contadores, marquee, barra de progresso, nau flutuante.
  Tudo desliga com `prefers-reduced-motion`. O layout responsivo é feito em CSS
  (`@media` em `css/style.css`); `js/main.js` cuida só de comportamento.

## O que revisar / trocar antes de ir ao ar

- **Domínio**: `canonical`, `og:url` e `og:image` apontam para `https://trirreme.com/`.
  Enquanto o domínio não estiver apontado para a Vercel, a prévia de compartilhamento
  não carrega a imagem. O mesmo vale para as URLs no JSON-LD.
- Contato: `contato@trirreme.com` e WhatsApp `(69) 9924-6550` (`wa.me/556999246550`)
  aparecem no header, no contato, na CTA e no rodapé. O formulário abre o cliente de
  e-mail (`mailto:`); para receber os envios direto, ligar a um serviço de formulário
  (Formspree/Basin) ou endpoint próprio.
- `est. 2026` no hero e `© 2026` no rodapé — conferir o ano de fundação.
- Base da empresa: texto atual diz **Ariquemes — RO**, exceto uma frase em `cmp3`
  (`js/main.js`) que ainda cita "Porto Velho" — revisar qual cidade é a correta.
