/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown/'
import { useParams } from 'react-router-dom'
import { PostNameCard } from '../../components/PostNameCard'
import { useGithubData } from '../../hooks/useGithubData'
import { Container, LoaderContainer, PostContent } from './styles'
import { formatDateToTimePast } from '../../utils/formatDateToTimepast'
import { Spinner } from '../../components/Spinner'

export function Post() {
  const { handleCompletePost, post } = useGithubData()
  const { slug } = useParams()

  useEffect(() => {
    handleCompletePost(slug)
  }, [slug])

  return (
    <Container>
      {post.created_at === undefined ? (
        <LoaderContainer>
          <Spinner />
        </LoaderContainer>
      ) : (
        <>
          <PostNameCard
            title={post.title}
            comments={post.comments}
            created_at={formatDateToTimePast(post.created_at)}
            html_url={post.html_url}
            user={post.user}
          />
          <PostContent>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </PostContent>
        </>
      )}
    </Container>
  )
}
