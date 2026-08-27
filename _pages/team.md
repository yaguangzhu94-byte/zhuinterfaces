---
title: "People"
layout: gridlay
sitemap: false
permalink: /team/
---

<div class="zhu-people-page">
  <header class="people-hero">
    <h1>People</h1>
  </header>

  <section class="people-section">
    <h2>Principal Investigator</h2>
    <div class="people-grid people-grid-pi">
      <article class="people-tile">
        <button class="people-photo-button" type="button" data-dialog="bio-yaguang" aria-label="Read more about Yaguang Zhu">
          <img src="{{ site.url }}{{ site.baseurl }}/images/team/yaguang-zhu.svg" alt="Yaguang Zhu" class="people-photo" loading="lazy">
          <span class="people-photo-overlay">View profile</span>
        </button>
        <h3>Yaguang Zhu</h3>
        <p>Assistant Professor</p>
      </article>
    </div>
  </section>

  <section class="people-section">
    <h2>Graduate Students</h2>
    <div class="people-grid">
      <article class="people-tile">
        <button class="people-photo-button" type="button" data-dialog="bio-chuanqi" aria-label="Read more about Chuanqi Jia">
          <img src="{{ site.url }}{{ site.baseurl }}/images/team/chuanqi-jia.svg" alt="Chuanqi Jia" class="people-photo" loading="lazy">
          <span class="people-photo-overlay">View profile</span>
        </button>
        <h3>Chuanqi Jia</h3>
        <p>Ph.D. Student · Chemical Engineering</p>
      </article>

      <article class="people-tile">
        <button class="people-photo-button" type="button" data-dialog="bio-yan" aria-label="Read more about Yan Zhao">
          <img src="{{ site.url }}{{ site.baseurl }}/images/team/yan-zhao.svg" alt="Yan Zhao" class="people-photo" loading="lazy">
          <span class="people-photo-overlay">View profile</span>
        </button>
        <h3>Yan Zhao</h3>
        <p>Ph.D. Student · Civil Engineering</p>
      </article>
    </div>
  </section>

  <section class="people-section people-coming-section">
    <h2>Undergraduate Students</h2>
    <p class="people-coming">Two undergraduate researcher profiles will be added here.</p>
  </section>

  <section class="people-section people-coming-section">
    <h2>Alumni</h2>
    <p class="people-coming">Two alumni profiles will be added here.</p>
  </section>
</div>

<dialog class="people-dialog" id="bio-yaguang">
  <div class="people-dialog-inner">
    <button class="people-dialog-close" type="button" aria-label="Close profile">×</button>
    <img src="{{ site.url }}{{ site.baseurl }}/images/team/yaguang-zhu.svg" alt="Yaguang Zhu">
    <div class="people-dialog-copy">
      <div class="people-dialog-kicker">PRINCIPAL INVESTIGATOR</div>
      <h2>Yaguang Zhu</h2>
      <p class="people-dialog-role">Assistant Professor · Texas Tech University</p>
      <p>Yaguang Zhu leads the Zhu Lab, where research connects molecular interactions, interfacial transport, materials design, electrochemistry, and operando synchrotron X-ray characterization across length scales.</p>
      <div class="people-dialog-links"><a href="mailto:yaguang.zhu@ttu.edu">Email ↗</a>{% if site.links.google_scholar and site.links.google_scholar != "" %}<a href="{{ site.links.google_scholar }}">Google Scholar ↗</a>{% endif %}</div>
    </div>
  </div>
</dialog>

<dialog class="people-dialog" id="bio-chuanqi">
  <div class="people-dialog-inner">
    <button class="people-dialog-close" type="button" aria-label="Close profile">×</button>
    <img src="{{ site.url }}{{ site.baseurl }}/images/team/chuanqi-jia.svg" alt="Chuanqi Jia">
    <div class="people-dialog-copy">
      <div class="people-dialog-kicker">GRADUATE STUDENT</div>
      <h2>Chuanqi Jia</h2>
      <p class="people-dialog-role">Ph.D. Student · Chemical Engineering</p>
      <p>Chuanqi Jia is a Ph.D. student in Chemical Engineering at Texas Tech University. His research focuses on the synthesis and characterization of two-dimensional materials and Joule-heating-assisted material processing.</p>
      <p>Outside the lab, he enjoys playing basketball and cooking.</p>
    </div>
  </div>
</dialog>

<dialog class="people-dialog" id="bio-yan">
  <div class="people-dialog-inner">
    <button class="people-dialog-close" type="button" aria-label="Close profile">×</button>
    <img src="{{ site.url }}{{ site.baseurl }}/images/team/yan-zhao.svg" alt="Yan Zhao">
    <div class="people-dialog-copy">
      <div class="people-dialog-kicker">GRADUATE STUDENT</div>
      <h2>Yan Zhao</h2>
      <p class="people-dialog-role">Ph.D. Student · Civil Engineering</p>
      <p>Yan Zhao is a Ph.D. student in Civil Engineering at Texas Tech University. Her current research focuses on the electrocatalytic reduction of carbon dioxide. Before joining Texas Tech, she studied Environmental Science and Engineering at Beijing University of Technology, where her research focused on CO₂ electroreduction using copper-based catalysts, including catalyst synthesis, structural regulation, electrochemical performance, and product analysis.</p>
      <p>Yan is friendly, outgoing, and always curious about trying new things. Outside the lab, she enjoys traveling, experiencing different cultures, spending time in nature, and discovering new foods.</p>
    </div>
  </div>
