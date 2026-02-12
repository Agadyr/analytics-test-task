import { cn } from "@/shared/lib/utils"

interface ProductMetricItemProps {
    label: string;
    value: number;
    count: number | string;
    valueColor?: string;
    className?: string;
}

export function ProductMetricItem({
    label,
    value,
    count,
    valueColor = "text-[#1A1A1A]",
    className
}: ProductMetricItemProps) {
    return (
        <div className={cn("flex-1 bg-[#F8F9FA] rounded-[10px] p-1.5 xl:p-2 border border-gray-100/30 overflow-hidden transition-all", className)}>
            <div className="text-xs xl:text-[13px] text-textSecondary mb-0.5 transition-all">{label}</div>
            <div className="flex items-baseline gap-1 whitespace-nowrap">
                <span className={cn("text-[13px] xl:text-base font-medium transition-all", valueColor)}>
                    {value.toLocaleString()}
                    <span className="text-[10px] xl:text-[13px] ml-0.5 font-medium">₸</span>
                </span>
                <span className="text-[11px] xl:text-[12px] font-medium opacity-70 transition-all">- {count} шт</span>
            </div>
        </div>
    )
}
