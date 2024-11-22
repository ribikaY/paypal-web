import { cn } from "@/lib/utils";
import Image from "next/image"

interface VisaCardProps {
    classname?: string;
    accountNo?: string;
}

const VisaCard = ({ classname, accountNo }: VisaCardProps) => {
    return (
        <div className={cn("bg-zinc-400 flex justify-between items-end px-4 text-white relative", classname)}>
            {accountNo && <p className="mb-5">**${accountNo}</p>}
            <Image
                src="/images/logos/visa.png"
                alt="visa"
                placeholder="blur"
                blurDataURL="/images/logos/visa.png"
                priority={true}
                width={77}
                height={35}
                className="object-contain self-end"
            />
            <div className="absolute left-0 top-1/3 bg-gradient-to-r from-[#a1a1aa] to-[#ffffff3a] w-3/4 h-2/5" />
            <div className="absolute right-0 top-10  bg-gradient-to-r from-[#ffffff3a] to-[#a1a1aa] w-3/5 h-2/5" />
        </div>
    )
}

export default VisaCard