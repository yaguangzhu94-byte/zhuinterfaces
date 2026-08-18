document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.zhu-hero-copy-block h1');
  if (hero) {
    hero.innerHTML = '<span class="hero-line-one">From molecular interactions</span><br><span class="hero-line-two">to <span>sustainable systems.</span></span>';

    const style = document.createElement('style');
    style.textContent = `
      .zhu-hero-copy-block h1 .hero-line-one,
      .zhu-hero-copy-block h1 .hero-line-two {
        display: inline-block;
        white-space: nowrap;
      }
      @media (max-width: 900px) {
        .zhu-hero-copy-block h1 .hero-line-one,
        .zhu-hero-copy-block h1 .hero-line-two {
          white-space: normal;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.querySelectorAll('.xray-tech-name b').forEach(function (label) {
    if (label.textContent.trim() === 'XAS / XANES') {
      label.textContent = 'APXPS / XAS';
      const parent = label.parentElement;
      if (parent) {
        const textNodes = Array.from(parent.childNodes).filter(function (node) {
          return node.nodeType === Node.TEXT_NODE;
        });
        textNodes.forEach(function (node) { node.textContent = ''; });
        parent.appendChild(document.createTextNode('ambient-pressure photoelectron & X-ray absorption spectroscopy'));
      }
    }
  });
});
