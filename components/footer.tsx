import logoImage from "@/public/images/logos/paypal-big.png";
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full shadow-inner py-4">
            <div className="container mx-auto px-24">
                <div className="py-6">
                    <div className="flex flex-col items-center justify-between md:flex-row gap-4 md:gap-0 lg:justify-start lg:gap-9">
                        <Link href="#" className="flex items-center">
                            <Image
                                src={logoImage}
                                alt="PayPal"
                                width={100}
                                height={32}
                                className="h-8 object-contain"
                            />
                        </Link>
                        <nav className="flex flex-col sm:flex-row items-center gap-6 text-sm sm:text-base lg:text-lg">
                            <Link
                                href="#"
                                className="font-medium"
                            >
                                Help
                            </Link>
                            <Link
                                href="#"
                                className="font-medium"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="#"
                                className="font-medium"
                            >
                                Security
                            </Link>
                            <Link
                                href="#"
                                className="font-medium"
                            >
                                Fees
                            </Link>
                        </nav>
                    </div>
                </div>

            </div>
            <div className="shadow-inner py-8">
                <div className="container mx-auto px-24">
                    <div className="flex flex-col-reverse gap-6 items-center lg:flex-row lg:gap-10">
                        <p className="text-sm text-muted-foreground">
                            ©1999-2024 PayPal, Inc. All rights reserved.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-8 text-sm">
                            <Link
                                href="#"
                            >
                                Privacy
                            </Link>
                            <Link
                                href="#"
                            >
                                Cookies
                            </Link>
                            <Link
                                href="#"
                            >
                                Legal
                            </Link>
                            <Link
                                href="#"
                            >
                                Policy Updates
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer