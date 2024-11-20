import { MoveLeft } from "lucide-react"
import Link from "next/link"

const FinanceSavings = () => {
    return (
        <div className="container mx-auto px-20 py-10 min-h-screen">
            <Link href="/" className='inline-block'>
                <div className='flex gap-4 items-center text-sm'>
                    <MoveLeft size={20} className='text-muted-foreground/80' />
                    <p>Savings</p>
                </div>
            </Link>
        </div>
    )
}

export default FinanceSavings