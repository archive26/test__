document.documentElement.classList.add('js');
const DEAL_END = null; // 마감일 미승인 → 카운트다운 숨김. 승인되면 "YYYY-MM-DDT23:59:59+09:00" 형식으로 입력 (CLAUDE.md 제품/카피 규칙)
const CHECKOUT = "https://quantaro.kr/newyear2027";
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
window.dataLayer = window.dataLayer || [];
const track = (event, p = {}) => window.dataLayer.push({ event, ...p });
const qs = new URLSearchParams(location.search);
const state = { me: null, plan: 'basic', price: 33000, planName: '신년운세' };

const DAYMASTER = [
  { ko: '갑목', img: '곧게 뻗는 큰 나무', desc: '한번 정하면 위로 곧게 자라는 사람이에요. 기준이 분명하고 사람들이 기대는 기둥이 되지만, 굽히는 법을 몰라 혼자 버티는 때가 많아요.', ten: '상관(傷官)', tdesc: '2027년엔 내 재능과 말이 밖으로 터져 나오는 기운이 들어와요. 틀을 깨고 싶어지는 해예요. 다만 말이 앞서면 윗사람과 부딪히기 쉬워요.', chips: ['표현', '변화', '말조심'] },
  { ko: '을목', img: '바람에 휘어도 꺾이지 않는 풀꽃', desc: '부드러워 보여도 어디서든 뿌리를 내리는 사람이에요. 눈치가 빠르고 관계를 엮는 힘이 있지만, 남에게 맞추다 내 몫을 놓치기 쉬워요.', ten: '식신(食神)', tdesc: '2027년엔 손으로 만들고 내놓는 일이 결과가 되는 기운이 들어와요. 먹고사는 일이 자연스럽게 풀리는 해, 무엇을 내놓느냐가 관건이에요.', chips: ['결과물', '여유', '재능'] },
  { ko: '병화', img: '모두를 비추는 한낮의 태양', desc: '어디서든 눈에 띄고 분위기를 밝히는 사람이에요. 시원하고 솔직하지만, 쉽게 달아오르고 쉽게 지치는 편이에요.', ten: '겁재(劫財)', tdesc: '2027년엔 나와 비슷한 사람, 경쟁자가 가까이 오는 기운이에요. 함께하면 힘이 되지만 돈과 몫을 나누는 일엔 선을 그어야 해요.', chips: ['경쟁', '동료', '돈 관리'] },
  { ko: '정화', img: '어둠을 밝히는 등불', desc: '조용히 오래 타는 사람이에요. 섬세하고 한 사람을 깊이 챙기지만, 속으로 삭이는 감정이 많아요.', ten: '비견(比肩)', tdesc: '2027년은 나와 같은 불이 하나 더 켜지는 해예요. 자립하고 내 이름으로 서고 싶어지는 기운, 고집이 세지는 것도 조심해야 해요.', chips: ['자립', '주도권', '고집'] },
  { ko: '무토', img: '흔들리지 않는 큰 산', desc: '묵직하고 믿음직한 사람이에요. 쉽게 흔들리지 않고 사람을 품지만, 움직임이 느려 기회를 흘려보낼 때가 있어요.', ten: '정인(正印)', tdesc: '2027년엔 나를 밀어주는 사람과 배움이 들어오는 기운이에요. 자격·문서·윗사람 도움이 따르는 해, 받기만 하면 게을러질 수 있어요.', chips: ['도움', '문서', '배움'] },
  { ko: '기토', img: '무엇이든 길러 내는 기름진 밭', desc: '실속 있고 살뜰한 사람이에요. 사람과 일을 키워 내는 힘이 있지만, 걱정이 많아 스스로를 소모해요.', ten: '편인(偏印)', tdesc: '2027년엔 직감과 공부, 남다른 생각이 깊어지는 기운이에요. 새 분야에 끌리는 해, 생각만 하다 때를 놓치기 쉬워요.', chips: ['직감', '공부', '전환'] },
  { ko: '경금', img: '아직 다듬어지지 않은 원석', desc: '결단력 있고 의리 있는 사람이에요. 시원시원하게 밀어붙이지만, 말이 날카로워 오해를 사기도 해요.', ten: '정관(正官)', tdesc: '2027년엔 나를 다듬는 책임과 자리가 들어오는 기운이에요. 승진·직함·조직의 부름이 따르는 해, 그만큼 무게도 커져요.', chips: ['직장', '책임', '명예'] },
  { ko: '신금', img: '잘 벼려진 칼, 빛나는 보석', desc: '예리하고 기준이 높은 사람이에요. 겉은 차분해도 속은 단단하지만, 완벽을 바라다 스스로를 몰아붙여요.', ten: '편관(偏官)', tdesc: '2027년엔 나를 강하게 누르고 시험하는 기운이 들어와요. 압박이 큰 만큼 이겨 내면 크게 벼려지는 해예요.', chips: ['압박', '시험', '도약'] },
  { ko: '임수', img: '끝없이 흐르는 큰 강', desc: '생각이 넓고 어디로든 흘러가는 사람이에요. 지혜롭고 적응이 빠르지만, 한곳에 머무르지 못해 흩어지기 쉬워요.', ten: '정재(正財)', tdesc: '2027년엔 차곡차곡 쌓이는 돈과 안정이 들어오는 기운이에요. 꾸준한 수입, 진지한 관계가 따르는 해, 지키는 쪽이 이겨요.', chips: ['재물', '안정', '관계'] },
  { ko: '계수', img: '땅을 적시는 봄비', desc: '조용히 스며들어 주변을 살리는 사람이에요. 감수성이 깊고 눈치가 빠르지만, 걱정과 생각이 꼬리를 물어요.', ten: '편재(偏財)', tdesc: '2027년엔 크게 움직이는 돈과 기회가 들어오는 기운이에요. 판이 커지는 해, 들어오는 만큼 나가는 것도 커서 타이밍이 전부예요.', chips: ['큰 기회', '돈의 흐름', '타이밍'] }
];
const LOCK = [
  ['제0장 사주 들여다보기', '내 네 기둥과 오행, 나를 살리는 기운과 막는 기운'],
  ['제1장 2027 총운', '정미년, 달릴 때와 쉬어 갈 때'],
  ['제2장 재물운', '돈이 들어오는 달, 지갑이 얇아지는 달'],
  ['제3장 건강운', '몸이 먼저 신호를 보내는 곳과 달'],
  ['제4장 애정운', '인연이 드는 달, 침묵이 상처가 되는 달'],
  ['제5장 직장·명예운', '움직일 달과 서명하면 안 되는 달'],
  ['제6장 학업·자기계발운', '몰아칠 달과 버틸 달'],
  ['제7장 12개월 흐름', '1월부터 12월까지 달마다 할 일'],
  ['제8장 2027 길운 3가지', '꼭 잡아야 할 세 번의 기회'],
  ['제9장 차우진의 편지', '내가 물은 한 가지에 대한 답장']
];
const MONTHS = [["1월 · 辛丑(신축)", "earth", "OO님, 1월은 월간이 쇠, 월지가 흙으로 들어오는 달이에요. OO님은 본래 잘 벼려진 칼처럼 예리한 쇠의 기운을 타고나셨고, 이미 OO님을 돕는 기운이 넉넉한 분이세요. 그런데 이 달은 흙이 한 겹 더 덮이니, 칼이 흙 속에 묻힌 듯 날이 잘 드러나지 않아요. 2027년 1월은 그래서 무언가를 밀어붙이기보다 묵히는 달이 돼요. <span class=\"hl\">1월은 속도를 내는 달이 아니라 날을 손질하는 달이에요.</span> 올해 하고 싶은 일을 종이 한 장에 적어 두는 것부터 해 보세요.", "흙은 OO님께 가장 필요한 기운인 물을 막는 성질이 있어요. 물은 OO님이 바깥으로 내놓는 기운, 곧 말과 표현과 결과물이에요. 1월에는 그 물길이 좁아져서 아이디어가 있어도 말이 잘 안 나오고, 설명해도 상대가 못 알아듣는 느낌이 들 수 있어요. <span class=\"hl\">1월의 답답함은 능력 부족이 아니라 길이 잠시 막힌 탓이에요.</span> 중요한 설명은 말보다 글로 정리해서 건네 보세요."], ["2월 · 壬寅(임인)", "water", "OO님, 2월은 월간이 물로 들어오는 달이에요. 물은 OO님께 가장 필요한 기운이니, 1월에 막혔던 길이 입춘과 함께 열려요. 쌓여 있던 말과 생각이 밖으로 흘러나가기 시작하고, 사람들도 OO님의 말을 알아듣기 시작해요. <span class=\"hl\">2월부터 흐름이 바뀌니 미뤄 둔 말을 꺼내기 좋은 때예요.</span> 1월에 적어 둔 계획 가운데 하나를 누군가에게 소리 내어 말해 보세요.", "월지의 나무는 물이 길러 주는 기운이에요. 물이 흘러 나무를 키우듯, OO님이 내놓은 것이 눈에 보이는 결과로 자라기 시작하는 달이에요. 2027년 2월은 새로 시작한 일이 뿌리를 내리는 시기라고 보시면 돼요. <span class=\"hl\">2월에 심은 일은 봄 내내 자라요.</span> 작게라도 새 일을 하나 시작해 보세요."], ["3월 · 癸卯(계묘)", "water", "OO님, 3월도 월간이 물, 월지가 나무로 2월과 같은 결이 이어져요. 2월이 샘이 터지는 달이었다면 3월은 그 물이 조용히 땅을 적시는 달이에요. 겉으로 요란하지 않지만 속에서 일이 무르익어요. <span class=\"hl\">3월은 2월에 시작한 것을 깊게 하는 달이에요.</span> 새 일을 벌리기보다 하나를 끝까지 파 보세요.", "OO님이 내놓는 기운이 두 달 연속 받쳐 주니, OO님의 정밀한 눈이 성과로 바뀌는 시기예요. 다른 사람이 놓치는 세부를 잡아내는 힘이 평가받아요. 2027년 3월은 OO님의 꼼꼼함이 인정받기 좋은 때예요. <span class=\"hl\">3월에 OO님이 만든 결과물은 누군가의 눈에 들어요.</span> 작업한 것을 정리해서 보여 줄 수 있는 형태로 남겨 두세요."], ["4월 · 甲辰(갑진)", "earth", "OO님, 4월은 월간이 나무이지만 월지에 흙이 들어와 흐름이 한 번 꺾여요. 흙은 OO님께 가장 필요한 기운을 막는 기운이라, 두 달간 잘 흐르던 물길이 다시 좁아져요. 봄이 한창인데 발이 무거운 느낌이 들 수 있어요. <span class=\"hl\">4월은 2월과 3월의 속도를 그대로 밀어붙이면 안 되는 달이에요.</span> 이 달에 새 계약이나 큰 약속은 한 템포 늦춰 보세요.", "월간의 나무는 OO님이 쓰는 기운이라 돈과 일의 욕심이 생겨요. 그런데 아래 흙이 받치고 있으니 벌리면 벌릴수록 무거워져요. 2027년 4월은 욕심과 현실 사이에서 균형을 잡는 달이에요. <span class=\"hl\">4월에는 지출을 늘리지 말고 들어온 것을 지키세요.</span> 통장을 한 번 들여다보고 빠져나가는 돈을 정리해 보세요."], ["5월 · 乙巳(을사)", "norm", "OO님, 5월은 월간이 나무, 월지가 불로 들어와요. OO님의 타고난 명식에는 나무도 불도 없기 때문에, 이 달은 낯선 기운이 들어오는 달이에요. 막는 기운은 아니지만 가장 필요한 기운도 아니라, 평소와 다른 결이 흘러요. <span class=\"hl\">5월은 익숙한 길에서 살짝 벗어나는 달이에요.</span> 안 가 본 곳, 안 만나 본 사람을 하나 만들어 보세요.", "불은 쇠를 달구는 기운이에요. 예리한 칼이 불에 닿으면 잠시 무뎌지지만, 다시 벼릴 기회이기도 해요. 2027년 5월은 OO님이 평소에 쓰지 않던 면을 쓰게 되는 때예요. 성격이 급해지거나 감정이 앞설 수 있어요. <span class=\"hl\">5월에는 열이 오를 때 바로 답하지 않는 것이 핵심이에요.</span> 화가 날 때 물 한 잔을 먼저 마셔 보세요."], ["6월 · 丙午(병오)", "fire", "OO님, 6월은 월간과 월지가 모두 불로 가장 뜨거운 달이에요. OO님의 쇠는 불을 만나면 단련되기도 하고 녹기도 해요. OO님을 돕는 기운이 넉넉한 분이라 녹아내릴 정도는 아니지만, 평소의 서늘한 판단력이 흐려질 수 있어요. <span class=\"hl\">6월은 큰 결정을 피하고 작은 일을 성실히 하는 달이에요.</span> 이 달에 내려야 할 결정이 있다면 2월과 3월에 적어 둔 기준을 다시 꺼내 보세요.", "불은 OO님을 누르는 기운, 곧 윗사람과 책임과 규칙의 자리예요. 2027년 6월은 상사나 거래처, 공적인 자리에서 압박이 들어올 수 있어요. 요구가 많아지고 마감이 겹쳐요. <span class=\"hl\">6월의 압박은 OO님을 시험하는 게 아니라 쓸모를 확인하는 과정이에요.</span> 요구가 들어오면 우선순위를 셋으로 추려 먼저 답해 보세요."], ["7월 · 丁未(정미)", "fire", "OO님, 7월은 올해 한 해의 흐름인 정미와 똑같은 월주가 들어와요. 불과 흙이 겹으로 쌓이니 2027년 가운데 가장 무거운 달이에요. OO님께 가장 필요한 물을 막는 흙이 두 겹이에요. 흐르던 물이 마르고, 말도 생각도 밖으로 잘 안 나가요. <span class=\"hl\">7월은 한 해의 고비이니 버티는 것만으로 충분한 달이에요.</span> 새로 벌리는 일 없이 지금 있는 일만 지켜 보세요.", "흙이 두꺼우면 OO님을 돕는 기운이 지나치게 많아져요. 그러면 사람이 답답하고 고집스러워지고, 혼자 있으려 해요. OO님의 예리한 눈이 안으로 향하면 자기 자신을 지나치게 따지게 돼요. <span class=\"hl\">7월의 자책은 흙이 만든 착각이니 믿지 마세요.</span> 스스로를 평가하는 생각이 들면 종이에 적고 접어 두세요."], ["8월 · 戊申(무신)", "earth", "OO님, 8월은 월간이 흙, 월지가 쇠로 들어와요. 위는 여전히 막는 기운이지만 아래에 OO님과 나란한 쇠가 들어와서 7월보다 발밑이 단단해져요. 더위가 꺾이듯 가장 무거운 고비는 지났어요. <span class=\"hl\">8월은 고비 다음의 회복기이니 무리 없이 일어서는 달이에요.</span> 7월에 멈춰 둔 일 가운데 가장 쉬운 것부터 다시 손대 보세요.", "월지의 쇠는 OO님과 같은 결이라 동료와 형제, 같은 업계 사람과의 인연이 살아나요. 2027년 8월은 혼자보다 함께 할 때 결과가 나는 달이에요. 다만 나란한 기운이 많으면 나눌 몫도 늘어요. <span class=\"hl\">8월의 협력은 반갑되 몫은 처음에 정해 두세요.</span> 함께 일하기 전에 역할과 몫을 글로 남겨 보세요."], ["9월 · 己酉(기유)", "earth", "OO님, 9월은 월간이 흙, 월지가 쇠로 8월과 같은 결이 이어져요. 월지의 쇠는 OO님의 가장 센 자리라서, 이 달은 올해 가운데 OO님의 힘이 가장 또렷하게 서는 때예요. 다만 위의 흙이 그 힘을 바깥으로 흘려보내는 물길을 아직 누르고 있어요. <span class=\"hl\">9월은 힘은 넘치되 쓸 곳을 고르는 달이에요.</span> 하고 싶은 일을 셋 적고 그중 하나만 고르세요.", "힘이 넘치는데 길이 좁으면 안에서 부딪혀요. 2027년 9월은 사람과 다투기 쉬운 달이에요. 특히 나란한 기운이 센 사람끼리, 곧 동료나 경쟁자와 맞서기 쉬워요. 가을의 칼날은 서늘해서 한마디가 오래 남아요. <span class=\"hl\">9월의 다툼은 이기는 쪽이 지는 거예요.</span> 부딪힐 것 같으면 그 자리를 먼저 떠나 보세요."], ["10월 · 庚戌(경술)", "earth", "OO님, 10월은 월간이 쇠, 월지가 흙으로 1월과 비슷한 결이에요. 위에는 나란한 기운이 있고 아래는 막는 기운이 있어요. 가을이 깊어지며 쇠의 힘은 남아 있지만, 흙이 다시 발을 묶어요. <span class=\"hl\">10월은 1월과 닮은 달이니 그때의 교훈을 다시 꺼내는 달이에요.</span> 1월에 적어 둔 계획을 꺼내 무엇이 이뤄졌는지 확인해 보세요.", "흙이 아래에 깔리면 OO님의 몸이 다시 무거워져요. 가을 끝자락이라 피로가 쌓이고, 먹는 것이 몸에 남아요. 2027년 10월은 건강을 다시 챙겨야 하는 두 번째 고비예요. <span class=\"hl\">10월에는 먹는 것을 줄이는 것이 운을 지키는 일이에요.</span> 저녁 식사 시각을 한 시간 앞당겨 보세요."], ["11월 · 辛亥(신해)", "water", "OO님, 11월은 월간이 쇠, 월지가 물로 들어와요. 위에는 OO님과 나란한 기운, 아래에는 OO님께 가장 필요한 물이 있어요. 쇠가 물을 낳는 흐름이라 올해 가운데 가장 결이 맞는 달이에요. 묻혀 있던 칼이 맑은 물에 씻겨 날이 드러나요. <span class=\"hl\">11월은 2027년의 수확이 시작되는 달이에요.</span> 10월에 마무리해 둔 것을 이 달에 바깥에 내놓으세요.", "물은 OO님이 내놓는 기운이라 말과 표현이 다시 살아나요. 7월부터 막혀 있던 말문이 트이고, 사람들이 OO님의 말을 기다려요. 설명하면 통하고, 제안하면 받아들여져요. <span class=\"hl\">11월에 하는 말은 힘이 있으니 아껴 둔 말을 꺼내세요.</span> 미뤄 둔 제안이나 요청을 이 달에 하나 하세요."], ["12월 · 壬子(임자)", "water", "OO님, 12월은 월간과 월지가 모두 물이에요. OO님께 가장 필요한 기운이 겹으로 들어오니 올해의 마지막 달이 가장 크게 열려요. 한 해 내내 흙에 눌려 있던 물길이 한꺼번에 터져요. <span class=\"hl\">12월은 2027년의 열매를 거두는 달이에요.</span> 11월에 꺼낸 것들을 이 달에 마무리 지으세요.", "물이 넘치면 쇠는 맑게 빛나지만 너무 많으면 쓸려 가기도 해요. OO님을 돕는 기운이 넉넉한 분이라 쓸려 갈 염려는 적지만, 말이 지나치게 많아지거나 생각이 흩어질 수 있어요. <span class=\"hl\">12월에는 많이 내놓되 하나로 모으는 힘이 필요해요.</span> 하고 싶은 말을 종이에 쓰고 핵심 하나만 남겨 보세요."]];
const VIEW = {"00": {"cap": "먼저 OO님의 사주판부터 함께 펼쳐 볼게요.", "bka": "OO님은 흙 속에 묻힌 잘 벼려진 칼이에요.", "secs": [["오행으로 본 나", ["OO님의 바탕은 신금(辛金), 곧 잘 벼려진 칼처럼 예리하고 단단한 쇠의 기운이고, 2027년 정미년은 그 쇠를 흙이 두껍게 덮고 불이 살짝 달구는 해예요. 쇠가 절반을 차지하고 흙이 그 뒤를 받치니, 타고난 감각이 남다르고 무엇이든 정밀하게 꿰뚫는 눈을 가지셨어요. 다만 나무와 불이 비어 있어서 그 날카로움이 밖으로 뻗어 나갈 길이 좁은 편이에요. 2027년 1월부터 3월까지는 특히 이 구조가 또렷이 드러나요. <span class=\"hl\">OO님은 안으로는 꽉 찬 사람이지만, 바깥으로 꺼내는 통로가 좁은 분이에요.</span> 올해 초에는 생각을 머릿속에 쌓아 두기보다 한 가지씩 메모로 꺼내 적는 습관부터 들이세요.", "쇠가 절반이라는 건 주관이 뚜렷하고 쉽게 흔들리지 않는다는 뜻이에요. 결정을 내리면 끝까지 밀고 가는 힘이 있고, 남이 흐려 놓은 것도 OO님 눈에는 또렷하게 보여요. 그런데 흙이 또 삼 분의 일이나 되니, 쇠가 흙 속에 묻혀 빛을 못 보는 날도 생겨요. 2027년 4월과 5월, 흙의 기운이 더 쌓이는 달에는 답답함이 커질 수 있어요. <span class=\"hl\">OO님의 단단함은 장점이지만, 묻히지 않도록 스스로 꺼내 닦아 주셔야 해요.</span> 봄에는 오래 미뤄 둔 정리 하나를 끝내 보세요."]], ["용신·희신·기신", ["OO님에게 가장 필요한 기운은 물, 곧 OO님이 내놓는 기운이에요. 쇠가 너무 많고 단단하면 스스로 녹슬기 쉬운데, 물이 그 쇠를 흘려보내며 숨을 틔워 줘요. 말로 풀고 글로 쓰고 손으로 만드는 모든 일이 OO님에게는 약이에요. 2027년 1월과 2월은 물의 기운이 아직 남아 있는 때라 이 약이 잘 들어요. <span class=\"hl\">OO님은 무언가를 내놓을 때 가장 건강해지는 분이에요.</span> 연초에 작은 발표나 기록, 공유할 거리를 하나 만드세요.", "그 물을 거드는 기운은 쇠예요. OO님과 나란한 기운이 물을 낳아 주니, 비슷한 결을 가진 사람과 함께할 때 내놓는 힘이 커져요. 혼자 벼르는 것보다 같은 눈높이의 동료가 옆에 있을 때 OO님의 결과물이 더 날카로워져요. 2027년 8월과 9월, 쇠의 기운이 짙어지는 가을에 이런 만남이 들어와요. <span class=\"hl\">OO님에게 좋은 동료는 곧 좋은 물길이에요.</span> 가을에는 혼자 끝내려던 일 하나를 둘이서 해 보세요."]]]}, "02": {"cap": "엽전이 어디로 흐르는지, 장부를 같이 넘겨 봐요.", "bka": "마른 땅에 봄비가 내려 싹이 돋는 모양이에요.", "secs": [["올해 내 돈은 어디로 흐를까", ["OO님의 돈은 2027년에 OO님이 내놓는 것에서 들어오고, OO님을 떠받치는 흙 쪽으로 새 나가요. 타고난 바탕이 신금(辛金), 곧 잘 벼려진 칼처럼 예리한 기운인데 쇠가 절반이고 물이 한 줄기 흐르니, 돈은 쇠가 물을 만나 깎여 나오는 모양으로 생겨요. 다시 말해 가만히 있어서 들어오는 돈이 아니라, OO님의 솜씨와 말과 결과물을 바깥에 내놓을 때 돈이 따라붙는 구조예요. 2027년 전체로 보면 <span class=\"hl\">돈은 OO님이 직접 만들어 내놓은 것에서만 들어오는 해예요.</span> 올해 안에 돈이 되는 OO님의 결과물이 무엇인지 종이에 세 줄로 적어 두세요.", "흙이 셋 중 하나를 차지하는데, 이 흙은 OO님을 돕는 기운이면서 동시에 OO님에게 가장 필요한 물을 막는 기운이에요. 흙이 두터우면 물길이 막히듯, 돈이 나오는 통로가 좁아지고 대신 집·문서·부모·배움 같은 묵직한 쪽으로 지출이 몰려요. 2027년은 정미(丁未), 곧 불과 흙이 함께 오는 해라 이 흙이 한 겹 더 쌓여요. <span class=\"hl\">올해 큰돈은 벌기보다 지키는 쪽에 무게를 두시는 게 맞아요.</span> 1월 안에 고정 지출 목록을 뽑아 둘 중 하나는 줄일 수 있는지 살펴보세요."]], ["지갑이 얇아지는 달", ["OO님의 지갑이 가장 얇아지는 달은 7월이에요. 7월은 불과 흙이 한꺼번에 오는 정미 달로, 올해 전체의 기운과 같은 색이라 흙이 겹으로 쌓여요. 물이 바짝 마르고 돈 나오는 길이 막히는 달이에요. <span class=\"hl\">7월은 새 지출을 아예 만들지 않는 달로 정해 두세요.</span> 6월 말에 7월 한 달치 생활비를 미리 떼어 놓고, 그 안에서만 쓰세요.", "1월과 4월도 흙이 밑에 깔려 지출이 커지는 달이에요. 1월은 쇠 위에 흙이 얹힌 모양이라 연초 모임과 집안 일로 돈이 빠지고, 4월은 나무가 흙을 파고드는 모양이라 갑자기 고쳐야 할 것, 바꿔야 할 것이 생겨요. <span class=\"hl\">1월과 4월은 쓰기 전에 하룻밤 재우는 습관이 돈을 지켜요.</span> 사고 싶은 것이 생기면 다음 날 아침에 다시 보고 결정하세요."]]]}, "03": {"cap": "차 한 잔 들고 천천히 걸으며 몸의 소리를 들어요.", "bka": "잘 벼려진 칼이 녹슬지 않으려면 흐르는 물이 있어야 하는 것과 같죠.", "secs": [["몸과 마음의 컨디션", ["OO님의 약한 곳은 쇠가 너무 많고 물이 적어 생기는 뻣뻣함과 열이고, 그 열을 식혀 주는 물의 달인 2월과 3월, 11월과 12월에 땀과 숨으로 돌보시면 돼요. 타고난 기운은 쇠가 절반, 흙이 삼분의 일이라 몸이 단단하고 잘 버티는 편이에요. 다만 쇠를 돕는 기운이 다섯 몫이나 되고 물은 한 몫뿐이라, 꽉 찬 쇠가 밖으로 흘러나가지 못하면 안에서 뜨거워지죠. 2027년은 불과 흙이 함께 오는 해라 그 뜨거움이 더해지는 흐름이에요. <span class=\"hl\">2027년은 버티는 힘보다 풀어 주는 힘을 챙겨야 하는 해예요.</span> 새해 첫 주에 물을 마시는 시간을 정해 두는 것부터 시작하세요.", "OO님께 가장 필요한 기운은 물이고, 이 해의 큰 흐름은 흙이라 그 물을 막는 쪽이에요. 흙이 물을 막으면 몸에서는 순환이 더뎌지고 마음에서는 생각이 한곳에 고이기 쉬워요. 잘 벼려진 칼이 녹슬지 않으려면 흐르는 물이 있어야 하는 것과 같죠. 1월과 4월, 7월부터 10월까지가 그 막힘이 짙은 달이에요. <span class=\"hl\">막히는 달에는 몸을 크게 쓰기보다 자주 조금씩 움직이는 쪽이 맞아요.</span> 한 시간 앉아 있었다면 삼 분은 일어나 걷기로 정해 두세요."]], ["몸이 보내는 신호", ["OO님의 오행에서 나무와 불이 전혀 없다는 점이 몸의 신호를 읽는 열쇠예요. 나무는 간과 근육, 눈과 이어지고 불은 심장과 혈관, 열의 조절과 닿아요. 이 둘이 비어 있으면 평소에는 느끼지 못하다가 피로가 쌓일 때 눈이 먼저 뻑뻑해지고 어깨가 굳는 쪽으로 나타나요. 특히 4월은 나무가 흙 위에 서는 달이라 눈과 근육의 피로가 도드라져요. <span class=\"hl\">4월에는 눈과 목, 어깨가 가장 먼저 신호를 보내요.</span> 화면을 보는 시간마다 이십 분에 한 번 먼 곳을 보세요.", "쇠가 많은 몸은 폐와 호흡, 피부, 그리고 대장 쪽이 민감해요. 많다는 것은 든든하다는 뜻이기도 하지만 지나치면 메마르는 쪽으로 기울어요. 2027년의 불이 그 쇠를 달구니 가을 초입에 마른기침이나 피부 건조가 나올 수 있어요. 8월과 9월이 쇠가 겹치는 달이라 그 느낌이 짙어요. <span class=\"hl\">9월에는 숨과 피부의 건조를 먼저 살피세요.</span> 침실에 가습을 두고 미지근한 물을 자주 마시세요."]]]}, "04": {"cap": "올해 OO님 곁에 피어날 꽃의 빛깔을 봐요.", "bka": "조금만 마음의 창을 열어 두면, 빛은 알아서 찾아와요.", "secs": [["사랑의 색", ["OO님, 2027년 사랑의 기운이 가장 또렷하게 오르는 달은 2월과 3월, 그리고 11월과 12월이에요. 이 네 달은 OO님께 가장 필요한 기운인 물이 하늘과 땅 양쪽에서 흘러드는 때라서, 마음이 열리고 말이 부드러워져요. 그래서 2027년 사랑의 색을 하나로 고르자면 깊고 맑은 쪽빛이에요. <span class=\"hl\">2027년 2월과 3월, 11월과 12월에 먼저 마음을 꺼내 보이면 인연이 그 물길을 따라 들어와요.</span> 이 네 달 가운데 하루를 미리 정해 두고, 그날은 마음에 둔 사람에게 먼저 연락을 건네 보세요.", "OO님의 타고난 바탕은 신금(辛金), 곧 잘 벼려진 작은 칼이나 다듬어진 보석처럼 예리하고 단정한 쇠의 기운이에요. 사람을 볼 때도 겉을 보지 않고 결을 보는 눈을 가지셨어요. 그만큼 쉽게 마음을 열지 않지만, 한 번 열면 오래 가요. 그래서 2027년 한 해 사랑의 결은 화려한 붉은빛보다 차갑게 반짝이는 은빛에 가까워요. <span class=\"hl\">차갑게 보여도 속은 단단히 따뜻한 은빛이 2027년 OO님 사랑의 바탕색이에요.</span> 상대가 OO님의 조용함을 무관심으로 읽지 않도록, 하루에 한 번은 짧게라도 안부를 물어 주세요."]], ["조심할 것", ["OO님, 올해 가장 조심하실 때는 7월부터 10월까지 넉 달이에요. 7월 정미월, 8월 무신월, 9월 기유월, 10월 경술월은 흙과 쇠가 연이어 두텁게 들어오는 달이라 OO님께 필요한 물길이 막혀요. 물길이 막히면 말이 줄고, 말이 줄면 오해가 자라요. 상대는 OO님이 멀어졌다고 느끼기 쉬워요. <span class=\"hl\">2027년 7월부터 10월까지는 침묵이 가장 큰 상처가 되는 때예요.</span> 이 넉 달은 할 말이 없어도 짧은 인사 한 줄을 거르지 않는 것을 작은 약속으로 삼아 보세요.", "2027년 정미년 자체가 OO님께는 그 기운을 막는 기운과 겹치는 해예요. 하늘에는 불이, 땅에는 흙이 자리해서, 쇠인 OO님을 녹이려 하고 흙으로 덮으려 해요. 이것이 사랑에서는 고집과 자존심으로 드러나기 쉬워요. 옳은 말을 하고도 관계는 식는 일이 생겨요. <span class=\"hl\">2027년에는 이기는 대화보다 잇는 대화를 고르는 것이 관계를 지켜요.</span> 다툼이 생기면 누가 맞는지 따지기 전에, 상대가 무엇을 서운해하는지 한 문장으로 먼저 되물어 보세요."]]]}, "05": {"cap": "도장을 찍을 때와 기다릴 때를 가려 드릴게요.", "bka": "은빛 칼은 혼자 반짝이는 것보다 물에 비칠 때 사람 눈에 띄어요.", "secs": [["일터의 색", ["OO님의 일과 이름이 오르는 때는 2027년 2월과 3월, 그리고 11월과 12월이에요. OO님은 신금(辛金), 곧 잘 벼려진 칼처럼 예리하고 정밀한 쇠의 기운을 타고나셨어요. 거기에 쇠와 흙이 전체의 여든 몫을 넘게 차지하니, OO님을 돕는 기운이 넉넉한 쪽이에요. 힘이 모자란 분이 아니라, 그 힘을 밖으로 내보낼 통로가 필요한 분이라는 뜻이에요. <span class=\"hl\">OO님의 2027년 일터 색은 차갑게 빛나는 은빛이고, 그 빛이 물길을 만날 때 가장 멀리 가요.</span> 지금 할 일은 보여 줄 결과물을 한 장으로 정리해 두는 거예요.", "OO님께 가장 필요한 기운은 물, 곧 OO님이 내놓는 기운이에요. 격이 식신, 그러니까 내 안의 것을 차근차근 꺼내 보이는 자리에 서 계시죠. 쇠가 물을 낳듯, OO님은 말이나 글, 손으로 만든 결과로 평가받을 때 빛나는 분이에요. 2027년 한 해로 보면 물이 흐르는 2월·3월, 11월·12월이 그 통로가 열리는 때예요. <span class=\"hl\">은빛 칼은 혼자 반짝이는 것보다 물에 비칠 때 사람 눈에 띄어요.</span> 이력서보다 작업물 하나를 먼저 고쳐 두세요."]], ["조심할 것", ["OO님이 가장 조심하실 것은 흙이 겹치는 달에 자신을 낮게 보는 마음이에요. OO님은 돕는 기운이 많은 분이라 평소 자신감이 단단한데, 그만큼 반응이 없을 때 더 크게 흔들려요. 2027년 1월과 4월, 7월부터 10월까지는 세운의 흙에 그달의 흙이 포개져요. <span class=\"hl\">흙이 겹치는 달의 침묵은 OO님 탓이 아니라 땅이 두꺼운 탓이에요.</span> 그 달에는 결과를 세지 말고 보낸 횟수만 세세요.", "두 번째는 날이 너무 서는 말이에요. 벼려진 칼의 기운은 사람의 허술한 데를 금세 알아보고, 그걸 입 밖에 내기 쉬워요. 면접이나 첫 만남에서 상대 조직의 빈틈을 짚어 주는 건 정확하지만, 상대에게는 베이는 느낌이 들 수 있어요. 특히 쇠가 겹쳐 날이 더 서는 8월·9월·10월에 그 경향이 짙어져요. <span class=\"hl\">OO님의 정확함은 칼날이 아니라 자로 보여 줄 때 신뢰가 돼요.</span> 지적 하나를 하려거든 먼저 칭찬 하나를 앞에 두세요."]]]}, "09": {"cap": "OO님께만 드리는 편지를 붓으로 적었어요.", "bka": "칼을 꺼내 둘 도마를 아직 못 만난 것뿐이에요.", "secs": [["지금 계신 자리에서", ["OO님은 쇠의 기운이 절반을 차지하는 분이에요. 그중에서도 타고난 결은 신금(辛金), 곧 잘 벼려진 칼처럼 예리한 기운이에요. OO님을 돕는 기운이 여섯 중 다섯이니 속은 단단하고 기준도 분명한 분이에요. 다만 그 칼이 쓰일 자리를 아직 못 찾아 서랍에 들어 있는 느낌이 요즘일 거예요. <span class=\"hl\">OO님은 능력이 모자라서 쉬는 게 아니라, 칼을 꺼내 둘 도마를 아직 못 만난 것뿐이에요.</span> 오늘은 이력서보다 먼저, 내가 가장 잘 베는 일 세 가지를 한 줄씩 적어 두세요.", "OO님에게 가장 필요한 기운은 물이에요. 물은 OO님이 내놓는 기운, 곧 말과 글과 결과물로 자기를 드러내는 힘이에요. 원래 바탕에서 물은 겨우 17퍼센트라, 속에 든 것에 비해 밖으로 보여 주는 양이 늘 적었을 거예요. 구직이 길어진 까닭도 실력보다 표현의 양에 있는 경우가 많아요. <span class=\"hl\">2027년 내내 OO님의 과제는 실력 쌓기가 아니라 꺼내 보이기예요.</span> 포트폴리오든 짧은 자기소개 영상이든, 남이 볼 수 있는 꼴로 하나 만들어 두세요."]], ["물어 주신 한 가지에 대한 답", ["OO님, 2027년에 옮기셔도 돼요. 다만 아무 달이나 되는 게 아니라, 물이 흐르는 달에 움직이셔야 해요. 2월은 임인(壬寅)월, 3월은 계묘(癸卯)월로 두 달 모두 하늘에 물이 흐르는 달이에요. OO님이 내놓는 기운이 바탕보다 두 배로 살아나는 때라, 같은 이력서를 내도 반응이 달라요. <span class=\"hl\">2027년 이직의 첫 창은 2월과 3월이고, 이 두 달에 지원을 가장 많이 하셔야 해요.</span> 1월 안에 지원할 곳 열 군데를 추려 두고, 2월 첫 주부터 보내세요.", "1월은 신축(辛丑)월로 땅에 흙이 깔려 가장 필요한 기운을 막는 달이에요. 이때는 결과가 안 나와도 OO님 탓이 아니에요. 공고가 적고 답이 느린 달이라고 보시면 돼요. <span class=\"hl\">1월은 결과를 기다리는 달이 아니라 2월에 쏘아 올릴 것을 준비하는 달이에요.</span> 자기소개서를 세 가지 직무 꼴로 미리 써 두세요."]]]}};
const GALLERY = [
  ['bka00', '제0장 · 사주 들여다보기', 'OO님은 흙 속에 묻힌 잘 벼려진 칼이에요.'],
  ['bka01', '제1장 · 2027 총운', '2027년은 칼을 휘두르는 해가 아니라 숫돌에 날을 세우는 해예요.'],
  ['bka02', '제2장 · 재물운', '마른 땅에 봄비가 내려 싹이 돋는 모양이에요.'],
  ['bka04', '제4장 · 애정운', '조금만 마음의 창을 열어 두면, 빛은 알아서 찾아와요.'],
  ['bka05', '제5장 · 직장·명예운', '은빛 칼은 혼자 반짝이는 것보다 물에 비칠 때 사람 눈에 띄어요.'],
  ['bka07', '제7장 · 12개월 흐름', '2월부터 흐름이 바뀌니 미뤄 둔 말을 꺼내기 좋은 때예요.'],
  ['bka08', '제8장 · 길운 3가지', '2027년 1월은 칼을 뽑지 말고 숫돌에 가는 달이에요.'],
  ['bka09', '제9장 · 차우진의 편지', '칼을 꺼내 둘 도마를 아직 못 만난 것뿐이에요.']
];
const REVIEWS = [
  [5,'김*진','30대','4종 묶음','A4 20쪽 가까이 와요','재물·건강·애정이 장마다 따로 있었어요. 형광펜 친 줄만 다시 읽어도 돼요.'],
  [5,'이*아','20대','신년운세','내 문장으로 그린 그림이 나와요','편지 장 그림을 저장해서 폰 배경으로 해 뒀어요. 캡션이 제 풀이 문장이라 볼 때마다 생각나요.'],
  [5,'박*호','40대','4종 묶음','근거부터 보여 줘서 납득이 돼요','오행 비율이랑 네 기둥 표가 먼저 나와서 왜 그런 풀이가 나왔는지 이해가 됐어요.'],
  [5,'최*연','30대','연애운 묶음','차우진 말투가 편해요','겁주는 말이 없어요. 쉬어 가라는 달도 이유를 알려 주니까 마음이 편했어요.'],
  [4,'정*수','50대','신년운세','시간 몰라도 나와요','태어난 시를 몰라서 망설였는데 10개 장이 다 나왔어요. 가족 것도 신청하려고요.'],
  [5,'한*별','20대','연애운 묶음','달마다 할 일이 있어요','12개월 장을 달력에 옮겨 적었어요. 이번 달에 뭘 하면 되는지가 딱 나와요.']
];


