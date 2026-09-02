---
title: "News"
layout: gridlay
sitemap: false
permalink: /allnews.html
---

{% assign featured = site.data.news | first %}
{% if featured %}
  {% if featured.image contains '://' %}
    {% assign featured_image = featured.image %}
  {% else %}
    {% assign featured_image = featured.image | relative_url %}
  {% endif %}
{% endif %}

<div class="news-page" markdown="0">
  {% if featured %}
  <header class="news-hero" aria-labelledby="news-page-title">
    <div class="news-hero__content">
      <p class="news-hero__eyebrow"><span aria-hidden="true"></span>Zhu Interfaces Lab</p>
      <h1 id="news-page-title">News <em>&amp;</em><br>Milestones</h1>
      <p class="news-hero__lede">A record of the people, ideas, collaborations, and discoveries shaping our lab.</p>
      <a class="news-hero__jump" href="#latest-news">
        <span>Read the latest</span>
        <span class="news-hero__jump-icon" aria-hidden="true">↓</span>
      </a>
      <div class="news-hero__edition" aria-label="News archive established in 2026">
        <span>FIELD NOTES</span>
        <strong>EST. 2026</strong>
      </div>
    </div>

    <div class="news-hero__media" style="background-image: url('{{ '/images/News/ttu-campus-placeholder.svg' | relative_url }}');">
      <img src="{{ featured_image }}"
           alt="{{ featured.image_alt | escape }}"
           loading="eager"
           fetchpriority="high"
           decoding="async"
           onerror="this.hidden=true">
      <div class="news-hero__veil" aria-hidden="true"></div>
      <div class="news-hero__number" aria-hidden="true">01</div>
      <div class="news-hero__date">
        <span>{{ featured.month }}</span>
        <strong>{{ featured.day }}</strong>
        <small>{{ featured.year }}</small>
      </div>
      <div class="news-hero__caption">
        <span>Texas Tech University</span>
        <small>{{ featured.location | capitalize }}</small>
      </div>
      {% if featured.photo_credit %}
      <a class="news-hero__credit" href="{{ featured.photo_url }}" target="_blank" rel="noopener noreferrer">
        Photo: {{ featured.photo_credit }}
      </a>
      {% endif %}
    </div>
  </header>
  {% endif %}

  <section class="news-intro" aria-label="About lab news">
    <div class="news-intro__label">
      <span>FIELD NOTES</span>
      <strong>2026—PRESENT</strong>
    </div>
    <p class="news-intro__statement">From new beginnings to new discoveries, this is where we document the moments that move the Zhu Interfaces Lab forward.</p>
  </section>

  <section class="news-archive" id="latest-news" aria-labelledby="latest-news-title">
    {% assign news_count = site.data.news | size %}
    <div class="news-archive__header">
      <div>
        <p class="news-section-kicker">THE LATEST</p>
        <h2 id="latest-news-title">From the lab</h2>
      </div>
      <p class="news-archive__summary">Research updates, people, publications, presentations, and milestones—collected in one evolving archive.</p>
      <span class="news-archive__count">{{ news_count | prepend: '0' }} {% if news_count == 1 %}STORY{% else %}STORIES{% endif %}</span>
    </div>

    {% for article in site.data.news %}
    <article class="news-story{% if forloop.first %} news-story--featured{% endif %}">
      <div class="news-story__rail">
        <time class="news-story__date" datetime="{{ article.date }}">
          <span class="news-sr-only">{{ article.display_date }}</span>
          <span aria-hidden="true">{{ article.month }}</span>
          <strong aria-hidden="true">{{ article.day }}</strong>
          <small aria-hidden="true">{{ article.year }}</small>
        </time>
        <span class="news-story__line" aria-hidden="true"></span>
      </div>

      <div class="news-story__content">
        <div class="news-story__meta">
          <span>{{ article.category }}</span>
          <i aria-hidden="true"></i>
          <span>{{ article.location }}</span>
        </div>
        <h3>{{ article.headline }}</h3>
        <p class="news-story__dek">{{ article.summary }}</p>
        <p class="news-story__body">{{ article.body }}</p>

        {% if article.tags %}
        <div class="news-story__tags" aria-label="Research themes">
          {% for tag in article.tags %}
          <span>{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}

        {% if article.links %}
        <div class="news-story__links">
          {% for link in article.links %}
          <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
            {{ link.label }} <span aria-hidden="true">↗</span>
          </a>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </section>

  <section class="news-focus" aria-labelledby="news-focus-title">
    <div class="news-focus__heading">
      <p>THE WORK AHEAD</p>
      <h2 id="news-focus-title">Interfaces designed.<br>Mechanisms revealed.</h2>
    </div>
    <div class="news-focus__grid">
      <div class="news-focus__item">
        <span>01</span>
        <strong>Interfacial design</strong>
        <p>Control the molecular environments where transport and transformation begin.</p>
      </div>
      <div class="news-focus__item">
        <span>02</span>
        <strong>Advanced characterization</strong>
        <p>Observe structure, chemistry, and dynamics under real working conditions.</p>
      </div>
      <div class="news-focus__item">
        <span>03</span>
        <strong>Sustainable systems</strong>
        <p>Translate mechanistic insight into materials and processes with lasting impact.</p>
      </div>
    </div>
  </section>

  <footer class="news-endnote" aria-label="End of current news archive">
    <span aria-hidden="true"></span>
    <p>More stories from the Zhu Interfaces Lab are on the way.</p>
    <span aria-hidden="true"></span>
  </footer>
</div>
