

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import NavLink from "./navLink";

const NavResponsive = () => {
  return (
    <div className="lg:hidden mt-2">
      <Sheet>
        <SheetTrigger className="text-slate-400">
          <Menu size={20} />
        </SheetTrigger>
        <SheetContent className="bg-brand border-none text-muted">
          <SheetHeader>
            <div className="mt-4 pb-8 border-b border-cyan-300/20">
              <Image
                src="/images/logos/paypal-small.png"
                alt="paypal"
                placeholder="blur"
                blurDataURL="/images/logos/paypal-small.png"
                priority={true}
                width={55}
                height={55}
              />
            </div>
          </SheetHeader>
          <div>
            <NavLink classname="text-left" />
            <div className="mt-5">
              <Button className="px-10 bg-cyan-300/15 hover:bg-cyan-300/20">LOG OUT</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default NavResponsive