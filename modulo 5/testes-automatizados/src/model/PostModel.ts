export class PostModel {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: "NORMAL" | "EVENT",
        private created_at: string,
        private author_id: string,
    ) { }
}

export interface Post {
    id: string,
    photo: string,
    description: string,
    type: "NORMAL" | "EVENT",
    created_at: string,
    author_id: string,
}