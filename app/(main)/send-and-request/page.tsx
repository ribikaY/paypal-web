import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { User } from 'lucide-react'
import React from 'react'

const SendAndRequest = () => {
    const sentData = [
        {
            type: "sender",
            amount: 2.36,
            unit: "USD"
        },
        {
            type: "recipient",
            amount: 2.98,
            unit: "SGD"
        },
    ]

    return (
        <div className='pt-14 pb-24'>
            <div className='container sm:w-[550px]'>
                <Card className='w-full flex flex-col items-center mx-auto sm:px-10'>
                    <CardHeader>
                        <div className="flex justify-between items-center gap-6 flex-col sm:flex-row">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full border sm:w-24 sm:h-24">
                                <User className='text-brand' size={40} />
                            </div>
                            <p className='text-base tracking-wide sm:text-xl'>ribikayonas123@gmail.com</p>
                        </div>
                    </CardHeader>
                    <CardContent className='space-y-6'>
                        <div className="flex justify-between gap-2 sm:justify-evenly sm:gap-8">
                            {
                                sentData.map((value, index) => (
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    <div key={index} className='text-center space-y-1.5'>
                                        <p className='text-sm text-blue-950'>{value.type === 'sender' ? 'You send' : 'Recipient gets'}</p>
                                        <p className='text-3xl font-medium flex items-center gap-2 pb-2 sm:text-4xl'><span className='text-lg text-muted-foreground sm:text-xl'>$</span>{value.amount}</p>
                                        <p className='bg-brand-neutral text-xs inline-block py-1 px-2.5 rounded-xl font-medium'>{value.unit}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="space-y-1.5 text-center">
                            <div className="text-sm">Conversion rate: 1 USD = 1.2611 SGD</div>
                            <p className="text-xs text-gray-700 leading-5">
                                This rate includes a currency conversion spread. The amount you&apos;ll pay may change as we lock in your rate, so check your final amount and fee details before you send.
                            </p>
                        </div>
                        <Textarea
                            placeholder="Enter your message here"
                            defaultValue="A gift for you"
                            className="resize-none leading-6 pl-6 pt-6 border-gray-400"
                        />
                    </CardContent>
                </Card>

                <div className="space-y-3 mt-10 sm:px-16">
                    <Button className="w-full rounded-full bg-[#1c43ae] hover:bg-brand/95 duration-300 font-semibold" size="lg">
                        Next
                    </Button>
                    <Button variant="ghost" className="rounded-full w-full text-brand-foreground font-semibold hover:bg-white hover:text-brand-foreground/90" size="lg">
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SendAndRequest