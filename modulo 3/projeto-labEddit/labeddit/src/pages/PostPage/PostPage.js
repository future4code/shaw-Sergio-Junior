import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/Constants"
import { UseProtectedPage } from "../../hooks/useProtectedPage"
import { CommentCard } from "../../components/CommentCard/CommentCard"
import { GlobalContext } from '../../global/GlobalContext';
import { IdPostCard } from "../../components/IdPostCard/IdPostCard"
import useRequestData from "../../hooks/useRequestData"
import CreateComment from '../../components/CreateComment/CreateComment'
import tictac from "../../assets/tictac.gif"
import { ContainerLoading, ContainerPostPage, ContainerPostPageCreateComment } from "./styled"

export default function PostPage() {
    UseProtectedPage()
    const { states } = useContext(GlobalContext)
    const params = useParams()
    const id = params.id
    const [comments] = useRequestData(`${BASE_URL}/posts/${id}/comments`, states.count)

    //-- Post card individual --//
    const post = states.posts?.filter((item) => {
        return item.id === id
    }).map((item) => {
        return <IdPostCard key={item.id} item={item} />
    })

    //-- Lista de comentarios do post individual --//
    const commentsMap = comments?.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />
    })

    return (
        <div>
            {post && commentsMap ? (
                <div>
                    <ContainerPostPage>
                        {post}
                    </ContainerPostPage>
                    <ContainerPostPageCreateComment>
                        <CreateComment id={id} />
                    </ContainerPostPageCreateComment>
                    <ContainerPostPage>
                        {commentsMap}
                    </ContainerPostPage>
                </div>
            ) :
                <ContainerLoading>
                    <img src={tictac} />
                </ContainerLoading>}

        </div>
    )
}