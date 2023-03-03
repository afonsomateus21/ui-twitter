import { SideBar } from "../../components/SideBar";
import { Timeline } from "../Timeline";
import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <SideBar />
      <Timeline />
    </Container>
  )
}