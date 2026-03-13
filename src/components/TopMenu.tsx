import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <div className="h-[50px] fixed top-0 left-0 right-3 z-30 border-y border-gray-300 flex flex-row justify-end items-center px-4">
      <TopMenuItem title="Booking" pageRef="/booking" />
      <Image 
        className="h-[44px] w-auto p-1"
        src="/img/logo.png" 
        alt="logo" 
        width={0} 
        height={0} 
        sizes='100vh'
      />
    </div>
  );
}