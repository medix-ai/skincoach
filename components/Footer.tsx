'use client'

export default function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white py-20 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 text-[#A8E3D1] font-bold">SkinCoach</h3>
            <p className="text-[#b0c4b1] leading-[1.8] text-[15px] mb-6">
              내가 가진 제품으로 완성하는<br />
              가장 똑똑한 스킨케어 루틴
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/skincoach_official" target="_blank" rel="noopener noreferrer" className="text-[#A8E3D1] hover:text-white transition-colors">
                Instagram @skincoach_official
              </a>
            </div>
            <div className="mt-4">
              <a href="mailto:medix.ai.team@gmail.com" className="text-[#A8E3D1] hover:text-white transition-colors">
                medix.ai.team@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base mb-5 text-[#A8E3D1] font-bold">법적 고지</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  개인정보 처리방침
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b0c4b1] text-sm hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-10 border-t border-[#b0c4b1]/15">
          <p className="text-[#7a8a7f] text-sm">
            © 2026 SkinCoach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
