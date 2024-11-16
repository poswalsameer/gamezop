'use client'

import { useState, useRef, useEffect } from "react"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

export default function SearchButton(){
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
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

  return (
    <div className="
    flex justify-center items-center
    sm:flex sm:justify-center sm:items-center
    md:flex md:justify-center md:items-center
    lg:flex lg:justify-center lg:items-center
    xl:flex xl:justify-center xl:items-center">
      <form className="relative sm:relative md:relative lg:relative xl:relative">
        {isExpanded ? (
          <div className="relative sm:relative md:relative lg:relative xl:relative">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="
              pl-2 pr-2 py-2 h-8 w-32 text-xs rounded-full border-2 border-gray-300 focus:border-blue-800 focus:outline-none transition-all duration-300 ease-in-out
              sm:pl-2 sm:pr-2 sm:py-2 sm:h-8 sm:w-20 sm:rounded-full sm:border-2 sm:border-gray-300 sm:focus:border-blue-800 sm:focus:outline-none sm:transition-all sm:duration-300 sm:ease-in-out
              md:pl-5 md:pr-5 md:py-2 md:h-10 md:w-28 md:text-base md:rounded-full md:border-2 md:border-gray-300 md:focus:border-blue-800 md:focus:outline-none md:transition-all md:duration-300 md:ease-in-out
              lg:pl-5 lg:pr-5 lg:py-2 lg:h-10 lg:w-28 lg:rounded-full lg:border-2 lg:border-gray-300 lg:focus:border-blue-800 lg:focus:outline-none lg:transition-all lg:duration-300 lg:ease-in-out
              xl:pl-10 xl:pr-10 xl:py-2 xl:h-10 xl:w-56 xl:rounded-full xl:border-2 xl:border-gray-300 xl:focus:border-blue-800 xl:focus:outline-none xl:transition-all xl:duration-300 xl:ease-in-out"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleCollapse}
              className="
              hover:bg-transparent absolute right-2 top-1/2 transform -translate-y-1/2
              sm:hover:bg-transparent sm:absolute sm:right-2 sm:top-1/2 sm:transform sm:-translate-y-1/2
              md:hover:bg-transparent md:absolute md:right-2 md:top-1/2 md:transform md:-translate-y-1/2
              lg:hover:bg-transparent lg:absolute lg:right-2 lg:top-1/2 lg:transform lg:-translate-y-1/2
              xl:hover:bg-transparent xl:absolute xl:right-2 xl:top-1/2 xl:transform xl:-translate-y-1/2"
            >
              <X className="
              h-5 w-5 text-gray-500
              sm:h-5 sm:w-5 sm:text-gray-500
              md:h-5 md:w-5 md:text-gray-500
              lg:h-5 lg:w-5 lg:text-gray-500
              xl:h-4 xl:w-4 xl:text-gray-500" />
              <span className="sr-only sm:sr-only md:sr-only lg:sr-only xl:sr-only">Close</span>
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            size="icon"
            className="
            rounded-full h-10 w-10
            sm:rounded-full sm:h-10 sm:w-10
            md:rounded-full md:h-10 md:w-10
            lg:rounded-full lg:h-10 lg:w-10
            xl:rounded-full xl:h-10 xl:w-10"
            onClick={handleExpand}
          >
            <Search className="
            h-5 w-5
            sm:h-5 sm:w-5
            md:h-5 md:w-5
            lg:h-5 lg:w-5
            xl:h-5 xl:w-5" />
            <span className="sr-only sm:sr-only md:sr-only lg:sr-only xl:sr-only">Expand search</span>
          </Button>
        )}
      </form>
    </div>
  )
}