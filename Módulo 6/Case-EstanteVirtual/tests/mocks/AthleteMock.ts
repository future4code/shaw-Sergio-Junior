import { AthleteDTO, AthleteModel } from "../../src/model/AthleteModel";

export const AthleteMock = new AthleteModel("id_mock", "name_mock1", "nick_mock", "brazil")
export const AthleteMock2 = new AthleteModel("id_mock2", "name_mock2", "nick_mock4", "brazil")

export const AthleteSuccessDTO: AthleteDTO = {
    name: "name_mock1",
    nickname: "nick_mockSuccess",
    nationality: "brazil"
} 

export const AthleteFailureDTO: AthleteDTO = {
    name: "name_mock1",
    nickname: "nick_mockFailure",
    nationality: "basil"
} 