'use client'

export default function BrandIntro() {
  return (
    <section className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-16 tracking-[-1px]">
          스킨코치의 목표
        </h2>

        <div className="text-center mb-16">
          <p className="text-2xl md:text-3xl leading-[1.6] text-[#5a6c57] mb-8">
            소비를 줄이고, 효과를 높이고,<br />
            스킨케어를 더 똑똑하게 만드는 것.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4 emoji">🤝</div>
            <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">친절한 코치</h3>
            <p className="text-[#5a6c57]">복잡한 성분을 쉽게 설명해드립니다</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 emoji">🔬</div>
            <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">과학 기반</h3>
            <p className="text-[#5a6c57]">INCI 기반 정확한 성분 분석</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 emoji">✨</div>
            <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">미니멀 & 클린뷰티</h3>
            <p className="text-[#5a6c57]">불필요한 소비 없는 깔끔한 루틴</p>
          </div>
        </div>
      </div>
    </section>
  )
}
