import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Heart } from "lucide-react";

const SingleCategoryDiv = ({ gameList }: { gameList: any }) => {

  const categoryName = gameList[0]?.categories?.en?.[0];

  const routeToCategoryGames = () => {

  }

  return (
    <div className="
    lg:w-full lg:px-2 lg:py-5
    xl:w-full xl:px-2 xl:py-5">
      <div className="
      lg:mx-auto lg:max-w-7xl
      xl:mx-auto xl:max-w-7xl">
        <div className="
        lg:mb-6 lg:flex lg:items-center lg:justify-between
        xl:mb-6 xl:flex xl:items-center xl:justify-between">
          <div className="
          lg:ml-3 lg:flex lg:items-center lg:gap-2
          xl:ml-0 xl:flex xl:items-center xl:gap-2">
            <h2 className="
            lg:text-2xl lg:font-bold lg:text-white
            xl:text-2xl xl:font-bold xl:text-white">{categoryName}</h2>
          </div>
          <div className="
          lg:mr-3 lg:flex lg:justify-center lg:items-center lg:gap-x-4
          xl:mr-0 xl:flex xl:justify-center xl:items-center xl:gap-x-4">
            <h1>VIEW ALL</h1>
            <a
            href={`https://www.gamezop.com/en/${categoryName?.toLowerCase()}-games?int-nav=1&sessionStartPage=home-page`}
            target="_blank"
            >
              <Button
                variant="ghost"
                className="
                lg:h-8 lg:w-8 
                xl:h-8 xl:w-8 
                
                rounded-full text-black bg-yellow-400 hover:bg-yellow-300 "
              >
                <ChevronRight className="
                lg:h-5 lg:w-5
                xl:h-5 xl:w-5" />
              </Button>
            </a>
          </div>
        </div>
        <div className="
        lg:grid lg:grid-cols-5 lg:gap-4
        xl:grid xl:grid-cols-5 xl:gap-4">
          {gameList.slice(0, 5).map((game: any) => (
            <Card
              key={game.code}
              className="
              lg:relative lg:overflow-hidden lg:rounded-xl lg:border-none lg:bg-transparent
              xl:relative xl:overflow-hidden xl:rounded-xl xl:border-none xl:bg-transparent"
            >
              <Link href={game.url} className="
              lg:w-[95%] lg:group lg:block
              xl:w-[90%] xl:group xl:block">
                <div className=" 
                lg:relative lg:aspect-square lg:overflow-hidden lg:rounded-xl
                xl:relative xl:aspect-square xl:overflow-hidden xl:rounded-xl">
                  <img src={game.assets.cover} alt="" 
                  className="
                  lg:h-[98%] 
                  xl:h-[98%] 
                  
                  transition-all delay-75 ease-linear hover:scale-110 " />
                  <button
                    className="
                    lg:absolute lg:right-3 lg:top-3 lg:rounded-full lg:bg-black/50 lg:p-2 lg:text-white lg:transition-all lg:delay-75 lg:ease-linear lg:hover:text-red-500 lg:backdrop-blur-sm lg:hover:bg-black/70
                    xl:absolute xl:right-3 xl:top-3 xl:rounded-full xl:bg-black/50 xl:p-2 xl:text-white xl:transition-all xl:delay-75 xl:ease-linear xl:hover:text-red-500 xl:backdrop-blur-sm xl:hover:bg-black/70"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-5 w-5 " />
                  </button>
                </div>
                <h3 className="
                lg:my-2 lg:text-base lg:text-center lg:font-semibold lg:text-white
                xl:my-2 xl:text-base xl:text-center xl:font-semibold xl:text-white">
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
    <SingleCategoryDiv gameList={gameList} />
    // <div>
    //   {1 > 0 ? (
    //     <SingleCategoryDiv gameList={gameList} />
    //   ) : (
    //     <div> Loading... </div>
    //   )}
    // </div>
  );
};

export default GameCategoryGrid;
