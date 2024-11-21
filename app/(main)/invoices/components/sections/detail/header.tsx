import { Button } from "@/components/ui/button"
import { ChevronDown, MoveLeft } from "lucide-react"
import Link from "next/link"

interface InvoiceHeaderProps {
  invoiceId: string;
}

const InvoiceHeader = ({ invoiceId }: InvoiceHeaderProps) => {
  return (
    <div className="px-36 shadow-md">
      <div className="flex items-center justify-between py-6">
        <div className="flex gap-4">
          <Link href="/invoices">
            <MoveLeft size={20} className="hover:text-brand" />
          </Link>
          <div className="text-sm space-y-1">
            <p>Invoice No. {invoiceId}</p>
            <div className="flex gap-4">
              <p className="text-xs">Date: 8/23/24 <span className="text-muted-foreground">.</span> Due 8/24/24 </p>
              <Button variant='link' className="p-0 h-0 mt-2 text-xs font-semibold underline hover:text-brand-foreground">
                Edit
              </Button>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant='outline' className="px-6 font-semibold">
            More actions
            <ChevronDown size={18} />
          </Button>
          <Button className="px-6">
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InvoiceHeader