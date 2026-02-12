export type City = 'Алматы' | 'Шымкент' | 'Астана'
export type Channel = 'Все каналы' | 'Онлайн' | 'Офлайн'

export interface SeriesPoint {
    date: string
    value: number
    type: 'sales' | 'returns' | 'plan'
}

export interface TopItem {
    id: string
    title: string
    subtitle?: string
    value: number
    secondary?: number
}

export interface AnalyticsState {
    city: City | 'Все'
    channel: Channel
    from: string
    to: string
    selectedItemId?: string
    series: SeriesPoint[]
    topProducts: TopItem[]
    topClients: TopItem[]
    setCity: (c: AnalyticsState['city']) => void
    setChannel: (c: Channel) => void
    setRange: (from: string, to: string) => void
    selectItem: (id?: string) => void
}