document.getElementById('cleanToggle').addEventListener('click', e => { const on = document.body.classList.toggle('clean'); e.currentTarget.textContent = on ? '확인 표시 보이기' : '확인 표시 숨기기'; });
document.addEventListener('click', e => {
  const a = e.target.closest('a.cta-out');
  if (!a) return;
  const u = new URL(CHECKOUT);
  qs.forEach((v, k) => u.searchParams.set(k, v));
  u.searchParams.set('plan', state.plan);
  a.href = u.toString();
  track('outbound_checkout', { pos: a.dataset.pos || 'dock', plan: state.plan, value: state.price, birth_entered: !!state.me });
});


// 광고 소재별 첫 문장 (?v=love 또는 #v-love)
const VARIANTS = {
  love: ['2027년, 인연은<br><em>몇 월에 들어올까요?</em>', '먼저 마음을 꺼낼 달, 침묵이 상처가 되는 달까지. 차우진이 내 생년월일로 A4 약 20쪽을 새로 씁니다.', '"2월과 3월에 먼저 마음을 꺼내 보이면 인연이 들어와요."'],
  money: ['내 돈의 봄은<br><em>몇 월에 올까요?</em>', '돈이 들어오는 달, 지갑이 얇아지는 달, "같이 돈 벌자"는 말을 조심할 달까지 내 생년월일로 짚어요.', '"가을 석 달은 함께 돈 벌자는 말을 가장 조심할 때예요."'],
  health: ['올해 내 몸은<br><em>어디서 먼저 신호를 보낼까요?</em>', '달마다 먼저 지치는 곳이 달라요. 내 사주에 맞는 운동과 생활 처방까지 짚어요.', '"4월에는 눈과 목, 어깨가 가장 먼저 신호를 보내요."'],
  job: ['옮길까, 버틸까?<br><em>사직서 내면 안 되는 달이 있어요</em>', '이직 창이 열리는 달과 서명하면 안 되는 달. 내가 남긴 질문엔 마지막 장 편지로 답해요.', '"7월에서 10월 사이에는 새 자리에 서명하지 마세요."'],
  gift: ['올해는 부모님의 2027도<br><em>미리 읽어 두세요</em>', '언제 건강을 챙겨 드려야 할지, 언제 큰돈 결정을 말려야 할지. 생년월일만 있으면 돼요.', '"막히는 달에는 몸을 크게 쓰기보다 자주 조금씩 움직이는 쪽이 맞아요."']
};
(function () {
  const v = qs.get('v') || (location.hash.startsWith('#v-') ? location.hash.slice(3) : '');
  const d = VARIANTS[v]; if (!d) return;
  document.getElementById('h1').innerHTML = d[0]; document.getElementById('lead').textContent = d[1]; document.getElementById('tick').textContent = d[2];
  track('hero_variant', { v });
})();

