import styled from "styled-components"

export const DivContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 1rem auto;
    height: auto;
    align-items: center;
    button{ 
        border-radius: 10px;
        height: auto;
        width: 10vw;
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
`


export const ContainerInfoCandidates = styled.div`
    word-break: break;
    border-radius: 15px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    box-shadow: 0px 2px 4px #000;
    box-sizing: content-box;
    height: auto;
    width: auto;
    text-align: center;
    p span{
        font-weight: 600;
    }
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
`

export const ContainerPCadidates = styled.div`
    height: 100%;
    text-align: center;
`
export const ContainerInfoTripCandidate = styled.div`
    border-radius: 15px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    box-sizing: content-box;
    height: 100%;
    width: 100%;
    word-break: break;
    text-align: center;
    p span{
        font-weight: 600;
    } 
`
