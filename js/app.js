/* ==========================================================================
   데모 로직 — 렌더링 · 인터랙션 · 상태 전환
   ========================================================================== */
(function () {
  const D = window.DEMO_DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const viewport = $('#viewport');
  const won = (n) => n.toLocaleString('ko-KR') + '원';
  const tpl = (id) => $(id).content.firstElementChild.cloneNode(true);

  /* ------------------------------------------------------------------
     렌더: 01-2 Need / Check Card ×6
     ------------------------------------------------------------------ */
  function renderNeed() {
    const wrap = $('#need-checklist');
    const { start, step, dur } = D.needTiming;
    D.needChecks.forEach((c, i) => {
      const el = tpl('#tpl-need-check');
      el.dataset.node = c.node;
      el.dataset.align = c.align;
      Object.assign(el.style, { left: c.left + 'px', top: c.top + 'px', width: c.w + 'px', background: c.bg });
      el.style.setProperty('--delay', (start + step * i).toFixed(2) + 's');
      el.style.setProperty('--dur', dur + 's');
      el.querySelector('.need-check__text').innerHTML = `${c.text}<b>${c.bold}</b>`;
      wrap.appendChild(el);
    });
  }

  /* ------------------------------------------------------------------
     렌더: 05 Intro — Sequential Slam 카드 ×3 / 두루마리 Content
     ------------------------------------------------------------------ */
  function renderIntro() {
    const S = D.introSlam;
    const stack = $('#intro-slam');
    const sh = S.shards;
    const shard = document.createElement('div');
    shard.className = 'slam-shards absolute';
    Object.assign(shard.dataset, { component: sh.name, node: sh.node, motion: 'slam-shards' });
    Object.assign(shard.style, { left: sh.left + 'px', top: sh.top + 'px', width: sh.w + 'px', height: sh.h + 'px' });
    shard.style.setProperty('--delay', sh.delay + 's');
    shard.innerHTML = '<img src="assets/svg/intro-slam/shards.svg" alt="" class="absolute left-0 top-[-1.43px] h-[74.43px] w-[32.29px] max-w-none" />';
    stack.appendChild(shard);
    S.cards.forEach((c) => {
      const el = tpl('#tpl-slam-card');
      const [l, t, w, h] = c.wrap;
      Object.assign(el.style, { left: l + 'px', top: t + 'px', width: w + 'px', height: h + 'px' });
      el.dataset.node = c.node;
      const card = el.querySelector('.slam-card');
      card.dataset.component = c.name;
      card.style.transform = `rotate(${c.rot}deg)`;
      const body = el.querySelector('.slam-card__body');
      body.style.setProperty('--delay', c.delay + 's');
      body.style.setProperty('--drop', -c.drop + 'px');
      body.style.setProperty('--s0', c.scale);
      body.style.setProperty('--sq', c.squash);
      body.style.setProperty('--shake', c.shake + 'px');
      body.querySelector('.slam-card__slab').src = `assets/svg/intro-slam/${c.slab}.svg`;
      const parts = body.querySelector('.slam-card__parts');
      c.parts.forEach(([f, inset, inner]) => {
        const p = document.createElement('div');
        p.className = 'absolute';
        p.style.inset = inset;
        p.innerHTML = inner
          ? `<div class="absolute" style="inset:${inner}"><img src="assets/svg/intro-slam/${f}.svg" alt="" class="block size-full max-w-none" /></div>`
          : `<img src="assets/svg/intro-slam/${f}.svg" alt="" class="absolute inset-0 block size-full max-w-none" />`;
        parts.appendChild(p);
      });
      const tx = body.querySelector('.slam-card__text');
      Object.assign(tx.style, { left: c.text.left + 'px', width: c.text.w + 'px' });
      tx.querySelector('.slam-card__label').textContent = c.text.label;
      tx.querySelector('.slam-card__quote').textContent = c.text.quote;
      const note = tx.querySelector('.slam-card__note'); note.textContent = c.text.note; note.style.lineHeight = c.text.noteLh + 'px';
      stack.appendChild(el);
    });
    $('[data-motion="intro-q1"]').style.setProperty('--delay', S.questions.lead + 's');
    $('[data-motion="intro-q2"]').style.setProperty('--delay', S.questions.main + 's');

    /* 두루마리 Content */
    const C = D.introScroll;
    const box = $('#intro-scroll-content');
    const add = (parent, cls, html, d, node) => {
      const p = document.createElement('p');
      p.className = cls; p.innerHTML = html; p.dataset.motion = 'scroll-text';
      p.style.setProperty('--delay', d + 's');
      if (node) p.dataset.node = node;
      parent.appendChild(p); return p;
    };
    add(box, 'scroll-eyebrow', C.eyebrow.text, C.eyebrow.d, C.eyebrow.node).dataset.component = 'Eyebrow';
    C.items.forEach((it, i) => {
      if (i > 0) { const dv = document.createElement('div'); dv.className = 'scroll-divider'; dv.dataset.component = 'Divider'; box.appendChild(dv); }
      const sec = document.createElement('div');
      sec.className = 'scroll-section'; sec.dataset.component = `Section ${it.no}`; sec.dataset.node = it.node;
      add(sec, 'scroll-section__no', it.no, it.d.no).dataset.component = 'Number';
      add(sec, 'scroll-section__title', it.title, it.d.title).dataset.component = 'Title';
      add(sec, 'scroll-section__desc', it.desc.join('<br>'), it.d.desc).dataset.component = 'Desc';
      if (it.note) add(sec, 'scroll-section__note', it.note.join('<br>'), it.d.note).dataset.component = 'Note';
      box.appendChild(sec);
    });
  }

  /* ------------------------------------------------------------------
     렌더: 03 Month Grid / Legend
     ------------------------------------------------------------------ */
  function renderMonths() {
    const grid = $('#month-grid');
    for (let r = 0; r < 3; r++) {
      const row = document.createElement('div');
      row.className = 'month-row';
      row.dataset.component = `Month Row ${r + 1}`;
      D.months.slice(r * 4, r * 4 + 4).forEach((m) => {
        const el = tpl('#tpl-month-cell');
        el.dataset.component = `Month · ${m.m}월`;
        el.dataset.variant = m.highlight ? 'highlight' : 'default';
        el.querySelector('.month-cell__num span').textContent = m.m;
        el.querySelector('.month-cell__label').textContent = m.label;
        row.appendChild(el);
      });
      grid.appendChild(row);
    }
    const legend = $('#month-legend');
    D.legend.forEach((l) => {
      const el = tpl('#tpl-legend-row');
      el.dataset.component = `Legend · ${l.name}`;
      el.dataset.variant = l.highlight ? 'highlight' : 'default';
      el.querySelector('.legend-row__name').textContent = l.name;
      el.querySelector('.legend-row__desc').innerHTML = `${l.months}<i>월</i>`;
      legend.appendChild(el);
    });
  }

  /* ------------------------------------------------------------------
     렌더: 04 Paid Preview 01~04
     ------------------------------------------------------------------ */
  function renderPaid() {
    const wrap = $('#paid-previews');
    D.paidPreviews.forEach((p) => {
      const el = tpl('#tpl-paid-preview');
      el.dataset.component = `Preview ${p.no} · ${p.name}`;
      el.dataset.node = p.node;
      Object.assign(el.style, { top: p.top + 'px', height: p.h + 'px' });
      const num = el.querySelector('.paid-preview__num'); num.textContent = p.no; num.style.top = p.t.num + 'px'; num.dataset.font = p.numFont;
      const q = el.querySelector('.paid-preview__q'); q.textContent = p.q; q.style.top = p.t.q + 'px';
      const d = el.querySelector('.paid-preview__desc'); d.innerHTML = p.desc.join('<br>'); d.style.top = p.t.desc + 'px';
      const card = el.querySelector('.paid-preview__card'); Object.assign(card.style, { top: p.card.top + 'px', height: p.card.h + 'px' });
      const inner = el.querySelector('.paid-preview__inner'); Object.assign(inner.style, { left: '9px', top: p.inner.top + 'px', height: p.inner.h + 'px' });
      const imgBox = el.querySelector('.paid-preview__img'); Object.assign(imgBox.style, { top: p.img.top + 'px', height: p.img.h + 'px' });
      Object.assign(imgBox.querySelector('img').style, { left: '-1.09%', width: '101.89%', top: p.img.crop.t + '%', height: p.img.crop.h + '%' });
      const blur = el.querySelector('.paid-preview__blur');
      Object.assign(blur.style, { left: p.blur.left + 'px', top: p.blur.top + 'px', width: p.blur.w + 'px', height: p.blur.h + 'px' });
      const bIn = blur.firstElementChild; Object.assign(bIn.style, { left: p.blur.inLeft + 'px', top: p.blur.inTop + 'px' });
      Object.assign(bIn.querySelector('img').style, { left: p.blur.crop.l + '%', top: p.blur.crop.t + '%' });
      wrap.appendChild(el);
    });
  }

  /* ------------------------------------------------------------------
     렌더: 05 Chapters
     ------------------------------------------------------------------ */
  function renderChapters() {
    const list = $('#chapter-list');
    D.chapters.forEach((c, i) => {
      const el = tpl('#tpl-chapter');
      el.dataset.component = `Chapter ${i}`;
      el.querySelector('.chapter__no').textContent = c.no;
      el.querySelector('.chapter__name').textContent = c.name;
      el.querySelector('.chapter__desc p').textContent = c.desc;
      const s = c.stamp;
      const st = el.querySelector('.stamp');
      st.dataset.component = `Stamp_0${i}_${(c.no + c.name).replace(/^제\d장/, '').replace(/\s/g, '')}`;
      st.dataset.node = s.node;
      // 중심(cx, 70) 기준 배치 + 중심 회전
      Object.assign(st.style, { left: (s.cx - s.w / 2) + 'px', top: '51px', width: s.w + 'px', transform: `rotate(${-s.rot}deg)` });
      st.querySelector('.stamp__text').textContent = s.text;
      st.querySelector('.stamp__body').style.setProperty('--delay', (D.stampTiming.start + D.stampTiming.step * i).toFixed(2) + 's');
      list.appendChild(el);
    });
  }

  /* ------------------------------------------------------------------
     렌더: 06 Timing Cards + Lantern
     ------------------------------------------------------------------ */
  function renderTiming() {
    const wrap = $('#timing-cards');
    D.timingCards.forEach((c, i) => {
      const el = tpl('#tpl-timing-card');
      el.dataset.component = `Timing / Card ${i + 1} · ${c.ch}`;
      el.dataset.node = c.node;
      const img = el.querySelector('.timing-card__img');
      img.dataset.component = `Timing / Image / ${c.imgName}`;
      img.style.height = c.h + 'px';
      c.slot.forEach((s) => { const im = document.createElement('img'); im.dataset.slot = s; im.alt = ''; img.appendChild(im); });
      const tagSpans = el.querySelectorAll('[data-component="Timing / Tag"] span');
      tagSpans[0].textContent = c.ch; tagSpans[1].textContent = c.name;
      const head = el.querySelector('.timing-card__head'); head.innerHTML = c.head.join('<br>'); head.style.lineHeight = c.lh + 'px'; head.className += ' ' + c.headFont;
      el.querySelector('.timing-card__quote').innerHTML = c.quote.join('<br>');
      const more = el.querySelector('.timing-card__more'); more.textContent = c.more; more.classList.add('font-' + c.moreFont);
      wrap.appendChild(el);
    });
  }

  /* ------------------------------------------------------------------
     렌더: 07 / 08 Reviews
     ------------------------------------------------------------------ */
  function renderReviews() {
    const ba = $('#ba-reviews');
    D.baReviews.forEach((r, i) => {
      const el = tpl('#tpl-ba-review');
      el.dataset.component = `Review / Card ${i + 1}`;
      const [before, after] = el.querySelectorAll('img[data-slot]');
      before.dataset.slot = `review-${i + 1}-before`;
      after.dataset.slot = `review-${i + 1}-after`;
      after.parentElement.dataset.variant = r.afterVariant || 'full';
      const a = el.querySelectorAll('[data-component="Review / Author"] span');
      a[0].textContent = r.name; a[1].textContent = r.role;
      el.querySelector('.ba-headline').textContent = r.headline;
      el.querySelector('.ba-body').innerHTML = r.body.join('<br>');
      ba.appendChild(el);
    });
    const make = (copy) => D.reviews.map((r, i) => {
      const el = tpl('#tpl-review-card');
      el.dataset.component = `Review Card 0${i + 1}${copy ? ' (Loop Copy)' : ''}`;
      if (r.variant) el.dataset.variant = r.variant;
      el.querySelector('.review-card__text').textContent = r.text;
      const m = el.querySelectorAll('[data-component="Review / Meta"] span');
      m[0].textContent = r.name; m[1].textContent = r.date;
      return el;
    });
    $('#review-list').append(...make(false));
    $('#review-list-copy').append(...make(true));
  }

  /* ------------------------------------------------------------------
     렌더: 11 Footer
     ------------------------------------------------------------------ */
  function renderFooter() {
    $('#company-info').innerHTML = D.company.map(([t, d]) =>
      `<div class="company-row" data-component="Company Info · ${t}"><dt>${t}</dt><dd>${d}</dd></div>`).join('');
  }

  /* ------------------------------------------------------------------
     스크롤 (피그마: SCROLL_TO · SCROLL_ANIMATE 0.4s)
     ------------------------------------------------------------------ */
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  function scrollToEl(el, duration = 400, offset = 0) {
    const start = viewport.scrollTop;
    const target = Math.min(
      el.getBoundingClientRect().top - viewport.getBoundingClientRect().top + start - offset,
      viewport.scrollHeight - viewport.clientHeight);
    const t0 = performance.now();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { viewport.scrollTop = target; return; }
    (function step(now) {
      const p = Math.min(1, (now - t0) / duration);
      viewport.scrollTop = start + (target - start) * easeOutCubic(p);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ------------------------------------------------------------------
     토스트 (임시 링크 안내)
     ------------------------------------------------------------------ */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.dataset.show = 'true';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (t.dataset.show = 'false'), 2200);
  }

  /* ------------------------------------------------------------------
     02 Free Check — 날짜 선택 (실동작)
     ------------------------------------------------------------------ */
  const form = $('#free-check');
  const sel = { year: form.elements.year, month: form.elements.month, day: form.elements.day };
  const resultBox = $('#free-result');
  const msg = $('#free-check-msg');
  const submitBtn = form.querySelector('button[type="submit"]');
  let failNext = false;
  let pending = null;

  const daysIn = (y, m) => new Date(y, m, 0).getDate();
  function fillOptions(select, values, placeholder) {
    const cur = select.value;
    select.innerHTML = `<option value="">${placeholder}</option>` + values.map((v) => `<option value="${v}">${v}</option>`).join('');
    if (values.map(String).includes(cur)) select.value = cur;
  }
  function syncDays() {
    const y = +sel.year.value || 2000, m = +sel.month.value;
    const max = m ? daysIn(y, m) : 31;
    const prev = sel.day.value;
    fillOptions(sel.day, Array.from({ length: max }, (_, i) => i + 1), '일');
    if (prev && +prev > max) sel.day.value = ''; // 2/30 등 → 선택 해제
  }
  function syncDisplay() {
    for (const k of ['year', 'month', 'day']) {
      const box = sel[k].closest('.birth-select');
      box.querySelector('.birth-select__value').textContent = sel[k].value;
      if (sel[k].value) box.dataset.invalid = 'false';
    }
  }
  function initSelects() {
    const [a, b] = D.freeCheck.yearRange;
    fillOptions(sel.year, Array.from({ length: b - a + 1 }, (_, i) => b - i), '년도');
    fillOptions(sel.month, Array.from({ length: 12 }, (_, i) => i + 1), '월');
    syncDays();
  }
  function setValues(v) {
    sel.year.value = v ? v.year : ''; sel.month.value = v ? v.month : '';
    syncDays(); sel.day.value = v ? v.day : '';
    syncDisplay();
  }

  /* 상태: empty | invalid | loading | error | result */
  function setState(state, opts = {}) {
    clearTimeout(pending);
    const formState = state === 'invalid' ? 'invalid' : state === 'loading' ? 'loading' : $$('select', form).every((s) => s.value) ? 'filled' : 'empty';
    form.dataset.state = formState;
    msg.textContent = state === 'invalid' ? D.freeCheck.messages.invalid : '';
    $$('.birth-select', form).forEach((b) => (b.dataset.invalid = String(state === 'invalid' && !b.querySelector('select').value)));
    submitBtn.disabled = state === 'loading';
    submitBtn.dataset.loading = String(state === 'loading');
    submitBtn.querySelector('.cta-primary__label').textContent = state === 'loading' ? '확인 중…' : '내 2027년 무료 운세 확인하기';

    // 로딩 중에는 직전 화면(결과/빈 상태)을 그대로 두고 그 위에 로딩 표시만 덮는다 → 페이지 높이·스크롤 위치 유지
    if (state === 'loading') resultBox.dataset.keep = resultBox.dataset.state === 'loading' ? resultBox.dataset.keep : resultBox.dataset.state;
    else delete resultBox.dataset.keep;
    resultBox.dataset.state = state === 'invalid' ? 'empty' : state;
    if (state === 'result') {
      const y = sel.year.value || D.freeCheck.initial.year, m = sel.month.value || D.freeCheck.initial.month, d = sel.day.value || D.freeCheck.initial.day;
      $('#free-result-title').textContent = `${y}년 ${m}월 ${d}일생의 2027년`;
    }
    $$('#panel-states button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setState === state)));
  }

  function submit() {
    const ok = $$('select', form).every((s) => s.value);
    if (!ok) { setState('invalid'); return; }
    setState('loading'); // 스크롤 이동 없음 — 보고 있던 화면 그대로
    pending = setTimeout(() => {
      if (failNext) { failNext = false; $('#panel-fail-next').checked = false; setState('error'); }
      else setState('result');
    }, D.freeCheck.loadingMs);
  }

  function bindFreeCheck() {
    initSelects();
    if (D.freeCheck.initialState === 'result') setValues(D.freeCheck.initial); else setValues(null);
    setState(D.freeCheck.initialState);
    Object.values(sel).forEach((s) => s.addEventListener('change', () => {
      if (s === sel.year || s === sel.month) syncDays();
      syncDisplay();
      if (form.dataset.state === 'invalid' && $$('select', form).every((x) => x.value)) { form.dataset.state = 'filled'; msg.textContent = ''; }
    }));
    form.addEventListener('submit', (e) => { e.preventDefault(); submit(); });
    $('[data-action="retry"]').addEventListener('click', submit);
  }

  /* ------------------------------------------------------------------
     10 Purchase — 구성 선택
     ------------------------------------------------------------------ */
  let selectedOption = D.defaultOption;
  function renderOptions() {
    const wrap = $('#purchase-options');
    D.options.forEach((o, i) => {
      const el = tpl('#tpl-option');
      el.dataset.component = `Option ${i + 1} · ${o.name}`;
      el.dataset.id = o.id;
      el.querySelector('.option__name').textContent = o.name;
      el.querySelector('.option__compare').textContent = o.compare ? won(o.compare) : '';
      el.querySelector('.saving-badge').textContent = o.saving ? `${won(o.saving)} 절약` : '';
      el.querySelector('.option__final').textContent = won(o.price);
      el.addEventListener('click', () => selectOption(o.id));
      wrap.appendChild(el);
    });
    const seg = $('#panel-options');
    D.options.forEach((o) => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = won(o.price); b.dataset.opt = o.id;
      b.addEventListener('click', () => selectOption(o.id)); seg.appendChild(b);
    });
    selectOption(selectedOption);
  }
  function selectOption(id) {
    selectedOption = id;
    const o = D.options.find((x) => x.id === id);
    $$('#purchase-options .option').forEach((el) => {
      const on = el.dataset.id === id;
      el.dataset.selected = String(on); el.setAttribute('aria-checked', String(on));
    });
    $('#purchase-button-label').textContent = `${won(o.price)} 구매하기`;
    $$('#panel-options button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.opt === id)));
  }

  /* ------------------------------------------------------------------
     Sticky / Bottom CTA(BottomBar) 카운트다운
     ------------------------------------------------------------------ */
  function tickCountdown() {
    const ms = Math.max(0, new Date(D.countdownTarget) - Date.now());
    const s = Math.floor(ms / 1000);
    const dd = Math.floor(s / 86400), hh = Math.floor((s % 86400) / 3600), mm = Math.floor((s % 3600) / 60), ss = s % 60;
    const p = (n) => String(n).padStart(2, '0');
    $('#countdown').textContent = `${dd}일 ${p(hh)}:${p(mm)}:${p(ss)}`;
  }

  /* ------------------------------------------------------------------
     공통 액션
     ------------------------------------------------------------------ */
  function bindActions() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('[data-action]');
      if (!a) return;
      const act = a.dataset.action;
      if (act === 'scroll-to-free-check') scrollToEl($('#free-check'), 400, 24);
      else if (act === 'scroll-to-purchase') scrollToEl($('#s12'), 400, 0);
      else if (act === 'external') {
        window.open(D.externalUrl, D.externalTarget, 'noopener');
        toast(`${a.dataset.component} → ${D.externalUrl}`);
      } else if (act === 'temp-link') { e.preventDefault(); toast(`[임시 링크] ${a.dataset.label} — URL 확인 후 연결`); }
    });
  }

  /* ------------------------------------------------------------------
     390px 바깥에서도 스크롤 — 휠·키보드 입력을 UI 스크롤 영역(#viewport)으로 전달
     (데모 패널 위에서는 패널 자체가 스크롤)
     ------------------------------------------------------------------ */
  function bindOuterScroll() {
    const outside = (t) => !viewport.contains(t) && !t.closest('.panel');
    window.addEventListener('wheel', (e) => {
      if (!outside(e.target) || e.ctrlKey) return; // ctrl+휠(확대)은 그대로
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? viewport.clientHeight : 1;
      viewport.scrollTop += e.deltaY * unit;
      e.preventDefault();
    }, { passive: false });
    const KEYS = { ArrowDown: 40, ArrowUp: -40, PageDown: 'page', PageUp: '-page', ' ': 'page', Home: 'home', End: 'end' };
    window.addEventListener('keydown', (e) => {
      const t = e.target;
      if (!(e.key in KEYS) || t.closest('.panel') || viewport.contains(t) || /^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(t.tagName)) return;
      const k = KEYS[e.key], page = viewport.clientHeight * 0.9;
      if (k === 'home') viewport.scrollTop = 0;
      else if (k === 'end') viewport.scrollTop = viewport.scrollHeight;
      else viewport.scrollTop += k === 'page' ? (e.shiftKey ? -page : page) : k === '-page' ? -page : k;
      e.preventDefault();
    });
  }

  /* ------------------------------------------------------------------
     모션 트리거 (섹션이 30% 보이면 .is-in)
     ------------------------------------------------------------------ */
  let io;
  function bindMotion() {
    io = new IntersectionObserver((entries) => entries.forEach((en) => {
      // data-motion-scope가 있으면 그 요소(모션 요소들의 부모)에 .is-in을 붙인다
      if (!en.isIntersecting) return;
      const scope = en.target.dataset.motionScope;
      (scope ? $$(scope) : [en.target]).forEach((el) => el.classList.add('is-in'));
      io.unobserve(en.target);
    }), { root: viewport, threshold: 0.3 });
    MOTION_TARGETS.forEach((s) => io.observe($(s)));
  }
  // 모션 묶음: 01 인물 · 02 체크 카드 · 05 충돌 카드(장면 1) · 05 두루마리 · 07 도장 도구(머리말) · 07 도장(목차 목록)
  const MOTION_TARGETS = ['#s01', '#need-checklist', '#intro-slam', '#intro-scroll', '#chapters-head', '#chapter-list'];
  function replayMotion() {
    $$('.is-in').forEach((el) => el.classList.remove('is-in'));
    void document.body.offsetWidth;
    MOTION_TARGETS.forEach((s) => io.observe($(s)));
  }

  /* ------------------------------------------------------------------
     데모 패널
     ------------------------------------------------------------------ */
  function bindPanel(slotResults) {
    const chips = $('#panel-screens');
    D.screens.forEach(([id, name]) => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = name;
      b.addEventListener('click', () => scrollToEl($('#' + id), 400, 0)); chips.appendChild(b);
    });
    $$('#panel-states button').forEach((b) => b.addEventListener('click', () => {
      const st = b.dataset.setState;
      if (st === 'empty') { setValues(null); setState('empty'); }
      else if (st === 'invalid') { if ($$('select', form).every((s) => s.value)) setValues(null); setState('invalid'); }
      else if (st === 'result') { if (!$$('select', form).every((s) => s.value)) setValues(D.freeCheck.initial); setState('result'); }
      else setState(st);
      scrollToEl($('#s03 form'), 400, 120);
    }));
    $('#panel-fail-next').addEventListener('change', (e) => (failNext = e.target.checked));
    $('#panel-slots').addEventListener('change', (e) => document.body.classList.toggle('show-slots', e.target.checked));
    $('#panel-replay').addEventListener('click', () => { viewport.scrollTop = 0; replayMotion(); });

    // 패널 서랍 — 화면이 좁으면 닫힌 채로 시작 (UI가 패널에 가려지지 않게)
    const toggle = $('#panel-toggle');
    const setOpen = (open) => { document.body.classList.toggle('panel-closed', !open); toggle.textContent = open ? '패널 닫기' : '데모 패널'; toggle.setAttribute('aria-expanded', String(open)); };
    setOpen(innerWidth >= 390 + 2 * 340);
    toggle.addEventListener('click', () => setOpen(document.body.classList.contains('panel-closed')));

    // 컴포넌트 이름 툴팁
    const tip = document.createElement('div'); tip.className = 'node-tip'; document.body.appendChild(tip);
    $('#panel-nodes').addEventListener('change', (e) => { document.body.classList.toggle('show-nodes', e.target.checked); tip.style.display = 'none'; });
    viewport.addEventListener('mousemove', (e) => {
      if (!document.body.classList.contains('show-nodes')) return;
      const c = e.target.closest('[data-component]');
      if (!c) { tip.style.display = 'none'; return; }
      tip.textContent = c.dataset.component + (c.dataset.node ? `  #${c.dataset.node}` : '') + (c.dataset.variant ? `  [${c.dataset.variant}]` : '');
      tip.style.display = 'block'; tip.style.left = e.clientX + 12 + 'px'; tip.style.top = e.clientY + 12 + 'px';
    });
    viewport.addEventListener('mouseleave', () => (tip.style.display = 'none'));

    // 이미지 자리 현황
    const list = $('#panel-slot-list');
    Object.entries(window.SlotLoader.SLOT_INFO).forEach(([slot, info]) => {
      const r = slotResults[slot];
      const li = document.createElement('li');
      const cls = !r ? 'ph' : r.ext === 'gif' ? 'gif' : 'ok';
      li.innerHTML = `<span>${slot}</span><span class="${cls}">${!r ? '플레이스홀더' : r.ext}</span>`;
      li.title = `${info.screen} · ${info.label}`;
      list.appendChild(li);
    });
  }

  /* ------------------------------------------------------------------
     init
     ------------------------------------------------------------------ */
  if (/[?&]flat\b/.test(location.search)) document.body.classList.add('flat');
  if (innerWidth < 390 + 2 * 340) document.body.classList.add('panel-closed');
  renderNeed(); renderIntro(); renderMonths(); renderPaid(); renderChapters(); renderTiming(); renderReviews(); renderFooter();
  renderOptions(); bindFreeCheck(); bindActions(); bindMotion(); bindOuterScroll();
  tickCountdown(); setInterval(tickCountdown, 1000);
  window.SlotLoader.loadAll().then(bindPanel);
})();
