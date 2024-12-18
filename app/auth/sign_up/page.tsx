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
import { useSignUp } from "../../../firebase/auth";
import { auth, firestore } from "../../../firebase/init";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must be at least 8 characters long" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  const { signUp, isLoading } = useSignUp(auth, firestore);

  return (
    <div className="max-w-lg">
      <Title>Create an Account</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit(async (v) => {
            await signUp(v.email, v.password);
            router.push("/dashboard/admin");
          })}
        >
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
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            required
            mt="md"
            {...form.getInputProps("confirmPassword")}
          />
          <Button fullWidth mt="xl" type="submit" loading={isLoading}>
            Sign Up
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
          Already have an account? <Link href="/auth/sign_in">Log in</Link>
        </Text>
      </Paper>
    </div>
  );
};

export default SignUpPage;
