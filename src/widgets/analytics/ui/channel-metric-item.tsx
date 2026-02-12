import { cn } from "@/shared/lib/utils"

interface ChannelMetricItemProps {
    label: string;
    value: string | number;
    count?: number | string;
    status?: string;
    valueColor?: string;
    labelColor?: string;
    className?: string;
}

export function ChannelMetricItem({
    label,
    value,
    count,
    status,
    valueColor = "text-gray-800",
    labelColor = "text-gray-400",
    className
}: ChannelMetricItemProps) {
    return (
        <div className={cn("flex-1 bg-[#F5F5F7] rounded-lg p-2 xl:p-2.5 border border-transparent transition-all", className)}>
            <div className={cn("text-[10px] xl:text-[12px] font-medium mb-1 transition-all", labelColor)}>
                {label} {count !== undefined && <span className="lowercase">{count} шт</span>}
                {status && <span className="text-lightGreen lowercase ml-1">{status}</span>}
            </div>
            <div className={cn("text-sm xl:text-base font-bold transition-all", valueColor)}>
                {typeof value === 'number' ? value.toLocaleString() : value} ₸
            </div>
        </div>
    )
}
