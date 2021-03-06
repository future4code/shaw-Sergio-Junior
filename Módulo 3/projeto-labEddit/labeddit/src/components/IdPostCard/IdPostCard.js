import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { BASE_URL, headers } from "../../constants/Constants";
import axios from "axios";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export const IdPostCard = (props) => {
    const { setters, states } = useContext(GlobalContext)

    //-- funcoes para setar o like --//
    let onClickTop = () => createPostVote()
    let onClickBottom = () => changePostVote()

    //-- imagens do botao --//
    let imgTop = ""
    let imgBottom = ""

    //-- request = create / change / delete --//
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

    //-- configurando as condicionais if else--//
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
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>sent by: {props.item.username}</Typography>
            <Typography variant="h5" component="div">
                {props.item.body}
            </Typography>
            <p>
                <Button onClick={() => onClickTop()}>{imgTop}</Button> {props.item?.voteSum ? props.item?.voteSum : 0}
                <Button onClick={() => onClickBottom()}>{imgBottom}</Button>
                <Button>
                    <ModeCommentIcon />
                </Button>
                {props.item?.commentCount ? props.item?.commentCount : 0}
            </p>
        </div>
    );
}
