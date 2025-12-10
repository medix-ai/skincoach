'use client'

export default function ReportPreview() {
  return (
    <section className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-6 tracking-[-1px]">
          리포트 미리보기
        </h2>
        <p className="text-center text-lg text-[#5a6c57] mb-16">
          실제 생성되는 리포트의 예시입니다
        </p>

        {/* 리포트 샘플 */}
        <div className="bg-gradient-to-br from-[#A8E3D1]/10 to-white rounded-3xl p-10 border-2 border-[#A8E3D1] shadow-xl max-w-[800px] mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-8 pb-6 border-b-2 border-[#A8E3D1]/30">
            <h3 className="text-2xl font-bold text-[#2F2F2F] mb-2">SkinCoach AI Routine Report</h3>
            <p className="text-sm text-[#5a6c57]">2026.01.15 발급</p>
          </div>

          {/* 사용자 프로필 */}
          <div className="bg-white rounded-2xl p-6 mb-6 border border-[#A8E3D1]/20">
            <h4 className="font-bold text-[#2F2F2F] mb-3">사용자 프로필</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-[#5a6c57]">피부 타입</span>
                <p className="font-semibold text-[#2F2F2F]">지성</p>
              </div>
              <div>
                <span className="text-[#5a6c57]">피부 고민</span>
                <p className="font-semibold text-[#2F2F2F]">여드름, 모공</p>
              </div>
              <div>
                <span className="text-[#5a6c57]">제품 개수</span>
                <p className="font-semibold text-[#2F2F2F]">5개</p>
              </div>
            </div>
          </div>

          {/* 제품 리스트 */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">🧴</span> 내가 가진 제품
            </h4>
            <ul className="space-y-2 text-sm text-[#5a6c57] bg-white rounded-xl p-4 border border-[#A8E3D1]/20">
              <li>• 라운드랩 1025 독도 토너 (보습/약산성)</li>
              <li>• 토리든 다이브인 세럼 (수분/히알루론산)</li>
              <li>• 구달 청귤 비타C 세럼 (비타민C/산성)</li>
              <li>• 라로슈포제 시카플라스트 B5 (진정/장벽 강화)</li>
              <li>• 코스알엑스 AHA/BHA 클리어링 토너 (각질)</li>
            </ul>
          </div>

          {/* AM Routine */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">🌅</span> AM Routine
            </h4>
            <div className="bg-white rounded-xl p-4 border border-[#A8E3D1]/20">
              <ol className="space-y-2 text-sm text-[#5a6c57]">
                <li>1️⃣ 독도 토너 (보습 & 진정)</li>
                <li>2️⃣ 다이브인 세럼 (수분 공급)</li>
                <li>3️⃣ 시카플라스트 크림 (장벽 강화)</li>
                <li>4️⃣ 선크림 필수</li>
              </ol>
              <p className="mt-3 text-xs text-[#5a6c57] italic">
                아침에는 비타민C 대신 수분 + 장벽 강화를 중심으로 구성했습니다.
              </p>
            </div>
          </div>

          {/* PM Routine */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">🌙</span> PM Routine
            </h4>
            <div className="bg-white rounded-xl p-4 border border-[#A8E3D1]/20">
              <ol className="space-y-2 text-sm text-[#5a6c57]">
                <li>1️⃣ 클렌징</li>
                <li>2️⃣ 청귤 비타C 세럼 (잡티 케어)</li>
                <li>3️⃣ 다이브인 세럼 (수분 보완)</li>
                <li>4️⃣ 시카플라스트 크림</li>
              </ol>
              <p className="mt-3 text-xs text-[#5a6c57] italic">
                비타민C는 저녁 단독 사용을 권장합니다.
              </p>
            </div>
          </div>

          {/* 위험 조합 */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">⚠️</span> 금지/주의 조합
            </h4>
            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <ul className="space-y-2 text-sm text-[#5a6c57]">
                <li>• 청귤 비타C + AHA/BHA 토너를 함께 사용하면 자극 가능성 ↑</li>
                <li>• 각질제거 제품이 2개 이상 → 주 1~2회로 제한 권장</li>
              </ul>
            </div>
          </div>

          {/* 부족한 요소 */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">✨</span> 루틴 완성도를 높이려면
            </h4>
            <div className="bg-[#A8E3D1]/10 rounded-xl p-4 border border-[#A8E3D1]/30">
              <ul className="space-y-2 text-sm text-[#5a6c57]">
                <li>• 선크림이 없음 → AM 루틴 필수 단계</li>
                <li>• 보습이 약함 → 세라마이드 크림 추가 시 안정화 효과 ↑</li>
              </ul>
            </div>
          </div>

          {/* 하단 CTA */}
          <div className="text-center pt-6 border-t-2 border-[#A8E3D1]/30">
            <p className="text-sm text-[#5a6c57] mb-3">이 루틴이 마음에 드셨나요?</p>
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#84a98c]">
              <span className="emoji">📸</span>
              <span>#스킨코치루틴 챌린지 참여하기</span>
            </div>
            <p className="text-xs text-[#5a6c57] mt-2">@skincoach_official 태그</p>
          </div>
        </div>

        {/* 다운로드 버튼 안내 */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#5a6c57] mb-4">
            리포트 생성 후 PDF 다운로드 및 인스타 스토리용 이미지 제공
          </p>
        </div>
      </div>
    </section>
  )
}
