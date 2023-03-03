import { useState } from "react";
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import { TweetButton } from "../../components/TweetButton";
import { Container, Content } from "./styles";

export function Timeline() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      content: "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:"
    }
  ]);

  return (
    <Container>
      <Content>
        <Header title="Home" />

        <form>
          <label htmlFor="tweet">
            <img src="https://github.com/afonsomateus21.png" alt="Foto de Perfil" />
            <textarea id="tweet" placeholder="What's happening?" />
          </label>

          <TweetButton 
            type="submit"
            padding="0.75rem 1.5rem" 
            style={{
              marginLeft: 'auto',
            }}
          >
            Tweet
          </TweetButton>
        </form>

        <Separator />
        
        {
          tweets.map((tweet) => {
            return (
              <Tweet 
                key={tweet.id}
                content={tweet.content} 
              />
            )
          })
        }
      </Content>
    </Container>
  )
}