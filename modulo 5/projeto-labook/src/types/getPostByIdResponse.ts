export type getPostByIdResponse = {
    id: string,
    photo: string,
    description: string,
    type: "NORMAL" | "EVENT",
    created_at: string,
    author_id: string
}[]