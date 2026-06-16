import { motion } from 'motion/react';

export function ResidentsView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 pt-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-16"
    >
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-sunset)] mb-2">Residents</h1>
        <p className="text-sm font-medium text-[var(--color-ocean)] uppercase tracking-widest">Sunset Palace Key Profiles</p>
      </header>

      {/* 801호 */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-ink)] border-b-2 border-[var(--color-sunset)] pb-3 mb-8 flex items-center gap-2">
          <span className="text-[var(--color-sunset)]">801호</span>
        </h2>
        
        <div className="flex flex-col gap-12">
          <ProfileCard 
            image="https://gbe88.uk/1/Apt/s2.webp"
            name="록시 페레즈 (Roxy Perez)"
            title="타코 트럭 사장"
            tags={["27세", "8월 10일", "여성", "Bisexual", "ESTP"]}
            stats={["167cm", "글래머러스", "긴 붉은 머리", "갈색 눈"]}
            scent="스파이시 칠리, 시트러스, 우디"
            education="공립 고등학교 졸업"
            speech="찰진 비속어와 슬랭을 섞어 당당하고 호쾌한 말투"
            secret={[
              "관계 시 장난기 넘치게 주도권을 쥐거나 내어주기를 즐기는 성향임.",
              "언어적 도발에 능하지만, 막상 강하게 몰아붙이면 금세 순종적으로 변하는 반전 매력을 보유.",
              "충동적인 스릴과 예상치 못한 노출에 흥분."
            ]}
            details={[
              "거리의 지혜를 갖춘 현실주의자이며, 짓궂은 농담과 부를 좇는 야심가적 기질을 뽐냄.",
              "빚 없는 스탭밴 타코 트럭과 현금 15만 달러를 보유한 알부자.",
              "자기 명의의 번듯한 가게를 차리는 것이 궁극적인 목표.",
              "월세를 아끼려 다프네와 동거 중이나 그녀를 연애 상대로 보진 않음.",
              "기본 상식이 부족해 보이나 눈치가 백단이며 실물 경제에 가장 빠삭함."
            ]}
          />
          
          <ProfileCard 
            image="https://gbe88.uk/1/Apt/s1.webp"
            name="다프네 켄싱턴 (Daphne Kensington)"
            title="가출 중인 재벌가 아가씨"
            tags={["28세", "3월 3일", "여성", "Pansexual", "ENFP"]}
            stats={["171cm", "슬랜더", "칼단발 금발", "녹색 눈"]}
            scent="스위트 피치, 화이트 로즈, 바닐라 크림"
            education="유명 고급 사립대 미술사학 학사"
            speech="교양 있고 나긋나긋한 톤으로 해맑고 맹한 어휘"
            secret={[
              "칭찬에 약하며 본의 아니게 노출을 즐기게 되는 성향임.",
              "괴상야릇한 코스튬 플레이에 푹 빠져 있으며, 본인도 모르게 상대를 유혹.",
              "감각이 쉽게 과부하에 걸리며 순진무구한 태도로 애원함."
            ]}
            details={[
              "천진난만한 매력을 뽐내며 자유를 갈망하나, 일상에서는 걸어 다니는 재앙.",
              "감정 표현이 필터 없이 튀어나오며 얼굴에 모든 기분이 투명하게 드러남.",
              "글로벌 IT 및 유통 재벌가의 차녀이나 자립심 넘치는 록시를 동경해 가출.",
              "록시의 노트북으로 주식 단타를 쳐서 월세를 거뜬히 부담함.",
              "집안일에 대한 열정은 높으나 대체로 크고 작은 사고를 침."
            ]}
          />
        </div>
      </section>

      {/* 802호 */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-ink)] border-b-2 border-[var(--color-sunset)] pb-3 mb-8 flex items-center gap-2">
          <span className="text-[var(--color-sunset)]">802호</span>
        </h2>
        
        <div className="flex flex-col gap-12">
          <ProfileCard 
            image="https://gbe88.uk/1/Apt/s4.webp"
            name="쳇 플린 (Chet Flynn)"
            title="스탠드업 코미디언 & 바텐더"
            tags={["29세", "11월 12일", "남성", "Heterosexual", "ESTP"]}
            stats={["191cm", "근육질", "짧고 짙은 녹색 머리", "푸른 눈"]}
            scent="베르가못, 주니퍼베리, 레더"
            education="텍사스주의 커뮤니티 컬리지 졸업"
            speech="능글맞고 여유로우며, 재치 있는 펀치라인과 과장된 제스처를 곁들인 말투"
            secret={[
              "관계 시 무대를 장악하듯 주도하며, 음담패설의 마에스트로로 활약.",
              "쉴 새 없이 굴욕적인 말들을 쏟아내어 청각적인 자극을 극대화.",
              "자신의 우월한 모습을 관찰하는 것에 흥분하며 시각적인 우위를 점하는 것을 선호."
            ]}
            details={[
              "자신감 넘치는 태도로 무리를 이끌며 능수능란한 언변으로 사람들을 매료시킴.",
              "텍사스 보수적인 교회 집안 출신. 스탠드업 코미디언이 목표.",
              "비흡연자이며 주량이 매우 셈.",
              "소득이 높지만 버는 족족 전부 써버리는 씀씀이.",
              "최근 SNS 유명세로 이미지 관리 차 철벽남 노선으로 변경."
            ]}
          />
          
          <ProfileCard 
            image="https://gbe88.uk/1/Apt/s3.webp"
            name="내쉬 킨케이드 (Nash Kincaid)"
            title="현직 소방관"
            tags={["26세", "4월 15일", "남성", "Pansexual", "ESFP"]}
            stats={["197cm", "근육질 거구", "짧은 흑발", "짙은 푸른 눈"]}
            scent="프레시 코튼, 화이트 릴리, 머스크"
            education="시립 소방 아카데미 및 EMT 과정 수료"
            speech="친절하고 쾌활하며 직설적인 화법을 쓰고 크고 우렁찬 목소리가 특징"
            secret={[
              "넘치는 체력으로 상대를 헌신적으로 기쁘게 하며, 압도적인 정력을 자랑.",
              "곡예에 가까운 다양한 자세 변형을 즐김.",
              "칭찬을 받을수록 더욱 열정적으로 움직임.",
              "신체적인 접촉과 애정 표현에 깊이 중독되어 있음."
            ]}
            details={[
              "정의감 넘치는 쾌활한 성격이나 돕겠다는 의도와 달리 주변을 부수는 거대한 허당.",
              "건실하고 검소하며 소방관 연금을 꼬박꼬박 저축하는 알뜰함.",
              "아이오와 농장 출신으로 매달 고향에서 엄청난 양의 식료품 소포를 받음.",
              "반어법을 문자 그대로 받아들이는 순박한 두뇌의 소유자. 요리 실력이 뛰어남."
            ]}
          />
        </div>
      </section>

      {/* 901호 */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-ink)] border-b-2 border-[var(--color-sunset)] pb-3 mb-8 flex items-center gap-2">
          <span className="text-[var(--color-sunset)]">901호 (펜트하우스)</span>
        </h2>
        
        <div className="flex flex-col gap-12">
          <ProfileCard 
            image="https://gbe88.uk/1/Apt/s5.webp"
            name="아드리안 베인 (Adrian Vane)"
            title="아파트 관리인 / 괴짜 발명가"
            tags={["33세", "1월 9일", "남성", "Bisexual", "ENTP"]}
            stats={["187cm", "탄탄한 잔근육", "백금발", "붉은 눈"]}
            scent="메탈릭 오존, 얼그레이 티, 일랑일랑"
            education="아이비리그 대학 기계공학 석사"
            speech="오만하고 나른한 말투를 쓰나, 당황하면 말이 몹시 빨라짐"
            secret={[
              "겉으로는 주도하는 척하지만 실제로는 기구에 의존하며 수동적인 쾌락을 좇음.",
              "오작동하는 기구로 자멸하는 상황을 즐김.",
              "허세를 부리다 처절하게 애원하는 극적인 낙차를 선호.",
              "물리적으로 지배당하는 것을 갈망함."
            ]}
            details={[
              "어디로 튈지 모르는 기행을 일삼는 발명가로 강한 척하지만 실상은 처량함.",
              "캘리포니아 서부 부동산 개발 준재벌 집안의 막내아들. 매우 부유함.",
              "자칭 픽업 아티스트를 표방하나 매번 철저하게 솔로 신세.",
              "아파트 공용 시설에 이상한 기계를 설치해 온갖 재앙을 야기함."
            ]}
          />
        </div>
      </section>
    </motion.div>
  );
}

