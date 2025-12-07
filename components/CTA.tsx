'use client'

export default function CTA() {
  return (
    <section className="relative py-24 px-6 md:px-16 text-center bg-gradient-to-br from-[#6b9080] to-[#84a98c] text-white overflow-hidden">
      {/* Rotating background */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-white/10 to-transparent animate-rotate" />

      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold mb-5 tracking-[-1px]">
          지금 바로 시작하세요
        </h2>
        <p className="text-lg mb-9 opacity-95">
          무료로 나만의 AI 스킨케어 코치를 만나보세요
        </p>
        <button className="bg-white text-[#6b9080] px-10 py-4 rounded-[30px] text-base font-bold shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all">
          스킨코치 시작하기 →
        </button>
      </div>
    </section>
  )
}
