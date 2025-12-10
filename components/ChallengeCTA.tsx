'use client'

export default function ChallengeCTA() {
  return (
    <section id="challenge" className="py-32 px-6 md:px-16 bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F]">
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="text-6xl mb-6 emoji">📸</div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-[-1px]">
          #스킨코치루틴 챌린지
        </h2>
        
        <div className="bg-white/90 rounded-3xl p-10 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">참여 방법</h3>
          <div className="space-y-4 text-left max-w-[600px] mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#A8E3D1] flex items-center justify-center font-bold text-[#2F2F2F] flex-shrink-0">
                1
              </div>
              <p className="text-lg leading-relaxed">
                AI 루틴 리포트 이미지를 저장하세요
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#A8E3D1] flex items-center justify-center font-bold text-[#2F2F2F] flex-shrink-0">
                2
              </div>
              <p className="text-lg leading-relaxed">
                인스타 스토리에 업로드하세요
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#A8E3D1] flex items-center justify-center font-bold text-[#2F2F2F] flex-shrink-0">
                3
              </div>
              <p className="text-lg leading-relaxed">
                <span className="font-semibold">@skincoach_official</span> 태그 + 해시태그{' '}
                <span className="font-semibold">#스킨코치루틴</span> 추가
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#A8E3D1] flex items-center justify-center font-bold text-[#2F2F2F] flex-shrink-0">
                4
              </div>
              <p className="text-lg leading-relaxed">
                계정 팔로우하기
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/90 rounded-3xl p-10 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <span className="emoji">🎁</span> 보상
          </h3>
          <p className="text-3xl font-bold text-[#2F2F2F] mb-2">
            주 1회 1명 선정
          </p>
          <p className="text-2xl font-semibold text-[#84a98c]">
            올리브영 기프티콘 10,000원 증정
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#routine-form"
            className="bg-white text-[#2F2F2F] px-10 py-4 rounded-[30px] text-lg font-bold shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all"
          >
            무료 루틴 리포트 받기
          </a>
          <a
            href="https://instagram.com/skincoach_official"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2F2F2F] text-white px-10 py-4 rounded-[30px] text-lg font-bold hover:bg-[#1a1a1a] transition-all"
          >
            인스타그램 바로가기
          </a>
        </div>
      </div>
    </section>
  )
}
