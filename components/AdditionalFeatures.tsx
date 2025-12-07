'use client'

// vidplus style two-column layout section
export default function AdditionalFeatures() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="group">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                  과학 기반 성분 분석
                </h3>
                <svg className="w-5 h-5 text-sage-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600 leading-relaxed">
                개인화된 워크시트를 만들어 중요하다고 생각하는 것에 우선순위를 두고 원하는 대로 작업하세요.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                  스킨케어가 다시 승리합니다
                </h3>
                <svg className="w-5 h-5 text-sage-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600 leading-relaxed">
                작업을 관리하고 프로젝트 관리의 즐거운 여정을 즐기세요. 간단하고 부드럽습니다.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Abstract graphic - vidplus style */}
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200/30 via-teal-200/20 to-mint-200/20 rounded-2xl blur-2xl" />
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-sage-300/40 to-teal-300/40 rounded-full blur-3xl" />
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                  아이디어가 있는 소프트웨어
                </h3>
                <svg className="w-5 h-5 text-sage-600 opacity-0 group-hover:opacity-100 transition-opacity rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600 leading-relaxed">
                인보이스를 생성하고 전송하여 클라이언트와 빠르게 거래하고 생산성을 높이세요.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                  스킨케어는 운전할 수 없으니까요
                </h3>
                <svg className="w-5 h-5 text-sage-600 opacity-0 group-hover:opacity-100 transition-opacity rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600 leading-relaxed">
                중요한 것을 항상 함께 가지고 다니세요. 미리 계획하고 앞서 나가세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

