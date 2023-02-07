import styled from 'styled-components'

export const Container = styled.div`
  margin-top: -4.5rem;
  margin-bottom: 5rem;

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
  width: 20%;
  height: 20%;

  border-radius: 8px;

  /* background-color: ${(props) => props.theme.baseInput}; */

  overflow: hidden;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.baseTitle};
  margin-bottom: 0.5rem;
`

export const Description = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.baseText};
  margin-bottom: 1.5rem;
`

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;

  white-space: nowrap;

  cursor: pointer;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: 0.2s border-bottom;
  }
`

export const Footer = styled.div`
  max-width: 30rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
