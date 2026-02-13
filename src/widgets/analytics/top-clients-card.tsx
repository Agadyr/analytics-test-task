import * as React from 'react'
import { Wallet, Package } from 'lucide-react'
import { clientsData, topCitiesData } from '@/entities/analytics/model/mock-data'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'
import { ClientCardItem } from './ui/client-card-item'
import { CityCardItem } from './ui/city-card-item'
import { AnalyticsSortPopover, type SortOption } from './ui/analytics-sort-popover'
import { EmptyState } from '@/shared/ui/empty-state'

export type FilterType = 'sum' | 'count'

const sortOptions: SortOption[] = [
  { value: 'sum', label: 'По сумме', icon: Wallet },
  { value: 'count', label: 'По количеству', icon: Package },
]

export function TopClientsCard() {
  const [filterType, setFilterType] = React.useState<FilterType>('sum')
  const [activeTab, setActiveTab] = React.useState('clients')

  const sortedClients = [...clientsData].sort((a, b) => b.total_sum - a.total_sum)

  const sortedCities = [...topCitiesData].sort((a, b) =>
    filterType === 'sum' ? b.total_sum - a.total_sum : b.total_count - a.total_count
  )

  const tabs: TabConfig[] = [
    {
      value: 'clients',
      label: 'Топ клиентов',
      content:
        <div className="flex flex-col gap-3 p-2">
          {sortedClients.length > 0 ? (
            sortedClients.map((it) => (
              <ClientCardItem key={it.id} client={it} />
            ))
          ) : (
            <EmptyState
              title="Нет клиентов"
              description="Нет найденных клиентов за данный период"
            />
          )}
        </div>,
    },
    {
      value: 'cities',
      label: 'Топ городов',
      content:
        <div className="flex flex-col gap-3 p-2">
          {sortedCities.length > 0 ? (
            sortedCities.map((it) => (
              <CityCardItem key={it.id} city={it} filterType={filterType} />
            ))
          ) : (
            <EmptyState
              title="Нет городов"
              description="Нет найденных городов за данный период"
            />
          )}
        </div>,
    },
  ]

  return (
    <AnalyticsTabCard
      tabs={tabs}
      defaultValue="clients"
      onValueChange={setActiveTab}
      extraHeaderAction={activeTab === 'cities' ? (
        <AnalyticsSortPopover
          value={filterType}
          onValueChange={(v) => setFilterType(v as FilterType)}
          options={sortOptions}
        />
      ) : null}
    />
  )
}
