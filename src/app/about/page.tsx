'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/about-hero.jpg"
          alt="MUWA JADE 브랜드 소개"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">브랜드 소개</h1>
            <p className="text-xl md:text-2xl">MUWA JADE의 특별한 이야기</p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">브랜드 스토리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/brand-story.jpg"
                  alt="브랜드 스토리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6">
                  MUWA JADE는 2025년 준공 예정인 프라이빗 빌리지입니다. 
                  제이드팰리스 골프클럽 내에 위치한 이곳은 자연과 조화를 이루는 
                  럭셔리한 라이프스타일을 제공합니다.
                </p>
                <p className="text-gray-600">
                  &quot;MUWA&quot;는 &quot;Mountain&quot;과 &quot;Water&quot;의 조합으로, 
                  산과 물이 어우러진 자연의 아름다움을 상징합니다. 
                  &quot;JADE&quot;는 귀중한 보석을 의미하며, 
                  우리의 프리미엄 서비스와 시설을 나타냅니다.
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-4">자연과의 조화</h3>
              <p className="text-gray-600">
                자연과 함께하는 지속 가능한 라이프스타일을 추구합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-4">프리미엄 서비스</h3>
              <p className="text-gray-600">
                최고의 시설과 서비스로 특별한 경험을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">커뮤니티</h3>
              <p className="text-gray-600">
                소중한 사람들과 함께하는 특별한 순간을 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 