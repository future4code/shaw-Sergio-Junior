import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPostPage } from "../../routes/coordinator";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { BASE_URL, headers } from "../../constants/Constants";
import axios from "axios";
import { GlobalContext } from '../../global/GlobalContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { PostCardContainer } from './styled'


export const PostCard = (props) => {
    const navigate = useNavigate()
    const { setters, states } = useContext(GlobalContext)
    //-- funcoes para setar o like --//
    let onClickTop = () => createPostVote()
    let onClickBottom = () => changePostVote()

    //-- imagens do botao --//
    let imgTop = ""
    let imgBottom = ""

    //-- create / change / delete --//
    const createPostVote = () => {
        const body = {
            direction: 1
        }
        axios
            .post(`${BASE_URL}/posts/${props.post.id}/votes`, body, headers)
            .then((res) => {
                console.log(res.data);
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }
    const changePostVote = () => {
        const body = {
            direction: -1
        }
        axios
            .put(`${BASE_URL}/posts/${props.post.id}/votes`, body, headers)
            .then((res) => {
                console.log(res.data);
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }
    const deletePostVote = () => {
        axios
            .delete(`${BASE_URL}/posts/${props.post.id}/votes`, headers)
            .then((res) => {
                console.log(res.data)
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    //-- configurando as condicionais if else --//
    if (props.post.userVote === null) {
        imgTop = <ThumbUpOutlinedIcon />
        imgBottom = <ThumbDownAltOutlinedIcon />
    } else if (props.post.userVote > 0) {
        imgTop = <ThumbUpIcon />
        imgBottom = <ThumbDownAltOutlinedIcon />
        onClickTop = () => deletePostVote()
    } else if (props.post.userVote < 0) {
        imgTop = <ThumbUpOutlinedIcon />
        imgBottom = <ThumbDownAltIcon />
        onClickBottom = () => deletePostVote()
    }

    //-- fazer funcao curtir e descutir --// 

    return (
        <PostCardContainer sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Enviado por: {props.post?.username}</Typography>
                <Typography variant="h5" component="div">
                    {props.post?.body}
                </Typography>
                <CardActions>
                    <Button size="small" onClick={() => onClickTop()}>
                        {imgTop}
                    </Button>
                    <p>{props.post?.voteSum ? props.post?.voteSum : 0}</p>
                    <Button size="small" onClick={() => onClickBottom()}>
                        {imgBottom}
                    </Button>
                    <Button size="small" onClick={() => goToPostPage(navigate, props.post?.id)}>
                        <ModeCommentIcon />
                    </Button>
                    <p>{props.post?.commentCount ? props.post?.commentCount : 0}</p>
                </CardActions>
            </CardContent>
        </PostCardContainer>
    );
}
