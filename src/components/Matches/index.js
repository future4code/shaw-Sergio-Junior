import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem;
  max-width: 100%;
  padding: 1rem;
  &:hover{
      cursor: pointer;
  }
  img{
    margin-right: 1rem; 
    border-radius: 100%;
    height: 30px;
    width: 30px;
  }

  &:hover {
      background-color: #63636318
  }
`
