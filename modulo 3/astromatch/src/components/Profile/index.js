import styled from "styled-components"

export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3rem;
img{
  max-height: 320px;
  max-width: 100%;
  box-shadow: 0 1px 5px 0;
  margin-bottom: 0.5rem; 
}

`

export const XButton = styled.button`
border-radius: 100%;
height: 50px;
width: 50px;
border: 1px solid red;
color: red;
font-weight: 600;
font-size: 30px;
margin: 1rem 2rem;
&:hover{
  color: white; 
  background-color: red;
  cursor: pointer;
}
`

export const YesButton = styled.button`
border-radius: 100%;
height: 50px;
width: 50px;
border: 1px solid green;
color: green;
font-weight: 600;
font-size: 30px;
margin: 1rem 2rem;
&:hover{
  color: white; 
  background-color: green;
  cursor: pointer;
}
`
