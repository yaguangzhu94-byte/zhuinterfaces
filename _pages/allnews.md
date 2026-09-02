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
  <section class="news-recruitment" aria-labelledby="news-recruitment-title">
    <div class="news-recruitment__status">
      <span class="news-recruitment__dot" aria-hidden="true"></span>
      <span>Open positions</span>
    </div>

    <div class="news-recruitment__copy">
      <p class="news-recruitment__kicker">Join the Zhu Interfaces Lab</p>
      <h2 id="news-recruitment-title">We are recruiting <em>Ph.D. students and postdoctoral researchers.</em></h2>
      <p class="news-recruitment__description">We welcome candidates with expertise in <strong>electrocatalysis</strong> and <strong>nanomaterials synthesis</strong> for Spring 2026 and Fall 2027.</p>
    </div>

    <div class="news-recruitment__aside">
      <div class="news-recruitment__terms" aria-label="Recruitment terms">
        <span>Spring 2026</span>
        <span>Fall 2027</span>
      </div>
      <a class="news-recruitment__contact" href="mailto:{{ site.email }}?subject=Prospective%20Zhu%20Lab%20Applicant">
        Contact Prof. Zhu <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>

  {% if featured %}
  <header class="news-hero" aria-labelledby="news-page-title">
    <div class="news-hero__content">
      <p class="news-hero__eyebrow"><span aria-hidden="true"></span>Zhu Interfaces Lab</p>
      <h1 id="news-page-title">News <em>&amp;</em><br>Milestones</h1>
      <p class="news-hero__lede">A record of the people, ideas, collaborations, and discoveries shaping our lab.</p>
      {% if featured.funding %}
      <div class="news-hero__funding" aria-label="Funding acknowledgement">
        <span>NSF-FUNDED ERC</span>
        <strong>{{ featured.funding }}</strong>
      </div>
      {% endif %}
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
      {% if featured.facility_mark %}
      <div class="news-hero__facility-mark" aria-label="Brookhaven National Laboratory, National Synchrotron Light Source II, HEX beamline">
        <svg viewBox="0 0 44 44" aria-hidden="true">
          <circle cx="22" cy="22" r="15"></circle>
          <path d="M5 22h16l14-10"></path>
          <circle class="news-facility-dot" cx="36" cy="11" r="3"></circle>
        </svg>
        <div>
          <strong>BNL</strong>
          <span>NSLS-II · HEX</span>
        </div>
      </div>
      {% endif %}
      <div class="news-hero__number" aria-hidden="true">01</div>
      <div class="news-hero__date">
        <span>{{ featured.month }}</span>
        <strong>{{ featured.day }}</strong>
        <small>{{ featured.year }}</small>
      </div>
      <div class="news-hero__caption">
        <span>{{ featured.venue | default: "Texas Tech University" }}</span>
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

  <section class="news-archive news-archive--streamlined" id="latest-news" aria-labelledby="latest-news-title">
    <h2 class="news-sr-only" id="latest-news-title">Latest news from the Zhu Interfaces Lab</h2>

    {% for article in site.data.news %}
    {% if article.image contains '://' %}
      {% assign article_image = article.image %}
    {% else %}
      {% assign article_image = article.image | relative_url %}
    {% endif %}
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
        {% if article.facility_mark %}
        <div class="news-story__facility-mark" aria-label="Brookhaven National Laboratory, National Synchrotron Light Source II, HEX beamline">
          <svg viewBox="0 0 34 34" aria-hidden="true">
            <circle cx="17" cy="17" r="11"></circle>
            <path d="M3 17h13l11-8"></path>
            <circle class="news-facility-dot" cx="28" cy="8" r="2.5"></circle>
          </svg>
          <strong>BNL</strong>
          <span>NSLS-II · HEX</span>
        </div>
        {% endif %}
        {% if article.funding %}
        <div class="news-story__funding" aria-label="Funding acknowledgement">
          <span>NSF-FUNDED</span>
          <strong>{{ article.funding }}</strong>
        </div>
        {% endif %}
        <h3>{{ article.headline }}</h3>

        {% unless forloop.first %}
          {% if article.image %}
          <figure class="news-story__media">
            <img src="{{ article_image }}" alt="{{ article.image_alt | escape }}" loading="lazy" decoding="async">
            {% if article.photo_credit %}
            <figcaption>Photo: {{ article.photo_credit }}</figcaption>
            {% endif %}
          </figure>
          {% endif %}
        {% endunless %}

        {% if article.summary %}
        <p class="news-story__dek">{{ article.summary }}</p>
        {% endif %}
        {% if article.body %}
        <p class="news-story__body">{{ article.body }}</p>
        {% endif %}

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
</div>
