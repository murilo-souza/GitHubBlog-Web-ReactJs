import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubContextProvider } from './hooks/useGithubData'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <GithubContextProvider>
          <Router />
        </GithubContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
