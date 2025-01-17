"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className='nav max-md:w-[380px] w-[850px] mx-auto border mb-5 px-6 py-3 rounded-xl flex justify-between items-center'>
      <Link href="/"><Image src="/logo.svg" alt='logo' width={60} height={60} /></Link>
      
      {session ? (
        <button onClick={() => signOut()} className='px-2 py-1 bg-black text-white rounded-md'>logout</button>
      ) : (
        <Link href="/sign-in" className='px-2 py-1 bg-black text-white rounded-md'>Login</Link>
      )}

    </div>
  );
}