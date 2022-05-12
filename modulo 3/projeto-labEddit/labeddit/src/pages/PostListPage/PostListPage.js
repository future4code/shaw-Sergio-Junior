import React, { useContext } from "react"
import { UseProtectedPage } from "../../hooks/useProtectedPage"
import { GlobalContext } from '../../global/GlobalContext';
import { PostCard } from "../../components/PostCard/PostCard";
import CreatePostCard from "../../components/CreatePostCard/CreatePostCard";

export default function PostListPage() {
    UseProtectedPage()
    const { states } = useContext(GlobalContext)
    const postsMap = states.posts?.map((post) => {
        return <PostCard key={post?.id} post={post} />
    })

    //--- fazer atualizar automatico ---//

    return (
        <div>
            <div>
                <CreatePostCard />
            </div>
            <div>
                {postsMap}
            </div>
        </div>
    )
}