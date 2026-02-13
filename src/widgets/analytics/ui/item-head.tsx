import type { Item } from "@/entities/analytics/model/types"

interface ItemHeadProps {
    item: Item
}
export default function ItemHead({ item }: ItemHeadProps) {
    const mainTitle = item.name || item.title
    const subText = item.store || item.subTitle || (item.article ? `артикул: ${item.article}` : '')

    return (
        <div className="flex items-center justify-between pb-1 w-full text-left group">
            <div className="flex items-center gap-1.5">
                <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] rounded-lg overflow-hidden shrink-0 border border-[#E8E8E8] transition-all">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-0.5">
                    <div className="font-medium text-[15px] xl:text-[17px] text-[#1A1A1A] leading-tight tracking-[-0.01em] transition-all line-clamp-1">
                        {mainTitle}
                    </div>
                    {subText && (
                        <div className="text-[12px] xl:text-[13px] text-[#95A1AC] font-medium transition-all">
                            {subText}
                        </div>
                    )}
                </div>
            </div>
            <div className="w-7 h-7 rounded-lg bg-[#F5F5F7] flex items-center justify-center group-hover:bg-[#E8E8EA] transition-colors shrink-0">
                <img src="/icons/rightArrow.svg" alt="chevron-right" />
            </div>
        </div>
    )
}   