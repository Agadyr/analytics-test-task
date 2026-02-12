import { Card, CardContent } from '@/shared/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function WarehouseCard() {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs text-gray-400 mb-1">Склад обработка:</div>
            <div className="text-lg font-bold text-gray-900">0 ₸</div>
          </div>
          <div className="text-sm text-gray-400 mt-1">0 документов</div>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs text-gray-400 mb-1">Склад готово:</div>
            <div className="text-lg font-bold text-emerald-500">1 345 222 ₸</div>
          </div>
          <div className="text-sm text-gray-400 mt-1">5 документов</div>
        </div>

        <div className="flex gap-2 pt-2">
          <button className="h-6 w-6 flex items-center justify-center rounded-sm bg-gray-100 text-gray-400 hover:text-gray-900">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="h-6 w-6 flex items-center justify-center rounded-sm bg-gray-100 text-gray-400 hover:text-gray-900">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
