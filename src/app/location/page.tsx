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
      <section className="relative h-[60vh]">
        <Image
          src="/images/location-hero.jpg"
          alt="MUWA JADE 위치"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">위치 안내</h1>
            <p className="text-xl md:text-2xl">자연과 함께하는 프라이빗 빌리지</p>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">MUWA JADE 위치</h2>
            <div className="bg-gray-900 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">주소</h3>
              <p className="text-gray-300 mb-4">강원도 춘천시 남산면 경춘로 212-30 제이드팰리스 GC</p>
              <p className="text-gray-300">2025년 준공 예정</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">교통 안내</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">차량 이용</h3>
              <p className="text-gray-300">서울 코엑스 기준 약 1시간 소요 (약 68km 거리)</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">대중교통 이용</h3>
              <p className="text-gray-300">경춘선 ITX 이용</p>
              <p className="text-gray-300">용산역 → 가평역 (약 1시간)</p>
              <p className="text-gray-300">가평역 → 제이드팰리스 GC (택시 약 8분)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">주변 시설</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">제이드팰리스 골프클럽</h3>
              <p className="text-gray-300">회원제 프라이빗 골프 클럽</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">프라이빗 빌라</h3>
              <p className="text-gray-300">독립적인 공간의 프라이빗 빌라</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">커뮤니티 하우스</h3>
              <p className="text-gray-300">와인 테마의 커뮤니티 공간</p>
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