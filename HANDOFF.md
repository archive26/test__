# HANDOFF — 2027 신년운세 · 모바일 랜딩 (최종)

> 확정일 2026-11-20 · 이 문서와 데모(`index.html`)의 이름(화면·컴포넌트·토큰·이미지 자리)은 모두 같다.
> 함께 읽을 문서: **`BUTTONS.md`**(버튼·링크 이동, 입력 전/후 화면, **담당자 결정 필요 3가지**) · **`DECISIONS.md`**(피그마에서 애매해 임의로 정한 것, D-번호).
> 글꼴 파일(서강대체 `SOGANGUNIVERSITYTTF.woff2`, Flight Sans `FlightSansOTF-Title.otf`·`FlightSansOTF-Bold.otf`)은 GitHub에 올리지 않고 **제출 zip에만** 넣는다. Flight Sans는 재배포 조건에 따라 `assets/fonts/FlightSans_license.pdf`를 함께 둔다.

---

## 0. 먼저 볼 것 — 담당자 결정 필요

디자인·기획에 정확한 값이 없어 데모가 **임시 동작**으로 채운 3가지다. 상세와 바꿀 위치는 `BUTTONS.md` 0장.

| # | 항목 | 지금 데모 (잠정) | 정할 것 |
|---|---|---|---|
| 1 | CTA 이동 화면 | 구매 버튼 4개 모두 `https://quantaro.kr/newyear2027`, 선택 구성은 넘기지 않음 | 버튼별 이동 화면, 구성 전달 방식, 같은 창/새 탭 |
| 2 | 하단 고정 CTA 카운트다운 | 임시 마감 `2027-01-03 23:59:59 KST`, 0에서 멈춤 | 실제 시작·마감 일시, 할인 근거, 마감 후 처리 |
| 3 | 생년월일별 결과 | 결과지 제목 날짜만 바뀌고 본문은 1999.11.18 목업 고정 | 결과 API·데이터, 바뀌는 항목 범위, 입력 기준(양력/음력·태어난 시) |

---

## 1. 개요

| 항목 | 내용 |
|---|---|
| 기준 피그마 | 파일 `Gdc88dYmSYwu4XDrMug1Ut` 「퀀타로」 › 2027랜딩페이지 |
| ① 전체 레이아웃 · 입력 후 | `1086:211` 「2027 신년운세 · Landing · Mobile 390 · 최초 진입」 (390 × 16346, 안쪽 `1086:212`) — 섹션 순서·좌표, 04 결과지(입력 후) |
| ② 입력 전 (최초 진입) | `1086:2427` 「2027 신년운세 · 입력 전 봉인 결과지」 (390 × 15731) — 03 입력 영역(「년 / 월 / 일」)과 04 봉인 결과지만 적용 |
| 노드 ID 표기 | 데모의 `data-node`는 내용이 같은 「_최종」 프레임 `1058:12294`의 ID다(①은 그 복사본). 04 봉인 결과지만 ②의 ID(`1086:39xx`) |
| 상품 | 차우진의 2027 정미년 신년운세 — 단일 상품 |
| 기준 화면 | 모바일 웹뷰 390px, 피그마 절대 좌표 기반 고정 레이아웃 (390 미만은 [확인 필요] D-19) |
| 데모 기술 | HTML + Tailwind(Play CDN 3.4.16) + 바닐라 JS, **빌드 없음** |
| 플로우 | 01 Hero → 02 Need → 03 Preview GIF → 04 Free Result → 05 Intro → 06 Paid Preview → 07 Chapters → 08 Timing → 09 Before After Reviews → 10 Review List → 11 Closing Headline → 12 Purchase → 13 Footer (+ 하단 고정 Sticky / Bottom CTA) |

### 실행
1. `index.html`을 브라우저로 연다(서버 불필요). Tailwind·웹폰트를 CDN에서 받으므로 **인터넷 연결 필요**.
2. 브라우저 가운데에 390px UI가 100%로 뜬다. 오른쪽 위 「데모 패널」로 상태 전환 패널을 연다(폭 1070px 미만이면 닫힌 채 시작).
3. `index.html?flat` — 내부 스크롤·모션 없이 전체 길이를 한 장으로(캡처·검수용).

