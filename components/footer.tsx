import Image from "next/image"
import Link from "next/link"
import logoImage from "@/public/images/logos/paypal-big.png";

const Footer = () => {
    return (
        <footer className="w-full shadow-inner py-4">
            <div className="container mx-auto px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 py-6">
                    <div className="flex items-center gap-9">
                        <Link href="#" className="flex items-center">
                            <Image
                                src={logoImage}
                                alt="PayPal"
                                width={100}
                                height={32}
                                className="h-8 object-contain"
                            />
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-lg">
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
                    <div className="flex gap-10">
                        <p className="text-sm text-muted-foreground">
                            ©1999-2024 PayPal, Inc. All rights reserved.
                        </p>
                        <div className="flex items-center gap-8 text-sm">
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