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