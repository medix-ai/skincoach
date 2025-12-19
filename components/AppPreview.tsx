'use client'

import Image from 'next/image'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const appScreens = [
  {
    name: '메인 화면',
    image: 'main화면.png',
    description: '맞춤 루틴 생성 및 빠른 액세스'
  },
  {
    name: '처음 랜딩',
    image: '처음랜딩.png',
    description: '프로파일 설정으로 시작하기'
  },
  {
    name: '추천 루틴',
    image: '추천루틴.png',
    description: 'AI 기반 맞춤 루틴 추천'
  },
  {
    name: '내 루틴',
    image: '내루틴.png',
    description: '저장된 루틴 관리'
  },
  {
    name: '제품 비교',
    image: '제품비교.png',
    description: '제품 상세 비교 분석'
  },
  {
    name: '마이페이지',
    image: '마이페이지.png',
    description: '통계 및 설정 관리'
  },
  {
    name: '알림 설정',
    image: '알림설정.png',
    description: '루틴 알림 커스터마이징'
  },
  {
    name: '메인 화면 스크롤',
    image: '메인화면스크롤.png',
    description: '추천 제품 및 루틴 알림'
  }
]

export default function AppPreview() {
  return (
    <section id="app-preview" className="py-32 px-6 md:px-16 bg-gradient-to-b from-white to-[#A8E3D1]/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F2F2F] mb-6 tracking-[-1px]">
            스킨코치 앱 미리보기
          </h2>
          <p className="text-xl text-[#5a6c57] max-w-[800px] mx-auto leading-relaxed">
            직관적이고 깔끔한 인터페이스로<br />
            나만의 스킨케어 루틴을 쉽게 관리하세요
          </p>
        </div>

        {/* App Screens Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {appScreens.map((screen, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#A8E3D1]/20 hover:-translate-y-2"
            >
              {/* Mobile Frame */}
              <div className="relative aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-[#1a1a1a] shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
                
                {/* Screen Content */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={`${prefix ? prefix : ''}/image/${screen.image}`}
                    alt={screen.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
              </div>

              {/* Screen Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-[#2F2F2F] mb-2">
                  {screen.name}
                </h3>
                <p className="text-sm text-[#5a6c57] leading-relaxed">
                  {screen.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#A8E3D1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-xl text-[#5a6c57] mb-6">
            앱 출시 시 가장 먼저 알림을 받아보세요
          </p>
          <a
            href="#routine-form"
            className="inline-flex items-center justify-center bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F] px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            무료 리포트 받기
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
