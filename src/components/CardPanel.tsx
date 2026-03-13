'use client'
import { useReducer } from 'react'
import Card from './Card'
import Link from 'next/link'

export default function CardPanel() {
    const ratingReducer = (state: Map<string, number>, action: { type: string, venueName: string, rating: number }) => {
        switch (action.type) {
            case 'add': {
                return new Map(state.set(action.venueName, action.rating));
            }
            case 'remove': {
                state.delete(action.venueName);
                return new Map(state);
            }
            default: return state;
        }
    }

    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map([
        ['The Bloom Pavilion', 0],
        ['Spark Space', 0],
        ['The Grand Table', 0]
    ]));

    const mockVenueRepo = [
        { vid: "001", name: 'The Bloom Pavilion', image: '/img/bloom.jpg' },
        { vid: "002", name: 'Spark Space', image: '/img/sparkspace.jpg' },
        { vid: "003", name: 'The Grand Table', image: '/img/grandtable.jpg' }
    ];

    return (
        <div>
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
                {mockVenueRepo.map((venue) => (
                    <Link href={`/venue/${venue.vid}`} className="w-1/5 min-w-[250px]" key={venue.vid}>
                        <Card 
                            venueName={venue.name} 
                            imgSrc={venue.image}
                            onRatingChange={(name: string, value: number) => dispatchRating({ type: 'add', venueName: name, rating: value })}
                        />
                    </Link>
                ))}
            </div>

            <div className="m-5">
                <h2 className="text-xl font-bold">Venue List with Ratings: {ratingMap.size}</h2>
                {Array.from(ratingMap).map(([name, rating]) => (
                    <div 
                        key={name} 
                        data-testid={name} 
                        onClick={() => dispatchRating({ type: 'remove', venueName: name, rating: 0 })} 
                        className="cursor-pointer hover:text-red-600"
                    >
                        {name}: {rating}
                    </div>
                ))}
            </div>
        </div>
    )
}