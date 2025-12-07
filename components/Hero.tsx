'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#e8f3ed]/20 to-white">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-radial from-[#b8d5bf]/40 via-[#84a98c]/20 to-[#6b9080]/10 blur-[100px] -z-10" />

      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Content */}
          <div className="max-w-[600px]">
            {/* Badges */}
            <div className="flex gap-3 mb-8">
              <div className="bg-white border border-[#84a98c]/20 px-4 py-2 rounded-[20px] text-xs font-semibold text-[#6b9080] flex items-center gap-1.5">
                <div className="w-4 h-4 bg-gradient-to-br from-[#84a98c] to-[#6b9080] rounded-full" />
                AI 기반 분석
              </div>
              <div className="bg-white border border-[#84a98c]/20 px-4 py-2 rounded-[20px] text-xs font-semibold text-[#6b9080] flex items-center gap-1.5">
                <div className="w-4 h-4 bg-gradient-to-br from-[#84a98c] to-[#6b9080] rounded-full" />
                성분 전문가
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-[56px] font-extrabold leading-[1.15] mb-6 text-[#1a1a1a] tracking-[-1.5px]">
              내 피부의 AI 코치,<br />스킨코치
            </h1>

            {/* Subtitle */}
            <p className="text-lg leading-[1.7] text-[#5a6c57] mb-9">
              당신의 피부 상태를 이해하고, 가장 적합한 루틴을 설계해주는 AI 코치입니다. 내가 가진 스킨케어 제품으로 더 똑똑하게 관리하세요.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <button className="bg-gradient-to-br from-[#84a98c] to-[#6b9080] text-white px-9 py-4 rounded-[30px] text-base font-semibold shadow-[0_4px_20px_rgba(107,144,128,0.25)] hover:shadow-[0_6px_30px_rgba(107,144,128,0.35)] hover:-translate-y-0.5 transition-all">
                무료로 시작하기
              </button>
            </div>

            {/* Contact Link */}
            <a href="#" className="text-[#6b9080] font-semibold flex items-center gap-2 text-base hover:gap-3 transition-all">
              문의하기 <span>→</span>
            </a>

            {/* Trust Logos */}
            <div className="flex gap-8 items-center mt-12 opacity-40">
              <span className="text-sm font-semibold text-[#5a6c57] emoji">🏆 startup</span>
              <span className="text-sm font-semibold text-[#5a6c57] emoji">💼 company</span>
              <span className="text-sm font-semibold text-[#5a6c57] emoji">📊 business</span>
              <span className="text-sm font-semibold text-[#5a6c57] emoji">🎯 agency</span>
            </div>
          </div>

          {/* Right - Glass Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Card 1 */}
            <div className="group absolute top-[50px] left-0 w-[280px] bg-white/70 backdrop-blur-[20px] border border-[#84a98c]/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(107,144,128,0.15)] hover:shadow-[0_20px_60px_rgba(107,144,128,0.25)] hover:-translate-y-2.5 transition-all duration-300 animate-float1">
              <div className="w-full h-[100px] bg-gradient-to-br from-[#b8d5bf]/50 via-[#84a98c]/40 to-[#6b9080]/50 rounded-2xl flex items-center justify-center text-5xl mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent animate-shimmer" />
                <span className="emoji">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 flex items-center justify-between">
                피부 분석 <span className="text-[#6b9080] transition-transform group-hover:translate-x-1">→</span>
              </h3>
              <p className="text-sm leading-relaxed text-[#5a6c57]">
                AI가 당신의 피부타입과 고민을 정확히 분석합니다
              </p>
            </div>

            {/* Card 2 */}
            <div className="group absolute top-[250px] right-10 w-[300px] bg-white/70 backdrop-blur-[20px] border border-[#84a98c]/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(107,144,128,0.15)] hover:shadow-[0_20px_60px_rgba(107,144,128,0.25)] hover:-translate-y-2.5 transition-all duration-300 animate-float2">
              <div className="w-full h-[100px] bg-gradient-to-br from-[#b8d5bf]/50 via-[#84a98c]/40 to-[#6b9080]/50 rounded-2xl flex items-center justify-center text-5xl mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent animate-shimmer" />
                <span className="emoji">✨</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 flex items-center justify-between">
                맞춤 루틴 <span className="text-[#6b9080] transition-transform group-hover:translate-x-1">→</span>
              </h3>
              <p className="text-sm leading-relaxed text-[#5a6c57]">
                보유 제품으로 최적의 루틴을 자동 생성합니다
              </p>
            </div>

            {/* Card 3 */}
            <div className="group absolute bottom-[50px] left-[60px] w-[260px] bg-white/70 backdrop-blur-[20px] border border-[#84a98c]/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(107,144,128,0.15)] hover:shadow-[0_20px_60px_rgba(107,144,128,0.25)] hover:-translate-y-2.5 transition-all duration-300 animate-float3">
              <div className="w-full h-[100px] bg-gradient-to-br from-[#b8d5bf]/50 via-[#84a98c]/40 to-[#6b9080]/50 rounded-2xl flex items-center justify-center text-5xl mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent animate-shimmer" />
                <span className="emoji">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 flex items-center justify-between">
                안전한 조합 <span className="text-[#6b9080] transition-transform group-hover:translate-x-1">→</span>
              </h3>
              <p className="text-sm leading-relaxed text-[#5a6c57]">
                위험한 성분 조합을 실시간으로 경고합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
