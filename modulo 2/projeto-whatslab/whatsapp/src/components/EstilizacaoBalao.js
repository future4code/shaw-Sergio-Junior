import styled from 'styled-components'

export const BalaoDeMensagem = styled.div`
position:relative;
display: flex;
flex-direction:column;
background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8"
        } else if (props.tipo === "outro") {
            return "#ffffff"
        }
    }};
align-self: ${props => {
        if (props.tipo === "eu") {
            return "flex-start"
        } else {
            return "flex-end"
        }
    }};
margin-right: ${props => {
        if (props.tipo === "eu") {
            return "1.5rem"
        }
    }};
margin-left: ${props => {
        if (props.tipo !== "eu") {
            return "1.5rem"
        }
    }};
max-width: 50%;
min-width: 10%;
margin-bottom: 1rem;
word-wrap: break-word;
padding: 0.9em 0.8em;
border-radius: 0.5em;
font-weight: 450;
line-height: 1.3;
box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`

export const ContainerNome = styled.div`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`
export const Doublecheck = styled.img`
    position: absolute;
    height: 0.5em;
    right: 4px;
    bottom: 4px;
`
export const ContainerMain = styled.div`
display:flex;
flex-direction:column; 
background-image: url(https://personalmarketingdigital.com.br/wp-content/uploads/2018/05/background-whatsapp-7.jpg);
height: 100%;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Titulo = styled.div`
display: flex;
justify-content: center;
 h3 {
    box-shadow: 0 10px 10px 3px;
    border: none;
    font-weight: 550;
    font-size: 3.5rem;
    border-radius: 15px;
 }  
` 