'use client'

export default function AppPreview() {
  return (
    <section className="py-32 px-6 md:px-16 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-extrabold text-[#1a1a1a] mb-5 leading-[1.2] tracking-[-1px] whitespace-pre-line">
            언제 어디서나<br />내 손안의<br />스킨케어 코치
          </h2>
          <p className="text-lg leading-[1.8] text-[#5a6c57] mb-6">
            피부 분석부터 제품 등록, 루틴 생성, 위험 성분 경고까지. 모든 기능을 모바일 앱으로 간편하게 이용하세요.
          </p>
          <a href="#" className="text-[#6b9080] font-semibold flex items-center gap-2 text-base hover:gap-3 transition-all">
            앱 다운로드 <span>→</span>
          </a>
        </div>

        {/* Right - Phone Mockups */}
        <div className="relative h-[400px] md:h-[600px]">
          {/* Phone 1 - Profile */}
          <div className="group absolute top-[50px] left-0 md:left-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-[280px] h-[570px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] hover:-translate-y-2.5 hover:scale-[1.02] transition-all duration-300 z-30 animate-floatPhone1">
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-[#1a1a1a] rounded-b-[20px] z-10" />
              
              {/* Screen Content */}
              <div className="pt-10 px-5 pb-5 h-full overflow-hidden bg-gradient-to-b from-[#e8f3ed] to-white">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#84a98c] to-[#6b9080] rounded-full mx-auto mb-3 flex items-center justify-center text-4xl emoji">
                    👤
                  </div>
                  <div className="text-lg font-bold text-[#1a1a1a] mb-1">내 피부 프로필</div>
                  <div className="text-[13px] text-[#6b9080] font-semibold">복합성 · 민감성</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="bg-white rounded-2xl p-4 border border-[#84a98c]/20">
                    <div className="text-[11px] text-[#7a8a7f] mb-1">등록된 제품</div>
                    <div className="text-base font-bold text-[#6b9080]">12개</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-[#84a98c]/20">
                    <div className="text-[11px] text-[#7a8a7f] mb-1">루틴 일수</div>
                    <div className="text-base font-bold text-[#6b9080]">24일</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-[#84a98c]/20">
                    <div className="text-[11px] text-[#7a8a7f] mb-1">피부 고민</div>
                    <div className="text-base font-bold text-[#6b9080]">트러블</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-[#84a98c]/20">
                    <div className="text-[11px] text-[#7a8a7f] mb-1">성분 체크</div>
                    <div className="text-base font-bold text-[#6b9080]">안전</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Routine */}
          <div className="hidden md:block group absolute top-[100px] left-[150px] w-[280px] h-[570px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] hover:-translate-y-2.5 hover:scale-[1.02] transition-all duration-300 z-20 animate-floatPhone2">
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-[#1a1a1a] rounded-b-[20px] z-10" />
              
              {/* Screen Content */}
              <div className="pt-10 px-5 pb-5 h-full overflow-hidden bg-white">
                <div className="flex justify-between items-center mb-5">
                  <div className="text-xl font-bold text-[#1a1a1a]">오늘의 루틴</div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-br from-[#84a98c] to-[#6b9080] text-white">AM</div>
                    <div className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-[#84a98c]/30 text-[#5a6c57] bg-white">PM</div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  {[
                    { num: 1, title: '클렌징', desc: '순한 클렌징 폼' },
                    { num: 2, title: '토너', desc: '수분 진정 토너' },
                    { num: 3, title: '세럼', desc: '비타민C 세럼 5%' },
                    { num: 4, title: '크림', desc: '보습 크림' },
                    { num: 5, title: '선크림', desc: 'SPF 50+ PA++++' },
                  ].map((step) => (
                    <div key={step.num} className="flex items-center gap-3 p-3 bg-[#f8faf9] rounded-xl">
                      <div className="w-7 h-7 bg-gradient-to-br from-[#84a98c] to-[#6b9080] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-semibold text-[#1a1a1a] mb-0.5">{step.title}</h4>
                        <p className="text-[11px] text-[#7a8a7f]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 - Analysis */}
          <div className="hidden md:block group absolute top-[150px] left-[300px] w-[280px] h-[570px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] hover:-translate-y-2.5 hover:scale-[1.02] transition-all duration-300 z-10 opacity-70 animate-floatPhone3">
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-[#1a1a1a] rounded-b-[20px] z-10" />
              
              {/* Screen Content */}
              <div className="pt-10 px-5 pb-5 h-full overflow-hidden bg-white">
                <div className="text-center mb-5">
                  <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#b8d5bf]/30 to-[#84a98c]/30 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl emoji">
                    ⚠️
                  </div>
                  <div className="text-base font-bold text-[#1a1a1a]">성분 분석 결과</div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-[rgba(255,193,7,0.1)] border border-[rgba(255,193,7,0.3)] rounded-2xl p-4">
                    <h5 className="text-[13px] font-bold text-[#1a1a1a] mb-1.5">⚠️ 주의 필요</h5>
                    <p className="text-[11px] text-[#5a6c57] leading-[1.5]">
                      레티놀과 AHA가 함께 포함되어 있습니다. 번갈아 사용을 권장합니다.
                    </p>
                  </div>
                  
                  <div className="bg-[rgba(132,169,140,0.1)] border border-[rgba(132,169,140,0.3)] rounded-2xl p-4">
                    <h5 className="text-[13px] font-bold text-[#1a1a1a] mb-1.5">✅ 안전한 조합</h5>
                    <p className="text-[11px] text-[#5a6c57] leading-[1.5]">
                      나이아신아마이드와 히알루론산 조합은 안전합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

