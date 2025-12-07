'use client'

export default function CenterHero() {
  return (
    <section className="relative text-center py-32 px-6 md:px-16 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#b8d5bf]/20 via-[#84a98c]/10 to-transparent blur-[80px]" />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <h2 className="text-5xl md:text-[56px] font-extrabold text-[#1a1a1a] mb-6 leading-[1.15] tracking-[-1.5px]">
          스킨케어를<br />과학적으로
        </h2>
        <p className="text-xl leading-[1.8] text-[#5a6c57] mb-10">
          성분 분석부터 루틴 생성까지, 모든 과정을 데이터와 AI가 도와드립니다. 이제 SNS 광고나 바이럴에 휘둘리지 마세요.
        </p>
      </div>

      {/* Morphing shape */}
      <div className="relative h-[350px] mt-16">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-gradient-to-br from-[#e8f3ed]/60 via-[#b8d5bf]/50 to-[#84a98c]/40 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] blur-[2px] animate-morphing" />
      </div>
    </section>
  )
}

