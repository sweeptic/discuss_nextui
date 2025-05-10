import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';

import { ThemeSwitch } from '@/components/theme-switch';
import { auth } from '@/auth';
import Link from 'next/link';
import { Input } from '@heroui/input';

export const Navbar = async () => {
  const session = await auth();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-gray-300 mb-4">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href="/">Discuss</Link>
        </NavbarBrand>

        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <NavbarItem>
            <Input />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
          <NavbarItem>{session?.user ? <div>Signed In</div> : <div>Signed Out</div>}</NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
