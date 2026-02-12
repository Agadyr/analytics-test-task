import { useAnalyticsStore } from '@/entities/analytics/model/store'
import { ArrowUpDown, Play } from 'lucide-react'
import { productsData } from '@/entities/analytics/model/mock-data'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'

function List() {
  const { selectedItemId, selectItem } = useAnalyticsStore()
  return (
    <div className="flex flex-col gap-3 p-2">
      {productsData.map((it) => (
        <div key={it.id} className="border border-[#E8E8E8] rounded-xl bg-white overflow-hidden transition-all">
          <button
            className="flex items-center justify-between p-4 w-full text-left group"
            onClick={() => selectItem(selectedItemId === it.id ? undefined : it.id)}
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                <img src={it.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-0.5">
                <div className="font-medium text-[17px] text-[#2D2D2D] tracking-tight">{it.title}</div>
                <div className="text-[13px] text-[#AAB4BC] font-medium">артикул: {it.article}</div>
              </div>
            </div>
            <div className="w-[26px] h-[26px] rounded-full bg-[#F5F5F7] flex items-center justify-center group-hover:bg-[#EBEDF0] transition-colors shrink-0">
              <Play className="w-2.5 h-2.5 text-white fill-current translate-x-0.5" />
            </div>
          </button>

          <div className="flex items-center gap-2 px-4 pb-4">
            <div className="flex-1 bg-[#F5F5F7] rounded-xl p-3">
              <div className="text-[11px] text-[#AAB4BC] font-medium mb-1.5">Продано:</div>
              <div className="flex items-baseline gap-1">
                <span className="text-[15px] font-bold text-lightGreen">{it.sold_sum.toLocaleString()} ₸</span>
                <span className="text-[13px] text-[#AAB4BC] font-medium"> - {it.sold_count} шт</span>
              </div>
            </div>
            <div className="flex-1 bg-[#F5F5F7] rounded-xl p-3">
              <div className="text-[11px] text-[#AAB4BC] font-medium mb-1.5">Остаток:</div>
              <div className="flex items-baseline gap-1">
                <span className="text-[15px] font-bold text-[#2D2D2D]">{it.stock_sum.toLocaleString()} ₸</span>
                <span className="text-[13px] text-[#AAB4BC] font-medium"> - {it.stock_count} шт</span>
              </div>
            </div>
            <div className="flex-1 bg-[#F5F5F7] rounded-xl p-3">
              <div className="text-[11px] text-[#AAB4BC] font-medium mb-1.5">Возврат:</div>
              <div className="flex items-baseline gap-1">
                <span className="text-[15px] font-bold text-[#FF3B30]">0 ₸</span>
                <span className="text-[13px] text-[#AAB4BC] font-medium"> - 0 шт</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function TopProductsCard() {
  const tabs: TabConfig[] = [
    {
      value: 'products',
      label: 'Топ товаров',
      content: <List />,
    },
    {
      value: 'categories',
      label: 'Топ категорий',
      content: <div className="p-8 text-center text-sm text-gray-400">Нет данных</div>,
    },
    {
      value: 'returns',
      label: 'Топ возвратов',
      content: <div className="p-8 text-center text-sm text-gray-400">Нет данных</div>,
    },
  ]

  return (
    <AnalyticsTabCard
      tabs={tabs}
      defaultValue="products"
      extraHeaderAction={
        <ArrowUpDown className="w-4 h-4 text-[#2D2D2D] cursor-pointer hover:text-blue-500 transition-colors" />
      }
    />
  )
}
