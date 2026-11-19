# HANDOFF — 2027 신년운세 · 랜딩 통합

> 확정일 2026-11-19 (1차 11/13 · 2차 11/18) · 데모와 이 문서의 이름(화면·컴포넌트·토큰·이미지 자리)은 모두 같다.
> **11/19 개정:** 기준 피그마가 `840:4784`(390×16385, 섹션 12개)에서 `982:617`「2027 신년운세 · Landing · Mobile 390 (Handoff 11/18)」(390×16561, **섹션 13개 + Sticky / Bottom CTA**)로 바뀌었다. 섹션 번호가 01~13으로 새로 매겨졌고, 데모의 섹션 id도 `#s01`~`#s13`으로 맞췄다. 바뀐 내용은 0장에 모았다.
> 판단 근거는 `DECISIONS.md`(D-번호)에 있다.
> 서강대체 글꼴 파일 `assets/fonts/SOGANGUNIVERSITYTTF.woff2`는 저장소에 올리지 않았다(라이선스 확인 필요 · D-04). 따로 받은 파일을 같은 위치에 넣으면 된다.
> **Flight Sans** 글꼴 파일은 아직 받지 못했다(8-21 · D-30). 파일이 없으면 제목 5곳이 Pretendard ExtraBold로 대체 표시된다.

---

## 0. 11/19 변경 요약 (11/18 대비)

