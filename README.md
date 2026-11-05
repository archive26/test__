# 퀀타로 2027 랜딩 시안 (A~D)

내부 검토용 모바일 랜딩 프로토타입입니다. 실제 결제·개인정보 입력 기능은 없습니다.

- `index.html` — 배포용 단일 파일 (이미지 내장). 상단 바에서 A/B/C/D 전환, `#a`~`#d`로 바로 열기.
- `src/index.src.html` + `src/assets/` — 수정용 원본 (이미지 상대 경로).
- 다시 빌드: `cd src && ruby inline.rb index.src.html ../index.html assets`
