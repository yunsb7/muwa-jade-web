'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function WellnessPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/wellness-hero.jpg"
          alt="MUWA JADE 웰니스"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">웰니스</h1>
            <p className="text-xl md:text-2xl">건강한 삶의 시작</p>
          </div>
        </div>
      </section>

      {/* Spa Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/spa.jpg"
                  alt="스파"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">스파</h2>
                <p className="text-gray-300 mb-6">
                  제주도의 자연에서 영감을 받은 프리미엄 스파 트리트먼트를 경험하세요.
                  전문 테라피스트의 손길로 피로를 풀고 활력을 되찾으세요.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">💆</span>
                    <div>
                      <h3 className="font-semibold">전신 마사지</h3>
                      <p className="text-gray-300">90분 / 150,000원</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🧖</span>
                    <div>
                      <h3 className="font-semibold">한방 스파</h3>
                      <p className="text-gray-300">120분 / 200,000원</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">💅</span>
                    <div>
                      <h3 className="font-semibold">발 마사지</h3>
                      <p className="text-gray-300">60분 / 100,000원</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fitness Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">피트니스</h2>
                <p className="text-gray-300 mb-6">
                  최신 운동 기구와 전문 트레이너의 지도로 건강한 라이프스타일을 시작하세요.
                  24시간 이용 가능한 프리미엄 피트니스 센터를 제공합니다.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">💪</span>
                    <div>
                      <h3 className="font-semibold">개인 트레이닝</h3>
                      <p className="text-gray-300">60분 / 150,000원</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🧘</span>
                    <div>
                      <h3 className="font-semibold">요가 클래스</h3>
                      <p className="text-gray-300">90분 / 100,000원</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🏊</span>
                    <div>
                      <h3 className="font-semibold">수영 레슨</h3>
                      <p className="text-gray-300">60분 / 120,000원</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/fitness.jpg"
                  alt="피트니스"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Pool Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/pool.jpg"
                  alt="수영장"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">수영장</h2>
                <p className="text-gray-300 mb-6">
                  인피니티 풀에서 제주도의 아름다운 바다를 바라보며 휴식을 취하세요.
                  실내/실외 수영장과 자쿠지를 제공합니다.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🏊‍♂️</span>
                    <div>
                      <h3 className="font-semibold">실내 수영장</h3>
                      <p className="text-gray-300">24시간 이용 가능</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🌊</span>
                    <div>
                      <h3 className="font-semibold">인피니티 풀</h3>
                      <p className="text-gray-300">일출과 함께하는 특별한 경험</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">💦</span>
                    <div>
                      <h3 className="font-semibold">자쿠지</h3>
                      <p className="text-gray-300">피로 회복을 위한 힐링 타임</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">웰니스 예약</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            프리미엄 웰니스 서비스를 경험하세요. 
            예약은 전화 또는 온라인으로 가능합니다.
          </p>
          <Link 
            href="/reservation" 
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors inline-block"
          >
            예약하기
          </Link>
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