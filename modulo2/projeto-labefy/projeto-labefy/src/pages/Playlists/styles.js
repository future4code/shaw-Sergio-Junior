import styled from 'styled-components'
import simpsonsnew from "../../simpsonsnew.jpg"

export const ContainerPlaylist = styled.div`
    display: flex; 
    flex-direction: column;
    text-align: center;
    align-items:center; 
    font-family: cursive;
    color: white;
    padding-top: 10vh;
`
export const PlaylistP = styled.p`
margin-right:0.8rem;
color: white;
    &:hover{
        cursor: pointer;
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
export const DivBotaoApagar = styled.div`
    display:flex;
`

export const ContainerNewPlaylist = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
background-image: url(${simpsonsnew});
background-size: cover;
input{
    border:none;
    margin-top: 10vh;
    height: 2rem;
    border-radius: 15px;
    text-align:center;
}

button { 
    border: none;
    width: 30%;
    padding: 0.5rem;
    border-radius: 15px;
    opacity: 0.7; 
    margin-top: 2vh;
    &:hover{
        opacity:1;
        cursor: grab
    }
}
`

