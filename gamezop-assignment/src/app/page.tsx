'use client'

import React, { use, useEffect, useState } from "react";
import GameCategoryGrid from "./appComponents/GameCategoryGrid";
import Navbar from "./appComponents/Navbar";
import { Suspense } from "react";

function LoadingComponent(){

  return (
    <div className=" min-h-screen w-full bg-[#0d1b2a] text-white flex flex-col gap-y-5 justify-center items-center ">
      <div className="h-[33%] w-[98%] bg-[#102234] rounded-xl "></div>
      <div className="h-[33%] w-[98%] bg-[#102234] rounded-xl "></div>
      <div className="h-[33%] w-[98%] bg-[#102234] rounded-xl "></div>
    </div>
  )

}

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
  
    fetch(apiURL)
    .then((data) => data.json())
    .then( (data) => (data.games) )
    .then((data) => {
      const first200Games = data.slice(0, 200);
      setGameList(first200Games);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    
  }

  useEffect( () => {
    setLoading(true);
    fetchGameData();
    setLoading(false);
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

  useEffect(() => {
    // Log after the categorized games state changes
    console.log("Action Games:", actionGames);
    console.log("Adventure Games:", adventureGames);
    console.log("Arcade Games:", arcadeGames);
    console.log("Puzzle Games:", puzzleGames);
    console.log("Sports Games:", sportsGames);
    console.log("Strategy Games:", strategyGames);
  }, [actionGames, adventureGames, arcadeGames, puzzleGames, sportsGames, strategyGames]);

  return (
    <div className=" min-h-screen w-full bg-[#0d1b2a] text-white flex flex-col gap-y-14 justify-center items-center ">
      <Navbar />

      { loading === true ? (
        <LoadingComponent />
      ) : 
      (
        <>
          {/* ACTION GAMES */}
          <div className="h-full w-[98%] bg-[#102234] rounded-xl ">
            <GameCategoryGrid gameList={actionGames} />
          </div>

          {/* ADVENTURE GAMES */}
          <div className="h-full w-[98%] bg-[#102234] rounded-xl ">
            <GameCategoryGrid gameList={adventureGames} />
          </div>

          {/* ARCADE GAMES */}
          <div className="h-full w-[98%] bg-[#102234] rounded-xl ">
            <GameCategoryGrid gameList={arcadeGames} />
          </div>

          {/* STRATEGY GAMES */}
          <div className="h-full w-[98%] bg-[#102234] rounded-xl ">
            <GameCategoryGrid gameList={strategyGames} />
          </div>
        </>
      ) }

      

    </div>
  );
}
