import { motion } from 'motion/react';

export function ApartmentView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 pt-12 px-6 max-w-4xl mx-auto flex flex-col gap-8"
    >
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-sunset)] mb-2">Sunset Palace</h1>
        <p className="text-sm font-medium text-[var(--color-ocean)] uppercase tracking-widest">Apartment Layout</p>
      </header>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-beige-dark)]">
        <h2 className="text-2xl font-bold mb-5 text-[var(--color-ink)]">선셋 팰리스 아파트먼트</h2>
        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>샌디 코브 스트리트 266번지에 위치한 1976년 준공 빈티지 아파트먼트.</li>
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>지하 1층부터 지상 9층까지 총 25세대가 거주.</li>
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>지상의 야외 공간은 입주민 전용 주차장으로 활용.</li>
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>1층: 아파트 관리실과 세대별 우편함.</li>
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>지하 1층: 배전함, 세대별 창고, 공용 헬스장, 코인 세탁실.</li>
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>2~6층 (1Bed): 각 층 4세대.</li>
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>7~8층 (3Bed 2Bath): 각 층 2세대.</li>
          <li className="flex items-start"><span className="text-[var(--color-ocean)] mr-3 mt-0.5">•</span>9층 (4Bed 2Bath): 단독 펜트하우스.</li>
        </ul>
      </section>

      <div className="relative mt-4">
        <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-[var(--color-beige-dark)]"></div>
        <div className="space-y-6">
          <FloorCard floor="9F" type="Penthouse" items={[
            { room: "901호", desc: "아드리안 베인 (주연)" }
          ]} />
          
          <FloorCard floor="8F" type="3Bed 2Bath" items={[
            { room: "801호", desc: "록시 페레즈, 다프네 켄싱턴 (주연)" },
            { room: "802호", desc: "쳇 플린, 내쉬 킨케이드 (주연)" }
          ]} />
          
          <FloorCard floor="7F" type="3Bed 2Bath" items={[
            { room: "702호", desc: "헤르만 & 잉그리드 부부 (노부부) / 매일 밤 뜨거운 시간을 보내며 심각한 층간 소음을 유발함." }
          ]} />
          
          <FloorCard floor="6F" type="1Bed" items={[
            { room: "601호", desc: "랜디 (34세, 남) / 음침하고 음란한 성격의 소설 작가." },
            { room: "604호", desc: "딜런 김 (26세, 남) / 바르고 반듯한 성격의 대학원생." }
          ]} />
          
          <FloorCard floor="5F" type="1Bed" items={[
            { room: "502호", desc: "린다 (42세, 여) / 오지랖이 넓고 남성에게 극도로 집착하는 성향을 띠며, 직업은 불명." },
            { room: "503호", desc: "타일러 (22세, 남) / 항상 몽롱한 상태를 유지하는 밴드 베이시스트." }
          ]} />
          
          <FloorCard floor="4F" type="1Bed" items={[
            { room: "401호", desc: "케빈 (31세, 남) / 순수하고 바보 같은 면모가 있는 택배 기사." },
            { room: "403호", desc: "웨이 (22세, 여) / 매사에 무심하고 쿨한 성격의 명문대생." }
          ]} />
          
          <FloorCard floor="3F" type="1Bed" items={[
            { room: "302호", desc: "카렌 (55세, 여) / 까탈스럽고 예민한 성격을 지닌 마트 캐셔." },
            { room: "304호", desc: "밥 (58세, 남) / 겉으로는 무심해 보이나 은근히 친절한 퇴역 경찰관." }
          ]} />
          
          <FloorCard floor="2F" type="1Bed" items={[
            { room: "201호", desc: "한지로 (61세, 남) / 결벽증이 있고 과묵한 성격의 셰프." },
            { room: "204호", desc: "채드 (33세, 남) / 매사에 열정이 넘치는 헬스 마니아." }
          ]} />
          
          <FloorCard floor="1F" type="Lobby" items={[
            { room: "경비실", desc: "행크 (63세, 남) / 퇴역 군인 출신으로 아파트를 지키는 든든한 경비원." }
          ]} />
          
          <FloorCard floor="B1" type="Facilities" items={[
            { room: "부대시설", desc: "배전함, 세대별 창고, 공용 헬스장, 코인 세탁실." }
          ]} />

          <div className="relative z-10 pt-4 flex gap-4 md:gap-6 mt-8">
            <div className="w-14 shrink-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[var(--color-ocean)] text-white flex items-center justify-center text-xl shadow-md z-10 relative">
                🐾
              </div>
            </div>
            <div className="bg-[#EAF3F9] rounded-2xl p-6 shadow-sm border border-[var(--color-ocean)]/20 flex-1">
              <h3 className="font-bold text-lg text-[var(--color-ocean)] mb-5 border-b border-[var(--color-ocean)]/20 pb-3">아파트 외부 (샌디 코브 스트리트)</h3>
              
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="shrink-0 w-full sm:w-36 flex justify-center sm:block">
                  <img 
                    src="https://gbe88.uk/1/Apt/raccoon.webp" 
                    alt="빅 토니" 
                    className="rounded-2xl border border-[var(--color-ocean)]/20 shadow-sm w-full h-auto aspect-square object-cover max-w-[200px] sm:max-w-none bg-white"
                  />
                </div>
                <div className="flex-1 w-full pl-1 sm:pl-0">
                  <div className="mb-3">
                    <div className="flex items-end gap-2 flex-wrap mb-1">
                      <p className="font-bold text-[var(--color-ink)] text-xl">빅 토니</p>
                      <p className="text-[var(--color-ocean)] font-bold text-sm mb-0.5">라쿤 갱단 대장</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2.5 py-1 bg-white border border-[var(--color-ocean)]/20 text-[var(--color-ocean)] text-xs font-bold rounded-md">수컷</span>
                      <span className="px-2.5 py-1 bg-white border border-[var(--color-ocean)]/20 text-[var(--color-ocean)] text-xs font-bold rounded-md">19kg</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mt-4 pt-4 border-t border-[var(--color-ocean)]/10 text-[0.95rem] text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[var(--color-ocean)] opacity-70 mr-2.5 mt-1.5 text-[0.5rem]">◆</span>
                      <span className="leading-relaxed">거리를 장악한 불량 라쿤 무리의 거대한 우두머리임.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-ocean)] opacity-70 mr-2.5 mt-1.5 text-[0.5rem]">◆</span>
                      <span className="leading-relaxed">폭군처럼 굴며 엄청난 식탐을 자랑하지만, 예쁜 여자 앞에서는 나름대로 젠틀하게 행동함.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--color-ocean)] opacity-70 mr-2.5 mt-1.5 text-[0.5rem]">◆</span>
                      <span className="leading-relaxed">아파트 경비원인 행크를 일생일대의 라이벌로 여기며 호시탐탐 대립각을 세움.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FloorCard({ floor, type, items }: { floor: string, type: string, items: { room: string, desc: string }[] }) {
  return (
    <div className="relative z-10 flex gap-4 md:gap-6">
      <div className="w-14 shrink-0 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-[var(--color-sunset)] text-white flex items-center justify-center font-bold text-lg shadow-md">
          {floor}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[var(--color-beige-dark)] flex-1">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold px-3 py-1 bg-[var(--color-beige)] text-[var(--color-ink)] rounded-full uppercase tracking-widest">{type}</span>
        </div>
        <div className="space-y-4 text-[0.95rem]">
          {items.map((item, i) => (
            <div key={i} className="pb-4 border-b border-[var(--color-beige-dark)] last:border-0 last:pb-0">
              <span className="font-bold text-[var(--color-ink)] mr-3">{item.room}</span>
              <span className="text-gray-600 block sm:inline mt-1 sm:mt-0 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
