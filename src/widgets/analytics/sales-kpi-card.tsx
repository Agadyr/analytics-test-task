import { Card } from '@/shared/ui/card'
import { Progress } from '@/shared/ui/progress'
import { KpiMetricsCarousel } from './ui/kpi-metrics-carousel'

const KPI_DATA = [
  {
    items: [
      { label: 'Склад обработка:', value: '0 ₸', documents: '0 документов' },
      { label: 'Склад готово:', value: '1 345 222 ₸', documents: '5 документов', valueColor: 'text-[#22C55E]' },
    ]
  },
  {
    items: [
      { label: 'В ожидании:', value: '0 ₸', documents: '0 документов' },
      { label: 'Касса обработка:', value: '0 ₸', documents: '5 документов', valueColor: 'text-[#6366F1]' },
    ]
  }
]

export function SalesKpiCard() {
  return (
    <div className="space-y-3 md:space-y-4">
      <Card className="bg-quaternary rounded-xl text-white border-0 shadow-lg p-3 md:p-4">
        <div className="mb-3 md:mb-4">
          <p className="text-xs md:text-sm text-gray-400">Продажи за июль</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight pt-2 md:pt-3">1 629 619 ₸</h2>
          <p className="text-xs md:text-sm text-gray-400">-68% от прошлого месяца</p>
        </div>

        <div>
          <p className="text-xs md:text-sm font-medium text-white pt-1">План:</p>
          <div className="flex justify-between items-end mb-1">
            <span className="text-sm md:text-base font-semibold">0 ₸</span>
            <span className="text-xs md:text-sm text-white">0%</span>
          </div>
          <Progress value={0} className="h-1 bg-gray-600" indicatorClassName="bg-white" />
        </div>
      </Card>

      <KpiMetricsCarousel data={KPI_DATA} />
    </div>
  )
}
