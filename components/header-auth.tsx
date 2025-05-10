'use client';

import { NavbarItem } from '@heroui/navbar';
import { Avatar } from '@heroui/avatar';

import { Button } from '@heroui/button';

import * as actions from '@/actions';
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';
import { useSession } from 'next-auth/react';

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === 'loading') {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || ''} />
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

  return authContent;
}
