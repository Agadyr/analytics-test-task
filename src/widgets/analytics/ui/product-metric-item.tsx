import { cn } from "@/shared/lib/utils"

function formatValue(value: number): string {
    if (value >= 1_000_000) {
        const millions = value / 1_000_000
        const formatted = Number.isInteger(millions) ? millions.toString() : millions.toFixed(1).replace('.0', '')
        return `${formatted} млн`
    }
    return value.toLocaleString().split(',').join(' ')
}

interface ProductMetricItemProps {
    label: string;
    value: number;
    count: number | string;
    valueColor?: string;
    className?: string;
    primaryDisplay?: 'sum' | 'count';
}

export function ProductMetricItem({
    label,
    value,
    count,
    valueColor = "text-[#1A1A1A]",
    className,
    primaryDisplay = 'sum'
}: ProductMetricItemProps) {
    return (
        <div className={cn("flex-1 bg-[#F8F9FA] rounded-[10px] px-1.5 py-1 border border-gray-100/30 overflow-hidden transition-all", className)}>
            <div className="text-xs xl:text-[13px] text-textSecondary mb-0.5 transition-all">{label}</div>
            <div className="flex items-baseline gap-1 whitespace-nowrap">
                {primaryDisplay === 'sum' ? (
                    <>
                        <span className={cn("text-[13px] xl:text-base font-medium transition-all", valueColor)}>
                            {formatValue(value)}
                            <span className="text-[10px] xl:text-[13px] ml-0.5 font-medium">₸</span>
                        </span>
                        <span className="text-[11px] xl:text-[12px] font-medium opacity-70 transition-all">- {count} шт</span>
                    </>
                ) : (
                    <>
                        <span className={cn("text-[13px] xl:text-base font-medium transition-all", valueColor)}>
                            {count} шт
                        </span>
                        <span className="text-[11px] xl:text-[12px] font-medium opacity-70 transition-all">
                            - {formatValue(value)}
                            <span className="text-[10px] xl:text-[11px] ml-0.5 font-medium">₸</span>
                        </span>
                    </>
                )}
            </div>
        </div>
    )
}
