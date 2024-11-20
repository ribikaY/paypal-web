import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Image from "next/image"

const Header = () => {
  const navItems = [
    "Personal",
    "Small Business",
    "Enterprise",
    "Developer"
  ]

  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-5">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logos/paypal-dark.png"
            alt="paypal"
            placeholder="blur"
            blurDataURL="/images/logos/paypal-small.png"
            priority={true}
            width={35}
            height={35}
          />
          <div className="flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {
                  navItems.map(nav => (
                    <NavigationMenuItem key={nav}>
                      <NavigationMenuTrigger className="hover:bg-transparent hover:text-brand">{nav}</NavigationMenuTrigger>
                      <NavigationMenuContent className="min-w-xl bg-white">
                        <NavigationMenuLink />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))
                }
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <Button variant="link">What&apos;s New</Button>
          <Button variant="link">Help</Button>

          <Button variant="outline" className="px-5">
            My PayPal
          </Button>
          <Button variant="outline" className="px-5">
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header