// 히어로 문장
(function () {
  const L = ['"7월에서 10월 사이에는 새 자리에 서명하지 마세요."', '"가을 석 달은 함께 돈 벌자는 말을 가장 조심할 때예요."', '"2월과 3월에 먼저 마음을 꺼내 보이면 인연이 들어와요."', '"4월에는 눈과 목, 어깨가 가장 먼저 신호를 보내요."', '"11월은 2027년의 수확이 시작되는 달이에요."'];
  const el = document.getElementById('tick'); let i = 0;
  if (!reduce) setInterval(() => { el.classList.add('out'); setTimeout(() => { i = (i + 1) % L.length; el.textContent = L[i]; el.classList.remove('out'); }, 350); }, 3200);
})();

// 생년월일 → 일간 (2000-12-29 = 辛酉 기준, 60갑자 순환)
const STEMS = '甲乙丙丁戊己庚辛壬癸', BRANCHES = '子丑寅卯辰巳午未申酉戌亥';
function dayPillar(y, m, d) { const diff = Math.round((Date.UTC(y, m - 1, d) - Date.UTC(2000, 11, 29)) / 864e5); return [((7 + diff) % 10 + 10) % 10, ((9 + diff) % 12 + 12) % 12]; }

// 2027 월간(천간)과 일간의 관계 → 열두 달 지도
const EL = { 甲: 'w', 乙: 'w', 丙: 'f', 丁: 'f', 戊: 'e', 己: 'e', 庚: 'm', 辛: 'm', 壬: 'a', 癸: 'a' };
const GEN = { w: 'f', f: 'e', e: 'm', m: 'a', a: 'w' }, CTL = { w: 'e', e: 'a', a: 'f', f: 'm', m: 'w' };
const MONTH_STEMS = '辛壬癸甲乙丙丁戊己庚辛壬';
const CAT = { self: ['나를 세우는 달', '사람·경쟁'], out: ['내놓는 달', '말·결과물'], money: ['돈이 움직이는 달', '재물·기회'], work: ['일이 몰리는 달', '직장·책임'], help: ['도움받는 달', '배움·쉼'] };
function cat(dm, ms) { const e = EL[dm], x = EL[ms]; if (e === x) return 'self'; if (GEN[e] === x) return 'out'; if (CTL[e] === x) return 'money'; if (CTL[x] === e) return 'work'; return 'help'; }
function yearMap(dmStem) {
  const cats = [...MONTH_STEMS].map(ms => cat(dmStem, ms)), by = {};
  cats.forEach((c, i) => (by[c] = by[c] || []).push(i + 1));
  return { cats, by };
}
function sumHtml(by, keys) { return keys.filter(k => by[k]).map(k => '<li><span>' + CAT[k][0] + '</span><b>' + by[k].join('·') + '월</b></li>').join(''); }
function fillSel(ySel, mSel, dSel) {
  ySel.innerHTML = '<option value="">년</option>' + Array.from({ length: 81 }, (_, i) => '<option>' + (2008 - i) + '</option>').join('');
  mSel.innerHTML = '<option value="">월</option>' + Array.from({ length: 12 }, (_, i) => '<option>' + (i + 1) + '</option>').join('');
  const days = () => { const n = new Date(+ySel.value || 2000, +mSel.value || 1, 0).getDate(), cur = dSel.value; dSel.innerHTML = '<option value="">일</option>' + Array.from({ length: n }, (_, i) => '<option>' + (i + 1) + '</option>').join(''); if (cur && +cur <= n) dSel.value = cur; };
  days(); ySel.addEventListener('change', days); mSel.addEventListener('change', days);
  return days;
}
const by = document.getElementById('by'), bm = document.getElementById('bm'), bd = document.getElementById('bd');
by.innerHTML = '<option value="">년</option>' + Array.from({ length: 71 }, (_, i) => '<option>' + (2008 - i) + '</option>').join('');
bm.innerHTML = '<option value="">월</option>' + Array.from({ length: 12 }, (_, i) => '<option>' + (i + 1) + '</option>').join('');
function fillDays() { const n = new Date(+by.value || 2000, +bm.value || 1, 0).getDate(), cur = bd.value; bd.innerHTML = '<option value="">일</option>' + Array.from({ length: n }, (_, i) => '<option>' + (i + 1) + '</option>').join(''); if (cur && +cur <= n) bd.value = cur; }
fillDays(); by.addEventListener('change', fillDays); bm.addEventListener('change', fillDays);
function showMe(y, m, d, user) {
  const [st, br] = dayPillar(y, m, d), dm = DAYMASTER[st];
  state.me = { y, m, d };
  try { localStorage.setItem('cw27_b', [y, m, d].join('-')); } catch (e) {}
  document.getElementById('meKick').textContent = y + '년 ' + m + '월 ' + d + '일생의 2027';
  document.getElementById('meHan').textContent = STEMS[st];
  document.getElementById('meLabel').textContent = '나의 일간 · ' + STEMS[st] + BRANCHES[br] + '일생 (' + dm.ko + ')';
  document.getElementById('meTitle').textContent = dm.img + ' 같은 사람';
  document.getElementById('meDesc').textContent = dm.desc;
  document.getElementById('meTen').textContent = '정미년의 불(丁)은 나에게 ' + dm.ten;
  document.getElementById('meTdesc').textContent = dm.tdesc;
  document.getElementById('meTags').innerHTML = dm.chips.map(c => '<span>' + c + '</span>').join('');
  document.getElementById('meName').textContent = y + '년 ' + m + '월 ' + d + '일생';
  document.getElementById('lockList').innerHTML = LOCK.map(([t, s]) => '<li><b>' + t + '</b><span aria-hidden="true">' + s + '</span></li>').join('');
  const ym = yearMap(STEMS[st]);
  document.getElementById('mmGrid').innerHTML = ym.cats.map((c, i) => '<div class="' + c + '"><b>' + (i + 1) + '월</b><span>' + CAT[c][0] + '</span></div>').join('');
  document.getElementById('mmSum').innerHTML = sumHtml(ym.by, ['money', 'work', 'out', 'help', 'self']);
  const sec = document.getElementById('me'); sec.hidden = false;
  if (user) { sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); track('birth_submit', { stem: STEMS[st] }); }
  updateDock();
}
document.getElementById('bform').addEventListener('submit', e => { e.preventDefault(); if (!by.value || !bm.value || !bd.value) { (by.value ? (bm.value ? bd : bm) : by).focus(); return; } showMe(+by.value, +bm.value, +bd.value, true); });


