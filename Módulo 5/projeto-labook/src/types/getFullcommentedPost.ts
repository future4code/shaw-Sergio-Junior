export type GetFullCommentedPost = {
    id: number,
    photo: string,
    description: string,
    type: "NORMAL" | "EVENT",
    created_at: string,
    author_id: string,
    comment: string,
    user_id: string,
    post_id: string
}[]