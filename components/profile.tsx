'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  console.log('session', session);

  if (session.data?.user) {
    return <div>From client: {JSON.stringify(session.data.user)} user is signed in</div>;
  }

  return <div>From client: {JSON.stringify(session.data?.user)}user is NOT signed in</div>;
}
