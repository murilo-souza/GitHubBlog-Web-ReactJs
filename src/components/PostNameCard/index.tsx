/* eslint-disable camelcase */
import { Back, Container, HighlightText, InfoArea, Title } from './styles'
import { Info } from '../Info'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostDetail {
  title: string
  comments: number
  html_url: string
  user: {
    login: string
  }
  created_at: Date
}

export function PostNameCard({
  title,
  comments,
  html_url,
  user,
  created_at,
}: PostDetail) {
  const date = new Date(created_at)

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
        <HighlightText href={html_url}>
          Ver no github <ArrowSquareOut size={12} />
        </HighlightText>
      </div>
      <Title>{title}</Title>
      <InfoArea>
        <Info title={user.login} icon={GithubLogo} />
        <Info title={publishedDateRelativeToNow} icon={Calendar} />
        <Info title={`${comments} comentários`} icon={ChatCircle} />
      </InfoArea>
    </Container>
  )
}
