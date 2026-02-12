import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import ChartCardItem from './ui/chart-card-item'
import { analyticsData } from '@/entities/analytics/model/mock-data'

export function ChartCard() {
  return (
    <Card className="col-span-12 rounded-2xl lg:col-span-8 bg-white shadow-none border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center justify-between w-full gap-6">
          <ChartCardItem title="Текущий месяц" value="1 711 400 ₸" count="64 док." color="bg-[#3b82f6]" />
          <ChartCardItem title="Предыдущий месяц" value="1 000 400 ₸" count="154 док." color="bg-[#fbbf24]" />
          <ChartCardItem title="Возвраты текущего месяца" value="300 000 ₸" count="3 док." color="bg-[#ef4444]" />
        </div>
      </CardHeader>

      <CardContent className="px-4 pt-0">
        <div className="h-[270px] w-full relative">
          <div className="absolute bottom-10 left-[-4px] text-[11px] text-[#AAB4BC] font-medium">
            2.000.000 ₸
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={analyticsData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#007AFF" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#007AFF" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFCC00" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#FFCC00" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF3B30" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#FF3B30" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="0" vertical={true} horizontal={false} stroke="#E5E5EA" />
              <XAxis
                dataKey="date"
                axisLine={{ stroke: '#E5E5EA' }}
                tickLine={false}
                tick={{ fill: '#AAB4BC', fontSize: 10 }}
                stroke="#E5E5EA"
                dy={10}
                interval={1}
                tickFormatter={(value) => value.split('.')[0] + '.' + value.split('.')[1] + '.' + value.split('.')[2].slice(-2)}
              />
              <YAxis hide={true} domain={[0, 10000]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                itemStyle={{ fontSize: '13px', fontWeight: 600 }}
              />
              <Area
                type="linear"
                dataKey="previous"
                stroke="#FFCC00"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPrevious)"
                dot={{ r: 2, fill: '#FFCC00', strokeWidth: 0 }}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
              <Area
                type="linear"
                dataKey="current"
                stroke="#007AFF"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorCurrent)"
                dot={{ r: 2, fill: '#007AFF', strokeWidth: 0 }}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
              <Area
                type="linear"
                dataKey="returns"
                stroke="#FF3B30"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorReturns)"
                dot={{ r: 2, fill: '#FF3B30', strokeWidth: 0 }}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

  )
}
