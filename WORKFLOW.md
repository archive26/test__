# WORKFLOW.md — Claude Code + Figma MCP 작업 순서

## 0. 입력 자료

- 최신 Claude로 만든 랜딩페이지 **공유 URL과 원본 코드**(가능하면 HTML/React 소스 함께)
- Figma 레퍼런스 섹션: https://www.figma.com/design/Gdc88dYmSYwu4XDrMug1Ut/%ED%80%80%ED%83%80%EB%A1%9C?node-id=297-370
- `QUANTARO_design_assets_v2.zip` (별도 압축 해제)
- 이 패키지의 `planning.md`, `design-reference.md`, `asset-guide.md`, `CLAUDE.md`

## 1. 로컬 폴더 구조 예시

```text
test__/                     # 실제 로컬 구조 (2026-11-09)
├─ CLAUDE.md · planning.md · design-reference.md · asset-guide.md · WORKFLOW.md
├─ index.html               # 랜딩 (Claude 시안 기반, 390px)
├─ css/style.css
├─ js/main.js
├─ assets/
│  ├─ img/                  # Claude 시안 원본 이미지 41개
│  └─ QUANTARO_design_assets_v2/   # 회사 에셋 345개 (07_fonts는 git 제외)
└─ src/index.src.html       # 이전 A~D 시안 (참고용, 현재 기준 아님)
```

## 2. Claude Code 첫 점검 프롬프트

```text
이 프로젝트를 수정하기 전에 CLAUDE.md, planning.md,
design-reference.md, asset-guide.md를 읽어 줘.
Figma MCP 연결 상태를 확인하고 이 섹션의 구성과 화면을 분석해 줘:
https://www.figma.com/design/Gdc88dYmSYwu4XDrMug1Ut/%ED%80%80%ED%83%80%EB%A1%9C?node-id=297-370

1) Figma에 있는 기존 Claude 기획 캡처를 파악해 줘.
2) 로컬 코드가 존재하는지 먼저 확인해 줘.
3) ZIP에서 제공된 이미지 중 쓸 수 있는 파일을 매칭해 줘.
4) 유지 / 수정 / 추가 / 승인 필요 항목으로 나눠 보고해 줘.
5) Figma에서 Auto Layout 미사용 조건을 반영한 작업 계획을 작성해 줘.

아직 파일이나 디자인은 변경하지 마.
```

## 3. 변경 승인 후 구현 프롬프트

```text
승인한 변경 계획에 해당하는 부분만 수정해 줘.
Claude 기획 흐름을 유지하고, 퀀타로 자체 이미지만 사용해 줘.
- 화이트톤 본문, 기존 브랜드 네이비/골드 유지
- Figma에서는 새 Auto Layout을 적용하지 않음
- 기존 텍스트/버튼/이미지 레이어를 편집 가능하게 유지
- 웹 코드에서는 반응형 Flexbox/Grid 사용 가능
- 결과 탭, 슬라이드, 월 선택 등은 승인된 기능만 구현
- 가격, 후기, 수치, 카운트다운은 승인 데이터가 없다면 제외 또는 명확한 자리표시자 처리
- 변경 파일 목록과 원본 대비 시각 차이를 검수 후 보고
```

## 4. Figma 또는 코드 수정 시 싱크 절차

### Figma가 먼저 변경됐을 때
1. 최신 프레임 링크와 변경된 화면을 Claude Code에 전달한다.
2. 현재 코드와 달라진 항목을 먼저 비교한다.
3. 승인한 부분만 코드에 반영한다.
4. 브라우저 화면과 Figma를 다시 비교한다.

### 코드가 먼저 변경됐을 때
1. 현재 코드에서 바뀐 섹션과 화면 캡처를 확보한다.
2. Figma에서 해당 변경을 **수동 편집**하거나, 사용 가능한 별도 Figma 도구로 편집 가능한 레이어를 생성한다.
3. Figma MCP만 연결했다고 코드가 자동으로 Figma 디자인 레이어로 바뀌지는 않는다.
4. 최종 결과의 위치, 크기, 텍스트, 인터랙션 설명을 재검수한다.

### 기획이 변경됐을 때
1. `planning.md`의 상품/섹션/CTA를 먼저 업데이트한다.
2. `design-reference.md`와 `asset-guide.md`를 필요한 경우만 갱신한다.
3. `CLAUDE.md`는 **공통 규칙이 변경된 경우에만** 수정한다.
4. 변경된 파일과 시안을 Claude Code에 다시 읽혀서 차이점 위주로 반영한다.

## 5. QA 체크리스트

- [ ] 2027 신년운세 단일 상품 설명과 CTA 목적지 일치
- [ ] 레퍼런스에서 가져온 이미지/카피가 타사 원본을 무단 복제하지 않음
- [ ] 회사 컬러·폰트·로고·이미지 비율 유지
- [ ] Figma 신규 프레임에 Auto Layout이 적용되지 않음
- [ ] 새로 만든 텍스트/버튼/이미지 레이어 개별 편집 가능
- [ ] 모바일에서 텍스트 잘림/겹침 없음
- [ ] 탭 전환 / 좌우 이동 / 월 선택 UI(구현 승인 시) 정상 동작
- [ ] 자동 후기 슬라이드가 실제 후기 자료만 사용(또는 미구현)
- [ ] 가격/할인/리뷰/타이머 수치가 승인된 실제 값인지 확인
- [ ] Figma 원본과 최종 웹 캡처 비교

## 6. Git 관련

- Git·GitHub는 **필수 아님**. 로컬 폴더와 Figma MCP만으로 작업 가능.
- 본격 구현 시 백업/버전 관리를 위해 Git 또는 폴더 복사 사용을 추천하지만, 별도 사용자 지시 없이 Commit/Push하지 않는다.
