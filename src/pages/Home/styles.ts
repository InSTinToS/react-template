import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 24px;

  text-align: center;

  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`
