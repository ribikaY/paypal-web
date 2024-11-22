
"use client";
import { mainNav } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    classname?: string;

}
const NavLink = ({ classname }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = (path: string) => (pathname === path);
    return (
        <div className={classname}>
            {
                mainNav.map(nav => (
                    <Link
                        href={nav.href}
                        key={nav.name}
                        className={`px-4 py-2 rounded-full ${isActive(nav.href) ? 'lg:bg-brand-foreground/15 text-cyan-50' : 'text-cyan-100/75'}`}
                    >
                        <p>
                            {nav.name}
                        </p>
                    </Link>
                ))
            }
        </div>
    )
}

export default NavLink;