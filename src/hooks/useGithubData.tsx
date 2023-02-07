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

interface GithubContextData {
  user: User
}

interface ContextProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextData)

export function GithubContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState({} as User)

  async function handleUserCardData() {
    const response = await api.get('/users/murilo-souza')

    setUser({
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
      company: response.data.company,
      followers: response.data.followers,
      login: response.data.login,
      name: response.data.name,
      html_url: response.data.html_url,
    })
    console.log(user)
  }

  useEffect(() => {
    handleUserCardData()
  })

  return (
    <GithubContext.Provider value={{ user }}>{children}</GithubContext.Provider>
  )
}

export function useGithubData() {
  const context = useContext(GithubContext)
  return context
}
