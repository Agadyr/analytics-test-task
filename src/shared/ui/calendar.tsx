import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/shared/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            weekStartsOn={1}
            showOutsideDays={showOutsideDays}
            className={cn("pt-2 pb-2 pr-8", className)}
            classNames={{
                months: "flex gap-8",
                month: "flex flex-col gap-4",
                month_caption: "flex justify-center relative items-center h-8",
                caption_label: "text-[15px] font-semibold text-[#2D2D2D] capitalize",
                nav: "flex items-center",
                button_previous: "absolute left-2 top-5 z-10 h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",
                button_next: "absolute right-2 top-5 z-10 h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",
                month_grid: "w-full border-collapse",
                weekdays: "flex",
                weekday: "font-normal w-10 h-8 flex items-center justify-center capitalize",
                week: "flex",
                day: "h-10 w-10 flex items-center justify-center text-[14px] font-normal cursor-pointer transition-colors hover:bg-gray-50 rounded-lg text-[#2D2D2D]",
                day_button: "h-10 w-10 flex items-center justify-center",
                range_start: "!bg-[#007AFF] !text-white !rounded-none",
                range_end: "!bg-[#007AFF] !text-white !rounded-none",
                selected: "!bg-[#007AFF] !rounded-lg",
                today: "font-bold",
                outside: "!text-[#C4C9CE] opacity-60",
                disabled: "!text-gray-300 cursor-not-allowed",
                range_middle: "!bg-[#D1E3FF] !text-black !rounded-none",
                hidden: "invisible",
                ...classNames,
            }}
            components={{
                Chevron: ({ orientation }: { orientation?: string }) =>
                    orientation === "left" ? (
                        <ChevronLeft className="h-5 w-5 text-[#95A1AC]" />
                    ) : (
                        <ChevronRight className="h-5 w-5 text-[#95A1AC]" />
                    ),
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

export { Calendar }
