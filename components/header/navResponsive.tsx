

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import NavLink from "./navLink";

const NavResponsive = () => {
  return (
    <div className="lg:hidden mt-2">
      <Sheet>
        <SheetTrigger className="text-slate-400 ml-2">
          <Menu size={25} />
        </SheetTrigger>
        <SheetContent className="bg-brand border-none text-muted">
          <SheetHeader className="mt-6 pb-4 border-b border-cyan-300/20">
            <div>
              <SheetTitle>
                <Image
                  src="/images/logos/paypal-small.png"
                  alt="paypal"
                  placeholder="blur"
                  blurDataURL="/images/logos/paypal-small.png"
                  priority={true}
                  width={40}
                  height={40}
                />
              </SheetTitle>
            </div>
            <div >
            </div>
          </SheetHeader>
          <div>
            <NavLink classname="text-left" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default NavResponsive