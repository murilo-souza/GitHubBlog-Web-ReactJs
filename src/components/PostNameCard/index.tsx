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

interface Props {
  title: string
  created_at: Date
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function PostNameCard({
  title,
  created_at,
  comments,
  html_url,
  user,
}: Props) {
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
