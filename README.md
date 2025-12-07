# SkinCoach - 내 피부의 AI 코치

AI가 개인의 피부타입, 보유 제품, 성분 조합을 분석해 가장 안전하고 최적화된 스킨케어 루틴을 매일 추천해주는 서비스입니다.

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 CSS
- **App Router** - Next.js 최신 라우팅

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
skincoach/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── Header.tsx      # 헤더/네비게이션
│   ├── Hero.tsx        # 히어로 섹션
│   ├── Features.tsx     # 기능 소개
│   ├── HowItWorks.tsx  # 작동 방식
│   ├── CTA.tsx         # CTA 섹션
│   └── Footer.tsx      # 푸터
└── package.json
```

## 디자인 시스템

### 색상

- **Sage Green**: 메인 브랜드 컬러 (#427162)
- **Teal**: 보조 컬러 (#14b8a6)
- **Mint**: 악센트 컬러 (#22c55e)

### 주요 기능

1. **AI 피부 프로파일 생성** - 피부 타입과 고민 기반 프로파일
2. **제품 성분 자동 분석** - 보유 제품의 성분 분석 및 위험 조합 감지
3. **맞춤 루틴 생성** - AM/PM 자동 루틴 생성
4. **예산 기반 제품 추천** - 예산과 선호 브랜드 고려
5. **위험 성분 경고** - 과학 기반 안전성 체크

## 배포

### Vercel (권장)

[Vercel](https://vercel.com)에 배포하는 것이 가장 간단합니다:

1. GitHub 레포지토리를 Vercel에 연결
2. 자동으로 빌드 및 배포됩니다

### 수동 배포

```bash
npm run build
npm start
```

## 라이선스

MIT

