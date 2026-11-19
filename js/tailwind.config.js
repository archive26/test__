/* Tailwind(Play CDN) 설정 — 피그마 변수 ↔ Tailwind 클래스 1:1
   피그마 변수         CSS 변수                 Tailwind 클래스 예
   accent/default  →  --accent\/default    →  bg-accent-default / text-accent-default / border-accent-default
   text/inverse    →  --text\/inverse      →  text-text-inverse
   text/primary    →  --text\/primary      →  text-text-primary
   text/body       →  --text\/body         →  text-text-body
   bg/page         →  --bg\/page           →  bg-bg-page
   space/N         →  --space\/N           →  p-space-N, gap-space-N, mt-space-N …
   gutter/mobile   →  --gutter\/mobile     →  px-gutter-mobile
   radius/sm       →  --radius\/sm         →  rounded-radius-sm
   (Tailwind는 `/`를 투명도 구분자로 쓰기 때문에 클래스에서는 `-`로 바꿨다) */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        accent: { default: 'var(--accent\\/default)' },
        text: {
          inverse: 'var(--text\\/inverse)',
          primary: 'var(--text\\/primary)',
          body: 'var(--text\\/body)',
        },
        bg: { page: 'var(--bg\\/page)' },
      },
      spacing: {
        'space-1': 'var(--space\\/1)',
        'space-2': 'var(--space\\/2)',
        'space-3': 'var(--space\\/3)',
        'space-4': 'var(--space\\/4)',
        'space-6': 'var(--space\\/6)',
        'space-12': 'var(--space\\/12)',
        'space-16': 'var(--space\\/16)',
        'gutter-mobile': 'var(--gutter\\/mobile)',
      },
      borderRadius: {
        'radius-sm': 'var(--radius\\/sm)',
      },
      fontFamily: {
        sogang: 'var(--font-sogang)',
        pretendard: 'var(--font-pretendard)',
        'serif-kr': 'var(--font-serif-kr)',
        flight: 'var(--font-flight)',
        'noto-sans': 'var(--font-noto-sans)',
        'song-myung': 'var(--font-song-myung)',
      },
    },
  },
};
