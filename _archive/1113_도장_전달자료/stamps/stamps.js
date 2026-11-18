// 퀀타로 2027 결과지 — 챕터 낙관 스크롤 재생 (1차 디자인, 2026-11-13)
// - 각 도장이 화면 아래쪽 22%를 뺀 영역에 60% 이상 보이면 한 번만 재생
// - 한 번 찍힌 도장은 위로/아래로 다시 스크롤해도 유지되고 다시 재생되지 않음
// - 페이지를 새로 열면 처음 상태로 초기화
(function () {
  var stamps = document.querySelectorAll('.stamp');
  if (!stamps.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    stamps.forEach(function (s) { s.classList.add('is-stamped'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-stamped');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -22% 0px', threshold: 0.6 });

  stamps.forEach(function (s) { io.observe(s); });
})();
