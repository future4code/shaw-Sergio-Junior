import styled from 'styled-components'

export const MainContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center; 
    min-height: 100vh; 
    max-width: 100vw;
    border: 1px solid black; 
    h1{
        padding: 10vh
    }
`

export const MainButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    button{ 
        font-weight: 600;
        padding: 1rem; 
        margin: 0.5rem 1rem; 
        width: auto;
        border: none; 
        border-radius: 15px;

        &:hover { 
            cursor: pointer;
            color: darkcyan;
            background-color: darkblue;
            opacity: 0.8;
        }
    }
`
