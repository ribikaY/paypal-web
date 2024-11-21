import { Bell, Settings } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import NavResponsive from "./navResponsive";
import NavLink from "./navLink";

const Header = () => {
    return (
        <div className="bg-brand text-cyan-100/90">
            <div className="container mx-auto flex items-center justify-between py-5">
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/logos/paypal-small.png"
                        alt="paypal"
                        placeholder="blur"
                        blurDataURL="/images/logos/paypal-small.png"
                        priority={true}
                        width={25}
                        height={25}
                    />
                    <NavResponsive/>
                    <NavLink classname="hidden lg:flex lg:px-3 xl:gap-6"/>
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