// 가족·연인
const fy = document.getElementById('fy'), fm = document.getElementById('fm'), fd = document.getElementById('fd');
const fDays = fillSel(fy, fm, fd);
document.getElementById('fform').addEventListener('submit', e => {
  e.preventDefault();
  if (!fy.value || !fm.value || !fd.value) { (fy.value ? (fm.value ? fd : fm) : fy).focus(); return; }
  const who = document.querySelector('input[name="fw"]:checked').value;
  const [st, br] = dayPillar(+fy.value, +fm.value, +fd.value), dm = DAYMASTER[st], ym = yearMap(STEMS[st]);
  document.getElementById('fLabel').textContent = who + ' · ' + fy.value + '년생 · ' + STEMS[st] + BRANCHES[br] + '일생';
  document.getElementById('fTitle').textContent = dm.img + ' 같은 분';
  document.getElementById('fDesc').textContent = '2027년은 ' + dm.ten + '의 해. ' + dm.tdesc;
  document.getElementById('fSum').innerHTML = sumHtml(ym.by, who === '부모님' ? ['work', 'money', 'help'] : who === '연인' ? ['out', 'help', 'money'] : ['money', 'work', 'out']);
  document.getElementById('fCta').textContent = who + ' 2027 신년운세 받기 · 33,000원';
  const out = document.getElementById('famOut'); out.hidden = false; out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  track('family_submit', { who });
});

