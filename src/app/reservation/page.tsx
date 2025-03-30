'use client';

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { useState } from 'react';

export default function ReservationPage() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  const handleSearch = () => {
    // 여기에 검색 로직 구현
    console.log('검색 조건:', { checkIn, checkOut, guests });
  };

  const handleReserve = (roomType: string) => {
    // 여기에 예약 로직 구현
    console.log('예약 방:', roomType);
  };

  return (
    <main className="min-h-screen pt-16">
      <Header />

      <section className="p-4">
        <h1 className="text-2xl font-bold mb-6">예약</h1>
        
        {/* 예약 검색 폼 */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">체크인</label>
              <input 
                type="date" 
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">체크아웃</label>
              <input 
                type="date" 
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">인원</label>
              <select 
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1">1명</option>
                <option value="2">2명</option>
                <option value="3">3명</option>
                <option value="4">4명</option>
              </select>
            </div>
          </div>
          <button 
            className="w-full bg-white text-black py-3 rounded mt-4 hover:bg-gray-200"
            onClick={handleSearch}
          >
            객실 검색
          </button>
        </div>

        {/* 객실 목록 */}
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-xl font-bold mb-2">디럭 룸</h2>
            <p className="text-gray-300 mb-4">넓은 공간과 아름다운 전망을 제공하는 프리미엄 객실</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">₩500,000/박</span>
              <button 
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200"
                onClick={() => handleReserve('디럭 룸')}
              >
                예약하기
              </button>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-xl font-bold mb-2">스위트 룸</h2>
            <p className="text-gray-300 mb-4">최고급 시설과 프라이빗한 공간을 제공하는 럭셔리 객실</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">₩800,000/박</span>
              <button 
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200"
                onClick={() => handleReserve('스위트 룸')}
              >
                예약하기
              </button>
            </div>
          </div>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 