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
    <div className="flex justify-center items-center">
      <form onSubmit={handleSearch} className="relative">
        {isExpanded ? (
          <div className="relative">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 pr-10 py-2 h-10 w-56 rounded-full border-2 border-gray-300 focus:border-blue-800 focus:outline-none transition-all duration-300 ease-in-out"
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="hover:bg-transparent absolute left-2 top-1/2 transform -translate-y-1/2"
            >
              <Search className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleCollapse}
              className="hover:bg-transparent absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <X className="h-4 w-4 text-gray-500" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            size="icon"
            className="rounded-full h-10 w-10"
            onClick={handleExpand}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Expand search</span>
          </Button>
        )}
      </form>
    </div>
  )
}