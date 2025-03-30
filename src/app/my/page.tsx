'use client';

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { useState } from 'react';

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <main className="min-h-screen pt-16">
      <Header />

      <section className="p-4">
        <h1 className="text-2xl font-bold mb-6">My</h1>
        
        {/* 탭 메뉴 */}
        <div className="flex space-x-4 mb-6">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
            onClick={() => setActiveTab('profile')}
          >
            프로필
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'reservations' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
            onClick={() => setActiveTab('reservations')}
          >
            예약내역
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
            onClick={() => setActiveTab('settings')}
          >
            설정
          </button>
        </div>

        {/* 프로필 탭 */}
        {activeTab === 'profile' && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-gray-800 rounded-full"></div>
              <div>
                <h2 className="text-xl font-bold">홍길동</h2>
                <p className="text-gray-300">hong@example.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">이름</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                  defaultValue="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">이메일</label>
                <input 
                  type="email" 
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                  defaultValue="hong@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">전화번호</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                  defaultValue="010-1234-5678"
                />
              </div>
            </div>
            <button className="w-full bg-white text-black py-3 rounded mt-6 hover:bg-gray-200">
              프로필 수정
            </button>
          </div>
        )}

        {/* 예약내역 탭 */}
        {activeTab === 'reservations' && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-4">
                <h3 className="font-bold">디럭 룸</h3>
                <p className="text-gray-300">2024-03-20 ~ 2024-03-22</p>
                <p className="text-gray-300">2박 3일</p>
                <p className="font-bold mt-2">₩1,000,000</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="font-bold">스위트 룸</h3>
                <p className="text-gray-300">2024-04-01 ~ 2024-04-03</p>
                <p className="text-gray-300">2박 3일</p>
                <p className="font-bold mt-2">₩1,600,000</p>
              </div>
            </div>
          </div>
        )}

        {/* 설정 탭 */}
        {activeTab === 'settings' && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>알림 설정</span>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                  설정
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>개인정보 처리방침</span>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                  보기
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>로그아웃</span>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                  로그아웃
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <Navbar />
    </main>
  );
} 