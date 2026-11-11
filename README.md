# 퀀타로 2027 신년운세 랜딩

작업 규칙은 `CLAUDE.md`, 순서는 `WORKFLOW.md`를 먼저 읽는다.

## 문서
- `CLAUDE.md` — 작업 규칙 (Figma Auto Layout 금지, 미승인 수치 금지 등)
- `WORKFLOW.md` — Claude Code + Figma MCP 작업 순서, QA 체크리스트
- `planning.md` — 기획 (섹션 흐름, 인터랙션, CTA 정책)
- `design-reference.md` — 레퍼런스 적용 기준, 브랜드 토큰
- `asset-guide.md` — 에셋 매핑

## 폴더
- `index.html`, `css/style.css`, `js/main.js` — 새 구현
- `src/index.src.html` — 이전 A~D 시안 원본 (참고용, 유지)
- `assets/QUANTARO_design_assets_v2/` — `QUANTARO_design_assets_v2.zip`을 여기에 압축 해제 (`07_fonts`는 git 제외)

로컬 확인: `python3 -m http.server 8000` → http://localhost:8000
