'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function MapPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/map-hero.jpg"
          alt="MUWA JADE 단지 배치도"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">단지 배치도</h1>
            <p className="text-xl md:text-2xl">전체 리조트 단지의 위치 구성</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[600px] mb-8">
              <Image
                src="/images/map-layout.jpg"
                alt="단지 배치도"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Facility List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">객실동</h3>
                <ul className="space-y-2">
                  <li>• 디럭 룸</li>
                  <li>• 스위트 룸</li>
                  <li>• 프리미엄 스위트</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">웰니스 시설</h3>
                <ul className="space-y-2">
                  <li>• 스파</li>
                  <li>• 피트니스</li>
                  <li>• 수영장</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">다이닝</h3>
                <ul className="space-y-2">
                  <li>• PDR (Private Dining Room)</li>
                  <li>• 레스토랑</li>
                  <li>• 카페</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">커뮤니티</h3>
                <ul className="space-y-2">
                  <li>• 제이드가든</li>
                  <li>• 골프 클럽</li>
                  <li>• 아트 갤러리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">인터랙티브 맵</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* 여기에 인터랙티브 맵 컴포넌트 추가 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">인터랙티브 맵 로딩 중...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 