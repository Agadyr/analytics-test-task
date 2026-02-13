import { SalesKpiCard } from '@/widgets/analytics/sales-kpi-card'
import { ChartCard } from '@/widgets/analytics/chart-card'
import { RegionsAccordion } from '@/widgets/analytics/regions-accordion'
import { TopProductsCard } from '@/widgets/analytics/top-products-card'
import { TopClientsCard } from '@/widgets/analytics/top-clients-card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs'
import { TopFilters } from '@/features/filters/ui/top-filters'

export function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7]">
      <Tabs defaultValue="top-sales" className="w-full flex-1 flex flex-col">
        <div className="bg-white border-b border-[#E8E8E8]">
          <div className="px-3 py-3 md:px-5 md:pt-2">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h1 className="text-xl md:text-2xl font-medium text-[#2D2D2D]">Аналитика</h1>
              <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto scrollbar-hide">
                <TopFilters />
              </div>
            </div>

            <TabsList className="bg-transparent p-0 gap-4 md:gap-6 h-auto mt-4 overflow-x-auto scrollbar-hide flex-nowrap w-full justify-start">
              <TabsTrigger
                value="top-sales"
                className="data-[state=active]:bg-transparent text-sm md:text-base cursor-pointer data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-[#007AFF] data-[state=active]:text-[#2D2D2D] text-gray-400 rounded-none px-0 pb-3 font-medium transition-colors hover:text-gray-600 bg-transparent shadow-none shrink-0"
              >
                Топ продаж
              </TabsTrigger>
              <TabsTrigger
                value="brands"
                className="data-[state=active]:bg-transparent text-sm md:text-base cursor-pointer data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-[#007AFF] data-[state=active]:text-[#2D2D2D] text-gray-400 rounded-none px-0 pb-3 font-medium transition-colors hover:text-gray-600 bg-transparent shadow-none shrink-0"
              >
                Для брендов
              </TabsTrigger>
              <TabsTrigger
                value="power-bi"
                className="data-[state=active]:bg-transparent text-sm md:text-base cursor-pointer data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-[#007AFF] data-[state=active]:text-[#2D2D2D] text-gray-400 rounded-none px-0 pb-3 font-medium transition-colors hover:text-gray-600 bg-transparent shadow-none shrink-0"
              >
                Power BI
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="p-2 md:p-5">
          <TabsContent value="top-sales" className="space-y-4 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:zoom-in-95">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-3 space-y-4">
                <SalesKpiCard />
              </div>
              <div className="col-span-12 lg:col-span-9">
                <ChartCard />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <RegionsAccordion />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <TopProductsCard />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <TopClientsCard />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="brands" className="mt-0">
            <div className="p-12 text-center text-gray-500 bg-white rounded-xl border border-gray-200">
              Контент для брендов
            </div>
          </TabsContent>
          <TabsContent value="power-bi" className="mt-0">
            <div className="p-12 text-center text-gray-500 bg-white rounded-xl border border-gray-200">
              Power BI интеграция
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
