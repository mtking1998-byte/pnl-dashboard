/* ═══════════════════════════════════════════════════════════════
   NETLINK — Interactions & Animations
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Sticky header scroll effect ─── */
  const header = document.querySelector('.header');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastScroll = scroll;
  });

  /* ─── Hero parallax (mouse movement) ─── */
  const heroVisual = document.querySelector('.hero-visual');
  const modem3d = document.querySelector('.modem-3d');
  const techTags = document.querySelectorAll('.tech-tag');
  if (heroVisual && modem3d) {
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      modem3d.style.transform = `translateY(${Math.sin(Date.now()/2000)*10}px) rotateY(${-8 + x*12}deg) rotateX(${-y*8}deg)`;
      techTags.forEach((tag, i) => {
        const factor = (i + 1) * 8;
        tag.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
    heroVisual.addEventListener('mouseleave', () => {
      modem3d.style.transform = '';
      techTags.forEach(tag => tag.style.transform = '');
    });
  }

  /* ─── Scroll reveal (Intersection Observer) ─── */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => observer.observe(el));

  /* ─── FAQ accordion ─── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ─── Wishlist toggle ─── */
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
      const svg = btn.querySelector('svg path');
      if (btn.classList.contains('active')) {
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => btn.style.transform = '', 200);
      }
    });
  });

  /* ─── Add to cart animation ─── */
  document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const original = btn.innerHTML;
      btn.innerHTML = '✓ افزوده شد';
      btn.style.background = 'var(--accent-2)';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
      }, 1500);
      // Bump cart badge
      const badge = document.querySelector('.icon-btn .badge');
      if (badge) {
        badge.textContent = parseInt(badge.textContent) + 1;
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => badge.style.transform = '', 200);
      }
    });
  });

  /* ─── Product card 3D tilt ─── */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ─── Category card tilt ─── */
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ─── Mobile nav active state ─── */
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  /* ─── Sidebar active state ─── */
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  /* ─── Generate particles in hero ─── */
  const heroBg = document.querySelector('.hero-visual');
  if (heroBg) {
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.animationDuration = (6 + Math.random() * 4) + 's';
      heroBg.appendChild(p);
    }
  }

  /* ─── Smooth scroll for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── Lazy reveal for sections without .reveal class ─── */
  const sections = document.querySelectorAll('.section, .promo-banner, .about-section, .final-cta');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  sections.forEach(s => {
    if (!s.classList.contains('reveal')) {
      s.style.opacity = '0';
      s.style.transform = 'translateY(30px)';
      s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      sectionObserver.observe(s);
    }
  });

});
