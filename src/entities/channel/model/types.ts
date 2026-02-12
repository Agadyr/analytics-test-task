export interface ChannelItem {
    id: string
    name: string
    points: number
    sold_count: number
    sold_sum: number
    plan_sum: number
    returns_count: number
    returns_sum: number
    progress: number
    status: 'over' | 'ok' | 'fail'
}

export interface CityData {
    id: string
    name: string
    channelsCount: number
    items: ChannelItem[]
}
