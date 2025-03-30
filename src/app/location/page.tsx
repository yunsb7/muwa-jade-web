'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function LocationPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/location-hero.jpg"
          alt="MUWA JADE 위치"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">오시는 길</h1>
            <p className="text-xl md:text-2xl">MUWA JADE로의 여정</p>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">주소</h2>
              <div className="space-y-4">
                <p className="text-lg">강원도 춘천시 남산면 경춘로 212-30 제이드팰리스 GC</p>
                <p className="text-gray-600">2025년 준공 예정</p>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
              <Image
                src="/images/location-map.jpg"
                alt="위치 지도"
                fill
                className="object-cover"
              />
            </div>

            {/* Transportation */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">교통 정보</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">서울 코엑스</h3>
                    <p className="text-gray-600">약 1시간 소요 (약 68km 거리)</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>경춘고속도로 이용</li>
                      <li>남춘천 IC에서 하차</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">대중교통</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>경춘선 ITX: 용산역 → 가평역 (약 1시간)</li>
                      <li>가평역 → 제이드팰리스 GC: 택시 약 8분</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">주차 정보</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-600">
                    <li>• 지하 주차장: 100대</li>
                    <li>• 지상 주차장: 50대</li>
                    <li>• 전기차 충전소: 10대</li>
                    <li>• 장애인 주차: 5대</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">주변 시설</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">제이드팰리스 골프클럽</h3>
                    <p className="text-gray-600">내부 시설</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">와인 테마 커뮤니티 하우스</h3>
                    <p className="text-gray-600">내부 시설</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">프라이빗 빌라</h3>
                    <p className="text-gray-600">내부 시설</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">남춘천 IC</h3>
                    <p className="text-gray-600">차량 5분</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 