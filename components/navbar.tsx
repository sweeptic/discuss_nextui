import { Navbar as HeroUINavbar, NavbarContent, NavbarItem } from '@heroui/navbar';

import { ThemeSwitch } from '@/components/theme-switch';
import Link from 'next/link';
import { Input } from '@heroui/input';

import HeaderAuth from './header-auth';

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-gray-200 mb-4">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarItem>
          <Link href="/">Discuss</Link>
        </NavbarItem>

        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className=" sm:flex basis-1/5 sm:basis-full" justify="end">
        <HeaderAuth />
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
