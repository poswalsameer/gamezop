import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="
    flex flex-row gap-4 p-4 w-full overflow-x-auto
    sm:flex sm:flex-row sm:gap-4 sm:p-4 sm:w-full sm:overflow-x-auto
    md:flex md:flex-row md:gap-4 md:p-4 md:w-full md:overflow-x-auto">
      {/* Game Selection Banner */}
      <Card className="
      relative overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 border-none min-w-[150px] flex-1
      sm:relative sm:overflow-hidden sm:bg-gradient-to-br sm:from-orange-400 sm:to-orange-500 sm:border-none sm:min-w-[240px] sm:flex-1
      md:relative md:overflow-hidden md:bg-gradient-to-br md:from-orange-400 md:to-orange-500 md:border-none md:min-w-[300px] md:flex-1">
        <div className="
        absolute inset-0 flex
        sm:absolute sm:inset-0 sm:flex
        md:absolute md:inset-0 md:flex">
          <div className="
          w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-orange-300/50
          sm:w-full sm:h-full sm:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] sm:from-orange-300/50
          md:w-full md:h-full md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] md:from-orange-300/50" />
        </div>
        {/* Light Bulb Border */}
        <div className="
        absolute inset-0 p-1
        sm:absolute sm:inset-0 sm:p-1
        md:absolute md:inset-0 md:p-1">
          <div className="
          border-[6px] border-dashed border-yellow-200/30 w-full h-full rounded-lg
          sm:border-[6px] sm:border-dashed sm:border-yellow-200/30 sm:w-full sm:h-full sm:rounded-lg
          md:border-[6px] md:border-dashed md:border-yellow-200/30 md:w-full md:h-full md:rounded-lg" />
        </div>
        <div className="
        relative p-6 flex items-center justify-between h-full
        sm:relative sm:p-6 sm:flex sm:items-center sm:justify-between sm:h-full
        md:relative md:p-6 md:flex md:items-center md:justify-between md:h-full">
          <div className="
          space-y-4
          sm:space-y-4
          md:space-y-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white max-w-[200px]">
              Randomly Select from 350+ Games
            </h2>
            <Button
              className="
              w-24 px-8
              sm:px-8
              md:px-8
              

              bg-[#4a0404] hover:bg-[#3a0303] text-white font-semibold "
              size="sm"
            >
              PLAY NOW
            </Button>
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
          </div>
        </div>
      </Card>

      {/* Quiz Banner */}
      <Card className="
      relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-700 border-none min-w-[150px] flex-1
      sm:relative sm:overflow-hidden sm:bg-gradient-to-br sm:from-purple-600 sm:to-purple-700 sm:border-none sm:min-w-[250px] sm:flex-1
      md:relative md:overflow-hidden md:bg-gradient-to-br md:from-purple-600 md:to-purple-700 md:border-none md:min-w-[300px] md:flex-1">
        <div className="
        absolute inset-0 flex
        sm:absolute sm:inset-0 sm:flex
        md:absolute md:inset-0 md:flex">
          <div className="
          w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-purple-400/30
          sm:w-full sm:h-full sm:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] sm:from-purple-400/30
          md:w-full md:h-full md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] md:from-purple-400/30" />
        </div>
        {/* Light Bulb Border */}
        <div className="
        absolute inset-0 p-1
        sm:absolute sm:inset-0 sm:p-1
        md:absolute md:inset-0 md:p-1">
          <div className="
          border-[6px] border-dashed border-purple-200/30 w-full h-full rounded-lg
          sm:border-[6px] sm:border-dashed sm:border-purple-200/30 sm:w-full sm:h-full sm:rounded-lg
          md:border-[6px] md:border-dashed md:border-purple-200/30 md:w-full md:h-full md:rounded-lg" />
        </div>
        <div className="
        relative p-6 flex items-center justify-between h-full
        sm:relative sm:p-6 sm:flex sm:items-center sm:justify-between sm:h-full
        md:relative md:p-6 md:flex md:items-center md:justify-between md:h-full">
          <div className="space-y-4 sm:space-y-4 md:space-y-4">
            <div className="
            flex items-center gap-2 mb-2
            sm:flex sm:items-center sm:gap-2 sm:mb-2
            md:flex md:items-center md:gap-2 md:mb-2">
              {/* <div className="
              w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-purple-700 text-base
              sm:w-8 sm:h-8 sm:bg-yellow-400 sm:rounded-lg sm:flex sm:items-center sm:justify-center sm:font-bold sm:text-purple-700 sm:text-base
              md:w-8 md:h-8 md:bg-yellow-400 md:rounded-lg md:flex md:items-center md:justify-center md:font-bold md:text-purple-700 md:text-base">
                Qz
              </div> */}
              <span className="
              text-xl
              sm:text-xl
              md:text-xl 
              
              font-bold text-white">Quizzop</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
              Play Fun Quizzes
            </h2>
            <Button
              className="
              w-24 px-8
              sm:px-8
              md:px-8

              bg-yellow-400 hover:bg-yellow-500 text-purple-700 font-semibold "
              size="sm"
            >
              PLAY NOW
            </Button>
          </div>
          <div className="w-16 h-16 sm:w-24 sm:h-24 relative flex-shrink-0">
          </div>
        </div>
      </Card>
    </div>
  )
}