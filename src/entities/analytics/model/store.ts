import { create } from 'zustand'
import { addDays, format } from 'date-fns'
import type { SeriesPoint, TopItem, AnalyticsState } from './types'

const today = new Date(2025, 11, 1) // mock month
const genSeries = () => {
    const points: SeriesPoint[] = []
    for (let i = 0; i < 31; i++) {
        const d = addDays(today, i)
        points.push({ date: format(d, 'dd.MM'), value: 800 + Math.random() * 1400, type: 'sales' })
        points.push({ date: format(d, 'dd.MM'), value: 200 + Math.random() * 600, type: 'plan' })
        points.push({ date: format(d, 'dd.MM'), value: Math.random() * 300, type: 'returns' })
    }
    return points
}

const genTop = (prefix: string): TopItem[] =>
    Array.from({ length: 10 }).map((_, i) => ({
        id: `${prefix}-${i + 1}`,
        title: `${prefix} ${i + 1}`,
        subtitle: `артикул: 99050${i + 1}`,
        value: Math.round(50000 + Math.random() * 300000),
        secondary: Math.round(Math.random() * 1000),
    }))

export const useAnalyticsStore = create<AnalyticsState>()((set) => ({
    city: 'Все',
    channel: 'Все каналы',
    from: format(today, 'yyyy-MM-01'),
    to: format(addDays(today, 30), 'yyyy-MM-dd'),
    selectedItemId: undefined,
    series: genSeries(),
    topProducts: genTop('Товар'),
    topClients: genTop('Клиент'),
    setCity: (city) => set({ city }),
    setChannel: (channel) => set({ channel }),
    setRange: (from, to) => set({ from, to }),
    selectItem: (selectedItemId) => set({ selectedItemId }),
}))
