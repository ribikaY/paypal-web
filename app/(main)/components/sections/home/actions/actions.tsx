import { EllipsisVertical } from "lucide-react"
import { FaDonate } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { IoReloadCircle } from "react-icons/io5";

const Actions = () => {
    const actions = [
        {
            icon: <GiTrophyCup className="w-7 h-7" />,
            text: "PayPal Rewards"
        },
        {
            icon: <FaDonate className="w-7 h-7" />,
            text: "Donate"
        },
        {
            icon: <FaMoneyBillTransfer className="w-7 h-7" />,
            text: "Split a bill"
        },
        {
            icon: <IoReloadCircle className="w-7 h-7" />,
            text: "Reload Phone"
        },
    ]

    return (
        <>
            <div className="flex flex-wrap lg:flex-nowrap gap-6 pt-10">
                {
                    actions.map(action => (
                        <div key={action.text} className="space-y-3 w-16">
                            <div className="w-full h-16 bg-brand-neutral rounded-full flex justify-center items-center">
                                <div className="text-brand">
                                    {action.icon}
                                </div>
                            </div>
                            <p className="text-center text-sm font-medium">{action.text}</p>
                        </div>
                    ))
                }
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-brand-neutral hover:bg-neutral-100/85 rounded-full flex justify-center items-center">
                        <EllipsisVertical className="text-brand" />
                    </div>
                    <p className="text-center font-medium">More</p>
                </div>
            </div>

        </>
    )
}

export default Actions