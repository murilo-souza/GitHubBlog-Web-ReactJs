import { Container, Publication, Title, InputText } from './styles'

export function Input() {
  return (
    <Container>
      <section>
        <Title>Publicações</Title>
        <Publication>6 publicações</Publication>
      </section>
      <InputText placeholder="Buscar conteúdo" />
    </Container>
  )
}
