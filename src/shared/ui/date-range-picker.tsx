import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { cn } from "@/shared/lib/utils"
import { Calendar } from "@/shared/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shared/ui/popover"
import { ru } from "date-fns/locale"

interface DateRangePickerProps {
    className?: string;
    from?: string;
    to?: string;
}

export function DateRangePicker({
    className,
}: DateRangePickerProps) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2025, 0, 8),
        to: new Date(2025, 1, 5),
    })
    const [isOpen, setIsOpen] = React.useState(false)

    const handleSelect = (range: DateRange | undefined) => {
        setDate(range)
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <div className="flex items-center gap-2 bg-[#ECECEC] hover:bg-[#F6F6F6] rounded-xl p-2 transition-colors cursor-pointer group whitespace-nowrap">
                        <CalendarIcon className="w-4.5 h-4.5 text-[#A19FA1]" />
                        <span className="text-[14px] text-textSecondary font-medium cursor-pointer">
                            Дата: {date?.from ? format(date.from, "dd.MM.yy", { locale: ru }) : "..."} - {date?.to ? format(date.to, "dd.MM.yy", { locale: ru }) : "..."}
                        </span>
                        <ChevronDown className={cn("w-4 h-4 text-[#A19FA1] transition-transform", isOpen && "rotate-180")} />
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto p-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                    align="end"
                    sideOffset={8}
                >
                    <div className="bg-white">
                        <div className="border-b border-[#ececec]">
                            <Calendar
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={handleSelect}
                                numberOfMonths={2}
                            />
                        </div>
                        <div className="flex justify-end pr-3 pb-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-[#007AFF] hover:bg-[#0062CC] text-white px-3 h-8 rounded-sm font-medium text-sm transition-colors"
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
