export class AthleteModel {

    constructor(
        private id: string,
        private name: string,
        private nickname: string,
        private nationality: string
    ) { }

    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getNickname() {
        return this.nickname
    }
    public getNationality() {
        return this.nationality
    }
}

export interface AthleteDTO {
    name: string,
    nickname: string,
    nationality: string
} 