"use client";
import { mainNav } from "@/lib/data"
import logoImage from "@/public/images/logos/paypal-small.png";
import { Bell, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Button } from "./ui/button"

const Header = () => {
    const pathname = usePathname();
    const isActive = (path: string) => (pathname === path);

    return (
        <div className="bg-brand text-cyan-100/90">
            <div className="container mx-auto flex items-center justify-between py-5">
                <div className="flex items-center gap-4">
                    <Image
                        src={logoImage}
                        alt="paypal"
                        // placeholder="blur"
                        // blurDataURL={logoImage}
                        // priority={true}
                        width={55}
                        height={55}
                    />
                    <div className="flex gap-6">
                        {
                            mainNav.map(nav => (
                                <Link
                                    href={nav.href}
                                    key={nav.name}
                                    className={`px-4 py-2 rounded-full ${isActive(nav.href) ? 'bg-brand-foreground/15 text-cyan-50' : 'text-cyan-100/75'}`}
                                >
                                    <p>
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