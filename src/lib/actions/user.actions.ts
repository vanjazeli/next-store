'use server';

import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signInSchema } from '../validators';
import { signIn, signOut } from '@/lib/auth/auth';

// Sign in the user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    const user = signInSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);
    return {
      success: true,
      message: 'Signed in successfully!',
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: 'Either email or password is invalid.',
    };
  }
}

// Sign user out

export async function signOutUser() {
  await signOut();
}
