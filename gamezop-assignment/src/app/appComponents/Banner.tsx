import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="flex flex-row gap-4 p-4 w-full overflow-x-auto">
      {/* Game Selection Banner */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 border-none min-w-[300px] flex-1">
        <div className="absolute inset-0 flex">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-orange-300/50" />
        </div>
        {/* Light Bulb Border */}
        <div className="absolute inset-0 p-1">
          <div className="border-[6px] border-dashed border-yellow-200/30 w-full h-full rounded-lg" />
        </div>
        <div className="relative p-4 sm:p-6 flex items-center justify-between h-full">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-[200px]">
              Randomly Select from 350+ Games
            </h2>
            <Button
              className="bg-[#4a0404] hover:bg-[#3a0303] text-white font-semibold px-4 sm:px-8"
              size="sm"
            >
              PLAY NOW
            </Button>
          </div>
          <div className="w-16 h-16 sm:w-24 sm:h-24 relative flex-shrink-0">
          </div>
        </div>
      </Card>

      {/* Quiz Banner */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-700 border-none min-w-[300px] flex-1">
        <div className="absolute inset-0 flex">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-purple-400/30" />
        </div>
        {/* Light Bulb Border */}
        <div className="absolute inset-0 p-1">
          <div className="border-[6px] border-dashed border-purple-200/30 w-full h-full rounded-lg" />
        </div>
        <div className="relative p-4 sm:p-6 flex items-center justify-between h-full">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-purple-700 text-xs sm:text-base">
                Qz
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Quizzop</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
              Play Fun Quizzes
            </h2>
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-700 font-semibold px-4 sm:px-8"
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