</dialog>

<style>
.zhu-people-page{max-width:1180px;margin:0 auto;padding:0 0 5rem}.people-hero{padding:3rem 0 1.6rem;border-bottom:1px solid rgba(32,42,39,.14)}.people-hero h1{font-family:Georgia,serif;font-size:clamp(3.6rem,7vw,6.4rem);line-height:.95;margin:0;color:#202521}.people-section{padding:2.6rem 0;border-bottom:1px solid rgba(32,42,39,.14)}.people-section h2{font-family:Georgia,serif;font-size:clamp(1.9rem,3vw,2.7rem);line-height:1;margin:0 0 1.45rem;color:#202521}.people-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2.1rem}.people-grid-pi{grid-template-columns:repeat(3,minmax(0,1fr))}.people-tile{min-width:0}.people-photo-button{position:relative;display:block;width:100%;padding:0;border:0;background:none;cursor:pointer;overflow:hidden;text-align:left}.people-photo{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;transition:transform .35s ease,filter .35s ease}.people-photo-overlay{position:absolute;inset:auto 0 0 0;padding:1rem 1.1rem;background:linear-gradient(transparent,rgba(16,24,22,.72));color:#fff;font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;opacity:0;transform:translateY(8px);transition:.25s ease}.people-photo-button:hover .people-photo,.people-photo-button:focus-visible .people-photo{transform:scale(1.025);filter:saturate(.94)}.people-photo-button:hover .people-photo-overlay,.people-photo-button:focus-visible .people-photo-overlay{opacity:1;transform:none}.people-photo-button:focus-visible{outline:2px solid #2f7f7b;outline-offset:4px}.people-tile h3{font-family:Georgia,serif;font-size:1.65rem;line-height:1.05;margin:1rem 0 .35rem;color:#202521}.people-tile p{font-size:.9rem;line-height:1.45;color:#70746e;margin:0}.people-coming{font-size:1rem;color:#777b75;margin:0;line-height:1.6}.people-dialog{width:min(980px,calc(100vw - 2rem));max-height:88vh;padding:0;border:0;background:#f8f7f1;color:#202521;box-shadow:0 30px 90px rgba(0,0,0,.28)}.people-dialog::backdrop{background:rgba(18,24,22,.68);backdrop-filter:blur(3px)}.people-dialog-inner{position:relative;display:grid;grid-template-columns:minmax(280px,40%) minmax(0,1fr);min-height:500px}.people-dialog-inner>img{width:100%;height:100%;min-height:500px;object-fit:cover}.people-dialog-copy{padding:3.4rem 3.5rem 3rem}.people-dialog-kicker{font-size:.72rem;font-weight:700;letter-spacing:.17em;color:#2f7f7b;margin-bottom:1rem}.people-dialog-copy h2{font-family:Georgia,serif;font-size:clamp(2.4rem,4vw,4rem);line-height:1;margin:0 0 .75rem}.people-dialog-role{font-weight:600;color:#60655f;margin:0 0 1.7rem!important}.people-dialog-copy p{font-size:1rem;line-height:1.72;color:#565b56;margin:0 0 1.15rem}.people-dialog-links{display:flex;gap:1.2rem;flex-wrap:wrap;margin-top:1.6rem}.people-dialog-links a{color:#267a77;font-size:.86rem;font-weight:700;text-decoration:none}.people-dialog-close{position:absolute;top:1rem;right:1rem;width:42px;height:42px;border:1px solid rgba(32,42,39,.18);border-radius:50%;background:rgba(248,247,241,.9);font-size:1.8rem;line-height:1;color:#303632;cursor:pointer;z-index:3}.people-dialog-close:hover{background:#fff}@media(max-width:820px){.zhu-people-page{padding-left:1rem;padding-right:1rem}.people-grid,.people-grid-pi{grid-template-columns:repeat(2,minmax(0,1fr))}.people-dialog-inner{grid-template-columns:1fr}.people-dialog-inner>img{height:auto;min-height:0;aspect-ratio:16/10}.people-dialog-copy{padding:2rem 1.4rem 2.2rem}.people-dialog{max-height:92vh;overflow:auto}}@media(max-width:520px){.people-grid,.people-grid-pi{grid-template-columns:1fr}.people-section{padding:2rem 0}.people-tile h3{font-size:1.5rem}}
</style>

<script>
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('[data-dialog]').forEach(function(button){
    button.addEventListener('click',function(){
      var dialog=document.getElementById(button.getAttribute('data-dialog'));
      if(dialog&&typeof dialog.showModal==='function'){dialog.showModal();}
    });
  });
  document.querySelectorAll('.people-dialog').forEach(function(dialog){
    var close=dialog.querySelector('.people-dialog-close');
    if(close){close.addEventListener('click',function(){dialog.close();});}
    dialog.addEventListener('click',function(event){
      var rect=dialog.getBoundingClientRect();
      if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom){dialog.close();}
    });
  });
});
</script>