### 데모 패널 (실제 개발 범위 아님)
화면 바로가기(13개 섹션) · 무료 운세 상태(빈 상태 / 유효성 에러 / 로딩 / 요청 에러 / 입력 완료, 「다음 요청을 실패로 처리」) · 구매 구성 선택 · 이미지 자리 표시 · 컴포넌트 이름 표시(hover) · 모션 다시 재생 · 이미지 자리 현황.

### 파일 구조
```
handoff/
├─ index.html            화면 마크업 + 컴포넌트 템플릿(<template id="tpl-…">) + 데모 패널
├─ HANDOFF.md            이 문서
├─ BUTTONS.md            버튼·링크 이동 명세 · 입력 전/후 화면 · 담당자 결정 필요
├─ DECISIONS.md          임의 결정 기록 (D-01 ~ D-37)
├─ css/tokens.css        피그마 변수 14개 + 미등록 값(--x-*) + 서체(@font-face)
├─ css/components.css    컴포넌트 스타일 · 상태 · 모션 keyframes
├─ js/tailwind.config.js 토큰 ↔ Tailwind 클래스
├─ js/data.js            카피·가격·목업·좌표·설정값 (내용 수정은 이 파일)
├─ js/assets.js          이미지 자리(slot) 로더 + SLOT_INFO
├─ js/app.js             렌더링 · 인터랙션 · 상태 전환 · 모션 트리거
├─ assets/img · svg · video · fonts
├─ assets/_unused/       이전 회차에서 빠진 파일 (사용 안 함)
└─ _archive/             이전 회차 데모 (v2-581-1920, v3-840-4784) — 참고용
```

### 마크업 규칙
- `data-screen` = 섹션 이름 · `data-component` = 피그마 레이어 이름 · `data-node` = 피그마 노드 ID
- variant·상태는 `data-variant` / `data-state` / `data-selected`
- 피그마에 컴포넌트가 거의 없어(D-01) 레이어 이름을 컴포넌트 단위로 보고 나눴다.

---

## 2. 토큰

### 2-1. 피그마 변수 (14개, 1:1 · D-02)
| 피그마 변수 | 값 | CSS 변수 | Tailwind |
|---|---|---|---|
| `accent/default` | #1b3b6f | `--accent\/default` | `bg-/text-/border-accent-default` |
| `text/inverse` | #ffffff | `--text\/inverse` | `text-text-inverse` |
| `text/primary` | #222222 | `--text\/primary` | `text-text-primary` |
| `text/body` | #211c1a | `--text\/body` | `text-text-body` |
| `bg/page` | #ffffff | `--bg\/page` | `bg-bg-page` |
| `space/1·2·3·4·6·12·16` | 4·8·12·16·24·48·64px | `--space\/N` | `*-space-N` |
| `gutter/mobile` | 20px | `--gutter\/mobile` | `px-gutter-mobile` |
| `radius/sm` | 8px | `--radius\/sm` | `rounded-radius-sm` |

CSS에서는 `/`를 `\/`로 이스케이프하고, Tailwind는 `/`를 투명도 구분자로 쓰기 때문에 `-`로 바꿨다.

