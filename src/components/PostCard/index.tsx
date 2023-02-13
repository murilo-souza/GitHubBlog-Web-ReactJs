/* eslint-disable camelcase */
import { Container, Content, TimePast, Title, Top } from './styles'

interface PostCardProps {
  title: string
  body: string
  number: number
  created_at: string
}

export function PostCard({ title, body, number, created_at }: PostCardProps) {
  const content = `${body}`

  const contentFormatted = content.slice(0, 210) + '...'

  return (
    <Container to={`post/${number}`}>
      <Top>
        <Title>{title}</Title>
        <TimePast>{created_at}</TimePast>
      </Top>
      <Content>{contentFormatted}</Content>
    </Container>
  )
}
