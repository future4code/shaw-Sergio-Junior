import styled from "styled-components"
import dark from "./dark.jpg"
import simpsonsPlaylist from './simpsonsPlaylist.jpg'

export const MainContainer = styled.div` 
display: flex;
max-width: 100vw;
max-height: 100vh;
margin: 0;
padding: 0;
box-sizing: border-box;
@media(max-width: 750px) {
    flex-direction: column;
    }
`
export const ContainerBotoes = styled.div`
display:flex;
flex-direction: column; 
width:50vw;
align-items: flex-start;
justify-content: space-evenly;
background-image: url(${dark});
background-size: cover;
height: 100vh;
@media(min-width: 751px) and (max-width: 1200px) {
    align-items: center;
    }
@media(max-width: 750px) {
    width: 100vw;
    align-items: center;

    }
  button { 
    font-size: 2.5rem;
    margin-left: 2vw;
    font-weight: 500; 
    font-family: cursive;
    height: 15vh;
    width: 25vw;
    border: none;
    border-radius: 100px 10px 100px 50px;
    display:flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    opacity: 0.5;
    box-shadow: 3px 5px 5px 0px;
    background-color: black;
    color: white;
    @media(max-width: 750px) {
    width: 50vw;
    font-size: 2rem;
    }
    @media(min-width: 751px) and (max-width: 1200px) {
      width: 35vw;
      font-size: 2rem;
    }
    &:hover {
      opacity: 0.7;
      cursor:pointer;
      background-color: lightgray;
      color: black;
    }
  }
`
export const ContainerDois = styled.div`
display:flex; 
width:50vw;
align-items: flex-start;
justify-content: space-evenly;
background-image: url(${simpsonsPlaylist});
background-size: cover;
@media(max-width: 750px) {
    width: 100vw;
    }
`
