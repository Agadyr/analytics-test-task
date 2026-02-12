import { useAnalyticsStore } from '../../../entities/analytics/model/store'
import { Calendar, ChevronDown, Building2, Store } from 'lucide-react'

export function TopFilters() {
  const { city, channel, from, to, setCity, setChannel } = useAnalyticsStore()

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex items-center gap-2 bg-[#E9E9EB66] rounded-xl px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer group">
        <Building2 className="w-4 h-4 text-[#A19FA1]" />
        <div className="relative flex items-center">
          <select
            className="text-[14px] bg-transparent text-[#2D2D2D] font-medium outline-none border-none cursor-pointer pr-5 appearance-none"
            value={city}
            onChange={(e) => setCity(e.target.value as any)}
          >
            <option value="Все">Город: Все</option>
            <option value="Алматы">Алматы</option>
            <option value="Шымкент">Шымкент</option>
            <option value="Астана">Астана</option>
          </select>
          <ChevronDown className="w-4 h-4 text-[#A19FA1] absolute right-0 pointer-events-none" />
        </div>
      </div>

      <div className="flex items-center gap-2 bg-[#E9E9EB66] rounded-xl px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer group">
        <Store className="w-4 h-4 text-[#A19FA1]" />
        <div className="relative flex items-center">
          <select
            className="text-[14px] bg-transparent text-[#2D2D2D] font-medium outline-none border-none cursor-pointer pr-5 appearance-none"
            value={channel}
            onChange={(e) => setChannel(e.target.value as any)}
          >
            <option>Канал: Все каналы</option>
            <option>Онлайн</option>
            <option>Офлайн</option>
          </select>
          <ChevronDown className="w-4 h-4 text-[#A19FA1] absolute right-0 pointer-events-none" />
        </div>
      </div>

      <div className="flex items-center gap-2 bg-[#E9E9EB66] rounded-xl px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer group">
        <Calendar className="w-4 h-4 text-[#A19FA1]" />
        <div className="flex items-center gap-1">
          <input
            type="text"
            readOnly
            className="text-[14px] bg-transparent text-[#2D2D2D] font-medium outline-none border-none cursor-pointer w-[150px]"
            value={`Дата: ${from}-${to}`}
          />
        </div>
        <ChevronDown className="w-4 h-4 text-[#A19FA1]" />
      </div>
    </div>

  )
}
