enum Historia {
    preHistoria = "pré história",
    idadeAntiga = "idade antiga",
    idadeMedia = "idade média",
    idadeModerna = "idade moderna",
    idadeContemporanea = "idade contemporânea"
}

function idadeHistorica(ano: number, acDc: "AC" | "DC") {
    let anoHistorico: string;

    // if (!ano || !acDc) {
    //     return "Erro, digite um parametro válido"
    // }

    if (acDc === "AC") {
        ano = ano * -1
    }

    acDc === null || acDc === undefined ? "DC" : acDc;

    if (ano < -4000) {
        return anoHistorico = `${ano < 0 ? ano * -1 : ano} ${acDc} é ${Historia.preHistoria}!`
    } else if (ano >= -4000 && ano < 476) {
        return anoHistorico = `${ano < 0 ? ano * -1 : ano} ${acDc} é ${Historia.idadeAntiga}!`
    } else if (ano >= 476 && ano < 1453) {
        return anoHistorico = `${ano} ${acDc} é ${Historia.idadeMedia}!`
    } else if (ano >= 1453 && ano < 1789) {
        return anoHistorico = `${ano} ${acDc} é ${Historia.idadeModerna}!`
    } else {
        return anoHistorico = `${ano} ${acDc} é ${Historia.idadeContemporanea}!`
    }
}

console.log(idadeHistorica(2005, "DC"))

