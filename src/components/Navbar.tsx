'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-black text-white shadow-md py-2 text-sm">
      <Link href="/reservation" className="flex flex-col items-center">
        <span>예약</span>
      </Link>
      <Link href="/checkin" className="flex flex-col items-center">
        <span>체크인</span>
      </Link>
      <Link href="/concierge" className="flex flex-col items-center">
        <span>컨시어지</span>
      </Link>
      <Link href="/my" className="flex flex-col items-center">
        <span>MY</span>
      </Link>
    </nav>
  );
} 