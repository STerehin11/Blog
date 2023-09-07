"use client";
import { MyButton } from "@/components/Button/Button";
import { GithubButton } from "@/components/GithubButton";
import { SignInForm } from "@/components/SignInForm";
import { Metadata } from "next";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  title: "SignIn",
  description: "SignIn page",
};

export default /*async*/ function Signin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <div className="stack">
      <h1>SignIn</h1>
      <MyButton
        type={undefined}
        color="secondary"
        disabled={false}
        variant="contained"
        onClick={() => signIn("github", { callbackUrl })}
      >
        SignIn with GitHub
      </MyButton>
      {/* <GithubButton></GithubButton> */}
      <div>or</div>
      <SignInForm></SignInForm>
    </div>
  );
}