// 실제 결과 화면
const CH_TITLE = { '00': '사주 들여다보기', '02': '재물운', '03': '건강운', '04': '애정운', '05': '직장·명예운', '09': '차우진의 편지' };
const screen = document.getElementById('screen');
function showView(k) {
  const v = VIEW[k];
  document.querySelectorAll('[data-vc]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.vc === k)));
  let h = '<p class="r-when">2026.11.06 · 2027 신년운세 · 풀이 열 장 · 용신 수(水)</p><p class="r-ch">제' + (+k) + '장</p><p class="r-title">' + CH_TITLE[k] + '</p>' +
    '<figure class="r-fig"><img src="assets/img/chv' + k + '.webp" alt="' + CH_TITLE[k] + ' 장의 차우진 삽화" width="420" height="630"><figcaption>' + v.cap + '</figcaption></figure>';
  if (k === '00') h += document.getElementById('pillarTpl').innerHTML;
  v.secs.forEach(([t, ps], i) => { h += '<h4>' + t + '</h4>' + ps.map(x => '<p>' + x + '</p>').join(''); if (i === 0 && v.bka) h += '<figure class="r-bka"><img src="assets/img/bka' + k + '.webp" alt="' + v.bka + '" width="600" height="900"><figcaption>' + v.bka + '</figcaption></figure>'; });
  h += '<p class="r-more">이 장은 소제목 4개로 이어져요 · 실제 결과에서는 끝까지 읽을 수 있어요</p>';
  screen.innerHTML = h; screen.scrollTop = 0; track('view_tab', { ch: k });
}
document.querySelectorAll('[data-vc]').forEach(b => b.addEventListener('click', () => showView(b.dataset.vc)));
showView('00');

// 맞춤 삽화
const gal = document.getElementById('gal');
GALLERY.forEach(([img, ch, cap]) => { const f = document.createElement('figure'); f.className = 'g'; f.innerHTML = '<img src="assets/img/' + img + '.webp" alt="' + cap + '" width="600" height="900"><figcaption><small>' + ch + '</small><p>' + cap + '</p></figcaption>'; gal.appendChild(f); });
(function () {
  const step = () => gal.firstElementChild.getBoundingClientRect().width + 12;
  const atEnd = () => gal.scrollLeft >= gal.scrollWidth - gal.clientWidth - 4;
  const go = dir => { if (dir > 0 && atEnd()) gal.scrollTo({ left: 0, behavior: 'smooth' }); else gal.scrollBy({ left: dir * step(), behavior: 'smooth' }); };
  let timer = null; const stop = () => { clearInterval(timer); timer = null; };
  document.getElementById('gPrev').addEventListener('click', () => { stop(); go(-1); });
  document.getElementById('gNext').addEventListener('click', () => { stop(); go(1); });
  gal.addEventListener('scroll', () => { document.getElementById('gCount').textContent = (atEnd() ? GALLERY.length : Math.round(gal.scrollLeft / step()) + 1) + ' / ' + GALLERY.length; }, { passive: true });
  let down = false, sx = 0, sl = 0;
  gal.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; sx = e.clientX; sl = gal.scrollLeft; gal.style.scrollSnapType = 'none'; stop(); });
  addEventListener('pointerup', () => { if (down) { down = false; gal.style.scrollSnapType = ''; } });
  gal.addEventListener('pointermove', e => { if (down) gal.scrollLeft = sl - (e.clientX - sx); });
  gal.addEventListener('touchstart', stop, { passive: true });
  if (!reduce) new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !timer) timer = setInterval(() => go(1), 3400); else if (!e.isIntersecting) stop(); }), { threshold: .5 }).observe(gal);
})();

