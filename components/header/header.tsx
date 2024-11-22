import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image"
import Link from "next/link";
import { BiSolidBell } from "react-icons/bi";
import { RiSettings5Fill } from "react-icons/ri";
import { Button } from "../ui/button"
import NavLink from "./navLink";
import NavResponsive from "./navResponsive";

const Header = () => {
    return (
        <div className="bg-brand text-cyan-100/90">
            <div className="container flex items-center justify-between py-5">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image
                            src="/images/logos/paypal-small.png"
                            alt="paypal"
                            placeholder="blur"
                            blurDataURL="/images/logos/paypal-small.png"
                            priority={true}
                            width={25}
                            height={25}
                        />
                    </Link>
                    <NavLink classname="hidden lg:flex lg:px-3 xl:gap-6" />
                </div>
                <div className="flex items-center gap-6">
                    <NavResponsive />
                    <div className="hidden lg:flex items-center gap-5 text-cyan-100/80">
                        <BiSolidBell className="w-5 h-5" />
                        <RiSettings5Fill className="w-5 h-5" />
                        <Button className="bg-transparent font-medium text-cyan-100/90 uppercase p-0 hover:bg-transparent hover:text-cyan-50 ml-1">
                            Log out
                        </Button>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="inline-block lg:hidden" asChild>
                            <Avatar className="cursor-pointer h-9 w-9">
                                <AvatarImage src="https://github.com/shadc.png" />
                                <AvatarFallback className="rounded-full bg-cyan-100/20" />
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="cursor-pointer focus:text-black focus:bg-slate-100">
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer focus:text-black focus:bg-slate-100">
                                    Notifications
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer focus:text-black focus:bg-slate-100"
                            >
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default Header