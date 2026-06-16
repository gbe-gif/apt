import { motion } from 'motion/react';

export function HomeView() {
  const sandyCoveDetails = [
    "유명 대학가와 인접해 있어 유동 인구가 넘치는 활기찬 거리입니다.",
    "젠트리피케이션의 영향으로 트렌디한 힙스터 상권이 형성되어 있습니다.",
    "대중교통이 편리하고 힙한 인프라를 갖춘 탓에 월세가 매우 높게 책정되어 있습니다.",
    "거대한 규모의 대형 소방서가 자리 잡고 있어 든든함을 줍니다.",
    "강력한 중범죄는 거의 발생하지 않는 치안이 좋은 구역입니다.",
    "다만, 레몬만 훔쳐 가는 괴도나 거리 한복판에서 제왕학을 설파하는 사람 등 다소 하찮고 기상천외한 경범죄가 끊임없이 발생합니다.",
    "매일 밤마다 중형견만 한 덩치의 근육질 불량 라쿤 갱단이 골목을 점령합니다. 이 구역을 안전하게 지나가기 위해서는 통행료 명목으로 소시지를 상납해야 합니다.",
    "매주 토요일마다 '샌디 코브 파크'에서 플리마켓이 활발하게 열립니다. 주민들이 모여 화기애애한 분위기를 띠며, 의외로 쓸만하고 질 좋은 물건을 건질 수 있습니다."
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 pt-12 px-6 max-w-4xl mx-auto"
    >
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-sunset)] mb-2">Prologue</h1>
        <p className="text-sm font-medium text-[var(--color-ocean)] uppercase tracking-widest">Sunset Palace Database</p>
      </header>

      <section className="mb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-[var(--color-beige-dark)] p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-sunset)]"></div>
          <div className="prose prose-stone">
            <p className="text-lg leading-relaxed text-gray-700">
              2026년 현재, 미국 캘리포니아주의 여유로우면서도 트렌디한 일상을 배경으로 합니다.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-6">
              눈부신 햇살 아래 평화로워 보이는 일상 속에서, 은근히 기상천외한 일들이 섞여 들어가는 독특한 분위기를 자아냅니다.
            </p>
          </div>
        </div>
      </section>

      <section>
        <header className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] border-b-2 border-[var(--color-sunset)] pb-3 flex items-center gap-2">
            <span className="text-[var(--color-sunset)]">Sandy Cove St.</span>
          </h2>
        </header>

        <div className="mb-8 rounded-3xl overflow-hidden shadow-sm border border-[var(--color-beige-dark)]">
          <img src="https://gbe88.uk/1/Apt/stre.webp" alt="Sandy Cove St." className="w-full h-auto block" />
        </div>

        <div className="space-y-4">
          {sandyCoveDetails.map((detail, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-beige-dark)] flex gap-4 items-start">
              <span className="text-[var(--color-sunset)] font-bold font-mono text-lg mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
              <p className="text-gray-700 leading-relaxed text-[0.95rem]">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
