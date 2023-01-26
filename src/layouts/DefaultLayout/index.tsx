import { Outlet } from 'react-router-dom'
import { Container, ContainerContent, Image } from './styles'
import Cover from '../../assets/Cover.png'

export function DefaultLayout() {
  return (
    <Container>
      <Image src={Cover} alt="" />
      <ContainerContent>
        <Outlet />
      </ContainerContent>
    </Container>
  )
}
