import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDateToTimePast(dateSt: string) {
  const date = new Date(dateSt)

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })

  return publishedDateRelativeToNow
}
