import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Heart } from 'lucide-react'

export default function GameCategoryGrid() {
  const games = [
    {
      id: 1,
      title: "Rocket Man",
      image: "/placeholder.svg?height=400&width=400",
      href: "#rocket-man"
    },
    {
      id: 2,
      title: "Bottle Shoot",
      image: "/placeholder.svg?height=400&width=400",
      href: "#bottle-shoot"
    },
    {
      id: 3,
      title: "Boulder Blast",
      image: "/placeholder.svg?height=400&width=400",
      href: "#boulder-blast"
    },
    {
      id: 4,
      title: "Gerbil Jump",
      image: "/placeholder.svg?height=400&width=400",
      href: "#gerbil-jump"
    },
    {
      id: 5,
      title: "Gun Master",
      image: "/placeholder.svg?height=400&width=400",
      href: "#gun-master"
    }
  ]

  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            
            <h2 className="text-2xl font-bold text-white">Action</h2>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <h1>
                VIEW ALL
            </h1>
            <Button variant="ghost" className="h-8 w-8 rounded-full text-black bg-yellow-400 hover:bg-yellow-300 ">
                <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {games.map((game) => (
            <Card
              key={game.id}
              className="relative overflow-hidden rounded-xl bg-transparent"
            >
              <Link href={game.href} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={game.image}
                    alt={game.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                    sizes="(max-width: 1200px) 20vw, 16vw"
                  />
                  <button
                    className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <h3 className="my-2 text-sm text-center font-semibold text-white">{game.title}</h3>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}