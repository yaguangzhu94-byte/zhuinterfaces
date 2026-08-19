---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

<div class="zhu-publications-page compact-publications">
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

<style>
.compact-publications{max-width:1080px;margin:0 auto;padding-bottom:3rem}.compact-publications .pub-hero{padding:3rem 0 1.6rem}.compact-publications .pub-hero h1{margin:.25rem 0 .45rem;font-size:clamp(2.8rem,6vw,5.2rem);line-height:.95}.compact-publications .pub-hero p{max-width:760px;margin:0;font-size:1rem;line-height:1.55}.compact-publications .pub-tools{margin:0 0 1.8rem}.compact-publications .pub-search{width:100%;max-width:520px;padding:.72rem 1rem;border:1px solid rgba(32,42,39,.18);background:rgba(255,255,255,.42);border-radius:0;font-size:.95rem}.compact-publications .pub-year-group{display:grid;grid-template-columns:105px minmax(0,1fr);gap:1.5rem;border-top:1px solid rgba(32,42,39,.14);padding:1.25rem 0 .25rem}.compact-publications .pub-year{font-family:Georgia,serif;font-size:1.65rem;line-height:1;color:#2f7f7b;position:sticky;top:90px;align-self:start}.compact-publications .pub-entry{display:grid;grid-template-columns:32px minmax(0,1fr);gap:.8rem;padding:0 0 1.15rem;margin:0 0 1.05rem;border-bottom:1px solid rgba(32,42,39,.09)}.compact-publications .pub-entry>span{font-size:.75rem;letter-spacing:.08em;color:#7b7e78;padding-top:.28rem}.compact-publications .pub-entry h3{font-family:Georgia,serif;font-size:1.25rem;line-height:1.25;margin:0 0 .35rem;color:#202521}.compact-publications .pub-entry p{font-size:.88rem;line-height:1.45;margin:0 0 .32rem;color:#6b6f69}.compact-publications .pub-meta{font-size:.86rem;line-height:1.35}.compact-publications .pub-meta a{color:#267a77;text-decoration:none}.compact-publications .pub-meta a:hover{text-decoration:underline}@media(max-width:720px){.compact-publications{padding-left:1rem;padding-right:1rem}.compact-publications .pub-hero{padding-top:2rem}.compact-publications .pub-year-group{grid-template-columns:1fr;gap:.7rem;padding-top:1rem}.compact-publications .pub-year{position:static;font-size:1.4rem}.compact-publications .pub-entry{grid-template-columns:26px minmax(0,1fr);gap:.55rem}.compact-publications .pub-entry h3{font-size:1.08rem}}
</style>

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