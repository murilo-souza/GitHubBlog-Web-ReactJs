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

interface GithubContextData {
  user: User
  postCard: PostCard[]
  getInputValue: (value: string) => void
}

interface ContextProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextData)

export function GithubContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState({} as User)
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
      `/search/issues?q=${search}%20repo:murilo-souza/GithubBlog-Web-ReactJs`,
    )

    setPostCard(postData.data.items)
  }

  useEffect(() => {
    handleUserCardData()

    handlePostCardData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <GithubContext.Provider value={{ user, postCard, getInputValue }}>
      {children}
    </GithubContext.Provider>
  )
}

export function useGithubData() {
  const context = useContext(GithubContext)
  return context
}
