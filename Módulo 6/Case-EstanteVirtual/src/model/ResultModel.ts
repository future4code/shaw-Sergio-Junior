export class ResultModel {

    constructor(
        private id: string,
        private athlete_id: string,
        private competition_id: string,
        private value: number,
        private unity: UNITY
    ) { }

    public getId() {
        return this.id
    }
    public getAthleteId() {
        return this.athlete_id
    }
    public getCompetitionId() {
        return this.competition_id
    }
    public getValue() {
        return this.value
    }
    public getUnity() {
        return this.unity
    }
}

export enum UNITY {
    METER = "m",
    SECONDS = "s"
}

export interface CompetitionResultDTO {
    athlete_id: string,
    competition_id: string,
    value: number,
    unity: UNITY
}

export interface ResultsData {
    id: string,
    athlete_id: string,
    competition_id: string,
    value: number,
    unity: UNITY
}