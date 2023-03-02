import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";
import { Button } from "./styles";

interface TweetButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function TweetButton({ children, ...rest }: TweetButtonProps) {
  return (
    <Button {...rest}>
      { children }
    </Button>
  );
}