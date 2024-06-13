"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

export default function SignIn() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      // Redirect or do something upon successful sign-in
    }
  }, [status]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {!session ? (
        <>
          <h1 className="mb-4 text-2xl">Sign In</h1>
          <button
            onClick={() => signIn('google')}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <h1 className="mb-4 text-2xl">Welcome, {session.user?.name}</h1>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-white bg-red-500 rounded"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}
