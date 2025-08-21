// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
// ===== TYPING EFFECT =====
  const quotes = [
    "“Keep pushing, keep climbing 🚀”",
    "“Dream it. Build it. Ship it 💻”",
    "“Success = Consistency + Effort 🔥”",
    "“Code hard, stay humble 🙌”"
  ];

  let index = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing");
  let isDeleting = false;

  function typeEffect() {
    const currentQuote = quotes[index];

    if (isDeleting) {
      typingElement.textContent = currentQuote.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentQuote.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentQuote.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % quotes.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);
