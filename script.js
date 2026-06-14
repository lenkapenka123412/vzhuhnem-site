document.getElementById("app").innerHTML = `
    
<header class="header">

    <div class="logo">
        ⚡ Вжухнем — отдел производства клиентов
    </div>

    <a class="header-btn" href="${SITE_CONTENT.brand.telegramLink}">
        ${SITE_CONTENT.brand.telegramText}
    </a>

</header>

<section class="hero">

    <div class="hero-badge">

        <span class="pulse"></span>

        ${SITE_CONTENT.hero.badge}

    </div>

    <h1 class="hero-title">

        ${SITE_CONTENT.hero.titleLine1}

        <br>

        <span class="yellow-wave">
            ${SITE_CONTENT.hero.titleLine2}
        </span>

    </h1>

    <p class="hero-subtitle">

        ${SITE_CONTENT.hero.subtitle1}

    </p>

    <p class="hero-subtitle second">

        Мы помогаем бизнесу перестать выглядеть случайным набором публикаций и
        <strong>собрать работающую систему присутствия в онлайне</strong>

    </p>

    <div class="hero-buttons">

        <a href="#" class="btn-primary">

            ${SITE_CONTENT.hero.primaryButton}

        </a>

        <a href="${SITE_CONTENT.brand.telegramLink}" class="btn-secondary">

            ${SITE_CONTENT.hero.secondaryButton}

        </a>

    </div>

</section>

<section class="pain-section">

  <div class="section-head">
    <p class="eyebrow">${SITE_CONTENT.painSection.eyebrow}</p>

    <h2>
      ${SITE_CONTENT.painSection.titleLine1}<br>
      ${SITE_CONTENT.painSection.titleLine2}<br>
      ${SITE_CONTENT.painSection.titleLine3}
    </h2>

    <p class="section-text">${SITE_CONTENT.painSection.text}</p>
  </div>

  <div class="pain-grid">
    ${SITE_CONTENT.painSection.cards.map(card => `
      <article class="pain-card">
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </article>
    `).join("")}
  </div>

  <p class="pain-bottom">${SITE_CONTENT.painSection.bottomText}</p>

</section>

`;