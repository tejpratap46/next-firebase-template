"use client";
import React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Divider,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSignIn } from "@/firebase/auth";
import { auth, getErrMsg } from "@/firebase/init";
import { useRouter } from "next/navigation";
import { UserCreationInput } from "../../../firebase/models/user";
import { notifications } from "@mantine/notifications";
import { FirebaseError } from "firebase/app";
import Link from "next/link";

const SignInPage = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const { signIn, isLoading } = useSignIn(auth);

  const handleSignIn = async (v: UserCreationInput) => {
    try {
      await signIn(v.email, v.password);
      router.push("/dashboard/admin");
    } catch (error) {
      notifications.show({
        title: "Authentication Error",
        message: getErrMsg(error as FirebaseError),
        radius: "sm",
      });
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg">
      <Title>Log in to Account</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSignIn)}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit" loading={isLoading}>
            Sign In
          </Button>
        </form>

        <Divider label="Or continue with" labelPosition="center" my="lg" />

        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="outline" fullWidth loading={isLoading}>
            Google
          </Button>
          <Button variant="outline" fullWidth loading={isLoading}>
            Facebook
          </Button>
          <Button variant="outline" fullWidth loading={isLoading}>
            GitHub
          </Button>
        </div>

        <Text c="dimmed" size="sm" mt="md">
          Don&apos;t have have an account?{" "}
          <Link href="/auth/sign_up">Sign Up</Link>
        </Text>
      </Paper>
    </div>
  );
};

export default SignInPage;
