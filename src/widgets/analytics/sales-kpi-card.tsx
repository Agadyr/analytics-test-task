import { Card } from '@/shared/ui/card'
import { Progress } from '@/shared/ui/progress'

export function SalesKpiCard() {
  return (
    <div className="space-y-4">
      <Card className="bg-quaternary rounded-2xl text-white border-0 shadow-lg p-3">
        <div className="mb-4">
          <p className="text-sm text-gray-400">Продажи за июль</p>
          <h2 className="text-4xl font-medium tracking-tight pt-3">1 629 619 ₸</h2>
          <p className="text-sm text-gray-400">-68% от прошлого месяца</p>
        </div>

        <div>
          <p className="text-sm font-medium text-white pt-1">План:</p>
          <div className="flex justify-between items-end mb-1">
            <span className="text-base font-semibold">0 ₸</span>
            <span className="text-sm text-white">0%</span>
          </div>
          <Progress value={0} className="h-1 bg-gray-600" indicatorClassName="bg-white" />
        </div>
      </Card>

      <div className="bg-white rounded-2xl p-3 border border-gray-100">
          <div className="flex flex-col gap-1">
            <p className="text-[15px] text-[#9CA3AF]">Склад обработка:</p>
            <div className="flex items-center justify-between">
              <span className="text-lg  text-[#2D2D2D]">0 ₸</span>
              <span className="text-[#3B3F44]">0 документов</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <p className="text-[15px] text-[#9CA3AF]">Склад готово:</p>
            <div className="flex items-center justify-between">
              <span className="text-lg text-lightGreen">1 345 222 ₸</span>
              <span className="text-[#3B3F44]">5 документов</span>
            </div>
          </div>

        <div className="flex items-center gap-2 mt-1">
          <button className="px-3 py-2 bg-[#F1F3F5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center">
            <img src="icons/rightArrow.svg" className='rotate-180' alt="" />
          </button>
          <button className="px-3 py-2 bg-[#F1F3F5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center">
            <img src="icons/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>

    </div>
  )
}
