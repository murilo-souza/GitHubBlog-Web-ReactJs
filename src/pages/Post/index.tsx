import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostNameCard } from '../../components/PostNameCard'
import { useGithubData } from '../../hooks/useGithubData'
import { Container, PostContent } from './styles'

export function Post() {
  const { handleCompletePost, post } = useGithubData()
  const { slug } = useParams()

  useEffect(() => {
    handleCompletePost(slug)
  }, [slug])

  return (
    <Container>
      <PostNameCard
        title={post.title}
        comments={post.comments}
        created_at={post.created_at}
        html_url={post.html_url}
        user={post.user}
      />
      <PostContent>{post.body}</PostContent>
    </Container>
  )
}
