---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

<div class="zhu-publications-page">
  <header class="pub-hero">
    <div class="research-kicker">PUBLICATIONS</div>
    <h1>Publications</h1>
    <p>Peer-reviewed work across membrane transport, electrochemical systems, nanoconfinement, interfacial chemistry, and environmental materials.</p>
  </header>

  <div class="pub-tools">
    <input type="text" class="pub-search" id="pubSearch" placeholder="Search by title, journal, author, or year..." aria-label="Search publications">
  </div>

  <div id="pubList">
    {% include publications_recent.html %}
    {% include publications_legacy.html %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('pubSearch');
  if (!input) return;
  input.addEventListener('input', function () {
    var q = this.value.toLowerCase().trim();
    document.querySelectorAll('.pub-entry').forEach(function (entry) {
      entry.style.display = !q || entry.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
    });
    document.querySelectorAll('.pub-year-group').forEach(function (group) {
      var visible = Array.from(group.querySelectorAll('.pub-entry')).some(function (e) { return e.style.display !== 'none'; });
      group.style.display = visible ? '' : 'none';
    });
  });
});
</script>