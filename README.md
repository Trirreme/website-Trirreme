# Trirreme — site

Site institucional da Trirreme (tecnologia e dados). Página única em HTML/CSS/JS,
sem build e sem dependências além das fontes do Google Fonts.

Baseado nos designs `Trirreme Home.html` (estrutura e conteúdo) e `Trirreme Page.html`
(detalhes de animação), exportados do Claude Design e reimplementados como site real.

## Arquivos

- `index.html` — o site inteiro (o logo vai embutido como data URI).
- `logo.webp` / `logo.png` — o logo isolado, caso precise em outro lugar.

## Rodar localmente

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

Qualquer host estático: GitHub Pages, Netlify, Vercel, Cloudflare Pages. Suba `index.html`.

## Seções

Hero · faixa de serviços (marquee) · números · Serviços (4 frentes) · Processo (4 etapas) ·
Projetos (3 exemplos) · depoimento · A empresa · A equipe · Contato (formulário) · CTA · rodapé.

## Identidade

- **Cores** (tokens em `:root`): papel `#FAF8F3`, superfície `#FFFEFB`, painéis `#F0EDE3` /
  `#E7E3D6`, tinta `#1F1D1A`, texto `#45423C`, tijolo `#B0543C`, ocre `#C98A56`.
  Base branco-quente quase neutra — jornal impresso em papel novo, não em papiro velho.
  Tema claro é o principal; há um tema escuro em carvão neutro que re-mapeia os mesmos
  papéis (segue o sistema do visitante, com botão de troca manual no header).
- **Tipografia**: Instrument Serif (títulos), Lora (texto), IBM Plex Mono (rótulos).
- **Movimento**: reveal ao rolar, contadores, marquee, barra de progresso, parallax leve,
  nau flutuante. Tudo desliga com `prefers-reduced-motion`.

## O que revisar / trocar antes de ir ao ar

- Textos de Serviços, Empresa e Equipe — nomes dos sócios e blurbs são placeholders.
- Seção **Projetos**: cards são exemplos ("trocar pelos cases reais") — trocar títulos,
  textos e as imagens (`.thumb`).
- Seção **Depoimento**: frase e assinatura são placeholders.
- Fotos: "Foto do time ou do escritório" e os avatares da equipe.
- Contato: `contato@trirreme.com` e WhatsApp `(69) 9924-6550` (`wa.me/556999246550`)
  aparecem no header, no contato, na CTA e no rodapé. O formulário abre o cliente de
  e-mail (`mailto:`); para receber os envios direto, ligar a um serviço de formulário
  (Formspree/Basin) ou endpoint próprio.
- `est. 2026` no hero e `© 2026` no rodapé — conferir o ano de fundação.
