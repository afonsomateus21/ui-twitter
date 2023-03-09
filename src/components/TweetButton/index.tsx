import { Pencil } from "phosphor-react";
import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";
import { Button } from "./styles";

interface TweetButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  padding: string;
}

export function TweetButton({ children, width, padding, ...rest }: TweetButtonProps) {
  return (
    <Button 
      width={width!}
      padding={padding}
      {...rest}
    >
      <Pencil />
      <span>{ children }</span>
    </Button>
  );
}