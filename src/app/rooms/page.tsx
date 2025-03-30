'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function RoomsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/rooms-hero.jpg"
          alt="MUWA JADE 객실"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">객실 안내</h1>
            <p className="text-xl md:text-2xl">프라이빗한 휴식의 공간</p>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Deluxe Room */}
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/deluxe-room.jpg"
                  alt="디럭 룸"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">디럭 룸</h2>
                <p className="text-gray-600 mb-4">
                  넓은 공간과 프라이빗한 휴식을 위한 최적의 객실
                </p>
                <ul className="space-y-2">
                  <li>• 40㎡ / 2인 기준</li>
                  <li>• 킹 사이즈 베드</li>
                  <li>• 오션뷰</li>
                  <li>• 프라이빗 발코니</li>
                </ul>
              </div>
            </div>

            {/* Suite Room */}
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/suite-room.jpg"
                  alt="스위트 룸"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">스위트 룸</h2>
                <p className="text-gray-600 mb-4">
                  럭셔리한 공간과 특별한 경험을 제공하는 스위트 객실
                </p>
                <ul className="space-y-2">
                  <li>• 60㎡ / 2인 기준</li>
                  <li>• 분리된 침실과 거실</li>
                  <li>• 오션뷰</li>
                  <li>• 프라이빗 테라스</li>
                </ul>
              </div>
            </div>

            {/* Premium Suite */}
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/premium-suite.jpg"
                  alt="프리미엄 스위트"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">프리미엄 스위트</h2>
                <p className="text-gray-600 mb-4">
                  최고급 시설과 서비스를 제공하는 프리미엄 스위트
                </p>
                <ul className="space-y-2">
                  <li>• 100㎡ / 2인 기준</li>
                  <li>• 분리된 침실과 거실</li>
                  <li>• 프라이빗 수영장</li>
                  <li>• 전용 버틀러 서비스</li>
                </ul>
              </div>
            </div>

            {/* Garden Villa */}
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/garden-villa.jpg"
                  alt="가든 빌라"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">가든 빌라</h2>
                <p className="text-gray-600 mb-4">
                  자연과 함께하는 프라이빗한 빌라 스타일 객실
                </p>
                <ul className="space-y-2">
                  <li>• 150㎡ / 4인 기준</li>
                  <li>• 프라이빗 가든</li>
                  <li>• 프라이빗 수영장</li>
                  <li>• 전용 주차장</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">객실 시설</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛏️</div>
              <p className="font-semibold">프리미엄 침구</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛁</div>
              <p className="font-semibold">프리미엄 욕실</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📺</div>
              <p className="font-semibold">스마트 TV</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">☕</div>
              <p className="font-semibold">미니바</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <p className="font-semibold">에센셜 오일</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <p className="font-semibold">금고</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <p className="font-semibold">온도 조절</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📶</div>
              <p className="font-semibold">무선 인터넷</p>
            </div>
          </div>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 