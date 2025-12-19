/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/skincoach' : ''

const nextConfig = {
  reactStrictMode: true,
  // output: 'export'는 빌드 시에만 필요하므로 개발 환경에서는 제거
  ...(isProd && { output: 'export' }),
  // 개발 환경에서는 basePath와 assetPrefix를 설정하지 않음
  ...(isProd && { basePath: basePath }),
  ...(isProd && { assetPrefix: basePath }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
}

module.exports = nextConfig

