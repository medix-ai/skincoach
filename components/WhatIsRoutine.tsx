'use client'

export default function WhatIsRoutine() {
  return (
    <section className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-16 tracking-[-1px]">
          루틴 리포트란?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
            <div className="text-4xl mb-4 emoji">🔬</div>
            <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">피부타입 기반 성분 분석</h3>
            <p className="text-[#5a6c57] leading-relaxed">
              당신의 피부타입과 고민에 맞는 성분 적합성을 정확히 분석합니다
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
            <div className="text-4xl mb-4 emoji">📋</div>
            <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">제품 역할 매핑</h3>
            <p className="text-[#5a6c57] leading-relaxed">
              내 제품의 역할을 명확히 정리 (보습/진정/각질/항산화 등)
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
            <div className="text-4xl mb-4 emoji">🌅</div>
            <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">AM/PM 루틴 자동 생성</h3>
            <p className="text-[#5a6c57] leading-relaxed">
              보유 제품만으로 아침/저녁 루틴을 자동으로 구성해드립니다
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-8 border border-[#A8E3D1]/20">
            <div className="text-4xl mb-4 emoji">⚠️</div>
            <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">위험 조합 경고</h3>
            <p className="text-[#5a6c57] leading-relaxed">
              레티놀 × AHA/BHA 등 자극 위험 조합을 실시간으로 감지합니다
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-[#A8E3D1]/20 to-white rounded-3xl p-8 border border-[#A8E3D1]/30">
            <div className="text-4xl mb-4 emoji">✨</div>
            <h3 className="text-2xl font-bold text-[#2F2F2F] mb-3">부족한 영역 보완 추천</h3>
            <p className="text-lg text-[#5a6c57] leading-relaxed">
              항산화, 장벽강화 등 루틴에 부족한 부분을 파악하고<br />
              대체 제품을 추천해드립니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
