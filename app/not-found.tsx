import Footer from '@/components/footer'
import Header from '@/components/header/header'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <Header />
            <div className="container flex flex-col items-center pt-5 pb-16 min-h-[72vh]">
                <Image
                    src="/illustrations/not-found.gif"
                    alt="not-found.gif"
                    width={500}
                    height={300}
                />
                <h1 className="text-base sm:text-xl font-semibold">
                    Not Found
                </h1>
                <p className='my-4'>Could not find requested resource</p>
                <Link href="/" className='text-brand-foreground hover:underline underline-offset-2'>Return Home</Link>
            </div>
            <Footer/>
        </div>
    )
}