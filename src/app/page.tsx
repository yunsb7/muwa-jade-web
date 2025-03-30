'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "오픈 기념 할인",
      description: "첫 숙박 20% 할인",
      image: "/images/promotion1.jpg"
    },
    {
      title: "웰니스 클래스",
      description: "요가 & 명상 클래스 신청",
      image: "/images/promotion2.jpg"
    }
  ];

  const reviews = [
    {
      text: "조용한 자연 속 힐링, 또 오고 싶어요.",
      author: "김**"
    },
    {
      text: "예약부터 체크아웃까지 완전 비대면이라 편했어요.",
      author: "이**"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            자연 속 프라이빗 휴식, MUWA JADE
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            MUWA의 철학이 담긴 프리미엄 라이프스타일 공간
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href="/reservation" 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200"
            >
              지금 예약하기
            </Link>
            <Link 
              href="#about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black"
            >
              브랜드 소개 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            MUWA JADE는?
          </h2>
          <p className="text-xl text-center mb-16">
            자연·예술·휴식의 조화 속에서 탄생한 프리미엄 콘도미니엄
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">자연 속 프라이버시</h3>
              <p className="text-gray-300">자연과 조화로운 프라이빗한 공간</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">프리미엄 웰니스</h3>
              <p className="text-gray-300">최고급 웰니스 시설과 서비스</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">감각적인 공간 디자인</h3>
              <p className="text-gray-300">예술적 감각이 담긴 인테리어</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/villa.jpg"
                alt="VILLA 프라이빗 빌라"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">VILLA 프라이빗 빌라</h3>
                  <p>당신만의 공간에서의 쉼</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/wellness.jpg"
                alt="웰니스 시설"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">웰니스 시설</h3>
                  <p>몸과 마음을 채우는 시간</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/dining.jpg"
                alt="PDR / 다이닝 공간"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">PDR / 다이닝 공간</h3>
                  <p>프라이빗한 미식 경험</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Content */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">라이프스타일</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/tourism.jpg"
                  alt="주변 관광지"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">주변 관광지</h3>
                <p className="text-gray-300 mb-4">자연과 문화가 어우러진 여행지</p>
                <Link href="#" className="text-white hover:underline">더 알아보기 →</Link>
              </div>
            </div>
            {/* Add more lifestyle cards here */}
          </div>
        </div>
      </section>

      {/* Reservation Guide */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">모바일로 간편하게, 키리스 체크인</h2>
          <p className="text-xl mb-12">투숙, 골프, 부대시설까지 원스톱 예약</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">예약</h3>
              <p>원하는 날짜와 객실 선택</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">결제</h3>
              <p>간편한 온라인 결제</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">체크인</h3>
              <p>키리스 체크인으로 편리하게</p>
            </div>
          </div>
          <Link 
            href="/reservation" 
            className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 inline-block"
          >
            예약하기
          </Link>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">프로모션</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-gray-300">{promo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">고객 리뷰</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <p className="text-xl mb-4">"{review.text}"</p>
                <p className="text-gray-300">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Menu */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/reservation" className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800">
              예약 바로가기
            </Link>
            <Link href="/checkin" className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800">
              스마트 체크인
            </Link>
            <Link href="/concierge" className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800">
              컨시어지 요청
            </Link>
            <Link href="#" className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800">
              이벤트 보기
            </Link>
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