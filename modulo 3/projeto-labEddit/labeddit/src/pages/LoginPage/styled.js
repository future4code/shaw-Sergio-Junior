import styled from 'styled-components'
import CardContent from '@mui/material/CardContent';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column
`

export const ContainerLoading = styled(CardContent)`
display: flex;
margin: 3vh auto;
justify-content: center;
align-items: center;
text-align: center;
img{
    max-width: 150px;
}
`
export const ContainerForm = styled.form`
 display: flex; 
 flex-direction: column;
 gap: 1rem;
 text-align: center;
 align-items: center;
 justify-content: center;
`
export const ContainerImgLogin = styled(CardContent)`
display: flex; 
flex-direction: column; 
margin: 5vh auto;
justify-content: center;
align-items: center;
text-align: center;
img{
    max-width: 150px;
}
`