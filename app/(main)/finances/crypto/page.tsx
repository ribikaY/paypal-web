import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cryptos } from '@/lib/data'
import { MoveLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CryptoGraph from '../components/cryptoGraph'

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
        <div className="container py-7 border-4 border-transparent sm:py-10  md:px-20">
            <Link href="/" className='inline-block'>
                <div className='flex gap-4 items-center text-sm'>
                    <MoveLeft size={20} className='text-muted-foreground/80' />
                    <p>Crypto</p>
                </div>
            </Link>
            <div className="sm:max-w-5xl mx-auto my-6 sm:my-12">
                <Tabs defaultValue="Bitcoin" >
                    <TabsList className="w-full bg-transparent border-b-2 h-11 flex justify-between gap-4 sm:grid sm:grid-cols-5">
                        {
                            cryptos.map(crypto => (

                                <TabsTrigger key={crypto.name} value={crypto.name} className='pb-5 bg-transparent rounded-none border-b text-primary data-[state=active]:border-brand-foreground data-[state=active]:shadow-none sm:pb-3.5 sm:border-b-2'>
                                    <Image
                                        src={`/images/finances/crypto/${crypto.icon}.png`}
                                        alt={crypto.icon}
                                        width={20}
                                        height={20}
                                        className='sm:mr-2'
                                    />
                                    <span className='hidden sm:inline-block'>
                                        {crypto.name}
                                    </span>
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>
                    {cryptos.map((crypto) => (
                        <TabsContent key={crypto.name} value={crypto.name} className="sm:w-3/4 mx-auto">
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