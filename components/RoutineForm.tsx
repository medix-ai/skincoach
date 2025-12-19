'use client'

import { useState } from 'react'
import ReportResult from './ReportResult'
import { products as allProducts } from '@/lib/products'

const skinTypes = ['건성', '지성', '복합성', '민감성']
const skinConcerns = ['여드름', '모공', '잡티', '홍조', '건조/각질', '주름/탄력 저하']

// 전체 제품 목록 (150개 이상)
const sampleProducts = allProducts

export default function RoutineForm() {
  const [step, setStep] = useState(1)
  const [skinType, setSkinType] = useState('')
  const [concerns, setConcerns] = useState<string[]>([])
  const [products, setProducts] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [instagramId, setInstagramId] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [reportData, setReportData] = useState<any>(null)

  const toggleConcern = (concern: string) => {
    if (concerns.includes(concern)) {
      setConcerns(concerns.filter(c => c !== concern))
    } else if (concerns.length < 3) {
      setConcerns([...concerns, concern])
    }
  }

  const addProduct = (product: string) => {
    if (!products.includes(product) && products.length < 10) {
      setProducts([...products, product])
      setSearchQuery('')
    }
  }

  const removeProduct = (product: string) => {
    setProducts(products.filter(p => p !== product))
  }

  const filteredProducts = sampleProducts.filter(p =>
    p.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !products.includes(p)
  )

  const handleSubmit = async () => {
    setIsGenerating(true)
    // 실제로는 백엔드 API 호출
    setTimeout(() => {
      setIsGenerating(false)
      setReportData({
        skinType,
        concerns,
        products,
        name: name || undefined
      })
      setStep(4) // 리포트 결과 페이지로 이동
    }, 2000)
  }

  return (
    <section id="routine-form" className="py-32 px-6 md:px-16 bg-gradient-to-b from-white to-[#A8E3D1]/5">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F2F2F] mb-16 tracking-[-1px]">
          내 루틴 리포트 만들기
        </h2>

        {/* Progress indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    step >= s
                      ? 'bg-[#A8E3D1] text-[#2F2F2F]'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-1 ${
                      step > s ? 'bg-[#A8E3D1]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 1: 피부 정보 */}
        {step === 1 && (
          <div className="bg-white rounded-3xl p-10 border border-[#A8E3D1]/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2F2F2F] mb-8 text-center">
              피부 정보를 알려주세요
            </h3>

            <div className="mb-10">
              <label className="block text-lg font-semibold text-[#2F2F2F] mb-4">
                Q1. 피부 타입은 무엇인가요?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skinTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSkinType(type)}
                    className={`py-4 px-6 rounded-2xl font-medium transition-all ${
                      skinType === type
                        ? 'bg-[#A8E3D1] text-[#2F2F2F] border-2 border-[#A8E3D1]'
                        : 'bg-gray-50 text-[#5a6c57] border-2 border-transparent hover:border-[#A8E3D1]/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-lg font-semibold text-[#2F2F2F] mb-4">
                Q2. 피부 고민을 선택해주세요 (최대 3개)
              </label>
              <div className="flex flex-wrap gap-3">
                {skinConcerns.map((concern) => (
                  <button
                    key={concern}
                    onClick={() => toggleConcern(concern)}
                    disabled={!concerns.includes(concern) && concerns.length >= 3}
                    className={`py-3 px-6 rounded-full font-medium transition-all ${
                      concerns.includes(concern)
                        ? 'bg-[#A8E3D1] text-[#2F2F2F] border-2 border-[#A8E3D1]'
                        : 'bg-white text-[#5a6c57] border-2 border-gray-200 hover:border-[#A8E3D1]/50'
                    } ${
                      !concerns.includes(concern) && concerns.length >= 3
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    {concern}
                  </button>
                ))}
              </div>
              {concerns.length > 0 && (
                <p className="mt-4 text-sm text-[#5a6c57]">
                  선택됨: {concerns.join(', ')}
                </p>
              )}
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!skinType || concerns.length === 0}
              className="w-full bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F] py-4 rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              다음 단계 →
            </button>
          </div>
        )}

        {/* STEP 2: 제품 입력 */}
        {step === 2 && (
          <div className="bg-white rounded-3xl p-10 border border-[#A8E3D1]/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2F2F2F] mb-8 text-center">
              보유 스킨케어 제품을 등록해주세요
            </h3>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-[#2F2F2F] mb-4">
                제품명을 검색하거나 선택해주세요 (최소 3개, 최대 10개)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="예: 라운드랩 독도 토너"
                  className="w-full py-4 px-6 rounded-2xl border-2 border-[#A8E3D1]/30 focus:border-[#A8E3D1] focus:outline-none text-[#2F2F2F]"
                />
                {searchQuery && filteredProducts.length > 0 && (
                  <div className="absolute z-10 w-full mt-2 bg-white border-2 border-[#A8E3D1]/30 rounded-2xl shadow-lg max-h-60 overflow-y-auto">
                    {filteredProducts.slice(0, 20).map((product) => (
                      <button
                        key={product}
                        onClick={() => addProduct(product)}
                        className="w-full text-left py-3 px-6 hover:bg-[#A8E3D1]/10 transition-colors"
                      >
                        {product}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 선택된 제품 리스트 */}
            {products.length > 0 && (
              <div className="mb-8">
                <p className="text-sm text-[#5a6c57] mb-3">
                  선택된 제품 ({products.length}/10개)
                </p>
                <div className="flex flex-wrap gap-3">
                  {products.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-2 bg-[#A8E3D1]/20 px-4 py-2 rounded-full"
                    >
                      <span className="text-[#2F2F2F] text-sm">{product}</span>
                      <button
                        onClick={() => removeProduct(product)}
                        className="text-[#5a6c57] hover:text-[#2F2F2F]"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 빠른 선택 */}
            <div className="mb-8">
              <p className="text-sm text-[#5a6c57] mb-3">인기 제품 빠른 선택</p>
              <div className="flex flex-wrap gap-3">
                {sampleProducts.slice(0, 12).map((product) => (
                  <button
                    key={product}
                    onClick={() => addProduct(product)}
                    disabled={products.includes(product) || products.length >= 10}
                    className="py-2 px-4 rounded-full text-sm bg-gray-50 text-[#5a6c57] border border-gray-200 hover:border-[#A8E3D1] hover:bg-[#A8E3D1]/10 transition-all disabled:opacity-50"
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-100 text-[#5a6c57] py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all"
              >
                ← 이전
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={products.length < 3 || products.length > 10}
                className="flex-1 bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F] py-4 rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                다음 단계 →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: 제출 */}
        {step === 3 && (
          <div className="bg-white rounded-3xl p-10 border border-[#A8E3D1]/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2F2F2F] mb-8 text-center">
              리포트를 받을 정보를 입력해주세요 (선택사항)
            </h3>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-[#5a6c57] mb-2">
                  이름 또는 닉네임
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="선택사항"
                  className="w-full py-3 px-4 rounded-xl border-2 border-[#A8E3D1]/30 focus:border-[#A8E3D1] focus:outline-none text-[#2F2F2F]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5a6c57] mb-2">
                  이메일 (리포트 전송용)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="선택사항"
                  className="w-full py-3 px-4 rounded-xl border-2 border-[#A8E3D1]/30 focus:border-[#A8E3D1] focus:outline-none text-[#2F2F2F]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5a6c57] mb-2">
                  인스타그램 ID (챌린지 참여용)
                </label>
                <input
                  type="text"
                  value={instagramId}
                  onChange={(e) => setInstagramId(e.target.value)}
                  placeholder="@username (선택사항)"
                  className="w-full py-3 px-4 rounded-xl border-2 border-[#A8E3D1]/30 focus:border-[#A8E3D1] focus:outline-none text-[#2F2F2F]"
                />
              </div>
            </div>

            {/* 요약 */}
            <div className="bg-[#A8E3D1]/10 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-[#2F2F2F] mb-3">입력 정보 요약</h4>
              <div className="space-y-2 text-sm text-[#5a6c57]">
                <p>피부 타입: {skinType}</p>
                <p>고민: {concerns.join(', ')}</p>
                <p>제품: {products.length}개</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-100 text-[#5a6c57] py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all"
              >
                ← 이전
              </button>
              <button
                onClick={handleSubmit}
                disabled={isGenerating}
                className="flex-1 bg-gradient-to-br from-[#A8E3D1] to-[#84a98c] text-[#2F2F2F] py-4 rounded-2xl font-semibold text-lg disabled:opacity-50 hover:shadow-lg transition-all"
              >
                {isGenerating ? '리포트 생성 중...' : 'AI 루틴 리포트 받기'}
              </button>
            </div>

            {isGenerating && (
              <div className="mt-6 text-center">
                <div className="inline-block animate-spin text-4xl emoji">✨</div>
                <p className="mt-4 text-[#5a6c57]">당신의 루틴을 분석 중입니다...</p>
              </div>
            )}
          </div>
        )}

      </div>

      {/* 리포트 결과 - 별도 섹션으로 표시 */}
      {step === 4 && reportData && (
        <div className="mt-16">
          <ReportResult data={reportData} />
        </div>
      )}
    </section>
  )
}
