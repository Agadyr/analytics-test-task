import { Wallet, Package } from 'lucide-react'
import { descriptions, productsData, titles, topCategoriesData, topReturnsData } from '@/entities/analytics/model/mock-data'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'
import { ProductCardItem } from './ui/product-card-item'
import { EmptyState } from '@/shared/ui/empty-state'
import { AnalyticsSortPopover, type SortOption } from './ui/analytics-sort-popover'
import { useState } from 'react'
import type { ProductItem } from '@/entities/product/model/types'

export type FilterType = 'sum' | 'count'

const sortOptions: SortOption[] = [
  { value: 'sum', label: 'По сумме', icon: Wallet },
  { value: 'count', label: 'По количеству', icon: Package },
]

function List({ data, mode, filterType = 'sum' }: { data: ProductItem[], mode: 'product' | 'category' | 'return', filterType?: 'sum' | 'count' }) {
  if (data.length === 0) {
    return (
      <EmptyState
        title={titles[mode]}
        description={descriptions[mode]}
      />
    )
  }

  return (
    <div className="flex flex-col gap-3 p-2">
      {data.map((it) => (
        <ProductCardItem key={it.id} item={it} mode={mode} filterType={filterType} />
      ))}
    </div>
  )
}

export function TopProductsCard() {
  const [filterType, setFilterType] = useState<FilterType>('sum')

  const sortedProducts = [...productsData].sort((a, b) => b.sold_sum - a.sold_sum)

  const sortedCategories = [...topCategoriesData].sort((a, b) => b.sold_sum - a.sold_sum)

  const sortedReturns = [...topReturnsData].sort((a, b) => (b.return_sum ?? 0) - (a.return_sum ?? 0)) as ProductItem[]

  const tabs: TabConfig[] = [
    {
      value: 'products',
      label: 'Топ товаров',
      content: <List data={sortedProducts} mode="product" filterType={filterType} />,
    },
    {
      value: 'categories',
      label: 'Топ категорий',
      content: <List data={sortedCategories} mode="category" filterType={filterType} />,
    },
    {
      value: 'returns',
      label: 'Топ возвратов',
      content: <List data={sortedReturns} mode="return" filterType={filterType} />,
    },
  ]

  return (
    <AnalyticsTabCard
      tabs={tabs}
      defaultValue="products"
      extraHeaderAction={
        <AnalyticsSortPopover
          value={filterType}
          onValueChange={(v) => setFilterType(v as FilterType)}
          options={sortOptions}
        />
      }
    />
  )
}
