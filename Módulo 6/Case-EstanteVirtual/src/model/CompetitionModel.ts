export class CompetitionModel {

    constructor(
        private id: string,
        private competition: COMPETITION,
        private status: STATUS
    ) { }

    public getId() {
        return this.id
    }
    public getCompetition() {
        return this.competition
    }
    public getStatus() {
        return this.status
    }
}

export interface CompetitionDTO {
    competition: COMPETITION,
    status: STATUS
}

export interface CompetitionStatusDTO {
    id: string,
    status: STATUS
}

export interface CompetitionStatusData {
    id: string,
    competition: COMPETITION,
    status: STATUS
}

export enum COMPETITION {
    HUNDRED_METERS = "100m",
    DARDO = "Dardo"
}

export enum STATUS {
    ACTIVE = "Active",
    FINISHED = "Finished"
}