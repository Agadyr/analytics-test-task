import { useAnalyticsStore } from '@/entities/analytics/model/store'
import { ProductMetricItem } from './product-metric-item'

interface ProductCardItemProps {
    product: {
        id: string;
        image: string;
        title: string;
        article: string;
        sold_sum: number;
        sold_count: number;
        stock_sum: number;
        stock_count: number;
    };
}

export function ProductCardItem({ product }: ProductCardItemProps) {
    const { selectedItemId, selectItem } = useAnalyticsStore()
    const isSelected = selectedItemId === product.id

    return (
        <div className="border border-[#F0F0F0] rounded-xl bg-white overflow-hidden transition-all">
            <button
                className="flex items-center justify-between p-2 w-full text-left group"
                onClick={() => selectItem(isSelected ? undefined : product.id)}
            >
                <div className="flex items-center gap-3.5">
                    <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100/50 transition-all">
                        <img src={product.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-0.5">
                        <div className="font-semibold text-[15px] xl:text-[17px] text-[#1A1A1A] leading-tight tracking-[-0.01em] transition-all">
                            {product.title}
                        </div>
                        <div className="text-[12px] xl:text-[13px] text-[#95A1AC] font-medium transition-all">
                            артикул: {product.article}
                        </div>
                    </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#F5F5F7] flex items-center justify-center group-hover:bg-[#E8E8EA] transition-colors shrink-0">
                    <img src="/icons/rightArrow.svg" alt="chevron-right" />
                </div>
            </button>

            <div className="flex items-center gap-1.5 px-2 pb-2">
                <ProductMetricItem
                    label="Продано:"
                    value={product.sold_sum}
                    count={product.sold_count}
                    valueColor="text-lightGreen"
                />
                <ProductMetricItem
                    label="Остаток:"
                    value={product.stock_sum}
                    count={product.stock_count}
                />
                <ProductMetricItem
                    label="Возврат:"
                    value={0}
                    count={0}
                    valueColor="text-[#EB5757]"
                />
            </div>
        </div>
    )
}
