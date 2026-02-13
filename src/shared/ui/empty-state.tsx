import { Info } from "lucide-react"
import { cn } from "@/shared/lib/utils"

interface EmptyStateProps {
    title: string
    description: string
    className?: string
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
    return (
        <div className={cn("flex items-center gap-3 bg-[#F6F6F6] rounded-xl p-2 m-2", className)}>
            <div className="w-8 h-8 rounded-full bg-[#AAB4BC] flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-white" />
            </div>
            <div>
                <div className="font-medium text-[15px] text-[#2D2D2D] leading-tight">{title}</div>
                <div className="text-[13px] text-textSecondary">{description}</div>
            </div>
        </div>
    )
}
