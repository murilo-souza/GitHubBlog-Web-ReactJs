import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { UserCard } from '../../components/UserCard'
import { Container, Posts } from './styles'

export function Home() {
  return (
    <Container>
      <UserCard />
      <Input />
      <Posts>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Posts>
    </Container>
  )
}
