"use client";
import { Button } from '@/components/ui/button'
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { cryptoChartData } from '@/lib/data';
import { ArrowDown, ArrowRightLeft, ArrowUp } from 'lucide-react'
import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import type { CryptoDataType } from '../crypto/page';

const chartConfig = {
    // views: {
    //     label: "Crypto",
    // },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    // mobile: {
    //     label: "Mobile",
    //     color: "hsl(var(--chart-2))",
    // },
} satisfies ChartConfig

const CryptoGraph = ({ cryptoData }: { cryptoData: CryptoDataType }) => {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("desktop")

    // const total = React.useMemo(
    //     () => ({
    //         desktop: cryptoChartData.reduce((acc, curr) => acc + curr.desktop, 0),
    //         mobile: cryptoChartData.reduce((acc, curr) => acc + curr.mobile, 0),
    //     }),
    //     []
    // )

    return (
        <div className='mt-9'>
            <div className='space-y-1'>
                <p className='text-sm text-gray-900'>{cryptoData.name}</p>
                <p className='text-4xl font-medium'>${cryptoData.price.toLocaleString()}</p>
                <p className='text-[13px] text-gray-700 flex items-center gap-2'>
                    <span className={`${cryptoData.fluctuation.status === "increase" ? 'text-green-700' : 'text-red-700'} flex items-center`}>
                        {
                            cryptoData.fluctuation.status === "increase" ? (
                                <ArrowUp className="h-4 w-4 mr-1" />
                            ) : (
                                <ArrowDown className="h-4 w-4 mr-1" />
                            )
                        }
                        ${cryptoData.fluctuation.amount.toLocaleString()} ({cryptoData.fluctuation.percentage}%)
                    </span>
                    {cryptoData.date}
                </p>
            </div>
            <ChartContainer
                config={chartConfig}
                className="aspect-auto h-[250px] w-full"
            >
                <LineChart
                    accessibilityLayer
                    data={cryptoChartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
                        tickFormatter={(value) => {
                            const date = new Date(value)
                            return date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                            })
                        }}
                    />
                    <ChartTooltip
                        content={
                            <ChartTooltipContent
                                className="w-[150px]"
                                nameKey="views"
                                labelFormatter={(value) => {
                                    return new Date(value).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                }}
                            />
                        }
                    />
                    <Line
                        dataKey={activeChart}
                        type="monotone"
                        stroke={`${cryptoData.fluctuation.status === 'increase' ? 'green' : `var(--color-${activeChart})`}`}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>
            <div className='space-y-4 mt-14'>
                <div className="inline-block relative -translate-x-1/2 left-1/2">
                    <div className="flex gap-6 rounded-full p-1 bg-neutral-200/45">
                        {["24H", "1W", "1M", "6M", "1Y", "ALL"].map((amount) => (
                            <Button
                                key={amount}
                                variant="ghost"
                                className='text-xs bg-transparent first-of-type:bg-white first-of-type:text-brand hover:bg-white text-gray-600 shadow-none border-brand py-5 px-5 hover:text-brand'
                            >
                                {amount}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button className="flex-grow bg-brand hover:bg-brand/90 py-5">Buy</Button>
                    <Button size="icon" className='bg-brand hover:bg-brand/90 p-5'>
                        <ArrowRightLeft className="h-4 w-4" />
                    </Button>
                </div>
                <div className="grid grid-cols-4 gap-2 w-full">
                    {["$20", "$50", "$100", "$500"].map((amount) => (
                        <Button key={amount} variant="outline" className='text-brand border-brand py-5 hover:text-brand hover:bg-accent'>
                            {amount}
                        </Button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CryptoGraph