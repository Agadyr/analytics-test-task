interface ChartCardItemProps {
    title: string;
    value: string;
    count: string;
    color: string;
}

export default function ChartCardItem({ title, value, count, color }: ChartCardItemProps) {
    return (
        <div className="flex flex-col gap-1 bg-[#F6F6F6] p-2 rounded-lg w-[32%]">
            <div className="flex items-center justify-between gap-12">
                <span className="text-textSecondary text-sm">{title}</span>
                <div className={`w-4 h-[2px] ${color} rounded-full`}></div>
            </div>
            <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-[22px] text-[#2D2D2D]">{value}</span>
                <span className="text-xs text-[#3B3F44]">{count}</span>
            </div>
        </div>
    )
}