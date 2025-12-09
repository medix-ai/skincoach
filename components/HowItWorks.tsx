'use client'

const steps = [
  {
    number: '01',
    title: '피부 프로파일 생성',
    description: '피부 타입(건성, 지성, 복합성, 민감성)과 고민(여드름, 모공, 잡티, 주름 등)을 선택합니다.',
    details: [
      '피부 타입별 적합/주의 성분 필터 자동 적용',
      '고민별 성분 추천 가중치 부여',
      '맞춤형 프로파일 생성',
    ],
  },
  {
    number: '02',
    title: '제품 등록 및 분석',
    description: '보유한 스킨케어 제품을 등록하면 AI가 성분을 자동 분석합니다.',
    details: [
      '제품 검색 또는 직접 등록',
      '성분 카테고리 자동 분류 (AHA/BHA, 레티놀, 비타민C 등)',
      '피부타입 적합성 자동 측정',
    ],
  },
  {
    number: '03',
    title: 'AI 루틴 자동 생성',
    description: 'AM/PM 루틴을 자동으로 생성하고, 성분 충돌을 체크해 안전한 조합만 추천합니다.',
    details: [
      '성분 충돌 자동 제거 (레티놀 × AHA/BHA 등)',
      '상황별 루틴 생성 (민감한 날, 트러블 관리 등)',
      '중복 기능 통합 및 최적화',
    ],
  },
  {
    number: '04',
    title: '예산 기반 추천',
    description: '예산과 선호 브랜드를 고려해 최적의 대체 제품을 추천합니다.',
    details: [
      '성분 구조 유사한 대체품 추천',
      '효능 기준 상위 옵션 제안',
      '루틴의 빈칸을 채우는 제품 추천',
    ],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            작동 방식
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            간단한 4단계로 시작하는 나만의 스킨케어 루틴
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-8 p-8 bg-white rounded-2xl border border-gray-100 hover:border-sage-200 hover:shadow-xl transition-all"
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sage-500 to-teal-500 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-xl tracking-tight">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 mb-5 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-2.5">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-600 text-[15px]">
                      <span className="text-sage-500 mr-2.5 mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

