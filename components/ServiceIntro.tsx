'use client'

export default function ServiceIntro() {
  return (
    <section id="service" className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F2F2F] mb-6 tracking-[-1px]">
            스킨코치 서비스
          </h2>
          <p className="text-xl text-[#5a6c57] max-w-[800px] mx-auto leading-relaxed">
            내가 가진 제품만으로 완벽한 스킨케어 루틴을 만들어드립니다.<br />
            AI가 피부타입과 성분을 분석해 최적의 AM/PM 루틴을 자동 생성합니다.
          </p>
        </div>

        {/* 문제 인식 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-[#2F2F2F] mb-12">
            스킨케어 제품은 많은데,<br />왜 피부는 그대로일까?
          </h3>

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

        {/* 서비스 기능 */}
        <div>
          <h3 className="text-3xl font-bold text-center text-[#2F2F2F] mb-12">
            루틴 리포트란?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
              <div className="text-4xl mb-4 emoji">🔬</div>
              <h4 className="text-xl font-bold text-[#2F2F2F] mb-3">피부타입 기반 성분 분석</h4>
              <p className="text-[#5a6c57] leading-relaxed">
                당신의 피부타입과 고민에 맞는 성분 적합성을 정확히 분석합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
              <div className="text-4xl mb-4 emoji">📋</div>
              <h4 className="text-xl font-bold text-[#2F2F2F] mb-3">제품 역할 매핑</h4>
              <p className="text-[#5a6c57] leading-relaxed">
                내 제품의 역할을 명확히 정리 (보습/진정/각질/항산화 등)
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
              <div className="text-4xl mb-4 emoji">🌅</div>
              <h4 className="text-xl font-bold text-[#2F2F2F] mb-3">AM/PM 루틴 자동 생성</h4>
              <p className="text-[#5a6c57] leading-relaxed">
                보유 제품만으로 아침/저녁 루틴을 자동으로 구성해드립니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
              <div className="text-4xl mb-4 emoji">⚠️</div>
              <h4 className="text-xl font-bold text-[#2F2F2F] mb-3">위험 조합 경고</h4>
              <p className="text-[#5a6c57] leading-relaxed">
                레티놀 × AHA/BHA 등 자극 위험 조합을 실시간으로 감지합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
