"use client";
import { JSX, useState } from "react";
import { useCurrentUser } from "@/firebase/auth";
import { auth } from "@/firebase/init";
import { useTimeout } from "@mantine/hooks";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function AuthGuard({
  loadingFallback,
  children,
  roles,
}: {
  loadingFallback: JSX.Element;
  children: JSX.Element | JSX.Element[];
  roles?: string[];
}) {
  const [isLoading, setIsLoading] = useState(true);
  const { profile } = useCurrentUser(auth);
  useTimeout(
    () => {
      setIsLoading(false);
    },
    10000,
    { autoInvoke: true }
  );
  if (isLoading && !profile) {
    return loadingFallback;
  }
  if (!isLoading && !profile) {
    return (
      <div>
        <div>You are not logged in</div>
        <Button href={"/auth/sign_in"} component={Link}>
          Login
        </Button>
      </div>
    );
  }
  if (roles && roles.includes(profile!.role ?? "any")) {
    return <div>You are not authorized to view this page</div>;
  }
  return <div>{children}</div>;
}
