import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.baseProfile};

  padding: 2rem;

  border-radius: 10px;

  margin-top: -4.5rem;
  margin-bottom: 2.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HighlightText = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};

  font-size: 0.75rem;
  font-weight: 400;

  margin-bottom: 1.25rem;

  cursor: pointer;

  border-bottom: 1px solid ${(props) => props.theme.baseProfile};

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: 0.2s border-bottom;
  }
`

export const Back = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};

  font-size: 0.75rem;
  font-weight: 400;

  margin-bottom: 1.25rem;

  cursor: pointer;

  border-bottom: 1px solid ${(props) => props.theme.baseProfile};

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: 0.2s border-bottom;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.baseTitle};

  margin-bottom: 0.5rem;
`

export const InfoArea = styled.section`
  display: flex;
  gap: 1rem;
`
