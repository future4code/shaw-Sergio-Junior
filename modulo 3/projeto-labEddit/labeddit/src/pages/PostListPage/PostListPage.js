import React, { useContext } from "react"
import { UseProtectedPage } from "../../hooks/useProtectedPage"
import { GlobalContext } from '../../global/GlobalContext';
import { PostCard } from "../../components/PostCard/PostCard";
import CreatePostCard from "../../components/CreatePostCard/CreatePostCard";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';

export default function PostListPage() {
    UseProtectedPage()
    const { states } = useContext(GlobalContext)
    const postsMap = states.posts?.map((post) => {
        return <PostCard key={post?.id} post={post} />
    })

    //--- fazer atualizar automatico ---//

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fullwidth>
                <Box sx={{ bgcolor: '#cfe8fc', minheight: '100vh' }} >
                    <CardContent>
                        <div>
                            <CreatePostCard />
                        </div>
                        <div>
                            {postsMap}
                        </div>
                    </CardContent>
                </Box>
            </Container>
        </React.Fragment >
    )
}