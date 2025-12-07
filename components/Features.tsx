'use client'

const topFeatures = [
  {
    icon: '🔬',
    title: 'AI 성분 분석',
    description: '레티놀, 비타민C, AHA/BHA 등 모든 성분을 자동으로 분석하고 적합성을 판단합니다',
  },
  {
    icon: '⚠️',
    title: '위험 조합 경고',
    description: '레티놀+AHA/BHA 등 위험한 성분 조합을 실시간으로 감지합니다',
  },
  {
    icon: '📊',
    title: '루틴 리포트',
    description: '매일의 스킨케어 루틴 효과를 분석하고 리포트를 생성합니다',
  },
]

const largeFeatures = [
  {
    title: '제품은 많은데\n어떻게 써야 할지\n모르겠다면',
    description: '이미 가지고 있는 제품들을 등록하면, AI가 최적의 조합을 찾아 AM/PM 루틴을 자동으로 생성해드립니다. 성분 충돌 걱정 없이 안전하게 사용하세요.',
    icon: '🌙',
    reverse: false,
  },
  {
    title: '예산에 맞춰\n더 나은 선택을',
    description: '동일한 성분과 효능의 대체 제품을 추천받거나, 예산 내에서 더 효과적인 제품을 찾아보세요. 비싼 제품이 항상 좋은 것은 아닙니다.',
    icon: '💰',
    reverse: true,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-16 max-w-[1400px] mx-auto">
      {/* Top Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {topFeatures.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-10 border border-[#84a98c]/10 hover:shadow-[0_16px_48px_rgba(107,144,128,0.12)] hover:-translate-y-2 transition-all"
          >
            <div className="w-full h-40 bg-gradient-to-br from-[#b8d5bf]/60 via-[#84a98c]/40 to-[#6b9080]/50 rounded-2xl flex items-center justify-center text-6xl mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent animate-shimmer" />
              <span className="emoji">{feature.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 flex items-center justify-between">
              {feature.title} <span className="text-[#6b9080] transition-transform group-hover:translate-x-1">→</span>
            </h3>
            <p className="text-[15px] leading-[1.7] text-[#5a6c57]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Large Features */}
      <div className="space-y-20">
        {largeFeatures.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
              feature.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={feature.reverse ? 'lg:order-2' : ''}>
              <h2 className="text-5xl font-extrabold text-[#1a1a1a] mb-5 leading-[1.2] tracking-[-1px] whitespace-pre-line">
                {feature.title}
              </h2>
              <p className="text-lg leading-[1.8] text-[#5a6c57] mb-6">
                {feature.description}
              </p>
              <a href="#" className="text-[#6b9080] font-semibold flex items-center gap-2 text-base hover:gap-3 transition-all">
                자세히 보기 <span>→</span>
              </a>
            </div>
            <div className={`relative h-96 bg-gradient-to-br from-[#e8f3ed]/50 to-[#b8d5bf]/30 rounded-[32px] flex items-center justify-center overflow-hidden ${feature.reverse ? 'lg:order-1' : ''}`}>
              <div className="absolute w-[300px] h-[300px] bg-gradient-radial from-[#6b9080]/30 to-transparent rounded-full blur-[60px] animate-pulse-custom" />
              <span className="text-[120px] z-10 drop-shadow-[0_10px_30px_rgba(107,144,128,0.3)] emoji">
                {feature.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
