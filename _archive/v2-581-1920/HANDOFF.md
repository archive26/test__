# HANDOFF — 2027 신년운세 · 랜딩 통합

> 확정일 2026-11-13 · 데모와 이 문서의 이름(화면·컴포넌트·토큰·이미지 자리)은 모두 같다.
> 판단 근거는 `DECISIONS.md`(D-번호)에 있다.

---

## 1. 개요

| 항목 | 내용 |
|---|---|
| 피그마 | [퀀타로 › 2027랜딩페이지 › 2027 신년운세 · 랜딩 통합](https://www.figma.com/design/Gdc88dYmSYwu4XDrMug1Ut/%ED%80%80%ED%83%80%EB%A1%9C?node-id=581-1920) · fileKey `Gdc88dYmSYwu4XDrMug1Ut` · node `581:1920` (390 × 12525) |
| 플로우 범위 | 01 Hero → 01-2 Need → 02 Preview GIF → 03 Free Result → 04 Paid Preview → 05 Chapters → 06 Timing → 07 Before After Reviews → 08 Review List → 09 Closing Headline → 10 Purchase → 11 Footer (+ 하단 고정 BottomBar) |
| 기준 화면 | 모바일 웹뷰 390px, 피그마 절대 좌표 기반 고정 레이아웃 (390 미만 대응은 [확인 필요] 8-9) |
| 데모 기술 | HTML + Tailwind(Play CDN 3.4.16) + 바닐라 JS, **빌드 없음** |

### 실행 방법
1. `handoff/index.html`을 브라우저(Chrome·Edge·Safari)로 연다. 서버가 필요 없다. 단 Tailwind·웹폰트를 CDN에서 받아 오므로 **인터넷 연결이 필요**하다.
2. 브라우저 가운데에 390px UI가 100% 배율로 뜬다. 오른쪽 위 「데모 패널」 버튼으로 상태 전환 패널을 연다. 브라우저 폭이 1070px 이상이면 패널이 열린 채로 시작한다.
3. `index.html?flat`으로 열면 내부 스크롤과 모션 없이 전체 길이를 한 장으로 보여 준다(캡처·검수용).

### 데모 패널 기능
- **화면 바로가기:** 12개 섹션으로 0.4s 스크롤
- **무료 운세 상태:** 빈 상태 / 유효성 에러 / 로딩 / 요청 에러 / 입력 완료, 「다음 요청을 실패로 처리」
- **구매 구성:** 33,000 / 55,000 / 69,000원
- **보기:** 이미지 자리 표시(slot 이름·크기), 컴포넌트 이름 표시(hover 시 `data-component` · `#노드ID` · `[variant]`), 모션 다시 재생
- **이미지 자리 현황:** 자리마다 png·gif·플레이스홀더 중 무엇이 쓰이는지 표시

### 파일 구조
```
handoff/
├─ index.html            화면 마크업 + 컴포넌트 템플릿(<template id="tpl-…">) + 데모 패널
├─ css/tokens.css        피그마 변수 1:1 토큰 + 미등록 값(--x-*) + 서체
├─ css/components.css    컴포넌트 스타일 · 상태 · 모션 keyframes
├─ js/tailwind.config.js 토큰 ↔ Tailwind 클래스 매핑
├─ js/data.js            카피·가격·목업·좌표 (내용 수정은 이 파일만)
├─ js/assets.js          이미지 자리(slot) 로더 + SLOT_INFO
├─ js/app.js             렌더링 · 인터랙션 · 상태 전환
├─ assets/img|svg|fonts  에셋 (assets/_unused = 쓰지 않는 예전 파일)
├─ DECISIONS.md          임의 결정 기록
└─ HANDOFF.md            이 문서
```

### 마크업 규칙
- `data-screen` = 섹션 이름, `data-component` = 피그마 레이어 이름, `data-node` = 피그마 노드 ID
- variant와 상태는 `data-variant` / `data-state` / `data-selected`로 구분한다.
- 이 피그마 화면에는 **컴포넌트와 인스턴스가 없다**(모두 일반 Frame). 그래서 레이어 이름을 컴포넌트 단위로 보고 나눴다(D-01).

---

## 2. 토큰 대응표

### 2-1. 피그마 변수 (14개, 1:1)
CSS에서는 `/`를 `\/`로 이스케이프한다. Tailwind는 `/`를 투명도 구분자로 쓰기 때문에 `-`로 바꿨다.

| 피그마 변수 | 값 | CSS 변수 | Tailwind 클래스 |
|---|---|---|---|
| `accent/default` | #1b3b6f | `--accent\/default` | `bg-/text-/border-accent-default` |
| `text/inverse` | #ffffff | `--text\/inverse` | `text-text-inverse` |
| `text/primary` | #222222 | `--text\/primary` | `text-text-primary` |
| `text/body` | #211c1a | `--text\/body` | `text-text-body` |
| `bg/page` | #ffffff | `--bg\/page` | `bg-bg-page` |
| `space/1` | 4px | `--space\/1` | `*-space-1` |
| `space/2` | 8px | `--space\/2` | `*-space-2` |
| `space/3` | 12px | `--space\/3` | `*-space-3` |
| `space/4` | 16px | `--space\/4` | `*-space-4` |
| `space/6` | 24px | `--space\/6` | `*-space-6` |
| `space/12` | 48px | `--space\/12` | `*-space-12` |
| `space/16` | 64px | `--space\/16` | `*-space-16` |
| `gutter/mobile` | 20px | `--gutter\/mobile` | `px-gutter-mobile` |
| `radius/sm` | 8px | `--radius\/sm` | `rounded-radius-sm` |

### 2-2. 피그마 미등록 값 (`--x-*`, 이름은 데모에서 임의로 붙임 · D-02 [확인 필요])

| CSS 변수 | 값 | 쓰이는 곳 |
|---|---|---|
| `--x-gold-dark` | #8a6a22 | 라벨·장 번호(제N장, 나의 일간), Accent Dot |
| `--x-gold-line` | #8c6d1f | 06 Timing 세로선, 09 헤드라인 |
| `--x-gold-light` | #f0d9a0 | 칩·하이라이트 테두리, 구매 버튼, 선택 Option |
| `--x-gold-title` | #f0c76e | 10 「신년운세」 |
| `--x-gold-underline` | #e7cf92 | 06 인용문 밑줄 |
| `--x-ivory` | #fdf8ef | 01-2 배경, 칩 배경, Month highlight |
| `--x-paper` | #fdfbf9 | 03 결과지 바탕 |
| `--x-paper-2` | #fefdfc | 04 배경, 05 TOC 헤더·푸터 |
| `--x-cream` | #fffdf9 | 07 배경 |
| `--x-line` | #e8dfd1 | 입력 테두리, 카드 안쪽 테두리 |
| `--x-line-2` | #ececec | 월 셀·장 구분선, BottomBar 상단선 |
| `--x-badge-line` | #d9d4ca | 「목업 문구」「가상 생년월일」 배지 |
| `--x-gray-text` | #6b6f76 | 보조 문구 |
| `--x-gray-text-2` | #6b7280 | 후기 날짜, 06 하단 안내 |
| `--x-navy-deep` | #183767 | 06 CTA 배경 (`accent/default`와 다름 · D-03) |
| `--x-navy-title` | #224d91 | 06 타이틀 |
| `--x-ink` | #101c30 | 10 구매 버튼 글자 |
| `--x-footer-bg` | #f7f6f3 | 11 Footer 배경 |
| `--x-review-bg` | #f8f9fb | 08 Review Card 배경 |
| `--x-stamp-red` | #b8201c | 05 Stamp 테두리·글자 |

### 2-3. 서체 (`--font-*` / Tailwind `font-*`)

| 토큰 | 서체 | 용도 | 제공 |
|---|---|---|---|
| `sogang` | SOGANG UNIVERSITY (서강대체) | 대형 헤드라인 | `assets/fonts/SOGANGUNIVERSITYTTF.woff2` (라이선스 [확인 필요] D-04) |
| `pretendard` | Pretendard | 본문·UI 전반 | jsDelivr CDN v1.3.9 |
| `serif-kr` | Noto Serif KR | 한자, 결과지 제목, 10 타이틀 | Google Fonts |
| `poppins` | Poppins | 숫자(월·카운트다운·저작권) | Google Fonts |
| `gowun` | Gowun Batang | 06 카피·인용문 | Google Fonts |
| `noto-sans` | Noto Sans KR | 06 카드 2~4 보조문구 | Google Fonts |
| `song-myung` | Song Myung | 05 Stamp 글자 | Google Fonts |

---

## 3. 화면별 스펙

y는 프레임 `581:1920` 기준, 크기는 px이다. 세부 좌표와 서체는 `index.html`의 해당 섹션과 `data.js`를 참고한다.

| 화면 | 노드 | y / 높이 | 배경 | 구성 · 핵심 스펙 |
|---|---|---|---|---|
| **01 Hero** | 581:2686 | 0 / 934 | 이미지 | 「달빛 아래 열린 한옥문 1」 436×944(-23,-9) · 카피 3줄(서강대체 28/36/18px, 흰색) · 점 2개 · 「부채를 든 차우진」 342×588(52,356, 등장 모션) |
| **01-2 Need** | 581:2667 | 934 / 640 | `--x-ivory` + 별밤 이미지 390×732 | 상단 그라디언트 카피(서강대체 18) · 「고민하고 있진 않나요?」(30, 흰색) · Speech Bubble 01~04(Pretendard 13/20, 순차 등장) · 하단 글로우 카피 2줄(#ffe0a3, 20/22px) |
| **02 Preview GIF** | 581:2640 | 1574 / 785 | 흰색 | 「나의 2027년 미리보기」 GIF 390×509 + 어두운 그라디언트 + Preview / Heading(서강대체 24 · Pretendard 15) → **클릭 시 입력 영역으로 스크롤** · Free Check / Input + CTA(342, 위 31px): Birth Select Year 158 / Month 80 / Day 80(패딩 8/12, 테두리 1 `--x-line`, 라운드 12, 값 Pretendard Medium 19/28.5 `accent/default`, 화살표 16) + CTA / Free Result · Connector(구분선 + 다이아몬드 + 「무료 결과 요약」) |
| **03 Free Result** | 581:2491 | 2359 / 1364 | 흰색 | Free Result / Card 360×1287(3px #1b3b6f 테두리 + 그림자) › Result / Content 342×1265(`--x-paper`, Corner Ornament ×4) · Day Master Block(제목 「YYYY년 M월 D일생의 2027년」, Hanja Badge 76, Year Relation Row, Keyword Tags) · MonthMap(Month 셀 78×78 4×3, highlight 8·9월) · Month Legend 5줄. **상태 4종은 5장 참고** |
| **04 Paid Preview** | 581:2440 | 3723 / 1852 | `--x-paper-2` | Header(그라디언트 36 + 24 + 안내 13 + 두루마리 106) · Preview 01 네 기둥 / 02 오행 비율 / 03 용신·희신·기신 / 04 신강·신약: 번호 32 · 질문 16 · 설명 13 + 카드(종이 텍스처 + 결과지 크롭 + 블러 4.275px). 크롭 값은 `data.js › paidPreviews` |
| **05 Chapters** | 613:155 | 5575 / 1894 | 위 라운드 80 네이비 그라디언트(#111a36→#223369) | 책 이미지(soft-light 80%) · 「그리고 / 당신의 2027년을 담은 / 10개의 이야기까지」 · 두루마리 208×104 · TOC Card 360×1494: Header(결과지 화면 예시 · 가상 생년월일 배지) · Numbered List(한지 배경, Chapter 0~9 각 117.5px, 설명 blur 4.5px, **Stamp_00~09**) · Footer(메타 + CTA Button 302 「내 풀이 확인하기 · 33,000원」) |
| **06 Timing** | 581:2218 | 7469 / 1953 | #001026→#1b3b6f + 한지 | 랜턴(벡터 51개) · 타이틀(서강대체 23, #224d91) · Timing / Card ×4(GIF 342×192/197 라운드 14, 태그, 세로선, Gowun 20/18 카피, 밑줄 8px) · 하단 안내 14 · CTA / Full Reading 350(배경 #183767) |
| **07 Before After Reviews** | 581:2159 | 9422 / 1295 | `--x-cream` | Reviews / Heading(블러 40 + 골드 방사 그라디언트) · Review / Card 1~3(gap 32): Before / Frame 180×153 + After / Frame 180×169(18px 겹침, **After가 위**, 그림자 -9.19/0/6.1 22%, 테두리 1.017 `accent/default`) · Author · Headline(#1b3b6f 바탕 흰 글자 18) · Body 13.5/22.275 |
| **08 Review List** | 581:2033 | 10717 / 354 | 흰색 | 「먼저 살펴본 사람들의 이야기」(서강대체 23) · Review Card 01~05 282×206(라운드 16, 별점 5, 본문 4줄 말줄임) → 오른쪽에서 왼쪽으로 무한 슬라이드 |
| **09 Closing Headline** | 581:2029 | 11071 / 100 | 흰색 | 「2027년의 시작,」 36 `--x-gold-line` · 「나의 운세부터 확인해 보세요」 26 `accent/default` |
| **10 Purchase** | 581:1977 | 11171 / 873 | 흰색 + 초상 582×878 | Purchase / Product Card 342×508(라운드 24, rgba(10,19,34,.7) + blur 8) · Title(차우진의 2027 / 신년운세 36) · Options 3개(radio) · Includes 4개 · PurchaseButton 310×56(`--x-gold-light`, 「{가격} 구매하기」) |
| **11 Footer** | 581:1921 | 12044 / 481 | `--x-footer-bg` | 로고 95×22 · 링크 3개(고객센터·이용약관·개인정보처리방침) · 회사 정보 7줄(12/19.2) · © 2026 QUANTARO. · 끝에 BottomBar 높이만큼 113px 여백 |
| **BottomBar** (고정) | 581:1969 | 화면 하단 고정 | `bg/page` + 상단선 `--x-line-2` | Countdown(「묶음 할인 마감까지」 + Poppins 14 SemiBold) · Bottom Bar / CTA 「내 풀이 전체 열기 · 33,000원」. 패딩 12/20/14, gap 10, 위쪽 그림자 |

### 공통 CTA (`.cta-primary`)
CTA / Free Result, CTA Button(05), CTA / Full Reading(06), Bottom Bar / CTA가 같은 스펙을 쓴다.
- 크기와 모양: 높이 56, 라운드 14
- 색: 배경 `accent/default`, 글자 `text/inverse`
- 글자: Pretendard Bold 16/24, 자간 -0.32
- 예외: 06만 배경이 `--x-navy-deep`이다(D-03).
- 눌림: brightness .9, 비활성: opacity .6

---

## 4. 인터랙션 정의

| # | 트리거 | 동작 | 결과 | 시간 · 이징 |
|---|---|---|---|---|
| I-01 | 01 Hero가 30% 보임 | 「부채를 든 차우진」 translateX 200px → 0 | 인물이 오른쪽에서 들어옴 | 1.5s ease-out, 1회 (D-12, D-12b) |
| I-02 | 01-2 Need가 30% 보임 | Speech Bubble 01~04: opacity 0→1, translateY 12→0 | 말풍선 순차 등장 | 지연 .43/.99/1.84/2.21s · 길이 .77/.60/.66/.57s · ease-out (D-12b) |
| I-03 | 02 「나의 2027년 미리보기」 탭 | Free Check / Input + CTA로 스크롤 (위 24px 여백) | 입력 영역이 화면 위쪽에 옴 | 0.4s easeOutCubic (피그마 SCROLL_TO 0.4s · D-11) |
| I-04 | Birth Select 탭 | OS 기본 선택기(네이티브 `<select>`) 열림 → 값 표시 | 년도 1930~2012(내림차순)·월·일. 년·월을 바꾸면 일수 다시 계산(윤년 포함), 범위를 넘는 일은 선택 해제 | 즉시 (D-06) |
| I-05 | CTA / Free Result (빈 칸 있음) | 빈 칸 빨간 테두리(#d14343) + 「생년월일을 모두 선택해 주세요.」 | 유효성 에러. 칸을 채우면 해당 칸 에러 해제 | 즉시 (D-07) |
| I-06 | CTA / Free Result (모두 입력) | 버튼 「확인 중…」 + 스피너, 비활성 → 03 위를 흰색으로 덮고 로딩 카드 | 로딩 → 결과(제목 날짜 반영) 또는 요청 에러. **스크롤 이동 없음, 페이지 높이 유지** | 로딩 1.2s (D-07, D-08) |
| I-07 | 「다시 시도」(요청 에러) | I-06과 같음 | 로딩 → 결과 | 1.2s |
| I-08 | 05 Numbered List가 30% 보임 | Stamp_NN 내려찍기: scale 1.75→1.08/.89→.98/1.035→1.015/.985→1, 회전 -5°→0, Y -26→0 + 잉크 등장 + 착지 순간 Impact Ring 확산 | 도장 10개가 차례로 찍힘 | 도장마다 .65s(지점 38.4/52/72%), 시작 0.3s + 0.5s×N, 잉크 .0975s, 링 .29s(착지 +.25s), 1회 (D-21) |
| I-09 | 08 표시 중 | Review List / Cards translateX 0 → -1470px | 카드 5장 + 복제 5장 무한 슬라이드 | 36.489s linear 무한 |
| I-10 | 10 Option N 탭 | 해당 Option `data-selected=true`(골드 30% 배경, 테두리, radio dot) | PurchaseButton 문구가 「{가격} 구매하기」로 바뀜 | 배경·테두리 .15s |
| I-11 | 05 CTA Button · 06 CTA / Full Reading · 10 PurchaseButton · Bottom Bar / CTA 탭 | `https://quantaro.kr/newyear2027`로 이동 | 데모는 새 탭 + 안내 토스트, 실서비스는 같은 창 이동 권장 | 즉시 · 토스트 2.2s (D-10) |
| I-12 | Footer 링크 3개 탭 | 이동 막음 + 「[임시 링크] … — URL 확인 후 연결」 토스트 | URL 미정 | 토스트 2.2s |
| I-13 | 페이지 진입 | 카운트다운 1초마다 감소(`N일 HH:MM:SS`) | 0이 되면 0에서 멈춤 | 1s 간격 (D-09) |
| I-14 | 스크롤 | BottomBar는 스크롤 영역 밖에 **항상 고정** | Footer는 113px 여백 때문에 가려지지 않음 | — (D-09) |
| 공통 | OS 「동작 줄이기」 켜짐 | 모든 모션 끔, 최종 상태로 표시 | — | — |

모션은 피그마에서 페이지 전체가 한 타임라인(36.489s)에 묶여 있다. 데모는 섹션이 30% 보일 때 1회 재생하도록 바꿨다(D-12). 다만 08 슬라이드는 무한 반복이다.

---

## 5. 상태 · 예외 케이스

### 5-1. Free Check(폼) · Free Result(03) 상태
| 상태 | 폼 `data-state` | 03 `data-state` | 화면 | 피그마 |
|---|---|---|---|---|
| 입력 완료 · 결과 | `filled` | `result` | 피그마 원본(1999.11.18). **첫 진입 기본값** | ✅ 있음 |
| 빈 상태 | `empty` | `empty` | 상태 카드 「생년월일을 선택하면 무료 결과 요약이 여기에 표시돼요」 | ❌ 데모 추가 |
| 유효성 에러 | `invalid` | `empty` | 빈 칸 빨간 테두리 + 에러 문구 | ❌ 데모 추가 |
| 로딩 | `loading` | `loading` (+ `data-keep`=직전 상태) | 직전 화면 위를 흰색으로 덮고 로딩 카드(스피너 + 스켈레톤 3줄). 버튼 비활성 | ❌ 데모 추가 |
| 요청 에러 | `filled` | `error` | 「결과를 불러오지 못했어요」 + 「다시 시도」 | ❌ 데모 추가 |

### 5-2. 예외 · 경계값
- **없는 날짜:** 2/30, 2/29(평년), 4/31 같은 날짜는 년·월을 바꾸면 일 선택이 해제된다.
- **연타:** 로딩 중에는 버튼이 비활성이라 다시 누를 수 없다. 상태가 바뀌면 진행 중이던 타이머를 취소한다.
- **결과 문구:** 날짜가 바뀌어도 03 제목만 바뀐다. 본문(甲, 열두 달 지도)은 목업으로 고정이다(D-08). 05 TOC의 「1999년 11월 18일생」은 「가상 생년월일」 배지가 있어 고정이다.
- **에러 상태 높이:** 빈 상태·에러 카드는 최소 높이 260px이라 결과(1364px)보다 짧다. 로딩일 때만 직전 높이를 유지한다.
- **카운트다운 종료:** `0일 00:00:00`에서 멈춘다. 종료 후 문구나 숨김 처리는 정하지 않았다(8-4).
- **이미지 없음:** 같은 이름의 파일이 없으면 피그마 크기의 플레이스홀더와 라벨을 보여 준다(7장).
- **08 후기 본문:** 4줄을 넘으면 말줄임(`-webkit-line-clamp: 4`) 처리한다.
- **Option 비교가:** `compare`·`saving`이 `null`이면 취소선과 절약 배지를 숨긴다(2027 신년운세 33,000원).

---

## 6. 컴포넌트 목록

코드 위치 표기: `html:` = index.html의 섹션 또는 `<template>` id, `css:` = components.css의 클래스, `js:` = app.js 함수 / data.js 키.

| 컴포넌트 (data-component) | 화면 | variant · 상태 | 코드 위치 |
|---|---|---|---|
| 달빛 아래 열린 한옥문 1 / 부채를 든 차우진 | 01 | `data-motion="hero-slide"` | html: `#s01` · css: `[data-motion="hero-slide"]` |
| Speech Bubble 01~04 | 01-2 | `data-bubble="01~04"` | html: `#s01-2` · css: `.speech-bubble` |
| 나의 2027년 미리보기 | 02 | `data-action="scroll-to-free-check"` | html: `#s02` · css: `.preview-gif__dim` |
| Free Check / Input + CTA | 02 | `data-state`: filled · empty · invalid · loading | html: `#free-check` · js: `setState`, `submit` |
| Birth Select · Year / Month / Day | 02 | `data-variant`: year · month · day / `data-invalid` | css: `.birth-select` · js: `initSelects`, `syncDays` |
| CTA / Free Result | 02 | `data-loading`, `disabled` | css: `.cta-primary` |
| Free Result / Card · Result / Content | 03 | `#free-result[data-state]`: result · empty · loading · error | html: `#free-result` · css: `.paper-card`, `.free-result__view` |
| Corner Ornament TL/TR/BL/BR | 03 · 05 | `data-pos`: tl · tr · bl · br | css: `.corner-ornament` |
| Hanja Badge / Keyword Tags / Badge · 목업 문구 | 03 | — | css: `.hanja-badge`, `.keyword-tag`, `.badge-outline` |
| Month · N월 | 03 | `data-variant`: default · highlight | html: `tpl-month-cell` · css: `.month-cell` · js: `renderMonths` / data `months` |
| Legend · 이름 | 03 | `data-variant`: default · highlight | html: `tpl-legend-row` · css: `.legend-row` / data `legend` |
| Preview NN · 이름 | 04 | 4개(좌표·크롭 데이터) | html: `tpl-paid-preview` · js: `renderPaid` / data `paidPreviews` |
| Chapter N | 05 | 0~9 | html: `tpl-chapter` · css: `.chapter` · js: `renderChapters` / data `chapters` |
| Stamp_NN | 05 | 위치·폭·회전은 데이터, `data-motion="stamp"` | css: `.stamp*`, `@keyframes stamp-*` · svg 필터 `#stamp-ink` / data `chapters[].stamp`, `stampTiming` |
| CTA Button (05) | 05 | `data-action="external"` | html: `#s05` |
| Timing / Card N · 제N장 | 06 | 카드 4개 / 보조문구 서체 `pretendard` · `noto-sans` | html: `tpl-timing-card` · js: `renderTiming` / data `timingCards` |
| Timing / Lantern | 06 | 벡터 51개 | data `lantern` · `assets/svg/lantern/` |
| CTA / Full Reading | 06 | `data-action="external"` | html: `#s06` |
| Review / Card N (Before / Frame · After / Frame) | 07 | After / Panel `data-variant`: below-header(카드 1) · full(카드 2·3) | html: `tpl-ba-review` · css: `.ba-*` · js: `renderReviews` / data `baReviews` |
| Review Card NN | 08 | `data-variant`: (기본) · justify | html: `tpl-review-card` · css: `.review-card` / data `reviews` |
| Review List / Motion | 08 | `data-motion="marquee"` + Loop Copy | css: `@keyframes marquee` |
| Option N · 이름 | 10 | `data-selected`: true · false (role=radio) | html: `tpl-option` · css: `.option`, `.radio`, `.saving-badge` · js: `renderOptions`, `selectOption` / data `options` |
| PurchaseButton | 10 | 문구 = 선택 가격 | css: `.purchase-button` |
| Footer / Links · Definition List | 11 | `data-action="temp-link"` | css: `.footer-link`, `.company-row` / data `company` |
| BottomBar (Countdown · CTA) | 고정 | — | css: `.bottom-bar` · js: `tickCountdown` / data `countdownTarget` |
| Toast · 상태 카드 · 데모 패널 | (데모 추가) | — | css: `.toast`, `.state-card`, `.panel` — 실제 개발 범위 아님 |

---

## 7. 이미지 · 에셋 목록

**교체 규칙(D-20):** `<img data-slot="이름">`은 `assets/img/이름.gif → .webp → .png → .jpg` 순서로 찾아 처음 열리는 파일을 쓴다. 파일이 하나도 없으면 피그마 크기의 플레이스홀더를 보여 준다. 그래서 **같은 이름으로 파일만 넣으면 바로 반영된다.**

| slot | 화면 | 표시 크기 (피그마) | 비율 | 라운드 | 현재 파일 (원본 크기) | 권장 포맷 | 준비 |
|---|---|---|---|---|---|---|---|
| `hero-hanok-door` | 01 Hero | 436×944 | 0.46 | 0 | png 474×1024 · 680KB | WebP | ✅ |
| `hero-cha-woojin-fan` | 01 Hero | 342×588 | 0.58 | 0 | png 956×1645 · 1.8MB | WebP(투명) | ✅ |
| `need-starnight` | 01-2 Need | 390×732 | 0.53 | 0 | png 687×1024 · 865KB | WebP | ✅ |
| `preview-2027` | 02 Preview GIF | 390×509 | 0.77 | 0 | **gif 720×940 · 50프레임 · 9.5MB** | MP4/WebM(자동재생·무음·반복) 또는 애니메이션 WebP | ✅ (용량 큼) |
| `paid-scroll` | 04 Header | 112×112 (106 클립) | 1 | 0 | png 1024×1024 · 435KB | WebP | ✅ |
| `card-paper-texture` | 04 카드 | 399×253 | 1.58 | 0 | png 576×1024 · 377KB | WebP/JPG | ✅ |
| `paid-result-sheet` | 04 카드·블러 | 341×128~190 크롭 | — | 16 | png 621×1265 · 66KB | PNG(교체 시 같은 레이아웃 필수 · D-15) | ✅ |
| `chapters-book` | 05 | 459×437 | 1.05 | 0 | png 1024×976 · 707KB | WebP | ✅ |
| `chapters-scroll` | 05 | 208×104 | 2 | 0 | png 1774×887 · 928KB | WebP(투명) | ✅ |
| `hanji` | 05 · 06 | 848×1507 / 390×1953 | — | 0 | png 576×1024 · 561KB | WebP/JPG(반복 텍스처) | ✅ |
| `timing-bka04` | 06 카드 1 | 342×192 | 1.78 | 14 | **gif 342×197 · 75프레임** · 2.3MB | MP4/WebM 또는 애니메이션 WebP | ✅ |
| `timing-bka02` | 06 카드 2 | 342×197 | 1.74 | 14 | **gif 342×197 · 75프레임** · 2.6MB | 〃 | ✅ |
| `timing-bka07` | 06 카드 3 | 342×197 | 1.74 | 14 | **gif 342×197 · 75프레임** · 2.8MB | 〃 | ✅ |
| `timing-bka05` | 06 카드 4 | 342×197 | 1.74 | 14 | **gif 342×197 · 75프레임** · 2.8MB | 〃 | ✅ |
| `review-1-before` | 07 카드 1 | 179×153 | 1.17 | 2.03 | png 1280×1024 · 1.7MB | WebP (360×306 @2x) | ✅ |
| `review-1-after` | 07 카드 1 | 180×147 (헤더 아래) | 1.22 | 3.05 | png 1280×1024 · 2.0MB | WebP (360×294 @2x) | ✅ |
| `review-2-before` | 07 카드 2 | 179×153 | 1.17 | 2.03 | png 1280×1024 · 1.9MB | WebP | ✅ |
| `review-2-after` | 07 카드 2 | 180×169 (전체) | 1.07 | 3.05 | png 1024×1024 · 2.0MB | WebP (360×338 @2x) | ✅ |
| `review-3-before` | 07 카드 3 | 179×153 | 1.17 | 2.03 | png 1280×1024 · 1.7MB | WebP | ✅ |
| `review-3-after` | 07 카드 3 | 180×169 (전체) | 1.07 | 3.05 | png 1024×1024 · 1.4MB | WebP | ✅ |
| `purchase-portrait` | 10 Purchase | 582×878 | 0.66 | 0 | png 683×1024 · 1.0MB | WebP | ✅ |
| `logo-quantaro` | 11 Footer | 95×22 | 4.3 | 0 | png 413×96 · 45KB | SVG 권장 | ✅ |

### slot이 아닌 에셋
| 파일 | 용도 | 비고 |
|---|---|---|
| `assets/img/corner-ornament.png` 550×550 | 03·05 Corner Ornament(CSS 배경, 크롭 + 좌우 반전) | ✅ |
| `assets/img/timing-bka0N.png` ×4 | 06 GIF가 없을 때 쓰는 대체 정지 이미지 | 실서비스에서는 포스터 이미지로 활용 가능 |
| `assets/svg/` 9개 | bubble-01~04, chevron-down, divider, hero-dot, icon-chevron-right, star-rating-5 | ✅ |
| `assets/svg/lantern/` 51개 | 06 랜턴 조각 | 하나의 SVG로 합치기 권장(D-16) |
| `assets/fonts/SOGANGUNIVERSITYTTF.woff2` | 서강대체 | 라이선스 확인 필요(D-04) |
| `assets/_unused/timing-bka04-overlay.gif` | 1차에 쓰던 06 오버레이 | 사용 안 함 |

### GIF 확인 결과
GIF로 받은 화면은 **02 Preview GIF**(50프레임)와 **06 Timing 카드 4장**(각 75프레임)이고, 모두 애니메이션이 살아 있다. 정지 이미지로만 받아진 GIF는 없다.

---

## 8. 확인 필요 사항

개발 전에 기획·디자인과 논의해야 할 항목이다. 괄호 안은 DECISIONS ID다.

| # | 항목 | 현재 데모 | 결정할 것 |
|---|---|---|---|
| 8-1 | **버튼 이동** (D-10) | 05·06·10·BottomBar CTA 4개가 모두 `quantaro.kr/newyear2027`로 이동(데모는 새 탭) | ① 「구매 구성 선택 이동」이 CTA → 10 Purchase 스크롤을 뜻했는지 ② 같은 창 이동 여부 ③ 선택 구성(33,000/55,000/69,000)을 URL 파라미터로 넘길지 ④ Footer 링크 3개 URL |
| 8-2 | **무료 운세 첫 화면** (D-05) | 피그마대로 입력 완료와 결과(1999.11.18)를 보여 줌 | 실서비스에서 빈 상태로 시작할지, 샘플로 보여 줄지. 빈 상태·로딩·에러 디자인 |
| 8-3 | **생년월일 입력** (D-06, D-07) | 양력, 1930~2012, 네이티브 select, 에러 문구와 색 임의 | 연도 범위, 음력·태어난 시 입력 여부, 에러 문구·색, 로딩 시간과 API 실패 처리 |
| 8-4 | **BottomBar** (D-09) | 항상 고정, 마감 시각 임의 `2027-01-03 23:59:59 KST`, CTA 33,000원 고정 | 실제 마감 일시와 할인 근거, 종료 후 처리, 특정 구간에서 숨길지, 선택 구성 가격과 연동할지 |
| 8-5 | **10 비교가 노출** (D-18) | 66,000원·132,000원 취소선과 「N원 절약」 배지 노출 | 개별 구매가가 실제 판매가인지(취소선 노출 근거) |
| 8-6 | **사라진 모션** (D-12, D-12b) | 새 노드에 없는 01 인물 슬라이드, 01-2 말풍선, 08 무한 슬라이드를 1차 값으로 유지. 등장 모션은 1회 재생 | 세 모션을 유지할지, 루프 재생이 의도였는지 |
| 8-7 | **07 After 배치 차이** (D-14) | 카드 1은 헤더 아래 180×147, 카드 2·3은 180×169 전체 | 의도된 차이인지, 통일한다면 어느 쪽인지 |
| 8-8 | **07 겹침 해석** (D-23) | 「Before 하단 배치」를 레이어 순서(After가 위)로 해석 | 위치를 아래로 옮기라는 뜻이었는지 |
| 8-9 | **반응형** (D-19) | 390px 고정 | 320~389px 기기에서 축소할지 재배치할지 |
| 8-10 | **디자인 토큰** (D-02, D-03) | 미등록 색 20개를 `--x-*`로 모음. 비슷한 값(#1b3b6f/#183767, #8a6a22/#8c6d1f, #6b6f76/#6b7280) 유지 | 피그마 변수로 등록할지, 통일할지 |
| 8-11 | **컴포넌트화** (D-01) | 피그마에 컴포넌트가 없음 | Month 셀, Review Card, Option, CTA 같은 반복 요소를 피그마 컴포넌트로 등록할지 |
| 8-12 | **서체 라이선스** (D-04) | 서강대체 woff2(눈누 배포본) 사용 | 실서비스 사용 라이선스와 배포 방식 |
| 8-13 | **목업 데이터** (D-08, D-17) | 03 결과 본문, 07·08 후기는 피그마 목업 그대로이고 목업 표시가 없음(03 월 지도만 「목업 문구」 배지) | 실데이터·API 연결 시점, 후기에 목업 표기가 필요한지 |
| 8-14 | **05 도장** (D-21) | 질감은 SVG 필터로 근사. 숨김 레이어 `Stamp / Seal`(낙관)은 제외 | 낙관 이미지 사용 여부, 실제 텍스처(PNG/SVG)로 바꿀지 |
| 8-15 | **에셋 용량** (7장) | 02 GIF 9.5MB, 06 GIF 2.3~2.9MB×4, 07 PNG 1.4~2.0MB×6 | 영상(MP4/WebM)이나 WebP로 바꾸고, lazy-load 적용 |
| 8-16 | **03 카드 여백** (D-13) | 피그마 값 그대로 좌 4.5 / 우 7.5(비대칭) | 의도인지 |
