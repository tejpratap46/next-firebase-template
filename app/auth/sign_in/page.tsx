"use client";
import React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Container,
  Divider,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSignIn } from "@/firebase/auth";
import { auth } from "@/firebase/init";

const SignInPage = () => {
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

  return (
    <Container size={420} my={40}>
      <Title>Log in to Account</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((v) => signIn(v.email, v.password))}>
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
          Don&apos;t have have an account? <a href="/auth/sign_up">Log in</a>
        </Text>
      </Paper>
    </Container>
  );
};

export default SignInPage;
