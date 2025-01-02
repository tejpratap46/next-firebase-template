"use client";
import { useCurrentUser } from "@/firebase/auth";
import { auth } from "@/firebase/init";

export default function UserProfile() {
  const { profile } = useCurrentUser(auth);
  return (
    <div>
      <p>Is the user cached: </p> {profile?.email ?? "[NULL]"}
    </div>
  );
}
