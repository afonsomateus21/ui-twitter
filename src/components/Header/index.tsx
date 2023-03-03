import { Sparkle } from "phosphor-react";
import { Container } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      { title }
      <Sparkle />
    </Container>
  )
}