import Image from "next/image";

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
    const { vid } = await params;

    const mockVenueRepo = new Map();
    mockVenueRepo.set("001", { name: "The Bloom Pavilion", image: "/img/bloom.jpg" });
    mockVenueRepo.set("002", { name: "Spark Space", image: "/img/sparkspace.jpg" });
    mockVenueRepo.set("003", { name: "The Grand Table", image: "/img/grandtable.jpg" });

    const venue = mockVenueRepo.get(vid);

    if (!venue) {
        return (
            <main className="text-center p-5">
                <h1 className="text-lg font-medium">Venue Not Found</h1>
            </main>
        );
    }

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Venue ID {vid}</h1>
            <div className="flex flex-row my-5 justify-center items-center">
                <Image 
                    src={venue.image} 
                    alt="Venue Picture" 
                    width={0} 
                    height={0} 
                    sizes="100vw" 
                    className="rounded-lg w-[30%] bg-black object-cover" 
                />
                <div className="text-md mx-5 font-semibold text-2xl">{venue.name}</div>
            </div>
        </main>
    );
}