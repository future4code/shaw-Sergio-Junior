//-- Exercicio #5
type Users = {
    name: string,
    email: string,
    role: string
}

enum Role {
    admin = "admin",
    user = "user"
}

const user: Users[] =
    [
        { name: "Rogério", email: "roger@email.com", role: Role.user },
        { name: "Ademir", email: "ademir@email.com", role: Role.admin },
        { name: "Aline", email: "aline@email.com", role: Role.user },
        { name: "Jéssica", email: "jessica@email.com", role: Role.user },
        { name: "Adilson", email: "adilson@email.com", role: Role.user },
        { name: "Carina", email: "carina@email.com", role: Role.admin }
    ]

function email(arrUser: Users[]): string[] {
    const emailUsers = arrUser.filter((user) => {
        if (user.role === Role.admin) {
            return user.email
        }
    }).map((user) => {
        if (user.email) {
            return user.email
        }
    })

    return emailUsers
}

console.log(email(user))