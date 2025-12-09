'use client'

export default function Footer() {
  return (
    <footer id="about" className="bg-[#1a1a1a] text-white py-20 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 text-[#84a98c]">SkinCoach</h3>
            <p className="text-[#b0c4b1] leading-[1.8] text-[15px]">
              내 피부의 AI 코치<br />
              과학 기반의 스마트 스킨케어
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base mb-5 text-[#84a98c] font-bold">서비스</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  피부 프로파일
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  제품 분석
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  루틴 생성
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  제품 추천
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-base mb-5 text-[#84a98c] font-bold">회사</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  팀
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  채용
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-base mb-5 text-[#84a98c] font-bold">도움말</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-10 border-t border-[#b0c4b1]/15">
          <p className="text-[#7a8a7f] text-sm">
            © 2024 SkinCoach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
