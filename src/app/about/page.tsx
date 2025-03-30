'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/about-hero.jpg"
          alt="MUWA JADE 브랜드"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MUWA JADE</h1>
            <p className="text-xl md:text-2xl">자연 속 프라이빗 휴식</p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">브랜드 스토리</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg leading-relaxed">
              MUWA의 철학, '자연 속 프라이빗 휴식'을 담은 브랜드 스토리.
              아트 & 라이프의 융합, 지속가능한 자연 친화적 공간 철학.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">자연과의 조화</h3>
                <p className="text-gray-600">
                  제이드가든과 어우러진 프라이빗한 공간에서 자연의 에너지를 느끼세요.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">예술적 영감</h3>
                <p className="text-gray-600">
                  아트 갤러리와 문화 프로그램을 통해 일상 속 예술적 영감을 얻으세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">브랜드 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-2">자연 친화</h3>
              <p className="text-gray-600">지속가능한 자연과의 공존</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">예술적 가치</h3>
              <p className="text-gray-600">아트 & 라이프의 융합</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">프리미엄</h3>
              <p className="text-gray-600">최고급 서비스와 시설</p>
            </div>
          </div>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 