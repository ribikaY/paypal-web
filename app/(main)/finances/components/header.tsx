"use client";
import { financeNav } from "@/lib/data"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const isActive = (path: string) => (pathname === path)

    return (
        <div className="shadow-sm sm:shadow-md shadow-gray-200">
            <div className="flex container mx-auto md:px-20">
                {
                    financeNav.map(nav => (
                        <Link key={nav.name} href={nav.href}
                            className={`py-5 px-10 text-sm font-medium sm:py-7 md:text-base ${isActive(nav.href) ? 'bg-brand-neutral text-brand' : 'bg-transparent text-muted-foreground'}`}
                        >
                            {nav.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Header