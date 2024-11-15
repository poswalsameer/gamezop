'use client'

import { useState, useRef, useEffect } from "react"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

export default function SearchButton(){
    const [isExpanded, setIsExpanded] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      if (isExpanded && inputRef.current) {
        inputRef.current.focus()
      }
    }, [isExpanded])
  
    const handleExpand = () => {
      setIsExpanded(true)
    }
  
    const handleCollapse = () => {
      setIsExpanded(false)
      setSearchValue('')
    }
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Searching for:', searchValue)
      // Implement your search logic here
    }

  return (
    <div className="
    lg:flex lg:justify-center lg:items-center
    xl:flex xl:justify-center xl:items-center">
      <form onSubmit={handleSearch} className="lg:relative xl:relative">
        {isExpanded ? (
          <div className="lg:relative xl:relative">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="
              lg:pl-5 lg:pr-5 lg:py-2 lg:h-10 lg:w-28 lg:rounded-full lg:border-2 lg:border-gray-300 lg:focus:border-blue-800 lg:focus:outline-none lg:transition-all lg:duration-300 lg:ease-in-out
              xl:pl-10 xl:pr-10 xl:py-2 xl:h-10 xl:w-56 xl:rounded-full xl:border-2 xl:border-gray-300 xl:focus:border-blue-800 xl:focus:outline-none xl:transition-all xl:duration-300 xl:ease-in-out"
            />
            {/* <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="
              lg:hover:bg-transparent lg:absolute lg:left-2 lg:top-1/2 lg:transform lg:-translate-y-1/2
              xl:hover:bg-transparent xl:absolute xl:left-2 xl:top-1/2 xl:transform xl:-translate-y-1/2"
            >
              <Search className="
              lg:h-5 lg:w-5 lg:text-gray-500
              xl:h-5 xl:w-5 xl:text-gray-500" />
              <span className="lg:sr-only xl:sr-only">Search</span>
            </Button> */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleCollapse}
              className="
              lg:hover:bg-transparent lg:absolute lg:right-2 lg:top-1/2 lg:transform lg:-translate-y-1/2
              xl:hover:bg-transparent xl:absolute xl:right-2 xl:top-1/2 xl:transform xl:-translate-y-1/2"
            >
              <X className="
              lg:h-5 lg:w-5 lg:text-gray-500
              xl:h-4 xl:w-4 xl:text-gray-500" />
              <span className="lg:sr-only xl:sr-only">Close</span>
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            size="icon"
            className="
            lg:rounded-full lg:h-10 lg:w-10
            xl:rounded-full xl:h-10 xl:w-10"
            onClick={handleExpand}
          >
            <Search className="
            lg:h-5 lg:w-5
            xl:h-5 xl:w-5" />
            <span className="lg:sr-only xl:sr-only">Expand search</span>
          </Button>
        )}
      </form>
    </div>
  )
}