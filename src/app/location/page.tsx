'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">위치</h1>
            <p className="text-xl md:text-2xl">제주도의 아름다운 자연 속에서</p>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">주소</h2>
                <p className="text-gray-300 mb-6">
                  제주특별자치도 제주시 구좌읍 행원로 123
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">대중교통</h3>
                    <p className="text-gray-300">제주국제공항에서 차량으로 약 30분</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">주차</h3>
                    <p className="text-gray-300">지하 주차장 100대 수용 가능</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/location-map.jpg"
                  alt="위치 지도"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">주변 관광지</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">성산일출봉</h3>
                    <p className="text-gray-300">차량으로 약 10분</p>
                    <p className="text-gray-300">제주도의 대표적인 관광지</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">만장굴</h3>
                    <p className="text-gray-300">차량으로 약 15분</p>
                    <p className="text-gray-300">세계문화유산으로 지정된 용암동굴</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">우도</h3>
                    <p className="text-gray-300">차량으로 약 20분 + 페리</p>
                    <p className="text-gray-300">제주도의 작은 섬, 아름다운 해변</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/nearby-attractions.jpg"
                  alt="주변 관광지"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Transportation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/transportation.jpg"
                  alt="교통 정보"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">교통 정보</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">제주국제공항</h3>
                    <p className="text-gray-300">차량으로 약 30분 소요</p>
                    <p className="text-gray-300">공항 픽업 서비스 제공</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">제주시내</h3>
                    <p className="text-gray-300">차량으로 약 40분 소요</p>
                    <p className="text-gray-300">시내 셔틀버스 운영</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">렌터카</h3>
                    <p className="text-gray-300">공항에서 렌터카 이용 가능</p>
                    <p className="text-gray-300">무료 주차 시설 제공</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">회사소개</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">회사 소개</Link></li>
                <li><Link href="#" className="hover:underline">이용약관</Link></li>
                <li><Link href="#" className="hover:underline">개인정보처리방침</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">고객센터</h3>
              <p className="text-2xl font-bold">1234-5678</p>
              <p className="text-gray-300">24시간 운영</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">SNS</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">Instagram</Link>
                <Link href="#" className="hover:text-gray-300">Facebook</Link>
                <Link href="#" className="hover:text-gray-300">YouTube</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">언어</h3>
              <div className="flex space-x-4">
                <button className="hover:text-gray-300">한국어</button>
                <button className="hover:text-gray-300">English</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
            <p>© 2024 MUWA JADE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Navbar />
    </main>
  );
} 