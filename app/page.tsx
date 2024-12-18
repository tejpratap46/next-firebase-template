"use client";

import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <Button href={"/auth/sign_in"} component={Link}>
        Sign In
      </Button>
    </div>
  );
}
