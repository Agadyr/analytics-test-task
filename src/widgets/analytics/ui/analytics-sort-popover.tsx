import { ArrowUpDown, Check } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { cn } from '@/shared/lib/utils'
import type { LucideIcon } from 'lucide-react'

export interface SortOption {
    value: string
    label: string
    icon: LucideIcon
}

interface AnalyticsSortPopoverProps {
    value: string
    onValueChange: (value: string) => void
    options: SortOption[]
}

export function AnalyticsSortPopover({ value, onValueChange, options }: AnalyticsSortPopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#F5F5F5] transition-colors cursor-pointer group">
                    <ArrowUpDown className="w-4 h-4 text-[#2D2D2D] transition-colors" />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-1 rounded-2xl shadow-xl border-[#F0F0F0]" align="end" sideOffset={8}>
                <div className="space-y-1">
                    {options.map((option) => {
                        const Icon = option.icon
                        return (
                            <button
                                key={option.value}
                                onClick={() => onValueChange(option.value)}
                                className={cn("w-full flex items-center justify-between p-2 rounded-xl transition-colors cursor-pointer text-left")}
                            >
                                <div className="flex items-center">
                                    <div className={cn("w-8 h-8 flex items-center justify-center")}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span>{option.label}</span>
                                </div>
                                {value === option.value && <Check className="w-5 h-5" />}
                            </button>
                        )
                    })}
                </div>
            </PopoverContent>
        </Popover>
    )
}
