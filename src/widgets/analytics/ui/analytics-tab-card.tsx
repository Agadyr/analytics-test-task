import React from 'react'
import { Card, CardHeader, CardContent } from '@/shared/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs'
import { cn } from '@/shared/lib/utils'

export interface TabConfig {
    value: string
    label: string
    content: React.ReactNode
}

interface AnalyticsTabCardProps {
    tabs: TabConfig[]
    defaultValue: string
    onValueChange?: (value: string) => void
    extraHeaderAction?: React.ReactNode
    className?: string
}

export function AnalyticsTabCard({
    tabs,
    defaultValue,
    onValueChange,
    extraHeaderAction,
    className,
}: AnalyticsTabCardProps) {
    return (
        <Card className={cn("max-h-[600px] h-full bg-white border-none! shadow-none! overflow-y-auto flex flex-col no-scrollbar", className)}>
            <Tabs defaultValue={defaultValue} onValueChange={onValueChange} className="w-full flex-1 flex flex-col">
                <CardHeader className="p-0 border-b border-gray-100 flex-row items-center justify-between h-[54px] shrink-0 gap-2">
                    <TabsList className="bg-transparent p-0 flex h-full justify-start px-2 md:px-3 overflow-x-auto scrollbar-hide w-full md:w-auto">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="cursor-pointer data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-[#007AFF] data-[state=active]:text-[#2D2D2D] text-[#AAB4BC] h-full rounded-none p-0 mr-3 md:mr-4 font-normal! transition-all hover:text-gray-600 bg-transparent border-0 text-[14px] md:text-[15px] xl:text-[17px] shrink-0"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {extraHeaderAction && (
                        <div className="pr-2 md:pr-5 flex items-center shrink-0">
                            {extraHeaderAction}
                        </div>
                    )}
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
                    {tabs.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value} className="mt-0 flex-1 flex flex-col overflow-hidden">
                            {tab.content}
                        </TabsContent>
                    ))}
                </CardContent>
            </Tabs>
        </Card>
    )
}
