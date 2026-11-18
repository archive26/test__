# 퀀타로 2027 신년운세 랜딩 — landing-cleanup 작업 폴더

작업 규칙은 `CLAUDE.md`, 순서는 `WORKFLOW.md`를 먼저 읽는다.
이 폴더는 **기획·디자인 규칙 문서**만 다룬다. 개발 전달용 결과물은 아래 「결과물 위치」를 본다.

## 최신 기준 (2026-11-18)
- Figma: 「2027 신년운세 · 랜딩 최종 (핸드오프 11/18)」 `840:4784` (390 × 16385, 섹션 `이거 확인해주세요`)
- 개발 전달용 핸드오프: GitHub 브랜치 `landing-2027-handoff` (커밋 `3a18b80`)
  - 서강대체 글꼴까지 포함한 zip: `~/Downloads/퀀타로_핸드오프/3차_1118_GitHub/`

## 문서 (이 폴더 최상위)
| 파일 | 내용 |
|---|---|
| `CLAUDE.md` | 작업 규칙 (Figma Auto Layout 금지, 미승인 수치 금지, 복제본 작업 등) |
| `WORKFLOW.md` | Claude Code + Figma MCP 작업 순서, QA 체크리스트 |
| `planning.md` | 기획 (섹션 흐름, 인터랙션, CTA 정책, 9절 후킹 카피 확정안) |
| `design-rules.md` | 레이어 정리 최소 규칙 + 작업 기록(날짜별) |
| `HANDOFF.md` | 레이어 정리 작업 인수인계 (개발 전달용 핸드오프와 다름) |
| `design-reference.md` | 레퍼런스 적용 기준, 브랜드 토큰 |
| `asset-guide.md` | 에셋 매핑 |

## 폴더
| 폴더 | 내용 |
|---|---|
| `assets/QUANTARO_design_assets_v2/` | 회사 에셋 (`QUANTARO_design_assets_v2.zip` 압축 해제, **git 제외**) |
| `_archive/1113_도장_전달자료/stamps/` | 11/13 05 낙관 도장 PNG·CSS·JS 전달 자료. 11/18 핸드오프로 대체됨 |

11/05 HTML 랜딩 시안 A~D 코드는 이 폴더에서 지웠다(2026-11-18). `~/Documents/퀀타로/test__`(main 브랜치)에 같은 파일이 있다 — 거기서 `python3 -m http.server 8000` → http://localhost:8000

## 같은 저장소의 다른 폴더
| 위치 | 브랜치 | 용도 |
|---|---|---|
| `~/Documents/퀀타로/test__` | `main` | 저장소 원본. 11/05 기획안·초안 보관용 (옮기거나 이름을 바꾸지 않는다 — 작업 폴더 연결이 끊김) |
| `~/orca/workspaces/test__/landing-cleanup` | `landing-cleanup` | 이 폴더 |
| `~/orca/workspaces/test__/퀀타로_전시부스` | `archive26/퀀타로_전시부스` | 전시부스 디자인 |
| `~/orca/workspaces/test__/레퍼런스자동화` | `archive26/레퍼런스자동화` | 레퍼런스 자동화 |
| (폴더 없음) | `landing-2027-handoff` | 개발 전달용 핸드오프 (GitHub에서 확인) |
