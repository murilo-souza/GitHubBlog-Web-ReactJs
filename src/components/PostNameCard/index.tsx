import { Container, HighlightText, InfoArea, Title } from './styles'
import { Info } from '../Info'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

export function PostNameCard() {
  return (
    <Container>
      <div>
        <HighlightText>
          <CaretLeft size={12} /> Voltar
        </HighlightText>
        <HighlightText>
          Ver no github <ArrowSquareOut size={12} />
        </HighlightText>
      </div>
      <Title>JavaScript data types and data structures</Title>
      <InfoArea>
        <Info title="murilo-souza" icon={GithubLogo} />
        <Info title="Há 1 dia" icon={Calendar} />
        <Info title="5 comentários" icon={ChatCircle} />
      </InfoArea>
    </Container>
  )
}
