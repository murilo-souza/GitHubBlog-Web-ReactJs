import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface User {
  avatar_url: string
  bio: string
  company: string
  followers: number
  login: string
  name: string
  html_url: string
}

export interface PostCard {
  id: number
  title: string
  body: string
  created_at: Date
}

interface Post extends PostCard {
  slug: number
  comments: string
  html_url: string
}

interface GithubContextData {
  user: User
  post: Post
  postCard: PostCard[]
  getInputValue: (value: string) => void
}

interface ContextProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextData)

export function GithubContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState({} as User)
  const [post, setPost] = useState({} as Post)
  const [postCard, setPostCard] = useState<PostCard[]>([])
  const [search, setSearch] = useState('')

  function getInputValue(value: string) {
    setSearch(value)
  }

  async function handleUserCardData() {
    const userData = await api.get('/users/murilo-souza')
    setUser(userData.data)
  }

  async function handlePostCardData() {
    const postData = await api.get(
      `/search/issues?q=${search}%20repo:murilo-souza/GitHubBlog-Web-ReactJs`,
    )

    setPostCard(postData.data.items)
  }

  async function handleCompletePost(slug: number) {
    const post = await api.get(
      `/repos/murilo-souza/GitHubBlog-Web-ReactJs/issues/${slug}`,
    )

    setPost(post.data)
    console.log(post)
  }

  useEffect(() => {
    handleUserCardData()
    handleCompletePost(post.slug)
    handlePostCardData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <GithubContext.Provider value={{ user, post, postCard, getInputValue }}>
      {children}
    </GithubContext.Provider>
  )
}

export function useGithubData() {
  const context = useContext(GithubContext)
  return context
}
