/* Trirreme — comportamento do site (tema, idioma, menu, formulário, animações). */
(function () {
  "use strict";

  var ATTRS = [["data-i18n-ph", "placeholder"], ["data-i18n-val", "value"], ["data-i18n-sfx", "data-suffix"]];

  var EN = {
    title: "Trirreme — Technology and data for business",
    themeDark: "Switch to dark theme", themeLight: "Switch to light theme",
    fErr: "Please fill in your name, contact and what is stuck.",
    fSubject: "Contact request — ", fPorte: "\nSize: ",
    fOpening: "Opening your email app… if nothing happens, write to contato@trirreme.com."
  };

  var PT = {
    title: "Trirreme — Tecnologia e dados para empresas",
    dateline: "Edição digital · Ariquemes — Rondônia · Atendimento remoto no mundo todo",
    navServices: "Serviços", navProcess: "Processo", navWork: "Projetos", navCompany: "Empresa", navContact: "Contato",
    heroKicker: "Sistemas · Sites · Automação",
    h1a: "Tecnologia que faz", h1b: "sua operação",
    h1c: "<em id=\"inkWord\">avançar</em>.",
    heroLede: "Construímos sistemas, painéis de dados e sites sob medida para empresas que precisam de decisão rápida e processo claro — sem jargão e sem projeto eterno.",
    heroCta1: "Quero um diagnóstico", heroCta2: "Ver o que fazemos",
    heroMeta1: "Resposta em até 24h", heroMeta2: "Ariquemes / RO — atendimento remoto no mundo todo",
    est: "desde 2026",
    strip: "<span>Sistemas sob medida</span><b>◆</b><span>Sites institucionais</span><b>◆</b><span>Cardápios online</span><b>◆</b><span>Portfólios profissionais</span><b>◆</b><span>Automações e integrações</span><b>◆</b><span>Suporte e hospedagem</span><b>◆</b><span>Sistemas sob medida</span><b>◆</b><span>Sites institucionais</span><b>◆</b><span>Cardápios online</span><b>◆</b><span>Portfólios profissionais</span><b>◆</b><span>Automações e integrações</span><b>◆</b><span>Suporte e hospedagem</span><b>◆</b>",
    stat1s: " frentes", stat2s: "h", stat3s: " semanas", stat4s: "%",
    stat1: "Sistemas, web, automação, gestão e suporte no mesmo time",
    stat2: "Para responder qualquer contato em dia útil",
    stat3: "Primeira versão funcionando na sua mão",
    stat4: "Escopo, prazo e valor por escrito antes de começar",
    svcKicker: "Serviços", svcTitle: "Cinco frentes, um time só",
    svcLede: "Cada projeto entra por uma dessas portas. Quase sempre sai combinando duas.",
    svc1t: "Sistemas sob medida",
    svc1p: "Sistemas internos e SaaS feitos para o jeito que o seu comércio funciona — produção e pedidos de padaria, revenda de assinaturas, painéis que são seus e não alugados.",
    svc2t: "Sites, portfólios e cardápios online",
    svc2p: "Site institucional, portfólio profissional ou cardápio online que manda o pedido direto no WhatsApp. Rápido, encontrável no Google e fácil de você mesmo atualizar.",
    svc3t: "Automações e integrações",
    svc3p: "A parte repetitiva deixa de ser digitada na mão: pedidos, recibos, planilhas e mensagens de WhatsApp conversando entre si e com os sistemas que você já paga.",
    svc4t: "Consultoria &amp; gestão de projetos",
    svc4p: "Diagnóstico, priorização e condução do projeto do início à entrega, com escopo escrito e ponto de controle que você não precisa cobrar.",
    svc5t: "Suporte, manutenção e hospedagem",
    svc5p: "Depois de no ar a gente fica: hospedagem, domínio, backup, correções e ajustes pequenos — para ninguém no seu comércio precisar saber o que é um servidor.",
    prcKicker: "Como trabalhamos", prcTitle: "Cinco etapas, e uma delas acontece atrás do seu balcão",
    prc1w: "Início", prc1t: "Pré-requisitos", prc1p: "Levantamos o que a operação precisa, o que já existe e o que vale ficar de fora da primeira versão.",
    prc2w: "Protótipo", prc2t: "Protótipo inicial", prc2p: "Você vê as telas antes de existir uma linha do sistema real — barato de mudar enquanto ainda é desenho.",
    prc3w: "Aprovação", prc3t: "Aprovação", prc3p: "Escopo, prazo e valor no papel. Nada é construído antes dos dois lados aprovarem o protótipo.",
    prc4w: "No local", prc4t: "Ciclos e um dia com você", prc4p: "Construímos em ciclos e passamos um dia dentro do comércio, na rotina do balcão, para sentir a dor real em vez de supor.",
    prc5w: "Entrega", prc5t: "Entrega final", prc5p: "Sistema no ar, time treinado, hospedagem e backup rodando — e a gente do outro lado do telefone depois disso.",
    wrkKicker: "Projetos", wrkTitle: "No ar, agora", wrkBadge: "+ 2 projetos a caminho",
    wrk1k: "Plataforma · Confeitaria",
    wrk1p: "Plataforma para confeiteiros e pequenos empreendedores gastronômicos: calcula o custo real de cada receita, sugere o preço justo e acompanha o lucro.",
    wrk2k: "Portfólio · Ilustração",
    wrk2p: "Vitrine e balcão de encomendas da ilustradora: o cliente escolhe o estilo, vê o preço na hora e fecha direto no chat.",
    wrk3k: "Site · Barbearia", wrk3tag: "Modelo", wrk3t: "Barbearia com clube de assinatura",
    wrk3p: "Modelo pronto para barbearias: clube de assinatura, agendamento, equipe e app, em português e inglês — personalizamos com a sua marca.",
    wrk3v: "ver o modelo ↗",
    cmpKicker: "A empresa", cmpTitle: "Um time técnico que fica até o sistema rodar",
    cmp1: "A Trirreme nasceu de uma constatação simples: a maioria das empresas já tem os dados de que precisa, mas não consegue usá-los para decidir. Trabalhamos nessa ponte — do número bruto ao painel que a diretoria abre toda manhã, do processo no papel ao sistema que a equipe usa de verdade.",
    cmp2: "Somos um time enxuto de dados, software e gestão. Escopo escrito antes de começar, uma pessoa responsável pelo seu projeto e nenhuma etapa terceirizada para quem nunca falou com você.",
    cmp3: "Atendemos empresas de pequeno e médio porte, profissionais liberais e operações industriais a partir de Ariquemes, de forma remota, em qualquer lugar do mundo.",
    cmpF1k: "Base", cmpF1v: "Ariquemes — RO, atendimento remoto em qualquer lugar do mundo",
    cmpF2k: "Prática", cmpF2v: "Dados, software e gestão dentro do mesmo time",
    cmpF3k: "Compromisso", cmpF3v: "Escopo, prazo e valor combinados por escrito",
    cmpF3d: "Nada começa sem os dois lados de acordo, e nada é entregue sem o time treinado para operar. Se um prazo muda, você fica sabendo por nós primeiro — com a nova data e o motivo.",
    ctKicker: "Contato", ctTitle: "Trinta minutos, sem apresentação de slides",
    ctLede: "Conte o que está travando. A gente diz se é painel, sistema, site — ou se ainda não vale software nenhum.",
    ctMail: "Ou escreva direto: <a href=\"mailto:contato@trirreme.com\">contato@trirreme.com</a>",
    fName: "Seu nome", fNamePh: "Ana Ribeiro", fContact: "E-mail ou WhatsApp", fContactPh: "ana@empresa.com.br",
    fSize: "Porte da operação", fSize1: "Sou eu", fSize2: "2 a 10 pessoas", fSize3: "11 a 50", fSize4: "Mais de 50",
    fMsg: "O que está travando hoje?", fMsgPh: "Fecho o mês em três planilhas diferentes e nunca batem…",
    fSend: "Enviar pedido de contato", fNote: "Respondemos em até 24h em dia útil.",
    ctaTitle: "Conte o problema. A gente responde com um caminho.",
    footTag: "Tecnologia e dados",
    themeDark: "Mudar para tema escuro", themeLight: "Mudar para tema claro",
    fErr: "Preencha nome, contato e o que está travando.",
    fSubject: "Pedido de contato — ", fPorte: "\nPorte: ",
    fOpening: "Abrindo seu e-mail… se nada acontecer, escreva para contato@trirreme.com."
  };

  var state = { lang: "en" };

  function t(k) { return (state.lang === "pt" ? PT[k] : EN[k]) || EN[k] || ""; }

  function theme() { return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"; }

  function paintTheme() {
    var dark = theme() === "dark";
    var sun = document.getElementById("icSun"), moon = document.getElementById("icMoon"), btn = document.getElementById("themeBtn");
    if (sun) sun.style.display = dark ? "block" : "none";
    if (moon) moon.style.display = dark ? "none" : "block";
    if (btn) btn.setAttribute("aria-label", dark ? t("themeLight") : t("themeDark"));
  }

  function setTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("trirreme-theme", next); } catch (e) {}
    paintTheme();
  }

  function applyLang() {
    var D = state.lang === "pt" ? PT : EN;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = D[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    ATTRS.forEach(function (p) {
      document.querySelectorAll("[" + p[0] + "]").forEach(function (el) {
        var v = D[el.getAttribute(p[0])];
        if (v != null) el.setAttribute(p[1], v);
      });
    });
    document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";
    document.title = t("title");
    var ll = document.getElementById("langLabel");
    if (ll) ll.textContent = state.lang === "pt" ? "EN" : "PT";
    var lb = document.getElementById("langBtn");
    if (lb) lb.setAttribute("aria-label", state.lang === "pt" ? "Read in English" : "Ler em português");
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
    });
    if (state.inkDone) { var em = document.getElementById("inkWord"); if (em) em.style.backgroundSize = "100% 4px"; }
    paintTheme();
  }

  function toggleTheme() { setTheme(theme() === "dark" ? "light" : "dark"); }

  function toggleLang() {
    state.lang = state.lang === "pt" ? "en" : "pt";
    try { localStorage.setItem("trirreme-lang", state.lang); } catch (e) {}
    applyLang();
  }

  function toggleMenu() {
    var ul = document.getElementById("navLinks"), b = document.getElementById("burger");
    var open = !ul.classList.contains("is-open");
    ul.classList.toggle("is-open", open);
    b.setAttribute("aria-expanded", String(open));
  }

  function submitContact(e) {
    e.preventDefault();
    var form = e.currentTarget || document.getElementById("contactForm");
    var f = new FormData(form);
    var nome = (f.get("nome") || "").toString().trim();
    var ct = (f.get("contato") || "").toString().trim();
    var porte = (f.get("porte") || "").toString().trim();
    var msg = (f.get("mensagem") || "").toString().trim();
    var note = document.getElementById("formNote");
    if (!nome || !ct || !msg) { note.textContent = t("fErr"); return; }
    var body = msg + "\n\n—\n" + nome + "\n" + ct + (porte ? t("fPorte") + porte : "");
    window.location.href = "mailto:contato@trirreme.com?subject=" + encodeURIComponent(t("fSubject") + nome) + "&body=" + encodeURIComponent(body);
    note.textContent = t("fOpening");
  }

  function setupMotion() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var els = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

    els.forEach(function (el) {
      if (el.dataset.rev === "1") return;
      el.dataset.rev = "1";
      if (reduce) return;
      el.classList.add("reveal-hidden");
      var d = Number(el.getAttribute("data-delay") || 0) / 1000;
      el.style.transitionDelay = d + "s";
    });

    var showAll = function () {
      els.forEach(function (el) { el.classList.remove("reveal-hidden"); });
      document.querySelectorAll("[data-rule]").forEach(function (el) { el.classList.add("in-view"); });
      document.querySelectorAll("[data-step]").forEach(function (el) { el.classList.add("in-view"); });
      document.querySelectorAll("[data-count]").forEach(function (el) {
        el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
      });
    };

    if (!reduce) {
      var io = new IntersectionObserver(function (ents) {
        if (ents.length && ents[0].rootBounds === null) { showAll(); io.disconnect(); return; }
        ents.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.remove("reveal-hidden");
          io.unobserve(en.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      els.forEach(function (el) { io.observe(el); });
      clearTimeout(state.safety);
      state.safety = setTimeout(showAll, 2600);
    } else { showAll(); }

    var io2 = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in-view");
        io2.unobserve(en.target);
      });
    }, { threshold: 0.3 });
    document.querySelectorAll("[data-rule],[data-step]").forEach(function (el) {
      if (el.dataset.rev2 === "1") return; el.dataset.rev2 = "1"; io2.observe(el);
    });

    var io3 = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = Number(el.getAttribute("data-count")), t0 = performance.now();
        (function tick(now) {
          var p = Math.min(1, (now - t0) / 1100), eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + (el.getAttribute("data-suffix") || "");
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
        io3.unobserve(el);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      if (el.dataset.rev3 === "1") return; el.dataset.rev3 = "1"; io3.observe(el);
    });
  }

  function init() {
    var langBtn = document.getElementById("langBtn");
    var themeBtn = document.getElementById("themeBtn");
    var burger = document.getElementById("burger");
    var form = document.getElementById("contactForm");
    if (langBtn) langBtn.addEventListener("click", toggleLang);
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
    if (burger) burger.addEventListener("click", toggleMenu);
    if (form) form.addEventListener("submit", submitContact);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!(k in EN)) EN[k] = el.innerHTML;
    });
    ATTRS.forEach(function (p) {
      document.querySelectorAll("[" + p[0] + "]").forEach(function (el) {
        var k = el.getAttribute(p[0]);
        if (!(k in EN)) EN[k] = el.getAttribute(p[1]);
      });
    });

    try {
      if (localStorage.getItem("trirreme-lang") === "pt") state.lang = "pt";
      var th = localStorage.getItem("trirreme-theme");
      if (th === "dark" || th === "light") document.documentElement.setAttribute("data-theme", th);
    } catch (e) {}
    applyLang();

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    var bar = document.getElementById("progressBar"), raf = null;
    var onScroll = function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
        bar.style.transform = "scaleX(" + Math.min(1, window.scrollY / max) + ")";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    setupMotion();

    var loader = document.getElementById("loader");
    var hideLoader = function () {
      if (!loader) return;
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      setTimeout(function () { if (loader && loader.parentNode) loader.parentNode.removeChild(loader); }, 800);
    };
    setTimeout(hideLoader, 1200);

    setTimeout(function () {
      state.inkDone = true;
      var em = document.getElementById("inkWord");
      if (em) em.style.backgroundSize = "100% 4px";
    }, 1900);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