// 12개월
const monthsEl = document.getElementById('months');
MONTHS.forEach(([h, flow], i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = (i + 1) + '월'; if (flow === 'water') b.className = 'open'; b.setAttribute('aria-pressed', 'false'); b.addEventListener('click', () => showMonth(i)); monthsEl.appendChild(b); });
function showMonth(i) {
  const [h, flow, p1, p2] = MONTHS[i];
  monthsEl.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-pressed', String(j === i)));
  document.getElementById('month').innerHTML = '<h3>' + h + '</h3><p>' + p1 + '</p><p class="blur" aria-hidden="true">' + p2 + '</p><a class="cta-out" data-pos="month" href="' + CHECKOUT + '">이 달은 네 문단으로 이어져요 · 내 12개월 받기 →</a>';
  track('month_view', { m: i + 1 });
}
showMonth(1);

// 후기 (예시)
// 후기 (예시) — 별점 없이 '예시 후기' 배지. 본문 첫 문장 형광펜 강조
document.getElementById('reviews').innerHTML = REVIEWS.map(([s, who, age, prod, h, p]) => { const k = p.search(/[.!?요]\s/); const a = k > 0 ? p.slice(0, k + 1) : p, b = k > 0 ? p.slice(k + 1) : ''; return '<article class="rv"><div class="rv-top"><span class="rv-badge">예시 후기</span><span class="rv-prod">' + prod + '</span></div><h3>' + h + '</h3><p><mark>' + a + '</mark>' + b + '</p><span class="who">' + who + ' · ' + age + '</span></article>'; }).join('');

