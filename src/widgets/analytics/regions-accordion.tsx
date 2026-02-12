import { Progress } from '@/shared/ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'
import { ChevronDown, ChevronsUpDown, X, Play } from 'lucide-react'
import { citiesData } from '@/entities/analytics/model/mock-data'
import type { ChannelItem } from '@/entities/channel/model/types'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'

function ChannelCard({ item }: { item: ChannelItem }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm mb-3 last:mb-0 relative text-left">
      <div className="flex items-center justify-between text-sm mb-2.5">
        <div className="font-bold text-[#2D2D2D] text-[15px]">{item.name}</div>
        <div className="text-gray-400 text-[11px] font-medium flex items-center gap-1">
          Точки отгрузки <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-bold">{item.points}</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 bg-[#F5F5F7] rounded-lg p-2 border border-transparent">
          <div className="text-[10px] text-gray-400 font-medium mb-1">Продано: {item.sold_count} шт</div>
          <div className="text-sm font-bold text-lightGreen">{item.sold_sum.toLocaleString()} ₸</div>
        </div>
        <div className="flex-1 bg-[#F5F5F7] rounded-lg p-2 border border-transparent">
          <div className="text-[10px] text-gray-400 font-medium mb-1">
            План: <span className="text-lightGreen lowercase">Перевыполнение</span>
          </div>
          <div className="text-sm font-bold text-gray-800">{item.plan_sum.toLocaleString()} ₸</div>
        </div>
        <div className="flex-1 bg-[#F5F5F7] rounded-lg p-2 border border-transparent">
          <div className="text-[10px] text-gray-400 font-medium mb-1">Возвраты: {item.returns_count} шт</div>
          <div className="text-sm font-bold text-red-500">{item.returns_sum} ₸</div>
        </div>
      </div>

      <div className="relative flex items-center gap-2 h-4">
        <div className="flex-1 relative">
          <Progress value={item.progress} className="h-1 bg-gray-100" indicatorClassName="bg-blue-500" />
          {item.progress > 0 && (
            <div
              className="absolute top-[-10px] bg-[#007AFF] text-white text-[8px] font-bold px-1 rounded-sm shadow-sm flex items-center h-3"
              style={{ left: `calc(${item.progress}% - 10px)` }}
            >
              {item.progress}%
            </div>
          )}
          {item.progress === 0 && (
            <div className="absolute top-[-10px] left-0 bg-[#007AFF] text-white text-[8px] font-bold px-1 rounded-sm shadow-sm flex items-center h-3">
              0%
            </div>
          )}
        </div>
        <Play className="w-3 h-3 text-gray-300 fill-current" />
      </div>
    </div>
  )
}

export function RegionsAccordion() {
  const tabs: TabConfig[] = [
    {
      value: 'channels',
      label: 'Топ каналов',
      content: (
        <div className="overflow-y-auto">
          <Accordion type="single" collapsible defaultValue="almaty" className="w-full">
            {citiesData.map((city) => (
              <AccordionItem key={city.id} value={city.id} className="border-0">
                <AccordionTrigger className="hover:no-underline py-4 px-4 bg-white hover:bg-gray-50 transition-colors group data-[state=open]:bg-white">
                  <div className="flex items-center justify-between w-full text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-5 flex justify-center">
                        <X className="w-4 h-4 text-gray-500 hidden group-data-[state=open]:block" />
                        <ChevronsUpDown className="w-4 h-4 text-gray-500 group-data-[state=open]:hidden" />
                      </div>
                      <span className="text-[17px] font-medium text-[#2D2D2D] tracking-tight">
                        {city.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium tracking-tight pr-4">
                      {city.channelsCount} кан.
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-0 px-4">
                  <div className="space-y-4 pt-2">
                    {city.items.length > 0 ? (
                      city.items.map((item) => <ChannelCard key={item.id} item={item} />)
                    ) : (
                      <div className="text-xs text-gray-400 text-center py-4">Нет данных по каналам</div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ),
    },
    {
      value: 'managers',
      label: 'Топ менеджеров',
      content: <div className="p-8 text-center text-sm text-gray-400">Нет данных</div>,
    },
  ]

  return <AnalyticsTabCard tabs={tabs} defaultValue="channels" />
}
