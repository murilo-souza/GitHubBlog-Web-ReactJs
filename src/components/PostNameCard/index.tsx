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
<<<<<<< HEAD

interface PostDetail {
  title: string
=======
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Props {
  title: string
  created_at: Date
>>>>>>> 576c3a77ff4adaf28a06cd0bae280b1710f339d2
  comments: number
  html_url: string
  user: {
    login: string
  }
<<<<<<< HEAD
  created_at: string
}
=======
}

export function PostNameCard({
  title,
  created_at,
  comments,
  html_url,
  user,
}: Props) {
  const date = new Date(created_at)
>>>>>>> 576c3a77ff4adaf28a06cd0bae280b1710f339d2

export function PostNameCard({
  title,
  comments,
  html_url,
  user,
  created_at,
}: PostDetail) {
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
<<<<<<< HEAD
        <Info title={created_at} icon={Calendar} />
=======
        <Info title={publishedDateRelativeToNow} icon={Calendar} />
>>>>>>> 576c3a77ff4adaf28a06cd0bae280b1710f339d2
        <Info title={`${comments} comentários`} icon={ChatCircle} />
      </InfoArea>
    </Container>
  )
}
