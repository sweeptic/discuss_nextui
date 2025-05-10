import { Navbar as HeroUINavbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Avatar } from '@heroui/avatar';

import { ThemeSwitch } from '@/components/theme-switch';
import { auth } from '@/auth';
import Link from 'next/link';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

import * as actions from '@/actions';
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';

export const Navbar = async () => {
  const session = await auth();
  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem className="flex">
          <form action={actions.signIn}>
            <Button type="submit">Sign In</Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="button">Sign Out</Button>
          </form>
        </NavbarItem>
      </>
    );
  }

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
        {authContent}
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
