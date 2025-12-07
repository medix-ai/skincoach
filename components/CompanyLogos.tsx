'use client'

// vidplus style company logos section
export default function CompanyLogos() {
  const companies = [
    { name: 'Olive Young', logo: 'OY' },
    { name: 'Lalavla', logo: 'LV' },
    { name: 'Coupang', logo: 'CP' },
    { name: '11번가', logo: '11' },
    { name: 'Gmarket', logo: 'GM' },
  ]

  return (
    <section className="py-12 px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <p className="text-gray-500 text-sm font-medium whitespace-nowrap">
            많은 브랜드가 사용 중
          </p>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors grayscale hover:grayscale-0"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

