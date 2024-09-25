
import { Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

import HeaderAuth from '@/components/header-auth';

export default function Header() {

  

    return (
        <Navbar className="w-full max-w-full p-2 mb-6 bg-gray-900 shadow" isBordered>
            <NavbarBrand>
                <Link href="/" className="text-2xl font-bold text-white ">DISCUSS</Link>
            </NavbarBrand>

            <NavbarContent justify="center" className="flex-grow">
                <NavbarItem className="w-full max-w-2xl">
                    <Input className="w-full" placeholder='Search something...' />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <HeaderAuth/>
            </NavbarContent>
        </Navbar>
    );
}