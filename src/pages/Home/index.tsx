import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { UserCard } from '../../components/UserCard'
import { useGithubData } from '../../hooks/useGithubData'

import { Container, Posts } from './styles'

export function Home() {
  const { user } = useGithubData()

  return (
    <Container>
      <UserCard
        imgUrl={user.avatar_url}
        description={user.bio}
        name={user.name}
        info1={user.login}
        info2={user.company}
        info3={user.followers}
        githubLink={user.html_url}
      />
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
