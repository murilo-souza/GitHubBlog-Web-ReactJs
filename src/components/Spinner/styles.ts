import styled, { keyframes } from 'styled-components'

const progress = keyframes`
  from {
    transform: scaleX(5%) translateX(-5%)
  }
  to {
    transform: scaleX(75%) translateX(130%)
    
  }
`

export const Container = styled.div`
  background-color: ${(props) => props.theme.baseTitle};
  width: 16rem;
  height: 0.25rem;
  overflow: hidden;
`

export const Inner = styled.div`
  background-color: ${(props) => props.theme.blue};
  height: 100%;
  transform-origin: left;
  animation: ${progress} 1s infinite;
`
