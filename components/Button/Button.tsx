"use client";
import { SignInResponse, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)<{ $props: MyButtonProps }>`
  variant: ${(props) => props.$props.variant};
  color: ${(props) => props.$props.color};
  ${(props) => (props.$props.disabled ? "disabled" : "")};
  type: ${(props) => props.$props.type};
`;

interface MyButtonProps {
  color: string;
  variant: string;
  disabled?: boolean;
  type?: string | undefined;
  onClick?: (() => Promise<SignInResponse | undefined>) | undefined;
  children?: React.ReactNode;
}

const MyButton = (props: MyButtonProps) => {
  console.log(props.disabled);
  return (
    <StyledButton $props={props} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export { MyButton };
