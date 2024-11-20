import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MoveLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CryptoGraph from '../components/cryptoGraph'
import { cryptos } from '@/lib/data'

export interface CryptoDataType {
    name: string;
    icon: string;
    price: number;
    fluctuation: {
        status: "increase" | "decrease";
        amount: number;
        percentage: number
    }
    date: string;
}

const FinanceCrypto = () => {
    return (
        <div className="container mx-auto px-20 py-10">
            <Link href="/" className='inline-block'>
                <div className='flex gap-4 items-center text-sm'>
                    <MoveLeft size={20} className='text-muted-foreground/80' />
                    <p>Crypto</p>
                </div>
            </Link>
            <div className="max-w-5xl mx-auto my-12">
                <Tabs defaultValue="Bitcoin" >
                    <TabsList className="grid w-full grid-cols-5 bg-transparent border-b-2 h-11">
                        {
                            cryptos.map(crypto => (

                                <TabsTrigger key={crypto.name} value={crypto.name} className='pb-3.5 bg-transparent rounded-none border-b-2 text-primary data-[state=active]:border-brand-foreground data-[state=active]:shadow-none'>
                                    <Image
                                        src={`/images/finances/crypto/${crypto.icon}.png`}
                                        alt={crypto.icon}
                                        width={20}
                                        height={20}
                                        className='mr-2'
                                    />
                                    {crypto.name}
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>
                    {cryptos.map((crypto) => (
                        <TabsContent key={crypto.name} value={crypto.name} className="w-3/4 mx-auto">
                            <CryptoGraph cryptoData={crypto} />
                        </TabsContent>
                    ))}

                </Tabs>
            </div>
            <div className="flex w-full space-x-2">
            </div>
        </div>
    )
}

export default FinanceCrypto