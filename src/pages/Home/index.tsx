import { formatDistanceToNow } from 'date-fns'
import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { UserCard } from '../../components/UserCard'
import { useGithubData } from '../../hooks/useGithubData'
import { Container, LoaderContainer, Posts } from './styles'
import ptBR from 'date-fns/locale/pt-BR'
import { Spinner } from '../../components/Spinner'

export function Home() {
  const { user, postCard } = useGithubData()

  return (
    <Container>
      {user.avatar_url === undefined ? (
        <LoaderContainer>
          <Spinner />
        </LoaderContainer>
      ) : (
        <>
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
                  number={post.number}
                  created_at={publishedDateRelativeToNow}
                />
              )
            })}
          </Posts>
        </>
      )}
    </Container>
  )
}
