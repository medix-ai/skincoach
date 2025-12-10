'use client'

export default function WhySkinCoach() {
  return (
    <section className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-16 tracking-[-1px]">
          스킨케어 제품은 많은데,<br />왜 피부는 그대로일까?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
            <div className="text-4xl mb-4 emoji">📦</div>
            <p className="text-lg leading-[1.8] text-[#2F2F2F] font-medium">
              스킨케어 제품은 쌓이는데,<br />
              어떻게 조합해야 하는지 모르고
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
            <div className="text-4xl mb-4 emoji">⚠️</div>
            <p className="text-lg leading-[1.8] text-[#2F2F2F] font-medium">
              성분이 겹치거나 충돌해서<br />
              오히려 자극이 생기고
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
            <div className="text-4xl mb-4 emoji">💡</div>
            <p className="text-lg leading-[1.8] text-[#2F2F2F] font-medium">
              필요한 건 '새 제품'이 아니라<br />
              '똑똑한 사용법'입니다.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-[#84a98c]">
            → 스킨코치는 바로 이 문제를 해결합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
