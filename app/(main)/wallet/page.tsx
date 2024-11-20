import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import visaLogoImage from "@/public/images/logos/visa.png";
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Wallet = () => {
    return (
        <div className="flex min-h-screen pb-24">
            <div className="w-1/2 pl-12 pt-6 pb-10">
                <div className="w-2/5 mx-auto space-y-3.5">
                    <div className="mx-auto flex justify-center">
                        <Button className="bg-[#1c43ae] px-6 rounded-full mx-auto py-5">Link a card or bank</Button>
                    </div>
                    <Card className="border-2 border-brand-foreground pt-4">
                        <CardContent className="flex gap-4">
                            <div className="h-8 w-16 bg-gray-300" />
                            <div className="space-y-1">
                                <p className="text-brand-foreground">Visa</p>
                                <p className="text-sm">Debit **0687</p>
                                <p className="bg-green-700 text-white text-xs p-1 rounded-md">PREFERRED</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="w-1/2 pl-0 pr-10 pt-12">
                <div className="w-1/2">
                    <div className="w-full h-72 bg-zinc-400 rounded-xl flex justify-between items-end px-4 text-white">
                        <p className="mb-5">**0687</p>
                        <Image
                            src={visaLogoImage}
                            alt="visa"
                            placeholder="blur"
                            // blurDataURL={logoImage}
                            priority={true}
                            width={77}
                            height={35}
                            className="object-contain self-end"
                        />
                    </div>
                    <div className="mt-4">
                        <p className="text-sm">Visa Debit **0687</p>
                        <Button variant="link" className="text-brand-foreground font-semibold p-0 text-sm">Give it a nickname</Button>
                    </div>
                    <div className="my-6">
                        <p className="text-sm leading-loose">Expiration date</p>
                        <p className="text-sm">12/2027</p>
                    </div>
                    <div className="text-center">
                        <div className="space-y-2.5">
                            <Check size={20} className="text-white bg-green-500 rounded-full mx-auto" />
                            <p>Preferred when paying online</p>
                            <Button className="text-brand-foreground font-medium hover:font p-0 text-sm h-0">Change</Button>
                            <p className="text-sm">We&apos;ll use this when you shop or send money for goods and services.</p>
                            <div>
                                <Link href="#" className="text-brand-foreground font-medium hover:underline">More about payment preferences</Link>
                            </div>
                        </div>
                        <div className="flex justify-between mt-8">
                            <Button variant="link" className="text-brand-foreground font-semibold p-0 text-sm">Update card</Button>
                            <Button variant="link" className="text-brand-foreground font-semibold p-0 text-sm">Remove card</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet