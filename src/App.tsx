import { SideBar } from './components/SideBar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Container } from './styles/global'


function App() {
  return (
    <Container>
      <SideBar />
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
