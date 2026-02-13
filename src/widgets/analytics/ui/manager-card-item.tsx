import { Play } from 'lucide-react'
import { Progress } from '@/shared/ui/progress'
import type { ManagerItem } from '@/entities/manager/model/types'
import { ChannelMetricItem } from './channel-metric-item'
import { cn } from "@/shared/lib/utils"
import { ProductMetricItem } from './product-metric-item'
import ItemHead from './item-head'

interface ManagerCardItemProps {
    item: ManagerItem;
    className?: string;
}

export function ManagerCardItem({ item, className }: ManagerCardItemProps) {
    return (
        <div className={cn("bg-white rounded-xl border border-[#E8E8E8] p-2 relative text-left transition-all", className)}>
            <ItemHead item={item} />

            <div className="flex items-center gap-2 mb-3 xl:mb-4">
                <ChannelMetricItem
                    label="Продано:"
                    value={item.sold_sum}
                    count={item.sold_count}
                    valueColor="text-lightGreen"
                />
                <ProductMetricItem
                    label="Возврат:"
                    value={item.returns_sum}
                    count={item.returns_count}
                    valueColor="text-red-500"
                />
            </div>

            <div className="relative flex items-center gap-2 h-4 -mb-1">
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
