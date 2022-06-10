export type CreateUser = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export type GetUserById = {
    id: string,
    nickname: string
}

export type CreateTask = {
    id: string,
    title: string,
    description: string,
    due_Date: string,
    creator_user_id: string
}
