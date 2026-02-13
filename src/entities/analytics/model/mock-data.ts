import type { CityData } from '@/entities/channel/model/types'
import type { ProductItem } from '@/entities/product/model/types'
import type { ClientItem } from '@/entities/client/model/types'
import type { ManagerItem } from '@/entities/manager/model/types'

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
                progress: 0,
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
                progress: 53,
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
    { id: '1', name: 'Айзада Midou Бейнеу', phone: '+7 (701) 484 82 40', total_sum: 1345456, total_count: 64 },
    { id: '2', name: 'Данияр Султанов Атырау', phone: '+7 (705) 123 45 67', total_sum: 2000300, total_count: 120 },
    { id: '3', name: 'Алия Жунусова Алматы', phone: '+7 (707) 234 56 78', total_sum: 1500000, total_count: 85 },
    { id: '4', name: 'Сергей Петров Нур-Султан', phone: '+7 (701) 345 67 89', total_sum: 3000000, total_count: 45 },
    { id: '5', name: 'Мадина Тулешова Шымкент', phone: '+7 (708) 456 78 90', total_sum: 4200100, total_count: 210 },
    { id: '6', name: 'Игорь Сидоров Караганда', phone: '+7 (709) 567 89 01', total_sum: 950000, total_count: 32 },
    { id: '7', name: 'Заира Кайратова Павлодар', phone: '+7 (706) 678 90 12', total_sum: 2800500, total_count: 156 },
    { id: '8', name: 'Дмитрий Ковалев Усть-Каменогорск', phone: '+7 (702) 789 01 23', total_sum: 1200000, total_count: 58 },
]

export const analyticsData = [
    { date: '01.12.25', current: 0, previous: 0, returns: 0 },
    { date: '02.12.25', current: 0, previous: 5000, returns: 0 },
    { date: '03.12.25', current: 0, previous: 0, returns: 0 },
    { date: '04.12.25', current: 4000, previous: 500, returns: 0 },
    { date: '05.12.25', current: 5000, previous: 1000, returns: 0 },
    { date: '06.12.25', current: 1500, previous: 7000, returns: 0 },
    { date: '07.12.25', current: 9000, previous: 2000, returns: 0 },
    { date: '08.12.25', current: 3000, previous: 6500, returns: 0 },
    { date: '09.12.25', current: 2000, previous: 2000, returns: 0 },
    { date: '10.12.25', current: 5000, previous: 0, returns: 0 },
    { date: '11.12.25', current: 0, previous: 0, returns: 0 },
    { date: '12.12.25', current: 6000, previous: 0, returns: 0 },
    { date: '13.12.25', current: 1000, previous: 0, returns: 0 },
    { date: '14.12.25', current: 500, previous: 0, returns: 0 },
    { date: '15.12.25', current: 8000, previous: 0, returns: 0 },
    { date: '16.12.25', current: 2000, previous: 0, returns: 0 },
    { date: '17.12.25', current: 1000, previous: 0, returns: 4000 },
    { date: '18.12.25', current: 5000, previous: 0, returns: 200 },
    { date: '19.12.25', current: 0, previous: 0, returns: 0 },
    { date: '20.12.25', current: 0, previous: 0, returns: 7000 },
    { date: '21.12.25', current: 0, previous: 0, returns: 1000 },
    { date: '22.12.25', current: 5000, previous: 0, returns: 6800 },
    { date: '23.12.25', current: 0, previous: 0, returns: 1500 },
    { date: '24.12.25', current: 3500, previous: 0, returns: 0 },
    { date: '25.12.25', current: 5500, previous: 0, returns: 0 },
    { date: '26.12.25', current: 1000, previous: 0, returns: 0 },
    { date: '27.12.25', current: 9000, previous: 0, returns: 0 },
    { date: '28.12.25', current: 3000, previous: 0, returns: 0 },
    { date: '29.12.25', current: 1500, previous: 0, returns: 0 },
    { date: '30.12.25', current: 5000, previous: 0, returns: 0 },
    { date: '31.12.25', current: 1000, previous: 0, returns: 0 },
]

