import styled from "styled-components"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export const CardCreateUser = styled(Card)`
display:flex;
flex-direction: column;
justify-content: center;
margin: 1vh auto;
width: 98%;
min-height: 100vh;
`
export const CardCreateUserFormButton = styled(CardContent)`
    display: flex;
    justify-content:center;
`

export const CardContentButtonUserForm = styled(CardContent)`
    display: flex;
    justify-content:center;
    align-items: center; 
    text-align: center;
`

export const ContainerImgLogin = styled(CardContent)`
display: flex; 
flex-direction: column; 
margin: 5vh auto 0 auto;
justify-content: center;
align-items: center;
text-align: center;
img{
    max-width: 100px;
}
`