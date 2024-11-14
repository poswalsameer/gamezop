import Image from "next/image";
import GameCategoryGrid from "./appComponents/GameCategoryGrid";
import Navbar from "./appComponents/Navbar";

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-[#0d1b2a] text-white flex flex-col gap-y-14 justify-center items-center ">
      <Navbar />

      <div className="h-full w-[98%] bg-[#102234] rounded-xl ">
        <GameCategoryGrid />
      </div>
    </div>
  );
}
