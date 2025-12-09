'use client'

import Logo from './Logo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-[20px] border-b border-[#84a98c]/10">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#6b9080] tracking-[-0.5px]">
          SkinCoach
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#6b9080] transition-colors">
            기능
          </a>
          <a href="#how" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#6b9080] transition-colors">
            사용방법
          </a>
          <a href="#pricing" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#6b9080] transition-colors">
            가격
          </a>
          <a href="#about" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#6b9080] transition-colors">
            소개
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-[15px] font-medium text-[#5a6c57] hover:text-[#6b9080] transition-colors">
            로그인
          </a>
          <a href="#" className="bg-gradient-to-br from-[#84a98c] to-[#6b9080] text-white px-6 py-2.5 rounded-[20px] text-sm font-semibold hover:shadow-lg transition-all">
            무료 체험
          </a>
        </div>
      </nav>
    </header>
  )
}
