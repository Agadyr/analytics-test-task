import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'
import { ChevronsUpDown } from 'lucide-react'
import { citiesData, managersData } from '@/entities/analytics/model/mock-data'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'
import { ChannelCard } from './ui/channel-card'
import { ManagerCardItem } from './ui/manager-card-item'

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
                <AccordionTrigger className="hover:no-underline py-2 px-4 ml-1 bg-white hover:bg-gray-50 transition-colors group data-[state=open]:bg-white">
                  <div className="flex items-center justify-between w-full text-left">
                    <div className="flex items-center">
                      <div className="w-5 flex justify-center">
                        <ChevronsUpDown className="w-4 h-4 text-gray-500 group-data-[state=open]:hidden" />
                      </div>
                      <span className="text-[17px] xl:text-[19px] font-medium text-[#2D2D2D] tracking-tight transition-all">
                        {city.name}
                      </span>
                    </div>
                    <span className="text-xs xl:text-sm text-gray-400 font-medium tracking-tight pr-4 transition-all">
                      {city.channelsCount} кан.
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-0 px-4">
                  <div className="space-y-4">
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
      content: (
        <div className="py-2 px-2 space-y-4 max-h-[600px] overflow-y-auto">
          {managersData.length > 0 ? (
            managersData.map((manager) => (
              <ManagerCardItem key={manager.id} item={manager} />
            ))
          ) : (
            <div className="p-8 text-center text-sm text-gray-400">Нет данных</div>
          )}
        </div>
      ),
    },
  ]

  return <AnalyticsTabCard tabs={tabs} defaultValue="channels" />
}
