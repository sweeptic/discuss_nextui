import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Avatar } from '@heroui/avatar';

import { ThemeSwitch } from '@/components/theme-switch';
import { auth } from '@/auth';
import Link from 'next/link';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

export const Navbar = async () => {
  const session = await auth();
  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = <Avatar src={session.user.image || ''}></Avatar>;
  } else {
    authContent = (
      <>
        <NavbarItem className="flex">
          <Button type="button">Sign In</Button>
        </NavbarItem>
        <NavbarItem>
          <Button type="button">Sign Out</Button>
        </NavbarItem>
      </>
    );
  }

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-gray-200 mb-4">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href="/">Discuss</Link>
        </NavbarBrand>

        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <NavbarItem>
            <Input />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1/5 sm:basis-full" justify="end"></NavbarContent>
      </NavbarContent>

      <NavbarContent className=" sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className=" sm:flex gap-2">{authContent}</NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
