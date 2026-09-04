# Trirreme — site

Site institucional da Trirreme (tecnologia e dados). Página única em HTML/CSS/JS,
sem build e sem dependências além das fontes do Google Fonts.

Baseado nos designs `Trirreme Home.html` (estrutura e conteúdo) e `Trirreme Page.html`
(detalhes de animação), exportados do Claude Design e reimplementados como site real.

## Arquivos

- `index.html` — o site inteiro (o logo vai embutido como data URI).
- `logo.webp` / `logo.png` — o logo isolado, caso precise em outro lugar.
- `favicon.png` (96px) / `apple-touch-icon.png` (180px) — ícones, gerados do logo.
- `og-image.png` (1200×630) — imagem de compartilhamento (WhatsApp, LinkedIn, X).

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

Hero · faixa de serviços (marquee) · números · Serviços (4 frentes) · Processo (4 etapas) ·
Projetos (3 exemplos) · depoimentos · A empresa · Contato (formulário) · CTA · rodapé.

## Idioma

**Inglês é o padrão**; o botão `PT` no header troca para português e a escolha fica
salva em `localStorage` (`trirreme-lang`).

O inglês mora no HTML e é capturado do DOM no boot — só o português precisa ser
escrito à mão, no objeto `PT` do script no fim do arquivo. Para mexer no texto:

- **Texto visível**: `data-i18n="chave"` no elemento. O valor é tratado como HTML,
  então pode conter `<a>`, `<em>` etc.
- **Atributos**: `data-i18n-al` (aria-label), `data-i18n-ph` (placeholder),
  `data-i18n-alt` (alt), `data-i18n-val` (value), `data-i18n-sfx` (data-suffix dos contadores).
- **Só em runtime** (mensagens do formulário, rótulos do botão de tema): a chave precisa
  existir nos dois objetos, `PT` e `EN`.

Ao adicionar texto novo, escreva em inglês no HTML com uma `data-i18n` e acrescente a
mesma chave no `PT`. Sem a chave no `PT`, o trecho simplesmente não traduz.

## Identidade

- **Cores** (tokens em `:root`): papel `#FAF8F3`, superfície `#FFFEFB`, painéis `#F0EDE3` /
  `#E7E3D6`, tinta `#1F1D1A`, texto `#45423C`, tijolo `#B0543C`, ocre `#C98A56`.
  Base branco-quente quase neutra — jornal impresso em papel novo, não em papiro velho.
- **Tema**: claro é o padrão em qualquer sistema — `prefers-color-scheme` é ignorado
  de propósito. O escuro (carvão neutro) só entra pelo botão no header e fica salvo
  em `localStorage` (`trirreme-theme`).
- **Tipografia**: Instrument Serif (títulos), Lora (texto), IBM Plex Mono (rótulos).
- **Movimento**: reveal ao rolar, contadores, marquee, barra de progresso, parallax leve,
  nau flutuante. Tudo desliga com `prefers-reduced-motion`.

## O que revisar / trocar antes de ir ao ar

- **Domínio**: `canonical`, `og:url` e `og:image` apontam para `https://trirreme.com/`.
  Enquanto o domínio não estiver apontado para a Vercel, a prévia de compartilhamento
  não carrega a imagem. O mesmo vale para as URLs no JSON-LD.
- Seção **Depoimentos**: as frases são exemplos e estão rotuladas como tal
  ("exemplos ilustrativos" / "illustrative examples"). Trocar por depoimentos reais
  — e aí tirar o rótulo.
- Contato: `contato@trirreme.com` e WhatsApp `(69) 9924-6550` (`wa.me/556999246550`)
  aparecem no header, no contato, na CTA e no rodapé. O formulário abre o cliente de
  e-mail (`mailto:`); para receber os envios direto, ligar a um serviço de formulário
  (Formspree/Basin) ou endpoint próprio.
- `est. 2026` no hero e `© 2026` no rodapé — conferir o ano de fundação.
