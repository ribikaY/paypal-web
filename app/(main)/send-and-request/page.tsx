import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { User } from 'lucide-react'
import React from 'react'

const SendAndRequest = () => {
    return (
        <div className='pt-14 pb-24'>
            <div className='w-[510px] mx-auto'>
                <Card className='w-full flex flex-col items-center px-10 mx-auto'>
                    <CardHeader>
                        <div className="flex justify-between items-center gap-6">
                            <div className="flex justify-center items-center w-24 h-24 rounded-full border">
                                <User className='text-brand' size={40} />
                            </div>
                            <p className='text-xl tracking-wide'>ribikayonas123@gmail.com</p>
                        </div>
                    </CardHeader>
                    <CardContent className='space-y-6'>
                        <div className="flex justify-evenly gap-8">
                            <div className='text-center space-y-1.5'>
                                <p className='text-sm text-blue-950'>You send</p>
                                <p className='text-4xl font-medium flex items-center gap-2 pb-2'><span className='text-xl text-muted-foreground'>$</span>2.36</p>
                                <p className='bg-brand-neutral text-xs inline-block py-1 px-2.5 rounded-xl font-medium'>USD</p>
                            </div>
                            <div className='text-center space-y-1.5'>
                                <p className='text-sm text-blue-950'>Recipient gets</p>
                                <p className='text-4xl font-medium flex items-center gap-2 pb-2'><span className='text-xl text-muted-foreground'>$</span>2.98</p>
                                <p className='bg-brand-neutral text-xs inline-block py-1 px-2.5 rounded-xl font-medium'>SGD</p>
                            </div>
                        </div>
                        <div className="space-y-1.5 text-center">
                            <div className="text-sm">Conversion rate: 1 USD = 1.2611 SGD</div>
                            <p className="text-xs text-gray-700 leading-5">
                                This rate includes a currency conversion spread. The amount you'll pay may change as we lock in your rate, so check your final amount and fee details before you send.
                            </p>
                        </div>
                        <Textarea
                            placeholder="Enter your message here"
                            defaultValue="A gift for you"
                            className="resize-none leading-6 pl-6 pt-6 border-gray-400"
                        />
                    </CardContent>
                </Card>

                <div className="px-16 space-y-3 mt-10">
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