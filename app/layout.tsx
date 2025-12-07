import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkinCoach - 내 피부의 AI 코치',
  description: '당신의 피부 상태를 이해하고, 가장 적합한 루틴을 설계해주는 AI 코치입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

