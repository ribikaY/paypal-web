import Image from "next/image"

const Rewards = () => {
    return (
        <div className="container flex flex-col items-center pt-5 pb-16 min-h-[70vh]">
            <Image
                src="/illustrations/send-gift.gif"
                alt="rewards-gif"
                width={500}
                height={300}
            />
            <h1 className="text-base sm:text-xl font-semibold">
                No rewards yet!
            </h1>
        </div>
    )
}

export default Rewards