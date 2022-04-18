import styled from 'styled-components'
import dark2 from "../../dark2.jpg"

export const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(${dark2});
    background-size: cover;
    color: white;
`
export const ContainerNewTrack = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

p {
font-family: cursive;
background-color: #00000092;
border-radius: 15px;
opacity: 0.9;
}

input{
    margin: 0.2rem;
    border:none;
    height: 2rem;
    border-radius: 15px;
    text-align:center;
}

button { 
    margin: 0.2rem;
    border: none;
    width: 30%;
    padding: 0.5rem;
    border-radius: 15px;
    opacity: 0.7; 
    &:hover{
        opacity:1;
        cursor: grab
    }
}
`

export const SongsContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
    text-align: center;
    font-family: cursive;
    font-weight: 500; 

    audio{
        width: 15vw;
        margin: 0.1rem 1rem;
        @media(max-width: 750px) {
    width: 45vw;
    }
    @media(min-width: 751px) and (max-width: 1200px) {
      width: 25vw;
    }
    }
`

export const BotaoApagar = styled.button`
    font-size: 1.5rem;
    border:none;
    background-color: inherit;
    &:hover{
        cursor: pointer;
    }
`