export interface CityAnalyticsItem {
    id: string
    name: string
    buyers_count: number
    total_sum: number
    total_count: number
}

export const topCitiesData: CityAnalyticsItem[] = [
    { id: '1', name: 'Алматы', buyers_count: 4567, total_sum: 1345456, total_count: 300 },
    { id: '2', name: 'Астана', buyers_count: 3210, total_sum: 987654, total_count: 150 },
    { id: '3', name: 'Шымкент', buyers_count: 2800, total_sum: 654321, total_count: 200 },
    { id: '4', name: 'Караганда', buyers_count: 1900, total_sum: 432100, total_count: 100 },
    { id: '5', name: 'Талдыкорган', buyers_count: 1500, total_sum: 321000, total_count: 80 },
    { id: '6', name: 'Павлодар', buyers_count: 1200, total_sum: 210500, total_count: 70 },
    { id: '7', name: 'Усть-Каменогорск', buyers_count: 950, total_sum: 180000, total_count: 60 },
]

export const topCategoriesData: ProductItem[] = [
    {
        id: 'cat1',
        title: 'Бытовая техника',
        subTitle: 'Холодильники, пылесосы, утюги и др.',
        image: '/productTop.png',
        sold_sum: 1345456,
        sold_count: 64,
        return_sum: 0,
        return_count: 0
    },
    {
        id: 'cat2',
        title: 'Малая техника для кухни',
        subTitle: 'Мультиварки, блендеры, миксеры и др.',
        image: '/productTop.png',
        sold_sum: 1345456,
        sold_count: 64,
        return_sum: 0,
        return_count: 0
    }
]

export const topReturnsData: ProductItem[] = [
    {
        id: 'ret1',
        title: 'Телевизор PD',
        article: '95950803030949',
        image: '/productTop.png',
        return_sum: 10000000,
        return_count: 301,
        stock_sum: 1345456,
        stock_count: 32,
        sold_sum: 700220,
        sold_count: 105
    },
    {
        id: 'ret2',
        title: 'Ультрамягкие натуральные бума...',
        article: '95950803030949',
        image: '/productTop.png',
        return_sum: 5000000,
        return_count: 245,
        stock_sum: 50000,
        stock_count: 12,
        sold_sum: 345220,
        sold_count: 100
    }
]

export const titles = {
    product: 'Нет товаров',
    category: 'Нет категорий',
    return: 'Нет возвратов'
}
export const descriptions = {
    product: 'Нет найденных товаров за данный период',
    category: 'Нет найденных категорий за данный период',
    return: 'Нет найденных возвратов за данный период'
}

export const managersData: ManagerItem[] = [
    {
        id: '1',
        name: 'Алия Нурбекова',
        store: 'Каспи',
        image: '/productTop.png',
        sold_sum: 2500200,
        sold_count: 30,
        returns_sum: 100,
        returns_count: 1,
        progress: 0,
    },
    {
        id: '2',
        name: 'Данияр Султанов',
        store: 'Halyk',
        image: '/productTop.png',
        sold_sum: 3100000,
        sold_count: 50,
        returns_sum: 200,
        returns_count: 2,
        progress: 53,
    },
    {
        id: '3',
        name: 'Айгуль Тулегенова',
        store: 'Финанс',
        image: '/productTop.png',
        sold_sum: 1800500,
        sold_count: 20,
        returns_sum: 150,
        returns_count: 1,
        progress: 48,
    },
    {
        id: '4',
        name: 'Руслан Жумабаев',
        store: 'Тенге',
        image: '/productTop.png',
        sold_sum: 1200000,
        sold_count: 15,
        returns_sum: 50,
        returns_count: 0,
        progress: 30,
    },
]