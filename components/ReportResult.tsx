'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface ReportData {
  skinType: string
  concerns: string[]
  products: string[]
  name?: string
}

interface SkinTI {
  type: string
  name: string
  description: string
  emoji: string
}

const skinTITypes: SkinTI[] = [
  {
    type: 'R-EX',
    name: '루틴 챌린저형',
    description: '새로운 제품과 루틴을 시도하는 것을 좋아하는 모험가',
    emoji: '🚀'
  },
  {
    type: 'M-IN',
    name: '미니멀 스킨케어형',
    description: '간단하고 효과적인 최소한의 루틴을 선호',
    emoji: '✨'
  },
  {
    type: 'S-CA',
    name: '민감 안정형',
    description: '피부 안정화를 최우선으로 생각하는 신중한 타입',
    emoji: '🛡️'
  },
  {
    type: 'T-WR',
    name: '트러블 파이터형',
    description: '여드름과 트러블 해결에 집중하는 전투형',
    emoji: '⚔️'
  },
  {
    type: 'H-LO',
    name: '수분 집착형',
    description: '수분 공급에 특별히 신경 쓰는 타입',
    emoji: '💧'
  },
  {
    type: 'F-UL',
    name: '화려한 루틴형',
    description: '다양한 제품과 단계를 즐기는 화려한 루틴 선호',
    emoji: '💎'
  },
  {
    type: 'L-IF',
    name: '방치형',
    description: '간단하게 관리하고 싶은 편안한 타입',
    emoji: '🌿'
  },
  {
    type: 'C-OB',
    name: '성분 집착형',
    description: '성분 분석과 과학적 접근을 중시하는 타입',
    emoji: '🔬'
  },
  {
    type: 'A-GE',
    name: '안티에이징 집중형',
    description: '주름과 탄력 개선에 집중하는 타입',
    emoji: '🌟'
  }
]

// 간단한 루틴 생성 로직 (실제로는 백엔드에서 처리)
const generateRoutine = (skinType: string, concerns: string[], products: string[]) => {
  // 샘플 루틴 생성
  const amRoutine = products.slice(0, 3).map((p, i) => ({
    step: i + 1,
    product: p,
    category: i === 0 ? '토너' : i === 1 ? '세럼' : '크림'
  }))

  const pmRoutine = products.slice(1, 4).map((p, i) => ({
    step: i + 1,
    product: p,
    category: i === 0 ? '클렌징' : i === 1 ? '세럼' : '크림'
  }))

  // 위험 조합 체크
  const risks: string[] = []
  if (products.some(p => p.includes('레티놀')) && products.some(p => p.includes('AHA'))) {
    risks.push('레티놀 × AHA/BHA → 자극 위험, 분리 사용 권장')
  }
  if (products.some(p => p.includes('비타민C')) && products.some(p => p.includes('각질'))) {
    risks.push('비타민C × 강한 각질제거 → 민감성 증가 가능')
  }

  // 부족한 요소
  const missing: string[] = []
  if (!products.some(p => p.includes('선크림'))) {
    missing.push('선크림이 없습니다 → AM 루틴 필수')
  }
  if (products.length < 4) {
    missing.push('보습 단계 보완 → 세라마이드 크림 추가 권장')
  }

  return { amRoutine, pmRoutine, risks, missing }
}

// 스킨-TI 분석
const analyzeSkinTI = (skinType: string, concerns: string[], products: string[]): SkinTI => {
  // 간단한 로직 (실제로는 더 복잡한 분석)
  if (products.length >= 6) return skinTITypes[5] // F-UL
  if (products.length <= 3) return skinTITypes[1] // M-IN
  if (concerns.includes('여드름')) return skinTITypes[3] // T-WR
  if (skinType === '민감성') return skinTITypes[2] // S-CA
  if (concerns.includes('건조')) return skinTITypes[4] // H-LO
  if (concerns.includes('주름') || concerns.includes('탄력')) return skinTITypes[8] // A-GE
  if (products.some(p => p.includes('레티놀') || p.includes('AHA'))) return skinTITypes[7] // C-OB
  return skinTITypes[6] // L-IF
}

