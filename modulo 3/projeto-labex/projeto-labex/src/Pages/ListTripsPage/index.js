import styled from "styled-components"

export const MainContainerTripList = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    align-content: center;
    text-align: center;
`
export const CardTripList = styled.div`
    border-radius: 20px;
    display: flex;
    flex-direction: column; 
    width: auto;
    height: auto;
    justify-content: center;
    align-content: center;
    align-items: center;
    word-break: break;
    margin: 1rem;
    box-sizing: content-box;
    box-shadow: 0px 2px 8px #000;
    padding: 1rem;
    &:hover{ 
        color: darkcyan; 
        background-color: darkblue; 
        opacity: 0.8;
    }

`
export const ButtonsTripList = styled.div`
    button{ 
        margin: 1rem;
        height: 5vh;
        width: 20vh;
        border: none;
        border-radius: 10px;
        opacity: 0.8;
        font-weight: 800; 
        &:hover { 
            opacity: 1; 
            color: darkcyan;
            cursor: pointer;
        }
    }
`
