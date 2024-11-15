import React from 'react'

export default function Category({category}: {category: string}){
    return (
        <div className='
        lg:h-10 lg:w-24 lg:bg-yellow-400 lg:text-[#0d1b2a] lg:font-bold lg:flex lg:justify-center lg:items-center lg:text-sm lg:rounded-full lg:border lg:border-[#0d1b2a]
        xl:h-10 xl:w-32 xl:bg-yellow-400 xl:text-[#0d1b2a] xl:font-bold xl:flex xl:justify-center xl:items-center xl:text-base xl:rounded-full xl:border xl:border-[#0d1b2a] 
        
        cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1' >
            {category}
        </div>
    )
}