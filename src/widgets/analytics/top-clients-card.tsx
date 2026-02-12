import { clientsData } from '@/entities/analytics/model/mock-data'
import { AnalyticsTabCard, type TabConfig } from './ui/analytics-tab-card'

function ClientsList() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {clientsData.map((it) => (
        <div key={it.id} className="flex items-center justify-between p-2 bg-white border border-[#E8E8E8] rounded-xl ">
          <div className="space-y-1">
            <div className="font-medium text-[16px] text-[#2D2D2D] tracking-tight">{it.name}</div>
            <div className="text-[13px] text-[#3B3F44] font-medium tracking-tight">{it.phone}</div>
          </div>
          <div className="text-right flex flex-col items-end gap-1">
            <div className="text-sm text-[#AAB4BC]">Куплено на:</div>
            <div className="font-medium text-lg text-lightGreen leading-none">{it.total_sum.toLocaleString()} ₸</div>
          </div>
        </div>
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
