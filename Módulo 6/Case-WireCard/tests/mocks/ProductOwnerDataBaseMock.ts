
export class ProductOwnerDatabaseMock {
    insertProductOwner = async (id: string): Promise<string> => {
        switch (id) {
            case "id_mock":
                return "New productOwner created successfully."
            default:
                return "Internal error."
        }
    }

}