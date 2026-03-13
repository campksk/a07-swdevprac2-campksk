'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState } from 'react'

export default function Card({ venueName, imgSrc, onRatingChange }: 
    { venueName: string, imgSrc: string, onRatingChange: Function }) {
    
    const [value, setValue] = useState<number | null>(0);

    return (
        <InteractiveCard contentname={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Venue Picture' fill={true} className='object-cover rounded-t-lg' />
            </div>
            <div className='w-full h-[15%] p-[10px] font-semibold'>{venueName}</div>
            
            <div className='p-[10px] h-[15%]'>
                <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        if (newValue !== null) onRatingChange(venueName, newValue);
                    }}
                    onClick={(e)=>e.stopPropagation()}
                />
            </div>
        </InteractiveCard>
    )
}