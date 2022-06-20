//-- Exercicio #3

type Movie = {
    nome: string,
    ano: number,
    genero: string,
    pontuacao?: number
}

enum Genero {
    acao = "ação",
    drama = "drama",
    comedia = "comédia",
    romance = "romance",
    terror = "terror"
}

const filme: Movie = {
    nome: "A origem",
    ano: 2011,
    genero: Genero.acao
}

const mostraFilme = (movie: Movie): Movie => {
    return { ...movie, pontuacao: 7 }
}

console.log(mostraFilme(filme))

