import { EllipsisVertical, Heart } from "lucide-react"

const Actions = () => {
    const actions = [
        {
            icon: "",
            text: "PayPal Rewards"
        },
        {
            icon: "",
            text: "Donate"
        },
        {
            icon: "",
            text: "Split a bill"
        },
        {
            icon: "",
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
                                <Heart />
                            </div>
                            <p className="text-center text-sm font-medium">{action.text}</p>
                        </div>
                    ))
                }
                <div className="space-y-3">
                    <div className="w-16 h-16 bg-brand-neutral rounded-full flex justify-center items-center">
                        <EllipsisVertical className="text-brand" />
                    </div>
                    <p className="text-center font-medium">More</p>
                </div>
            </div>

        </>
    )
}

export default Actions