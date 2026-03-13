import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative block p-1 m-0 w-screen h-[35vh]">
      <Image
        src="/img/banner.jpg"
        alt="Wedding Venue Banner"
        fill={true}
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">where every event finds its venue</h1>
        <h3 className="text-lg drop-shadow-md">
          Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.
        </h3>
      </div>
    </div>
  );
}