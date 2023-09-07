"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import { MyButton } from "./Button/Button";
import { TextField } from "@mui/material";

const SignInForm = () => {
  const router = useRouter();

  let areDataFilled = false;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (formData.get("email") !== null && formData.get("password") !== null) {
      areDataFilled = true;
    }

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      prompt(res!.error);
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        type="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <MyButton
        color={areDataFilled ? "success" : "error"}
        disabled={areDataFilled ? false : true}
        variant="contained"
        type="submit"
      >
        Sign In
      </MyButton>
    </form>
  );
};

export { SignInForm };
