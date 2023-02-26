import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button, IconButton, MobileNav, Navbar, Typography } from "@material-tailwind/react";
import LightLogo from "../public/logo/light.jpeg";

const Main = ({ title = "Redux Content Management" }) => {
    const [openNav, setOpenNav] = useState(false);

    const navList = (
        <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link href="/" className="flex items-center">
                Pages
            </Link>
            <Link href="/" className="flex items-center">
                Account
            </Link>
            <Link href="/" className="flex items-center">
                Blocks
            </Link>
            <Link href="/" className="flex items-center">
                Docs
            </Link>
        </div>
    );

    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
            </Head>
            <nav className="border-b text-black">
                <div className="container py-4 flex items-center justify-between">
                    <Image src={LightLogo} alt="" width={100} />
                    <div className="hidden lg:block">{navList}</div>
                    <Button size="sm" className="hidden lg:inline-block">
                        <span>Sign In</span>
                    </Button>
                    <IconButton
                        ripple={false}
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto lg:hidden">
                        {navList}
                        <Button variant="gradient" size="sm" fullWidth className="mb-6">
                            <span>Buy Now</span>
                        </Button>
                    </div>
                </MobileNav>
            </nav>
        </>
    );
};

export default Main;