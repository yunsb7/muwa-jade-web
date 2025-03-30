'use client';

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { useState } from 'react';

export default function ConciergePage() {
  const [request, setRequest] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  const handleSubmit = () => {
    // 여기에 요청 제출 로직 구현
    console.log('콘시어지 요청:', { request, roomNumber });
  };

  return (
    <main className="min-h-screen pt-16">
      <Header />

      <section className="p-4">
        <h1 className="text-2xl font-bold mb-6">콘시어지</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">객실번호</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                placeholder="객실번호를 입력하세요"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">요청사항</label>
              <textarea 
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white h-32"
                placeholder="요청사항을 입력하세요"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
              />
            </div>
          </div>

          <button 
            className="w-full bg-white text-black py-3 rounded mt-6 hover:bg-gray-200"
            onClick={handleSubmit}
          >
            요청하기
          </button>
        </div>
      </section>

      <Navbar />
    </main>
  );
} 