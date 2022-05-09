import styled from "styled-components"

export const FlexContainerCreateTrip = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    padding-top: 5rem;
    width: 40vw;
    height: auto;
    margin: 1rem auto;
    gap: 0.5rem;
    @media screen and (max-width:800px){
    width: 70%;
    }
    input { 
        margin: 0.5rem;
        border: none;
        border-radius: 7px;
        padding: 0.2rem;
        box-shadow: 0px 2px 5px #000;
        text-align: center;
    }
    select {
        text-align: center;
        margin: 0.5rem;
        border: none;
        border-radius: 7px;
        padding: 0.2rem;
        box-shadow: 0px 2px 5px #000;
    }
    
    button{ 
        border-radius: 10px;
        height: 5vh;
        width: 20vw;
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
    `
