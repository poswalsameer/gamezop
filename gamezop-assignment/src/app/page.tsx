'use client'

import React, { useEffect, useState } from "react";
import Banner from "./appComponents/Banner";
import Footer from "./appComponents/Footer";
import GameCategoryGrid from "./appComponents/GameCategoryGrid";
import Navbar from "./appComponents/Navbar";

interface game {
  code: string;
  url: string;
  name: {
    en: string;
    [key: string]: string;
  };
  isPortrait: boolean;
  description: {
    en: string;
    [key: string]: string;
  };
  gamePreviews: {
    en: string;
    [key: string]: string;
  };
  assets: {
    cover: string;
    brick: string;
    thumb: string;
    wall: string;
    square: string;
    screens: string[];
    coverTiny: string;
    brickTiny: string;
  };
  categories: {
    en: string[];
    [key: string]: string[];
  };
  tags: {
    en: string[];
    [key: string]: string[];
  };
  width: number;
  height: number;
  colorMuted: string;
  colorVibrant: string;
  privateAllowed: boolean;
  rating: number;
  numberOfRatings: number;
  gamePlays: number;
  hasIntegratedAds: boolean;
}


export default function Home() {

  const [gameList, setGameList] = useState<[]>([]);
  const [actionGames, setActionGames] = useState<game[]>([]);
  const [adventureGames, setAdventureGames] = useState<game[]>([]);
  const [arcadeGames, setArcadeGames] = useState<game[]>([]);
  const [puzzleGames, setPuzzleGames] = useState<game[]>([]);
  const [sportsGames, setSportsGames] = useState<game[]>([]);
  const [strategyGames, setStrategyGames] = useState<game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGameData = () => {

    const apiURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

    if( !apiURL ){
      throw new Error("API URL not found");
    }

    setLoading(true);
  
    fetch(apiURL)
    .then((data) => data.json())
    .then( (data) => (data.games) )
    .then((data) => {
      const first200Games = data.slice(0, 200);
      setGameList(first200Games);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      setLoading(false);
    })
    
  }

  useEffect( () => {
    fetchGameData();
  }, [])

  useEffect(() => {
    if (gameList.length > 0) {
      console.log(gameList); 

      const actionGamesArr: any[] = [];
      const adventureGamesArr: any[] = [];
      const arcadeGamesArr: any[] = [];
      const puzzleGamesArr: any[] = [];
      const sportsGamesArr: any[] = [];
      const strategyGamesArr: any[] = [];

      // SETTING THE GAME INTO STATES CATEGORY-WISE
      gameList.forEach((game: any) => {
        game.categories.en.forEach((category: string) => {
          switch (category) {
            case "Action":
              actionGamesArr.push(game);
              break;
            case "Adventure":
              adventureGamesArr.push(game);
              break;
            case "Arcade":
              arcadeGamesArr.push(game);
              break;
            case "Puzzle":
              puzzleGamesArr.push(game);
              break;
            case "Sports":
              sportsGamesArr.push(game);
              break;
            case "Strategy":
              strategyGamesArr.push(game);
              break;
            default:
              break;
          }
        });
      });

      setActionGames(actionGamesArr);
      setAdventureGames(adventureGamesArr);
      setArcadeGames(arcadeGamesArr);
      setPuzzleGames(puzzleGamesArr);
      setSportsGames(sportsGamesArr);
      setStrategyGames(strategyGamesArr);
    }
  }, [gameList]);

  return (
    <div className=" 
    min-h-screen w-full bg-[#0d1b2a] text-white flex flex-col gap-y-14 justify-center items-center
    sm:min-h-screen sm:w-full sm:bg-[#0d1b2a] sm:text-white sm:flex sm:flex-col sm:gap-y-14 sm:justify-center sm:items-center
    md:min-h-screen md:w-full md:bg-[#0d1b2a] md:text-white md:flex md:flex-col md:gap-y-14 md:justify-center md:items-center
    lg:min-h-screen lg:w-full lg:bg-[#0d1b2a] lg:text-white lg:flex lg:flex-col lg:gap-y-14 lg:justify-center lg:items-center
    xl:min-h-screen xl:w-full xl:bg-[#0d1b2a] xl:text-white xl:flex xl:flex-col xl:gap-y-14 xl:justify-center xl:items-center ">

      <Navbar />

      { loading === true ? (
        <div className="
        h-[80vh] w-full bg-[#0d1b2a] text-white flex flex-col gap-y-5 justify-center items-center
        sm:h-[80vh] sm:w-full sm:bg-[#0d1b2a] sm:text-white sm:flex sm:flex-col sm:gap-y-5 sm:justify-center sm:items-center
        md:h-[80vh] md:w-full md:bg-[#0d1b2a] md:text-white md:flex md:flex-col md:gap-y-5 md:justify-center md:items-center
        lg:h-[80vh] lg:w-full lg:bg-[#0d1b2a] lg:text-white lg:flex lg:flex-col lg:gap-y-5 lg:justify-center lg:items-center
        xl:h-[80vh] xl:w-full xl:bg-[#0d1b2a] xl:text-white xl:flex xl:flex-col xl:gap-y-5 xl:justify-center xl:items-center ">
          <div className="
          h-[33%] w-[98%] bg-[#102234] rounded-lg
          sm:h-[33%] sm:w-[98%] sm:bg-[#102234] sm:rounded-xl
          md:h-[33%] md:w-[98%] md:bg-[#102234] md:rounded-xl
          lg:h-[33%] lg:w-[98%] lg:bg-[#102234] lg:rounded-xl
          xl:h-[33%] xl:w-[98%] xl:bg-[#102234] xl:rounded-xl "></div>
          <div className="
          h-[33%] w-[98%] bg-[#102234] rounded-lg
          sm:h-[33%] sm:w-[98%] sm:bg-[#102234] sm:rounded-xl
          md:h-[33%] md:w-[98%] md:bg-[#102234] md:rounded-xl
          lg:h-[33%] lg:w-[98%] lg:bg-[#102234] lg:rounded-xl
          xl:h-[33%] xl:w-[98%] xl:bg-[#102234] xl:rounded-xl "></div>
          <div className="
          h-[33%] w-[98%] bg-[#102234] rounded-lg
          sm:h-[33%] sm:w-[98%] sm:bg-[#102234] sm:rounded-xl
          md:h-[33%] md:w-[98%] md:bg-[#102234] md:rounded-xl
          lg:h-[33%] lg:w-[98%] lg:bg-[#102234] lg:rounded-xl
          xl:h-[33%] xl:w-[98%] xl:bg-[#102234] xl:rounded-xl "></div>
        </div>
      ) : 
      (
        <>
          {/* ACTION GAMES */}
          <div className="
          h-full w-[96%] bg-[#102234] rounded-lg border border-[#219ebc]
          sm:h-full sm:w-[96%] sm:bg-[#102234] sm:rounded-lg sm:border sm:border-[#219ebc]
          md:h-full md:w-[96%] md:bg-[#102234] md:rounded-lg md:border md:border-[#219ebc]
          lg:h-full lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:border lg:border-[#219ebc]
          xl:h-full xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:border xl:border-[#219ebc] ">
            <GameCategoryGrid gameList={actionGames} />
          </div>

          {/* ADVENTURE GAMES */}
          <div className="
          h-full w-[96%] bg-[#102234] rounded-lg border border-[#219ebc]
          sm:h-full sm:w-[96%] sm:bg-[#102234] sm:rounded-lg sm:border sm:border-[#219ebc]
          md:h-full md:w-[96%] md:bg-[#102234] md:rounded-lg md:border md:border-[#219ebc]
          lg:h-full lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:border lg:border-[#219ebc]
          xl:h-full xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:border xl:border-[#219ebc] ">
            <GameCategoryGrid gameList={adventureGames} />
          </div>

          {/* BANNERS */}
          <div className="
          h-full w-[96%]
          sm:h-full sm:w-[96%]
          md:h-full md:w-[96%]
          lg:h-full lg:w-[96%]
          xl:h-full xl:w-[96%]">
            <Banner />
          </div>

          {/* ARCADE GAMES */}
          <div className="
          h-full w-[96%] bg-[#102234] rounded-lg border border-[#219ebc]
          sm:h-full sm:w-[96%] sm:bg-[#102234] sm:rounded-lg sm:border sm:border-[#219ebc]
          md:h-full md:w-[96%] md:bg-[#102234] md:rounded-lg md:border md:border-[#219ebc]
          lg:h-full lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:border lg:border-[#219ebc]
          xl:h-full xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:border xl:border-[#219ebc] ">
            <GameCategoryGrid gameList={arcadeGames} />
          </div>

          {/* STRATEGY GAMES */}
          <div className="
          h-full w-[96%] bg-[#102234] rounded-lg border border-[#219ebc]
          sm:h-full sm:w-[96%] sm:bg-[#102234] sm:rounded-lg sm:border sm:border-[#219ebc]
          md:h-full md:w-[96%] md:bg-[#102234] md:rounded-lg md:border md:border-[#219ebc]
          lg:h-full lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:border lg:border-[#219ebc]
          xl:h-full xl:w-[96%] xl:bg-[#102234] xl:border xl:border-[#219ebc] xl:rounded-lg ">
            <GameCategoryGrid gameList={strategyGames} />
          </div>
        </>
      ) }

      <Footer />
      

    </div>
  );
}
