import { Sparkle } from "phosphor-react";
import { TweetButton } from "../TweetButton";
import { Container, Content } from "./styles";

export function Timeline() {
  return (
    <Container>
      <Content>
        <div>
          Home
          <Sparkle />
        </div>

        <form>
          <label htmlFor="tweet">
            <img src="https://github.com/afonsomateus21.png" alt="Foto de Perfil" />
            <textarea id="tweet" placeholder="What's happening?" />
          </label>

          <TweetButton 
            type="submit" 
            style={{
              marginLeft: 'auto',
              width: '150px'
            }}
          >
            Tweet
          </TweetButton>
        </form>
      </Content>
    </Container>
  )
}