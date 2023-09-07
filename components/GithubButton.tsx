"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GithubButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button
      className="gitHub-Button"
      onClick={() => signIn("github", { callbackUrl })}
    >
      SignIn with GitHub
    </button>
  );
};

export { GithubButton };
