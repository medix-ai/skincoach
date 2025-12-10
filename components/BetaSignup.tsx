'use client'

export default function BetaSignup() {
  return (
    <section id="beta" className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F2F2F] mb-6 tracking-[-1px]">
          스킨코치 베타테스터 1기 모집
        </h2>
        <p className="text-lg md:text-xl leading-[1.8] text-[#5a6c57] mb-12">
          앱 출시 전, 모든 기능을 가장 먼저 경험해보세요.<br />
          참여자 전원에게 개인 맞춤 성분 리포트 무료 제공.
        </p>

        <div className="bg-gradient-to-br from-[#A8E3D1]/20 to-white rounded-3xl p-10 border-2 border-[#A8E3D1] mb-8">
          <h3 className="text-2xl font-bold text-[#2F2F2F] mb-6">베타테스터 혜택</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4">
              <span className="text-3xl emoji">🎁</span>
              <div>
                <h4 className="font-semibold text-[#2F2F2F] mb-1">개인 맞춤 리포트</h4>
                <p className="text-sm text-[#5a6c57]">상세한 성분 분석 리포트 무료 제공</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl emoji">🚀</span>
              <div>
                <h4 className="font-semibold text-[#2F2F2F] mb-1">우선 앱 출시 알림</h4>
                <p className="text-sm text-[#5a6c57]">앱 출시 시 가장 먼저 알림드립니다</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl emoji">💬</span>
              <div>
                <h4 className="font-semibold text-[#2F2F2F] mb-1">피드백 반영</h4>
                <p className="text-sm text-[#5a6c57]">의견을 주시면 제품에 직접 반영됩니다</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl emoji">⭐</span>
              <div>
                <h4 className="font-semibold text-[#2F2F2F] mb-1">특별 혜택</h4>
                <p className="text-sm text-[#5a6c57]">앱 출시 후 프리미엄 기능 무료 이용</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:medix.ai.team@gmail.com?subject=베타테스터 신청"
            className="bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F] px-10 py-4 rounded-[30px] text-lg font-bold shadow-[0_4px_20px_rgba(168,227,209,0.25)] hover:shadow-[0_6px_30px_rgba(168,227,209,0.35)] hover:-translate-y-0.5 transition-all"
          >
            베타테스터 신청하기
          </a>
          <a
            href="#routine-form"
            className="bg-white border-2 border-[#A8E3D1] text-[#2F2F2F] px-10 py-4 rounded-[30px] text-lg font-semibold hover:bg-[#A8E3D1]/10 transition-all"
          >
            먼저 루틴 리포트 받기
          </a>
        </div>
      </div>
    </section>
  )
}
