import { CardDTO, CardModel } from "../../src/model/CardModel";

export const CardMock1 = new CardModel(
    "id_mock", "123", "Joao", "1452 2569 8546 4580", new Date("2026/10/26"), "123"
)
export const CardMock2 = new CardModel(
    "id_mock", "321", "Maria", "1452 2659 8546 4580", new Date("2026/10/30"), "321"
)

export const CardMockDTOSuccess: CardDTO = {
    cardHolderId: "123",
    cardHolderName: "Maria",
    cardNumber: "1452 2659 8546 4580",
    cardExpDate: new Date("2026/10/30"),
    cardCvv: "321"
}

export const CardMockDTO2Fail: CardDTO = {
    cardHolderId: "987",
    cardHolderName: "Maria",
    cardNumber: "1452 2659 8546 4580",
    cardExpDate: new Date("2026/10/30"),
    cardCvv: "321"
} 