// 가격
document.querySelectorAll('input[name="plan"]').forEach(r => r.addEventListener('change', () => {
  state.plan = r.value; state.price = +r.dataset.price; state.planName = r.dataset.name;
  document.getElementById('payBtn').textContent = state.planName + ' ' + state.price.toLocaleString() + '원으로 받기';
  track('plan_select', { plan: state.plan }); updateDock();
}));

// 하단 바
const dock = document.getElementById('dock'), dockBtn = document.getElementById('dockBtn');
const vis = { hero: true, price: false, passed: false };
function updateDock() {
  dock.classList.toggle('off', vis.hero || vis.price);
  if (vis.passed) { dockBtn.textContent = state.planName + ' ' + state.price.toLocaleString() + '원으로 받기'; dockBtn.classList.add('cta-out'); dockBtn.href = CHECKOUT; }
  else if (state.me) { dockBtn.textContent = '내 풀이 전체 열기 · 33,000원'; dockBtn.classList.add('cta-out'); dockBtn.href = CHECKOUT; }
  else { dockBtn.textContent = '생년월일로 내 2027 무료로 보기'; dockBtn.classList.remove('cta-out'); dockBtn.href = '#try'; }
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.target.id === 'top') vis.hero = e.intersectionRatio >= .15;
  else { vis.price = e.intersectionRatio >= .15; vis.passed = !e.isIntersecting && e.boundingClientRect.top < 0; if (vis.price) track('price_view'); }
  updateDock();
}), { threshold: [0, .15, .5] });
io.observe(document.getElementById('top')); io.observe(document.getElementById('deal'));

