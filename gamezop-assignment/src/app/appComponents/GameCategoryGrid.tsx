import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Heart } from "lucide-react";

const SingleCategoryDiv = ({ gameList }: { gameList: any }) => {

  const categoryName = gameList[0]?.categories?.en?.[0];

  return (
    <div className="
    w-full px-2 py-5
    sm:w-full sm:px-2 sm:py-5
    md:w-full md:px-2 md:py-5
    lg:w-full lg:px-2 lg:py-5
    xl:w-full xl:px-2 xl:py-5">
      <div className="
      mx-auto max-w-7xl
      sm:mx-auto sm:max-w-7xl
      md:mx-auto md:max-w-7xl
      lg:mx-auto lg:max-w-7xl
      xl:mx-auto xl:max-w-7xl">
        <div className="
        mb-4 flex items-center justify-between
        sm:mb-6 sm:flex sm:items-center sm:justify-between
        md:mb-6 md:flex md:items-center md:justify-between
        lg:mb-6 lg:flex lg:items-center lg:justify-between
        xl:mb-6 xl:flex xl:items-center xl:justify-between">
          <div className="
          ml-3 flex items-center gap-2
          sm:ml-3 sm:flex sm:items-center sm:gap-2
          md:ml-3 md:flex md:items-center md:gap-2
          lg:ml-3 lg:flex lg:items-center lg:gap-2
          xl:ml-0 xl:flex xl:items-center xl:gap-2">
            <h2 className="
            text-sm font-bold text-white
            sm:text-2xl sm:font-bold sm:text-white
            md:text-2xl md:font-bold md:text-white
            lg:text-2xl lg:font-bold lg:text-white
            xl:text-2xl xl:font-bold xl:text-white">{categoryName}</h2>
          </div>
          <div className="
          mr-3 flex justify-center items-center gap-x-4
          sm:mr-3 sm:flex sm:justify-center sm:items-center sm:gap-x-4
          md:mr-3 md:flex md:justify-center md:items-center md:gap-x-4
          lg:mr-3 lg:flex lg:justify-center lg:items-center lg:gap-x-4
          xl:mr-0 xl:flex xl:justify-center xl:items-center xl:gap-x-4">
            <h1 className=" text-sm sm:text-2xl font-bold " >VIEW ALL</h1>
            <a
            href={`https://www.gamezop.com/en/${categoryName?.toLowerCase()}-games?int-nav=1&sessionStartPage=home-page`}
            target="_blank"
            >
              <Button
                variant="ghost"
                className="
                h-8 w-8 
                sm:h-8 sm:w-8 
                md:h-8 md:w-8 
                lg:h-8 lg:w-8 
                xl:h-8 xl:w-8 
                
                rounded-full text-black bg-yellow-400 hover:bg-yellow-300 "
              >
                <ChevronRight className="
                h-4 w-4
                sm:h-5 sm:w-5
                md:h-5 md:w-5
                lg:h-5 lg:w-5
                xl:h-5 xl:w-5" />
              </Button>
            </a>
          </div>
        </div>
        <div className="
        grid grid-cols-5 gap-3
        sm:grid sm:grid-cols-5 sm:gap-4
        md:grid md:grid-cols-5 md:gap-4
        lg:grid lg:grid-cols-5 lg:gap-4
        xl:grid xl:grid-cols-5 xl:gap-4">
          {gameList.slice(0, 5).map((game: any) => (
            <Card
              key={game.code}
              className="
              relative overflow-hidden rounded-md border-none bg-transparent
              sm:relative sm:overflow-hidden sm:rounded-md sm:border-none sm:bg-transparent
              md:relative md:overflow-hidden md:rounded-xl md:border-none md:bg-transparent
              lg:relative lg:overflow-hidden lg:rounded-xl lg:border-none lg:bg-transparent
              xl:relative xl:overflow-hidden xl:rounded-xl xl:border-none xl:bg-transparent"
            >
              <Link href={game.url} className="
              w-[95%] group block
              sm:w-[95%] sm:group sm:block
              md:w-[95%] md:group md:block
              lg:w-[95%] lg:group lg:block
              xl:w-[90%] xl:group xl:block">
                <div className=" 
                relative aspect-square overflow-hidden rounded-md
                sm:relative sm:aspect-square sm:overflow-hidden sm:rounded-md
                md:relative md:aspect-square md:overflow-hidden md:rounded-xl
                lg:relative lg:aspect-square lg:overflow-hidden lg:rounded-xl
                xl:relative xl:aspect-square xl:overflow-hidden xl:rounded-xl">
                  <img src={game.assets.cover} alt="" 
                  className="
                  h-[98%] 
                  sm:h-[98%] 
                  md:h-[98%] 
                  lg:h-[98%] 
                  xl:h-[98%] 
                  
                  transition-all delay-75 ease-linear hover:scale-110 " />
                  <button
                    className="
                    absolute right-1 top-1 rounded-full bg-black/50 p-1 text-white transition-all delay-75
                    sm:absolute sm:right-3 sm:top-3 sm:rounded-full sm:bg-black/50 sm:p-2 sm:text-white sm:transition-all sm:delay-75
                    md:absolute md:right-3 md:top-3 md:rounded-full md:bg-black/50 md:p-2 md:text-white md:transition-all md:delay-75 md:ease-linear md:hover:text-red-500 md:backdrop-blur-sm md:hover:bg-black/70
                    lg:absolute lg:right-3 lg:top-3 lg:rounded-full lg:bg-black/50 lg:p-2 lg:text-white lg:transition-all lg:delay-75 lg:ease-linear lg:hover:text-red-500 lg:backdrop-blur-sm lg:hover:bg-black/70
                    xl:absolute xl:right-3 xl:top-3 xl:rounded-full xl:bg-black/50 xl:p-2 xl:text-white xl:transition-all xl:delay-75 xl:ease-linear xl:hover:text-red-500 xl:backdrop-blur-sm xl:hover:bg-black/70"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-2 w-2 sm:h-3 sm:w-3 md:h-5 md:w-5 " />
                  </button>
                </div>
                <h3 className="
                my-2 text-[0.4rem] text-center font-semibold text-white
                sm:my-2 sm:text-xs sm:text-center sm:font-semibold sm:text-white
                md:my-2 md:text-base md:text-center md:font-semibold md:text-white
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
  );
};

export default GameCategoryGrid;
