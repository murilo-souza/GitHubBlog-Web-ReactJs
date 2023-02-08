import { formatDistanceToNow } from 'date-fns'
import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { UserCard } from '../../components/UserCard'
import { useGithubData } from '../../hooks/useGithubData'
import { Container, Posts } from './styles'
import ptBR from 'date-fns/locale/pt-BR'

export function Home() {
  const { user, postCard } = useGithubData()

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
        {postCard.map((post) => {
          const date = new Date(post.created_at)

          const publishedDateRelativeToNow = formatDistanceToNow(date, {
            locale: ptBR,
            addSuffix: true,
          })
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              created_at={publishedDateRelativeToNow}
            />
          )
        })}
      </Posts>
    </Container>
  )
}
