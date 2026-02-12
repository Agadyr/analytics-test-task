import { ChevronDown, Play } from 'lucide-react'
import { Progress } from '@/shared/ui/progress'
import type { ChannelItem } from '@/entities/channel/model/types'
import { ChannelMetricItem } from './channel-metric-item'
import { cn } from "@/shared/lib/utils"

interface ChannelCardProps {
    item: ChannelItem;
    className?: string;
}

export function ChannelCard({ item, className }: ChannelCardProps) {
    return (
        <div className={cn("bg-white rounded-xl border border-gray-100 p-3 xl:p-4 shadow-sm relative text-left transition-all", className)}>
            <div className="flex items-center justify-between mb-2.5 xl:mb-3.5">
                <div className="font-bold text-[#2D2D2D] text-[15px] xl:text-[17px] transition-all">{item.name}</div>
                <div className="text-gray-400 text-[11px] xl:text-xs font-medium flex items-center gap-1 transition-all">
                    Точки отгрузки <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-bold ml-1">{item.points}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
            </div>

            <div className="flex items-center gap-2 mb-3 xl:mb-4">
                <ChannelMetricItem
                    label="Продано:"
                    value={item.sold_sum}
                    count={item.sold_count}
                    valueColor="text-lightGreen"
                />
                <ChannelMetricItem
                    label="План:"
                    value={item.plan_sum}
                    status="Перевыполнение"
                />
                <ChannelMetricItem
                    label="Возвраты:"
                    value={item.returns_sum}
                    count={item.returns_count}
                    valueColor="text-red-500"
                />
            </div>

            <div className="relative flex items-center gap-2 h-4">
                <div className="flex-1 relative">
                    <Progress value={item.progress} className="h-1 bg-gray-100" indicatorClassName="bg-blue-500" />
                    <div
                        className="absolute top-[-10px] bg-[#007AFF] text-white text-[8px] xl:text-[9px] font-bold px-1 rounded-sm shadow-sm flex items-center h-3 transition-all"
                        style={{ left: `calc(${item.progress}% - 10px)` }}
                    >
                        {item.progress}%
                    </div>
                </div>
                <Play className="w-3 h-3 text-gray-300 fill-current" />
            </div>
        </div>
    )
}
