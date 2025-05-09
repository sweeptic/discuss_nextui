'use server';

import * as auth from '@/auth';

export async function signIn() {
  return auth.signIn('github');
}

// export const dynamic = 'force-dynamic';
export async function signOut() {
  return auth.signOut();
}
