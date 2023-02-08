/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom'
import { Container, Content, TimePast, Title, Top } from './styles'

interface PostCardProps {
  title: string
  body: string
  created_at: string
}

export function PostCard({ title, body, created_at }: PostCardProps) {
  const content = `${body}`

  const contentFormatted = content.slice(0, 210) + '...'
  const navigate = useNavigate()

  function handleNavigateToPost() {
    navigate('/Post')
  }

  return (
    <Container onClick={handleNavigateToPost}>
      <Top>
        <Title>{title}</Title>
        <TimePast>{created_at}</TimePast>
      </Top>
      <Content>{contentFormatted}</Content>
    </Container>
  )
}
