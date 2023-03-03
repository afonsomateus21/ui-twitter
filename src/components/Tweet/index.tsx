import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Container, Content, Footer, Header } from "./styles";

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Container href="#">
      <img src="https://github.com/afonsomateus21.png" alt="Afonso Mateus" />

      <div>
        <Header>
          <strong>Afonso Mateus</strong>
          <span>@afonsomateus21</span>
        </Header>

        <Content>
            <p>
              { content }
            </p>
        </Content>

        <Footer>
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </Footer>
      </div>
    </Container>
  );
}