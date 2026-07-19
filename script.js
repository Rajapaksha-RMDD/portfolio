// ===== Starfield canvas =====
(function starfield(){
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w, h, stars, shootingStars = [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight * Math.max(3, document.body.scrollHeight / window.innerHeight);
    canvas.style.height = document.body.scrollHeight + 'px';
    initStars();
  }

  function initStars(){
    const count = Math.floor((w * h) / 9000);
    stars = Array.from({ length: Math.min(count, 400) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      a: Math.random() * 0.6 + 0.2,
      tw: Math.random() * 0.02 + 0.005,
      dir: Math.random() > 0.5 ? 1 : -1
    }));
  }

  function maybeSpawnShootingStar(){
    if (reduceMotion) return;
    if (Math.random() < 0.004 && shootingStars.length < 2){
      const startX = Math.random() * w * 0.6 + w * 0.2;
      const startY = Math.random() * h * 0.4;
      shootingStars.push({
        x: startX, y: startY,
        vx: 6 + Math.random() * 4,
        vy: 3 + Math.random() * 2,
        life: 1
      });
    }
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    for (const s of stars){
      s.a += s.tw * s.dir;
      if (s.a > 0.9 || s.a < 0.15) s.dir *= -1;
      ctx.beginPath();
      ctx.fillStyle = `rgba(196,181,253,${s.a})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    maybeSpawnShootingStar();
    shootingStars = shootingStars.filter(s => s.life > 0);
    for (const s of shootingStars){
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 8, s.y - s.vy * 8);
      grad.addColorStop(0, `rgba(255,255,255,${s.life})`);
      grad.addColorStop(1, 'rgba(196,181,253,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
      ctx.stroke();
      s.x += s.vx; s.y += s.vy; s.life -= 0.02;
    }

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
  if (reduceMotion) draw();
})();

// ===== Cursor glow =====
(function cursorGlow(){
  const glow = document.getElementById('cursorGlow');
  if (!glow || !window.matchMedia('(hover:hover)').matches) return;
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = (e.clientY + window.scrollY) + 'px';
  });
})();

// ===== Active nav link on scroll =====
(function activeNavLink(){
  const links = document.querySelectorAll('.main-nav a');
  const sections = Array.from(links)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = document.querySelector(`.main-nav a[href="${id}"]`);
      if (!link) return;
      if (entry.isIntersecting){
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));
})();

// ===== Locked header (adds background/blur on scroll) =====
(function lockedHeader(){
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ===== Mobile nav toggle =====
(function nav(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
})();

// ===== Services accordion =====
(function accordion(){
  const rows = document.querySelectorAll('.service-row');
  rows.forEach((row, i) => {
    const head = row.querySelector('.service-head');
    head.addEventListener('click', () => {
      const wasOpen = row.classList.contains('open');
      rows.forEach(r => r.classList.remove('open'));
      if (!wasOpen) row.classList.add('open');
    });
    if (i === 0) row.classList.add('open');
  });
})();

// ===== Scroll reveal for sections =====
(function scrollReveal(){
  const targets = document.querySelectorAll('.section, .project-row');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(t => {
    t.style.opacity = 0;
    t.style.transform = 'translateY(24px)';
    t.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    io.observe(t);
  });
})();

// ===== Staggered reveal for more-project cards =====
(function staggerCards(){
  const cards = document.querySelectorAll('.more-card');
  if (!cards.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        const idx = Array.from(cards).indexOf(entry.target);
        entry.target.style.transitionDelay = (idx % 3) * 0.08 + 's';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(20px)';
    c.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(c);
  });
})();

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Scroll progress bar =====
(function progressBar(){
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

// ===== Magnetic buttons =====
(function magneticButtons(){
  if (!window.matchMedia('(hover:hover)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });
})();

// ===== Tilt cards (project visuals) =====
(function tiltCards(){
  if (!window.matchMedia('(hover:hover)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.tilt-card').forEach(card => {
    const visual = card.querySelector('.project-visual');
    if (!visual) return;
    card.addEventListener('mousemove', (e) => {
      const rect = visual.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      visual.style.transform = `translateY(-4px) rotateX(${py * -10}deg) rotateY(${px * 10}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      visual.style.transform = '';
    });
  });
})();
