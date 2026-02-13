import { useAnalyticsStore } from '@/entities/analytics/model/store'
import { ProductMetricItem } from './product-metric-item'
import ItemHead from './item-head'

interface ProductCardItemProps {
    item: {
        id: string;
        image: string;
        title: string;
        article?: string;
        subTitle?: string;
        sold_sum: number;
        sold_count: number;
        stock_sum?: number;
        stock_count?: number;
        return_sum?: number;
        return_count?: number;
    };
    mode?: 'product' | 'category' | 'return';
    filterType?: 'sum' | 'count';
}

export function ProductCardItem({ item, mode = 'product', filterType = 'sum' }: ProductCardItemProps) {
    const { selectedItemId, selectItem } = useAnalyticsStore()
    const isSelected = selectedItemId === item.id

    return (
        <div className="border border-[#E8E8E8] rounded-xl bg-white overflow-hidden transition-all">
            <div
                className="flex items-center justify-between p-2 w-full text-left group"
                onClick={() => selectItem(isSelected ? undefined : item.id)}
            >
                <ItemHead item={item} />
            </div>

            <div className="flex items-center gap-1.5 px-2 pb-2">
                {mode === 'category' ? (
                    <>
                        <ProductMetricItem
                            label="Продано:"
                            value={item.sold_sum}
                            count={item.sold_count}
                            valueColor="text-lightGreen"
                            primaryDisplay={filterType}
                        />
                        <ProductMetricItem
                            label="Возвраты:"
                            value={item.return_sum || 0}
                            count={item.return_count || 0}
                            valueColor="text-[#EB5757]"
                            primaryDisplay={filterType}
                        />
                    </>
                ) : mode === 'return' ? (
                    <>
                        <ProductMetricItem
                            label="Возврат:"
                            value={item.return_sum || 0}
                            count={item.return_count || 0}
                            valueColor="text-[#EB5757]"
                            primaryDisplay={filterType}
                        />
                        <ProductMetricItem
                            label="Остаток:"
                            value={item.stock_sum || 0}
                            count={item.stock_count || 0}
                            primaryDisplay={filterType}
                        />
                        <ProductMetricItem
                            label="Продано:"
                            value={item.sold_sum}
                            count={item.sold_count}
                            valueColor="text-lightGreen"
                            primaryDisplay={filterType}
                        />
                    </>
                ) : (
                    <>
                        <ProductMetricItem
                            label="Продано:"
                            value={item.sold_sum}
                            count={item.sold_count}
                            valueColor="text-lightGreen"
                            primaryDisplay={filterType}
                        />
                        <ProductMetricItem
                            label="Остаток:"
                            value={item.stock_sum || 0}
                            count={item.stock_count || 0}
                            primaryDisplay={filterType}
                        />
                        <ProductMetricItem
                            label="Возврат:"
                            value={item.return_sum || 0}
                            count={item.return_count || 0}
                            valueColor="text-[#EB5757]"
                            primaryDisplay={filterType}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