export default function ReportResult({ data }: { data: ReportData }) {
  const [skinTI, setSkinTI] = useState<SkinTI | null>(null)
  const [routine, setRoutine] = useState<any>(null)
  const reportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ti = analyzeSkinTI(data.skinType, data.concerns, data.products)
    const routineData = generateRoutine(data.skinType, data.concerns, data.products)
    setSkinTI(ti)
    setRoutine(routineData)
  }, [data])

  const downloadPDF = async () => {
    if (!reportRef.current) return

    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgWidth = 210
      const pageHeight = 297
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(`스킨코치_루틴리포트_${data.name || '나'}.pdf`)
    } catch (error) {
      console.error('PDF 생성 실패:', error)
      alert('PDF 생성 중 오류가 발생했습니다.')
    }
  }

  const downloadImage = async () => {
    if (!reportRef.current) return

    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      })

      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `스킨코치_루틴리포트_${data.name || '나'}.png`
        link.click()
        URL.revokeObjectURL(url)
      })
    } catch (error) {
      console.error('이미지 생성 실패:', error)
      alert('이미지 생성 중 오류가 발생했습니다.')
    }
  }

  if (!skinTI || !routine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-4xl emoji mb-4">✨</div>
          <p className="text-lg text-[#5a6c57]">리포트를 생성 중입니다...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-[#A8E3D1]/5">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F2F2F] mb-4">
            당신의 AI 루틴 리포트
          </h2>
          <p className="text-lg text-[#5a6c57] mb-8">
            리포트를 다운로드하고 인스타 스토리에 공유해보세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={downloadPDF}
              className="bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              📄 PDF 다운로드
            </button>
            <button
              onClick={downloadImage}
              className="bg-white border-2 border-[#A8E3D1] text-[#2F2F2F] px-8 py-4 rounded-full font-semibold hover:bg-[#A8E3D1]/10 transition-all"
            >
              🖼️ 이미지 다운로드
            </button>
          </div>
        </div>

        {/* 리포트 내용 - PDF/이미지로 변환될 부분 */}
        <div
          ref={reportRef}
          className="bg-white rounded-3xl p-10 shadow-2xl border border-[#A8E3D1]/20"
          style={{ width: '210mm', minHeight: '297mm' }}
        >
          {/* 헤더 */}
          <div className="text-center mb-8 pb-6 border-b-2 border-[#A8E3D1]/30">
            <h3 className="text-3xl font-bold text-[#2F2F2F] mb-2">SkinCoach AI Routine Report</h3>
            <p className="text-sm text-[#5a6c57]">{new Date().toLocaleDateString('ko-KR')} 발급</p>
          </div>

          {/* 사용자 프로필 */}
          <div className="bg-[#A8E3D1]/10 rounded-2xl p-6 mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3">사용자 프로필</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-[#5a6c57]">피부 타입</span>
                <p className="font-semibold text-[#2F2F2F]">{data.skinType}</p>
              </div>
              <div>
                <span className="text-[#5a6c57]">피부 고민</span>
                <p className="font-semibold text-[#2F2F2F]">{data.concerns.join(', ')}</p>
              </div>
              <div>
                <span className="text-[#5a6c57]">제품 개수</span>
                <p className="font-semibold text-[#2F2F2F]">{data.products.length}개</p>
              </div>
            </div>
          </div>

          {/* 제품 리스트 */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">🧴</span> 내가 가진 제품
            </h4>
            <ul className="space-y-2 text-sm text-[#5a6c57] bg-white rounded-xl p-4 border border-[#A8E3D1]/20">
              {data.products.map((product, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#A8E3D1] mt-1">•</span>
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AM Routine */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">🌅</span> AM Routine
            </h4>
            <div className="bg-white rounded-xl p-4 border border-[#A8E3D1]/20">
              <ol className="space-y-2 text-sm text-[#5a6c57]">
                {routine.amRoutine.map((item: any, idx: number) => (
                  <li key={idx}>
                    {item.step}️⃣ {item.product} ({item.category})
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* PM Routine */}
          <div className="mb-6">
            <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
              <span className="emoji">🌙</span> PM Routine
            </h4>
            <div className="bg-white rounded-xl p-4 border border-[#A8E3D1]/20">
              <ol className="space-y-2 text-sm text-[#5a6c57]">
                {routine.pmRoutine.map((item: any, idx: number) => (
                  <li key={idx}>
                    {item.step}️⃣ {item.product} ({item.category})
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* 위험 조합 */}
          {routine.risks.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
                <span className="emoji">⚠️</span> 금지/주의 조합
              </h4>
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <ul className="space-y-2 text-sm text-[#5a6c57]">
                  {routine.risks.map((risk: string, idx: number) => (
                    <li key={idx}>• {risk}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 부족한 요소 */}
          {routine.missing.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
                <span className="emoji">✨</span> 루틴 완성도를 높이려면
              </h4>
              <div className="bg-[#A8E3D1]/10 rounded-xl p-4 border border-[#A8E3D1]/30">
                <ul className="space-y-2 text-sm text-[#5a6c57]">
                  {routine.missing.map((item: string, idx: number) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 스킨-TI */}
          {skinTI && (
            <div className="mb-6">
              <h4 className="font-bold text-[#2F2F2F] mb-3 flex items-center gap-2">
                <span className="emoji">🎯</span> 나의 스킨케어 MBTI
              </h4>
              <div className="bg-gradient-to-br from-[#A8E3D1]/20 to-[#84a98c]/10 rounded-xl p-6 border-2 border-[#A8E3D1] text-center">
                <div className="text-6xl mb-4 emoji">{skinTI.emoji}</div>
                <h5 className="text-2xl font-bold text-[#2F2F2F] mb-2">{skinTI.type}</h5>
                <p className="text-xl font-semibold text-[#84a98c] mb-3">{skinTI.name}</p>
                <p className="text-sm text-[#5a6c57] leading-relaxed">{skinTI.description}</p>
              </div>
            </div>
          )}

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

        {/* 챌린지 안내 */}
        <div className="mt-12 text-center bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">#스킨코치루틴 챌린지 참여하기</h3>
          <p className="mb-6">
            리포트 이미지를 인스타 스토리에 올리고 @skincoach_official 태그하면<br />
            매주 1명에게 올리브영 기프티콘 10,000원을 드립니다!
          </p>
          <a
            href="https://instagram.com/skincoach_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#2F2F2F] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all"
          >
            인스타그램 바로가기
          </a>
        </div>
      </div>
    </div>
  )
}
