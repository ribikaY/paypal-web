import BillingInfo from "../components/sections/detail/billingInfo"
import InvoiceHeader from "../components/sections/detail/header"
import Preview from "../components/sections/detail/preview"

const InvoiceDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const invoiceId = (await params).id;

  return (
    <div>
      <InvoiceHeader invoiceId={invoiceId}/>
      <div className="flex flex-col xl:flex-row justify-between gap-12 pt-4 pb-28 md:px-12 xl:px-20 2xl:px-36 bg-brand-neutral">
        <BillingInfo />
        <Preview />
      </div>
    </div>
  )
}

export default InvoiceDetail