import styled from "styled-components"
import CardContent from '@mui/material/CardContent';

export const ContainerLoading = styled(CardContent)`
display: flex;
margin: 15vh auto;
justify-content: center;
align-items: center;
text-align: center;
img{
    max-width: 150px;
}
`

export const ContainerPostPage = styled(CardContent)`
display: flex;
flex-wrap: wrap;
margin: 5vh auto;
justify-content: center;
align-items: center;
text-align: center;
`

export const ContainerPostPageCreateComment = styled(CardContent)`
display: flex;
flex-direction: column;
gap: 1rem;
justify-content: center;
align-items: center;
text-align: center;
`
export const ContainerCommentCard = styled(CardContent)`
display: flex;
flex-direction: column;
margin: 0 auto;
justify-content: center;
`

export const ContainerBoxCommentCard = styled.div`
    display:flex;
    flex-direction: column;
    border:  1px solid black;
    border-radius: 15px;
    margin: 1rem;
`
