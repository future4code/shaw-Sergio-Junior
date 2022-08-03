import { CompetitionResultDTO, ResultModel, ResultsData, UNITY } from "../../src/model/ResultModel";

export const ResultMock1 = new ResultModel("id_mock", "athleteId_mock", "competitionId_mock", 10, UNITY.SECONDS)
export const ResultMock2 = new ResultModel("id_mock2", "athleteId_mock2", "competitionId_mock2", 85, UNITY.METER)

export const ResultDataMock1: ResultsData = {
    id: "id_mock",
    athlete_id: "athleteId_mock",
    competition_id: "id_mock3",
    value: 55,
    unity: UNITY.METER
}
export const ResultDataMock2: ResultsData = {
    id: "id_mock2",
    athlete_id: "athleteId_mock2",
    competition_id: "id_mock2",
    value: 85,
    unity: UNITY.METER
}

export const CompetitionResultMockDTO: CompetitionResultDTO = {
    athlete_id: "id_mock3",
    competition_id: "id_mock3",
    value: 55,
    unity: UNITY.METER
} 
export const CompetitionResultFailureMockDTO: CompetitionResultDTO = {
    athlete_id: "",
    competition_id: "id_mock3",
    value: 55,
    unity: UNITY.METER
} 