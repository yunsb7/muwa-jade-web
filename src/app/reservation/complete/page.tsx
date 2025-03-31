'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ReservationDetails() {
  const searchParams = useSearchParams();

  const room = searchParams.get('room');
  const price = searchParams.get('price');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const guests = searchParams.get('guests');

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 w-full max-w-md mb-8">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">예약 내역</h2>
      <div className="space-y-2 text-left">
        <p><span className="font-medium text-gray-400 w-20 inline-block">객실:</span> {room || '정보 없음'}</p>
        <p><span className="font-medium text-gray-400 w-20 inline-block">체크인:</span> {checkIn || '정보 없음'}</p>
        <p><span className="font-medium text-gray-400 w-20 inline-block">체크아웃:</span> {checkOut || '정보 없음'}</p>
        <p><span className="font-medium text-gray-400 w-20 inline-block">인원:</span> {guests ? `${guests}명` : '정보 없음'}</p>
        <p><span className="font-medium text-gray-400 w-20 inline-block">가격:</span> {price ? `₩${price}/박` : '정보 없음'}</p>
      </div>
    </div>
  );
}

export default function ReservationCompletePage() {
  return (
    <main className="min-h-screen pt-16 pb-16 flex flex-col">
      <Header />
      <section className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">예약 완료</h1>
        <p className="text-lg mb-6">고객님의 예약이 성공적으로 완료되었습니다.</p>

        <Suspense fallback={<div className="text-gray-400">예약 정보 로딩 중...</div>}>
          <ReservationDetails />
        </Suspense>

        <p className="text-gray-400 mb-8">예약 확인 메일이 발송될 예정입니다.</p>
        <Link href="/">
          <span className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 cursor-pointer">
            홈으로 돌아가기
          </span>
        </Link>
      </section>
      <Navbar />
    </main>
  );
} 