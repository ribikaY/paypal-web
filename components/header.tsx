import { MainNav } from "@/lib/data"
import logoImage from "@/public/images/logo.png";
import { Bell, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
    //logo nav items               notification icons, settings LOG OUT
    return (
        <div className="bg-[#152c8d] text-cyan-100/90">
            <div className="container mx-auto flex items-center justify-between py-5">
                <div className="flex items-center gap-4">
                    <Image
                        src={logoImage}
                        alt="paypal"
                        placeholder="blur"
                        // blurDataURL={logoImage}
                        priority={true}
                        width={55}
                        height={55}
                    />
                    <div className="flex gap-10">
                        {
                            MainNav.map(nav => (
                                <Link href={nav.href} key={nav.name} >
                                    <p className="[&.active]:text-red-500">
                                        {nav.name}
                                    </p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Bell size={20} />
                    <Settings size={20} />
                    <Button className="bg-transparent font-medium text-cyan-100/90 uppercase p-0 hover:bg-transparent hover:text-cyan-50 ml-1">
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header