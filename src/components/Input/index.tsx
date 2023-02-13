import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useGithubData } from '../../hooks/useGithubData'
import { Container, Publication, Title, InputText } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Input() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })
  const { postCard } = useGithubData()

  const { getInputValue } = useGithubData()

  function handleSearch(data: SearchFormInput) {
    getInputValue(data.search)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearch)}>
      <section>
        <Title>Publicações</Title>
        <Publication>{postCard.length} publicações</Publication>
      </section>
      <InputText
        type="text"
        placeholder="Buscar conteúdo"
        {...register('search')}
      />
    </Container>
  )
}
