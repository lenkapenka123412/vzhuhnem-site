const content = typeof ACTIVE_LANDING !== "undefined" ? ACTIVE_LANDING : SITE_CONTENT;

const tgLink = content.brand.telegramLink;

function withBoldPhrase(text, phrase) {
  if (!phrase || !text.includes(phrase)) {
    return text;
  }

  return text.replace(phrase, `<strong>${phrase}</strong>`);
}

function cards(items, className, render) {
  return items.map((item, index) => render(item, index, className)).join("");
}

function list(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function applyTypography(root) {
  const noBreakWords = [
    "а", "в", "во", "да", "до", "за", "и", "из", "к", "ко", "на", "не",
    "ни", "но", "о", "об", "от", "по", "с", "со", "у", "я",
    "без", "бы", "же", "ли", "мы", "над", "нам", "нас", "они", "оно",
    "под", "при", "про", "что"
  ];
  const pattern = new RegExp(`(^|[\\s([{«„"'])(${noBreakWords.join("|")})\\s+`, "giu");
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    node.nodeValue = node.nodeValue.replace(pattern, "$1$2\u00a0");
  });
}

const app = document.getElementById("app");

app.innerHTML = `
<header class="site-header">
  <a class="logo" href="#top" aria-label="${content.brand.name}">
    <span class="logo-mark">В</span>
    <span>${content.brand.name} — ${content.brand.tagline}</span>
  </a>

  <nav class="header-nav" aria-label="Основная навигация">
    <a href="#audit">Аудит</a>
    <a href="#services">Услуги</a>
    <a href="#process">Процесс</a>
  </nav>

  <a class="header-btn" href="${tgLink}" target="_blank" rel="noreferrer">
    ${content.brand.telegramText}
  </a>
</header>

<main id="top">
  <section class="hero section-light">
    <div class="hero-copy">
      <div class="hero-badge">
        <span class="pulse"></span>
        ${content.hero.badge}
      </div>

      <h1 class="hero-title">
        ${content.hero.titleLine1 ? `${content.hero.titleLine1}<br>` : ""}
        <span class="yellow-wave">${content.hero.titleLine2}</span>
      </h1>

      <p class="hero-subtitle">${content.hero.subtitle1}</p>
      <p class="hero-subtitle second">${withBoldPhrase(content.hero.subtitle2, content.hero.boldPhrase)}</p>

      <div class="hero-buttons">
        <a href="#audit" class="btn btn-primary">${content.hero.primaryButton}</a>
        <a href="${tgLink}" class="btn btn-dark btn-telegram" target="_blank" rel="noreferrer">
          <img src="images/telegram-logo.png" alt="">
          ${content.hero.secondaryButton}
        </a>
      </div>

      <p class="hero-note">${content.hero.note}</p>
    </div>

    <div class="hero-system" aria-label="Схема маркетинговой системы">
      <div class="system-node node-main">
        <span class="node-main-label">AI +<br>Человек</span>
        <span class="edge-dot-orbit dot-orbit-one"><i></i></span>
        <span class="edge-dot-orbit dot-orbit-two"><i></i></span>
        <span class="edge-dot-orbit dot-orbit-three"><i></i></span>
      </div>
      <div class="electron-field">
        <div class="orbit-track orbit-a"></div>
        <div class="orbit-track orbit-b"></div>
        <div class="orbit-track orbit-c"></div>
        <div class="orbit-track orbit-d"></div>
        <div class="orbit-track orbit-e"></div>
        <div class="orbit-track orbit-f"></div>
        <div class="orbit-track orbit-g"></div>
        <div class="orbit-track orbit-h"></div>
        <div class="orbit-track orbit-i"></div>
        <div class="orbit-track orbit-j"></div>
        <div class="orbit-track orbit-k"></div>
        <div class="electron-orbit orbit-a">
          <span class="electron electron-gpt" title="GPT" aria-label="GPT">
            <img src="images/11865326.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-b">
          <span class="electron electron-claude" title="Claude" aria-label="Claude">
            <img src="images/claude-icon-logo.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-c">
          <span class="electron electron-deepseek" title="DeepSeek" aria-label="DeepSeek">
            <img src="images/deepseek-logo.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-d">
          <span class="electron electron-qwen" title="Qwen" aria-label="Qwen">
            <img src="images/Qwen_logo.svg.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-e">
          <span class="electron electron-yandex" title="AI" aria-label="AI">
            <img src="images/18263538.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-f">
          <span class="electron electron-flux" title="API" aria-label="API">
            <img src="images/103093.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-g">
          <span class="electron electron-auto" title="Автоматизация" aria-label="Автоматизация">
            <img src="images/8188077.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-h">
          <span class="electron electron-strategy" title="Стратегия" aria-label="Стратегия">
            <img src="images/Знак трех кругов3.png" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-i">
          <span class="electron electron-avito" title="Авито" aria-label="Авито">
            <img src="images/25c900896dfa8bf99a2aebcd6912968d_icon.webp" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-j">
          <span class="electron electron-direct" title="Яндекс.Директ" aria-label="Яндекс.Директ">
            <img src="images/2031828.webp" alt="">
          </span>
        </div>
        <div class="electron-orbit orbit-k">
          <span class="electron electron-target" title="Таргет" aria-label="Таргет">
            <img src="images/11730140.png" alt="">
          </span>
        </div>
      </div>
    </div>
  </section>

  <section class="pain-section section-dark">
      <div class="section-head">
        <p class="eyebrow">${content.painSection.eyebrow}</p>
      <h2>
        <span class="pain-title-white">${content.painSection.titleLine1}</span>
        ${content.painSection.titleLine2 ? `<br><span class="pain-title-muted">${content.painSection.titleLine2}</span>` : ""}
        ${content.painSection.titleLine3 ? `<br><span class="pain-title-accent">${content.painSection.titleLine3}</span>` : ""}
      </h2>
      ${content.painSection.text ? `<p class="section-text">${content.painSection.text}</p>` : ""}
    </div>

    <div class="pain-grid">
      ${cards(content.painSection.cards, "pain-card", (card, index) => `
        <article class="pain-card">
          <span class="pain-card-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `)}
    </div>

    ${content.painSection.bottomText ? `<p class="pain-bottom">${content.painSection.bottomText}</p>` : ""}
  </section>

  <section class="idea-section">
    <div class="idea-container">
      <div class="idea-copy">
        <p class="idea-label">${content.mainIdea.eyebrow}</p>
        <h2>${content.mainIdea.title}</h2>
        ${content.mainIdea.subtitle ? `<p>${content.mainIdea.subtitle}</p>` : ""}
      </div>

      <article class="before-after-card" aria-label="Схема было и стало">
        <div class="compare-topline">
          <span>Было</span>
          <strong>→</strong>
          <span>Стало</span>
        </div>

        <div class="before-box">
          <div class="chaos-tags">
            <span>посты</span>
            <span class="tag-ads">реклама</span>
            <span>сайт</span>
            <span class="tag-question">Авито</span>
            <span>соцсети</span>
          </div>
          <p>«Вроде всё делаем, а толку нет»</p>
        </div>

        <div class="after-box">
          <div class="system-flow">
            <span><i class="icon-target"></i>Цель</span>
            <b>→</b>
            <span><i class="icon-gear"></i>Система</span>
            <b>→</b>
            <span><i class="icon-chart"></i>Результат</span>
          </div>
          <p>«Всё на своих местах, всё работает»</p>
        </div>
      </article>
    </div>
  </section>

  <section class="difference-section section-dark">
    <div class="section-head">
      <p class="eyebrow">${content.difference.eyebrow}</p>
      <h2>${content.difference.title}</h2>
    </div>

    <div class="feature-grid">
      ${cards(content.difference.cards, "feature-card", (card, index) => `
        <article class="feature-card">
          <span>0${index + 1}</span>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `)}
    </div>

  </section>

  <section class="audit-section" id="audit">
    <div class="audit-rail" aria-hidden="true"></div>
    <div class="audit-inner">
      <div class="audit-head">
        <p class="audit-badge">${content.audit.eyebrow}</p>
        <h2>${content.audit.title.replace("теряете", "<span>теряете</span>")}</h2>
        <p>${content.audit.text}</p>
      </div>

      <div class="audit-cards">
        <article class="audit-offer-card audit-social">
          <div class="audit-icon audit-icon-social"><img src="images/3670055.png" alt=""></div>
          <h3>Соцсети</h3>
          <p>Проверим, понятно ли из контента, кто вы, чем полезны и почему вам можно доверять.</p>
          <ul>
            <li>смысл профиля</li>
            <li>рубрики и регулярность</li>
            <li>путь к заявке</li>
          </ul>
        </article>

        <article class="audit-offer-card audit-site">
          <span class="audit-choice">Чаще выбирают</span>
          <div class="audit-icon audit-icon-site"><img src="images/vizitka-mini-256-256.png" alt=""></div>
          <h3>Сайт</h3>
          <p>Посмотрим первый экран, офферы, структуру, CTA и то, где клиент теряет мотивацию.</p>
          <ul>
            <li>первый экран</li>
            <li>структура и доверие</li>
            <li>заявка без лишних шагов</li>
          </ul>
        </article>

        <article class="audit-offer-card audit-avito">
          <div class="audit-icon audit-icon-avito"><img src="images/25c900896dfa8bf99a2aebcd6912968d_icon.webp" alt=""></div>
          <h3>Авито</h3>
          <p>Оценим объявления, упаковку, отличия от конкурентов и причины слабой конверсии.</p>
          <ul>
            <li>заголовки и фото</li>
            <li>доверие и упаковка</li>
            <li>конверсия в обращение</li>
          </ul>
        </article>
      </div>

      <div class="audit-action">
        <a href="${tgLink}" class="audit-button" target="_blank" rel="noreferrer">
          <span class="audit-button-text">${content.audit.button}</span><span>→</span>
        </a>
        ${content.audit.note ? `<p>${content.audit.note}</p>` : ""}
      </div>
    </div>
  </section>

  <section class="services-section section-dark" id="services">
    <div class="section-head">
      <p class="eyebrow">${content.services.eyebrow}</p>
      <h2>${content.services.title}</h2>
      ${content.services.text ? `<p class="section-text">${content.services.text}</p>` : ""}
    </div>

    <div class="service-grid">
      ${content.services.cards.map((item) => `
        <article class="service-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `).join("")}
    </div>

    <div class="inline-cta">
      <div>
        <h3>${content.services.ctaTitle}</h3>
        <p>${content.services.ctaText}</p>
      </div>
      <a href="${tgLink}" class="btn btn-primary" target="_blank" rel="noreferrer">${content.services.ctaButton}</a>
    </div>
  </section>

  <section class="ai-section section-light">
    <div class="split ai-split">
      <div class="ai-copy">
        <p class="eyebrow">${content.ai.eyebrow}</p>
        <h2>${content.ai.title}</h2>
        <p class="lead">${content.ai.text}</p>
        <ul class="check-list">${list(content.ai.bullets)}</ul>
      </div>

      <div class="ai-orbit ai-quality-scene" aria-label="Входные данные проходят через нейросеть, человек фильтрует сырье и получает рабочий результат">
        <div class="ai-inputs" aria-label="Входные данные"></div>

        <div class="ai-brain" aria-label="Нейросеть обрабатывает данные">
          <span class="ai-brain-orbit orbit-cold-one"><i></i></span>
          <span class="ai-brain-orbit orbit-cold-two"><i></i></span>
          <span class="ai-brain-orbit orbit-cold-three"><i></i></span>
          <span class="ai-brain-orbit orbit-cold-four"><i></i></span>
          <span class="ai-data-dot dot-one"></span>
          <span class="ai-data-dot dot-two"></span>
          <span class="ai-data-dot dot-three"></span>
          <strong>AI</strong>
          <span class="ai-brain-label">обработка</span>
        </div>

        <div class="human-filter" aria-label="Фильтр человеческой проверки">
          <div class="human-avatar" aria-hidden="true">
            <span></span>
          </div>
          <div class="human-tags">
            <span>контекст</span>
            <span>смысл</span>
            <span>фактчек</span>
            <span>редактура</span>
          </div>
        </div>

        <div class="result-stack" aria-label="Готовые результаты"></div>

        <div class="ai-stats" aria-label="Статистика обработки">
          <span>Сгенерировано <strong data-stat="generated">0</strong></span>
          <span>Отбраковано <strong data-stat="rejected">0</strong></span>
          <span>Одобрено <strong data-stat="approved">0</strong></span>
        </div>

        <div class="content-stream" aria-hidden="true"></div>
      </div>
    </div>
  </section>

  <section class="about-section section-dark">
    <div class="about-inner">
      <div class="about-head">
        <p class="eyebrow">${content.about.eyebrow}</p>
        <h2>${content.about.title}</h2>
        <p class="lead">${content.about.text}</p>
      </div>

      <div class="founders-grid">
        ${content.about.founders.map((founder) => `
          <article class="founder-card">
            <div class="founder-photo-wrap">
              <img class="founder-photo" src="${founder.image}" alt="${founder.name}">
              <blockquote>${founder.quote}</blockquote>
            </div>
            <div class="founder-content">
              <div>
                <h3>${founder.name}</h3>
                <p class="founder-role">${founder.role}</p>
              </div>
              <ul>${founder.points.map((point) => `
                <li>
                  <span class="founder-point-icon founder-icon-${point.icon}" aria-hidden="true"></span>
                  <span>${point.text}</span>
                </li>
              `).join("")}</ul>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  </section>

  <section class="process-section section-light" id="process">
    <div class="section-head">
      <p class="eyebrow">${content.process.eyebrow}</p>
      <h2>${content.process.title}</h2>
    </div>

    <div class="process-list">
      ${content.process.steps.map((step, index) => `
        <article class="process-step">
          <span>${index + 1}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </div>
        </article>
      `).join("")}
    </div>
  </section>

  <section class="final-cta section-accent">
    <h2>${content.finalCta.title}</h2>
    <p>${content.finalCta.text}</p>
    <div class="hero-buttons">
      <a href="${tgLink}" class="btn btn-primary" target="_blank" rel="noreferrer">${content.finalCta.primaryButton}</a>
      <a href="${tgLink}" class="btn btn-dark" target="_blank" rel="noreferrer">${content.finalCta.secondaryButton}</a>
    </div>
  </section>

  <section class="subscribe-video section-dark">
    <article class="subscribe-block">
      <p class="eyebrow">${content.subscribe.eyebrow}</p>
      <h2>${content.subscribe.title}</h2>
      <p>${content.subscribe.text}</p>
      <a href="${content.brand.channelLink}" class="btn btn-secondary" target="_blank" rel="noreferrer">${content.subscribe.button}</a>
    </article>

    <article class="video-block">
      <p class="eyebrow">${content.video.eyebrow}</p>
      <h2>${content.video.title}</h2>
      <p>${content.video.text}</p>
      <div class="video-placeholder">▶</div>
    </article>
  </section>
</main>

<footer class="site-footer">
  <p>${content.footer.text}</p>
  <nav aria-label="Навигация в подвале">
    ${content.footer.nav.map((item) => `<a href="${tgLink}" target="_blank" rel="noreferrer">${item}</a>`).join("")}
  </nav>
</footer>
`;

applyTypography(app);

function pauseWhenHidden(selector, threshold = 0.12) {
  const target = document.querySelector(selector);
  if (!target || typeof window === "undefined" || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      target.classList.toggle("is-paused", !entry.isIntersecting);
    },
    { threshold }
  );

  observer.observe(target);
}

pauseWhenHidden(".hero-system");

function startAiQualityScene() {
  const scene = document.querySelector(".ai-quality-scene");
  if (!scene) return;

  const stream = scene.querySelector(".content-stream");
  const inputs = scene.querySelector(".ai-inputs");
  const results = scene.querySelector(".result-stack");
  const human = scene.querySelector(".human-filter");
  const stats = {
    generated: scene.querySelector('[data-stat="generated"]'),
    rejected: scene.querySelector('[data-stat="rejected"]'),
    approved: scene.querySelector('[data-stat="approved"]')
  };
  const counters = { generated: 0, rejected: 0, approved: 0 };
  const inputLabels = ["Промпт", "Текст", "Голосовое", "Фото", "Видео", "Бриф", "Идея"];
  const rejectedLabels = ["Подхалимство", "Галлюцинация", "Битая ссылка", "Левый факт", "Вода", "Штамп", "Без контекста", "Пластиковый текст"];
  const usefulDrafts = ["Сильная гипотеза", "Живой инсайт", "Черновик оффера", "Точная боль", "Рабочая структура"];
  const resultLabels = ["Эффективность", "Конверсия", "Лендинг", "Сильный оффер", "Сценарий Reels", "Контент-план", "Лид-магнит", "Попадание в ЦА", "Живой текст", "Заявки"];
  const timers = new Set();
  const activeAnimations = new Set();
  let isRunning = false;

  const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
  const updateStat = (name) => {
    if (!isRunning) return;
    counters[name] += 1;
    stats[name].textContent = counters[name];
  };
  const schedule = (callback, delay) => {
    if (!isRunning) return null;

    const timer = setTimeout(() => {
      timers.delete(timer);
      if (isRunning) callback();
    }, delay);

    timers.add(timer);
    return timer;
  };
  const trackAnimation = (animation, card) => {
    activeAnimations.add(animation);
    animation.addEventListener("finish", () => activeAnimations.delete(animation), { once: true });
    animation.addEventListener("cancel", () => {
      activeAnimations.delete(animation);
      card.remove();
    }, { once: true });
    return animation;
  };

  inputLabels.forEach((label, index) => {
    const item = document.createElement("span");
    item.className = "input-chip";
    item.style.setProperty("--i", index);
    item.textContent = label;
    inputs.appendChild(item);
  });

  function addResult() {
    const item = document.createElement("span");
    item.className = "result-card";
    item.textContent = randomItem(resultLabels);
    results.prepend(item);

    while (results.children.length > 6) {
      results.lastElementChild.remove();
    }

    schedule(() => item.classList.add("is-visible"), 30);
  }

  function animateInput() {
    if (!isRunning) return;

    const sceneWidth = scene.clientWidth || 560;
    const sceneHeight = scene.clientHeight || 560;
    const card = document.createElement("span");
    card.className = "flow-card flow-card-input";
    card.textContent = randomItem(inputLabels);
    stream.appendChild(card);

    const startX = sceneWidth * 0.04;
    const startY = sceneHeight * (0.22 + Math.random() * 0.48);
    const aiX = sceneWidth * 0.36;
    const aiY = sceneHeight * (0.42 + Math.random() * 0.16);

    const animation = trackAnimation(card.animate(
      [
        { transform: `translate(${startX}px, ${startY}px) scale(.88)`, opacity: 0 },
        { transform: `translate(${startX + sceneWidth * 0.1}px, ${startY - 24}px) scale(1)`, opacity: 1, offset: 0.2 },
        { transform: `translate(${aiX}px, ${aiY}px) scale(.7)`, opacity: 0 }
      ],
      { duration: 2600 + Math.random() * 700, easing: "cubic-bezier(.22,.82,.22,1)", fill: "forwards" }
    ), card);

    animation.onfinish = () => card.remove();
  }

  function animateRaw() {
    if (!isRunning) return;

    const sceneWidth = scene.clientWidth || 560;
    const sceneHeight = scene.clientHeight || 560;
    const isUseful = Math.random() > 0.64;
    const card = document.createElement("span");
    card.className = `flow-card flow-card-raw ${isUseful ? "flow-card-useful" : "flow-card-bad"}`;
    card.textContent = isUseful ? randomItem(usefulDrafts) : randomItem(rejectedLabels);
    stream.appendChild(card);
    updateStat("generated");

    const aiX = sceneWidth * 0.38;
    const aiY = sceneHeight * (0.38 + Math.random() * 0.22);
    const humanX = sceneWidth * 0.62;
    const humanY = sceneHeight * (0.36 + Math.random() * 0.18);
    const discardX = sceneWidth * (0.66 + Math.random() * 0.08);
    const discardY = sceneHeight * (0.72 + Math.random() * 0.12);
    const resultX = sceneWidth * 0.78;
    const resultY = sceneHeight * (0.26 + Math.random() * 0.34);

    const animation = trackAnimation(card.animate(
      isUseful
        ? [
            { transform: `translate(${aiX}px, ${aiY}px) scale(.75)`, opacity: 0 },
            { transform: `translate(${aiX + sceneWidth * 0.08}px, ${aiY - 16}px) scale(1)`, opacity: 1, offset: 0.2 },
            { transform: `translate(${humanX}px, ${humanY}px) scale(.96)`, opacity: 1, offset: 0.58 },
            { transform: `translate(${humanX + sceneWidth * 0.015}px, ${humanY}px) scale(.84)`, opacity: 0.85, offset: 0.72 },
            { transform: `translate(${resultX}px, ${resultY}px) scale(.72) rotate(5deg)`, opacity: 0 }
          ]
        : [
            { transform: `translate(${aiX}px, ${aiY}px) scale(.75)`, opacity: 0 },
            { transform: `translate(${aiX + sceneWidth * 0.08}px, ${aiY - 16}px) scale(1)`, opacity: 1, offset: 0.2 },
            { transform: `translate(${humanX}px, ${humanY}px) scale(.96)`, opacity: 1, offset: 0.58 },
            { transform: `translate(${humanX}px, ${humanY}px) scale(.84)`, opacity: 0.9, offset: 0.72 },
            { transform: `translate(${discardX}px, ${discardY}px) scale(.42) rotate(-18deg)`, opacity: 0 }
          ],
      { duration: 3600 + Math.random() * 900, easing: "cubic-bezier(.22,.82,.22,1)", fill: "forwards" }
    ), card);

    schedule(() => {
      human.classList.add("is-checking");
      schedule(() => human.classList.remove("is-checking"), 520);
    }, 2150);

    animation.onfinish = () => {
      activeAnimations.delete(animation);
      if (!isRunning) {
        card.remove();
        return;
      }

      if (isUseful) {
        updateStat("approved");
        addResult();
      } else {
        updateStat("rejected");
      }
      card.remove();
    };
  }

  function loop() {
    if (!isRunning) return;

    animateInput();
    schedule(animateRaw, 900 + Math.random() * 350);
    schedule(loop, 1450 + Math.random() * 650);
  }

  function pauseScene() {
    isRunning = false;
    scene.classList.add("is-paused");
    human.classList.remove("is-checking");
    timers.forEach((timer) => clearTimeout(timer));
    timers.clear();
    activeAnimations.forEach((animation) => animation.cancel());
    activeAnimations.clear();
    stream.replaceChildren();
  }

  function resumeScene() {
    if (isRunning) return;
    isRunning = true;
    scene.classList.remove("is-paused");
    loop();
  }

  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          resumeScene();
        } else {
          pauseScene();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(scene);
  } else {
    resumeScene();
  }
}

startAiQualityScene();
