'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            MUWA JADE
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-black absolute left-0 right-0 top-16 p-4`}
        >
          <nav className="space-y-4">
            <Link
              href="/about"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              브랜드 소개
            </Link>
            <Link
              href="/map"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              단지 배치도
            </Link>
            <Link
              href="/rooms"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              객실 안내
            </Link>
            <Link
              href="/wellness"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              웰니스
            </Link>
            <Link
              href="/dining"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              다이닝
            </Link>
            <Link
              href="/location"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              오시는 길
            </Link>
            <Link
              href="/reservation"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              예약하기
            </Link>
            <Link
              href="/checkin"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              체크인
            </Link>
            <Link
              href="/concierge"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              컨시어지
            </Link>
            <Link
              href="/my"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              My
            </Link>
          </nav>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/about"
            className="text-white hover:text-gray-300"
          >
            브랜드 소개
          </Link>
          <Link
            href="/map"
            className="text-white hover:text-gray-300"
          >
            단지 배치도
          </Link>
          <Link
            href="/rooms"
            className="text-white hover:text-gray-300"
          >
            객실 안내
          </Link>
          <Link
            href="/wellness"
            className="text-white hover:text-gray-300"
          >
            웰니스
          </Link>
          <Link
            href="/dining"
            className="text-white hover:text-gray-300"
          >
            다이닝
          </Link>
          <Link
            href="/location"
            className="text-white hover:text-gray-300"
          >
            오시는 길
          </Link>
          <Link
            href="/reservation"
            className="text-white hover:text-gray-300"
          >
            예약하기
          </Link>
          <Link
            href="/checkin"
            className="text-white hover:text-gray-300"
          >
            체크인
          </Link>
          <Link
            href="/concierge"
            className="text-white hover:text-gray-300"
          >
            컨시어지
          </Link>
          <Link
            href="/my"
            className="text-white hover:text-gray-300"
          >
            My
          </Link>
        </nav>
      </div>
    </header>
  );
} 