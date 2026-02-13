import { cn } from "@/shared/lib/utils"
import type { FilterType } from "../top-clients-card"

interface CityCardItemProps {
    city: {
        id: string;
        name: string;
        buyers_count: number;
        total_sum: number;
        total_count: number;
    };
    filterType?: FilterType;
    className?: string;
}

export function CityCardItem({ city, filterType = 'sum', className }: CityCardItemProps) {
    const isSum = filterType === 'sum'

    return (
        <div className={cn("flex items-center justify-between p-2 bg-white border border-[#E8E8E8] rounded-xl transition-all", className)}>
            <div>
                <div className="font-medium text-[16px] xl:text-[18px] text-[#2D2D2D] tracking-tight transition-all">
                    {city.name}
                </div>
                <div className="text-[13px] xl:text-[15px] text-textSecondary font-medium tracking-tight transition-all">
                    Покупателей: {city.buyers_count.toLocaleString()}
                </div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
                <div className="text-sm xl:text-base text-[#AAB4BC] transition-all">Куплено на:</div>
                {isSum ? (
                    <div className="flex items-center gap-1.5">
                        <span className="font-medium text-lg xl:text-[20px] text-lightGreen leading-none transition-all">
                            {city.total_sum.toLocaleString().split(',').join(' ')} ₸
                        </span>
                        <span className="text-[13px] xl:text-[15px] text-[#2D2D2D] font-medium transition-all">
                            - {city.total_count} шт
                        </span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5">
                        <span className="font-medium text-lg xl:text-[20px] text-lightGreen leading-none transition-all">
                            {city.total_count} шт
                        </span>
                        <span className="text-[13px] xl:text-[15px] text-[#2D2D2D] font-medium transition-all">
                            - {city.total_sum.toLocaleString().split(',').join(' ')} ₸
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}
