export class RecipeModel {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private userId: string,
        private date?: Date
    ) { }


    static toRecipeModel = (data: any): RecipeModel => {
        // LEMBRAR QUE AQUI É DO JEITO QUE VEM DO BD .propriedade_do_banco
        return new RecipeModel(data.id, data.title, data.description, data.user_id, data.created_at)
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
    public getUserId() {
        return this.userId
    }
    public getDate() {
        return this.date
    }
}