'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content + Small Images */}
          <div className="space-y-10">
            {/* Brand Name */}
            <div>
              <h1 className="text-6xl md:text-[90px] font-extrabold text-[#2F2F2F] tracking-[-4px] leading-none mb-6">
                SkinCoach
              </h1>
              <p className="text-2xl md:text-3xl text-[#5a6c57] font-light leading-relaxed">
                내가 가진 제품으로 완성하는<br />
                가장 똑똑한 스킨케어 루틴
              </p>
            </div>

            {/* Philosophy */}
            <div className="space-y-5">
              <p className="text-3xl md:text-4xl font-bold text-[#84a98c] leading-tight">
                "있는 것부터 제대로."
              </p>
              <p className="text-lg md:text-xl text-[#5a6c57] font-light leading-relaxed max-w-[500px]">
                스킨케어는 더 사는 게 아니라, 더 잘 쓰는 것.<br />
                스킨코치는 과소비를 줄이고 효율적인 루틴을 만드는 AI 기반 솔루션입니다.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#service" 
                className="inline-flex items-center justify-center bg-white border-2 border-[#A8E3D1] text-[#2F2F2F] px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#A8E3D1]/10 transition-all duration-200"
              >
                서비스 알아보기
              </a>
              <a 
                href="#routine-form" 
                className="inline-flex items-center justify-center bg-[#2F2F2F] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#1a1a1a] transition-all duration-200"
              >
                무료 리포트 받기
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Small Image Fragments - Below Text */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {/* Fragment 1 */}
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#A8E3D1]/20 min-h-[200px]">
                <Image
                  src="/image/main1.jpg"
                  alt="Molecular structure"
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  style={{ objectPosition: '20% 30%' }}
                />
              </div>
              {/* Fragment 2 */}
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#A8E3D1]/20 min-h-[200px]">
                <Image
                  src="/image/main3.jpg"
                  alt="Skincare application"
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              {/* Fragment 3 */}
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#A8E3D1]/20 min-h-[200px]">
                <Image
                  src="/image/main4.jpg"
                  alt="Skincare products"
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  style={{ objectPosition: '70% 50%' }}
                />
              </div>
            </div>
          </div>

          {/* Right: Large Image Card + Small Info Cards */}
          <div className="relative space-y-6 hidden lg:block">
            {/* Large Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#A8E3D1]/20">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/image/main2.jpg"
                  alt="SkinCoach skincare routine"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#2F2F2F] border border-[#A8E3D1]/30 flex items-center gap-2">
                    <span className="text-xs">+</span>
                    <span>AI 분석</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#2F2F2F] border border-[#A8E3D1]/30 flex items-center gap-2">
                    <span className="text-xs">+</span>
                    <span>맞춤 루틴</span>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 flex flex-wrap gap-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#2F2F2F] border border-[#A8E3D1]/30 flex items-center gap-2">
                    <span className="text-xs">+</span>
                    <span>안전 조합</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#2F2F2F] border border-[#A8E3D1]/30 flex items-center gap-2">
                    <span className="text-xs">+</span>
                    <span>위험 경고</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Cards Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Card - Testimonials/Social Proof */}
              <div className="bg-gradient-to-br from-[#2F2F2F] to-[#1a1a1a] rounded-2xl p-5 shadow-xl min-h-[200px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-[#A8E3D1]/20 border-2 border-[#2F2F2F] flex items-center justify-center text-xs font-semibold text-[#A8E3D1]"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    "내가 가진 제품만으로도<br />
                    완벽한 루틴이 만들어졌어요!"
                  </p>
                </div>
                <p className="text-[#A8E3D1] text-xs font-medium">
                  베타테스터 1,000+명
                </p>
              </div>

              {/* Right Card - Feature Highlight */}
              <div className="bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] rounded-2xl p-5 shadow-xl relative overflow-hidden min-h-[200px] flex flex-col justify-between">
                {/* Abstract background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-white/80 text-xs font-medium mb-2">What is</p>
                    <h3 className="text-xl font-bold text-white mb-2">AI 루틴 리포트</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-3">
                      보유 제품만으로<br />
                      최적의 AM/PM 루틴을<br />
                      자동 생성합니다
                    </p>
                  </div>
                  <a
                    href="#routine-form"
                    className="inline-flex items-center gap-2 bg-white text-[#2F2F2F] px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all w-fit mt-auto"
                  >
                    자세히 보기
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Values - Card Grid Style */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-[#A8E3D1]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4 emoji">🤝</div>
            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">친절한 코치</h3>
            <p className="text-[#5a6c57] leading-relaxed">
              복잡한 성분을 쉽게 설명해드립니다
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#A8E3D1]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4 emoji">🔬</div>
            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">과학 기반</h3>
            <p className="text-[#5a6c57] leading-relaxed">
              INCI 기반 정확한 성분 분석
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#A8E3D1]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4 emoji">✨</div>
            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">미니멀 & 클린뷰티</h3>
            <p className="text-[#5a6c57] leading-relaxed">
              불필요한 소비 없는 깔끔한 루틴
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
