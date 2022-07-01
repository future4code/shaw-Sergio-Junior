export class UpdateRecipeModel {
    constructor(
        private title: string,
        private description: string
    ) { }

    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
}