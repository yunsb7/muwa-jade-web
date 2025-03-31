'use client';

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// 객실 데이터 정의 (10개 예시)
const roomData = [
  { name: '스탠다드 룸', description: '아늑하고 편안한 기본 객실', price: '300,000' },
  { name: '디럭스 룸', description: '넓은 공간과 아름다운 전망', price: '500,000' },
  { name: '패밀리 룸', description: '가족 여행객에게 적합한 넓은 객실', price: '600,000' },
  { name: '비즈니스 룸', description: '업무에 필요한 시설 완비', price: '450,000' },
  { name: '오션뷰 룸', description: '바다 전망을 즐길 수 있는 객실', price: '550,000' },
  { name: '마운틴뷰 룸', description: '산 전망을 즐길 수 있는 객실', price: '520,000' },
  { name: '주니어 스위트', description: '거실 공간이 분리된 넓은 객실', price: '700,000' },
  { name: '로얄 스위트', description: '최고급 시설과 프라이빗 서비스', price: '1,200,000' },
  { name: '펜트하우스', description: '호텔 최상층의 럭셔리 공간', price: '2,000,000' },
  { name: '풀빌라', description: '개인 수영장을 갖춘 독립된 공간', price: '1,500,000' },
];

export default function ReservationPage() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const [showRooms, setShowRooms] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    // 여기에 검색 로직 구현
    console.log('검색 조건:', { checkIn, checkOut, guests });
    setShowRooms(true);
  };

  const handleReserve = (roomName: string) => {
    // 선택된 객실 정보 찾기
    const selectedRoom = roomData.find(room => room.name === roomName);
    if (!selectedRoom) return; // 객실 정보 없으면 중단

    // 예약 정보 로그 (선택 사항)
    console.log('예약 정보:', {
      room: roomName,
      price: selectedRoom.price,
      checkIn,
      checkOut,
      guests,
    });

    // 예약 완료 페이지로 예약 정보와 함께 이동
    const queryParams = new URLSearchParams({
      room: roomName,
      price: selectedRoom.price,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
    });
    router.push(`/reservation/complete?${queryParams.toString()}`);
  };

  return (
    <main className="min-h-screen pt-16 pb-16">
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

        {/* 객실 목록 - showRooms가 true일 때만 렌더링 */}
        {showRooms && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">예약 가능한 객실</h2>
            {roomData.map((room) => (
              <div key={room.name} className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <p className="text-gray-300 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">₩{room.price}/박</span>
                  <button 
                    className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200"
                    onClick={() => handleReserve(room.name)}
                  >
                    예약하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Navbar />
    </main>
  );
} 