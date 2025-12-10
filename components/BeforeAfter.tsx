'use client'

export default function BeforeAfter() {
  return (
    <section className="py-32 px-6 md:px-16 bg-gradient-to-b from-[#A8E3D1]/10 to-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-16 tracking-[-1px]">
          내 제품만으로도 이렇게 달라집니다
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Before */}
          <div className="bg-white rounded-3xl p-10 border-2 border-red-200/50 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4 emoji">❌</div>
              <h3 className="text-3xl font-bold text-[#2F2F2F] mb-2">Before</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">제품 6개 뒤죽박죽</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">조합 unknown</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">자극 가능성↑</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">효과불명</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-[#A8E3D1]/20 to-white rounded-3xl p-10 border-2 border-[#A8E3D1] shadow-lg">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4 emoji">✅</div>
              <h3 className="text-3xl font-bold text-[#2F2F2F] mb-2">After (AI 루틴)</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#84a98c] text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">제품 4개만으로 깔끔한 AM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#84a98c] text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">PM 루틴엔 딱 1개의 활성성분</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#84a98c] text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">상황별 루틴 자동 배치</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#84a98c] text-xl">•</span>
                <span className="text-lg text-[#5a6c57]">과소비 Zero / 효율 Up</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 실제 루틴 예시 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-[#A8E3D1]/20">
            <h4 className="text-xl font-bold text-[#2F2F2F] mb-4"><span className="emoji">🌅</span> AM 루틴 예시</h4>
            <ol className="space-y-2 text-[#5a6c57]">
              <li>1. 클렌징 워터</li>
              <li>2. 하이알루론산 토너</li>
              <li>3. 비타민C 세럼</li>
              <li>4. 수분 크림</li>
              <li>5. 선크림</li>
            </ol>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#A8E3D1]/20">
            <h4 className="text-xl font-bold text-[#2F2F2F] mb-4"><span className="emoji">🌙</span> PM 루틴 예시</h4>
            <ol className="space-y-2 text-[#5a6c57]">
              <li>1. 오일 클렌징</li>
              <li>2. 저자극 토너</li>
              <li>3. 레티놀 세럼 (주 2-3회)</li>
              <li>4. 수분 크림</li>
              <li>5. 수면팩 (선택)</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
