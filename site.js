/* Cat Card Creator: cookie notice, advertising loader and contact form helper.
   After Google AdSense approves your site, paste your publisher ID below, for example 'ca-pub-1234567890123456'. */
(function () {
  'use strict';
  var ADSENSE_CLIENT = '';          // <-- paste your AdSense publisher ID here (leave empty until approved)
  var KEY = 'cc_consent_v1';

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var adsLoaded = false;
  function loadAds() {
    // Ads load only on pages marked data-ads="on" (never inside the card editor) and only after the visitor accepts.
    if (adsLoaded || !ADSENSE_CLIENT || document.body.getAttribute('data-ads') !== 'on') return;
    adsLoaded = true;
    var s = document.createElement('script');
    s.async = true; s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(ADSENSE_CLIENT);
    document.head.appendChild(s);
  }

  var css = '#cc-banner{position:fixed;left:50%;bottom:58px;transform:translateX(-50%);z-index:2147483000;width:min(620px,calc(100% - 24px));' +
    'background:#fff6e3;color:#3a2113;border:3px solid #3a2113;border-radius:18px;box-shadow:0 6px 0 #3a2113,0 18px 40px rgba(0,0,0,.35);' +
    'padding:14px 16px;font:500 .92rem/1.45 Fredoka,system-ui,sans-serif}' +
    '#cc-banner p{margin:0 0 10px}#cc-banner a{color:#a63f00;font-weight:600}' +
    '#cc-banner .cc-row{display:flex;gap:10px;flex-wrap:wrap}' +
    '#cc-banner button{cursor:pointer;font:700 .85rem Fredoka,system-ui,sans-serif;letter-spacing:.05em;text-transform:uppercase;color:#3a2113;' +
    'border:3px solid #3a2113;border-radius:12px;padding:8px 16px;background:#ffcf4a;box-shadow:0 4px 0 #3a2113}' +
    '#cc-banner button.cc-acc{background:#ff8a1f}#cc-banner button:active{transform:translateY(3px);box-shadow:0 1px 0 #3a2113}' +
    '#cc-banner button:focus-visible{outline:4px solid #1b78d8;outline-offset:2px}' +
    '@media (prefers-color-scheme:dark){#cc-banner{background:#2d1b11;color:#fff1dc;border-color:#ffcf4a;box-shadow:0 6px 0 #ffcf4a,0 18px 40px rgba(0,0,0,.5)}#cc-banner a{color:#ffb866}}';

  function hide() { var b = document.getElementById('cc-banner'); if (b) b.remove(); }
  function show() {
    if (document.getElementById('cc-banner')) return;
    if (!document.getElementById('cc-style')) { var st = document.createElement('style'); st.id = 'cc-style'; st.textContent = css; document.head.appendChild(st); }
    var b = document.createElement('div');
    b.id = 'cc-banner'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Cookie notice');
    b.innerHTML = '<p>We use cookies and similar technology. Essential storage remembers your choice. With your permission, Google and other partners may use advertising cookies to show ads that help keep this site free. Your card text and photos never leave your device. ' +
      '<a href="privacy-policy.html">Read our Privacy Policy</a>.</p>' +
      '<div class="cc-row"><button type="button" class="cc-acc" data-cc="accepted">Accept</button><button type="button" data-cc="rejected">Reject</button></div>';
    document.body.appendChild(b);
    b.addEventListener('click', function (e) {
      var v = e.target && e.target.getAttribute && e.target.getAttribute('data-cc');
      if (!v) return;
      set(v); hide();
      if (v === 'accepted') loadAds();
    });
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-cookie-settings]') : null;
    if (t) { e.preventDefault(); show(); }
  });

  function init() {
    var c = get();
    if (c === 'accepted') loadAds();
    if (!c) show();
    // Contact form: opens the visitor's email app (no server needed)
    var f = document.getElementById('contactForm');
    if (f) f.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = f.name.value.trim(), m = f.email.value.trim(), msg = f.message.value.trim();
      if (!n || !/^\S+@\S+\.\S+$/.test(m) || !msg) { document.getElementById('cf-note').textContent = 'Please fill in your name, a valid email and a message.'; return; }
      var to = 'gold24cc@gmail.com';
      var body = msg + '\n\n---\nFrom: ' + n + ' <' + m + '>';
      location.href = 'mailto:' + to + '?subject=' + encodeURIComponent('[Cat Card Creator] ' + f.topic.value) + '&body=' + encodeURIComponent(body);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
