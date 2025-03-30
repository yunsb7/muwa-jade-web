'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function ReservationCompletePage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Complete Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">예약이 완료되었습니다</h1>
              <p className="text-gray-300 mb-8">
                예약하신 내용은 이메일로 발송되었습니다.<br />
                예약 번호: <span className="font-bold">MUWA-2024-1234</span>
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">예약 정보</h2>
              <div className="text-left space-y-4">
                <div>
                  <p className="text-gray-400">체크인</p>
                  <p className="font-bold">2024년 3월 15일 15:00</p>
                </div>
                <div>
                  <p className="text-gray-400">체크아웃</p>
                  <p className="font-bold">2024년 3월 17일 11:00</p>
                </div>
                <div>
                  <p className="text-gray-400">객실</p>
                  <p className="font-bold">프라이빗 빌라</p>
                </div>
                <div>
                  <p className="text-gray-400">결제 금액</p>
                  <p className="font-bold">₩1,500,000</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link 
                href="/reservation"
                className="block w-full bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
              >
                예약 내역 보기
              </Link>
              <Link 
                href="/"
                className="block w-full bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
              >
                메인으로 돌아가기
              </Link>
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