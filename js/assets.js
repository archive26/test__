/* ==========================================================================
   이미지 자리(slot) 로더
   - 마크업: <img data-slot="slot-name">
   - assets/img/<slot-name>.{gif|webp|png|jpg} 순서로 찾아 처음 열리는 파일을 사용
     → 같은 이름으로 파일만 넣으면 교체 끝 (GIF를 넣으면 PNG보다 우선)
   - 아무 파일도 없으면 피그마 크기 그대로 플레이스홀더 + 라벨 표시
   ========================================================================== */
(function () {
  const EXTS = ['gif', 'webp', 'png', 'jpg'];
  const BASE = 'assets/landing/img/';

  /* 자리별 설명 — 플레이스홀더 라벨과 패널 목록에 사용 */
  const SLOT_INFO = {
    'hero-hanok-door':      { screen: '01 Hero', label: '달빛 아래 열린 한옥문 (배경)' },
    'hero-cha-woojin-fan':  { screen: '01 Hero', label: '부채를 든 차우진' },
    'need-starnight':       { screen: '01-2 Need', label: '별밤 한옥 배경 (wz_cha_starnight)' },
    'preview-2027':         { screen: '02 Preview GIF', label: '나의 2027년 미리보기 (GIF)' },
    'paid-scroll':          { screen: '04 Paid Preview', label: 'Header / Scroll 두루마리' },
    'card-paper-texture':   { screen: '04 Paid Preview', label: 'Card / Paper Texture' },
    'paid-result-sheet':    { screen: '04 Paid Preview', label: '유료 결과지 시각화 예시' },
    'chapters-book':        { screen: '05 Chapters', label: 'Chapters / Book Image' },
    'chapters-scroll':      { screen: '05 Chapters', label: 'Chapters / Scroll 두루마리' },
    'hanji':                { screen: '05 Chapters · 06 Timing', label: '한지 텍스처' },
    'timing-bka04':         { screen: '06 Timing', label: 'Timing / Image / bka04 (GIF)' },
    'timing-bka02':         { screen: '06 Timing', label: 'Timing / Image / bka02 (GIF)' },
    'timing-bka07':         { screen: '06 Timing', label: 'Timing / Image / bka07 (GIF)' },
    'timing-bka05':         { screen: '06 Timing', label: 'Timing / Image / bka05 (GIF)' },
    'review-1-before':      { screen: '07 Before After Reviews', label: '후기 1 Before' },
    'review-1-after':       { screen: '07 Before After Reviews', label: '후기 1 After' },
    'review-2-before':      { screen: '07 Before After Reviews', label: '후기 2 Before' },
    'review-2-after':       { screen: '07 Before After Reviews', label: '후기 2 After' },
    'review-3-before':      { screen: '07 Before After Reviews', label: '후기 3 Before' },
    'review-3-after':       { screen: '07 Before After Reviews', label: '후기 3 After' },
    'purchase-portrait':    { screen: '10 Purchase', label: '금빛 한복의 따뜻한 웹툰 초상' },
    'logo-quantaro':        { screen: '11 Footer', label: '퀀타로 로고' },
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

  async function loadAll(root = document) {
    const imgs = [...root.querySelectorAll('img[data-slot]')].filter((i) => i.dataset.slot);
    const results = {};
    await Promise.all(imgs.map(async (img) => {
      const slot = img.dataset.slot;
      const r = await resolveSlot(slot);
      results[slot] = r;
      if (r) { img.src = r.url; img.dataset.slotExt = r.ext; tag(img, slot, r.ext); }
      else { img.style.visibility = 'hidden'; placeholder(img, slot); tag(img, slot, null); }
    }));
    return results;
  }

  window.SlotLoader = { loadAll, SLOT_INFO };
})();
