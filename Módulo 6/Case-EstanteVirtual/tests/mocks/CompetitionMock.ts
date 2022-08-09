import { COMPETITION, CompetitionDTO, CompetitionModel, CompetitionStatusData, CompetitionStatusDTO, STATUS } from "../../src/model/CompetitionModel";

export const CompetitionMock = new CompetitionModel("id_mock", COMPETITION.DARDO, STATUS.ACTIVE)
export const CompetitionMock2 = new CompetitionModel("id_mock2", COMPETITION.HUNDRED_METERS, STATUS.FINISHED)

export const CompetitionByIdMock: CompetitionStatusData = {
    id: "id_mock3",
    competition: COMPETITION.DARDO,
    status: STATUS.ACTIVE
}

export const CompetitionByIdMock2: CompetitionStatusData = {
    id: "id_mock4",
    competition: COMPETITION.HUNDRED_METERS,
    status: STATUS.FINISHED
}

export const CompetitionSuccessDTO: CompetitionDTO = {
    competition: COMPETITION.DARDO,
    status: STATUS.ACTIVE
}
export const CompetitionFailureDTO: CompetitionDTO = {
    competition: COMPETITION.HUNDRED_METERS,
    status: "ativa" as STATUS
}

export const CompetitionStatusSuccessDTO: CompetitionStatusDTO = {
    id: "id_mock3",
    status: STATUS.ACTIVE
}

export const CompetitionStatusFailureDTO: CompetitionStatusDTO = {
    id: "id_mock3",
    status: "" as STATUS
} 