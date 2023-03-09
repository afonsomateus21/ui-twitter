import { SideBar } from '../components/SideBar'
import { Outlet, RouterProvider } from 'react-router-dom'
import { Container } from './styles'


export function App() {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  )
}


