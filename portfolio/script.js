// ===== Starfield canvas =====
(function starfield(){
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w, h, stars, mx = 0, my = 0;
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

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
