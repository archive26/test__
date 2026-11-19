/* ==========================================================================
   이미지 자리(slot) 로더
   - 마크업: <img data-slot="slot-name">
   - assets/img/<slot-name>.{gif|webp|png|jpg} 순서로 찾아 처음 열리는 파일을 사용
     → 같은 이름으로 파일만 넣으면 교체 끝 (GIF를 넣으면 PNG보다 우선)
   - data-slot-video 가 붙은 자리는 assets/video/<slot-name>.{mp4|webm}을 먼저 찾아 영상으로 재생
   - 아무 파일도 없으면 피그마 크기 그대로 플레이스홀더 + 라벨 표시
   ========================================================================== */
(function () {
  const EXTS = ['gif', 'webp', 'png', 'jpg'];
  const BASE = 'assets/img/';

  /* 자리별 설명 — 플레이스홀더 라벨과 패널 목록에 사용 */
  const SLOT_INFO = {
    'hero-hanok-door':      { screen: '01 Hero', label: 'Hero / BG Hanok Door (배경)' },
    'hero-cha-woojin-fan':  { screen: '01 Hero', label: 'Hero / Image 차우진 (부채)' },
    'need-bg':              { screen: '02 Need', label: 'Need / Checklist Panel 배경 (별밤 한옥)' },
    'need-bg-character':    { screen: '02 Need', label: '02Need_배경+술사 (영상 390×693 — 영상 없으면 GIF로 대신)' },
    'preview-2027':         { screen: '03 Preview GIF', label: 'Preview / Hero Panel (GIF)' },
    'intro-bg-library':     { screen: '05 Intro', label: 'Intro / BG Library / Image (서재)' },
    'intro-scroll-parts':   { screen: '05 Intro', label: '두루마리 원화 (끈·봉·금테·좌우 테두리)' },
    'intro-scroll-mountain':{ screen: '05 Intro', label: '두루마리 수묵 산맥' },
    'intro-cha-woojin':     { screen: '05 Intro', label: 'Intro / Image 차우진 (사주풀이 책)' },
    'paid-scroll':          { screen: '06 Paid Preview', label: 'Header / Scroll 두루마리' },
    'card-paper-texture':   { screen: '06 Paid Preview', label: 'Card / Paper Texture' },
    'paid-result-sheet':    { screen: '06 Paid Preview', label: '유료 결과지 시각화 예시' },
    'chapters-book':        { screen: '07 Chapters', label: 'Chapters / Book Image' },
    'chapters-scroll':      { screen: '07 Chapters', label: 'Scroll Image 두루마리' },
    'chapters-stamp-tool':  { screen: '07 Chapters', label: 'Chapters / Stamp Tool 도장' },
    'hanji':                { screen: '07 Chapters · 08 Timing', label: '한지 텍스처' },
    'timing-bka04':         { screen: '08 Timing', label: 'Timing / Image / bka04 (GIF)' },
    'timing-bka02':         { screen: '08 Timing', label: 'Timing / Image / bka02 (GIF)' },
    'timing-bka07':         { screen: '08 Timing', label: 'Timing / Image / bka07 (GIF)' },
    'timing-bka05':         { screen: '08 Timing', label: 'Timing / Image / bka05 (GIF)' },
    'review-1-before':      { screen: '09 Before After Reviews', label: '후기 1 Before' },
    'review-1-after':       { screen: '09 Before After Reviews', label: '후기 1 After' },
    'review-2-before':      { screen: '09 Before After Reviews', label: '후기 2 Before' },
    'review-2-after':       { screen: '09 Before After Reviews', label: '후기 2 After' },
    'review-3-before':      { screen: '09 Before After Reviews', label: '후기 3 Before' },
    'review-3-after':       { screen: '09 Before After Reviews', label: '후기 3 After' },
    'purchase-portrait':    { screen: '12 Purchase', label: 'Purchase / Image 차우진' },
    'logo-quantaro':        { screen: '13 Footer', label: 'Footer / Logo 퀀타로' },
  };

  const cache = {}; // slot → Promise<{url, ext} | null>

  function probe(url) {
    return new Promise((resolve) => {
      const im = new Image();
      im.onload = () => resolve(true);
      im.onerror = () => resolve(false);
      im.src = url;
    });
  }

  function resolveSlot(slot) {
    if (!cache[slot]) {
      cache[slot] = (async () => {
        for (const ext of EXTS) {
          const url = `${BASE}${slot}.${ext}`;
          if (await probe(url)) return { url, ext };
        }
        return null;
      })();
    }
    return cache[slot];
  }

  function placeholder(img, slot) {
    const box = img.parentElement;
    if (!box || box.querySelector(':scope > .slot-placeholder')) return;
    const w = Math.round(box.offsetWidth), h = Math.round(box.offsetHeight);
    const info = SLOT_INFO[slot] || {};
    const ph = document.createElement('div');
    ph.className = 'slot-placeholder';
    ph.innerHTML = `<b>${info.label || slot}</b><span>${slot}</span><span>${w} × ${h}</span>`;
    box.appendChild(ph);
  }

  function tag(img, slot, ext) {
    const box = img.parentElement;
    if (!box || box.querySelector(':scope > .slot-tag')) return;
    const t = document.createElement('span');
    t.className = 'slot-tag';
    t.textContent = `${slot}${ext ? '.' + ext : ''} · ${Math.round(box.offsetWidth)}×${Math.round(box.offsetHeight)}`;
    box.appendChild(t);
  }

  /* 영상 자리(data-slot-video): assets/video/<slot-name>.{mp4|webm}이 있으면 <video>로 바꿔 끼움 */
  const VIDEO_EXTS = ['mp4', 'webm'];
  const VIDEO_BASE = 'assets/video/';
  function probeVideo(url) {
    return new Promise((resolve) => {
      const v = document.createElement('video');
      v.muted = true; v.preload = 'metadata';
      v.onloadedmetadata = () => resolve(true);
      v.onerror = () => resolve(false);
      v.src = url;
    });
  }
  async function resolveVideo(slot) {
    for (const ext of VIDEO_EXTS) {
      const url = `${VIDEO_BASE}${slot}.${ext}`;
      if (await probeVideo(url)) return { url, ext };
    }
    return null;
  }
  function swapToVideo(img, r) {
    const v = document.createElement('video');
    Object.assign(v, { src: r.url, autoplay: true, muted: true, loop: true, playsInline: true });
    v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.className = img.className;
    v.dataset.slot = img.dataset.slot; v.dataset.slotExt = r.ext;
    v.setAttribute('aria-label', img.alt || '');
    img.replaceWith(v);
    return v;
  }

  async function loadAll(root = document) {
    const imgs = [...root.querySelectorAll('img[data-slot]')].filter((i) => i.dataset.slot);
    const results = {};
    await Promise.all(imgs.map(async (img) => {
      const slot = img.dataset.slot;
      if (img.hasAttribute('data-slot-video')) {
        const rv = await resolveVideo(slot);
        if (rv) { results[slot] = rv; const v = swapToVideo(img, rv); tag(v, slot, rv.ext); return; }
      }
      const r = await resolveSlot(slot);
      results[slot] = r;
      if (r) { img.src = r.url; img.dataset.slotExt = r.ext; tag(img, slot, r.ext); }
      else { img.style.visibility = 'hidden'; placeholder(img, slot); tag(img, slot, null); }
    }));
    return results;
  }

  window.SlotLoader = { loadAll, SLOT_INFO };
})();
