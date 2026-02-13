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
        <div className={cn("bg-white rounded-xl p-3 border border-gray-100", className)}>
            <div className="space-y-3 min-h-[100px] transition-all duration-300">
                {currentSet.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-3 md:p-4 min-w-[260px] md:min-w-[300px] flex-1">
                        <div className="space-y-3 md:space-y-4">
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-between items-center text-xs md:text-sm">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="text-gray-400 text-[10px] md:text-xs bg-gray-50 px-2 py-0.5 rounded-full">{item.documents}</span>
                                </div>
                                <div className={cn("text-lg md:text-xl font-semibold", item.valueColor || "text-[#2D2D2D]")}>
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 md:mt-4">
                <button
                    onClick={handlePrev}
                    className="w-6 h-6 flex items-center justify-center bg-[#F1F3F5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                    <img src="/icons/rightArrow.svg" alt="left arrow" className="rotate-180" />
                </button>
                <button
                    onClick={handleNext}
                    className="w-6 h-6 flex items-center justify-center bg-[#F1F3F5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                    <img src="/icons/rightArrow.svg" alt="right arrow" />
                </button>
            </div>
        </div>
    )
}
