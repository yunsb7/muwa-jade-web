'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function DiningPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/dining-hero.jpg"
          alt="MUWA JADE 다이닝"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">다이닝</h1>
            <p className="text-xl md:text-2xl">제주도의 맛과 멋을 담은 특별한 식사</p>
          </div>
        </div>
      </section>

      {/* PDR Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/pdr.jpg"
                  alt="PDR"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">PDR (Private Dining Room)</h2>
                <p className="text-gray-600 mb-6">
                  프라이빗한 공간에서 제주도의 신선한 재료로 만든 특별한 요리를 즐기세요.
                  전문 셰프가 준비하는 맞춤형 코스 요리를 제공합니다.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🍽️</span>
                    <div>
                      <h3 className="font-semibold">코스 요리</h3>
                      <p className="text-gray-600">180,000원 ~</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🍷</span>
                    <div>
                      <h3 className="font-semibold">와인 페어링</h3>
                      <p className="text-gray-600">120,000원 ~</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🎉</span>
                    <div>
                      <h3 className="font-semibold">특별 행사</h3>
                      <p className="text-gray-600">문의</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Restaurant Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">레스토랑</h2>
                <p className="text-gray-600 mb-6">
                  제주도의 신선한 재료를 활용한 다양한 요리를 제공합니다.
                  아침, 점심, 저녁 메뉴를 모두 즐기실 수 있습니다.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🌅</span>
                    <div>
                      <h3 className="font-semibold">아침 식사</h3>
                      <p className="text-gray-600">07:00 - 10:00</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">☀️</span>
                    <div>
                      <h3 className="font-semibold">점심 식사</h3>
                      <p className="text-gray-600">11:30 - 14:30</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🌙</span>
                    <div>
                      <h3 className="font-semibold">저녁 식사</h3>
                      <p className="text-gray-600">17:30 - 21:30</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/restaurant.jpg"
                  alt="레스토랑"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Cafe Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/cafe.jpg"
                  alt="카페"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">카페</h2>
                <p className="text-gray-600 mb-6">
                  제주도의 특별한 커피와 디저트를 즐기실 수 있는 카페입니다.
                  바다를 바라보며 여유로운 시간을 보내세요.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">☕</span>
                    <div>
                      <h3 className="font-semibold">커피</h3>
                      <p className="text-gray-600">6,000원 ~</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🍰</span>
                    <div>
                      <h3 className="font-semibold">디저트</h3>
                      <p className="text-gray-600">8,000원 ~</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🕒</span>
                    <div>
                      <h3 className="font-semibold">영업시간</h3>
                      <p className="text-gray-600">09:00 - 22:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">다이닝 예약</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            특별한 식사 경험을 예약하세요. 
            PDR, 레스토랑, 카페 모두 예약 가능합니다.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            예약하기
          </button>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 