import { cn } from "@/shared/lib/utils"

interface ClientCardItemProps {
    client: {
        id: string;
        name: string;
        phone: string;
        total_sum: number;
    };
    className?: string;
}

export function ClientCardItem({ client, className }: ClientCardItemProps) {
    return (
        <div className={cn("flex items-center justify-between p-2 xl:p-3 bg-white border border-[#E8E8E8] rounded-xl transition-all", className)}>
            <div className="space-y-1">
                <div className="font-medium text-[16px] xl:text-[18px] text-[#2D2D2D] tracking-tight transition-all">{client.name}</div>
                <div className="text-[13px] xl:text-[15px] text-[#3B3F44] font-medium tracking-tight transition-all">{client.phone}</div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
                <div className="text-sm xl:text-base text-[#AAB4BC] transition-all">Куплено на:</div>
                <div className="font-medium text-lg xl:text-[20px] text-lightGreen leading-none transition-all">
                    {client.total_sum.toLocaleString()} ₸
                </div>
            </div>
        </div>
    )
}
