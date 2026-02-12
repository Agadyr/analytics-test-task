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

const data = [
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

export function ChartCard() {
  return (
    <Card className="col-span-12 rounded-2xl lg:col-span-8 bg-white shadow-none border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center justify-between w-full gap-6">
          <div className="flex flex-col gap-1 bg-[#F6F6F6] p-2 rounded-lg w-[32%]">
            <div className="flex items-center justify-between gap-12">
              <span className="text-[#808A93] text-sm">Текущий месяц:</span>
              <div className="w-4 h-[2px] bg-[#3b82f6] rounded-full"></div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-[22px] text-[#2D2D2D]">1 711 400 ₸</span>
              <span className="text-xs text-[#3B3F44]">64 док.</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 bg-[#F6F6F6] p-2 rounded-lg w-[32%]">
            <div className="flex items-center justify-between gap-12">
              <span className="text-[#808A93] text-sm">Предыдущий месяц:</span>
              <div className="w-4 h-[2px] bg-[#fbbf24] rounded-full"></div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-[22px] text-[#2D2D2D]">1 000 400 ₸</span>
              <span className="text-xs text-[#3B3F44]">154 док.</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 bg-[#F6F6F6] p-2 rounded-lg w-[32%]">
            <div className="flex items-center justify-between gap-12">
              <span className="text-[#808A93] text-sm">Возвраты текущего месяца:</span>
              <div className="w-4 h-[2px] bg-[#ef4444] rounded-full"></div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-[22px] text-[#2D2D2D]">300 000 ₸</span>
              <span className="text-xs text-[#3B3F44]">3 док.</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 pt-0">
        <div className="h-[270px] w-full relative">
          <div className="absolute bottom-10 left-[-4px] text-[11px] text-[#AAB4BC] font-medium">
            2.000.000 ₸
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
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
