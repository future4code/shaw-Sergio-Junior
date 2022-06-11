export type CreateUser = {
    id: string,
    name: string,
    nickname: string,
    email: string
};

export type GetUserBy = {
    id: string,
    nickname: string
};

export type CreateTask = {
    id_task: string,
    title: string,
    description: string,
    due_Date: string,
    creator_user_id: string
};

export type GetTask = {
    id: string,
    title: string,
    description: string,
    due_Date: Date | string,
    creator_user_id: string,
    status: string
};

export type CreateResponsible = {
    task_id: string,
    responsible_user_id: string
};

export type GetResponsibleUserById = {
    "id": string,
    "nickname": string,
};