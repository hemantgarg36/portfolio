// main.js — Portfolio interactivity

/* ===========================
   NAV SCROLL BEHAVIOUR
=========================== */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const sy = window.scrollY;

  // Navbar shadow
  navbar.classList.toggle('scrolled', sy > 40);

  // Scroll-to-top button
  scrollTopBtn.classList.toggle('visible', sy > 400);

  // Active nav link
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if (sy >= top && sy < bottom) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) link.classList.add('active');
      });
    }
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===========================
   MOBILE MENU
=========================== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===========================
   INTERSECTION OBSERVER (scroll animations)
=========================== */
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ===========================
   SKILL BARS ANIMATION
=========================== */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const w = bar.getAttribute('data-width');
        setTimeout(() => { bar.style.width = w + '%'; }, 200);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillSection = document.querySelector('.skills-section');
if (skillSection) skillObserver.observe(skillSection);

/* ===========================
   COUNT-UP STATS
=========================== */
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num[data-target]').forEach(numEl => {
        const target = parseInt(numEl.getAttribute('data-target'));
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            numEl.textContent = target + '+';
            clearInterval(timer);
          } else {
            numEl.textContent = Math.floor(current);
          }
        }, 16);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) statsObserver.observe(statsSection);

/* ===========================
   PORTFOLIO FILTER
=========================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    portfolioCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const show = filter === 'all' || cat === filter;
      card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      if (show) {
        card.style.opacity = '1';
        card.style.transform = '';
        card.style.display = '';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (card.style.opacity === '0') card.style.display = 'none';
        }, 350);
      }
    });
  });
});

/* ===========================
   PROJECT MODAL with CAROUSEL
=========================== */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

let currentSlide = 0;
let autoScrollInterval = null;

function openModal(projectIndex) {
  const p = projects[projectIndex];
  currentSlide = 0;

  // Build carousel slides
  const slidesHTML = p.images.map(img =>
    `<div class="carousel-slide"><img src="${img}" alt="${p.title}" loading="lazy"/></div>`
  ).join('');

  const dotsHTML = p.images.map((_, i) =>
    `<button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></button>`
  ).join('');

  // Build links
  const linksHTML = p.links.map(link =>
    `<a href="${link.url}" target="_blank" class="modal-link ${link.type}"><i class="${link.icon}"></i>${link.label}</a>`
  ).join('');

  // Build features
  const featuresHTML = p.features.map(f =>
    `<div class="feature-item"><i class="${f.icon} feature-icon"></i><span class="feature-text">${f.text}</span></div>`
  ).join('');

  modalBody.innerHTML = `
    <div class="carousel-wrap" id="carouselWrap">
      <div class="carousel-track" id="carouselTrack">${slidesHTML}</div>
      <button class="carousel-btn carousel-prev" onclick="prevSlide()"><i class="fas fa-chevron-left"></i></button>
      <button class="carousel-btn carousel-next" onclick="nextSlide()"><i class="fas fa-chevron-right"></i></button>
      <div class="carousel-dots">${dotsHTML}</div>
    </div>
    <div class="modal-content-body">
      <span class="modal-tag">${p.tag}</span>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-desc">${p.description}</p>
      
  
    </div>
  `;
    //<p class="modal-features-title">Key Features & Deliverables</p>
    //<div class="modal-links">${linksHTML}</div>
    //<div class="modal-features">${featuresHTML}</div>
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Auto-scroll carousel
  startAutoScroll(p.images.length);
  // Scroll modal to top smoothly
  modalOverlay.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  stopAutoScroll();
}

function goToSlide(index) {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!track) return;
  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function nextSlide() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  const count = track.children.length;
  goToSlide((currentSlide + 1) % count);
}

function prevSlide() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  const count = track.children.length;
  goToSlide((currentSlide - 1 + count) % count);
}

function startAutoScroll(count) {
  stopAutoScroll();
  autoScrollInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % count);
  }, 3000);
}

function stopAutoScroll() {
  if (autoScrollInterval) { clearInterval(autoScrollInterval); autoScrollInterval = null; }
}

// Attach click handlers to portfolio cards
portfolioCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectIndex = parseInt(card.getAttribute('data-project'));
    openModal(projectIndex);
  });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (modalOverlay.classList.contains('open')) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  }
});

/* ===========================
   CONTACT FORM
=========================== */
//function handleForm(e) {
//  e.preventDefault();
//  const btn = e.target.querySelector('button[type=submit]');
//  const success = document.getElementById('formSuccess');
//  btn.textContent = 'Sending...';
//  btn.disabled = true;
//  setTimeout(() => {
//    btn.textContent = 'Message Sent!';
//    success.classList.add('show');
//    setTimeout(() => {
//      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
//      btn.disabled = false;
//      success.classList.remove('show');
//      e.target.reset();
//    }, 4000);
//  }, 1200);
//}

function handleForm(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('button[type=submit]');
  const success = document.getElementById('formSuccess');

  btn.innerHTML = 'Sending...';
  btn.disabled = true;

  emailjs
    .sendForm(
      'service_ekz6tvh',
      'template_9vrdo4b',
      form
    )
    .then(() => {
      btn.innerHTML = 'Message Sent!';
      success.classList.add('show');

      form.reset();

      setTimeout(() => {
        btn.innerHTML =
          'Send Message <i class="fas fa-paper-plane"></i>';
        btn.disabled = false;
        success.classList.remove('show');
      }, 4000);
    })
    .catch((error) => {
      console.error(error);

      btn.innerHTML =
        'Send Message <i class="fas fa-paper-plane"></i>';
      btn.disabled = false;

      alert('Failed to send message.');
    });
}
