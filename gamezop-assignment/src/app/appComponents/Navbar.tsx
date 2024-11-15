import Link from 'next/link';
import React from 'react'
import Category from "./Category"
import SearchButton from "./SearchButton"

function Navbar() {

    const gameCategories = ["Action", "Adventure", "Arcade", "Puzzle", "Sports", "Strategy"];

    return (
        <div className='
        lg:mt-5 lg:px-10 lg:h-28 lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:flex lg:justify-between lg:items-center lg:gap-x-5 lg:shadow lg:shadow-[#003566]
        xl:mt-5 xl:px-10 xl:h-28 xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:flex xl:justify-around xl:items-center xl:shadow xl:shadow-[#003566] ' >

            <div className='
            lg:text-white lg:text-xl lg:font-extrabold
            xl:text-white xl:text-2xl xl:font-extrabold' >
                Gamezop
            </div>

            <div className='
            lg:flex lg:justify-center lg:items-center lg:gap-x-5
            xl:flex xl:justify-center xl:items-center xl:gap-x-5'>
                { gameCategories.map( (currCategory, idx) =>
                    <a
                    key={idx}
                    href={`https://www.gamezop.com/en/${currCategory.toLowerCase()}-games?int-nav=1&sessionStartPage=home-page`}
                    target="_blank"
                    > 
                        <Category category={currCategory} />
                    </a>
                )}
            </div>

            <div>
                <SearchButton />
            </div>
        
        </div>
  )
}

export default Navbar
