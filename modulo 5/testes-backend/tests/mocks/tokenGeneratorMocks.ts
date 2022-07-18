import { USER_ROLES } from "../../src/model/User";

export class TokenGeneratorMocks {

  public generate = (): string => {
    return "TOKEN_MOCK"
  };

  public verify() {
    const result = { id: "PAYLOAD_MOCK_ID", role: USER_ROLES.ADMIN || USER_ROLES.NORMAL };
    return result;
  }
}
