"use client";
import { Text } from "@mantine/core";
import { useCurrentUser } from "../../firebase/auth";
import { auth } from "../../firebase/init";

export default function UserProfile() {
  const { profile } = useCurrentUser(auth);
  return (
    <div>
      <Text>Is the user cached: </Text> {profile?.email ?? "[NULL]"}
    </div>
  );
}
