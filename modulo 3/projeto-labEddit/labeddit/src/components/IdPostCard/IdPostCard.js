import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { BASE_URL, headers } from "../../constants/Constants";
import axios from "axios";

export const IdPostCard = (props) => {
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
            .post(`${BASE_URL}/posts/${props.item.id}/votes`, body, headers)
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
            .put(`${BASE_URL}/posts/${props.item.id}/votes`, body, headers)
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
            .delete(`${BASE_URL}/posts/${props.item.id}/votes`, headers)
            .then((res) => {
                console.log(res.data)
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    //-- configurando as condicionais if else --//
    if (props.item.userVote === null) {
        imgTop = <ThumbUpOutlinedIcon />
        imgBottom = <ThumbDownAltOutlinedIcon />
    } else if (props.item.userVote > 0) {
        imgTop = <ThumbUpIcon />
        imgBottom = <ThumbDownAltOutlinedIcon />
        onClickTop = () => deletePostVote()
    } else if (props.item.userVote < 0) {
        imgTop = <ThumbUpOutlinedIcon />
        imgBottom = <ThumbDownAltIcon />
        onClickBottom = () => deletePostVote()
    }

    return (
        <div>
            <p>Enviado por: {props.item.username}</p>
            <h3>
                {props.item.body}
            </h3>
            <p>
                <button onClick={() => onClickTop()}>{imgTop}</button> {props.item?.voteSum ? props.item?.voteSum : 0}
                <button onClick={() => onClickBottom()}>{imgBottom}</button>
                Comments
                {props.item?.commentCount ? props.item?.commentCount : 0}
            </p>
        </div>
    );
}
