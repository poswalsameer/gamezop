import React from 'react'

export default function Category({category}: {category: string}){
    return (
        <div className='
        sm:h-7 sm:w-16 sm:bg-yellow-400 sm:text-[#0d1b2a] sm:font-bold sm:flex sm:justify-center sm:items-center sm:text-[0.5rem] sm:rounded-full sm:border sm:border-[#0d1b2a]
        md:h-8 md:w-16 md:bg-yellow-400 md:text-[#0d1b2a] md:font-bold md:flex md:justify-center md:items-center md:text-[0.5rem] md:rounded-full md:border md:border-[#0d1b2a]
        lg:h-10 lg:w-24 lg:bg-yellow-400 lg:text-[#0d1b2a] lg:font-bold lg:flex lg:justify-center lg:items-center lg:text-sm lg:rounded-full lg:border lg:border-[#0d1b2a]
        xl:h-10 xl:w-32 xl:bg-yellow-400 xl:text-[#0d1b2a] xl:font-bold xl:flex xl:justify-center xl:items-center xl:text-base xl:rounded-full xl:border xl:border-[#0d1b2a] 
        
        cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1' >
            {category}
        </div>
    )
}