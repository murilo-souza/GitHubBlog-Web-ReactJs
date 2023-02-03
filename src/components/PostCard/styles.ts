import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  background-color: ${(props) => props.theme.basePost};

  border-radius: 10px;

  padding: 2rem;
`

export const Top = styled.section`
  display: flex;
  justify-content: space-beetwen;
  align-items: flex-start;
`

export const Title = styled.h1`
  font-size: 1.25rem;

  color: ${(props)=>props.theme.baseTitle}
`

export const Description = styled.p`
  font-size: 1rem
  font-weight: 400;

  color: ${(props)=> props.theme.baseText}
`

export const TimePast = styled.span`
  font-size: 0.75rem
  font-weight: 400;

  color: ${(props)=> props.theme.baseSpan}
`
