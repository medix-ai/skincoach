'use client'

const faqs = [
  {
    question: '루틴 리포트는 어떻게 받나요?',
    answer: '위 입력 폼에서 피부 정보와 보유 제품을 입력하시면 AI가 자동으로 루틴 리포트를 생성해드립니다. PDF 다운로드 및 인스타 스토리용 이미지로 제공됩니다.'
  },
  {
    question: '정말 내가 가진 제품만으로 루틴이 가능한가요?',
    answer: '네, 대부분의 스킨케어는 조합만 잘 짜도 충분한 루틴이 됩니다. 스킨코치는 보유 제품만으로 최적의 AM/PM 루틴을 자동 생성합니다.'
  },
  {
    question: '성분 분석은 얼마나 정확한가요?',
    answer: 'INCI 기반 공식 분류 + AI 추천 + 위험 조합 룰로 판단합니다. 레티놀 × AHA/BHA, 비타민C × 산성 토너 등 위험한 조합을 실시간으로 감지합니다.'
  },
  {
    question: '민감성인데 위험하진 않나요?',
    answer: '오히려 "성분 충돌"을 막아주기 때문에 더 안전한 루틴을 제공합니다. 민감한 날 루틴도 별도로 생성해드립니다.'
  },
  {
    question: '챌린지 참여는 필수인가요?',
    answer: '아니요, 선택사항입니다. 하지만 인스타 스토리에 공유하시면 주 1회 추첨을 통해 스타벅스 기프티콘 또는 올영 쿠폰을 받으실 수 있습니다.'
  }
]

export default function FAQ() {
  return (
    <section className="py-32 px-6 md:px-16 bg-gradient-to-b from-white to-[#A8E3D1]/5">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-16 tracking-[-1px]">
          자주 묻는 질문
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#A8E3D1]/20 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-4">
                Q. {faq.question}
              </h3>
              <p className="text-lg leading-[1.7] text-[#5a6c57]">
                A. {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
