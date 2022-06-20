//-- Exercicio #1 

function infoPessoal(nome: string, nascimento: string): string {
    const arrayMes: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]

    let splitString: string[] = nascimento.split("/")

    let dia: number = Number(splitString[0])
    let mes: string = arrayMes[Number(splitString[1]) - 1]
    let ano: number = Number(splitString[2])

    const info: string = `Olá me chamo ${nome}, nasci no dia ${dia} de ${mes} do ano de ${ano}`

    return info
}

console.log(infoPessoal("Sérgio", "11/11/1995"))