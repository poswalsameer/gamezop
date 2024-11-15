import React from 'react'
import Category from "./Category"
import SearchButton from "./SearchButton"

function Navbar() {

    const gameCategories = ["Action", "Adventure", "Arcade", "Puzzle", "Sports", "Strategy"];

    return (
        <div className=' mt-10 px-10 h-28 w-[98%] bg-[#102234] rounded-xl flex justify-evenly items-center ' >

            <div className='text-white text-2xl font-extrabold' >
                Gamezop
            </div>

            { gameCategories.map( (currCategory, idx) => 
                <Category key={idx} category={currCategory} />
            )}

            <div>
                <SearchButton />
            </div>
        
        </div>
  )
}

export default Navbar
