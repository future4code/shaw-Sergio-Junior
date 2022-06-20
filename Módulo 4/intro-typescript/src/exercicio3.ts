function checaAnoBissexto(ano: number): string {
    const cond1: Boolean = ano % 400 === 0
    const cond2: Boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return (cond1 || cond2 ? "é bissexto" : "não é bissexto")
}

console.log(checaAnoBissexto(2020))