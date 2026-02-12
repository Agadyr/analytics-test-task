import * as React from "react"
import { cn } from "@/shared/lib/utils"

export interface KpiMetric {
    label: string;
    value: string;
    documents: string;
    valueColor?: string;
}

export interface KpiMetricSet {
    items: KpiMetric[];
}

interface KpiMetricsCarouselProps {
    data: KpiMetricSet[];
    className?: string;
}

export function KpiMetricsCarousel({ data, className }: KpiMetricsCarouselProps) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0))
    }

    const currentSet = data[activeIndex]

    return (
        <div className={cn("bg-white rounded-2xl p-3 border border-gray-100", className)}>
            <div className="space-y-3 min-h-[100px] transition-all duration-300">
                {currentSet.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        <p className="text-[15px] text-[#9CA3AF] transition-all">{item.label}</p>
                        <div className="flex items-center justify-between">
                            <span className={cn("text-lg font-medium text-[#2D2D2D]", item.valueColor)}>{item.value}</span>
                            <span className="text-[#3B3F44] text-sm">{item.documents}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 mt-4">
                <button
                    onClick={handlePrev}
                    className="w-8 h-8 flex items-center justify-center bg-[#F1F3F5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                    <img src="/icons/rightArrow.svg" alt="left arrow" className="rotate-180" />
                </button>
                <button
                    onClick={handleNext}
                    className="w-8 h-8 flex items-center justify-center bg-[#F1F3F5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                    <img src="/icons/rightArrow.svg" alt="right arrow" />
                </button>
            </div>
        </div>
    )
}