| 새 번호 | 11/18 번호 | 변경 |
|---|---|---|
| 01 Hero | 01 | 카피 「2027년에도」(Pretendard Medium 24) / 「열심히만 사실 건가요?」(서강대체 32) / **「기회가 오는 날도 모른채 말이에요」**(서강대체 18). 점 3개를 위로(top 140, x 54.5/86.5/118.5) + 같은 자리에 금빛 번짐 3개 추가 |
| 02 Need | 01-2 | 제목 「이런 분들이라면」(Pretendard 18) / 「반드시 확인하세요」(서강대체 40, 흰색→#f0d9a0 가로 그라디언트, 밑줄 강조 없앰). 배경·인물 이미지 교체, 체크 카드 6장 위치·색 변경(좌 −24 / 우 54, #30425e·#183972, 72px 간격, top 523), **아래 점선 + 빛나는 점(Need / Scroll Cue) 추가**. 1015 → 1046 |
| 03 Preview GIF | 02 | 설명 15/25.5 → 16/27, 제목 위치 321 → 312, 생년월일 값 19 → 18px. 785 → 804 |
| 04 Free Result | 03 | **「여기까지가 무료입니다.」 블록과 CTA / Upsell 삭제**(I-15 없어짐). 결과 카드 top 39 → 69. 1665 → 1392 |
| **05 Intro** | 04 위쪽 Intro | **전면 교체.** ① Dark Wrap(0~938): 경고 헤더(흐린 사진 + ⚠ + 「지금까지 읽은 신년운세 / 누구에게나 / 똑같은 이야기들」) + 별 + 말풍선 3개(아이콘·[띠별 운세] 등 라벨·말풍선) + 「그런데 / 정말 모두의 운명이 같을까요?」(글자 질감) ② Scene 2(938~2792): 「퀀타로는 / 다릅니다」 + 창살·구름·금실 장식 + **두루마리 펼침 모션(I-17, 스크롤 진입 시 1회)** + 「단순한 운세 예측을 넘은 / 술사의 깊이있는 해석」 + 차우진 + 서재 배경(마스크 합성). 2393 → 2792 |
| 06 Paid Preview | 04 본문 | 헤더 「자리에 멈추게 만드는 / **나만의 맞춤 결과지**」(Flight Sans 36) + 「내 사주, 어디가 강하고 / 무엇이 부족할까?」 + 안내 14/22. Preview 01~04 그대로 |
| 07 Chapters | 05 | 모서리 장식 4개 삭제, Eyebrow 흰색 Pretendard 18, Title 1 「1년 내내 다시 펼쳐볼」 Pretendard 24 금빛 그라디언트, Title 2 서강대체 32/48. 두루마리 208×104 → 238×119(76, 330), 도장 손잡이 (242, 330), 배경 그라디언트 끝색 #223369 → #052354 |
| 08 Timing | 06 | 제목 「인생은 타이밍이라는데 / 내 운의 타이밍은 / 언제일까?」(「언제일까?」 #8a5a1c), 설명 「…중요한 흐름을 맞춤으로 제공해드립니다」 16/27. 카드 소제목·인용문 서체 Gowun Batang → **Noto Serif KR**(자간 −1%, 인용문 17px) |
| 09 Before After | 07 | 제목 「평범한 하루를 보내던 사람들 / 2027년을 먼저 본 뒤 / **무엇이 달라졌을까요?**」(Flight Sans 34), 연회색 방사 배경. Before·After 라벨 12px, 작성자 14/12, 본문 14/23 #211c1a |
| 10 Review List | 08 | 제목 「직접 경험한 분들의 생생한 후기」(서강대체 24/38), 설명 「…소중한 실제 후기들을 확인해 보세요」, 후기 본문 15/24 → 16/26 |
| 11 Closing Headline | 09 | 메인 「**미래는 바꿀 수 있습니다**」(Flight Sans 34), 삼각형 위 별 장식(점 416개 SVG), 모서리 장식 54×57 새 SVG, 설명 16/27 |
| 12 Purchase | 10 | 헤더 제목 「당신의 **정미년**을 / 읽어 드립니다」(서강대체 32/41) |
| 13 Footer · Sticky / Bottom CTA | 11 · BottomBar | 저작권·카운트다운 숫자 Poppins → Pretendard(변경 없음 외) |
| 서체 | — | Poppins·Gowun Batang 사용 중단. 6종(Pretendard, 서강대체, Noto Serif KR, Noto Sans KR, Flight Sans, Song Myung) |

11/18 변경(1차 대비)은 git 이력의 이전 커밋(`3a18b80`) HANDOFF.md 0장을 참고한다.

---

## 1. 개요

| 항목 | 내용 |
|---|---|
| 피그마 | [퀀타로 › 2027랜딩페이지 › 2027 신년운세 · Landing · Mobile 390 (Handoff 11/18)](https://www.figma.com/design/Gdc88dYmSYwu4XDrMug1Ut/%ED%80%80%ED%83%80%EB%A1%9C?node-id=982-617) · fileKey `Gdc88dYmSYwu4XDrMug1Ut` · node `982:617` (390 × 16561) · 섹션 `이거 확인해주세요` · 단독 모션 확인용 `1004:378`(두루마리 펼침 3s) |
| 플로우 범위 | 01 Hero → 02 Need → 03 Preview GIF → 04 Free Result → 05 Intro → 06 Paid Preview → 07 Chapters → 08 Timing → 09 Before After Reviews → 10 Review List → 11 Closing Headline → 12 Purchase → 13 Footer (+ 하단 고정 Sticky / Bottom CTA) |
| 기준 화면 | 모바일 웹뷰 390px, 피그마 절대 좌표 기반 고정 레이아웃 (390 미만 대응은 [확인 필요] 8-9) |
| 데모 기술 | HTML + Tailwind(Play CDN 3.4.16) + 바닐라 JS, **빌드 없음** |

### 실행 방법
1. `handoff/index.html`을 브라우저(Chrome·Edge·Safari)로 연다. 서버가 필요 없다. 단 Tailwind·웹폰트를 CDN에서 받아 오므로 **인터넷 연결이 필요**하다.
2. 브라우저 가운데에 390px UI가 100% 배율로 뜬다. 오른쪽 위 「데모 패널」 버튼으로 상태 전환 패널을 연다. 브라우저 폭이 1070px 이상이면 패널이 열린 채로 시작한다.
3. `index.html?flat`으로 열면 내부 스크롤과 모션 없이 전체 길이를 한 장으로 보여 준다(캡처·검수용).

### 데모 패널 기능
- **화면 바로가기:** 13개 섹션으로 0.4s 스크롤
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
- 이 피그마 화면에는 **컴포넌트와 인스턴스가 거의 없다**(대부분 일반 Frame). 그래서 레이어 이름을 컴포넌트 단위로 보고 나눴다(D-01).
- 모션 재생 조건은 피그마 각 레이어의 **Dev Mode 주석**에도 적혀 있다(01 인물, 02 체크리스트, 05 두루마리, 07 도장 손잡이·목차, 10 후기 흐름).

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
| `--x-gold-line` | #8c6d1f | 08 Timing 세로선 |
| `--x-gold-light` | #f0d9a0 | 칩·하이라이트 테두리, 구매 버튼, 선택 Option |
| `--x-gold-title` | #f0c76e | 12 「신년운세」 |
| `--x-gold-underline` | #e7cf92 | 08 인용문 밑줄 |
| `--x-ivory` | #fdf8ef | 02 배경, 칩 배경, Month highlight |
| `--x-paper` | #fdfbf9 | 04 결과지 바탕 |
| `--x-paper-2` | #fefdfc | 05 Scene 2·06 배경, 07 TOC 헤더·푸터 |
| `--x-cream` | #fffdf9 | 09 배경 |
| `--x-line` | #e8dfd1 | 입력 테두리, 카드 안쪽 테두리 |
| `--x-line-2` | #ececec | 월 셀·장 구분선, Sticky 상단선 |
| `--x-badge-line` | #d9d4ca | 「목업 문구」「가상 생년월일」 배지 |
| `--x-gray-text` | #6b6f76 | 보조 문구 |
| `--x-gray-text-2` | #6b7280 | 후기 날짜·10 설명, 08 하단 안내 |
| `--x-navy-deep` | #183767 | 08 CTA 배경 (`accent/default`와 다름 · D-03) |
| `--x-navy-title` | #224d91 | 11 「사주는 못 바꿔도」 |
| `--x-ink` | #101c30 | 12 구매 버튼 글자 |
| `--x-footer-bg` | #f7f6f3 | 13 Footer 배경 |
| `--x-review-bg` | #f8f9fb | 10 Review Card 배경 |
| `--x-stamp-red` | #b8201c | 07 Stamp 테두리·글자 |

### 2-3. 서체 (`--font-*` / Tailwind `font-*`)

| 토큰 | 서체 | 용도 | 제공 |
|---|---|---|---|
| `sogang` | SOGANG UNIVERSITY (서강대체) | 대형 헤드라인 | `assets/fonts/SOGANGUNIVERSITYTTF.woff2` (라이선스 [확인 필요] D-04). 피그마는 일반 「SOGANG UNIVERSITY」 이름으로 되어 있고, 제출본에서는 TTF 웹폰트로 통일(8-18) |
| `pretendard` | Pretendard | 본문·UI 전반, 숫자(월·카운트다운·저작권) | jsDelivr CDN v1.3.9 |
| `serif-kr` | Noto Serif KR | 한자, 결과지 제목, 08 카드 소제목·인용문, 12 타이틀 | Google Fonts |
| `noto-sans` | Noto Sans KR | 05 두루마리 본문, 08 카드 보조문구, 12 설명 | Google Fonts |
| `flight` | **Flight Sans OTF** (Title·Bold) | 05 「퀀타로는」「똑같은 이야기들」 두루마리 번호 01~03 ⚠ 표시, 06 「나만의 맞춤 결과지」, 09 「무엇이 달라졌을까요?」, 11 「미래는 바꿀 수 있습니다」 | **파일 미수령.** `assets/fonts/FlightSans-Title.woff2`에 넣으면 적용, 없으면 Pretendard ExtraBold 대체 (8-21 · D-30) |
| `song-myung` | Song Myung | 07 Stamp 글자 | Google Fonts |

---

## 3. 화면별 스펙

y는 프레임 `982:617` 기준, 크기는 px이다. 세부 좌표와 서체는 `index.html`의 해당 섹션과 `data.js`를 참고한다.

| 화면 | 노드 | y / 높이 | 배경 | 구성 · 핵심 스펙 |
|---|---|---|---|---|
| **01 Hero** | 982:2034 | 0 / 934 | 이미지 | 「Hero / BG Hanok Door」 436×944(-23,-9) · 「2027년에도」 Pretendard Medium 24/40(top 100) · 「열심히만 사실 건가요?」 서강대체 32/41(top 148) · 「기회가 오는 날도 모른채 말이에요」 서강대체 18/41(top 225) · Hero / Dot 1~3(4px, top 140) + Dot 4~6 금빛 번짐(14px SVG) · 「Hero / Image 차우진」 342×588(126,356, I-01) |
| **02 Need** | 982:1987 | 934 / 1046 | 별밤 이미지(Need / Checklist Panel) + 아래 노란빛 페이드 | Need / Title: 「이런 분들이라면」 Pretendard Medium 18/27 · 「반드시 확인하세요」 서강대체 40/54 흰→#f0d9a0 · Need / BG Image 두루마리를 든 차우진(top 213, 315 높이) · Need / Checklist(top 523, 420 클립): Check Card ×6 360×60, 라운드 30, 좌 −24(justify-end) / 우 54, 72px 간격, #30425e·#183972, 체크 20 + Pretendard Regular 18/24 #e8edf5 + Bold 흰색(I-02) · Need / Scroll Cue 점선 + 빛나는 점(175, 916, 40×115) |
| **03 Preview GIF** | 982:1960 | 1980 / 804 | 흰색 | GIF 390×509 + 어두운 그라디언트 + Preview / Heading(top 312, 서강대체 24/36 · Pretendard 16/27) → **클릭 시 입력 영역으로 스크롤(I-03)** · Free Check / Input + CTA(top 540): Birth Select 158/80/80(값 Pretendard Medium 18/27) + CTA / Free Result · Connector(top 671) |
| **04 Free Result** | 982:1811 | 2784 / 1392 | 흰색 | Free Result / Card 360×1287(15, 69) › Result / Content 342×1265(`--x-paper`, Corner Ornament ×4) · Day Master Block · MonthMap · Month Legend 5줄. **상태 4종은 5장 참고** |
| **05 Intro** | 982:1678 | 4176 / 2792 | 0~938 남색→검정 그라디언트 · 938~ `--x-paper-2` | **Dark Wrap(998:289)**: Intro / Stars · Warning Header 390×300(사진 흐림 4px + 그림자 그라디언트 + A / Glow + ⚠ 56×50 #e2463c 계열 + 「지금까지 읽은 신년운세」 Pretendard 18 #c8d2e0 · 「누구에게나」 서강대체 32/46 · 「똑같은 이야기들」 Flight Sans 40/50 글자 질감) · Item 01~03(top 300/468/636): 아이콘 36 + 라벨 Pretendard 15 #8a909a + 말풍선 310×94(흰 6% · 테두리 10% · 라운드 4/18/18/18, 서강대체 18/28 #c9cdd4 + Pretendard 14/22 #8a909a) · 「그런데」 서강대체 18(top 822) · 「정말 모두의 운명이 같을까요?」 서강대체 24(top 855) 금빛 질감 + 그림자. **Scene 2(982:1679, top 938)**: 창살 장식 · 구름 2개(⚠ 8-22) · 「퀀타로는」 Flight Sans 58 · 「다릅니다」 서강대체 58 #8a5a1c · 설명 Pretendard Medium 16/26 #4b5563 · 금실 장식 + **Scroll / Component · 펼침 모션 360×855.4(15, 356.6, I-17)** · Block C: 「단순한 운세 예측을 넘은」 Pretendard Medium 24/42 · 「술사의 깊이있는 해석」 서강대체 32/41 · Intro / Image 차우진 372×437 · Intro / BG Library 421×495(좌우 반전 · 위 40%·좌우 8% 마스크 · 채도 −25 · 노출 +10) · Intro / Fade |
| **06 Paid Preview** | 982:1626 | 6968 / 1924 | `--x-paper-2` | Header: 「자리에 멈추게 만드는」 Pretendard Medium 24/46 · 「나만의 맞춤 결과지」 Flight Sans 36/41 · 「내 사주, 어디가 강하고 / 무엇이 부족할까?」 서강대체 24/36 · 안내 Pretendard 14/22 · 두루마리 106 · Preview 01~04(top 441/833/1221/1571). 크롭 값은 `data.js › paidPreviews` |
| **07 Chapters** | 982:1470 | 8892 / 1880 | 위 라운드 80 네이비 그라디언트(#111a36→#052354, 섹션 위로 116) | Eyebrow 「한 번 읽고 끝나는 운세가 아닌」 Pretendard Medium 18 흰색(top 66) · Title 1 「1년 내내 다시 펼쳐볼」 Pretendard Medium 24/36 #ffedbf→#ca8c0d(top 106) · Title 2 「내 2027년 ‘안내서’」 서강대체 32/48(top 146) · 두루마리 238×119(Background 기준 76, 330) · **Chapters / Stamp Tool 72×72(242, 330) + Scroll / Seal Impact Ring(I-16)** · TOC Card 360×1494(top 345): Header · Numbered List(Chapter 0~9, Stamp_00~09 질문형) · Footer(메타 + CTA Button 302) |
| **08 Timing** | 982:1355 | 10772 / 2068 | #001026→#1b3b6f + 한지 | Lantern Deco(305, 3) · 「인생은 타이밍이라는데」 Pretendard Medium 18/28(top 41) · 「내 운의 타이밍은 / 언제일까?」 서강대체 32/48(그라디언트 + #8a5a1c, top 73) · Timing / Sub Pretendard 16/27(top 173) · Timing / Card ×4(top 267, 소제목 Noto Serif KR Bold 20 · 인용문 17/28) · 하단 안내(top 1917) · CTA / Full Reading(top 1981) |
| **09 Before After Reviews** | 982:1291 | 12840 / 1368 | `--x-cream` | Reviews / Heading 342×162(블러 20 + 연회색 방사 그라디언트): 「평범한 하루를 보내던 사람들」 Pretendard SemiBold 18/30 · 「2027년을 먼저 본 뒤」 서강대체 24/39 #1b3b6f · 「무엇이 달라졌을까요?」 Flight Sans 34/43 · Down Arrow 72×40 · Review / Card 1~3(top 266) |
| **10 Review List** | 982:1163 | 14208 / 394 | 흰색 | 「직접 경험한 분들의 생생한 후기」 서강대체 24/38 · 설명 Pretendard 14/22 #6b7280 2줄 · Review Card 01~05 282×206(top 156, 본문 16/26) → 무한 슬라이드(I-09) |
| **11 Closing Headline** | 982:721 | 14602 / 437 | 흰색 → 하단 #0b172b | Glow · Blue Triangle · **Deco Stars(점 416개 SVG, top 230)** · Bottom Blend · Deco Corner 54×57(5,2 / 331,2) · 「사주는 못 바꿔도」 서강대체 24/29 #224d91(top 60) · 「미래는 바꿀 수 있습니다」 Flight Sans 34/45(top 93) · 설명 Pretendard 16/27(top 158) |
| **12 Purchase** | 982:666 | 15039 / 1041 | 흰색 + 위 네이비 헤더 190 + 초상 582×878 | 「당신의 정미년을 / 읽어 드립니다」 서강대체 32/41(「정미년」 #f0d9a0, top 28) · 설명 Noto Sans 15/24 #c8d2e0(top 114) · Product Card 342×508(top 517) |
| **13 Footer** | 982:618 | 16080 / 481 | `--x-footer-bg` | 로고 · 링크 3개 · 회사 정보 7줄 · © 2026 QUANTARO.(Pretendard) · 끝에 Sticky 높이만큼 113px 여백 |
| **Sticky / Bottom CTA** (고정) | 982:2046 | 화면 하단 고정 | `bg/page` + 상단선 | Countdown(「묶음 할인 마감까지」 + Pretendard SemiBold 14) · CTA 「내 풀이 전체 열기 · 33,000원」 |

### 공통 CTA (`.cta-primary`)
CTA / Free Result, CTA Button(07), CTA / Full Reading(08), Sticky / Bottom CTA가 같은 스펙을 쓴다.
- 크기와 모양: 높이 56, 라운드 14
- 색: 배경 `accent/default`, 글자 `text/inverse`
- 글자: Pretendard Bold 16/24, 자간 -0.32
- 예외: 08만 배경이 `--x-navy-deep`이다(D-03).
- 눌림: brightness .9, 비활성: opacity .6

---

## 4. 인터랙션 정의

| # | 트리거 | 동작 | 결과 | 시간 · 이징 |
|---|---|---|---|---|
| I-01 | 첫 화면 로드(01 Hero가 30% 보임) | 「Hero / Image 차우진」 translateX 200px → 0 | 인물이 오른쪽에서 들어와 x 126에 멈춤 | 1.5s ease-out, 1회 (피그마 982:2036) |
| I-02 | 02 Need / Checklist가 30% 보임 | Need / Check Card 01~06: opacity 0→1, translateY 12→0 | 체크 카드가 위에서부터 차례로 떠오름 | 지연 .25/.75/1.25/1.75/2.25/2.75s · 각 .45s ease-out, 1회 (피그마 982:1991~2021) |
| I-03 | 03 「나의 2027년 미리보기」 탭 | Free Check / Input + CTA로 스크롤 (위 24px 여백) | 입력 영역이 화면 위쪽에 옴 | 0.4s easeOutCubic (피그마 SCROLL_TO 0.4s · D-11) |
| I-04 | Birth Select 탭 | OS 기본 선택기(네이티브 `<select>`) 열림 → 값 표시 | 년도 1930~2012(내림차순)·월·일. 년·월을 바꾸면 일수 다시 계산(윤년 포함), 범위를 넘는 일은 선택 해제 | 즉시 (D-06) |
| I-05 | CTA / Free Result (빈 칸 있음) | 빈 칸 빨간 테두리(#d14343) + 「생년월일을 모두 선택해 주세요.」 | 유효성 에러. 칸을 채우면 해당 칸 에러 해제 | 즉시 (D-07) |
| I-06 | CTA / Free Result (모두 입력) | 버튼 「확인 중…」 + 스피너, 비활성 → 04 위를 흰색으로 덮고 로딩 카드 | 로딩 → 결과(제목 날짜 반영) 또는 요청 에러. **스크롤 이동 없음, 페이지 높이 유지** | 로딩 1.2s (D-07, D-08) |
| I-07 | 「다시 시도」(요청 에러) | I-06과 같음 | 로딩 → 결과 | 1.2s |
| I-08 | 07 Numbered List가 30% 보임 | Stamp_NN 내려찍기: scale 1.75→1.08/.89→.98/1.035→1.015/.985→1, 회전 -5°→0, Y -26→0 + 잉크 등장 + 착지 순간 Impact Ring 확산 | 도장 10개가 차례로 찍힘 | 도장마다 .65s(지점 38.4/52/72%), 시작 **1.3s** + 0.5s×N(11/18: I-16 뒤로 1s 이동), 잉크 .0975s, 링 .29s(착지 +.25s), 1회 (D-21) |
| I-09 | 10 표시 중 | Review List / Cards translateX 0 → -1470px | 카드 5장 + 복제 5장 무한 슬라이드 | 36.489s linear 무한(약 40px/s) |
| I-10 | 12 Option N 탭 | 해당 Option `data-selected=true`(골드 30% 배경, 테두리, radio dot) | PurchaseButton 문구가 「{가격} 구매하기」로 바뀜 | 배경·테두리 .15s |
| I-11 | 07 CTA Button · 08 CTA / Full Reading · 12 PurchaseButton · Sticky / Bottom CTA 탭 | `https://quantaro.kr/newyear2027`로 이동 | 데모는 새 탭 + 안내 토스트, 실서비스는 같은 창 이동 권장 | 즉시 · 토스트 2.2s (D-10) |
| I-12 | Footer 링크 3개 탭 | 이동 막음 + 「[임시 링크] … — URL 확인 후 연결」 토스트 | URL 미정 | 토스트 2.2s |
| I-13 | 페이지 진입 | 카운트다운 1초마다 감소(`N일 HH:MM:SS`) | 0이 되면 0에서 멈춤 | 1s 간격 (D-09) |
| I-14 | 스크롤 | Sticky / Bottom CTA는 스크롤 영역 밖에 **항상 고정** | Footer는 113px 여백 때문에 가려지지 않음 | — (D-09) |
| ~~I-15~~ | — | 11/19 피그마에서 04 Upsell 블록이 빠져 삭제 | — | — |
| I-16 | 07 두루마리(Scroll Image)가 30% 보임 | Chapters / Stamp Tool: 제자리 → 두루마리 위로 이동(x −78, y −43, 반시계 8°, 1.06배) → 내려찍기(y −15, 1.04×0.92 눌림) → 들어 올려 제자리 복귀(시계 4° 흔들림). 찍는 순간 Scroll / Seal Impact Ring(금색 #b8913a 테두리 2px) 불투명도 .35→0, 1→1.5배 | 도장 손잡이가 한 번 찍고 돌아옴 | 0.2~1.2s(축별 키프레임은 components.css 주석) · 링 .62~.92s ease-out · 1회 (피그마 982:1475, 982:1474) |
| **I-17** | 05 두루마리(Scroll / Component · 펼침 모션)가 30% 보임 | ① 종이 노출 마스크 높이 0 → 708.9 ② 하단 봉 translateY −751.4 → 0 + 앞쪽 기울기 −18° → 0 ③ 말린 종이 두께 22 → 0 · translateY −773.39 → 0, 1.75~2.0s 페이드 ④ 글 11줄 opacity 0→1 · translateY 10→0 ⑤ 수묵 산맥 opacity 0→1 | 두루마리가 위에서 아래로 펼쳐지고, 글이 「퀀타로가 다른 세 가지 이유 → 01 → 02 → 03」 읽는 순서로 나타남 | ①②③ 0.2→2.0s `cubic-bezier(.33,0,.15,1)` · ④ 0.55 / 0.85·0.93·1.01·1.09 / 1.2·1.28·1.36 / 1.55·1.63·1.71s, 각 .45s `cubic-bezier(.22,1,.36,1)` · ⑤ 1.8→2.4s ease-out · 1회 (피그마 1006:188, 단독 프레임 1004:378) |
| 공통 | OS 「동작 줄이기」 켜짐 | 모든 모션 끔, 최종 상태로 표시 | — | — |

모션은 피그마에서 페이지 전체가 한 타임라인(36.489s)에 묶여 있다. 데모는 모션이 있는 영역이 30% 보일 때 1회 재생하도록 바꿨다(D-12). 사용자 확정(11/19): **02 체크리스트·05 두루마리는 스크롤로 그 영역에 닿았을 때 재생**한다. 02는 체크리스트, 05는 두루마리, 07은 두루마리와 목차를 따로 관찰한다(`app.js › MOTION_TARGETS`). 10 슬라이드만 무한 반복이다.

---

## 5. 상태 · 예외 케이스

### 5-1. Free Check(폼) · Free Result(04) 상태
| 상태 | 폼 `data-state` | 04 `data-state` | 화면 | 피그마 |
|---|---|---|---|---|
| 입력 완료 · 결과 | `filled` | `result` | 피그마 원본(1999.11.18). **첫 진입 기본값** | ✅ 있음 |
| 빈 상태 | `empty` | `empty` | 상태 카드 「생년월일을 선택하면 무료 결과 요약이 여기에 표시돼요」 | ❌ 데모 추가 |
| 유효성 에러 | `invalid` | `empty` | 빈 칸 빨간 테두리 + 에러 문구 | ❌ 데모 추가 |
| 로딩 | `loading` | `loading` (+ `data-keep`=직전 상태) | 직전 화면 위를 흰색으로 덮고 로딩 카드(스피너 + 스켈레톤 3줄). 버튼 비활성 | ❌ 데모 추가 |
| 요청 에러 | `filled` | `error` | 「결과를 불러오지 못했어요」 + 「다시 시도」 | ❌ 데모 추가 |

### 5-2. 예외 · 경계값
- **없는 날짜:** 2/30, 2/29(평년), 4/31 같은 날짜는 년·월을 바꾸면 일 선택이 해제된다.
- **연타:** 로딩 중에는 버튼이 비활성이라 다시 누를 수 없다. 상태가 바뀌면 진행 중이던 타이머를 취소한다.
- **결과 문구:** 날짜가 바뀌어도 04 제목만 바뀐다. 본문(甲, 열두 달 지도)은 목업으로 고정이다(D-08). 07 TOC의 「1999년 11월 18일생」은 「가상 생년월일」 배지가 있어 고정이다.
- **에러 상태 높이:** 빈 상태·에러 카드는 최소 높이 260px이라 결과(1392px)보다 짧다. 로딩일 때만 직전 높이를 유지한다.
- **카운트다운 종료:** `0일 00:00:00`에서 멈춘다. 종료 후 문구나 숨김 처리는 정하지 않았다(8-4).
- **이미지 없음:** 같은 이름의 파일이 없으면 피그마 크기의 플레이스홀더와 라벨을 보여 준다(7장).
- **10 후기 본문:** 4줄을 넘으면 말줄임(`-webkit-line-clamp: 4`) 처리한다.
- **Option 비교가:** `compare`·`saving`이 `null`이면 취소선과 절약 배지를 숨긴다(2027 신년운세 33,000원).

---

## 6. 컴포넌트 목록

코드 위치 표기: `html:` = index.html의 섹션 또는 `<template>` id, `css:` = components.css의 클래스, `js:` = app.js 함수 / data.js 키.

| 컴포넌트 (data-component) | 화면 | variant · 상태 | 코드 위치 |
|---|---|---|---|
| Hero / BG Hanok Door / Hero / Image 차우진 / Dot 1~6 | 01 | `data-motion="hero-slide"` | html: `#s01` · css: `[data-motion="hero-slide"]` |
| Need / Check Card 01~06 · Need / Scroll Cue | 02 | `data-card="01~06"`, 좌측 카드 `justify-end`, `data-motion="need-card"` | html: `#need-checklist` · css: `.need-card*` |
| Preview / Hero Panel | 03 | `data-action="scroll-to-free-check"` | html: `#s03` · css: `.preview-gif__dim` |
| Free Check / Input + CTA | 03 | `data-state`: filled · empty · invalid · loading | html: `#free-check` · js: `setState`, `submit` |
| Birth Select · Year / Month / Day | 03 | `data-variant`: year · month · day / `data-invalid` | css: `.birth-select` · js: `initSelects`, `syncDays` |
| CTA / Free Result | 03 | `data-loading`, `disabled` | css: `.cta-primary` |
| Free Result / Card · Result / Content | 04 | `#free-result[data-state]`: result · empty · loading · error | html: `#free-result` · css: `.paper-card`, `.free-result__view` |
| Corner Ornament TL/TR/BL/BR | 04 · 07 | `data-pos`: tl · tr · bl · br | css: `.corner-ornament` |
| Hanja Badge / Keyword Tags / Badge · 목업 문구 | 04 | — | css: `.hanja-badge`, `.keyword-tag`, `.badge-outline` |
| Month · N월 | 04 | `data-variant`: default · highlight | html: `tpl-month-cell` · css: `.month-cell` · js: `renderMonths` / data `months` |
| Legend · 이름 | 04 | `data-variant`: default · highlight | html: `tpl-legend-row` · css: `.legend-row` / data `legend` |
| Intro / Warning Header · Item 01~03(Avatar · Label · Bubble) · Question Lead / Main | 05 Dark Wrap | 글자 질감 `.text-texture`(`--tex`) | html: `#s05` · css: `.intro-bubble*`, `.text-texture` |
| Scroll / Component · 펼침 모션 | 05 Scene 2 | `data-motion`: scroll-mask · scroll-rod · scroll-paper · scroll-text(`--d` 지연) · scroll-mountain | html: `#scroll-unroll` · css: `.scroll-unroll*`, `@keyframes scroll-*` |
| Intro / BG Library · Block C · Fade | 05 Scene 2 | — | css: `.intro-library` |
| Preview NN · 이름 | 06 | 4개(좌표·크롭 데이터) | html: `tpl-paid-preview` · js: `renderPaid` / data `paidPreviews` |
| Chapter N | 07 | 0~9 | html: `tpl-chapter` · css: `.chapter` · js: `renderChapters` / data `chapters` |
| Chapters / Stamp Tool · Scroll / Seal Impact Ring | 07 | `data-motion="stamp-tool"` · `"seal-ring"` | html: `#chapters-bg` · css: `.stamp-tool`, `.seal-ring`, `@keyframes st-*`, `seal-ring` |
| Stamp_NN | 07 | 위치·폭·회전·문구(text)는 데이터, `data-motion="stamp"` | css: `.stamp*`, `@keyframes stamp-*` · svg 필터 `#stamp-ink` / data `chapters[].stamp`, `stampTiming` |
| CTA Button (07) | 07 | `data-action="external"` | html: `#s07` |
| Timing / Card N · 제N장 | 08 | 카드 4개 / 보조문구 서체 `pretendard` · `noto-sans` | html: `tpl-timing-card` · js: `renderTiming` / data `timingCards` |
| Timing / Lantern | 08 | 벡터 51개 | data `lantern` · `assets/svg/lantern/` |
| CTA / Full Reading | 08 | `data-action="external"` | html: `#s08` |
| Review / Card N (Before / Frame · After / Frame) | 09 | After / Panel `data-variant`: below-header(카드 1) · full(카드 2·3) | html: `tpl-ba-review` · css: `.ba-*` · js: `renderReviews` / data `baReviews` |
| Review Card NN · Review List / Motion | 10 | `data-variant`: (기본) · justify / `data-motion="marquee"` + Loop Copy | html: `tpl-review-card` · css: `.review-card`, `@keyframes marquee` / data `reviews` |
| Closing / Glow · Blue Triangle · Deco Stars · Bottom Blend · Deco Corner | 11 | — | html: `#s11` · svg `closing-*.svg` |
| Option N · 이름 | 12 | `data-selected`: true · false (role=radio) | html: `tpl-option` · css: `.option`, `.radio`, `.saving-badge` · js: `renderOptions`, `selectOption` / data `options` |
| PurchaseButton | 12 | 문구 = 선택 가격 | css: `.purchase-button` |
| Footer / Links · Definition List | 13 | `data-action="temp-link"` | css: `.footer-link`, `.company-row` / data `company` |
| Sticky / Bottom CTA (Countdown · CTA) | 고정 | — | css: `.bottom-bar` · js: `tickCountdown` / data `countdownTarget` |
| Toast · 상태 카드 · 데모 패널 | (데모 추가) | — | css: `.toast`, `.state-card`, `.panel` — 실제 개발 범위 아님 |

---

## 7. 이미지 · 에셋 목록

**교체 규칙(D-20):** `<img data-slot="이름">`은 `assets/img/이름.gif → .webp → .png → .jpg` 순서로 찾아 처음 열리는 파일을 쓴다. 파일이 하나도 없으면 피그마 크기의 플레이스홀더를 보여 준다. 그래서 **같은 이름으로 파일만 넣으면 바로 반영된다.**

| slot | 화면 | 표시 크기 (피그마) | 비율 | 라운드 | 현재 파일 (원본 크기) | 권장 포맷 | 준비 |
|---|---|---|---|---|---|---|---|
| `hero-hanok-door` | 01 Hero | 436×944 | 0.46 | 0 | png 474×1024 · 570KB | WebP | ✅ 11/19 교체 |
| `hero-cha-woojin-fan` | 01 Hero | 342×588 | 0.58 | 0 | png 956×1645 · 1.8MB | WebP(투명) | ✅ |
| `need-bg` | 02 Need | 390×1046 (cover) | 0.37 | 0 | png 547×1024 · 842KB | WebP | ✅ 11/19 교체 |
| `need-character` | 02 Need | 427×315 크롭(이미지 427×702, 위쪽 44.87%) | — | 0 | png 978×1608 · 1.8MB | WebP(투명) | ✅ |
| `preview-2027` | 03 Preview GIF | 390×509 | 0.77 | 0 | **gif 720×940 · 50프레임 · 9.5MB** | MP4/WebM 또는 애니메이션 WebP | ✅ (용량 큼) |
| `intro-warning-bg` | 05 Warning Header | 430×340 (흐림 4px) | 1.26 | 0 | png 1024×727 · 880KB | WebP/JPG | ✅ 11/19 |
| `intro-library` | 05 BG Library | 421×495 (좌우 반전 + 마스크) | 0.85 | 0 | png 820×1024 · 1.3MB | WebP(투명) | ✅ 11/19 |
| `intro-master-cha-woojin` | 05 Block C | 372×437 크롭(이미지 372×496) | — | 0 | png 1086×1448 · 1.9MB | WebP(투명) | ✅ 11/19 |
| `paid-scroll` | 06 Header | 112×112 (106 클립) | 1 | 0 | png 1024×1024 · 435KB | WebP | ✅ |
| `card-paper-texture` | 06 카드 | 399×253 | 1.58 | 0 | png 576×1024 · 377KB | WebP/JPG | ✅ |
| `paid-result-sheet` | 06 카드·블러 | 341×128~190 크롭 | — | 16 | png 621×1265 · 66KB | PNG(교체 시 같은 레이아웃 필수 · D-15) | ✅ |
| `chapters-book` | 07 | 459×437 | 1.05 | 0 | png 1024×976 · 707KB | WebP | ✅ |
| `chapters-scroll` | 07 | 238×119 | 2 | 0 | png 1774×887 · 928KB | WebP(투명) | ✅ |
| `chapters-stamp-tool` | 07 | 72×72 | 1 | 0 | png 1254×1254 · 929KB | WebP(투명, 144×144 @2x면 충분) | ✅ |
| `hanji` | 07 · 08 | 848×1507 / 390×2068 | — | 0 | png 576×1024 · 561KB | WebP/JPG(반복 텍스처) | ✅ |
| `timing-bka04` · `bka02` · `bka07` · `bka05` | 08 카드 1~4 | 342×192~197 | 1.74~1.78 | 14 | **gif 342×197 · 75프레임** · 2.3~2.8MB | MP4/WebM 또는 애니메이션 WebP | ✅ |
| `review-1~3-before` | 09 카드 1~3 | 179×153 | 1.17 | 2.03 | png 1280×1024 · 1.7~1.9MB | WebP (360×306 @2x) | ✅ |
| `review-1-after` | 09 카드 1 | 180×147 (헤더 아래) | 1.22 | 3.05 | png 1280×1024 · 2.0MB | WebP | ✅ |
| `review-2-after` · `review-3-after` | 09 카드 2·3 | 180×169 (전체) | 1.07 | 3.05 | png 1024×1024 · 1.4~2.0MB | WebP | ✅ |
| `purchase-portrait` | 12 Purchase | 582×878 | 0.66 | 0 | png 683×1024 · 1.0MB | WebP | ✅ |
| `logo-quantaro` | 13 Footer | 95×22 | 4.3 | 0 | png 413×96 · 45KB | SVG 권장 | ✅ |

### slot이 아닌 에셋
| 파일 | 용도 | 비고 |
|---|---|---|
| `assets/img/corner-ornament.png` 550×550 | 04·07 Corner Ornament(CSS 배경, 크롭 + 좌우 반전) | ✅ |
| `assets/img/timing-bka0N.png` ×4 | 08 GIF가 없을 때 쓰는 대체 정지 이미지 | 실서비스에서는 포스터 이미지로 활용 가능 |
| `assets/img/scroll-sprite.png` 1024×1536 | 05 두루마리 원화 1장 — 끈·상단봉·테두리·하단봉 조각을 피그마와 같은 크롭 값으로 잘라 씀 | ✅ 11/19 |
| `assets/img/scroll-mountain-sprite.png` 1024×1536 | 05 두루마리 아래 수묵 산맥 | ✅ 11/19 |
| `assets/img/intro-avatar-01~03.png` 72×72 | 05 말풍선 아이콘(흑백·어둡게 처리된 원형) | ✅ 11/19 |
| `assets/img/intro-accent-texture.png` · `intro-question-texture.png` · `intro-question-lead-texture.png` | 05 「똑같은 이야기들」「정말 모두의…」「그런데」 글자 질감(background-clip: text) | ✅ 11/19 |
| `assets/svg/` 21개 | chevron-down, divider, hero-dot, icon-chevron-right, star-rating-5, need-check, reviews-down-arrow, closing-glow, closing-triangle · **11/19 추가·교체:** hero-dot-glow, need-scroll-cue, intro-stars, intro-glow, intro-warning-triangle, scene-lattice, scene-gold-thread, scene-cloud-left/right(⚠ 8-22), closing-stars, closing-corner-left/right | ✅ |
| `assets/svg/lantern/` 51개 | 08 랜턴 조각 | 하나의 SVG로 합치기 권장(D-16) |
| `assets/fonts/SOGANGUNIVERSITYTTF.woff2` | 서강대체 | 라이선스 확인 필요(D-04) |
| `assets/fonts/FlightSans-Title.woff2` | Flight Sans | **미수령**(8-21) |
| `assets/_unused/` | 1차 06 오버레이 GIF, 11/18에 빠진 별밤·말풍선 SVG, **11/19에 빠진** 04 Intro 차우진·글자 질감·화살표·빛, 05 모서리 장식 | 사용 안 함 |

### GIF 확인 결과
GIF로 받은 화면은 **03 Preview GIF**(50프레임)와 **08 Timing 카드 4장**(각 75프레임)이고, 모두 애니메이션이 살아 있다. 정지 이미지로만 받아진 GIF는 없다.

---

## 8. 확인 필요 사항

개발 전에 기획·디자인과 논의해야 할 항목이다. 괄호 안은 DECISIONS ID다.

| # | 항목 | 현재 데모 | 결정할 것 |
|---|---|---|---|
| 8-1 | **버튼 이동** (D-10) | 07·08·12·Sticky CTA 4개가 모두 `quantaro.kr/newyear2027`로 이동(데모는 새 탭) | ① 「구매 구성 선택 이동」이 CTA → 12 Purchase 스크롤을 뜻했는지 ② 같은 창 이동 여부 ③ 선택 구성(33,000/55,000/69,000)을 URL 파라미터로 넘길지 ④ Footer 링크 3개 URL |
| 8-2 | **무료 운세 첫 화면** (D-05) | 피그마대로 입력 완료와 결과(1999.11.18)를 보여 줌 | 실서비스에서 빈 상태로 시작할지, 샘플로 보여 줄지. 빈 상태·로딩·에러 디자인 |
| 8-3 | **생년월일 입력** (D-06, D-07) | 양력, 1930~2012, 네이티브 select, 에러 문구와 색 임의 | 연도 범위, 음력·태어난 시 입력 여부, 에러 문구·색, 로딩 시간과 API 실패 처리 |
| 8-4 | **Sticky / Bottom CTA** (D-09) | 항상 고정, 마감 시각 임의 `2027-01-03 23:59:59 KST`, CTA 33,000원 고정 | 실제 마감 일시와 할인 근거, 종료 후 처리, 특정 구간에서 숨길지, 선택 구성 가격과 연동할지 |
| 8-5 | **12 비교가 노출** (D-18) | 66,000원·132,000원 취소선과 「N원 절약」 배지 노출 | 개별 구매가가 실제 판매가인지(취소선 노출 근거) |
| 8-6 | **모션 범위** (D-12, D-25) | 피그마 모션: 01 인물 슬라이드, 02 체크 카드 등장, 05 두루마리 펼침, 07 도장 손잡이·금색 링·낙관 10종, 10 무한 슬라이드. 등장 모션은 스크롤 진입 시 1회(02·05는 사용자 확정) | 10 슬라이드 속도(약 40px/s) 유지 여부 |
| 8-7 | **09 After 배치 차이** (D-14) | 카드 1은 헤더 아래 180×147, 카드 2·3은 180×169 전체 | 의도된 차이인지, 통일한다면 어느 쪽인지 |
| 8-8 | **09 겹침 해석** (D-23) | 「Before 하단 배치」를 레이어 순서(After가 위)로 해석 | 위치를 아래로 옮기라는 뜻이었는지 |
| 8-9 | **반응형** (D-19) | 390px 고정 | 320~389px 기기에서 축소할지 재배치할지 |
| 8-10 | **디자인 토큰** (D-02, D-03) | 미등록 색 20개를 `--x-*`로 모음. 비슷한 값(#1b3b6f/#183767, #8a6a22/#8c6d1f, #6b6f76/#6b7280) 유지 | 피그마 변수로 등록할지, 통일할지 |
| 8-11 | **컴포넌트화** (D-01) | 피그마에 컴포넌트가 없음 | Month 셀, Review Card, Option, CTA 같은 반복 요소를 피그마 컴포넌트로 등록할지 |
| 8-12 | **서체 라이선스** (D-04) | 서강대체 woff2(눈누 배포본) 사용 | 실서비스 사용 라이선스와 배포 방식 |
| 8-13 | **목업 데이터** (D-08, D-17) | 04 결과 본문, 09·10 후기는 피그마 목업 그대로. 10 설명에 「소중한 **실제** 후기들」이라고 적혀 있음. 04 월 지도에만 「목업 문구」 배지 | 실데이터·API 연결 시점, 실제 후기가 아니라면 「실제」 문구와 목업 표기 |
| 8-14 | **07 도장** (D-21) | 질감은 SVG 필터로 근사. 숨김 레이어 `Stamp / Seal`(낙관)은 제외 | 낙관 이미지 사용 여부, 실제 텍스처(PNG/SVG)로 바꿀지 |
| 8-15 | **에셋 용량** (7장) | 03 GIF 9.5MB, 08 GIF 2.3~2.9MB×4, 09 PNG 1.4~2.0MB×6, 05 두루마리 원화 1.8MB | 영상(MP4/WebM)이나 WebP로 바꾸고, lazy-load 적용 |
| 8-16 | **04 카드 여백** (D-13) | 11/19 피그마에서 좌 9 / 우 9로 정리됨 | — (해결) |
| 8-17 | **08 하단 문구** (11/18) | 피그마 그대로 「나머지 아홉 달과…」 / 버튼 「전체 풀이 확인하기」 | 기획 문서(planning 9절) 확정안 「나머지 달과…」 / 「내 열두 달 전체 보기」와 다름. 카드가 4장이라 「아홉 달」 표현 확인 |
| 8-18 | **서강대체 표기** (11/19) | 피그마는 모두 `SOGANG UNIVERSITY`(28곳)로 정리됨. 제출본은 `SOGANGUNIVERSITYTTF.woff2` 웹폰트 하나(`--font-sogang`)로 표시(디자이너 결정) | 같은 서체로 보고 하나로 쓰면 됨 |
| 8-19 | **08 랜턴 넘침** (11/18) | 랜턴이 x 433까지 나감. 데모는 섹션 overflow hidden | 실서비스에서도 잘라서 표시 |
| 8-20 | ~~03 Upsell 이동~~ (D-24) | 11/19 피그마에서 Upsell 블록 삭제 | — (해결) |
| 8-21 | **Flight Sans 서체** (D-30) | 05·06·09·11 제목과 05 숫자에 쓰임. 웹폰트 파일이 없어 Pretendard ExtraBold로 대체 표시 | 웹 사용 라이선스와 woff2 파일 전달(`assets/fonts/FlightSans-Title.woff2`) |
| 8-22 | **05 구름 장식 저작권** (D-31) | 05 Scene 2 상단 구름 2개(`scene-cloud-left/right.svg`)의 원본이 **pngtree 스톡 이미지**(파일명 `imgi_4_pngtree-chinese-style-vector-classical-auspicious-clouds-pattern…`)를 벡터로 바꾼 것 | pngtree 라이선스(상업용 구매 여부·출처 표기 조건) 확인. 라이선스가 없으면 직접 그린 구름으로 교체하거나 삭제 |
| 8-23 | **05 중복 텍스트** | 피그마 Block C에 「단순한 운세 예측을 넘은」 레이어가 2개(998:359는 프레임에 잘려 안 보임) | 안 보이는 레이어(998:359) 삭제 |
| 8-24 | **01 맞춤법** | 「기회가 오는 날도 모른채 말이에요」 | 「모른 채」로 띄어 쓸지 (planning.md 확정안 「기회가 오는 달은 따로 있습니다」와도 다름) |
