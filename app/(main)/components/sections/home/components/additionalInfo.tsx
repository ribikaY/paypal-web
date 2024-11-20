import { EllipsisVertical } from "lucide-react"

const AdditionalInfo = ({
    title,
    children
}: {
    title: string
    children: React.ReactNode
}) => {
    return (
        <div className="mt-16 mb-20">
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">{title}</p>
                <EllipsisVertical className="text-gray-500" />
            </div>
            <div className="mt-8">
                {children}
            </div>
        </div>
    )
}

export default AdditionalInfo