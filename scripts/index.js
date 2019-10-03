"use strict";

((d, w) => {
  w.addEventListener('DOMContentLoaded', () => {
    const scrollElements = [...d.querySelectorAll('.js-animate-scroll:not([href="#"])')];

    if (!scrollElements.length) return;

    const animateScroll = e => {
      e.preventDefault();

      const targetId = e.target.hash;

      if (!targetId.length) return;

      const target = d.querySelector(targetId);
      const scrollToPos = target.offsetTop;

      w.scroll({ top: scrollToPos, left: 0, behavior: 'smooth' });
    };

    scrollElements.forEach( scrollElement => scrollElement.addEventListener('click', animateScroll));
  });
})(document, window);
