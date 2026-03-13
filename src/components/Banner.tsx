'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner() {
  const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <div 
      className="relative block p-1 m-0 w-screen h-[35vh] cursor-pointer"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="Wedding Venue Banner"
        fill={true}
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4 pointer-events-none">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">where every event finds its venue</h1>
        <h3 className="text-lg drop-shadow-md">
          Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.
        </h3>
      </div>
      <button 
        className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent cursor-pointer"
        onClick={(e) => { 
          e.stopPropagation();
          router.push('/venue'); 
        }}
      >
        Select Venue
      </button>
    </div>
  );
}