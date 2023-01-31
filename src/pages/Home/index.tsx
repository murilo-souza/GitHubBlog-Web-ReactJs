import { PostCard } from '../../components/PostCard'
import { UserCard } from '../../components/UserCard'
import { Container, Posts } from './styles'

export function Home() {
  return (
    <Container>
      <UserCard />
      <Posts>
        <PostCard />
        <PostCard />
      </Posts>
    </Container>
  )
}
