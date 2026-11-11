# asset-guide.md — 실제 업로드된 퀀타로 자산 활용 가이드

자료: `QUANTARO_design_assets_v2.zip`
사용 경로 규칙: 프로젝트 루트 아래 `assets/QUANTARO_design_assets_v2/`로 압축 해제

## 1. 에셋 인벤토리

업로드 ZIP README 및 파일 목록 확인 (macOS `__MACOSX`, `.DS_Store` 제외):

| 폴더 | 파일 수 | 내용 |
|---|---:|---|
| `01_logo` | 33 | 가로 락업/세로 도장/파비콘 및 레이어 |
| `02_masters_card` | 11 | 술사 카드 11명 |
| `03_masters_photo` | 39 | 술사별 화보 |
| `04_hero_posters` | 54 | 한·일 포스터, 일부 텍스트 없는 원화 |
| `05_product_cards` | 56 | 전 상품 카드(KO/JA 혼합) |
| `06_wizard_scenes` | 20 | 술사 캐릭터 장면 이미지 |
| `07_fonts` | 31 | 서체 및 라이선스 관련 파일 (외부 배포·재묶음 주의) |
| `08_tokens` | 3 | 색상·간격·타이포그래피 MD |
| `09_screens` | 97 | KO 49장, JA 48장 현행 화면 캡처 |
| `README.md` | 1 | 배포 원본 설명서 |
| **합계** | **345** | **내부 에셋 파일 총수** |

## 2. 2027 신년운세 랜딩페이지 추천 파일 매핑

| 우선순위 | 권장 사용 위치 | 실제 파일 경로 (`assets/QUANTARO_design_assets_v2/` 이후) | 비고 |
|---|---|---|---|
| 높음 | 히어로의 2027 신년운세 상품 이미지 | `05_product_cards/kv_newyear2027.webp` | 480×640 / 상품과 직접 일치 |
| 높음 | 히어로 대안·브랜드 캠페인 | `04_hero_posters/kv_newyear_greet/kv_newyear_greet_art_no_text.webp` | 900×1200 / 여러 캐릭터 단체 원화. CTA/텍스트 별도 레이어 가능 |
| 중간 | 2027 신년 메시지 보조 시각 | `04_hero_posters/kv_newyear_greet/kv_newyear_greet_poster_KO.webp` | 900×1200 / 포스터에 글자가 이미 박혀 있어 중복 텍스트 주의 |
| 높음 | 차우진 스토리형 섹션 / 캐러셀 | `06_wizard_scenes/saju_canonical/wz_cha_veranda.webp` | 1080×1620 / 따뜻한 톤의 인물 장면 |
| 높음 | 결과 화면 설명 전 캐릭터 맥락 | `06_wizard_scenes/saju_canonical/wz_cha_desk.webp` | 1080×1620 / 책상 앞 장면 |
| 중간 | 시작·입력 단계 / 밝은 배경 | `06_wizard_scenes/saju_canonical/wz_cha_window.webp` | 1080×1620 / 창가 장면 |
| 중간 | 다크 네이비 히어로 변형 | `06_wizard_scenes/saju_canonical/wz_cha_starnight.webp` | 1080×1620 / 화이트톤 기본 조건과 조율 필요 |
| 중간 | 스토리 카드 추가 | `06_wizard_scenes/saju_canonical/wz_cha_lantern.webp` | 1080×1620 / 장면 전환에 활용 |
| 높음 | 제품 연결 인물 소개 | `02_masters_card/01_cha-woojin.webp` | 900×1200 / 실제 상품 캐릭터와의 연결 확인 후 활용 |
| 높음 | 결과 미리보기·현행 화면 디자인 확인 | `09_screens/KO/newyear2027_ko_390.png` | 390×3807 / 현재 페이지 캡처, 유료 결과 데이터 정본 아님 |
| 중간 | 사주 입력 플로우 UI 확인 | `09_screens/KO/saju_ko_390.png` | 390×1911 / 랜딩 결과로 직접 오인시키지 말 것 |
| 중간 | 후기 섹션 UI 패턴 확인 | `09_screens/KO/reviews_ko_390.png` | 390×1727 / UI 참고일 뿐 후기 인용 승인과는 별개 |
| 높음 | 상단 로고(화이트 바탕) | `01_logo/B_lockup_horizontal/B_header_light_web_413x96.png` | 로고 색 필터 적용 금지 |
| 중간 | 상단 로고(어두운 배경) | `01_logo/B_lockup_horizontal/B_header_dark_web_413x96.png` | 배경에 맞춰 정본 선택 |
| 중간 | 색상·글자·간격 규칙 확인 | `08_tokens/color.md`, `08_tokens/type.md`, `08_tokens/spacing.md` | 코드 토큰 추출 자료. Figma 변수와 대조 |

