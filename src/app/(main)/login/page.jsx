"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="wrapper-main gap-6 w-full grid">
      <h1>LoginPage</h1>
      <div className="centered">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default LoginPage;