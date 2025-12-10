'use client'

const features = [
  {
    icon: '👤',
    title: '내 피부 프로파일 생성',
    description: '당신의 피부타입과 고민을 기반으로 필요한 성분, 피해야 할 성분을 정확히 파악합니다.',
    details: [
      '피부 타입: 건성/지성/복합성/민감성',
      '피부 고민: 여드름, 홍조, 잡티, 모공, 주름 등',
      '(확장 예정) 얼굴 사진 기반 AI 분석'
    ]
  },
  {
    icon: '📦',
    title: '내가 가진 제품 등록',
    description: '더 사지 말고, 지금 가진 제품부터 활용하세요.',
    details: [
      '제품 검색으로 빠르게 추가',
      '(추후) 사진 촬영 → 성분 OCR 인식',
      '(추후) 바코드 스캔 → 자동 정보 매칭',
      '주요 성분 카테고리 자동 분류'
    ]
  },
  {
    icon: '🤖',
    title: 'AI 루틴 자동 생성',
    description: '보유 제품만으로 AM/PM 루틴을 자동으로 추천합니다.',
    details: [
      '클렌징 → 토너 → 에센스 → 크림 → 선크림',
      '활성성분(레티놀·AHA/BHA·비타민C 등) 최적 배치',
      '상황별 루틴: 민감한 날, 폭풍 트러블, 각질관리, 피부 안정화'
    ]
  },
  {
    icon: '💰',
    title: '예산 기반 제품 추천',
    description: '루틴에 필요한 제품이 있다면 예산에 맞춰 가성비 대체 추천도 해드립니다.',
    details: [
      '2만/5만/10만 원대 예산 옵션',
      '로드샵 ↔ 더마/백화점 비교',
      '성분 구조 기반 대체 제품 추천'
    ]
  },
  {
    icon: '🛡️',
    title: '위험 조합 자동 경고',
    description: '가장 강력한 기능. 레티놀 × AHA/BHA, 비타민C × 산성 토너 등 위험한 조합을 실시간으로 점검합니다.',
    details: [
      '레티놀 × AHA/BHA → 자극 위험',
      '비타민C × 산성 토너 → 민감성 증가',
      '활성 성분 중복 → 과자극 방지'
    ]
  }
]

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-16 tracking-[-1px]">
          주요 기능 소개
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-[#A8E3D1]/20 hover:shadow-[0_16px_48px_rgba(168,227,209,0.12)] hover:-translate-y-2 transition-all"
            >
              <div className="w-full h-32 bg-gradient-to-br from-[#A8E3D1]/50 to-[#84a98c]/40 rounded-2xl flex items-center justify-center text-5xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent animate-shimmer" />
                <span className="emoji">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2F2F2F] mb-3 flex items-center justify-between">
                {feature.title} <span className="text-[#84a98c] transition-transform group-hover:translate-x-1">→</span>
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#5a6c57] mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-[#5a6c57] flex items-start gap-2">
                    <span className="text-[#A8E3D1] mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
