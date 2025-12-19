'use client'

import Logo from './Logo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-[20px] border-b border-[#A8E3D1]/10">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-[#84a98c] tracking-[-0.5px] hover:text-[#6b9080] transition-colors">
          SkinCoach
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#service" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#84a98c] transition-colors">
            서비스 소개
          </a>
          <a href="#app-preview" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#84a98c] transition-colors">
            앱 미리보기
          </a>
          <a href="#routine-form" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#84a98c] transition-colors">
            무료 리포트
          </a>
          <a href="#challenge" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#84a98c] transition-colors">
            챌린지
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#routine-form" className="bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F] px-6 py-2.5 rounded-[20px] text-sm font-semibold hover:shadow-lg transition-all">
            무료 리포트 받기
          </a>
        </div>
      </nav>
    </header>
  )
}
