'use client'

export default function BetaCTA() {
  return (
    <section className="py-32 px-6 md:px-16 bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F]">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-[-1px]">
          스킨코치 베타테스터 1기 모집
        </h2>
        <p className="text-lg md:text-xl leading-[1.8] mb-4 opacity-95">
          AI 루틴 코치의 모든 기능을<br />
          가장 먼저 사용해보고 피드백을 남겨주세요.
        </p>
        <p className="text-base mb-10 opacity-90">
          참여자 전원에게 개인 맞춤 성분 리포트 무료 제공.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#2F2F2F] px-10 py-4 rounded-[30px] text-base font-bold shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all">
            베타 신청하기
          </button>
          <button className="bg-[#2F2F2F] text-white px-10 py-4 rounded-[30px] text-base font-bold hover:bg-[#1a1a1a] transition-all">
            내 제품으로 루틴 점검하기
          </button>
        </div>
      </div>
    </section>
  )
}
