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
                setters.setCount(states.count +1)
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
                setters.setCount(states.count +1)
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
                setters.setCount(states.count +1)
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
        <div>
            <p>Enviado por: {props.post?.username}</p>
            <h3>
                {props.post?.body}
            </h3>
            <p>
                <button onClick={() => onClickTop()}>{imgTop}</button> {props.post?.voteSum ? props.post?.voteSum : 0}
                <button onClick={() => onClickBottom()}>{imgBottom}</button>
                <button onClick={() => goToPostPage(navigate, props.post?.id)}>Comments</button>
                {props.post?.commentCount ? props.post?.commentCount : 0}
            </p>
        </div>
    );
}
