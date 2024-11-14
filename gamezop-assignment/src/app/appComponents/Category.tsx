import React from 'react'

export default function Category({category}: {category: string}){
    return (
        <div className='h-10 w-32 bg-yellow-400 text-[#0d1b2a] font-bold flex justify-center items-center rounded-full border border-[#0d1b2a]' >
            {category}
        </div>
    )
}