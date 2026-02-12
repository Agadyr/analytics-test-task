import { clientsData } from '@/entities/analytics/model/mock-data'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'
import { ClientCardItem } from './ui/client-card-item'

function ClientsList() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {clientsData.map((it) => (
        <ClientCardItem key={it.id} client={it} />
      ))}
    </div>
  )
}

export function TopClientsCard() {
  const tabs: TabConfig[] = [
    {
      value: 'clients',
      label: 'Топ клиентов',
      content: <ClientsList />,
    },
    {
      value: 'cities',
      label: 'Топ городов',
      content: <div className="p-8 text-center text-sm text-gray-400">Нет данных</div>,
    },
  ]

  return <AnalyticsTabCard tabs={tabs} defaultValue="clients" />
}
