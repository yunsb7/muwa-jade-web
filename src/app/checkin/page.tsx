'use client';

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { useState } from 'react';

export default function CheckinPage() {
  const [reservationNumber, setReservationNumber] = useState('');
  const [name, setName] = useState('');

  const handleCheckIn = () => {
    // 여기에 체크인 로직 구현
    console.log('체크인 정보:', { reservationNumber, name });
  };

  return (
    <main className="min-h-screen pt-16">
      <Header />

      <section className="p-4">
        <h1 className="text-2xl font-bold mb-6">체크인</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">예약번호</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                placeholder="예약번호를 입력하세요"
                value={reservationNumber}
                onChange={(e) => setReservationNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">이름</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <button 
            className="w-full bg-white text-black py-3 rounded mt-6 hover:bg-gray-200"
            onClick={handleCheckIn}
          >
            체크인
          </button>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 