// 등장 모션
const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { threshold: .2 });
document.querySelectorAll('.reveal').forEach(el => rio.observe(el));

// 마감 카운트다운
if (DEAL_END) {
  const end = new Date(DEAL_END).getTime(), pad = n => String(n).padStart(2, '0');
  const tick = () => {
    const left = end - Date.now();
    if (left <= 0) { document.getElementById('dealBox').hidden = true; document.getElementById('dockDeal').hidden = true; return; }
    const d = Math.floor(left / 864e5), t = (d ? d + '일 ' : '') + pad(Math.floor(left / 36e5) % 24) + ':' + pad(Math.floor(left / 6e4) % 60) + ':' + pad(Math.floor(left / 1e3) % 60);
    document.getElementById('dealT').textContent = t; document.getElementById('dockT').textContent = t;
    document.getElementById('dealBox').hidden = false; document.getElementById('dockDeal').hidden = false;
  };
  tick(); setInterval(tick, 1000);
}

// 저장된 생년월일 복원 (모든 준비가 끝난 뒤)
try { const b = (localStorage.getItem('cw27_b') || '').split('-').map(Number); if (b.length === 3 && b[0]) { by.value = b[0]; bm.value = b[1]; fillDays(); bd.value = b[2]; showMe(b[0], b[1], b[2], false); } } catch (e) {}
updateDock();
// 후기 자동 넘김 — 4초 간격, 손대거나 포커스/호버 시 멈춤, 동작 줄이기 설정이면 자동 넘김 안 함
(function () {
  const rv = document.getElementById('reviews'), n = rv.children.length;
  if (!n) return;
  const ctl = document.createElement('div'); ctl.className = 'rv-ctl';
  ctl.innerHTML = '<span class="rv-dots" aria-hidden="true">' + '<i></i>'.repeat(n) + '</span><span id="rvCount" class="sr">1 / ' + n + '</span><button type="button" id="rvToggle" aria-pressed="false">멈춤</button>';
  rv.after(ctl);
  const step = () => rv.firstElementChild.getBoundingClientRect().width + 12;
  const idx = () => Math.min(n - 1, Math.round(rv.scrollLeft / step()));
  const atEnd = () => rv.scrollLeft >= rv.scrollWidth - rv.clientWidth - 4;
  const dots = () => { const c = atEnd() ? n - 1 : idx(); ctl.querySelectorAll('.rv-dots i').forEach((d, j) => d.classList.toggle('on', j === c)); document.getElementById('rvCount').textContent = (c + 1) + ' / ' + n; };
  rv.addEventListener('scroll', dots, { passive: true }); dots();
  const tgl = document.getElementById('rvToggle');
  let timer = null, paused = reduce, inView = false;
  const next = () => atEnd() ? rv.scrollTo({ left: 0, behavior: 'smooth' }) : rv.scrollBy({ left: step(), behavior: 'smooth' });
  const sync = () => { const run = inView && !paused; if (run && !timer) timer = setInterval(next, 4000); if (!run && timer) { clearInterval(timer); timer = null; } tgl.textContent = paused ? '재생' : '멈춤'; tgl.setAttribute('aria-pressed', String(paused)); };
  tgl.addEventListener('click', () => { paused = !paused; sync(); });
  let hold = false; const hOn = () => { hold = true; if (timer) { clearInterval(timer); timer = null; } }, hOff = () => { hold = false; if (!paused && inView) sync(); };
  rv.addEventListener('pointerenter', hOn); rv.addEventListener('pointerleave', hOff);
  rv.addEventListener('focusin', hOn); rv.addEventListener('focusout', hOff);
  rv.addEventListener('touchstart', () => { paused = true; sync(); }, { passive: true });
  new IntersectionObserver(es => es.forEach(e => { inView = e.isIntersecting; if (!hold) sync(); }), { threshold: .5 }).observe(rv);
  sync();
})();

