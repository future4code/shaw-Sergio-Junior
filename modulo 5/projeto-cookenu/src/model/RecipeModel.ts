export class RecipeModel {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private date?: string
    ) { }


    static toRecipeModel = (data: any): RecipeModel => {
        console.log(data.date)
        return new RecipeModel(data.id, data.title, data.description, data.date)
    }
    public getId() {
        return this.id
    }
    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
    public getDate() {
        return this.date
    }
}