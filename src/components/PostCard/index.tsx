import { useNavigate } from 'react-router-dom'
import { Container, Content, TimePast, Title, Top } from './styles'

export function PostCard() {
  const content =
    'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'

  const contentFormatted = content.slice(0, 210) + '...'
  const navigate = useNavigate()

  function handleNavigateToPost() {
    navigate('/Post')
  }

  return (
    <Container onClick={handleNavigateToPost}>
      <Top>
        <Title>JavaScript data types and data structures</Title>
        <TimePast>Há 1 dia</TimePast>
      </Top>
      <Content>{contentFormatted}</Content>
    </Container>
  )
}
