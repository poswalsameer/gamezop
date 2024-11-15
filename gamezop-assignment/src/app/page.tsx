'use client'

import React, { useEffect, useState } from "react";
import Banner from "./appComponents/Banner";
import Footer from "./appComponents/Footer";
import GameCategoryGrid from "./appComponents/GameCategoryGrid";
import Navbar from "./appComponents/Navbar";

export default function Home() {

  const [gameList, setGameList] = useState<[]>([]);
  const [actionGames, setActionGames] = useState<any[]>([]);
  const [adventureGames, setAdventureGames] = useState<any[]>([]);
  const [arcadeGames, setArcadeGames] = useState<any[]>([]);
  const [puzzleGames, setPuzzleGames] = useState<any[]>([]);
  const [sportsGames, setSportsGames] = useState<any[]>([]);
  const [strategyGames, setStrategyGames] = useState<any[]>([]);
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
      console.log(gameList); // Log the fetched games once the list is available

      const actionGamesArr: any[] = [];
      const adventureGamesArr: any[] = [];
      const arcadeGamesArr: any[] = [];
      const puzzleGamesArr: any[] = [];
      const sportsGamesArr: any[] = [];
      const strategyGamesArr: any[] = [];

      // Categorize games once the gameList is fetched
      gameList.forEach((game: any) => {
        game.categories.en.forEach((category: any) => {
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

      // Update state with categorized games
      setActionGames(actionGamesArr);
      setAdventureGames(adventureGamesArr);
      setArcadeGames(arcadeGamesArr);
      setPuzzleGames(puzzleGamesArr);
      setSportsGames(sportsGamesArr);
      setStrategyGames(strategyGamesArr);
    }
  }, [gameList]);

  // useEffect(() => {
  //   // Log after the categorized games state changes
  //   console.log("Action Games:", actionGames);
  //   console.log("Adventure Games:", adventureGames);
  //   console.log("Arcade Games:", arcadeGames);
  //   console.log("Puzzle Games:", puzzleGames);
  //   console.log("Sports Games:", sportsGames);
  //   console.log("Strategy Games:", strategyGames);
  // }, [actionGames, adventureGames, arcadeGames, puzzleGames, sportsGames, strategyGames]);

  return (
    <div className=" 
    lg:min-h-screen lg:w-full lg:bg-[#0d1b2a] lg:text-white lg:flex lg:flex-col lg:gap-y-14 lg:justify-center lg:items-center
    xl:min-h-screen xl:w-full xl:bg-[#0d1b2a] xl:text-white xl:flex xl:flex-col xl:gap-y-14 xl:justify-center xl:items-center ">
      
      <Navbar />

      { loading === true ? (
        // <LoadingComponent />
        <div className="
        lg:h-[80vh] lg:w-full lg:bg-[#0d1b2a] lg:text-white lg:flex lg:flex-col lg:gap-y-5 lg:justify-center lg:items-center
        xl:h-[80vh] xl:w-full xl:bg-[#0d1b2a] xl:text-white xl:flex xl:flex-col xl:gap-y-5 xl:justify-center xl:items-center ">
          <div className="
          lg:h-[33%] lg:w-[98%] lg:bg-[#102234] lg:rounded-xl
          xl:h-[33%] xl:w-[98%] xl:bg-[#102234] xl:rounded-xl "></div>
          <div className="
          lg:h-[33%] lg:w-[98%] lg:bg-[#102234] lg:rounded-xl
          xl:h-[33%] xl:w-[98%] xl:bg-[#102234] xl:rounded-xl "></div>
          <div className="
          lg:h-[33%] lg:w-[98%] lg:bg-[#102234] lg:rounded-xl
          xl:h-[33%] xl:w-[98%] xl:bg-[#102234] xl:rounded-xl "></div>
        </div>
      ) : 
      (
        <>
          {/* ACTION GAMES */}
          <div className="
          lg:h-full lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:border lg:border-[#219ebc]
          xl:h-full xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:border xl:border-[#219ebc] ">
            <GameCategoryGrid gameList={actionGames} />
          </div>

          {/* ADVENTURE GAMES */}
          <div className="
          lg:h-full lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:border lg:border-[#219ebc]
          xl:h-full xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:border xl:border-[#219ebc] ">
            <GameCategoryGrid gameList={adventureGames} />
          </div>

          <div className="
          lg:h-full lg:w-[96%]
          xl:h-full xl:w-[96%]">
            <Banner />
          </div>

          {/* ARCADE GAMES */}
          <div className="
          lg:h-full lg:w-[96%] lg:bg-[#102234] lg:rounded-lg lg:border lg:border-[#219ebc]
          xl:h-full xl:w-[96%] xl:bg-[#102234] xl:rounded-lg xl:border xl:border-[#219ebc] ">
            <GameCategoryGrid gameList={arcadeGames} />
          </div>

          {/* STRATEGY GAMES */}
          <div className="
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
