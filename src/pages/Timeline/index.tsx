import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import { TweetButton } from "../../components/TweetButton";
import { Container, Content } from "./styles";

export function Timeline() {
  const [tweets, setTweets] = useState([
    "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:"
  ]);
  const [newTweet, setNewTweet] = useState('');
  
  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  }

  return (
    <Container>
      <Content>
        <Header title="Home" />

        <form onSubmit={createNewTweet}>
          <label htmlFor="tweet">
            <img src="https://github.com/afonsomateus21.png" alt="Foto de Perfil" />
            <textarea 
              id="tweet" 
              placeholder="What's happening?" 
              value={newTweet}
              onChange={(event) => {
                setNewTweet(event.target.value)
              }}
              onKeyDown={handleHotKeySubmit}
            />
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
                key={tweet}
                content={tweet} 
              />
            )
          })
        }
      </Content>
    </Container>
  )
}