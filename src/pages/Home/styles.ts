import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Posts = styled.div`
  display: grid;

  grid-template-columns: auto auto;
  grid-gap: 2rem;
`