### 2-2. 피그마 미등록 값 (`--x-*`)
변수 없이 하드코딩된 색은 `tokens.css` 하단에 `--x-` 접두어로 모았다(이름은 데모 임의, D-02). 비슷하지만 다른 값(#1b3b6f/#183767, #8a6a22/#8c6d1f/#b7833d/#8a5a1c, #6b6f76/#6b7280/#4b5563)은 피그마 그대로 유지(D-03 [확인 필요]).

### 2-3. 서체
| 토큰 (`font-*`) | 서체 | 제공 |
|---|---|---|
| `sogang` | SOGANG UNIVERSITY (서강대체) — 대형 헤드라인 | `assets/fonts/SOGANGUNIVERSITYTTF.woff2` (zip, 라이선스 [확인 필요] D-04) |
| `flight` / `flight-bold` | Flight Sans Title / Bold — 05·06·09·11 제목, 06 번호 | `assets/fonts/FlightSansOTF-*.otf` (zip, 제주항공 무료·상업 사용 가능, 수정·변환 금지, 재배포 시 라이선스 동봉, **회사명·브랜드명·슬로건 사용 제한** [확인 필요]) |
| `pretendard` | Pretendard — 본문·UI | jsDelivr CDN v1.3.9 |
| `serif-kr` | Noto Serif KR | Google Fonts |
| `noto-sans` | Noto Sans KR — 03 입력 전 placeholder, 보조 문구 | Google Fonts |
| `gowun` | Gowun Batang — 08 카드 제목 일부 | Google Fonts |
| `poppins` | Poppins — 숫자 일부 | Google Fonts |
| `song-myung` | Song Myung — 07 도장 글자 | Google Fonts |

---

## 3. 화면별 스펙

y는 390px 기준 페이지 위치. **04 높이가 입력 전/후에 달라** 05 이하 y가 함께 바뀐다(최초 진입 / 입력 후).

| 화면 | 노드 | y (최초 / 입력 후) · 높이 | 구성 · 핵심 |
|---|---|---|---|
| **01 Hero** | 1058:13499 | 0 · 934 | 한옥 대문 야경 배경 · 「내 인생이 바뀔 수도 있는 / 2027년의 그날, / 알고 계신가요?」 · 「중요한 선택을 앞둔 당신에게」 · 부채를 든 차우진(342×588, 슬라이드 모션) |
| **02 Need** | 1067:20051 | 934 · 1011 | 별밤 한옥 배경 + 배경·술사 영상(`assets/video/need-bg-character.mp4`, 없으면 GIF) · 「이런 분들이라면 / 반드시 확인하세요」 · 체크 카드 6장 · 점선 스크롤 안내(끝 점이 03까지 이어짐) |
| **03 Preview GIF** | 1058:13707 | 1945 · 785 | 미리보기 GIF 390×509(탭 → 입력 영역 스크롤) · 「생년월일 하나로 / 내 2027년 미리 보기」 · 연·월·일 선택 + CTA 「내 2027년 무료 운세 확인하기」 · 연결선 + 문구(**입력 전 「봉인된 결과지」 / 입력 후 「무료 결과 요약」**) |
| **04 Free Result** | 1058:13350 / 1086:3945 | 2730 · **750 (입력 전)** / **1365 (입력 후)** | **입력 전:** 봉인 결과지 — 「아직 펼쳐지지 않은 / 당신의 2027년」 + 설명 + 한지로 덮인 빈 결과지 + 띠지 + 낙관(찍힘 모션). **입력 후:** 결과지 카드 360×1287(남색 3px 테두리, 금 모서리) — 일간 · 정미년 기운 · 키워드 · 열두 달 지도 + 범례. 둘 중 하나만 표시(5장) |
| **05 Intro** | 1058:13504 | 3480 / 4095 · 2658 | 장면 1(다크): 「지금까지 읽은 신년운세 / 누구에게나 / 똑같은 이야기들」 + 금이 간 돌판 카드 3장 + 「그런데 / 정말 모두의 운명이 같을까요?」 · 장면 2: 「퀀타로는 / 다릅니다」 + 두루마리(퀀타로가 다른 세 가지 이유) + 서재 배경 + 차우진 소개 |
| **06 Paid Preview** | 1058:13298 | 6138 / 6753 · 1924 | 「자리에 멈추게 만드는 / 나만의 맞춤 결과지」 · 「내 사주, 어디가 강하고 무엇이 부족할까?」 · 예시 안내 · Preview 카드 4장(결과지 크롭 + 흐림) |
| **07 Chapters** | 1058:13143 | 8062 / 8677 · 1880 | 위 라운드 80 네이비 배경 · 「한 번 읽고 끝나는 운세가 아닌 / 1년 내내 다시 펼쳐볼 / 내 2027년 ‘안내서’」 · 두루마리 + 도장 도구 · 목차 카드(10개 장 + 질문 도장) · CTA 「내 풀이 확인하기 · 33,000원」 |
| **08 Timing** | 1058:13028 | 9942 / 10557 · 2068 | 한지 배경 + 랜턴 · 「인생은 타이밍이라는데 / 내 운의 타이밍은 언제일까?」 · 카드 4장(GIF + 제N장 + 소제목 + 인용문) · CTA 「전체 풀이 확인하기」 |
| **09 Before After Reviews** | 1058:12964 | 12010 / 12625 · 1368 | 「평범한 하루를 보내던 사람들 / 2027년을 먼저 본 뒤 / 무엇이 달라졌을까요?」 · Before/After 카드 3개 |
| **10 Review List** | 1058:12836 | 13378 / 13993 · 394 | 「직접 경험한 분들의 생생한 후기」 · 후기 카드 5장 무한 가로 흐름 |
| **11 Closing Headline** | 1058:12407 | 13772 / 14387 · 437 | 「다가올 2027년, / 막연하게 맞이하지 마세요」 · 하단 네이비 삼각형 + 별 |
| **12 Purchase** | 1058:12352 | 14209 / 14824 · 1041 | 네이비 헤더 + 차우진 초상 · 상품 카드(구성 3개, 비교가·절약 배지, 포함 항목 4개, 구매 버튼) |
| **13 Footer** | 1058:12296 | 15250 / 15865 · 481 | 로고 · 링크 3개 · 회사 정보 7줄 · © 2026 QUANTARO. · 하단 고정 바 높이만큼 여백 |
| **Sticky / Bottom CTA** | 1058:12344 | 화면 하단 고정 | 「묶음 할인 마감까지 N일 HH:MM:SS」 + CTA 「내 풀이 전체 열기 · 33,000원」 |

세부 좌표·글자 크기는 `index.html` 해당 섹션과 `data.js`를 기준으로 한다.

---

## 4. 인터랙션 · 모션

### 4-1. 버튼·링크
요약만 적는다. 전체 목록·[확인 필요]는 **`BUTTONS.md` 1~5장**.

| 요소 | 동작 |
|---|---|
| 07 `CTA Button` · 08 `CTA / Full Reading` · 12 `Purchase / Button` · `Sticky / CTA Button` | `https://quantaro.kr/newyear2027` 이동(데모는 새 탭, `data.js › externalTarget`) — 담당자 결정 필요 0-1 |
| 03 `Preview / Hero Panel` | 입력 영역으로 0.4s 스크롤(easeOutCubic, 위 24px) |
| 03 `CTA / Free Result` | 빈 칸 → 에러 / 모두 입력 → 1.2s 로딩 → 04 결과지 (5장) |
| 12 `Option N` | 구성 선택(라디오) → 구매 버튼 문구 「{가격} 구매하기」 |
| 13 Footer 링크 3개 | URL 미정 — 데모는 「[임시 링크]」 토스트 |

### 4-2. 모션
모든 등장 모션은 **모션 묶음이 화면에 30% 보일 때 1회** 재생한다(피그마는 페이지 전체가 한 타임라인 → 데모에서 묶음별로 나눔, D-12). `prefers-reduced-motion`이면 모션 없이 최종 상태. 트리거 목록은 `app.js › MOTION_TARGETS`.

| # | 묶음 | 동작 · 시간 | 근거 |
|---|---|---|---|
| M-01 | 01 인물 | 차우진 오른쪽 200px → 제자리, 1.5s ease-out (첫 화면) | D-12b |
| M-02 | 02 체크 카드 · 점선 | 카드 6장 차례 등장 → 3.4s부터 점선이 그려지고 끝 점·빛이 내려와 4.2s 착지 | D-24 |
| M-03 | 04 봉인 결과지 낙관 (입력 전) | 0.3s 뒤 0.65s 동안 위에서 크게 내려와 찍힘(눌림·반동) | D-37 |
| M-04 | 05 장면 1 충돌 카드 | 카드 3장이 0.2·0.8·1.4s에 떨어져 착지·흔들림, 파편, 질문 문구 2.5s~ | D-34 |
| M-05 | 05 두루마리 | 0.2s부터 1.8s 동안 펼쳐짐, 안쪽 문구 0.55~1.71s 순서 등장, 수묵 산맥 1.8s~ | D-35 |
| M-06 | 07 도장 도구 | 0.2~1.2s 두루마리 위로 이동·찍기·복귀 + 인장 링 | D-27 |
| M-07 | 07 목차 도장 10개 | 0.3s + 0.5s × N에 차례로 찍힘(각 0.65s) | D-21 |
| M-08 | 10 후기 | 무한 가로 흐름 36.489s linear | D-12c [확인 필요] |
| — | 하단 고정 바 | 카운트다운 1초마다 감소, 0에서 멈춤 | 담당자 결정 필요 0-2 |

---

## 5. 상태 — 입력 전 · 입력 후 (03 · 04)

- **최초 진입:** ①의 전체 페이지 안에서 **03·04만 ②의 입력 전 디자인**으로 보인다(선택란 「년 / 월 / 일」, 연결선 「봉인된 결과지」, 04 봉인 결과지).
- **입력 후:** 연·월·일을 모두 고르고 **CTA를 누르면** 1.2초 로딩 뒤 ①의 결과지로 바뀐다(제목에 선택 날짜). 값만 고르고 누르지 않으면 봉인 결과지 그대로.
- 04는 봉인 결과지와 결과지 중 **하나만** 보이고, 05 이하는 04 높이에 맞춰 이어진다.

| 상태 | 폼 `data-state` | 04 `data-state` | 화면 | 피그마 |
|---|---|---|---|---|
| 최초 진입 | `empty` | `empty` | 봉인 결과지 | ✅ ② |
| 빈 칸 있는 채로 CTA | `invalid` | `empty` | 빈 칸 빨간 테두리 `#d14343` + 「생년월일을 모두 선택해 주세요.」, 04는 봉인 결과지 | ❌ 데모 잠정 |
| 로딩 | `loading` | `loading`(+ `data-keep`) | 버튼 「확인 중…」(비활성) + 04 위 로딩 카드, 높이 유지 | ❌ 데모 잠정 |
| 결과 | `filled` | `result` | 결과지 (제목만 선택 날짜, 본문 목업) | ✅ ① |
| 요청 에러 | `filled` | `error` | 「결과를 불러오지 못했어요」 + 「다시 시도」 | ❌ 데모 잠정 |

- 설정: `data.js › freeCheck` — `initialState`(`'empty'` 기본 / `'result'`), `yearRange`(1930~2012), `loadingMs`(1200), `messages.invalid`.
- 경계값: 없는 날짜(2/30, 평년 2/29 등)는 년·월을 바꾸면 일 선택이 해제된다. 로딩 중에는 버튼 비활성. 후기 본문 4줄 초과 시 말줄임. 구성 `compare`·`saving`이 없으면 취소선·절약 배지를 숨긴다.

---

## 6. 컴포넌트

| 컴포넌트 (`data-component`) | 화면 | variant · 상태 | 코드 |
|---|---|---|---|
| Hero / BG Hanok Door · Hero / Image 차우진 | 01 | `data-motion="hero-slide"` | `#s01` |
| Need / Check Card · Need / Scroll Cue | 02 | variant start/end, `need-check`, `cue-*` | `data.js › needChecks` |
| Preview / Hero Panel | 03 | `data-action="scroll-to-free-check"` | `#s03` |
| Free Check / Input + CTA · Birth Select · Year/Month/Day | 03 | 폼 `data-state`, `data-invalid` | `app.js › setState`, `submit` |
| Connector / Label | 03 | 「봉인된 결과지」/「무료 결과 요약」 | `#free-connector-label` |
| 04 Sealed Result · 입력 전 · Stamp / Seal | 04 | `data-view="empty"`, `data-motion="sealed-seal"` | `#sealed-visual` |
| Free Result / Card · Result / Content · Month · N월 · Legend | 04 | `#free-result[data-state]`, Month default/highlight | `tpl-month-cell`, `tpl-legend-row` / `data.js › months`, `legend` |
| Intro 충돌 카드 · 두루마리 | 05 | `slam-card`, `scroll-*` | `data.js › introSlam`, `introScroll` |
| Preview NN | 06 | 4개(크롭 데이터) | `tpl-paid-preview` / `data.js › paidPreviews` |
| Chapters / Stamp Tool · Chapter N · Stamp_NN | 07 | `stamp-tool`, `seal-ring`, `stamp` | `data.js › chapters` |
| Timing / Card N | 08 | 카드 4개 | `data.js › timingCards` |
| Review / Card N (Before · After) | 09 | After variant below-header/full | `data.js › baReviews` |
| Review Card NN · Review List / Motion | 10 | `marquee` | `data.js › reviews` |
| Option N · Purchase / Button | 12 | `data-selected` | `data.js › options` |
| Footer / Links · Definition List | 13 | `data-action="temp-link"` | `data.js › company` |
| Sticky / Bottom CTA | 고정 | — | `app.js › tickCountdown` / `data.js › countdownTarget` |
| Toast · 상태 카드 · 데모 패널 | 데모 추가 | — | 실제 개발 범위 아님 |

---

## 7. 이미지 · 에셋

**교체 규칙(D-20):** `<img data-slot="이름">`은 `assets/img/이름.gif → .webp → .png → .jpg` 순서로 먼저 있는 파일을 쓴다. 없으면 피그마 크기의 플레이스홀더. 같은 이름으로 파일만 넣으면 반영된다. 자리 목록은 `js/assets.js › SLOT_INFO`(28개).

| 구분 | 파일 | 비고 |
|---|---|---|
| 01 | `hero-hanok-door`, `hero-cha-woojin-fan` | |
| 02 | `need-bg`, `need-bg-character`(+ `assets/video/need-bg-character.mp4`) | 영상 우선, 없으면 GIF |
| 03 | `preview-2027.gif` | 9.5MB → 영상/WebP 변환 권장 |
| 04 입력 전 | `sealed-visual.png`(빛·한지·빈 결과지·덮개·띠지, 낙관 제외, 흰 바탕), `sealed-seal.png`(낙관, 투명) | 덮개 위 안내 문구는 이미지에 포함 |
| 04 입력 후 | `corner-ornament.png` | 모서리 장식(CSS 크롭) |
| 05 | `intro-bg-library`, `intro-scroll-parts`, `intro-scroll-mountain`, `intro-cha-woojin`, `intro-*-texture.png`, `svg/intro-slam/*` | 두루마리는 원화 1장을 크롭(D-33) |
| 06 | `paid-scroll`, `card-paper-texture`, `paid-result-sheet` | 결과지 1장을 카드별 크롭(D-15) |
| 07 | `chapters-book`, `chapters-scroll`, `chapters-stamp-tool`, `hanji` | |
| 08 | `timing-bka02·04·05·07.gif`(+ 같은 이름 .png 대체) · `svg/timing-lantern.svg` | GIF 2~3MB × 4 → 영상 변환 권장 |
| 09 | `review-{1~3}-{before,after}.png` | 1~2MB → WebP 권장 |
| 12 · 13 | `purchase-portrait`, `logo-quantaro` | 로고 SVG 권장 |
| 글꼴 | `assets/fonts/` (zip 전용) | 2-3절 |

---

## 8. 확인 필요 사항

담당자 결정 필요 3가지(0장)를 제외한 나머지. 괄호 안은 DECISIONS ID.

| # | 항목 | 현재 | 결정할 것 |
|---|---|---|---|
| 8-1 | 가격·비교가 (D-18) | 33,000 / 55,000(66,000) / 69,000(132,000)원 노출 | 실제 판매가 근거 |
| 8-2 | 후기 (D-17) | 09·10 피그마 목업 그대로, 10 설명에 「실제 후기」 표현, 09 「월 150만원」 | 실제 후기 여부·게시 동의, 수익 수치 근거(없으면 노출 금지), 목업 표기 |
| 8-3 | 입력 전후 오류·로딩 디자인 (D-37) | ②에 없어 데모 잠정 기준 | 빈 칸 에러·로딩·요청 에러 디자인 |
| 8-4 | 입력 기준 (D-06) | 양력, 1930~2012, 태어난 시 없음 | 음력·태어난 시 입력 여부(05에 「생년월일시」 문구 있음) |
| 8-5 | 10 후기 속도 (D-12c) | 36.489s(레이어 이름) | 키프레임 7s와 어느 쪽인지 |
| 8-6 | 서체 라이선스 (D-04) | 서강대체 미확인, Flight Sans 브랜드명 사용 제한 | 「퀀타로는」 등 브랜드 표기에 Flight Sans 사용 가능 여부 |
| 8-7 | 반응형 (D-19) | 390px 고정 | 320~389px 대응 |
| 8-8 | 토큰·컴포넌트 (D-01·02·03) | 미등록 색 `--x-*`, 컴포넌트 없음 | 피그마 변수·컴포넌트 등록 여부, 비슷한 값 통일 |
| 8-9 | 07 괄호 장식 (D-31) | 빈 프레임만 있어 그리지 않음 | 일부러 뺀 것인지 |
| 8-10 | 09 After 배치 (D-14·23) | 카드 1과 2·3이 다름 | 의도인지 |
| 8-11 | 08 표현 | 「나머지 아홉 달」(카드는 4장), 인용문 월 정보 | 문구, 예시 표기 여부 |
| 8-12 | 에셋 용량 (7장) | GIF·PNG 큼 | 영상·WebP 변환, lazy-load |
