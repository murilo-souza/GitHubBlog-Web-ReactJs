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
      <PostNameCard />
      <PostContent>{post.body}</PostContent>
    </Container>
  )
}
