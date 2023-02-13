import { Back, Container, HighlightText, InfoArea, Title } from './styles'
import { Info } from '../Info'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useGithubData } from '../../hooks/useGithubData'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostNameCard() {
  const { post } = useGithubData()

  const date = new Date(post.created_at)

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <Container>
      <div>
        <Back to="/">
          <CaretLeft size={12} /> Voltar
        </Back>
        <HighlightText href={post.html_url}>
          Ver no github <ArrowSquareOut size={12} />
        </HighlightText>
      </div>
      <Title>{post.title}</Title>
      <InfoArea>
        <Info title={post.user.login} icon={GithubLogo} />
        <Info title={publishedDateRelativeToNow} icon={Calendar} />
        <Info title={`${post.comments} comentários`} icon={ChatCircle} />
      </InfoArea>
    </Container>
  )
}
