import { IconProps } from 'phosphor-react'
import { ElementType } from 'react'
import { Container, Title } from './styles'

interface Props {
  title: string | number | null
  icon: ElementType<IconProps>
}

export function Info({ title, icon: Icon }: Props) {
  return (
    <Container>
      <Icon weight="fill" />
      <Title>{title}</Title>
    </Container>
  )
}
