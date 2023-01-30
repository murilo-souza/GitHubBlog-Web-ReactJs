import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 13.25rem;

  background-color: ${(props) => props.theme.baseProfile};

  border-radius: 10px;

  padding: 2rem;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const Image = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme.baseInput};

  overflow: hidden;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`

export const Name = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.baseTitle};
`

export const Description = styled.h2`
  font-size: 1rem;
  color: ${(props) => props.theme.baseText};
`

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`
