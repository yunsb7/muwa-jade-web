'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function BrandPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/brand-hero.jpg"
          alt="MUWA JADE 브랜드"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MUWA JADE</h1>
            <p className="text-xl md:text-2xl">자연과 예술이 어우러진 프리미엄 라이프스타일</p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">브랜드 스토리</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8">
              &quot;MUWA&quot;는 &quot;Mountain&quot;과 &quot;Water&quot;의 조합으로, 
              산과 물이 어우러진 자연의 아름다움을 상징합니다. 
              &quot;JADE&quot;는 귀중한 보석을 의미하며, 
              우리의 프리미엄 서비스와 시설을 나타냅니다.
            </p>
            <p className="text-xl">
              MUWA JADE는 자연과 예술이 조화를 이루는 공간에서 
              최고의 휴식과 웰니스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">브랜드 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">자연과의 조화</h3>
              <p className="text-gray-300">자연과 함께하는 지속가능한 라이프스타일</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">프리미엄 웰니스</h3>
              <p className="text-gray-300">최고급 웰니스 시설과 맞춤형 서비스</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">예술적 감각</h3>
              <p className="text-gray-300">예술이 담긴 공간 디자인과 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Experience */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">브랜드 경험</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/brand-experience1.jpg"
                alt="프라이빗 빌라"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">프라이빗 빌라</h3>
                  <p>당신만의 공간에서의 특별한 경험</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/brand-experience2.jpg"
                alt="웰니스 시설"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">웰니스 시설</h3>
                  <p>몸과 마음을 채우는 프리미엄 웰니스</p>
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