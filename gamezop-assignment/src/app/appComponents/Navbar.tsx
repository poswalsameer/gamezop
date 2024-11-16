import React from 'react'
import Category from "./Category"
import SearchButton from "./SearchButton"

function Navbar() {

    const gameCategories = ["Action", "Adventure", "Arcade", "Puzzle", "Sports", "Strategy"];

    return (
        <div className='
        mt-5 px-6 h-20 w-[96%] bg-[#102234] rounded-lg flex justify-between items-center gap-x-3 shadow shadow-[#003566]
        sm:mt-5 sm:px-3 sm:h-28 sm:w-[96%] sm:bg-[#102234] sm:rounded-lg sm:flex sm:justify-between sm:items-center sm:gap-x-3 sm:shadow sm:shadow-[#003566]
        md:mt-5 md:px-7 md:h-28 md:w-[96%] md:bg-[#102234] md:rounded-lg md:flex md:justify-between md:items-center md:gap-x-3 md:shadow md:shadow-[#003566]
        lg:mt-5 lg:px-10 lg:h-28 lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:flex lg:justify-between lg:items-center lg:gap-x-5 lg:shadow lg:shadow-[#003566]
        xl:mt-5 xl:px-10 xl:h-28 xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:flex xl:justify-around xl:items-center xl:shadow xl:shadow-[#003566] ' >

            <div className='
            text-white text-base font-extrabold
            sm:text-white sm:text-sm sm:font-extrabold
            md:text-white md:text-base md:font-extrabold
            lg:text-white lg:text-xl lg:font-extrabold
            xl:text-white xl:text-2xl xl:font-extrabold' >
                Gamezop
            </div>

            <div className='
            flex justify-center items-center gap-x-2
            sm:flex sm:justify-center sm:items-center sm:gap-x-2
            md:flex md:justify-center md:items-center md:gap-x-3
            lg:flex lg:justify-center lg:items-center lg:gap-x-5
            xl:flex xl:justify-center xl:items-center xl:gap-x-5'
            
            id='categoryDiv'
            >
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
