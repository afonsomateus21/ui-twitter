import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"
import { Tweet } from "../../components/Tweet"
import { TweetButton } from "../../components/TweetButton"
import { Container, Content } from "./style"

export function Status() {
  const [answers, setTweets] = useState([
    "Concordo...",
    "Faz sentido!"
  ]);
  const [newAnswer, setNewAnswer] = useState('');
  
  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setTweets([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <Container>
      <Content>
        <Header title="Tweet" />
        
        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore dolorum a velit maiores ullam impedit cumque. Expedita sequi dolor quia. Minima numquam cumque sequi laborum autem consequuntur aliquid saepe." />

        <Separator />

        <form onSubmit={createNewAnswer}>
          <label htmlFor="tweet">
            <img src="https://github.com/afonsomateus21.png" alt="Foto de Perfil" />
            
            <textarea 
              id="tweet" 
              placeholder="Tweet your anser"
              onKeyDown={handleHotKeySubmit}
              value={newAnswer}
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
            />
            
          </label>

          <TweetButton 
            type="submit"
            padding="0.75rem 1.5rem" 
            style={{
              marginLeft: 'auto',
            }}
          >
            <PaperPlaneRight />
            <span>Answer</span>
          </TweetButton>
        </form>

        
        
        {
          answers.map((answer) => {
            return (
              <Tweet 
                key={answer}
                content={answer} 
              />
            )
          })
        }
      </Content>
    </Container>
  )
}