## 3. 자산 사용 우선순위

1. Figma에서 확인한 **퀀타로 실제 결과 UI** 및 회사 승인 이미지
2. `05_product_cards/kv_newyear2027.webp`처럼 상품명이 정확히 일치하는 자산
3. `06_wizard_scenes/saju_canonical/`의 차우진 장면들
4. `04_hero_posters`의 로컬라이즈 가능한 텍스트 없는 원화
5. 다른 술사/타 상품 이미지는 **현재 상품과 의미가 일치할 때만** 사용

## 4. 데이터 시각화 관련 주의

Figma 메모에는 `사주 풀이 결과 도식화 / 오행비율 / 신강 / 그럴듯한 데이터 이미지` 활용이 요청되어 있다.
**그러나 ZIP의 `09_screens`는 현행 페이지 전체 캡처이고, 오행 비율·신강 결과의 검증된 개별 원본 이미지를 특정할 수는 없다.**
따라서 다음 중 하나로 진행한다:
- 회사에서 사용 가능한 실제 결과 화면/수치를 확보해 사용하거나
- 테스트 샘플을 직접 만들되 `예시 결과`임을 명시하고 개인 데이터/가짜 이용자 수처럼 보이지 않게 한다.

## 5. 구현·디자인에서의 이미지 취급 규칙

- 기존 자산의 비율 유지, 임의로 늘리거나 좌우 반전하지 않는다.
- 모바일 긴 포스터는 무작정 전체 노출하지 말고 화면 목적에 맞는 크롭을 별도 제안한다.
- `*_art_no_text` 자산은 텍스트와 버튼을 **편집 가능한 개별 Figma TEXT/Frame**으로 올린다.
- `*_poster_KO` 등 텍스트가 구워진 원본은 원본 텍스트를 변경하려고 위에 덮어쓰지 않는다.
- 새 일러스트가 없는 경우 기존 캐릭터 이미지 외형을 임의로 재생성하지 않는다.
- 스크린샷의 가격, 숫자, 혜택은 현행 웹 UI에 등장하더라도 **현재 랜딩의 확정 정책인지 별도 확인**한다.
- `07_fonts`의 실제 폰트 파일을 보고서나 인계 ZIP에 포함시키지 않는다. 라이선스·공식 배포처는 원본 `FONTS.md` 확인.

## 6. 시안별 권장 조합

**A안 — 기존 Claude 흐름 최대한 유지**: `kv_newyear2027.webp` → `wz_cha_starnight.webp`(부분 이미지) → `wz_cha_desk.webp` → 실제 UI 캡처 → 상품 이미지

**B안 — 화이트톤·데이터 중심**: `kv_newyear2027.webp` → 실제 결과 UI/샘플 카드 → `wz_cha_window.webp` → `wz_cha_veranda.webp` → CTA

> A/B는 실제 사용자 실험 제안이 아니라 내부 비교용 표현 방향 예시다. 별도 시안 제작 지시가 없다면 **현재 Claude 화면을 한 벌 수정**한다.

## 7. Claude 시안 원본 이미지 (`assets/img/`, 2026-11-09)

Claude 시안 아티팩트에서 받은 이미지 41개. 장별 삽화는 ZIP(`QUANTARO_design_assets_v2`)에 없고 여기에만 있다.

| 사용 위치 | 파일 | 비고 |
|---|---|---|
| 상단 로고 | `logo_dark.webp` | 네이비 바탕용 |
| 히어로 | `hero_starnight.webp` | `06_wizard_scenes/saju_canonical/wz_cha_starnight.webp`와 같은 장면 |
| 타이밍 장면 4개 | `bka04`(연애) · `bka02`(재물) · `bka07`(건강) · `bka05`(이직) | 실제 결과 삽화 |
| 실제 결과 화면 탭 | `chv00·02·03·04·05·09` (장 표지), `bka00·02·03·04·05·09` (본문 삽화) | 탭 6개 |
| 맞춤 삽화 슬라이드 | `bka00·01·02·04·05·07·08·09` | 8장 |
| 상품 썸네일 | `kv_newyear2027.webp` | ZIP `05_product_cards`와 같은 이미지 |
| 클로징 | `cha_sunset.webp` | ZIP `03_masters_photo/01_cha-woojin/01_cha-woojin_photo4.webp` 계열 |
| 현재 미사용 | `alt00·04·05`, `ch00~09`, `cap_wizard`, `cha_avatar`, `letter_head`, `ring_bg`, `seal`, `story_*` | 시안 원본에 포함, 화면에서는 쓰지 않음 |
