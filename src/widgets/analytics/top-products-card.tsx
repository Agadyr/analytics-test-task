import { ArrowUpDown } from 'lucide-react'
import { productsData } from '@/entities/analytics/model/mock-data'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'
import { ProductCardItem } from './ui/product-card-item'

function List() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {productsData.map((it) => (
        <ProductCardItem key={it.id} product={it} />
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
