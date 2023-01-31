import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.baseLabel};
    font-size: 1.5rem;
  }
`

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.baseSubtitle};
  margin-right: 1.5rem;
`
