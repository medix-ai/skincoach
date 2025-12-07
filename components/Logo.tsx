'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Logo({ className = '' }: { className?: string }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo image - will use actual logo when uploaded */}
      <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
        {!imageError ? (
          <Image
            src="/skincoach_logo.png"
            alt="SkinCoach Logo"
            width={40}
            height={40}
            className="object-contain"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          // Fallback SVG logo
          <svg
            viewBox="0 0 80 80"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 40C15 28 22 20 32 20C38 20 43 23 46 27L50 24C46 18 40 13 32 13C18 13 8 23 8 40C8 57 18 67 32 67C40 67 46 62 50 56L46 53C43 57 38 60 32 60C22 60 15 52 15 40Z"
              fill="#345a4f"
              opacity="0.15"
              transform="translate(2 2)"
            />
            <path
              d="M15 40C15 28 22 20 32 20C38 20 43 23 46 27L50 24C46 18 40 13 32 13C18 13 8 23 8 40C8 57 18 67 32 67C40 67 46 62 50 56L46 53C43 57 38 60 32 60C22 60 15 52 15 40Z"
              fill="#427162"
            />
            <path
              d="M15 40C15 28 22 20 32 20C38 20 43 23 46 27L50 24C46 18 40 13 32 13C18 13 8 23 8 40C8 57 18 67 32 67C40 67 46 62 50 56L46 53C43 57 38 60 32 60C22 60 15 52 15 40Z"
              fill="#8fb5a3"
              opacity="0.7"
              transform="translate(0 -3)"
            />
          </svg>
        )}
      </div>
      <span className="text-sage-700 font-semibold text-xl tracking-tight">SkinCoach</span>
    </div>
  )
}
