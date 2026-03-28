// ─── Nav scroll ───
(function() {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

// ─── Mobile nav drawer ───
(function() {
  var hamburger = document.getElementById('navHamburger');
  var overlay = document.getElementById('mobileNavOverlay');
  var closeBtn = document.getElementById('mobileNavClose');
  if (!hamburger || !overlay) return;

  function open() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-nav-drawer')) close();
  });
  overlay.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function() { close(); });
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();

// ─── CTA Pill Morph ───
(function() {
  var pill = document.getElementById('ctaPill');
  if (!pill) return;
  var input = pill.querySelector('.cta-pill__input');
  var submit = pill.querySelector('.cta-pill__submit');

  function submitEmail() {
    var email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.focus();
      return;
    }
    var a = document.createElement('a');
    a.href = 'mailto:will@theleadership-circle.com';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    pill.classList.add('is-thanked');
    input.value = '';
    setTimeout(function() { pill.classList.remove('is-thanked'); }, 2200);
  }

  submit.addEventListener('click', function(e) { e.preventDefault(); submitEmail(); });
  input.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); submitEmail(); } });
})();
