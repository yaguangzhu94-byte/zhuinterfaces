---
title: "News"
layout: gridlay
sitemap: false
permalink: /allnews.html
---

<div class="news-page news-page--cards" markdown="0">
  <section class="news-recruitment news-recruitment--compact" aria-labelledby="news-recruitment-title">
    <div class="news-recruitment__status">
      <span class="news-recruitment__dot" aria-hidden="true"></span>
      <span>Open positions</span>
    </div>

    <div class="news-recruitment__copy">
      <p class="news-recruitment__kicker">Join the Zhu Interfaces Lab</p>
      <h2 id="news-recruitment-title">Recruiting Ph.D. students and postdoctoral researchers</h2>
      <p class="news-recruitment__description">Candidates with expertise in <strong>electrocatalysis</strong> and <strong>nanomaterials synthesis</strong> are encouraged to apply for Spring 2026 and Fall 2027.</p>
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

  <section class="news-feed" aria-labelledby="news-feed-title">
    <header class="news-feed__header">
      <div>
        <p class="news-feed__kicker">Lab updates</p>
        <h1 id="news-feed-title">News</h1>
      </div>
      <p>Research, people, collaborations, publications, presentations, and other updates from the Zhu Interfaces Lab.</p>
    </header>

    <div class="news-feed__list">
      {% for article in site.data.news %}
        {% if article.image contains '://' %}
          {% assign article_image = article.image %}
        {% else %}
          {% assign article_image = article.image | relative_url %}
        {% endif %}

        <article class="news-card">
          <header class="news-card__datebar">
            <time datetime="{{ article.date }}">{{ article.display_date }}</time>
            <span>{{ article.category }}</span>
          </header>

          <figure class="news-card__media">
            <img src="{{ article_image }}"
                 alt="{{ article.image_alt | escape }}"
                 {% if forloop.first %}loading="eager" fetchpriority="high"{% else %}loading="lazy"{% endif %}
                 decoding="async"
                 onerror="this.onerror=null;this.src='{{ '/images/News/ttu-campus-placeholder.svg' | relative_url }}';">
            {% if article.photo_credit %}
              <figcaption>Photo: {{ article.photo_credit }}</figcaption>
            {% endif %}
          </figure>

          <div class="news-card__content">
            <h2>{{ article.headline }}</h2>

            {% if article.summary %}
              <p class="news-card__summary">{{ article.summary }}</p>
            {% endif %}

            {% if article.body %}
              <p class="news-card__body">{{ article.body }}</p>
            {% endif %}

            {% if article.funding %}
              <p class="news-card__funding">{{ article.funding }}</p>
            {% endif %}

            <div class="news-card__location">
              {% if article.venue %}<strong>{{ article.venue }}</strong>{% endif %}
              <span>{{ article.location }}</span>
            </div>

            {% if article.links %}
              <div class="news-card__links">
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
    </div>
  </section>
</div>
