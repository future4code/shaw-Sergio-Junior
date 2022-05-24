import styled from "styled-components"

export const MainContainerAdminHome = styled.div`
button{ 
    border-radius: 10px;
    height: auto;
    width: auto;
    border: none; 
    margin: 0.5rem;
    font-weight: 800;
    opacity:  0.8;
    padding: 0.5rem;
    &:hover{
        opacity: 1;
        color: darkcyan; 
        background-color: #00008b;
        cursor: pointer;
    }
}
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
text-align: center;
`
export const ContainerTripListAdmin = styled.div`
p{
    &:hover{ 
        cursor: pointer;
        color: white;
    }
}

border-radius: 15px;
display: flex; 
width: auto;
height: auto;
justify-content: space-between;
align-content: center;
align-items: center;
word-break: break;
margin: 1rem;
box-sizing: content-box;
box-shadow: 0px 2px 4px #000;
padding: 1rem;
&:hover{ 
    color: darkcyan; 
    background-color: darkblue; 
    opacity: 0.8;
}
`
