import styled from "styled-components"

export const DivContainerMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
width: 10vw;
height: auto;
margin: 1rem auto;
text-align: center;
button{ 

    border-radius: 10px;
    height: 5vh;
    width: auto;
    border: none; 
    margin: 0.5rem;
    font-weight: 800;
    opacity:  0.8;
    &:hover{
        opacity: 1;
        color: darkcyan; 
        background-color: #00008b;
        cursor: pointer;
    }
}
input { 
    box-shadow: 0px 2px 2px #000;
    margin: 0.5rem;       
    border-radius: 10px;
    padding: 0.5rem;
}
`