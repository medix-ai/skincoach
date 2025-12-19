'use client'

import Image from 'next/image'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const appScreens = [
  { name: '메인 화면', image: 'main화면.png' },
  { name: '처음 랜딩', image: '처음랜딩.png' },
  { name: '추천 루틴', image: '추천루틴.png' },
  { name: '내 루틴', image: '내루틴.png' },
  { name: '제품 비교', image: '제품비교.png' },
  { name: '마이페이지', image: '마이페이지.png' },
  { name: '알림 설정', image: '알림설정.png' },
  { name: '메인 화면 스크롤', image: '메인화면스크롤.png' }
]

export default function AppScreens() {
  return (
    <section id="app-screens" className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F2F2F] mb-4 tracking-[-1px]">
            스킨코치 앱 화면
          </h2>
          <p className="text-xl text-[#5a6c57]">
            직관적이고 깔끔한 인터페이스를 경험해보세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {appScreens.map((screen, index) => (
            <div key={index} className="relative w-full aspect-[9/19.5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={`${prefix}/image/${screen.image}`}
                alt={screen.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
