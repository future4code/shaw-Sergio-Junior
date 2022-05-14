import React, { useContext } from "react";
import { BASE_URL, headers } from "../../constants/Constants";
import axios from "axios";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { GlobalContext } from "../../global/GlobalContext";
import { ContainerCommentCard, ContainerBoxCommentCard } from "../../pages/PostPage/styled";
import { Button } from "@mui/material";

export const CommentCard = (props) => {
    const { setters, states } = useContext(GlobalContext)

    //-- funcoes para setar o like --//
    let onClickTop = () => createCommentVote()
    let onClickBottom = () => changeCommentVote()

    //-- imagens do botao --//
    let imgTop = ""
    let imgBottom = ""


    //-- create / change / delete --//
    const createCommentVote = () => {
        const body = {
            direction: 1
        }
        axios
            .post(`${BASE_URL}/comments/${props.comment.id}/votes`, body, headers)
            .then((res) => {
                console.log(res.data);
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }
    const changeCommentVote = () => {
        const body = {
            direction: -1
        }
        axios
            .put(`${BASE_URL}/comments/${props.comment.id}/votes`, body, headers)
            .then((res) => {
                console.log(res.data);
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }
    const deleteCommentVote = () => {
        axios
            .delete(`${BASE_URL}/comments/${props.comment.id}/votes`, headers)
            .then((res) => {
                console.log(res.data)
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    //-- configurando as condicionais if else --//
    if (props.comment.userVote === null) {
        imgTop = <ThumbUpOutlinedIcon />
        imgBottom = <ThumbDownAltOutlinedIcon />
    } else if (props.comment.userVote > 0) {
        imgTop = <ThumbUpIcon />
        imgBottom = <ThumbDownAltOutlinedIcon />
        onClickTop = () => deleteCommentVote()
    } else if (props.comment.userVote < 0) {
        imgTop = <ThumbUpOutlinedIcon />
        imgBottom = <ThumbDownAltIcon />
        onClickBottom = () => deleteCommentVote()
    }

    return (
        <ContainerBoxCommentCard>
            <ContainerCommentCard>
            <p>Enviado por: {props.comment.username}</p>
            <p>
                {props.comment.body}
            </p>
            </ContainerCommentCard>
            <div>
                <Button onClick={() => onClickTop()}>{imgTop}</Button>
                {props.comment.voteSum}
                <Button onClick={() => onClickBottom()}>{imgBottom}</Button>
            </div>
        </ContainerBoxCommentCard>
    );
}