function ProfileCard({ image, name, title, tags, stats, scent, education, speech, secret, details }: any) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[var(--color-beige-dark)] flex flex-col h-full relative transition-shadow hover:shadow-md">
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
          {image && (
            <div className="shrink-0 w-full sm:w-56 md:w-64 flex justify-center sm:block">
              <img 
                src={image} 
                alt={name} 
                className="rounded-2xl border border-[var(--color-beige)] shadow-sm w-full h-auto object-contain max-h-[400px] sm:max-h-none"
              />
            </div>
          )}

          <div className="flex-1 w-full pl-1">
            <h3 className="font-bold text-2xl text-[var(--color-ink)] leading-tight">{name}</h3>
            <p className="text-[var(--color-ocean)] text-[1.05rem] font-medium mt-1 mb-4 border-b border-[var(--color-beige-dark)] pb-3 inline-block pr-6">{title}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-[var(--color-paper)] border border-[var(--color-beige)] text-[var(--color-ink)] text-[0.8rem] font-bold rounded-md uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-[0.95rem] text-gray-700 font-medium bg-[var(--color-paper)] rounded-2xl p-4 border border-[var(--color-beige)]">
              <div className="flex gap-3 items-start">
                <span className="text-[var(--color-sunset)] w-12 shrink-0 font-bold">외형</span>
                <span className="flex-1 leading-relaxed">{stats.join(' · ')}</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[var(--color-sunset)] w-12 shrink-0 font-bold">체향</span>
                <span className="flex-1 leading-relaxed">{scent}</span>
              </div>
              {education && (
                <div className="flex gap-3 items-start border-t border-[var(--color-beige)] pt-3">
                  <span className="text-[var(--color-sunset)] w-12 shrink-0 font-bold">학력</span>
                  <span className="flex-1 leading-relaxed">{education}</span>
                </div>
              )}
              {speech && (
                <div className="flex gap-3 items-start">
                  <span className="text-[var(--color-sunset)] w-12 shrink-0 font-bold">말투</span>
                  <span className="flex-1 leading-relaxed">{speech}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex flex-col md:flex-row gap-4 items-start bg-red-50 p-5 rounded-2xl border border-red-100 mb-6">
            <span className="text-red-600 font-bold w-12 shrink-0 mt-1">히든</span>
            <div className="flex-1 text-red-900/90 leading-relaxed text-[0.95rem] space-y-2">
              {Array.isArray(secret) ? secret.map((s: string, idx: number) => (
                <div key={idx} className="flex items-start">
                  <span className="text-red-600/50 mr-2 mt-1.5 text-[0.6rem]">◆</span>
                  <span>{s}</span>
                </div>
              )) : (
                <div className="flex items-start">
                  <span className="text-red-600/50 mr-2 mt-1.5 text-[0.6rem]">◆</span>
                  <span>{secret}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-2 px-1">
            <ul className="space-y-4 text-[0.95rem] text-gray-700">
              {details.map((detail: string, i: number) => (
                <li key={i} className="leading-relaxed flex items-start">
                  <span className="text-[var(--color-sunset)] opacity-50 mr-3 mt-1.5 text-[0.6rem]">◆</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
