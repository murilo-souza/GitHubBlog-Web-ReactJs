import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 3rem;
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
  }
`

export const Title = styled.strong`
  font-size: 1.125rem;
  color: ${(props) => props.theme.baseSubtitle};
`

export const Publication = styled.span`
  font-size: 1rem;
  font-weight: 400;

  color: ${(props) => props.theme.baseSpan};
`

export const InputText = styled.input`
  width: 100%;
  height: 3rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.baseBorder};

  background-color: ${(props) => props.theme.baseInput};
  color: ${(props) => props.theme.baseLabel};

  padding: 1rem 0.75rem;

  font-size: 1rem;
  font-weight: 400;

  :focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
