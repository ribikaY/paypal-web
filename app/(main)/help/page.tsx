import Image from "next/image"

const Help = () => {
    return (
        <div className="container flex flex-col items-center gap-8 py-16 min-h-[70vh]">
            <Image
                src="/illustrations/questions.gif"
                alt="help"
                width={350}
                height={300}
            />
            <h1 className="text-base sm:text-xl font-semibold">
                Helpful informations displayed here.
            </h1>
        </div>
    )
}

export default Help