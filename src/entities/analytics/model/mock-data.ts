import type { CityData } from '@/entities/channel/model/types'
import type { ProductItem } from '@/entities/product/model/types'
import type { ClientItem } from '@/entities/client/model/types'

export const citiesData: CityData[] = [
    {
        id: 'almaty',
        name: 'Алматы',
        channelsCount: 2,
        items: [
            {
                id: 'aidin-opt',
                name: 'Айдын опт',
                points: 2,
                sold_count: 4,
                sold_sum: 134315,
                plan_sum: 134315,
                returns_count: 0,
                returns_sum: 0,
                progress: 33,
                status: 'over'
            },
            {
                id: 'magnum',
                name: 'Магнум',
                points: 2,
                sold_count: 12,
                sold_sum: 450000,
                plan_sum: 400000,
                returns_count: 1,
                returns_sum: 5000,
                progress: 85,
                status: 'ok'
            }
        ]
    },
    {
        id: 'shymkent',
        name: 'Шымкент',
        channelsCount: 5,
        items: []
    },
    {
        id: 'astana',
        name: 'Астана',
        channelsCount: 1,
        items: []
    }
]

export const productsData: ProductItem[] = [
    {
        id: '1',
        title: 'Гель для стирки Midou 2л',
        article: '95950803030949',
        image: '/productTop.png',
        sold_sum: 1345456,
        sold_count: 64,
        stock_sum: 1345456,
        stock_count: 64,
        return_sum: 0,
        return_count: 0
    },
    {
        id: '2',
        title: 'Омолаживающий набор с 24К зол...',
        article: '95950803030949',
        image: '/productTop.png',
        sold_sum: 1345456,
        sold_count: 64,
        stock_sum: 345456,
        stock_count: 64,
        return_sum: 0,
        return_count: 0
    },
    {
        id: '3',
        title: 'Ультрамягкие натуральные бума...',
        article: '95950803030949',
        image: '/productTop.png',
        sold_sum: 700220,
        sold_count: 301,
        stock_sum: 145920,
        stock_count: 15,
        return_sum: 0,
        return_count: 0
    }
]

export const clientsData: ClientItem[] = [
    { id: '1', name: 'Айзада Midou Бейнеу', phone: '+7 (701) 484 82 40', total_sum: 1345456 },
    { id: '2', name: 'Данияр Султанов Атырау', phone: '+7 (705) 123 45 67', total_sum: 2000300 },
    { id: '3', name: 'Алия Жунусова Алматы', phone: '+7 (707) 234 56 78', total_sum: 1500000 },
    { id: '4', name: 'Сергей Петров Нур-Султан', phone: '+7 (701) 345 67 89', total_sum: 3000000 },
    { id: '5', name: 'Мадина Тулешова Шымкент', phone: '+7 (708) 456 78 90', total_sum: 4200100 },
    { id: '6', name: 'Игорь Сидоров Караганда', phone: '+7 (709) 567 89 01', total_sum: 950000 },
    { id: '7', name: 'Заира Кайратова Павлодар', phone: '+7 (706) 678 90 12', total_sum: 2800500 },
    { id: '8', name: 'Дмитрий Ковалев Усть-Каменогорск', phone: '+7 (702) 789 01 23', total_sum: 1200000 },
]
