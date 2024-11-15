import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Heart } from "lucide-react";

const SingleCategoryDiv = ({ gameList }: { gameList: any }) => {

  const categoryName = gameList[0]?.categories?.en?.[0];

  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white">{categoryName}</h2>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <h1>VIEW ALL</h1>
            <Button
              variant="ghost"
              className="h-8 w-8 rounded-full text-black bg-yellow-400 hover:bg-yellow-300 "
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {gameList.slice(0, 5).map((game: any) => (
            <Card
              key={game.code}
              className="relative overflow-hidden rounded-xl border-none bg-transparent"
            >
              <Link href={game.url} className="w-[90%] group block">
                <div className=" relative aspect-square overflow-hidden rounded-xl">
                  <img src={game.assets.cover} alt="" className="h-[98%]" />
                  <button
                    className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <h3 className="my-2 text-sm text-center font-semibold text-white">
                  {game.name.en}
                </h3>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const GameCategoryGrid = ({ gameList }: { gameList: any }) => {
  return (
    <div>
      {1 > 0 ? (
        <SingleCategoryDiv gameList={gameList} />
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
};

export default GameCategoryGrid;
