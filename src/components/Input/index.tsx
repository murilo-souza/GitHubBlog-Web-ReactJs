import { useState } from 'react'
import { useGithubData } from '../../hooks/useGithubData'
import { Container, Publication, Title, InputText } from './styles'

export function Input() {
  const [search, setSearch] = useState('')
  const { getInputValue } = useGithubData()

  getInputValue(search)

  return (
    <Container>
      <section>
        <Title>Publicações</Title>
        <Publication>6 publicações</Publication>
      </section>
      <InputText
        type="text"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  )
}
