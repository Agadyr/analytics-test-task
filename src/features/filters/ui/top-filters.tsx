import { useAnalyticsStore } from '@/entities/analytics/model/store'
import { Building2, Store } from 'lucide-react'
import { DateRangePicker } from '@/shared/ui/date-range-picker'

export function TopFilters() {
  const { city, channel, from, to, setCity, setChannel } = useAnalyticsStore()

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex items-center gap-2 bg-[#ECECEC] hover:bg-[#F6F6F6] rounded-xl px-3 py-1.5 transition-colors cursor-pointer group">
        <Building2 className="w-4.5 h-4.5 text-[#A19FA1]" />
        <div className="relative flex items-center">
          <select
            className="text-[14px] bg-transparent text-textSecondary font-medium outline-none border-none cursor-pointer pr-3 appearance-none"
            value={city}
            onChange={(e) => setCity(e.target.value as any)}
          >
            <option value="Все">Город: Все</option>
            <option value="Алматы">Алматы</option>
            <option value="Шымкент">Шымкент</option>
            <option value="Астана">Астана</option>
          </select>
          <img src="icons/rightArrow.svg" alt="arrow" className='rotate-90' />
        </div>
      </div>

      <div className="flex items-center gap-2 bg-[#ECECEC] hover:bg-[#F6F6F6] rounded-xl px-3 py-1.5 transition-colors cursor-pointer group">
        <Store className="w-4.5 h-4.5 text-[#A19FA1]" />
        <div className="relative flex items-center">
          <select
            className="text-[14px] bg-transparent text-textSecondary font-medium outline-none border-none cursor-pointer pr-3 appearance-none"
            value={channel}
            onChange={(e) => setChannel(e.target.value as any)}
          >
            <option>Канал: Все каналы</option>
            <option>Онлайн</option>
            <option>Офлайн</option>
          </select>
          <img src="icons/rightArrow.svg" alt="arrow" className='rotate-90' />
        </div>
      </div>

      <DateRangePicker from={from} to={to} />
    </div>
  )
}
