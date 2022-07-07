export type GetLikedPosts = {
    id: number,
    liked: "1" | "0",
    user_id: string,
    post_id: string
}